import { Skeleton } from "@/components/ui/skeleton"

export function SkeletonDataTable() {
	return (
		<div className="flex flex-col space-y-3 mt-6">
			<div className="flex justify-between mb-8">
				<Skeleton className="h-8 w-[300px] mb-4" />
				<Skeleton className="h-8 w-[120px] mb-4" />
			</div>
			<div className="space-y-2">
				<Skeleton className="h-166 w-full" />
			</div>
		</div>
	)
}
