import React from 'react'
import Head from 'next/head'
import { Navbar, Nav, Dropdown } from 'rsuite'
import IconGear from '@rsuite/icons/Gear'
import { LinkNav, LinkDrop, NavLink } from 'components/link'
import 'rsuite/styles/index.less'

const NavHeader = () => {
  return (
    <Navbar>
      <Navbar.Brand href='/' as={NavLink}>
        RSUITE Site
      </Navbar.Brand>
      <Nav>
        <LinkNav href='/news'>News</LinkNav>
        <LinkNav href='/products'>Products</LinkNav>
        <Dropdown title='About'>
          <LinkDrop href='/company'>Company</LinkDrop>
          <LinkDrop href='/team'>Team</LinkDrop>
          <LinkDrop href='/contact'>Contact</LinkDrop>
        </Dropdown>
      </Nav>
      <Nav pullRight>
        <LinkNav icon={<IconGear />} href='/settings'>Settings</LinkNav>
      </Nav>
    </Navbar>
  )
}

const Page = ({ title = 'RSUITE Site', children }) => (
  <div>
    <Head>
      <title>{title}</title>
    </Head>
    <NavHeader />
    <div style={{ padding: 20 }}>
      {children}
    </div>
  </div>
)

export default Page
