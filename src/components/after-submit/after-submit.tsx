import React, { FC } from 'react';

import styles from './styles.module.scss';
import { CustomButton } from '../common/custon-button/custom-button';

const AfterSubmit: FC = () => {
  return(
    <div className={styles.afterSubmit}>
      <div className={styles.circle}>&#10004;</div>
      <span>Thank you!</span>
      <p>We've added your card details</p>
      <CustomButton>Continue</CustomButton>
    </div>
  );
};

export { AfterSubmit }
