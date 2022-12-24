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
        <Typography align="center" paragraph variant="caption">
          <>※ 2022.12.21 コメントフェードアウトに対応しました</> / 
          <a href="https://obs-discord-icon.alfebelow.com/">アイコンに見た目に変えたいときはこちら</a> /
          <a href="https://obs-discord-picture.alfebelow.com/">アイコンから立ち絵に変えたいときはこちら</a> /
        </Typography>
      </Container>
    </header>
  );
};

const Footer = () => {
  return (
    <footer className='App-footer'>
      <p>
        <>
          解説動画 (
            <a href='https://www.nicovideo.jp/watch/sm41517917' target='_blank' >
              ニコニコ動画
            </a>
            /
            <a href='https://www.youtube.com/watch?v=_6ENtX4GJv4' target='_blank' >
              Youtube
            </a>)
        </>
      </p>
      <p>
        made by <a href='https://twitter.com/alfe_below' target='_blank' >@alfe_below</a>
        / <a href='https://github.com/alfe/obs-discord-text-css-generator' target='_blank' >GitHub</a>
      </p>
    </footer>
  );
};
