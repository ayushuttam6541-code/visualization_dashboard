const DataTable = ({ insights }) => {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-100 bg-white shadow-sm">
      <div className="border-b border-slate-100 px-5 py-4">
        <h2 className="text-lg font-semibold text-slate-800">
          Insight Data
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Detailed view of available insights
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[900px] border-collapse">
          <thead>
            <tr className="bg-slate-50">
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                Title
              </th>

              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                Topic
              </th>

              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                Sector
              </th>

              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                Country
              </th>

              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                Region
              </th>

              <th className="px-4 py-3 text-center text-xs font-semibold uppercase tracking-wide text-slate-500">
                Intensity
              </th>

              <th className="px-4 py-3 text-center text-xs font-semibold uppercase tracking-wide text-slate-500">
                Likelihood
              </th>

              <th className="px-4 py-3 text-center text-xs font-semibold uppercase tracking-wide text-slate-500">
                Relevance
              </th>
            </tr>
          </thead>

          <tbody>
            {insights.length > 0 ? (
              insights.map((item, index) => (
                <tr
                  key={item._id || index}
                  className="border-t border-slate-100 transition hover:bg-slate-50"
                >
                  <td className="max-w-xs px-4 py-3 text-sm font-medium text-slate-700">
                    {item.title || "—"}
                  </td>

                  <td className="px-4 py-3 text-sm text-slate-600">
                    {item.topic || "—"}
                  </td>

                  <td className="px-4 py-3 text-sm text-slate-600">
                    {item.sector || "—"}
                  </td>

                  <td className="px-4 py-3 text-sm text-slate-600">
                    {item.country || "—"}
                  </td>

                  <td className="px-4 py-3 text-sm text-slate-600">
                    {item.region || "—"}
                  </td>

                  <td className="px-4 py-3 text-center text-sm font-semibold text-slate-700">
                    {item.intensity ?? 0}
                  </td>

                  <td className="px-4 py-3 text-center text-sm font-semibold text-slate-700">
                    {item.likelihood ?? 0}
                  </td>

                  <td className="px-4 py-3 text-center text-sm font-semibold text-slate-700">
                    {item.relevance ?? 0}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="8"
                  className="px-4 py-12 text-center text-sm text-slate-400"
                >
                  No insight data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {insights.length > 0 && (
        <div className="border-t border-slate-100 px-5 py-3 text-sm text-slate-500">
          Showing <span className="font-semibold text-slate-700">
            {insights.length}
          </span>{" "}
          insights
        </div>
      )}
    </div>
  );
};

export default DataTable;