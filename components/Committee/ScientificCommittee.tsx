"use client";
import { trpc } from "@/server/client";
import { Separator } from "../ui/separator";
import { CommitteeSkeleton } from "./CommitteeSkeleton";

export default function ScientificCommittee() {
  const commiteeMembersList = trpc.member.getMembers.useQuery({committeeId: 1});
  return (
      <div className='flex gap-4 flex-col text-left  text-xl'>
        {commiteeMembersList.data?.map((member, index) => (
          <div key={index} >
            <div>
              <h2> {member.name} </h2>
              <p> {member.title} </p>
              <a href={member.resumePdf ?? ''} className="text-blue-500"> CV</a>
            </div>
            {index !== commiteeMembersList.data?.length - 1 && <Separator />}
          </div>
        )) ?? <CommitteeSkeleton />}
      </div>
  );
}
