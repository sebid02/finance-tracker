import StatCard from "@/app/components/ui/stat-card";

const stats = [
  { title: "Total Income", value: "$3,000", border: "border-green-700", color: "bg-green-900/80" },
  { title: "Total Expenses", value: "-$1,120", border: "border-red-700", color: "bg-red-900/80" },
  { title: "Current Balance", value: "$1,880", border: "border-blue-700", color: "bg-blue-900/80" }
]

export default function Home() {
  return (
    // Dashboard Content
    <div className="py-6">

      <span className="text-lg font-bold">Overview</span>

      {/* Separator */}
      <div className="border-b border-cyan-900 mt-1"></div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-5 mb-5 px-6">
        {stats.map((stat) => (
          <StatCard key={stat.title} {...stat} />
        ))}
      </div>

    </div>
  );
}