import { PrettyChatWindow } from 'react-chat-engine-pretty';

const ChatsPage = (props) => {
  return (
    <div className="background">
        <PrettyChatWindow
              projectId="cffb653e-9565-4455-be36-dd454e9ab09c"
              username={props.user.username}
              secret={props.user.secret}
              style={{ height: '100%' }}
            />
    </div>
  )
}




export default ChatsPage;