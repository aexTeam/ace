import React, { useState, useEffect } from 'react';
import { TabBar } from 'antd-mobile';
import { useLocation, history } from 'umi';
import Header from '@/components/Header/index-mobile';
import Footer from '@/components/Footer/index-mobile';
import styles from './basic-mobile.less';

export default (props: any) => {
  const { pathname } = useLocation()
  const {match} = props;

  let pageClass = ''
  if(pathname === '/mobile') {
    pageClass = styles.pageHome
  } else if(!match.isExact) {
    pageClass = styles.page404
  }

  return (
    <div className={`${styles.page} ${pageClass}`}>
      <Header/>
      <div>
        {props.children}
      </div>
      <Footer/>
    </div>
  );
};
