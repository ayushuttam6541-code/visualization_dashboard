import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? "text-white font-medium" : "text-slate-400 hover:text-white";
  };

  return (
    <nav className="bg-slate-900 text-white shadow-lg">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="hover:opacity-80">
          <div>
            <h2 className="text-xl font-bold tracking-wide">
              Insight Dashboard
            </h2>
            <p className="text-xs text-slate-400">
              Data Visualization & Analytics
            </p>
          </div>
        </Link>

        <div className="hidden items-center gap-6 text-sm md:flex">
          <Link
            to="/"
            className={`transition-colors ${isActive("/")}`}
          >
            Dashboard
          </Link>

          <Link
            to="/insights"
            className={`transition-colors ${isActive("/insights")}`}
          >
            Insights
          </Link>

          <Link
            to="/analytics"
            className={`transition-colors ${isActive("/analytics")}`}
          >
            Analytics
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;