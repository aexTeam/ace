import React from 'react';
import { NavLink } from 'umi';
import Logo from '@/assets/logo.png';
import ChinaFlag from '@/assets/china.png';
import UkFlag from '@/assets/english.png';
import SearchIcon from '@/assets/search.png';
import styles from './index.less';

export default () => {
  const handleChangeLang = (lang: string) => {
    // setLocale(lang, false)
  };

  const handleGoPosition = (y: number) => {
    window.scrollTo({
      top: y,
      behavior: "smooth"
    })
  }

  return (
    <div className={styles.headerWrapper}>
      <div className={styles.flagWrap}>
        <a onClick={() => handleGoPosition(0)}>
          <img className={styles.logo} src={Logo} alt="" />
        </a>
        {/*<img onClick={() => handleChangeLang('zh-CN')} src={ChinaFlag} alt="" />*/}
        {/*<img onClick={() => handleChangeLang('en-US')} src={UkFlag} alt="" />*/}
      </div>
      <div className={styles.menuWrap}>
        <a onClick={() => handleGoPosition(1520)}>
          Vision for China<br />
          Energy Markets
        </a>
        <a onClick={() => handleGoPosition(2150)}>
          Team
        </a>
        {/*<a onClick={() => handleGoPosition(3950)}>*/}
        {/*  IBA*/}
        {/*</a>*/}
        <a onClick={() => handleGoPosition(4600)}>
          Join AEX
        </a>
        <a onClick={() => handleGoPosition(6000)}>
          Contact
        </a>
        {/*<img src={SearchIcon} alt="" />*/}
      </div>
    </div>
  );
};
