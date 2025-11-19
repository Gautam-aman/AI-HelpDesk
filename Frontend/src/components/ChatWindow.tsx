import  { useState, useRef } from 'react'
import type { Message } from '../types'
import MessageBubble from './MessageBubble'
import { postQuery, streamQuery } from '../services/api'

export default function ChatWindow({ conversationId }: { conversationId: string }) {
    const [messages, setMessages] = useState<Message[]>([])
    const [input, setInput] = useState('')
    const [loading, setLoading] = useState(false)
    const messagesEndRef = useRef<HTMLDivElement | null>(null)


    const scrollToBottom = () => messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })


    async function sendNonStreaming() {

        if (!input.trim()) return
        const userMsg: Message = { id: crypto.randomUUID(), role: 'user', text: input }
        setMessages(prev => [...prev, userMsg])
        setInput('')
        setLoading(true)
        try {
            const resp = await postQuery(userMsg.text, conversationId)
            const assistant: Message = { id: crypto.randomUUID(), role: 'assistant', text: resp }
            setMessages(prev => [...prev, assistant])
        } catch (e: any) {
            setMessages(prev => [...prev, { id: crypto.randomUUID(), role: 'assistant', text: `Error: ${e.message}` }])
        } finally {
            setLoading(false)
            scrollToBottom()
        }
    }

    async function sendStreaming() {
if (!input.trim()) return
const userMsg: Message = { id: crypto.randomUUID(), role: 'user', text: input }
setMessages(prev => [...prev, userMsg])
setInput('')
setLoading(true)


const assistantId = crypto.randomUUID()
setMessages(prev => [...prev, { id: assistantId, role: 'assistant', text: '' }])


try {
await streamQuery(userMsg.text, conversationId, (token) => {
setMessages(prev => prev.map(m => m.id === assistantId ? { ...m, text: m.text + token } : m))
scrollToBottom()
})
} catch (e: any) {
setMessages(prev => [...prev, { id: crypto.randomUUID(), role: 'assistant', text: `Error: ${e.message}` }])
} finally {
setLoading(false)
}
}

return (
<div className="flex flex-col h-full max-w-3xl mx-auto p-4">
<div className="flex-1 overflow-auto mb-4">
{messages.map(m => (
<MessageBubble key={m.id} message={m} />
))}
<div ref={messagesEndRef} />
</div>


<div className="flex gap-2">
<textarea value={input} onChange={e => setInput(e.target.value)} rows={2} className="flex-1 resize-none p-3 rounded-md bg-slate-900" placeholder="Ask something..." />
<div className="flex flex-col gap-2">
<button onClick={sendStreaming} className="px-4 py-2 rounded-md bg-emerald-600">Stream</button>
<button onClick={sendNonStreaming} className="px-4 py-2 rounded-md bg-sky-600">Send</button>
</div>
</div>


{loading && <div className="text-sm text-gray-400 mt-2">Processing...</div>}
</div>
)
}