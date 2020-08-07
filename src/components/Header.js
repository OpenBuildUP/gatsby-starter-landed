import React, { useEffect, useRef } from 'react'
import { Link } from 'gatsby'
import { Link as ScrollLink } from 'react-scroll'
import MobileMenu from './mobile_menu'

const timeoutLength = 300

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      backgroundStyle: '',
      active: false,
      mobileActiveClass: '',
      mouseOverButtons: [],
      mouseOverMenus: [],
      mouseOverSubButtons: [],
      mouseOverSubMenus: [],
    }
  }

  componentDidMount() {
    this.listener = document.addEventListener('scroll', e => {
      let scrolled = document.scrollingElement.scrollTop
      let deltaScrolled = 100
      let limitScrolled =
        this.props.location === '/' ? window.innerHeight : 56.0
      let startScrolled = limitScrolled - deltaScrolled

      //backgroundStyle: rgba(23, 24, 32, (startScrolled - scrolled) / 100);
      if (scrolled >= startScrolled) {
        let alphaValue = 1.0 - (limitScrolled - scrolled) / deltaScrolled
        let rgbaStyle = `rgba(23, 24, 32, ${alphaValue})`
        if (this.state.backgroundStyle !== rgbaStyle) {
          this.setState({ backgroundStyle: rgbaStyle })
        }
      } else {
        if (this.state.backgroundStyle !== '') {
          this.setState({ backgroundStyle: '' })
        }
      }
    })
  }

  componentDidUpdate() {
    document.removeEventListener('scroll', this.listener)
  }

  toggleHamburger = () => {
    this.setState(
      {
        active: !this.state.active,
      },
      () => {
        // set the class for the mobile menu
        this.state.active
          ? this.setState({
              mobileActiveClass: 'navPanel-visible',
            })
          : this.setState({
              mobileActiveClass: '',
            })
      }
    )
  }

  enterButton = linkName => {
    this.setState({
      mouseOverButtons: this.state.mouseOverButtons
        .filter(name => name !== linkName)
        .concat(linkName),
    })
  }

  leaveButton = linkName => {
    setTimeout(() => {
      this.setState({
        mouseOverButtons: this.state.mouseOverButtons.filter(
          name => name !== linkName
        ),
      })
    }, timeoutLength)
  }

  enterMenu = linkName => {
    this.setState({
      mouseOverMenus: this.state.mouseOverMenus
        .filter(name => name !== linkName)
        .concat(linkName),
    })
  }

  leaveMenu = linkName => {
    setTimeout(() => {
      this.setState({
        mouseOverMenus: this.state.mouseOverMenus.filter(
          name => name !== linkName
        ),
      })
    }, timeoutLength)
  }

  enterSubButton = sublinkName => {
    this.setState({
      mouseOverSubButtons: this.state.mouseOverSubButtons
        .filter(name => name !== sublinkName)
        .concat(sublinkName),
    })
  }

  leaveSubButton = sublinkName => {
    setTimeout(() => {
      this.setState({
        mouseOverSubButtons: this.state.mouseOverSubButtons.filter(
          name => name !== sublinkName
        ),
      })
    }, timeoutLength)
  }

  enterSubMenu = sublinkName => {
    this.setState({
      mouseOverSubMenus: this.state.mouseOverSubMenus
        .filter(name => name !== sublinkName)
        .concat(sublinkName),
    })
  }

  leaveSubMenu = sublinkName => {
    setTimeout(() => {
      this.setState({
        mouseOverSubMenus: this.state.mouseOverSubMenus.filter(
          name => name !== sublinkName
        ),
      })
    }, timeoutLength)
  }

  openBlankTo = to => {
    let trimedTo = to.trim()
    return (
      trimedTo.indexOf('https://') === 0 || trimedTo.indexOf('http://') === 0
    )
  }

  replaceTo = to => {
    let trimedTo = to.trim()

    if (trimedTo === '#' || trimedTo === '/') {
      return trimedTo
    }

    return `${trimedTo.replace('/', '').replace(/\//gi, '_')}_banner`
  }

  render() {
    const siteTitle = this.props.siteTitle
    const menuLinks = this.props.menuLinks
    const isHome = this.props.location === '/'

    return (
      <React.Fragment>
        <div className={`navbar-menu ${this.state.mobileActiveClass}`}>
          <div id="titleBar">
            <a
              role="button"
              onClick={() => this.toggleHamburger()}
              className="toggle"
              aria-label="Open mobile menu"
            ></a>
            <span className="title">
              <Link to="/">{siteTitle}</Link>
            </span>
          </div>
          <div id="navPanel">
            <MobileMenu siteTitle={siteTitle} menuLinks={menuLinks} />
          </div>
        </div>

        <header id="header" style={{ background: this.state.backgroundStyle }}>
          <h1 id="logo">
            <Link to="/">{siteTitle}</Link>
          </h1>
          <div className="navbar-menu">
            <nav>
              <ul style={{ display: 'flex', flex: 1 }}>
                {menuLinks.map(link =>
                  link.items ? (
                    <React.Fragment key={link.name}>
                      <li key={link.name}>
                        {isHome && !this.openBlankTo(link.link) ? (
                          <ScrollLink
                            onMouseEnter={_ => this.enterButton(link.name)}
                            onMouseLeave={_ => this.leaveButton(link.name)}
                            className={`${link.cl}`}
                            to={this.replaceTo(link.link)}
                            smooth={true}
                            offset={50}
                            duration={1500}
                            spy={true}
                          >
                            {link.name}
                          </ScrollLink>
                        ) : (
                          <Link
                            onMouseEnter={_ => this.enterButton(link.name)}
                            onMouseLeave={_ => this.leaveButton(link.name)}
                            className={link.cl}
                            to={link.link}
                            target={`${
                              this.openBlankTo(link.link) ? '_blank' : ''
                            }`}
                          >
                            {link.name}
                          </Link>
                        )}
                        <ul
                          style={
                            //open
                            this.state.mouseOverButtons.filter(
                              name => name === link.name
                            ).length > 0 ||
                            this.state.mouseOverMenus.filter(
                              name => name === link.name
                            ).length > 0
                              ? {
                                  display: `block`,
                                  background: `rgba(39, 40, 51, 0.965)`,
                                  position: `absolute`,
                                  // right: `55%`,
                                  minWidth: `100px`,
                                  padding: `0 10px`,
                                  borderRadius: `5px`,
                                }
                              : { display: `none` }
                          }
                          onMouseEnter={_ => this.enterMenu(link.name)}
                          onMouseLeave={_ => this.leaveMenu(link.name)}
                        >
                          {link.items.map(sublink =>
                            sublink.items ? (
                              <React.Fragment key={sublink.name}>
                                <li
                                  key={sublink.name}
                                  style={{
                                    textAlign: `left`,
                                    marginLeft: `0`,
                                    paddingLeft: `0`,
                                    fontSize: `14px`,
                                    display: `block`,
                                    lineHeight: `2.5`,
                                  }}
                                >
                                  {isHome && !this.openBlankTo(sublink.link) ? (
                                    <ScrollLink
                                      onMouseEnter={_ =>
                                        this.enterSubButton(sublink.name)
                                      }
                                      onMouseLeave={_ =>
                                        this.leaveSubButton(sublink.name)
                                      }
                                      to={this.replaceTo(sublink.link)}
                                      smooth={true}
                                      offset={50}
                                      duration={1500}
                                      spy={true}
                                    >
                                      {sublink.name}
                                    </ScrollLink>
                                  ) : (
                                    <Link
                                      onMouseEnter={_ =>
                                        this.enterSubButton(sublink.name)
                                      }
                                      onMouseLeave={_ =>
                                        this.leaveSubButton(sublink.name)
                                      }
                                      to={sublink.link}
                                      target={`${
                                        this.openBlankTo(sublink.link)
                                          ? '_blank'
                                          : ''
                                      }`}
                                    >
                                      {sublink.name}
                                    </Link>
                                  )}
                                  <ul
                                    style={
                                      //subOpen
                                      this.state.mouseOverSubButtons.filter(
                                        name => name === sublink.name
                                      ).length > 0 ||
                                      this.state.mouseOverSubMenus.filter(
                                        name => name === sublink.name
                                      ).length > 0
                                        ? {
                                            display: `block`,
                                            background: `rgba(39, 40, 51, 0.965)`,
                                            borderRadius: `5px`,
                                            position: `absolute`,
                                            right: `100%`,
                                            width: `100%`,
                                            marginTop: `-35px`,
                                          }
                                        : { display: `none` }
                                    }
                                    onMouseEnter={_ =>
                                      this.enterSubMenu(sublink.name)
                                    }
                                    onMouseLeave={_ =>
                                      this.leaveSubMenu(sublink.name)
                                    }
                                  >
                                    {sublink.items.map(nestedsublink => (
                                      <li
                                        key={nestedsublink.name}
                                        style={{
                                          textAlign: `left`,
                                          marginLeft: `0`,
                                          paddingLeft: `0`,
                                          fontSize: `14px`,
                                          whiteSpace: `nowrap`,
                                          lineHeight: `2.5`,
                                          display: `block`,
                                        }}
                                      >
                                        {isHome &&
                                        !this.openBlankTo(
                                          nestedsublink.link
                                        ) ? (
                                          <ScrollLink
                                            to={this.replaceTo(
                                              nestedsublink.link
                                            )}
                                            smooth={true}
                                            offset={50}
                                            duration={1500}
                                            spy={true}
                                          >
                                            {nestedsublink.name}
                                          </ScrollLink>
                                        ) : (
                                          <Link
                                            to={nestedsublink.link}
                                            target={`${
                                              this.openBlankTo(
                                                nestedsublink.link
                                              )
                                                ? '_blank'
                                                : ''
                                            }`}
                                          >
                                            {nestedsublink.name}
                                          </Link>
                                        )}
                                      </li>
                                    ))}
                                  </ul>
                                </li>
                              </React.Fragment>
                            ) : (
                              <li
                                key={sublink.name}
                                style={{
                                  textAlign: `left`,
                                  marginLeft: `0`,
                                  paddingLeft: `0`,
                                  fontSize: `14px`,
                                  lineHeight: `2.5`,
                                  display: `block`,
                                }}
                              >
                                {isHome && !this.openBlankTo(sublink.link) ? (
                                  <ScrollLink
                                    class={this.replaceTo(sublink.link)}
                                    to={this.replaceTo(sublink.link)}
                                    smooth={true}
                                    offset={50}
                                    duration={1500}
                                    spy={true}
                                  >
                                    {sublink.name}
                                  </ScrollLink>
                                ) : (
                                  <Link
                                    to={sublink.link}
                                    target={`${
                                      this.openBlankTo(sublink.link)
                                        ? '_blank'
                                        : ''
                                    }`}
                                  >
                                    {sublink.name}
                                  </Link>
                                )}
                              </li>
                            )
                          )}
                        </ul>
                      </li>
                    </React.Fragment>
                  ) : (
                    <li key={link.name}>
                      {isHome && !this.openBlankTo(link.link) ? (
                        <ScrollLink
                          className={link.cl}
                          to={this.replaceTo(link.link)}
                          smooth={true}
                          offset={50}
                          duration={1500}
                          spy={true}
                        >
                          {link.name}
                        </ScrollLink>
                      ) : (
                        <Link
                          className={link.cl}
                          to={link.link}
                          target={`${
                            this.openBlankTo(link.link) ? '_blank' : ''
                          }`}
                        >
                          {link.name}
                        </Link>
                      )}
                    </li>
                  )
                )}
              </ul>
            </nav>
          </div>
        </header>
      </React.Fragment>
    )
  }
}

export default Header
