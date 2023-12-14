import { useEffect } from "react";

const MessageList = ({socket}) => {

    useEffect(() => {
        if(!socket) return
        socket.on('receiveMessage', (message) => {
            console.log(message)
        })
    }, [socket])

    return ( 
        <div>
            <h1>Message List</h1>
        </div>
     );
}
 
export default MessageList;