import React from 'react';
import { NavLink, setLocale } from 'umi';
import Logo from '@/assets/logo.png';
import ChinaFlag from '@/assets/china.png';
import UkFlag from '@/assets/english.png';
import SearchIcon from '@/assets/search.png';
import styles from './index.less';

export default () => {
  const handleChangeLang = (lang: string) => {
    // setLocale(lang, false)
  };

  return (
    <div className={styles.headerWrapper}>
      <div className={styles.flagWrap}>
        <NavLink exact to="/">
          <img className={styles.logo} src={Logo} alt="" />
        </NavLink>
        <img onClick={() => handleChangeLang('zh-CN')} src={ChinaFlag} alt="" />
        <img onClick={() => handleChangeLang('en-US')} src={UkFlag} alt="" />
      </div>
      <div className={styles.menuWrap}>
        <NavLink exact to="/" activeClassName={styles.currentPage}>
          VISION FOR CHINA <br />
          ENERGY MARKETS
        </NavLink>
        <NavLink exact to="/" activeClassName={styles.currentPage}>
          MANAGEMENT
          <br />
          TEAM
        </NavLink>
        <NavLink exact to="/" activeClassName={styles.currentPage}>
          IBA
        </NavLink>
        <NavLink exact to="/" activeClassName={styles.currentPage}>
          JOIN OUR TEAM
        </NavLink>
        <NavLink exact to="/" activeClassName={styles.currentPage}>
          CONTACT
        </NavLink>
        <img src={SearchIcon} alt="" />
      </div>
    </div>
  );
};
