import React from 'react'
import Grid from '@mui/material/Grid'
import List from '@mui/material/List'
import { useTranslation } from "react-i18next";
import cssObj from '../lib/cssObj'
import { getCssText } from '../lib/cssText'
import DiscordIconPreview, { CustomStyle } from './DiscordIconPreview'
import SelectorListItem from './SelectorListItem'
import SliderListItem from './SliderListItem'
import InputArea from './InputArea'
import CssString from './CssString';

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
  const [isLastMessage, setLastMessage] = React.useState<boolean>(false);

  console.log(styles)

  return (
    <Grid container spacing={2}>
      <Grid item md={6} xs={12}>
        <InputArea>
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
              title="メッセージスタイル"
              options={[
                { label: '文字', value: 'text' },
                { label: '吹き出し', value: 'bubbles' },
              ]}
              onChange={(value) => {
                setStyles({
                  ...styles,
                  messageText: {
                    ...styles.messageText,
                    ...(value === 'bubbles' ? {
                      color: '#333',
                    } : {
                      color: 'initial',
                    })
                  },
                  message: {
                    ...styles.message,
                    ...(value === 'bubbles' ? {
                      border: '1px solid #FFFFFF',
                      borderRadius: '8px',
                      backgroundColor: '#FFFFFF',
                      color: '#333',
                      padding: '16px',
                      marginBottom: '16px',
                    } : {
                      border: 'none',
                      backgroundColor: 'initial',
                      color: 'initial',
                      padding: '0 0 2px',
                    })
                  },
                  messages: {
                    ...styles.messages,
                    ...(value === 'bubbles' ? {
                      backgroundColor: 'transparent',
                      height: '100%',
                    } : {
                      backgroundColor: 'initial'
                    })
                  },
                  chatContainer: {
                    ...styles.chatContainer,
                    ...(value === 'bubbles' ? {
                      width: '100%',
                      height: '100%',
                    } : {
                    })
                  },
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
            {/* <SliderListItem
              title="チャットテキスト大きさ"
              defaultValue={14}
              min={0}
              max={100}
              onChange={(value) => {
                setStyles({
                  ...styles,
                  messageText: {
                    ...styles.messageText,
                    fontSize: `${value}px`,
                  }
                });
              }} /> */}
            {/* li.message:not(:last-child) {
                display: none;
            } */}
          </List>
        </InputArea>
      </Grid>
      <Grid item md={6} xs={12} sx={{ overflow: 'hidden' }}>
        <DiscordIconPreview
          styles={styles}
          isLastMessage={isLastMessage} />
      </Grid>
      <Grid item xs={12}>
        <CssString value={getCssText(styles)} />
      </Grid>
    </Grid>
  );
};
export default CssMaker;
