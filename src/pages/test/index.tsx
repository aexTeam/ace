import React, {useEffect, useState} from 'react';
import {Button} from 'antd'
import { history } from 'umi'
import styles from './index.less'
import {ReactComponent as Icon} from '@/assets/404.svg'

const NoFoundPage: React.FC<{}> = () => {
  const [count, setCount] = useState(0)
  useState(() => {

  })

  useEffect(() => {
  }, [])

  function handleClickAsync() {
    setTimeout(function delay() {
      setCount(count => count + 1); // 重点：setCount传入的回调函数用的是最新的 state！！！
    }, 5000);
  }


  return (
    <div className={styles.wrapper}>
      {count}
      <button onClick={() => setCount(count + 1)}>同步加一</button>
      <button onClick={handleClickAsync}>异步加一</button>
    </div>
  )
};

export default NoFoundPage;
