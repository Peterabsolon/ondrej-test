import React from 'react'
import axios from 'axios'

// import Table from '../../components/Table/Table'
// import Page from '../../components/Page/Page'

import { Page, Table } from '../../components'

const REGIONS = {
  US: 'us',
  EU: 'eu',
  ASIA: 'asia'
}

const countries = [{
  id: 1,
  name: 'Austria',
  region: REGIONS.EU
}, {
  id: 2,
  name: 'Slovakia',
  region: REGIONS.EU
}, {
  id: 3,
  name: 'United States',
  region: REGIONS.US
}, {
  id: 4,
  name: 'China',
  region: REGIONS.ASIA
}]

const getCountries = () => {
  return axios.get('/countries?offset=0&limit=20')
}

export default class PageCountries extends React.Component {
  handleEdit = id => {
    this.props.history.push(`/countries/${id}`)
  }

  render() {
    const columns = [{
      dataKey: 'id',
      label: 'ID'
    }, {
      dataKey: 'name',
      label: 'Názov'
    }, {
      dataKey: 'region',
      label: 'Región'
    }]

    const actions = {
      edit: {
        handler: this.handleEdit,
        label: 'Upraviť'
      },
      delete: {
        handler: this.handleDelete,
        label: 'Zmazať'
      }
    }
    
    return (
      <Page {...this.props}>
        <Table rows={countries} columns={columns} actions={actions} />
      </Page>
    )
  }
}
