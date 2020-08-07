import React from 'react'
import pic03 from '../../assets/images/pic03.jpg'
import { Link as ScrollLink } from 'react-scroll'
import Fade from 'react-reveal/Fade'

const OfflineGroupsDaeguBanner = props => (
  <section
    id="offline_groups_daegu_banner"
    className="spotlight style2 right inactive"
    style={{ backgroundImage: `url(${pic03})` }}
  >
    <span className="image fit main">
      <img src={pic03} alt="" />
    </span>
    <Fade right big>
      <div className="content">
        <header>
          <h2>Offline Group - Daegu!</h2>
          <p>
            대구 오프라인 모임&nbsp;
            <a
              href="https://www.meetup.com/ko-KR/Open-Build-UP/"
              target="_blank"
            >
              (Meetup 방문하기)
            </a>
          </p>
        </header>
        <p>
          - &lt;Open Build-UP&gt; 의 첫 번째 오프라인 모임입니다. <br />
          - 현재는 &lt;Meetup&gt;을 통해 행사정보를 공지합니다. <br />
          - 2020년 09월, 첫 번째 모임 진행 <br />
          - 2020년 08월, 모임 생성 <br />
        </p>
        <ul className="actions">
          <li>
            <a href="/offline_groups/daegu" className="button">
              더 자세히 알아보기
            </a>
          </li>
        </ul>
      </div>
    </Fade>
    <ScrollLink
      to={props.next}
      className="goto-next"
      activeClass="active"
      smooth={true}
      offset={50}
      duration={1500}
      spy={true}
    >
      Next
    </ScrollLink>
  </section>
)

export default OfflineGroupsDaeguBanner
