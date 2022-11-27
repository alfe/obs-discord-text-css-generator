import { Box, Container, Typography } from '@mui/material';
import CssMaker from './component/CssMaker'
import TutorialButton from './component/TutorialButton';
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
          Discordテキストチャンネル外観変更ジェネレーター
        </Typography>
        <Container>
          <Typography align="center" paragraph>
            DiscordのテキストチャンネルをOBS Studioに表示するときに、見た目を変更するためのカスタムCSSをつくるジェネレーター
          </Typography>
          <TutorialButton />
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
