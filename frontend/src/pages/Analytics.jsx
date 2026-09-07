import { useEffect, useState } from "react";
import { getInsights } from "../services/api";
import Navbar from "../components/Navbar";
import IntensityChart from "../components/IntensityChart";
import LikelihoodChart from "../components/LikelihoodChart";
import RelevanceChart from "../components/RelevanceChart";
import TopicChart from "../components/TopicChart";
import CountryChart from "../components/CountryChart";
import RegionChart from "../components/RegionChart";
import YearChart from "../components/YearChart";
import CityChart from "../components/CityChart";

const Analytics = () => {
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
            <h2 className="text-xl font-semibold text-slate-700">Loading Analytics...</h2>
            <p className="mt-2 text-sm text-slate-500">Preparing visualizations</p>
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
        <h1 className="mb-6 text-3xl font-bold text-slate-800">Analytics Dashboard</h1>

        <div className="mb-6 rounded-xl border border-slate-100 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-800">
            Data Visualization
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            Interactive charts and analytics insights
          </p>
        </div>

        {insights.length > 0 ? (
          <section className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <IntensityChart insights={insights} />
            <LikelihoodChart insights={insights} />
            <RelevanceChart insights={insights} />
            <TopicChart insights={insights} />
            <CountryChart insights={insights} />
            <RegionChart insights={insights} />
            <YearChart insights={insights} />
            <CityChart insights={insights} />
          </section>
        ) : (
          <div className="rounded-xl border border-slate-100 bg-white p-10 text-center shadow-sm">
            <h2 className="text-lg font-semibold text-slate-700">
              No Data Available
            </h2>
            <p className="mt-2 text-sm text-slate-500">
              No insights to visualize
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Analytics;