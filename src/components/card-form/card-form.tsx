import React, { FC } from 'react';
import styles from './styles.module.scss';

import { useFormContext } from 'react-hook-form';
import { ICardForm } from '../../common/types/card-from.type';

const CardForm: FC<{ closeForm: () => void }> = ({ closeForm }) => {
  const {register, handleSubmit, formState: {errors}} = useFormContext<ICardForm>();

  const onSubmit = (data: ICardForm) => {
    console.log(data);
    closeForm();
  };

  return (
    <form className={styles.formWrapper} onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="holderName">cardholder name</label>
      <input
        placeholder="e.g. Jane Appleseed"
        {...register('holderName', {required: true})}
      />
      <label htmlFor="cardNumber">card number</label>
      <input
        placeholder="e.g. 1234 5678 9123 0000"
        {...register('cardNumber', {required: true})}
      />
      <div className={styles.cardDateCVV}>
        <label>exp. date (mm/yy)</label>
        <div className={styles.cardDate}>
          <input
            placeholder="MM"
            {...register('expireDay', {required: true, min: 0o1, max: 12})}
          />
          <input
            placeholder="YY"
            {...register('expireMonth', {required: true, minLength: 2, maxLength: 2})}
          />
        </div>
        <label>cvc</label>
        <input
          className={styles.cvv}
          placeholder="e.g 123"
          {...register('cvv', {required: true, minLength: 3, maxLength: 3})}
        />
      </div>
      <button type="submit">Confirm</button>
    </form>
  );
};

export { CardForm }
