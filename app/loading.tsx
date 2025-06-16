import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="container py-10">
      <div className="flex flex-col items-center justify-center mb-10">
        <Skeleton className="h-10 w-[250px] mb-4" />
        <Skeleton className="h-5 w-[350px]" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Array(6)
          .fill(0)
          .map((_, i) => (
            <Skeleton key={i} className="h-[250px] w-full rounded-xl" />
          ))}
      </div>
    </div>
  )
}
