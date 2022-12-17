import { Story } from "@storybook/react";
import CssString, { CssStringProps } from '../CssString';

export default {
  title: 'component/CssString',
  component: CssString,
};
const Template: Story<CssStringProps> = (args) => <CssString {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: `.voiceStates {
  display: flex;
} 
.voiceState {
  display: flex; 
  flex-direction: column;
}   
.name {
  max-width: 64px; 
  box-sizing: border-box; 
  text-overflow: clip; 
  white-space: nowrap; 
  overflow: hidden; 
  display: block; 
  text-align: center;
}`
};
