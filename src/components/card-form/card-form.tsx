import React, { FC } from 'react';
import styles from './styles.module.scss';

interface ICardForm {
  handleNumber: React.ChangeEventHandler<any>;
  handleName: React.ChangeEventHandler<any>;
  handleExpireDay: React.ChangeEventHandler<any>;
  handleExpireMonth: React.ChangeEventHandler<any>;
  handleCvv: React.ChangeEventHandler<any>;
  handleSubmit: React.MouseEventHandler<any>;
}

const CardForm: FC<ICardForm> = (
  {
    handleName,
    handleNumber,
    handleExpireDay,
    handleExpireMonth,
    handleCvv,
    handleSubmit
  }
) => {

  return (
    <div className={styles.formWrapper}>
      <label htmlFor="name">cardholder name</label>
      <input
        name="name"
        placeholder="e.g. Jane Appleseed"
        onChange={handleName}
      />
      <label htmlFor="number">card number</label>
      <input
        name="number"
        placeholder="e.g. 1234 5678 9123 0000"
        onChange={handleNumber}
      />
      <div className={styles.cardDateCVV}>
        <label>exp. date (mm/yy)</label>
        <div className={styles.cardDate}>
          <input placeholder="MM" onChange={handleExpireDay}/>
          <input placeholder="YY" onChange={handleExpireMonth}/>
        </div>
        <label>cvc</label>
        <input
          className={styles.cvv}
          placeholder="e.g 123"
          onChange={handleCvv}
        />
      </div>
      <button onClick={handleSubmit}>Confirm</button>
    </div>
  );
};

export { CardForm }
