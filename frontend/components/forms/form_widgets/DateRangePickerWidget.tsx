import * as React from 'react';
import 'dayjs/locale/fr';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';

export const DateRangePickerWidget: React.FC<{
  field: { onChange: (...args: any[]) => void; value: any };
  fieldState: any;
  reserves: string[];
}> = (props) => {
  const { onChange, value = [null, null] } = props.field;
  const { reserves } = props;

  const disableReserves = (date) => {
    const formatDate =
      date.date() + '/' + date.add(1, 'month').month() + '/' + date.year();

    if (reserves?.includes(formatDate)) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <LocalizationProvider
      dateAdapter={AdapterDayjs}
      adapterLocale="fr"
      localeText={{ start: 'Start Day', end: 'End Day' }}
    >
      <DateRangePicker
        disablePast
        value={value}
        onChange={(newValue) => {
          onChange(newValue);
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
