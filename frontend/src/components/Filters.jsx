const Filters = ({
  insights,
  filters,
  onFilterChange,
  onReset,
}) => {
  const getOptions = (field) => {
    const options = [
      ...new Set(
        insights
          .map((item) => item[field])
          .filter((value) => {
            // Filter out undefined, null, empty strings, and whitespace-only strings
            return value !== undefined &&
                   value !== null &&
                   value !== "" &&
                   String(value).trim() !== "";
          })
      ),
    ].sort();

    return options;
  };

  const filterConfig = [
    {
      label: "End Year",
      name: "end_year",
    },
    {
      label: "Topics",
      name: "topic",
    },
    {
      label: "Sector",
      name: "sector",
    },
    {
      label: "Region",
      name: "region",
    },
    {
      label: "PESTLE",
      name: "pestle",
    },
    {
      label: "SWOT",
      name: "swot",
    },
    {
      label: "Source",
      name: "source",
    },
    {
      label: "Country",
      name: "country",
    },
    {
      label: "City",
      name: "city",
    },
  ];

  return (
    <div className="mb-6 rounded-xl border border-slate-100 bg-white p-5 shadow-sm">
      <div className="mb-5">
        <h2 className="text-lg font-semibold text-slate-800">
          Filters
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Filter insights to explore specific areas of the dataset.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filterConfig.map((filter) => {
          const options = getOptions(filter.name);

          return (
            <div key={filter.name}>
              <label className="mb-1.5 block text-sm font-medium text-slate-600">
                {filter.label}
              </label>

              <select
                value={filters[filter.name]}
                onChange={(event) =>
                  onFilterChange(
                    filter.name,
                    event.target.value
                  )
                }
                className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-700 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
              >
                <option value="">
                  All {filter.label}
                </option>

                {options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          );
        })}
      </div>

      <div className="mt-5 flex items-center justify-between">
        <p className="text-sm text-slate-500">
          Showing{" "}
          <span className="font-semibold text-slate-700">
            {insights.length}
          </span>{" "}
          total records
        </p>

        <button
          type="button"
          onClick={onReset}
          className="rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-slate-700"
        >
          Reset Filters
        </button>
      </div>
    </div>
  );
};

export default Filters;