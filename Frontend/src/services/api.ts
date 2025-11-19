const API_BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080'


export async function postQuery(query: string, conversationId: string): Promise<string> {
const res = await fetch(`${API_BASE}/api/v1/helpdesk`, {
method: 'POST',
headers: {
'Content-Type': 'text/plain',
'ConversationId': conversationId
},
body: query
})
if (!res.ok) throw new Error(`HTTP ${res.status}`)
return res.text()
}

export async function streamQuery(query: string, conversationId: string, onToken: (token: string) => void) {
const res = await fetch(`${API_BASE}/api/v1/helpdesk/stream`, {
method: 'POST',
headers: {
'Content-Type': 'text/plain',
'ConversationId': conversationId
},
body: query
})


if (!res.ok) {
const txt = await res.text()
throw new Error(`HTTP ${res.status}: ${txt}`)
}


if (!res.body) return


const reader = res.body.getReader()
const decoder = new TextDecoder()
let buf = ''


while (true) {
const { done, value } = await reader.read()
if (done) break
buf += decoder.decode(value, { stream: true })

let lines = buf.split(/\r?\n/)
buf = lines.pop() || ''
for (const line of lines) {
const token = line.trim()
if (token) onToken(token)
}
}
if (buf.trim()) onToken(buf.trim())
}