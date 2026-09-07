import { useEffect, useState } from "react";
import { getInsights } from "../services/api";
import DataTable from "../components/DataTable";
import Navbar from "../components/Navbar";

const Insights = () => {
  const [insights, setInsights] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchInsights = async () => {
      try {
        const data = await getInsights();
        setInsights(data);
      } catch (error) {
        setError("Failed to load insights");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchInsights();
  }, []);

  if (loading) {
    return (
      <div>
        <Navbar />
        <div className="flex h-screen items-center justify-center">
          <div className="text-center">
            <h2 className="text-xl font-semibold text-slate-700">Loading Insights...</h2>
            <p className="mt-2 text-sm text-slate-500">Fetching data from API</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <Navbar />
        <div className="flex h-screen items-center justify-center">
          <div className="text-center">
            <h2 className="text-xl font-semibold text-red-600">{error}</h2>
            <p className="mt-2 text-sm text-slate-500">Please check if the backend server is running</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Navbar />

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <h1 className="mb-6 text-3xl font-bold text-slate-800">All Insights</h1>

        <div className="mb-6 rounded-xl border border-slate-100 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-800">
            Data Overview
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            Showing <span className="font-semibold text-slate-700">{insights.length}</span> total insights
          </p>
        </div>

        <DataTable insights={insights} />
      </main>
    </div>
  );
};

export default Insights;