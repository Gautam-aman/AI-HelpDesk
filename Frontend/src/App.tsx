
import useConversationId from "./hooks/useConversationId";
import ChatWindow from "./components/ChatWindow";
import QueryForm from "./components/QueryForm";

export default function App() {
  const convoId = useConversationId();

  if (!convoId) return <div className="p-8">Initializing...</div>;

  return (
    <div className="min-h-screen flex flex-col bg-slate-900">
      {/* HEADER */}
      <header className="p-4 bg-slate-800 border-b border-slate-700 shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-semibold text-white tracking-wide">
            Aman's Helpdesk
          </h1>
          <div className="text-sm text-gray-300">
            Conversation: <span className="font-mono">{convoId}</span>
          </div>
        </div>
      </header>

      {/* CONTENT GRID */}
      <main className="flex-1 max-w-7xl mx-auto w-full p-6 grid gap-6 grid-cols-1 lg:grid-cols-2">
        {/* LEFT CHAT WINDOW */}
        <section className="h-[75vh] bg-gradient-to-b from-slate-950 to-slate-900 rounded-xl shadow-xl p-4 overflow-hidden border border-slate-700">
          <ChatWindow conversationId={convoId} />
        </section>

        {/* RIGHT QUICK QUERY */}
        <section className="h-[75vh] bg-slate-800 rounded-xl shadow-xl p-6 border border-slate-700 overflow-auto">
          <h2 className="text-xl font-semibold mb-4 text-gray-200">
            Quick Query
          </h2>
          <QueryForm conversationId={convoId} />
        </section>
      </main>

      {/* FOOTER */}
      <footer className="p-4 text-center text-sm text-gray-500">
        Built with ❤️ —Aman Helpdesk Frontend
      </footer>
    </div>
  );
}
