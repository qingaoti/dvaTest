import React from 'react';
import { connect } from 'dva';

const Count = ({ dispatch,count }) => {
  return (
    <div>
      <h2>Test of Count</h2>
      <h4>{count}</h4>
      <button onClick={() => { dispatch({type: 'count/add'})}}>+</button>
      <button onClick={() => { dispatch({type: 'count/minus'})}}>-</button>
    </div>
  );
};

Count.propTypes = {
};

export default connect(({ count }) => ({
  count,
}))(Count);
