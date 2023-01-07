import { useLocation } from 'react-router-dom'
import { ReactNode, useEffect } from 'react'

interface IScrollToTop {
  children: ReactNode
}

// Used to Always Load the page on the very top when using Routes
export const ScrollToTop = ({ children }: IScrollToTop) => {
  const pathname = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return <>{children}</>
}
