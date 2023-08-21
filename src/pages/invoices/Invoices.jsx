import React from 'react'
import { mainLayoutAuth } from '../../layout'
import { Invoice, PageTitle } from '../../customComponents'

const Invoices = () => {
  return (
    <>
	<PageTitle />
	<Invoice />
	</>
  )
}

export default mainLayoutAuth(Invoices)