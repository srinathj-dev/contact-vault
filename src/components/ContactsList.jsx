import React from 'react'

const ContactsList = ({contacts}) => {
  return (
   <pre>{JSON.stringify(contacts, null, 2)}</pre>
  )
}

export default ContactsList