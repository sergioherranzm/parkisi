import tw from 'twin.macro';
import React from 'react';

interface SelectProps {
  options: { value: string; label: string }[];
  name: string;
  label: string;
  onChange?: any;
  onBlur?: any;
  error?: string;
}

export const FormSelect = React.forwardRef<HTMLSelectElement, SelectProps>(((
  props,
  ref
) => {
  const { options, name, label, onChange, onBlur, error } = props;
  return (
    <div tw="w-full">
      <label htmlFor={name} tw="font-bold">
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
          tw`border border-gray-200 rounded block p-1 outline-none w-full`,
          error && tw`border-red-500`,
        ]}
      >
        {options.map((op) => (
          <option
            css={[tw`p-1 border rounded-lg border-purple-200 transition-all`]}
            key={op.value}
            value={op.value}
          >
            {op.label}
          </option>
        ))}
      </select>
      {error && <div tw="text-sm text-red-500">{error}</div>}
    </div>
  );
}) as any);
