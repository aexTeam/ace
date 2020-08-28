import React, { useEffect, useState } from 'react';
// import { connect, Dispatch, useIntl } from 'umi';
import { connect, Dispatch } from 'umi';
import { ConnectState } from '@/models/connect';
import HomeArrow from '@/assets/home-arrow.png';
import FeatureIcon1 from '@/assets/mobile/feature-icon-1.png';
import FeatureIcon2 from '@/assets/mobile/feature-icon-2.png';
import FeatureIcon3 from '@/assets/mobile/feature-icon-3.png';
import FeatureContent1 from '@/assets/mobile/feature-content-1.png';
import FeatureContent2 from '@/assets/mobile/feature-content-2.png';
import FeatureContent3 from '@/assets/mobile/feature-content-3.png';
import Team1 from '@/assets/mobile/team-1.png';
import Team2 from '@/assets/team-2.jpg';
import Team3 from '@/assets/team-3.png';
import VisionImg from '@/assets/mobile/vision.png';
import PositionImg1 from '@/assets/position-1.png';
import PositionImg2 from '@/assets/position-2.png';
import PositionImg3 from '@/assets/position-3.png';
import UserIcon from '@/assets/user.png';
import PositionSeparator from '@/assets/position-separator.png';
import CalendarIcon from '@/assets/calendar.png';
import Logo from "@/assets/logo.png";
import Line from '@/assets/line.png';
// import Line1 from '@/assets/line-1.png';
// import Line2 from '@/assets/line-2.png';
// import Line3 from '@/assets/line-3.png';
// import Line4 from '@/assets/line-4.png';
// test
import styles from './index-mobile.less';

interface TestProps {
  dispatch: Dispatch;
  loading?: boolean;
}

const Index: React.FC<TestProps> = props => {
  const { dispatch, loading } = props;
  // const intl = useIntl();

  useEffect(() => {}, []);

  return (
    <div className={styles.homeContent}>
      <div className={styles.part1}>
        <div className={styles.info}>
          <img className={styles.logo} src={Logo} alt="" /> <br/>
          AEX IS COMMITTED TO HELP
          <br />
           CREATE A SUCCESSFUL FORWARD
          <br />
           MARKET FOR EMISSIONS AND  <br/>
           POWER IN CHINA
        </div>
      </div>


      <div className={styles.part2}>
        <div className={`${styles.title} ${styles.left}`}>
          Success through collaboration <span className={styles.arrow}></span>
        </div>
        <div className={styles.inner}>
          <div>
            <div className={`${styles.featureItem} ${styles.item1}`}>
              <div>
                <img src={FeatureIcon1} alt="" />
              </div>
              <div>
                <img src={FeatureContent1} alt=""/>
              </div>
            </div>
            <div className={`${styles.featureItem} ${styles.item3}`}>
              <div>
                <img src={FeatureIcon3} alt="" />
              </div>
              <div>
                <img src={FeatureContent3} alt=""/>
              </div>
            </div>
          </div>

          <div className={`${styles.featureItem} ${styles.item2}`}>
            <div>
              <img src={FeatureIcon2} alt="" />
            </div>
            <div>
              <img src={FeatureContent2} alt=""/>
            </div>
          </div>


        </div>
      </div>

      <div className={styles.title} id="markets">
        <span className={styles.arrow}></span>Our Vision for China Energy Markets
      </div>
      <div className={styles.part3}>
        <div>
          <div style={{paddingRight: '1rem'}}>
            AEX is committed to help build this ecosystem to contribute to the success of China emissions and power markets.
          </div>
          <div style={{paddingLeft: '1rem'}}>
            In mature emissions and power markets, the spot market is embedded in an ecosystem that enables market participants to manage risk and run efficient trading operations.
          </div>
        </div>

        <div>
          <img src={VisionImg} alt="" />
        </div>
      </div>

      <div className={`${styles.title} ${styles.left}`}>
        Team Introduction<span className={styles.arrow}></span>
      </div>
      <div className={styles.part4}>
        <div>
          <p style={{paddingRight: '1rem'}}>
            The AEX team comprises deeply experienced and internationally recognized leaders in the field of environmental markets and power trading.
          </p>
          <p>
            We amplify our team's strengths <br/>
            and expertise through our <br/>
            extensive international and <br/>
            local network of individuals <br/>
            and organizations in <br/>
            exchanges, power <br/>
            trading and utilities, <br/>
            service providers <br/>
            and financial <br/>
            institutions. <br/>
          </p>
        </div>
        <div>
          <img src={Team1} alt="" />
        </div>
      </div>

      <div className={`${styles.title}`} style={{ paddingBottom: '3rem' }} id="team">
        <span className={styles.arrow}></span>Management Team
      </div>
      <div className={styles.part5} style={{ marginBottom: '15px' }}>
        <div>
          <img src={Team2} alt="" />
          <div style={{width: '11rem'}}>
            Jeff Huang / 黄杰夫 <br />
            Founder and CEO
          </div>
        </div>
        <ul>
          <li>
            Former Managing Director Greater China for international commodity
            exchange 2010-2016, VP Asia for Chicago Climate Exchange (CCX), Former Chief Advisor for Chongqing Gas Exchange
          </li>
          <li>
            10+ years experience in cross-border M&A and Joint Venture
            <div style={{fontSize: '1rem', color: '#888'}}>
              Tianjin Climate Exchange (CCX & CNPC/PetroChina), Citic & Calyon (SocGen) futures brokerage joint venture, SunGard Fintech acquisition
            </div>
          </li>
          <li>Member of Greater-Bay Area (GBA) Carbon Connect Working Group</li>
          <li>
            Well-known expert in China energy and CO2 markets, frequent speaker
            and lecturer in conferences and in universities, regular presence on
            <a href="http://opinion.caixin.com/huangjiefu_mjxx/" target="_blank">Caixin opinion, </a>
            <a href="http://weibo.com/carbonjeff" target="_blank">Weibo</a>
          </li>
        </ul>
      </div>

      <div className={styles.part5} style={{alignItems: 'flex-end'}}>
        <ul>
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
            <a style={{marginLeft: 0}} href="https://www.linkedin.com/in/jonas-nart/" target="_blank">LinkedIn</a>
          </li>
        </ul>
        <div>
          <img src={Team3} alt="" />
          <div style={{width: '13rem'}}>
            Jonas Nart / 纳杰安
            Founding Partner <br />
            VP Power Markets & <br/>
            Data Analytics
          </div>
        </div>
      </div>


      <div className={`${styles.title} ${styles.left}`} id="iba">
        Board of International Advisors<span className={styles.arrow}></span>
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
            Christine Loh
            <div>
              Chief Development Strategist, Institute for the Environment, Hong Kong University of Science and Technology.
            </div>
          </li>
          <li>
            Ronald Oppenheimer
            <div>
              Former general counsel of Vitol, Inc. and NYMEX, current member of Board of Directors of National Futures Association and Business Conduct Committee of Intercontinental Exchange.
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
              Head of energy division & member of executive board at CKW (Swiss utility),​ ​board chairman and member for power supplier and generation companies
            </div>
          </li>
          <li>
            Paula DiPerna
            <div>
              Special advisor to CDP (Carbon Disclosure Project) and advisor for environmental finance to Do-Conomy; former President at CCX International; President/VP of Cousteau Society and Joyce Foundation
            </div>
          </li>
        </ul>
      </div>

      <div className={styles.careerTitle} id="career">
        <span>Join AEX</span>
      </div>
      <div className={styles.careerContent}>
        We are looking for candidates with entrepreneurial mindsets to join our inter- <br/>
        national team in Hong Kong and Mainland China. Please send your application to
        <div>
          recruiting@aexmarkets.com.
        </div>
      </div>

      <div className={styles.positionsTitle}>Open Positions:</div>

      <div className={styles.positionsWrap}>
        <div>
          <a href="/aex/file/test.pdf" target="_blank"><img src={PositionImg1} alt="" /></a>
          <div>
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
              <span>1 Aug 2020</span>
            </div>
          </div>
        </div>

        <div style={{margin: '0.3rem 0'}}>
          <a href="/aex/file/test.pdf" target="_blank"><img src={PositionImg2} alt="" /></a>
          <div>
            <div className={styles.brief}>
              Junior Data Analyst -<br />
              Hong Kong or Mainland China
            </div>
            <div className={styles.date}>
              <img src={UserIcon} alt="" />
              <span>HR</span>
              <img src={PositionSeparator} alt="" />
              <img src={CalendarIcon} alt="" />
              <span>1 Jul 2020</span>
            </div>
          </div>
        </div>

        <div>
          <a href="/aex/file/test.pdf" target="_blank"><img src={PositionImg3} alt="" /></a>
          <div>
            <div className={styles.brief}>Executive Assistant - <br/>
              Hong Kong</div>
            <div className={styles.date}>
              <img src={UserIcon} alt="" />
              <span>HR</span>
              <img src={PositionSeparator} alt="" />
              <img src={CalendarIcon} alt="" />
              <span>1 Aug 2020</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(({ global, loading }: ConnectState) => ({
  loading: loading.effects['orders/fetch'],
}))(Index);
