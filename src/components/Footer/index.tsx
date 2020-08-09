import React from 'react';
import styles from './index.less';

export default () => {
  return (
    <div className={styles.footerWrapper}>
      <div>
        <span>CONTACT US</span>
        <span style={{ margin: '0 30px' }}>Email</span>
        <label>info@aexmarkets.com</label>
      </div>
      <div>2020 ©. AEX. All Rights Reserved | Privacy policy</div>
    </div>
  );
};
