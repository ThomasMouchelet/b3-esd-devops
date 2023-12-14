import { useState } from "react"

const MessageForm = ({socket}) => {
    const [credentials, setCredentials] = useState({})

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        socket.emit('sendMessage', credentials)
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setCredentials({
            ...credentials,
            [name]: value
        })
    }

    return ( 
        <div>
            <h1>Message Form</h1>

            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="content" name="content" onChange={handleChange} />
                <input type="text" placeholder="username" name="username" onChange={handleChange} />
                <input type="submit" value="Send" />
            </form>
        </div>
     );
}
 
export default MessageForm;