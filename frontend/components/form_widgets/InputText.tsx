import React from 'react';
import TextField from '@mui/material/TextField';

export const InputText: React.FC<{
  name: string;
  label: string;
  value?: string;
  onChange?: (m: string) => void;
}> = ({ name, label, value, onChange }) => {
  return (
    <TextField
      id={name}
      label={label}
      value={value}
      onChange={(e) => onChange(e.currentTarget.value)}
      variant="outlined"
      fullWidth
    />
  );
};
