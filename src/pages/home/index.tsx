import React, { useEffect, useState } from 'react';
import { connect, Dispatch, useIntl } from 'umi';
import { ConnectState } from '@/models/connect';
import HomeArrow from '@/assets/home-arrow.png';
import FeatureIcon1 from '@/assets/feature-icon-1.png';
import FeatureIcon2 from '@/assets/feature-icon-2.png';
import FeatureIcon3 from '@/assets/feature-icon-3.png';
import FeatureContent1 from '@/assets/feature-content-1.png';
import FeatureContent2 from '@/assets/feature-content-2.png';
import FeatureContent3 from '@/assets/feature-content-3.png';
import Team1 from '@/assets/team-1.png';
import Team2 from '@/assets/team-2.png';
import Team3 from '@/assets/team-3.png';
import VisionImg from '@/assets/vision.png';
import PositionImg1 from '@/assets/position-1.png';
import PositionImg2 from '@/assets/position-2.png';
import PositionImg3 from '@/assets/position-3.png';
import UserIcon from '@/assets/user.png';
import PositionSeparator from '@/assets/position-separator.png';
import CalendarIcon from '@/assets/calendar.png';
import Line1 from '@/assets/line-1.png';
import Line2 from '@/assets/line-2.png';
import Line3 from '@/assets/line-3.png';
import Line4 from '@/assets/line-4.png';
import styles from './index.less';

interface TestProps {
  dispatch: Dispatch;
  loading?: boolean;
}

const Index: React.FC<TestProps> = props => {
  const { dispatch, loading } = props;
  const intl = useIntl();

  useEffect(() => {}, []);

  return (
    <div className={styles.homeContent}>
      <div className={styles.part1}>
        <div className={styles.info}>
          AEX IS DEDICATED TO SUPPORT
          <br />
          THE GROWTH AND MATURATION OF
          <br />
          CHINA IS RAPIDLY DEVELOPING
          <br />
          ENERGY MARKETS
        </div>
        <div className={styles.arrowWrap}>
          <img src={HomeArrow} alt="" />
          <img src={Line1} alt="" />
          <img src={Line2} alt="" />
          <img src={Line3} alt="" />
          <img src={Line4} alt="" />
        </div>
      </div>

      <div className={styles.part2}>
        <div className={styles.title} style={{ paddingLeft: '70px' }}>
          To achieve this we want to <span className={styles.line}></span>
        </div>
        <div className={styles.inner}>
          <div className={styles.featureItem}>
            <div>
              <img src={FeatureIcon1} alt="" />
            </div>
            <div>
              <img src={FeatureContent1} alt=""/>
            </div>
          </div>

          <div className={styles.featureItem}>
            <div>
              <img src={FeatureIcon2} alt="" />
            </div>
            <div>
              <img src={FeatureContent2} alt=""/>
            </div>
          </div>

          <div className={styles.featureItem}>
            <div>
              <img src={FeatureIcon3} alt="" />
            </div>
            <div>
              <img src={FeatureContent3} alt=""/>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.title}>
        <span className={styles.line}></span>Our Vision for China Energy Markets
      </div>
      <div className={styles.part3}>
        <div>
          <img src={VisionImg} alt="" />
        </div>
        <div>
          <div style={{ marginBottom: '90px' }}>
            In mature emissions and power markets, the spot market is embedded in an ecosystem that lets market participants manage risk and run efficient trading operations.
          </div>
          <div>
            AEX is committed to help build this ecosystem to contribute to the success of China emissions and power markets.
          </div>
        </div>
      </div>

      <div className={`${styles.title} ${styles.left}`}>
        Team Introduction<span className={styles.line}></span>
      </div>
      <div className={styles.part4}>
        <div style={{ paddingLeft: '86px' }}>
          Our team and advisors combine a full range of relevant experience and
          skills with a strong network that we can leverage to service our
          customers.
        </div>
        <img src={Team1} alt="" />
      </div>

      <div className={`${styles.title}`} style={{ paddingBottom: '58px' }}>
        <span className={styles.line}></span>Management Team
      </div>
      <div className={styles.part5} style={{ marginBottom: '35px' }}>
        <div>
          <img src={Team2} alt="" />
          <div>
            Jeff Huang / 黄杰夫 <br />
            Founder and CEO
          </div>
        </div>
        <ul>
          <li>
            Former Managing Director Greater China for international commodity
            exchange 2010-2016, VP Asia for Chicago Climate Exchange (CCX)
          </li>
          <li>
            10+ years experience in cross-border M&A and Joint Venture Tianjin
            Climate Exchange (CCX & CNPC/PetroChina), Citic & Calyon (SocGen)
            futures brokerage joint venture, SunGard Fintech acquisition
          </li>
          <li>Former Chief Advisor for Chongqing Gas Exchange</li>
          <li>
            Well-known expert in China energy and CO2 markets, frequent speaker
            and lecturer in conferences and in universities, regular presence on
            <a href="http://opinion.caixin.com/huangjiefu_mjxx/" target="_blank">Caixin opinion, Weibo</a>
          </li>
        </ul>
      </div>

      <div className={styles.part5}>
        <ul style={{ paddingTop: '20px' }}>
          <li>
            Former spot power trader and asset manager for Swiss generator
            (nuclear and hydro) and supplier (direct retail, resellers,
            industrial consumers)
          </li>
          <li>
            Consultant in energy industry: trading, risk management, processes
          </li>
          <li>Senior consultant in data analysis and visualization</li>
          <li>
            Former derivatives trader for Credit Suisse Investment Banking
          </li>
          <li>
            Lived and worked in Shanghai and Singapore for 5 years, speaks
            fluent Chinese
          </li>
          <li>
            <a href="https://www.linkedin.com/in/paola-valinotti/" target="_blank">LinkedIn</a>
          </li>
        </ul>
        <div style={{ padding: '0px 55px 0px 10px' }}>
          <img src={Team3} alt="" />
          <div>Jonas Nart / 纳杰安 -</div>
        </div>
      </div>
      <div className={styles.nameLine}>
        <span>
          Founding Partner VP Power Markets <br /> and Data Analytics
        </span>
      </div>

      <div className={`${styles.title} ${styles.left}`}>
        Board of International Advisors<span className={styles.line}></span>
      </div>
      <div className={styles.part6}>
        <ul style={{ paddingTop: '0px' }}>
          <li>
            Richard L. Sandor, Chairman
            <div>
              Founder & CEO of American Financial Exchange (AFX), founder of
              Chicago Climate Exchange; former chief economist at CBOT;
              distinguished professor, lecturer, and book author on topics of
              financial innovation and environmental markets.
            </div>
          </li>
          <li>
            Ming Ge 葛明
            <div>
              Former chairman of Ernst & Young Huaming (China), current member
              of board of directors at Ping An Group
            </div>
          </li>
          <li>
            Ronald Oppenheimer
            <div>
              Former general counsel for Vitol Group, Merrill Lynch, NYMEX; board/committee member for CFTC, ICE, NFA
            </div>
          </li>
          <li>
            Guojing Tang
            <div>
              CEO at Huatai Great Wall Capital (Shanghai), former commodity
              trader (US power, gas, oil) for Morgan Stanley, RBS, British Gas,
              Lehman
            </div>
          </li>
          <li>
            Thomas Reithofer
            <div>
              Head of energy division & member of executive board at CKW (Swiss
              utility), chairman for supplier, board member for hydro generators
            </div>
          </li>
        </ul>
      </div>

      <div className={styles.careerTitle}>
        <span>Career</span>
      </div>
      <div className={styles.careerContent}>
        We are looking for candidates with entrepreneurial mindset to join our
        international team in <br />
        Hong Kong and Mainland China. Please send your application to{' '}
        <a href="">recruiting@aexmarkets.com.</a>
      </div>

      <div className={styles.positionsTitle}>Open Positions:</div>

      <div className={styles.positionsWrap}>
        <div>
          <img src={PositionImg1} alt="" />
          <div className={styles.brief}>
            Content Writer with <br />
            Social Media Experience - <br />
            Hong Kong or Mainland China
          </div>
          <div className={styles.date}>
            <img src={UserIcon} alt="" />
            <span>HR</span>
            <img src={PositionSeparator} alt="" />
            <img src={CalendarIcon} alt="" />
            <span>29 MAY 2020</span>
            <img src={PositionSeparator} alt="" />
            <span>2</span>
          </div>
        </div>

        <div style={{ margin: '0 54px' }}>
          <img src={PositionImg2} alt="" />
          <div className={styles.brief}>
            Junior Data Analyst -<br />
            Hong Kong or Mainland China
          </div>
          <div className={styles.date}>
            <img src={UserIcon} alt="" />
            <span>HR</span>
            <img src={PositionSeparator} alt="" />
            <img src={CalendarIcon} alt="" />
            <span>29 MAY 2020</span>
            <img src={PositionSeparator} alt="" />
            <span>2</span>
          </div>
        </div>

        <div>
          <img src={PositionImg3} alt="" />
          <div className={styles.brief}>Executive Assistant - Hong Kong</div>
          <div className={styles.date}>
            <img src={UserIcon} alt="" />
            <span>HR</span>
            <img src={PositionSeparator} alt="" />
            <img src={CalendarIcon} alt="" />
            <span>29 MAY 2020</span>
            <img src={PositionSeparator} alt="" />
            <span>2</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(({ global, loading }: ConnectState) => ({
  loading: loading.effects['orders/fetch'],
}))(Index);
