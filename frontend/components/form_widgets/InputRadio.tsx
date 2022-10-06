import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export const InputRadioCourse: React.FC<{
  name: string;
  label: string;
  value?: string;
  onChange?: (m: string) => void;
}> = ({ name, label, value, onChange }) => {
  return (
    <FormControl>
      <FormLabel tw="font-bold text-lg" id={name}>
        {label}
      </FormLabel>
      <RadioGroup
        aria-labelledby={name}
        name={name}
        value={value}
        onChange={(e) => onChange(e.currentTarget.value)}
        defaultValue="webdev"
      >
        <FormControlLabel
          value="webdev"
          control={<Radio size="small" />}
          label="Web Development"
          tw="px-5"
        />
        <FormControlLabel
          value="bigdata"
          control={<Radio size="small" />}
          label="Big Data and Machine Learning"
          tw="px-5"
        />
        <FormControlLabel
          value="kubernetes"
          control={<Radio size="small" />}
          label="Kubernetes"
          tw="px-5"
        />
      </RadioGroup>
    </FormControl>
  );
};
