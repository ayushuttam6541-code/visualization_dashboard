const KPICards = ({ insights }) => {
  const totalInsights = insights.length;

  const averageIntensity =
    totalInsights > 0
      ? (
          insights.reduce(
            (sum, item) => sum + (Number(item.intensity) || 0),
            0
          ) / totalInsights
        ).toFixed(1)
      : "0.0";

  const averageLikelihood =
    totalInsights > 0
      ? (
          insights.reduce(
            (sum, item) => sum + (Number(item.likelihood) || 0),
            0
          ) / totalInsights
        ).toFixed(1)
      : "0.0";

  const averageRelevance =
    totalInsights > 0
      ? (
          insights.reduce(
            (sum, item) => sum + (Number(item.relevance) || 0),
            0
          ) / totalInsights
        ).toFixed(1)
      : "0.0";

  const cards = [
    {
      title: "Total Insights",
      value: totalInsights,
      description: "Total records available",
    },
    {
      title: "Avg. Intensity",
      value: averageIntensity,
      description: "Average intensity score",
    },
    {
      title: "Avg. Likelihood",
      value: averageLikelihood,
      description: "Average likelihood score",
    },
    {
      title: "Avg. Relevance",
      value: averageRelevance,
      description: "Average relevance score",
    },
  ];

  return (
    <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => (
        <div
          key={card.title}
          className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
        >
          <p className="text-sm font-medium text-slate-500">
            {card.title}
          </p>

          <h3 className="mt-2 text-3xl font-bold text-slate-800">
            {card.value}
          </h3>

          <p className="mt-2 text-xs text-slate-400">
            {card.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default KPICards;