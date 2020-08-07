import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../../components/layout'
import pic05 from '../../assets/images/pic05.jpg'
import pic06 from '../../assets/images/pic06.jpg'

const OfflineGroupsDaegu = props => (
  <Layout location="/offline_groups/daegu">
    <Helmet>
      <title>Offline Group - Daegu!</title>
      <meta name="description" content="Offline Group - Daegu! page" />
    </Helmet>

    <div id="main" className="wrapper style1">
      <div className="container">
        <header className="major">
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
        <div className="row gtr-150">
          <div className="col-4 col-12-medium">
            <section id="sidebar">
              <section>
                <h3>A 테스트</h3>
                <p>짧은 글 (테스트)...</p>
                <footer>
                  <ul className="actions">
                    <li>
                      <a href="#" className="button">
                        Link-Test
                      </a>
                    </li>
                  </ul>
                </footer>
              </section>
              <hr />
              <section>
                <a href="#" className="image fit">
                  <img src={pic06} alt="" />
                </a>
                <h3>B 테스트</h3>
                <p>짧은 글 (테스트)...</p>
                <footer>
                  <ul className="actions">
                    <li>
                      <a href="#" className="button">
                        Link-Test
                      </a>
                    </li>
                  </ul>
                </footer>
              </section>
            </section>
          </div>
          <div className="col-8 col-12-medium imp-medium">
            <section id="content">
              <a href="#" className="image fit">
                <img src={pic05} alt="" />
              </a>
              <h3>C 테스트</h3>
              <p>문단 테스트 001</p>
              <p>문단 테스트 002</p>
              <h3>H3 테스트</h3>
              <p>문단 테스트 003</p>
              <ul>
                <li>li 테스트 001</li>
                <li>li 테스트 002</li>
                <li>li 테스트 003</li>
                <li>li 테스트 004</li>
                <li>li 테스트 005</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default OfflineGroupsDaegu
