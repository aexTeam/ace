import React from 'react';
import styles from './index-mobile.less';

export default () => {
  return (
    <div className={styles.footerWrapper} id="contact">
      <div>
        <span>CONTACT US:</span>
        <label> info@aexmarkets.com</label>
      </div>
      <div>2020 ©. AEX. All Rights Reserved | Privacy policy</div>
    </div>
  );
};
