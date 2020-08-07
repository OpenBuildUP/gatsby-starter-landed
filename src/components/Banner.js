import React from 'react'
import pic01 from '../assets/images/pic01.jpg'
import { Link as ScrollLink } from 'react-scroll'

const Banner = props => (
  <section id="banner">
    <div className="content">
      <header>
        <h2>Open Build-UP</h2>
        <p>
        "아이디어 공유/평가를 받기위한"
          <br />
          "다양한 전문가들과 팀프로젝트, 팀 빌딩을 위한"
          <br />
          "직장인, 학생, 누구나 함께 모여 소통하고 협업할 수 있는"
          <br />
        </p>
      </header>
      <span className="image">
        <img src={pic01} alt="intro" />
      </span>
    </div>
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

export default Banner
