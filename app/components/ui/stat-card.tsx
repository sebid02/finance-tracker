type StatCardProps = {
    title: string
    value: string
    border: string
    color: string
}

export default function StatCard({ title, value, border, color}: StatCardProps) {
    return (
        <div className={`relative rounded-xl border ${border} ${color} p-4`}>
          <div className="absolute top-4 right-4 font-bold text-xl">$</div>
          <div className="flex flex-col gap-3">
            <div className="font-bold text-sm">{title}</div>
            <div className="font-bold text-xl">{value}</div>
          </div>
        </div>
    )
}