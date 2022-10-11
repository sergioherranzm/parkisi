import tw from 'twin.macro';
import React from 'react';
import DateRangePickerWidget from './DateRangePickerWidget';

export const FormSelect = React.forwardRef<
  HTMLInputElement,
  {
    name: string;
    label: string;
    onChange?: any;
    onBlur?: any;
    error?: string;
  }
>((props, ref) => {
  const { name, label, onChange, onBlur, error } = props;
  return (
    <div tw="w-full">
      <label htmlFor={name} tw="font-bold">
        {label}
      </label>
      <DateRangePickerWidget
        ref={ref}
        onChange={(e) => {
          onChange(e.target.value);
          console.log(e);
        }}
        onBlur={onBlur}
      />
      {error && <div tw="text-sm text-red-500">{error}</div>}
    </div>
  );
});

FormSelect.displayName = 'Select';
