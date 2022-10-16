import * as React from 'react';
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import useSWR from 'swr';

export const StaticDatePickerWidget = (props) => {
  const { slotId } = props;

  const { data: slot } = useSWR(`/slot/detail/${slotId}`);
  const reservesPeriods = slot?.reserves
    ?.map((reserve) => reserve.period)
    .flat();

  const disableReserves = (date) => {
    const formatDate =
      date.date() + '/' + date.add(1, 'month').month() + '/' + date.year();

    if (reservesPeriods?.includes(formatDate)) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StaticDatePicker
        disablePast
        readOnly
        displayStaticWrapperAs="desktop"
        openTo="day"
        value={dayjs('')}
        shouldDisableDate={disableReserves}
        onChange={() => {}}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
};
