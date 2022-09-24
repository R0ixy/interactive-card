import React, { FC } from 'react';

import styles from './styles.module.scss';

const AfterSubmit: FC = () => {
  return(
    <div className={styles.afterSubmit}>
      <div className={styles.circle}>&#10004;</div>
      <span>Thank you!</span>
      <p>We've added your card details</p>
      <button className={styles.button}>Continue</button>
    </div>
  );
};

export { AfterSubmit }
