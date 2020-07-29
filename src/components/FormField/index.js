import React from "react";

import * as S from './style';

function FormField({ label, type, name, value, onChange }) {
  return (
    <div>
      <label style={S.FormField}>
        {label}: 
        <input
          type={type}
          value={value}
          name={name}
          onChange={onChange}
        />
      </label>
    </div>
  )
}

export default FormField;