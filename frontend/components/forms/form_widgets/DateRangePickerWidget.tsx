import * as React from 'react';
import { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';

export const DateRangePickerWidget: React.FC<{
  field: { onChange: (...args: any[]) => void; value: any };
  fieldState: any;
}> = (props) => {
  const { onChange, value = [null, null] } = props.field;

  const disableReserves = (date) => {
    var d1 = new Date(2022, 9, 18);
    var d2 = new Date(2022, 9, 28);
    var d11 = dayjs(d1);
    var d22 = dayjs(d2);

    //console.log(date.date());
    /*
    if ([d11, d22].includes(date)) {
      console.log(date);
    }
    */
    let result = false;
    if (
      date.year() === d11.year() &&
      date.month() === d11.month() &&
      date.date() === d11.date()
    ) {
      result = true;
    }
    return result;
  };

  return (
    <LocalizationProvider
      dateAdapter={AdapterDayjs}
      adapterLocale=""
      localeText={{ start: 'Start Day', end: 'End Day' }}
    >
      <DateRangePicker
        disablePast
        value={value}
        onChange={(newValue) => {
          onChange(newValue);
          //console.log(newValue); ///////////////////////
        }}
        shouldDisableDate={disableReserves}
        renderInput={(startProps, endProps) => (
          <React.Fragment>
            <TextField {...startProps} />
            <Box sx={{ mx: 2 }}> to </Box>
            <TextField {...endProps} />
          </React.Fragment>
        )}
      />
    </LocalizationProvider>
  );
};
