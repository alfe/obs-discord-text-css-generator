import { CustomStyle } from "../component/DiscordTextPreview";

type StringValArg = {
  value: string;
  styles?: CustomStyle;
  setStyles: React.Dispatch<React.SetStateAction<CustomStyle>>;
};

const initialStyle: CustomStyle = {
  chatContainer: {},
  channelName: {},
  poundSign: {},
  messages: {},
  message: {},
  timestamp: {},
  username: {},
  messageText: {},
};

// アイコンの並び
const messageStyle = ({ value, setStyles }: StringValArg) => {
  switch (value) {
    case 'text':
      setStyles(initialStyle);
      break;
    case 'square':
      setStyles({
        ...initialStyle,
        timestamp: {
          marginBottom: '-16px',
          textAlign: 'right',
        },
        username: {
          marginBottom: '8px',
        },
        messageText: {
          color: '#333',
        },
        message: {
          border: '1px solid #FFFFFF',
          borderRadius: '8px',
          backgroundColor: '#FFFFFF',
          color: '#333',
          padding: '16px',
          marginBottom: '16px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        },
        messages: {
          backgroundColor: 'transparent',
          height: '100%',
        },
        chatContainer: {
          width: '100%',
          height: '100%',
          overflow: 'hidden',
        },
      });
      break;
    case 'bubbles':
      setStyles({
        ...initialStyle,
        timestamp: {
          width: '80px',
          overflow: 'visible',
          marginRight: '-84px',
        },
        username: {
          margin: '24px 0 0 0',
          width: '80px',
        },
        messageText: {
          width: 'calc(100% - 132px)',
          background: '#FFF',
          color: '#333',
          display: 'block',
          padding: '16px',
          borderRadius: '16px',
        },
        messageText__before: {
          position: 'absolute',
          display: 'inline-block',
          content: '""',
          width: '32px',
          height: '32px',
          background: 'linear-gradient(143deg, transparent 65%, rgb(255, 255, 255) 65%, rgb(255, 255, 255) 100%)',
          margin: '-8px 0px 0px -36px',
          transform: 'rotateZ(8deg)',
          zIndex: '0',
        },
        message: {
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-start',
          overflow: 'visible',
          maxHeight: 'unset',
        },
        messages: {
          backgroundColor: 'transparent',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
        },
        chatContainer: {
          width: '100%',
          height: '100%',
          overflow: 'hidden',
        },
      });
      break;
    default:
      break;
  }
};

export default {
  messageStyle,
};
