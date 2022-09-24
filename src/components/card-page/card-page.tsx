import React, { FC, useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import cardLogo from '../../assets/images/card-logo.svg';
import { AfterSubmit } from '../after-submit/after-submit';
import { CardForm } from '../card-form/card-form';
import { ICardForm } from '../../common/types/card-from.type';

import styles from './styles.module.scss';

const schema = yup.object({
  holderName: yup.string().required('Can\'t be blank').matches(
    /^\s*([a-zA-Z]+\s)*[a-zA-Z]*\s*$/,
    'Full name must contain only latin characters',
  ).trim(),
  cardNumber: yup.string().required('Can\'t be blank').matches(/^\d{4}\d{4}\d{4}\d{4}$/, 'Please enter a valid card number'),
  expireMonth: yup.string().required('Can\'t be blank').matches(/^0[1-9]|1[0-2]$/, 'Please enter a valid month'),
  expireYear: yup.string().required('Can\'t be blank').matches(/^\d{2}$/, 'Please enter a valid year'),
  cvv: yup.string().required('Can\'t be blank').matches(/^\d{3}$/, 'Please enter a valid cvv'),
}).required();

const CardPage: FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const methods = useForm<ICardForm>({
    resolver: yupResolver(schema),
  });

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
            methods.watch('expireMonth') ? methods.watch('expireMonth') : '00'
          }/{
            methods.watch('expireYear') ? methods.watch('expireYear') : '00'
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
