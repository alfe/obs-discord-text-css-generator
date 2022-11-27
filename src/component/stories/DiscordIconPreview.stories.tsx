import { Story } from "@storybook/react";
import DiscordTextPreview, { DiscordTextPreviewProps } from '../DiscordTextPreview';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'component/DiscordTextPreview',
  component: DiscordTextPreview,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<DiscordTextPreviewProps> = (args) => <DiscordTextPreview {...args} />;

export const Default = Template.bind({});
Default.args = {
  styles: {
    chatContainer: {},
    channelName: {},
    poundSign: {},
    messages: {},
    message: {},
    timestamp: {},
    username: {},
    messageText: {},
  },
};