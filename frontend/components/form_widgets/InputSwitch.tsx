import React from 'react';
//import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

export const InputSwitch: React.FC<{
  name: string;
  label: string;
  value?: boolean;
  onChange?: (m: boolean) => void;
}> = ({ name, label, value, onChange }) => {
  return (
    <FormControlLabel
      control={
        <Switch
          name={name}
          checked={value}
          onChange={(e) => onChange(e.currentTarget.checked)}
        />
      }
      label={label}
    />
  );
};
