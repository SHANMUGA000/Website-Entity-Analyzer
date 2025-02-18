import { useState } from "react";
import axios from "axios";

function App() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleAnalyze = async () => {
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await axios.post("http://127.0.0.1:5000/analyze", { url });
      setResult(response.data);
    } catch (err) {
      setError("Failed to analyze URL.");
    }

    setLoading(false);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Website Entity & Intent Analyzer</h1>
      <input
        type="text"
        placeholder="Enter website URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className="border p-2 w-full mb-2"
      />
      <button
        onClick={handleAnalyze}
        className="bg-blue-500 text-white px-4 py-2 rounded"
        disabled={loading}
      >
        {loading ? "Analyzing..." : "Analyze"}
      </button>

      {error && <p className="text-red-500 mt-4">{error}</p>}

      {result && (
        <div className="mt-6 border p-4">
          <h2 className="text-xl font-semibold">Analysis Result</h2>
          <p><strong>Title:</strong> {result.scraped_data.title}</p>
          <p><strong>Meta Description:</strong> {result.scraped_data.meta_description}</p>
          <p><strong>Headings:</strong> {result.scraped_data.headings.join(", ")}</p>
          <h3 className="mt-4 text-lg font-semibold">Entity & Intent Analysis:</h3>
          <pre className="bg-gray-100 p-2">{result.analysis}</pre>
        </div>
      )}
    </div>
  );
}

export default App;
