import React from 'react'
import Grid from '@mui/material/Grid'
import List from '@mui/material/List'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useTranslation } from "react-i18next";
import cssObj from '../lib/cssObj'
import { getCssText } from '../lib/cssText'
import DiscordTextPreview, { CustomStyle } from './DiscordTextPreview'
import SelectorListItem from './SelectorListItem'
import SliderListItem from './SliderListItem'
import InputArea from './InputArea'
import CssString from './CssString';
import { Box, Button, ButtonGroup, FormLabel, Skeleton, Typography } from '@mui/material';
import ColorPickerListItem from './ColorPickerListItem';
import bgImage from './img/bk.jpg';

const BOX_RADIUS = '8px';

const theme = createTheme({
  palette: {
    neutral: {
      main: '#FFF',
      contrastText: '#fff',
    },
  },
});
declare module '@mui/material/styles' {
  interface Palette {
    neutral: Palette['primary'];
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    neutral?: PaletteOptions['primary'];
  }
}

// Update the Button's color prop options
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    neutral: true;
  }
}


const CssMaker = () => {
  const [styles, setStyles] = React.useState<CustomStyle>({
    chatContainer: {},
    channelName: {},
    poundSign: {},
    messages: {},
    message: {},
    timestamp: {},
    username: {},
    messageText: {},
  });
  const [messagesStyle, setMessagesStyle] = React.useState<string>('text');
  const [isLastMessage, setLastMessage] = React.useState<boolean>(false);
  const [isLoading, setLoading] = React.useState<boolean>(false);

  console.log(styles)

  return (
    <ThemeProvider theme={theme}>
      <Grid container spacing={2} sx={{ backgroundColor: '#333', padding: '1px' }}>
        <Grid item md={6} xs={12} style={{ padding: 0 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', borderRadius: BOX_RADIUS, border: '1px solid #333', height: '64px' }}>
            <Box sx={{
              display: 'flex',
              columnGap: '1px',
              backgroundColor: '#333',
              width: '100%',
            }}>
              <StyleSelectButton
                selected={messagesStyle === 'text'}
                onClick={() => {
                  const value = 'text';
                  cssObj.messageStyle({ value, setStyles });
                  setMessagesStyle(value);
                  setLoading(true);
                  window.setTimeout(() => {
                    setLoading(false);
                  }, 100);
                }}
              >
                  <span style={{
                    color: 'rgba(255, 255, 255, 0.9)',
                    fontWeight: 'bold',
                    padding: '16px',
                  }}>
                    文字
                  </span>
              </StyleSelectButton>
              <StyleSelectButton
                selected={messagesStyle === 'square'}
                onClick={() => {
                  const value = 'square';
                  cssObj.messageStyle({ value, setStyles });
                  setMessagesStyle(value);
                  setLoading(true);
                  window.setTimeout(() => {
                    setLoading(false);
                  }, 100);
                }}
              >
                  <span style={{
                    borderRadius: '8px',
                    backgroundColor: 'rgb(255, 255, 255)',
                    color: 'rgb(51, 51, 51)',
                    padding: '16px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}>
                    四角ブロック
                  </span>
              </StyleSelectButton>
              <StyleSelectButton
                selected={messagesStyle === 'bubbles'}
                onClick={() => {
                  const value = 'bubbles';
                  cssObj.messageStyle({ value, setStyles });
                  setMessagesStyle(value);
                  setLoading(true);
                  window.setTimeout(() => {
                    setLoading(false);
                  }, 100);
                }}
              >
                  <span style={{
                    color: 'rgb(51, 51, 51)',
                    background: 'rgb(255, 255, 255)',
                    display: 'block',
                    padding: '16px',
                    borderRadius: '16px',
                  }}>
                    <>
                      <span style={{
                        display: 'inline-block',
                        position: 'absolute',
                        content: '""',
                        width: '32px',
                        height: '32px',
                        background: 'linear-gradient(143deg, transparent 65%, rgb(255, 255, 255) 65%, rgb(255, 255, 255) 100%)',
                        margin: '-8px 0px 0px -36px',
                        transform: 'rotateZ(8deg)',
                        zIndex: '0',
                      }}></span>
                      吹き出し
                    </>
                  </span>
              </StyleSelectButton>
            </Box>
          </Box>

          <Box sx={{ borderRadius: BOX_RADIUS, margin: '1px 0px', backgroundColor: '#FFF', height: 'calc(100% - 68px)'}}>
            {isLoading ? (
              <Skeleton
                variant="rectangular"
                width="100%"
                height={400}
                sx={{ backgroundColor: '#CCC' }}
              />
            ) : (
            <>
              <List>
                <SelectorListItem
                  title="チャンネル名"
                  options={[
                    { label: '表示', value: 'true' },
                    { label: '非表示', value: 'false' },
                  ]}
                  onChange={(value) => {
                    setStyles({
                      ...styles,
                      channelName: {
                        ...styles.channelName,
                        display: value === 'false' ? 'none' : 'inherit',
                      },
                    });
                  }} />
                <SelectorListItem
                  title="新しいメッセージ"
                  options={[
                    { label: '一番下に追加', value: 'column' },
                    { label: '一番上に追加', value: 'column-reverse' },
                  ]}
                  onChange={(value) => {
                    setStyles({
                      ...styles,
                      messages: {
                        ...styles.messages,
                        display: 'flex',
                        flexDirection: value,
                      },
                    });
                  }} />
                <SelectorListItem
                  title="最後のテキストのみ表示"
                  options={[
                    { label: 'default', value: 'false' },
                    { label: '最後のみ', value: 'true' },
                  ]}
                  onChange={(value) => {
                    console.log(value, value === 'true')
                    setLastMessage(value === 'true');
                    setStyles({
                      ...styles,
                      ...(value === 'true' ? {
                        message_not$l_lastChild$r: {
                          display: 'none',
                        },
                      } : {
                        message_not$l_lastChild$r: {
                          display: 'initial',
                        }
                      }),
                    });
                  }} />
                <SelectorListItem
                  title="時刻"
                  options={[
                    { label: '表示', value: 'true' },
                    { label: '非表示', value: 'false' },
                  ]}
                  onChange={(value) => {
                    setStyles({
                      ...styles,
                      timestamp: {
                        ...styles.timestamp,
                        display: value === 'false' ? 'none' : 'initial',
                      },
                    });
                  }} />
                <SelectorListItem
                  title="ユーザ名"
                  options={[
                    { label: '表示', value: 'true' },
                    { label: '非表示', value: 'false' },
                  ]}
                  onChange={(value) => {
                    setStyles({
                      ...styles,
                      username: {
                        ...styles.username,
                        display: value === 'false' ? 'none' : 'initial',
                      },
                    });
                  }} />
                <ColorPickerListItem
                  title="チャットテキスト色"
                  defaultValue={messagesStyle === 'text' ? '#ffffff' : '#333333'}
                  onChange={(value) => {
                    setStyles({
                      ...styles,
                      messageText: {
                        ...styles.messageText,
                        color: `${value}`,
                      }
                    });
                  }} />
                <SliderListItem
                  title="チャットテキスト大きさ"
                  defaultValue={14}
                  min={0}
                  max={100}
                  onChange={(value) => {
                    setStyles({
                      ...styles,
                      messageText: {
                        ...styles.messageText,
                        lineHeight: 'initial',
                        fontSize: `${value}px`,
                      },
                      message: {
                        ...styles.message,
                        maxHeight: 'initial',
                      }
                    });
                  }} />
                {messagesStyle !== 'text' && (
                  <ColorPickerListItem
                    title="チャット背景色"
                    defaultValue={messagesStyle === 'text' ? 'rgba(0,0,0,0)' : '#FFFFFF'}
                    onChange={(value) => {
                      if (messagesStyle === 'square') {
                        setStyles({
                          ...styles,
                          message: {
                            ...styles.message,
                            backgroundColor: `${value}`,
                          }
                        });
                      }
                      if (messagesStyle === 'bubbles') {
                        setStyles({
                          ...styles,
                          messageText: {
                            ...styles.messageText,
                            backgroundColor: `${value}`,
                          },
                          messageText__before: {
                            ...styles.messageText__before,
                            background: `linear-gradient(143deg, transparent 65%, ${value} 65%, ${value} 100%)`,
                          }
                        });
                      }
                    }} />
                )}
              </List>
            </>
            )}
          </Box>
        </Grid>
        <Grid item md={6} xs={12} style={{ padding: 0, overflow: 'hidden' }}>
          <Box sx={{
            height: 'calc(100% - 2px)',
            background: `#FFF url(${bgImage})`,
            backgroundSize: 'cover',
            borderRadius: BOX_RADIUS,
            border: '1px solid #333',
          }}>
            <Box sx={{ m: 2 }}>
              <DiscordTextPreview
                styles={styles}
                isLastMessage={isLastMessage} />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} style={{ padding: 0 }}>
          <Box sx={{ px: 4, py: 2, backgroundColor: '#FFF', borderRadius: BOX_RADIUS }}>
            <CssString value={getCssText(styles)} />
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};
export default CssMaker;

const StyleSelectButton = ({ selected, onClick, children }: {
  selected: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) => {
  return (
    <Button
      sx={{
        width: 'calc(100% / 3)',
        borderRadius: BOX_RADIUS,
        backgroundColor: selected ? '#1976d2' :'#AAA',
        boxShadow: 'none',
      }}
      color="neutral"
      variant="contained"
      onClick={onClick}
    >
      { children }
    </Button>
  );
}
