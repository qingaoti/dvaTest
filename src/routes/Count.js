import React from 'react';
import { connect } from 'dva';
import styles from './count.css';

const Count = ({ count,dispatch }) => {
  return (
    <div className={styles.normal}>
      <h2 className={styles.record}>Test of Count Highest Record: {count.record}</h2>
      <h4 className={styles.current}>{count.current}</h4>
      <div className={styles.button}>
        <button onClick={() => { dispatch({type: 'count/add'}); }}>+</button>
      </div>
    </div>
  );
};

Count.propTypes = {
};

export default connect(({ count }) => ({
  count,
}))(Count);
