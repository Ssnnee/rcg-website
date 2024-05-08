"use client";
import { trpc } from "@/server/client";
import { CommitteeSkeleton } from "./CommitteeSkeleton";
import { Card, CardContent, CardFooter, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import Link from "next/link";

export default function LectureCommittee() {
  const commiteeMembersList = trpc.member.getMembers.useQuery({committeeId: 2});
  return (
      <div>
        {commiteeMembersList.data?.map((member, index) => (
        <div key={index} className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center items-center'>
          <div>
            <Card className="sm:w-[500px] md:w-[350px]">
              <CardTitle className="text-2xl text-center my-2"> {member.name} </CardTitle>
              <CardContent className="text-center">
                <p className="text-lg"> {member.title} </p>
              </CardContent>
              <CardFooter className="">
                <Button variant={"outline"} className="w-full" >
                  <Link href={member.resumePdf ?? ''} className="text-blue-500">CV</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
        )) ?? <CommitteeSkeleton />}
      </div>
  );
}
