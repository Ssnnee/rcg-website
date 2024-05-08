import { Skeleton } from "../ui/skeleton";
import { Separator } from "../ui/separator";
import { Card, CardContent, CardFooter, CardTitle } from "../ui/card";
import { Button } from "../ui/button";

export function CommitteeSkeleton() {
  return (
    <>
      {[...Array(6)].map((_, index) => (
        <div key={index} className="space-y-4">
          <Card className="sm:w-[500px] md:w-[350px]">
            <CardTitle className="my-6 flex justify-center items-center">
              <Skeleton className="h-4 w-[150px]" />
            </CardTitle>
            <CardContent className="flex justify-center items-center">
              <Skeleton className="h-4 w-[200px]" />
            </CardContent>
            <CardFooter className="w-full">
              <Button variant={"outline"} className="w-full" >
                <Skeleton className="h-5 w-16" />
              </Button>
            </CardFooter>
          </Card>
        </div>
      ))}
    </>
  );
}
