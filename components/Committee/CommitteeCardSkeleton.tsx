import { Skeleton } from "../ui/skeleton";
import {
  Card,
  CardHeader,
} from "../ui/card";

export function CommitteeCardSkeleton() {
  return (
    <>
      {[...Array(3)].map((_, index) => (
        <div key={index} className="space-y-4">
          <Card>
            <CardHeader>
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[350px]" />
            </CardHeader>
          </Card>
        </div>
      ))}
    </>
  );
}

