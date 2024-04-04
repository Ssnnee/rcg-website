"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { trpc } from "@/server/client";
import React, { useRef, useState } from "react";
import type { PutBlobResult } from '@vercel/blob';

export default function CommiteePage({
  params,
}: {
  params: { committee: number };
}) {

  const committee = trpc.committee.getById.useQuery({
    id: +params.committee,
  });


  const addMember = trpc.member.create.useMutation();
  const updateMember = trpc.member.update.useMutation();
  const delMember = trpc.member.delete.useMutation();
  const upFile = trpc.member.updateFile.useMutation();

  const addNewMember  = async () => {
    if (!committee.data?.id) {
      return ;
    }
    if (fileRef.current?.files) {
      const file = fileRef.current.files[0];
      if (!file) {
        alert('Veuillez sélectionner un fichier non vide.');
        return;
      }
      const response = await fetch(
        `/api/file?filename=${file.name}`,
          {
            method: "POST",
            body: file
          });
      const newBlob = (await response.json()) as PutBlobResult;

      addMember.mutate(
        {
          title,
          name,
          committeeId: committee.data?.id,
          resumePdf: `${newBlob.url}`,
        },
        {
          onSettled: () => committee.refetch(),
        }
      );

      setTitle("");
      setName("");
      setBlob(newBlob);
    }
  };

  const updateFile = async (id: number, path: string | null) => {
    if (!committee.data?.id || !path) {
      return ;
    }
    if (fileRefUpdate.current?.files) {
      const file = fileRefUpdate.current.files[0];
      if (!file) {
        alert('Veuillez sélectionner un fichier non vide.');
        return;
      }
      const response = await fetch(
        `/api/file?filename=${file.name}`,
          {
            method: "POST",
            body: file
          });
      const newBlob = (await response.json()) as PutBlobResult;
      upFile.mutate(
        {
          id: id,
          resumePdf: `${newBlob.url}`,
        },
        {
          onSettled: () => committee.refetch(),
        }
      );
    }
    onDelete(path);
  }

  const updateNewMember = (id: number) => {
    if (!committee.data?.id) {
      return;
    }
    console.log("Here is the id I got :", params.committee)
    updateMember.mutate(
      {
        id: id,
        title: titleUpdate,
        name: nameUpdate,
      },
      {
        onSettled: () => committee.refetch(),
      });
        setTitleUpdate("");
        setNameUpdate("");
  };

  const onDelete = async (path: string) => {
    if (!path) {
      return ;
    }
    await fetch(
      `/api/file`,
      {
        method: "DELETE",
        body: JSON.stringify({path: path}),
      });
  }

  const deleteMember = (id: number, path: string | null) => {
    if (!path) {
      return ;
    }
    delMember.mutate(
      {
        id,
      },
      {
        onSettled: () => committee.refetch(),
      }
    );
    onDelete(path);
  };


  const [title, setTitle] = useState<string>("");
  const [titleUpdate, setTitleUpdate] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [nameUpdate, setNameUpdate] = useState<string>("");
  const fileRef = useRef<HTMLInputElement>(null);
  const fileRefUpdate = useRef<HTMLInputElement>(null);
  const [blob, setBlob] = useState<PutBlobResult | null>(null);

  return (
    <div className="p-24">
      <Dialog>
        <DialogTrigger asChild>
          <Button>Ajouter un membre</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Ajout du member</DialogTitle>
            <DialogDescription>
              Ajouter quelque membres au comité {committee.data?.title}
            </DialogDescription>
            <div className="flex flex-col gap-3">
              <p>Nom :</p>
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <p>Université :</p>
              <Input value={title} onChange={(e) => setTitle(e.target.value)} />
              <p>PDF:</p>
              <Input type="file" ref={fileRef} className="cursor-pointer" />
              <Button onClick={addNewMember}>Sauvegarder</Button>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
      <Table>
        <TableCaption>Membres du {committee.data?.title}.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Nom</TableHead>
            <TableHead>Université</TableHead>
            <TableHead>PDF</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {committee.data?.members.map((member) => (
            <TableRow key={member.id}>
            <TableCell>{member.name}</TableCell>
              <TableCell>{member.title}</TableCell>
              <TableCell>
                {member.resumePdf && (
                  <div> {member.resumePdf} </div>
                )}
              </TableCell>
              <TableCell className="flex gap-2">

                <Dialog>
                  <DialogTrigger asChild>
                    <Button>Modifier</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Modification de member</DialogTitle>
                      <DialogDescription>
                        Modifier le  membre <strong> {member.name} </strong>
                      </DialogDescription>
                      <div className="flex flex-col gap-3">
                        <p>Nom :</p>
                        <Input
                          value={nameUpdate}
                          placeholder={member.name}
                          onChange={(e) => setNameUpdate(e.target.value)}
                        />
                        <p>Université :</p>
                        <Input
                          value={titleUpdate}
                          placeholder={member.title ?? ""}
                          onChange={(e) => setTitleUpdate(e.target.value)}
                         />
                        <Button onClick={() => updateNewMember(member.id)}>Modifier</Button>
                        <p>Changer le PDF:</p>
                        <Input type="file" ref={fileRefUpdate} className="cursor-pointer" />
                        <Button onClick={() => updateFile(member.id, member.resumePdf)}>Changer le PDF</Button>
                      </div>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>

                <Button onClick={() => deleteMember(member.id, member.resumePdf)}>Supprimer</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {blob && (
        <div>
          Blob url: <a href={blob.url}>{blob.url}</a>
        </div>
      )}
    </div>
  );
}
