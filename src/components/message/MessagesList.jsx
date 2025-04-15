import React, { useContext, useEffect } from 'react'
import MessageContext from './context/MessageContext.context'

export default function MessagesList() {

  const { getMessages, displayMessages, messages} = useContext(MessageContext);

  useEffect(() => {
    getMessages();
  }, [])

  console.log(messages);

  return (
    <div className='section'>
        <h1>Messages List</h1>   
        {!!messages ? <div> {displayMessages()} </div> : <p></p>}     
    </div>
  )
}
