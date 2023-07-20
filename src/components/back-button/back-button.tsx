import React from "react";
import { useHistory } from "react-router";
import styles from './back-button.module.scss';

const ButtonBack = () => {
  const history = useHistory();
  const onBack = () => history.push('/');
  return (
    <button className={styles.root} type="button" onClick={onBack}>{'<'}</button>
  )
};

export default ButtonBack;