import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';

function IndexPage() {
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>Yay! Welcome to dva!</h1>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li>To get started, edit <code>src/index.js</code> and save to reload.</li>
        <li><a href="https://github.com/dvajs/dva-docs/blob/master/v1/en-us/getting-started.md">Getting Started</a></li>
      </ul>
      <h4 className={styles.title}>测试路由</h4>
      <ul className={styles.list}>
        <li><a href="#/products">go to product </a><code>src/routes/Products.js</code></li>
        <li><a href="#/count">go to count </a><code>src/routes/Count.js</code></li>
        {/*<li><a href="#/user">go to demo CRUD 待完善 </a><code>src/routes/User/UserList</code></li>*/}
        <li><a href="#/demo/List">go to demo List 待完善 </a><code>src/routes/Demo/List</code></li>
      </ul>
      <h4 className={styles.title}>测试模拟的接口</h4>
      <ul className={styles.list}>
        <li><a href="/api/users">get Users List </a></li>
      </ul>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
