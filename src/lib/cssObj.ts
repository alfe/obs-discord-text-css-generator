import { CustomStyle } from "../component/DiscordIconPreview";

type StringValArg = {
  val: string;
  styles: CustomStyle;
  setStyles: React.Dispatch<React.SetStateAction<CustomStyle>>;
};

// アイコンの並び
const iconAlign = ({ val, styles, setStyles }: StringValArg) => {
  switch (val) {
    case 'horizontal':
      setStyles({
        ...styles,
        message: {

        },
      });
      break;
    default:
      setStyles({
        ...styles,
      });
      break;
  }
};

export default {
  iconAlign
};
