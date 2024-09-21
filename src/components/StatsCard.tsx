interface StatsCardProps {
  label: string
  value: string
}

export function StatsCard({ label, value }: StatsCardProps) {
  return (
    <div className="border p-2 rounded-lg text-center bg-gray-100">
      <p className="text-sm text-gray-500">{label}</p>
      <p className="font-bold">{value}</p>
    </div>
  );
}