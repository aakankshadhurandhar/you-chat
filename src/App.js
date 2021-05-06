

import { ChatEngine} from 'react-chat-engine'
import ChatFeed from './Components/Chatfeed'
import LoginForm from './Components/LoginForm'
import OptionsSettings from './Components/OptionsSettings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import { Brightness4Outlined } from '@material-ui/icons';

const projectID="a489bf76-f7f0-461d-ae88-ce0dbc5aa3da"
const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;
  /*implement a logout function simply by clearing username/password stored in localstorage + reload the page to LoginForm */
function handleClick() {
  localStorage.clear();
  window.location.reload();
}
function changeTheme(){
  const theme= document.querySelector("#theme-link");
  theme.getAttribute("href") === "Dark.css"? theme.href ="App.css" : theme.href = "Dark.css";
}

  return (
    <>
    <nav class="navigation">
        <div class="nav-brand">
          <div>Chatty</div>
        <div style={{float:"right"}}>
        <button  className="signout-btn"     onClick={handleClick} >
          <ExitToAppIcon />
        </button>
        <button  className="signout-btn"    onClick={changeTheme}><Brightness4Outlined />      </button>
        </div>
        </div>
    </nav>
    <div className="App">
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      renderOptionsSettings={(creds, chats) => <OptionsSettings {...creds} {...chats} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
    </div>
    </>
  );
};

// infinite scroll, logout, more customizations...

export default App;
