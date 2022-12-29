import React from 'react';
import style from '../styles/CasesTitle.module.scss';

export default function CasesTitle() {
  return (
    <h1 className={style.title}>
      Заголовок<span className={style.title__counter}>(232)</span>
    </h1>
  );
}
