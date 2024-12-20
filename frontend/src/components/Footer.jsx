import './footer.css'
import { AppBar, Toolbar, Typography } from '@mui/material';

const Footer = () => {
  return(
    <div className="footer">
      <AppBar 
        position="static" 
        className="appbarFooter"
        sx={{
          backgroundColor: '#292f36',
          height: '64px',
          color: '#FFD700',
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'end',
          paddingRight: '40px'
        }}
        >
        <h1>@2024 EvanPrograms</h1>
      </AppBar>
    </div>
    
  )
}

export default Footer;