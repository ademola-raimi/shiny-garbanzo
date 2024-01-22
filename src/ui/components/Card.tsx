import React, { memo } from 'react';
import { Typography } from '@mui/material';

import styles from '../../styles/Home.module.css';

interface ICard {
  title: string;
  text: string;
}

function Card({ title, text }: ICard) {
  return (
    <a href="#" className={styles.card}>
      <Typography variant="h2" component="h2">
        {title}
      </Typography>
      <p></p>
      <Typography variant="subtitle2">{text}</Typography>
    </a>
  );
}

export default memo(Card);
