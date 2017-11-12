import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import Page from '../../components/Page/Page'

export default class PageHome extends PureComponent {
  // static propTypes = {
  //   something: t.any
  // }

  render() {
    return (
      <Page {...this.props}>
        PageHome
      </Page>
    )
  }
}
