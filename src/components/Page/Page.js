import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import t from 'prop-types'

const linkStyle = { color: 'red' }

export default class Page extends PureComponent {
  static propTypes = {
    children: t.any,
    location: t.object
  }

  render() {
    const { children, location } = this.props

    const currentPath = location.pathname

    const NavLink = ({ path, label }) => (
      <Link to={path} style={currentPath === path ? linkStyle : {}}>
        {label}
      </Link>
    )

    return (
      <div>
        <nav>
          <NavLink path="/" label="Home" />
          <NavLink path="/countries" label="Countries" />
        </nav>

        {children}
      </div>
    )
  }
}
