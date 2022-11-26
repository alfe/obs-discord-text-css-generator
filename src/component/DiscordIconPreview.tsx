import React from 'react';
import './Discord.css'

export type CustomStyle = {
  chatContainer: { [key: string]: string };
  channelName: { [key: string]: string };
  poundSign: { [key: string]: string };
  messages: { [key: string]: string };
  message: { [key: string]: string };
  timestamp: { [key: string]: string };
  username: { [key: string]: string };
  messageText: { [key: string]: string };
  messageText__before?: { [key: string]: string };
}
export type DiscordIconPreviewProps = {
  styles: CustomStyle,
  isLastMessage?: boolean;
}
const DiscordIconPreview = ({ styles, isLastMessage }: DiscordIconPreviewProps) => {
  return (
    <div id="app-mount">
      <div style={{ fontFamily: 'Whitney, sans-serif', backgroundColor: 'transparent' }} data-reactid=".0">
        <div className="chat-container" style={{ color: '#ffffff', fontSize: 14, ...styles.chatContainer }} data-reactid=".0.0">
          <div className="channel-name" style={{ backgroundColor: 'rgba(30, 33, 36, 0.95)', ...styles.channelName }} data-reactid=".0.0.$/=10">
            <span className="pound-sign" style={styles.poundSign} data-reactid=".0.0.$/=10.$=10">#</span>
            <span data-reactid=".0.0.$/=10.1">一般</span>
          </div>
          <ul className="messages" style={{ backgroundColor: 'rgba(30, 33, 36, 0.85)', ...styles.messages }} data-reactid=".0.0.$/=11">
            {!isLastMessage && (
              <>
                <li className="message" style={styles.message} data-reactid=".0.0.$/=11.$9999999/=1$0000000">
                  <span className="timestamp" style={{ fontSize: 9.655172413793103, ...styles.timestamp }} data-reactid=".0.0.$/=11.$0000000/=1$0000000.$/=10">午後03:30</span>
                  <span className="username" style={styles.username} data-reactid=".0.0.$/=11.$0000000/=1$0000000.$/=11">ユーザ名</span>
                  <span className="message-text" style={{ color: 'rgba(255, 255, 255, 0.6)', ...styles.messageText }} data-reactid=".0.0.$/=11.$0000000/=1$0000000.$/=12">
                    <div style={{ display: 'none', ...styles.messageText__before }} />
                    <span data-reactid=".0.0.$/=11.$0000000/=1$0000000.$/=12.0">昔の投稿</span>
                  </span>
                </li>
                <li className="message" style={styles.message} data-reactid=".0.0.$/=11.$9999999/=1$0000000">
                  <span className="timestamp" style={{ fontSize: 9.655172413793103, ...styles.timestamp }} data-reactid=".0.0.$/=11.$0000000/=1$0000000.$/=10">午後03:30</span>
                  <span className="username" style={styles.username} data-reactid=".0.0.$/=11.$0000000/=1$0000000.$/=11">ユーザ名</span>
                  <span className="message-text" style={{ color: 'rgba(255, 255, 255, 0.6)', ...styles.messageText }} data-reactid=".0.0.$/=11.$0000000/=1$0000000.$/=12">
                    <div style={{ display: 'none', ...styles.messageText__before }} />
                    <span data-reactid=".0.0.$/=11.$0000000/=1$0000000.$/=12.0">🐈ねこ🐈</span>
                  </span>
                </li>
                <li className="message" style={styles.message} data-reactid=".0.0.$/=11.$9999999/=1$0000000">
                  <span className="timestamp" style={{ fontSize: 9.655172413793103, ...styles.timestamp }} data-reactid=".0.0.$/=11.$0000000/=1$0000000.$/=10">午後03:30</span>
                  <span className="username" style={styles.username} data-reactid=".0.0.$/=11.$0000000/=1$0000000.$/=11">ユーザ名</span>
                  <span className="message-text" style={{ color: 'rgba(255, 255, 255, 0.6)', ...styles.messageText }} data-reactid=".0.0.$/=11.$0000000/=1$0000000.$/=12">
                    <div style={{ display: 'none', ...styles.messageText__before }} />
                    <span data-reactid=".0.0.$/=11.$0000000/=1$0000000.$/=12.0">とても長い文字列とても長い文字列とても長い文字列とても長い文字列とても長い文字列とても長い文字列とても長い文字列とても長い文字列とても長い文字列とても長い文字列とても長い文字列とても長い文字列とても長い文字列とても長い文字列とても長い文字列とても長い文字列</span>
                  </span>
                </li>
              </>
            )}
            <li className="message" style={styles.message} data-reactid=".0.0.$/=11.$9999999/=1$0000000">
              <span className="timestamp" style={{ fontSize: 9.655172413793103, ...styles.timestamp }} data-reactid=".0.0.$/=11.$0000000/=1$0000000.$/=10">午後03:30</span>
              <span className="username" style={styles.username} data-reactid=".0.0.$/=11.$0000000/=1$0000000.$/=11">ユーザ名</span>
              <span className="message-text" style={{ color: 'rgba(255, 255, 255, 0.6)', ...styles.messageText }} data-reactid=".0.0.$/=11.$0000000/=1$0000000.$/=12">
                <div style={{ display: 'none', ...styles.messageText__before }} />
                <span data-reactid=".0.0.$/=11.$0000000/=1$0000000.$/=12.0">最新の投稿</span>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default DiscordIconPreview;

