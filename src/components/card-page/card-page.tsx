import React, { FC, useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';

import cardLogo from '../../assets/images/card-logo.svg';
import { AfterSubmit } from '../after-submit/after-submit';
import { CardForm } from '../card-form/card-form';
import { ICardForm } from '../../common/types/card-from.type';

import styles from './styles.module.scss';

const CardPage: FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const methods = useForm<ICardForm>();

  const closeForm = () => {
    setIsSubmitted(true);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.coloredWrapper}>
        <div className={styles.cardFront}>
          <img src={cardLogo} alt="card logo" className={styles.cardFrontLogo} />
          <div className={styles.cardNumber}>{
            methods.watch('cardNumber') ?
            methods.watch('cardNumber')?.replace(/(.{4})/g, "$1 ").trim() : '0000 0000 0000 0000'
          }</div>
          <div className={styles.cardHolderName}>{
            methods.watch('holderName') ? methods.watch('holderName') : 'Jane Appleseed'
          }</div>
          <div className={styles.cardExpireDate}>{
            methods.watch('expireDay') ? methods.watch('expireDay') : '00'
          }/{
            methods.watch('expireMonth') ? methods.watch('expireMonth') : '00'
          }</div>
        </div>
        <div className={styles.cardBack}>
          <div className={styles.cardBackCVV}>{
            methods.watch('cvv') ? methods.watch('cvv') : '000'
          }</div>
        </div>
      </div>
      <div className={styles.whiteWrapper}>
        {isSubmitted ? <AfterSubmit /> :
          <FormProvider {...methods} >
            <CardForm closeForm={closeForm}/>
          </FormProvider>}
      </div>
    </div>
  );
};

export { CardPage }
