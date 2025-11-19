import type { Message } from '../types'



export default function MessageBubble({ message }: { message: Message }) {
const isUser = message.role === 'user'
return (
<div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-2`}>
<div className={`max-w-[75%] px-4 py-2 rounded-2xl ${isUser ? 'bg-sky-600 text-white' : 'bg-slate-800 text-gray-100'}`}>
<div className="whitespace-pre-wrap">{message.text}</div>
</div>
</div>
)
}
