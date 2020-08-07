import React from 'react'
import Fade from 'react-reveal/Fade'
import KakaoSvg from '../components/svg/kakao'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'

const OnlineGroups = props => (
  <Fade up>
    <section id="online_groups" className="wrapper style1 special fade-up">
      <div className="container">
        <header className="major">
          <h2>Online Groups</h2>
          <p></p>
        </header>
        <div className="box alt">
          <div className="row gtr-uniform">
            <section className="col-4 col-6-medium col-12-xsmall">
              <a
                href="https://www.facebook.com/groups/openbuildup"
                target="_blank"
                style={{ border: `unset`, color: `unset` }}
              >
                <span
                  className="icon solid alt major"
                  style={{ cursor: `pointer` }}
                >
                  <FontAwesomeIcon icon={faFacebookF} size="2x" />
                </span>
              </a>
              <h3>Facebook</h3>
              <p>페이스북 그룹!</p>
            </section>
            <section className="col-4 col-6-medium col-12-xsmall">
              <a
                href="https://open.kakao.com/o/gzRiCIoc"
                target="_blank"
                style={{ border: `unset`, color: `unset` }}
              >
                <span
                  className="icon solid alt major svg-line-height-9em"
                  style={{ cursor: `pointer` }}
                >
                  <KakaoSvg
                    width="56"
                    height="56"
                    color="white"
                    hoverColor="red"
                  />
                </span>
              </a>
              <h3>Kakao OpenTalk</h3>
              <p>카카오톡 오픈 채팅방!</p>
            </section>
            {/* <section className="col-4 col-6-medium col-12-xsmall">
              <span className="icon solid alt major fa-flask"></span>
              <h3>Cubilia cep lobortis</h3>
              <p>
                Feugiat accumsan lorem eu ac lorem amet accumsan donec. Blandit
                orci porttitor.
              </p>
            </section>
            <section className="col-4 col-6-medium col-12-xsmall">
              <span className="icon solid alt major fa-paper-plane"></span>
              <h3>Non semper interdum</h3>
              <p>
                Feugiat accumsan lorem eu ac lorem amet accumsan donec. Blandit
                orci porttitor.
              </p>
            </section>
            <section className="col-4 col-6-medium col-12-xsmall">
              <span className="icon solid alt major fa-file"></span>
              <h3>Odio laoreet accumsan</h3>
              <p>
                Feugiat accumsan lorem eu ac lorem amet accumsan donec. Blandit
                orci porttitor.
              </p>
            </section>
            <section className="col-4 col-6-medium col-12-xsmall">
              <span className="icon solid alt major fa-facebook" style={{ fontFamily: "Font Awesome 5 Pro"}}></span>
              <h3>Massa arcu accumsan</h3>
              <p>
                Feugiat accumsan lorem eu ac lorem amet accumsan donec. Blandit
                orci porttitor.
              </p>
            </section> */}
          </div>
        </div>
        {/* <footer className="major">
          <ul className="actions special">
            <li>
              <a href="/" className="button">
                Magna sed feugiat
              </a>
            </li>
          </ul>
        </footer> */}
      </div>
    </section>
  </Fade>
)

export default OnlineGroups
