import { Skeleton } from "../ui/skeleton";
import { Separator } from "../ui/separator";

export function CommitteeSkeleton() {
  return (
    <>
      {[...Array(5)].map((_, index) => (
        <div key={index} className="space-y-4">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[350px]" />
          <Skeleton className="h-5 w-16" />
          {index !== [...Array(5)].length - 1 && <Separator />}
        </div>
      ))}
    </>
  );
}

