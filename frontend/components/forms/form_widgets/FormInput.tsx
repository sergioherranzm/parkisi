import tw from 'twin.macro';
import React from 'react';

export const FormInput = React.forwardRef<
  HTMLInputElement,
  {
    type?: HTMLInputElement['type'];
    name: string;
    label: string;
    value?: string;
    onChange?: any;
    onBlur?: any;
    error?: string;
  }
>(((props, ref) => {
  const { type = 'text', name, label, value, onChange, onBlur, error } = props;
  return (
    <div tw="w-full">
      <label htmlFor={name} tw="font-bold">
        {label}
      </label>
      <input
        type={type}
        ref={ref}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        css={[
          tw`border border-gray-200 rounded block p-1 outline-none w-full`,
          error && tw`border-red-500`,
        ]}
      />
      {error && <div tw="text-sm text-red-500">{error}</div>}
    </div>
  );
}) as any);
