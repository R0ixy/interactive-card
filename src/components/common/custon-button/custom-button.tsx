import React, { FC, ReactNode } from 'react';
import styles from './styles.module.scss';
import clsx from 'clsx';

const CustomButton: FC<{ children: ReactNode; className?: string, isSubmit?: boolean  }> = (
  {children, className, isSubmit = false}
) => {
  return (
    <button
      className={clsx(styles.button, className)}
      type={isSubmit ? "submit" : "button"}
    >
      {children}
    </button>
  );
};

export { CustomButton }
