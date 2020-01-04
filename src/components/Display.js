import React, { useContext } from 'react';
import { NumberContext } from './NumberProvider';
import { DisplayStyles } from './styles/Styles';

const Display = () => {
  const { number, storedNumber, functionType } = useContext(NumberContext);
  return (
    <DisplayStyles >
      <h2 className={storedNumber && storedNumber.length > 10 ? 'long-main-display' : undefined}>
        {!number.length && !storedNumber ? '0' : number || storedNumber}
      </h2>
      <p className={storedNumber && storedNumber.length > 10 ? 'long-stored-display' : undefined}>
        {!storedNumber ? null : `${storedNumber} ${functionType} ${number}`}
      </p>
    </DisplayStyles>
  );
};

export default Display;
