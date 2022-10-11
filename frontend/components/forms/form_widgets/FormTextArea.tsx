import tw from 'twin.macro';
import React from 'react';

export const FormTextarea = React.forwardRef<
  HTMLTextAreaElement,
  {
    name: string;
    label: string;
    value?: string;
    onChange?: any;
    onBlur?: any;
    error?: string;
  }
>(((props, ref) => {
  const { name, label, value, onChange, onBlur, error } = props;
  return (
    <div>
      <label htmlFor={name} tw="font-bold">
        {label}
      </label>
      <textarea
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
