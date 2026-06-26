function Topbar() {
  return (
    <div className="h-16 bg-white shadow flex items-center justify-between px-8">
      <div>
        <h2 className="text-xl font-bold text-pink-600">
          Wedding Planner
        </h2>
      </div>

      <div>
        <button className="bg-red-500 text-white px-4 py-2 rounded-lg">
          Logout
        </button>
      </div>
    </div>
  );
}

export default Topbar;