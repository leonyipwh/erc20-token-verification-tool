import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
// import Logo from '../Logo';

const Header = () => {
  const pages: string[] = ['Token Verification'];

  return (
    <AppBar position="static">
      <Toolbar>
        {/* <Logo /> */}
        <Box sx={{ flexGrow: 1 }}>
          {pages.map((page) => (
            <Button
              key={page}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              {page}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
