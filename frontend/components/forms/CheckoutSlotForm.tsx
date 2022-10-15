import { useForm, Controller, FormProvider } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { DateRangePickerWidget } from './form_widgets/DateRangePickerWidget';
import useSWR from 'swr';
import { useUser } from '@auth0/nextjs-auth0';
import {
  FRONT_URL,
  MAILER_URL,
  PAYMENTS_URL,
  PROXY_URL,
} from '../../lib/config';
import axios, { AxiosResponse } from 'axios';
import { IReserve } from '../../types/IReserve';

export const CheckoutSlotForm = (props) => {
  const { vehicleId, slotId } = props;

  const router = useRouter();
  const methods = useForm({
    mode: 'onSubmit',
  });

  const { user } = useUser();
  const { data: userProfile } = useSWR(
    user?.sub ? `/userProfile/${user?.sub}` : null
  );

  const { data: slot } = useSWR(slotId ? `/slot/detail/${slotId}` : null);

  const { data: userProfileOwner } = useSWR(
    slot?.parking?.owner ? `/userProfile/detail/${slot?.parking?.owner}` : null
  );

  const [reserveData, setReserveData] = useState<IReserve>({});
  const [dateError, setDateError] = useState<string>('');

  const reservesPeriods = slot?.reserves
    ?.map((reserve) => reserve.period)
    .flat();

  const goCheckout = async (slotId, userId, vehicleId, period) => {
    //send mail to user
    let mailType = 'reserveCreation';
    let mailTo = userProfile.email;
    const address = slot?.parking?.address;
    const periodStr = `from ${period[0]} to ${period[period.length - 1]} (${
      period.length
    } days)`;
    let hyperlink = `${FRONT_URL}reserve/list`;
    let url_mail = `${MAILER_URL}/sendMail?mailType=${mailType}&mailTo=${mailTo}&address=${address}&period=${periodStr}&hyperlink=${hyperlink}`;
    let sendMailResponse: AxiosResponse = await axios.get(url_mail);
    //send mail to owner
    mailType = 'reserveCreationOwner';
    mailTo = userProfileOwner?.email;
    const identification = slot?.identification;
    hyperlink = `${FRONT_URL}slot/${slot?._id}`;
    url_mail = `${MAILER_URL}/sendMail?mailType=${mailType}&mailTo=${mailTo}&address=${address}&period=${periodStr}&identification=${identification}&hyperlink=${hyperlink}`;
    sendMailResponse = await axios.get(url_mail);
    //redirection
    router.push(
      `${PAYMENTS_URL}/buy?slotId=${slotId}&userId=${userId}&vehicleId=${vehicleId}&periodString=${period.join(
        ';'
      )}`
    );
  };
  {
    /* eslint-disable */
  }
  useEffect(() => {
    if (reserveData.owner && dateError === '') {
      goCheckout(
        reserveData.slot,
        reserveData.owner,
        reserveData.vehicle,
        reserveData.period
      );
    }
  }, [reserveData, dateError]);
  {
    /* eslint-enable */
  }
  const validatePeriod = (dateArr) => {
    for (let i = 0; i < dateArr.length; i++) {
      if (reservesPeriods?.includes(dateArr[i])) {
        return true;
      }
    }
    return false;
  };

  const datePeriodToStrings = (dateArr) => {
    let resultArr = [];
    let currentDay = dateArr[0];
    const endDay = dateArr[1].add(1, 'day');

    do {
      resultArr.push(
        currentDay.date() +
          '/' +
          currentDay.add(1, 'month').month() +
          '/' +
          currentDay.year()
      );
      currentDay = currentDay.add(1, 'day');
    } while (!currentDay.isSame(endDay, 'day'));

    return resultArr;
  };

  const handle_submit = methods.handleSubmit(async (data) => {
    let period = [];
    let formattedPeriod = [];

    if (data.period) {
      period = data.period.filter((e) => e != null);
      setDateError('');

      if (period.length === 2) {
        formattedPeriod = datePeriodToStrings(data.period);
        setDateError('');

        if (!validatePeriod(formattedPeriod)) {
          setDateError('');
          setReserveData({
            period: formattedPeriod,
            slot: slot._id,
            owner: userProfile._id,
            vehicle: vehicleId,
          });
        } else {
          setDateError('reserves');
        }
      } else {
        setDateError('semiempty');
      }
    } else {
      setDateError('empty');
    }
  });

  return (
    <>
      <FormProvider {...methods}>
        <div tw="">
          <div tw="my-1">
            <Controller
              name="period"
              control={methods.control}
              render={(props) => {
                return (
                  <DateRangePickerWidget
                    {...props}
                    reserves={reservesPeriods}
                  />
                );
              }}
            />
            {dateError === 'empty' && (
              <p tw="text-red-600">Selected date range is empty</p>
            )}
            {dateError === 'semiempty' && (
              <p tw="text-red-600">
                Selected date range is mising the start/end date
              </p>
            )}
            {dateError === 'reserves' && (
              <p tw="text-red-600">
                Selected date range contains unavailable days
              </p>
            )}
          </div>
          <button tw="border bg-green-200 p-1" onClick={() => handle_submit()}>
            Checkout reserve
          </button>
        </div>
      </FormProvider>
    </>
  );
};
