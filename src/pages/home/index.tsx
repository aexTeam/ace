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
import VisionImg from '@/assets/vision.png'
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
        <div>
          <img src={VisionImg} alt=""/>
        </div>
        <div>
          <div style={{marginBottom: '90px'}}>
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

      <div className={`${styles.title}`} style={{paddingBottom: '58px'}}><span className={styles.line}></span>Management Team</div>
      <div className={styles.part5} style={{marginBottom: '35px'}}>
        <div>
          <img src={Team2} alt=""/>
          <div>
            Jeff Huang / 黄杰夫 <br/>Founder and CEO
          </div>
        </div>
        <ul>
          <li>
            Former Managing Director Greater China for international commodity exchange 2010-2016, VP Asia for Chicago Climate Exchange (CCX)
          </li>
          <li>
            10+ years experience in cross-border M&A and Joint Venture
            Tianjin Climate Exchange (CCX & CNPC/PetroChina), Citic & Calyon (SocGen) futures brokerage
            joint venture, SunGard Fintech acquisition
          </li>
          <li>
            Former Chief Advisor for Chongqing Gas Exchange
          </li>
          <li>
            Well-known expert in China energy and CO2 markets, frequent speaker and
            lecturer in conferences and in universities, regular presence on
            <a href="">Caixin opinion, Weibo</a>
          </li>
        </ul>
      </div>

      <div className={styles.part5}>
        <ul style={{paddingTop: '20px'}}>
          <li>
            Former spot power trader and asset manager for Swiss generator (nuclear and hydro) and
            supplier (direct retail, resellers, industrial consumers)
          </li>
          <li>
            Consultant in energy industry: trading, risk management, processes
          </li>
          <li>
            Senior consultant in data analysis and visualization
          </li>
          <li>
            Former derivatives trader for Credit Suisse Investment Banking
          </li>
          <li>
            Lived and worked in Shanghai and Singapore for 5 years, speaks fluent Chinese
          </li>
          <li>
            <a href="">LinkedIn</a>
          </li>
        </ul>
        <div style={{padding: '0px 55px 0px 10px'}}>
          <img src={Team3} alt=""/>
          <div>
            Jonas Nart / 纳杰安 -
          </div>
        </div>
      </div>
      <div className={styles.nameLine}>
        <span>Founding Partner VP Power Markets <br/> and Data Analytics</span>
      </div>

      <div className={`${styles.title} ${styles.left}`}>Board of International Advisors<span className={styles.line}></span></div>
      <div className={styles.part6}>
        <ul style={{paddingTop: '0px'}}>
          <li>
            Richard L. Sandor, Chairman
            <div>
              Founder & CEO of American Financial Exchange (AFX), founder of Chicago Climate Exchange; former chief economist at
              CBOT; distinguished professor, lecturer, and book author on topics of financial innovation and environmental markets.
            </div>
          </li>
          <li>
            Ming Ge 葛明
            <div>
              Former chairman of Ernst & Young Huaming (China), current member of board of directors at Ping An Group
            </div>
          </li>
          <li>
            Guojing Tang
            <div>
              CEO at Huatai Great Wall Capital (Shanghai), former commodity trader (US power, gas, oil) for Morgan Stanley, RBS, British
              Gas, Lehman
            </div>
          </li>
          <li>
            Thomas Reithofer
            <div>
              Head of energy division & member of executive board at CKW (Swiss utility), chairman for supplier, board member for hydro
              generators
            </div>
          </li>
        </ul>
      </div>

      <div className={styles.careerTitle}>Career</div>


    </div>
  );
};

export default connect(({ global, loading }: ConnectState) => ({
  loading: loading.effects['orders/fetch'],
}))(Index);
