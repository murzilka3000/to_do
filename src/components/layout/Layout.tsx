import { ReactNode } from "react"
import Header from "./Header"

interface reactChildren {
  children: ReactNode
}

const Layout: React.FC<reactChildren> = ({ children }) => {
  return (
    <div className="bg-gray-800 max-w-480 h-100">
      {children}
      <Header/>
    </div>
  )
}

export default Layout