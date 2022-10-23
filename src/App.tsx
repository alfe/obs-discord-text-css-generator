import CssMaker from './component/CssMaker'
import { Box, Container, Typography } from '@mui/material';
import './App.css'

function App() {
  return (
    <div className='App-content'>
      <Header />
      <Container>
        <CssMaker />
      </Container>
      <Footer />
    </div >
  );
};
export default App

const Header = () => {
  return (
    <header>
      <Box sx={{ m: 5 }}>
        <Typography align="center" component="h1" variant="h3" paragraph>
          DiscordチャットカスタムCSSジェネレーター
        </Typography>
        <Container>
          <Typography align="center" paragraph>
            DiscordのチャットをOBS Studioに表示するときに、見た目を変更するためのカスタムCSSをつくるジェネレーター
          </Typography>
        </Container>
      </Box>
    </header>
  );
};

const Footer = () => {
  return (
    <footer className='App-footer'>
      <p>
        made by <a href='https://twitter.com/alfe_below' target='_blank' >@alfe_below</a>
        / <a href='https://github.com/alfe/obs-discord-text-css-generator' target='_blank' >GitHub</a>
      </p>
    </footer>
  );
};
