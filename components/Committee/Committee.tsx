"use client";

import { trpc } from "@/server/client";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "../ui/card";
import Link from "next/link";
import { CommitteeCardSkeleton } from "./CommitteeCardSkeleton";

export default function Committee() {
  const commitees = trpc.committee.get.useQuery();

  return (
    <div className="flex justify-center gap-8">
      {commitees.data?.map((committee) => (
        <Link key={committee.id} href={`/committee/${committee.id}`}>
          <Card>
            <CardHeader>
              <CardTitle>{committee.title}</CardTitle>
              <CardDescription>{committee.description}</CardDescription>
            </CardHeader>
          </Card>
        </Link>
      )) ?? <CommitteeCardSkeleton />}
    </div>
  );
}

