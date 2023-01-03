// React
import { ReactNode } from 'react'
// CSS
import { LayoutContainer } from './styles'
// Header
import { Header } from '../../components/Header'

// Interface
interface IDefaultLayout {
  children: ReactNode
}

export function DefaultLayout({ children }: IDefaultLayout) {
  return (
    <>
      <Header />
      <LayoutContainer>{children}</LayoutContainer>
    </>
  )
}
