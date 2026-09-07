import { useEffect, useRef } from "react";
import * as d3 from "d3";

const TopicChart = ({ insights }) => {
  const chartRef = useRef();

  useEffect(() => {
    if (!insights.length) return;

    const svg = d3.select(chartRef.current);
    svg.selectAll("*").remove();

    const data = Array.from(
      d3.rollup(
        insights,
        (items) => items.length,
        (item) => item.topic || "Unknown"
      ),
      ([topic, count]) => ({ topic, count })
    )
      .sort((a, b) => b.count - a.count)
      .slice(0, 10);

    const width = 650;
    const height = 350;

    const margin = {
      top: 20,
      right: 20,
      bottom: 80,
      left: 55,
    };

    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    svg
      .attr("width", "100%")
      .attr("viewBox", `0 0 ${width} ${height}`)
      .attr("preserveAspectRatio", "xMidYMid meet");

    const chart = svg
      .append("g")
      .attr(
        "transform",
        `translate(${margin.left},${margin.top})`
      );

    const x = d3
      .scaleBand()
      .domain(data.map((d) => d.topic))
      .range([0, innerWidth])
      .padding(0.25);

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.count) || 1])
      .nice()
      .range([innerHeight, 0]);

    chart
      .append("g")
      .attr("transform", `translate(0,${innerHeight})`)
      .call(d3.axisBottom(x))
      .selectAll("text")
      .attr("transform", "rotate(-35)")
      .style("text-anchor", "end")
      .style("font-size", "11px");

    chart
      .append("g")
      .call(d3.axisLeft(y))
      .selectAll("text")
      .style("font-size", "11px");

    chart
      .selectAll(".bar")
      .data(data)
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr("x", (d) => x(d.topic))
      .attr("y", (d) => y(d.count))
      .attr("width", x.bandwidth())
      .attr("height", (d) => innerHeight - y(d.count))
      .attr("rx", 5)
      .attr("fill", "#334155");

    chart
      .selectAll(".value")
      .data(data)
      .enter()
      .append("text")
      .attr("x", (d) => x(d.topic) + x.bandwidth() / 2)
      .attr("y", (d) => y(d.count) - 7)
      .attr("text-anchor", "middle")
      .style("font-size", "11px")
      .style("font-weight", "600")
      .style("fill", "#334155")
      .text((d) => d.count);
  }, [insights]);

  return (
    <div className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm">
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-slate-800">
          Topic Distribution
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Number of insights by topic
        </p>
      </div>

      {insights.length > 0 ? (
        <svg
          ref={chartRef}
          className="h-auto w-full"
        />
      ) : (
        <div className="flex h-80 items-center justify-center text-sm text-slate-400">
          No data available
        </div>
      )}
    </div>
  );
};

export default TopicChart;