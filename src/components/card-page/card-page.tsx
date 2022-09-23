import React, { FC } from 'react';

import styles from './styles.module.scss';


const CardPage: FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.coloredWrapper}></div>
      <div className={styles.whiteWrapper}>
        <div className={styles.formWrapper}>
          <label htmlFor="name">cardholder name</label>
          <input name="name" placeholder="e.g. Jane Appleseed" />
          <label htmlFor="number">card number</label>
          <input name="number" placeholder="e.g. 1234 5678 9123 0000"/>
          <div className={styles.cardDateCVC}>
            <label>exp. date (mm/yy)</label>
            <div className={styles.cardDate}>
              <input placeholder="MM" />
              <input placeholder="YY" />
            </div>
            <label>cvc</label>
            <input className={styles.cvc} placeholder="e.g 123" />
          </div>
          <button>Confirm</button>
        </div>
      </div>
    </div>

  );
};

export { CardPage }
