import React, { FC, useState } from 'react';

import styles from './styles.module.scss';
import cardLogo from '../../assets/images/card-logo.svg';
import { AfterSubmit } from '../after-submit/after-submit';
import { CardForm } from '../card-form/card-form';


const CardPage: FC = () => {
  const [cardNumber, setCardNumber] = useState('0000000000000000');
  const [holderName, setHolderName] = useState('Jane Appleseed');
  const [expireDay, setExpireDay] = useState('00');
  const [expireMonth, setExpireMonth] = useState('00');
  const [cvv, setCvv] = useState('000');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNumber = (e: React.ChangeEvent<HTMLFormElement>) => {
    setCardNumber(e.target.value);
  };
  const handleName = (e: React.ChangeEvent<HTMLFormElement>) => {
    setHolderName(e.target.value);
  };
  const handleExpireDay = (e: React.ChangeEvent<HTMLFormElement>) => {
    setExpireDay(e.target.value);
  };
  const handleExpireMonth = (e: React.ChangeEvent<HTMLFormElement>) => {
    setExpireMonth(e.target.value);
  };
  const handleCvv = (e: React.ChangeEvent<HTMLFormElement>) => {
    setCvv(e.target.value);
  };
  const handleSubmit = () => {
    setIsSubmitted(true);
  };


  return (
    <div className={styles.wrapper}>
      <div className={styles.coloredWrapper}>
        <div className={styles.cardFront}>
          <img src={cardLogo} alt="card logo" className={styles.cardFrontLogo} />
          <div className={styles.cardNumber}>{cardNumber.replace(/(.{4})/g, "$1 ").trim()}</div>
          <div className={styles.cardHolderName}>{holderName}</div>
          <div className={styles.cardExpireDate}>{expireDay}/{expireMonth}</div>
        </div>
        <div className={styles.cardBack}>
          <div className={styles.cardBackCVV}>{cvv}</div>
        </div>
      </div>
      <div className={styles.whiteWrapper}>
        {isSubmitted ? <AfterSubmit /> :
          <CardForm
          handleNumber={handleNumber}
          handleName={handleName}
          handleExpireDay={handleExpireDay}
          handleExpireMonth={handleExpireMonth}
          handleCvv={handleCvv}
          handleSubmit={handleSubmit}
        /> }
      </div>
    </div>

  );
};

export { CardPage }
