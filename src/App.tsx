import { Box, Container, Typography } from '@mui/material';
import CssMaker from './component/CssMaker'
import TutorialButton from './component/TutorialButton';
import './App.css'

function App() {
  return (
    <div className='App-content'>
      <Header />
      <Container maxWidth="xl">
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
      <Container maxWidth="xl">
        <Box sx={{ width: '100%', my: 4, display: 'flex', justifyContent: 'space-between' }}>
          <Box>
          <Typography align="left" component="h1" variant="h4" paragraph>
            Discordテキストチャンネル外観変更ジェネレーター
          </Typography>
          <Typography align="left" paragraph>
            DiscordのテキストチャンネルをOBS Studioに表示するときに、見た目を変更するためのカスタムCSSをつくるジェネレーター
          </Typography>
          </Box>
          <Box>
            <TutorialButton />
          </Box>
        </Box>
      </Container>
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
