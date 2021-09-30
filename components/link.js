// This is a few next-link compoents, wrapped in rsuite

import React from 'react'
import Link from 'next/link'
import { Button, Nav, Dropdown, Breadcrumb } from 'rsuite'
import 'rsuite/styles/index.less'

export const NavLink = React.forwardRef((props, ref) => {
  const { as, href, ...rest } = props
  return (
    <Link href={href} as={as}>
      <a ref={ref} {...rest} />
    </Link>
  )
})

export const LinkNav = props => <Nav.Item componentClass={NavLink} {...props} />
export const LinkDrop = props => <Dropdown.Item componentClass={NavLink} {...props} />
export const LinkButton = props => <Button componentClass={NavLink} {...props} />
export const LinkBread = props => <Breadcrumb.Item componentClass={NavLink} {...props} />
