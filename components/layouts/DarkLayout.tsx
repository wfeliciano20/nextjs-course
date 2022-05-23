import { FC, ReactNode } from "react";

interface DarkLayoutProps {
  children?: ReactNode;
}

const DarkLayout: FC<DarkLayoutProps> = ({ children }) => {
  return (
    <div style={{
      backgroundColor: 'rgba(0, 0, 0, 0.3)',
      borderRadius: '5px',
      padding: '10px'
    }}>
      <h1>Dark Layout</h1>
      <div>
        {children}
      </div>
      
    </div>
  )
}

export default DarkLayout;