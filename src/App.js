

import {ChatEngine} from 'react-chat-engine'
import ChatFeed from './Components/Chatfeed'
import LoginForm from './Components/LoginForm'
import OptionsSettings from './Components/OptionsSettings';
const projectID="a489bf76-f7f0-461d-ae88-ce0dbc5aa3da"
const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      renderOptionsSettings={(creds, chats) => <OptionsSettings {...creds} {...chats} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  );
};

// infinite scroll, logout, more customizations...

export default App;
