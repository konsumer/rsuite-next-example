import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Button, Navbar, Nav, Dropdown } from 'rsuite'
import 'rsuite/styles/index.less'

const NavLink = React.forwardRef((props, ref) => {
  const { as, href, ...rest } = props
  return (
    <Link href={href} as={as}>
      <a ref={ref} {...rest} />
    </Link>
  )
})

const LinkNav = props => <Nav.Item componentClass={NavLink} {...props} />
const LinkDrop = props => <Dropdown.Item componentClass={NavLink} {...props} />

const NavHeader = () => (
  <Navbar>
    <Navbar.Brand href='#'>
      RSUITE
    </Navbar.Brand>
    <Nav>
      <LinkNav href='/'>Home</LinkNav>
      <LinkNav href='/news'>News</LinkNav>
      <LinkNav>Products</LinkNav>
      <Dropdown title='About'>
        <LinkDrop href='/company'>Company</LinkDrop>
        <LinkDrop href='/team'>Team</LinkDrop>
        <LinkDrop href='/contact'>Contact</LinkDrop>
      </Dropdown>
    </Nav>
    <Nav pullRight>
      <LinkNav href='/settings'>Settings</LinkNav>
    </Nav>
  </Navbar>
)

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
    </Head>

    <NavHeader />

    <div className='hero'>
      <h1 className='title'>About Company</h1>
      <p className='description'>
        This is the about "page".
        <br />
      </p>
      <Button appearance='primary' href='https://rsuitejs.com/'>
        Getting started
      </Button>
    </div>

    <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
        padding: 50px;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 48px;
      }
    `}
    </style>
  </div>
)

export default Home
