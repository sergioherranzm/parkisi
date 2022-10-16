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
    placeholder?: string;
    disabled?: boolean;
  }
>(((props, ref) => {
  const {
    type = 'text',
    name,
    label,
    value,
    onChange,
    onBlur,
    error,
    placeholder,
    disabled = false,
  } = props;
  return (
    <div tw="w-full">
      <label htmlFor={name} tw="p-1 font-bold text-primary-400">
        {label}
      </label>
      <input
        type={type}
        ref={ref}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        css={[
          tw`border border-primary-000 text-primary-400 rounded block p-1 outline-none w-full`,
          error && tw`border-red-500`,
          disabled && tw`bg-gray-200 hover:bg-gray-200`,
        ]}
        {...(disabled ? { disabled: true } : {})}
      />
      {error && <div tw="text-sm text-red-500">{error}</div>}
    </div>
  );
}) as any);
