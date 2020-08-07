import React, { useEffect, useState } from 'react';
import { connect, Dispatch, useIntl } from 'umi';
import { ConnectState } from '@/models/connect';
import HomeArrow from '@/assets/home-arrow.png'
import FeatureIcon1 from '@/assets/feature-icon-1.png'
import FeatureIcon2 from '@/assets/feature-icon-2.png'
import FeatureIcon3 from '@/assets/feature-icon-3.png'
import Team1 from '@/assets/team-1.png'
import Team2 from '@/assets/team-2.png'
import Team3 from '@/assets/team-3.png'
import VisionBg from '@/assets/vision-bg.png'
import Demo from '@/assets/demo.png'
import styles from './index.less';

interface TestProps {
  dispatch: Dispatch;
  loading?: boolean;
}

const Index: React.FC<TestProps> = props => {
  const { dispatch, loading } = props
  const intl = useIntl()

  useEffect(() => {}, []);

  return (
    <div className={styles.homeContent}>
      <div className={styles.part1}>
        <div className={styles.info}>
          <div>
            {/*<img src={Demo} alt=""/>*/}
            {intl.formatMessage({id: 'home.test'})}
          </div>
          AEX is dedicated to support<br/>
          the growth and maturation of<br/>
          China Is rapidly developing<br/>
          energy markets
        </div>
        <div style={{marginTop: '70px', paddingRight: '93px', textAlign: 'right'}}>
          <img src={HomeArrow} alt=""/>
        </div>
      </div>

      <div className={styles.part2}>
        <div className={styles.title}>To achieve this we want to <span className={styles.line}></span></div>
        <div className={styles.inner}>
          <div className={styles.featureItem}>
            <div>
              <img src={FeatureIcon1} alt=""/>
            </div>
            <div>
              what are you nongshalei what are you nongshalei what are you nongshalei what are you nongshalei what are you nongshalei
            </div>
          </div>

          <div className={styles.featureItem}>
            <div>
              <img src={FeatureIcon2} alt=""/>
            </div>
            <div>
              what are you nongshalei what are you nongshalei what are you nongshalei what are you nongshalei what are you nongshalei
            </div>
          </div>

          <div className={styles.featureItem}>
            <div>
              <img src={FeatureIcon3} alt=""/>
            </div>
            <div>
              what are you nongshalei what are you nongshalei what are you nongshalei what are you nongshalei what are you nongshalei
            </div>
          </div>
        </div>
      </div>

      <div className={styles.title}><span className={styles.line}></span>Our Vision for China Energy Markets</div>
      <div className={styles.part3}>
        <img src={VisionBg} alt=""/>
        <div>
          <div style={{marginBottom: '93px'}}>
            In mature power markets, the spot market is embedded in an ecosystem that lets market participants manage risk and run efficient power trading.
          </div>
          <div>
            AEX is committed to help build this ecosystem to contribute to the success of China power markets.
          </div>
        </div>
      </div>

      <div className={`${styles.title} ${styles.left}`}>Team Introduction<span className={styles.line}></span></div>
      <div className={styles.part4}>
        <div style={{paddingLeft: '86px'}}>
          Our team and advisors combine a full range of relevant experience and skills with a strong network that we can leverage to service our customers.
        </div>
        <img src={Team1} alt=""/>
      </div>

      <div className={`${styles.title} ${styles.left}`}><span className={styles.line}></span>Management Team</div>
      <div className={styles.part5}>
        <div>
          <img src={Team2} alt=""/>
        </div>
      </div>

      <div>
        {/*<img src={Demo} alt=""/>*/}
        {intl.formatMessage({id: 'home.test'})}
      </div>
    </div>
  );
};

export default connect(({ global, loading }: ConnectState) => ({
  loading: loading.effects['orders/fetch'],
}))(Index);
