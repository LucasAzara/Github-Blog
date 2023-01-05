// React
import { ReactNode } from 'react'
// CSS
import { LayoutContainer } from './styles'
// Header
import { Header } from '../../components/Header'
// Used to Generate Other Page Components
import { Outlet } from 'react-router-dom'

export function DefaultLayout() {
  return (
    <>
      <Header />
      <LayoutContainer>
        <Outlet />
      </LayoutContainer>
    </>
  )
}
