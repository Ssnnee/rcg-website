"use client";

import { trpc } from "@/server/client";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "../ui/card";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";


export default function Committee() {
  const addCommitee = trpc.committee.create.useMutation();

  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const addNewSpellbook = () => {
    addCommitee.mutate({
      title,
      description,
    });

    setTitle("");
    setDescription("");
  }
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
      )) ?? <div>Chargement...</div>}

      <Dialog>
        <DialogTrigger asChild>
          <Card className="flex justify-center items-center cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-10 h-10 text-gray-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </Card>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create your committee</DialogTitle>
            <DialogDescription>
              Create your collection of spells.
            </DialogDescription>
            <div className="flex flex-col gap-3">
              <p>Title:</p>
              <Input value={title} onChange={(e) => setTitle(e.target.value)} />
              <p>Description:</p>
              <Input
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <Button onClick={addNewSpellbook}>Save</Button>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>

  );
}
