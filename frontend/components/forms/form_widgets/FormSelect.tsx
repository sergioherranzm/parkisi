import tw from 'twin.macro';
import React from 'react';

interface SelectProps {
  options: { value: string; label: string }[];
  name: string;
  label: string;
  onChange?: any;
  onBlur?: any;
  error?: string;
  value: string;
  disabled?: boolean;
}

export const FormSelect = React.forwardRef<HTMLSelectElement, SelectProps>(((
  props,
  ref
) => {
  const {
    options,
    name,
    value,
    label,
    onChange,
    onBlur,
    error,
    disabled = false,
  } = props;

  return (
    <div tw="w-full">
      <label htmlFor={name} tw="p-1 first:font-bold text-primary-400">
        {label}
      </label>
      <select
        ref={ref}
        name={name}
        onChange={(e) => {
          onChange(e.target.value);
        }}
        onBlur={onBlur}
        css={[
          tw`border border-primary-000 text-primary-400 rounded block p-1 outline-none w-full`,
          error && tw`border-red-500`,
          disabled && tw`bg-gray-200 hover:bg-gray-200`,
        ]}
        {...(disabled ? { disabled: true } : {})}
      >
        {options.map((op) => (
          <option
            css={[tw`text-primary-400`]}
            key={op.value}
            value={op.value}
            {...(value === op.value ? { selected: true } : {})}
          >
            {op.label}
          </option>
        ))}
      </select>
      {error && <div tw="text-sm text-red-500">{error}</div>}
    </div>
  );
}) as any);
