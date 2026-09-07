import { useEffect, useState } from "react";
import { getInsights } from "../services/api";

import Navbar from "../components/Navbar";
import Filters from "../components/Filters";
import KPICards from "../components/KPICards";
import IntensityChart from "../components/IntensityChart";
import LikelihoodChart from "../components/LikelihoodChart";
import RelevanceChart from "../components/RelevanceChart";
import TopicChart from "../components/TopicChart";
import CountryChart from "../components/CountryChart";
import RegionChart from "../components/RegionChart";
import DataTable from "../components/DataTable";
import YearChart from "../components/YearChart";
import CityChart from "../components/CityChart";

const Dashboard = () => {
  const [insights, setInsights] = useState([]);
  const [filteredInsights, setFilteredInsights] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [filters, setFilters] = useState({
    end_year: "",
    topic: "",
    sector: "",
    region: "",
    pestle: "",
    source: "",
    swot: "",
    country: "",
    city: "",
  });

  useEffect(() => {
    const fetchInsights = async () => {
      try {
        const data = await getInsights();
        console.log("Fetched insights:", data);
        setInsights(data);
        setFilteredInsights(data);
      } catch (error) {
        setError("Failed to load insights");
        console.error("Error fetching insights:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchInsights();
  }, []);

  useEffect(() => {
    let filtered = insights;

    // Apply each filter
    Object.keys(filters).forEach((key) => {
      const filterValue = filters[key];

      // Only apply filter if value is set and not empty
      if (filterValue && filterValue !== "") {
        filtered = filtered.filter((item) => {
          const value = item[key];

          // Handle undefined/null values
          if (value === undefined || value === null) {
            return false;
          }

          // Handle empty strings and whitespace
          if (value === "" || String(value).trim() === "") {
            return false;
          }

          // Convert both to string for comparison
          const valueStr = String(value).trim();
          const filterStr = String(filterValue).trim();

          // Case-insensitive comparison
          return valueStr.toLowerCase() === filterStr.toLowerCase();
        });
      }
    });

    setFilteredInsights(filtered);
  }, [filters, insights]);

  const handleFilterChange = (name, value) => {
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleReset = () => {
    setFilters({
      end_year: "",
      topic: "",
      sector: "",
      region: "",
      pestle: "",
      source: "",
      swot: "",
      country: "",
      city: "",
    });
  };

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-slate-700">Loading Dashboard...</h2>
          <p className="mt-2 text-sm text-slate-500">Fetching insights from API</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-red-600">{error}</h2>
          <p className="mt-2 text-sm text-slate-500">Please check if the backend server is running</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Navbar />

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <h1 className="mb-6 text-3xl font-bold text-slate-800">Visualization Dashboard</h1>

        <Filters
          insights={insights}
          filters={filters}
          onFilterChange={handleFilterChange}
          onReset={handleReset}
        />

        <KPICards insights={filteredInsights} />

        {filteredInsights.length === 0 ? (
          <div className="rounded-xl border border-slate-100 bg-white p-10 text-center shadow-sm">
            <h2 className="text-lg font-semibold text-slate-700">
              No Data Found
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              No insights match the selected filters.
            </p>

            <button
              type="button"
              onClick={handleReset}
              className="mt-5 rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-slate-700"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <section className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <IntensityChart insights={filteredInsights} />
            <LikelihoodChart insights={filteredInsights} />
            <RelevanceChart insights={filteredInsights} />
            <TopicChart insights={filteredInsights} />
            <CountryChart insights={filteredInsights} />
            <RegionChart insights={filteredInsights} />
            <YearChart insights={filteredInsights} />
            <CityChart insights={filteredInsights} />
          </section>
        )}

        <DataTable insights={filteredInsights} />
      </main>
    </div>
  );
};

export default Dashboard;