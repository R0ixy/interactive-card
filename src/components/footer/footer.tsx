import { FC } from 'react';

import styles from './styles.module.scss';

const Footer: FC = () => {
  return (
    <div className={styles.attribution}>
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
      Coded by <a href="https://github.com/r0ixy">R0ixy</a>.
    </div>
  );
};

export { Footer }
