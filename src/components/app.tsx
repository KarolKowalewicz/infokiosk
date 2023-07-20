import React from "react";
import Routes from "../routes"
import styles from './app.module.scss';

const App = () => {
  return (
    <div className={styles.root}>
      <Routes />
    </div>
  );
};

export default App;