import  { useState } from "react";
import { postQuery } from "../services/api";

export default function QueryForm({ conversationId }: { conversationId: string }) {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function submit() {
    if (!query.trim()) return;
    setLoading(true);
    try {
      const res = await postQuery(query, conversationId);
      setResult(res);
    } catch (e: any) {
      setResult("Error: " + e.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <textarea
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        rows={4}
        className="w-full p-3 rounded-md bg-slate-900 text-gray-200 border border-slate-600 focus:ring focus:ring-blue-500 resize-none"
        placeholder="Type your query here..."
      />

      <div className="flex gap-3 mt-3">
        <button
          onClick={submit}
          className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
        >
          Submit
        </button>
        <button
          onClick={() => {
            setQuery("");
            setResult(null);
          }}
          className="px-4 py-2 rounded-md bg-gray-600 text-white hover:bg-gray-700 transition"
        >
          Reset
        </button>
      </div>

      {loading && (
        <div className="mt-3 text-sm text-gray-400">Loading...</div>
      )}

      {result && (
        <div className="mt-4 p-3 bg-slate-900 border border-slate-700 rounded text-gray-200 whitespace-pre-wrap">
          {result}
        </div>
      )}
    </div>
  );
}
