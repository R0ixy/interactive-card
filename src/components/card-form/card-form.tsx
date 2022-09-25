import React, { FC } from 'react';
import clsx from  'clsx';
import { useFormContext } from 'react-hook-form';

import { ICardForm } from '../../common/types/card-from.type';

import styles from './styles.module.scss';
import { CustomButton } from '../common/custon-button/custom-button';

const CardForm: FC<{ closeForm: () => void }> = ({ closeForm }) => {
  const { register, handleSubmit, formState:  { errors } } = useFormContext<ICardForm>();

  const onSubmit = (data: ICardForm) => {
    console.log(data);
    closeForm();
  };

  return (
    <form className={styles.formWrapper} onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="holderName">cardholder name</label>
      <input
        className={errors.holderName ? styles.inputError: undefined}
        placeholder="e.g. Jane Appleseed"
        {...register('holderName')}
      />
      <p className={styles.error}>{errors.holderName?.message}</p>
      <label htmlFor="cardNumber">card number</label>
      <input
        className={errors.cardNumber ? styles.inputError: undefined}
        placeholder="e.g. 1234 5678 9123 0000"
        {...register('cardNumber')}
      />
      <p className={styles.error}>{errors.cardNumber?.message}</p>
      <div className={styles.cardDateCVV}>
        <label>exp. date (mm/yy)</label>
        <div className={styles.cardDate}>
          <input
            className={errors.expireMonth ? styles.inputError: undefined}
            placeholder="MM"
            {...register('expireMonth')}
          />
          <input
            className={errors.expireYear ? styles.inputError: undefined}
            placeholder="YY"
            {...register('expireYear')}
          />
        </div>
        <p className={styles.error}>{errors.expireMonth?.message || errors.expireYear?.message}</p>
        <label>cvc</label>
        <input
          className={clsx(styles.cvv, errors.holderName && styles.inputError)}
          placeholder="e.g 123"
          {...register('cvv')}
        />
        <p className={styles.error}>{errors.cvv?.message}</p>
      </div>
      <CustomButton isSubmit={true}>Confirm</CustomButton>
    </form>
  );
};

export { CardForm }
