import React from 'react';


const TextInput = ({ input,name,value, label, type, meta: { touched, error } }) =>
    <div>
      <label style={{paddingBottom:10,paddingTop:10}}>
        {label}
      </label>
      <div>
        <input
           className="form-control"
           placeholder={label}
           name={name}
           type={type}
           value={value}
          {...input}
        />
      </div>
    </div>;

export default TextInput;
