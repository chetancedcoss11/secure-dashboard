// src/components/InputField.tsx

import React from 'react';

interface InputFieldProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  type?: string;
  children?: React.ReactNode;  // Allowing children for customization
}

const InputField = ({ value, onChange, placeholder, type = 'text', children }: InputFieldProps) => {
  return (
    <div className="input-wrapper">
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="input-element"
      />
      {children && <div className="input-children">{children}</div>}  {/* Render children if provided */}
    </div>
  );
};

export default InputField;
