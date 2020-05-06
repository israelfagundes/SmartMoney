import React from 'react';

import InputMoney from '../../../Components/Core/InputMoney';

const NewEntryInput = ({value, onChangeDebit, onChangeValue, isValid}) => {
  return (
    <InputMoney
      value={value}
      onChangeDebit={onChangeDebit}
      onChangeValue={onChangeValue}
      isValid={isValid}
    />
  );
};

export default NewEntryInput;
