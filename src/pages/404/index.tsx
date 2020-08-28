import React from 'react';
import {Button} from 'antd'
import { history } from 'umi'
import styles from './index.less'
import {ReactComponent as Icon} from '@/assets/404.svg'

const NoFoundPage: React.FC<{}> = () => (
  <div className={styles.wrapper}>
    <Icon/>
    <div className={styles.content}>
      <div className={styles.title}>404</div>
      <div className={styles.subTitle}>抱歉，你访问的页面不存在</div>
      <div>
        window.devicePixelRatio={window.devicePixelRatio}
      </div>
      <div>
        document.documentElement.clientWidth={document.documentElement.clientWidth}
      </div>
      <div>
        window.innerWidth={window.innerWidth}
      </div>
      <div className={styles.tool}>
        <Button type="primary" onClick={() => history.push('/')}>返回首页</Button>
      </div>
    </div>
  </div>
);

export default NoFoundPage;
