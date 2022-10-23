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

  const [alignment, setAlignment] = React.useState('vertical');
  const [activeMove, setActiveMove] = React.useState(false);
  const [activeNamePosition, setActiveNamePosition] = React.useState(true);
  const { t } = useTranslation("translation", { keyPrefix: "css_maker" });
  console.log(styles)

  return (
    <Grid container spacing={2}>
      <Grid item md={6} xs={12}>
        <InputArea>
          <List>
          </List>
        </InputArea>
      </Grid>
      <Grid item md={6} xs={12} sx={{ overflow: 'hidden' }}>
        <DiscordIconPreview styles={styles} />
      </Grid>
      <Grid item xs={12}>
        <CssString value={getCssText(styles)} />
      </Grid>
    </Grid>
  );
};
export default CssMaker;
