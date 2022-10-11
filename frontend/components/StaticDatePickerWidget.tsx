import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';

export const StaticDatePickerWidget = (props) => {
  const { reserves } = props;

  console.log('Reserves:', reserves);

  const disableReserves = (date) => {
    const reservesArr = [dayjs('2022-10-18'), dayjs('2022-10-28')];

    for (let i = 0; i < reservesArr.length; i++) {
      if (
        date.year() === reservesArr[i].year() &&
        date.month() === reservesArr[i].month() &&
        date.date() === reservesArr[i].date()
      ) {
        return true;
      }
    }
    return false;
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StaticDatePicker
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
