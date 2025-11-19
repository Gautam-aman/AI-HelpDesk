import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'


export default function useConversationId() {
const [id, setId] = useState<string | null>(null)


useEffect(() => {
let stored = localStorage.getItem('cfs_convo_id')
if (!stored) {
stored = uuidv4()
localStorage.setItem('cfs_convo_id', stored)
}
setId(stored)
}, [])


return id
}