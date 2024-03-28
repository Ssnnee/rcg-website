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

  const addNewMember = () => {
    if (!committee.data?.id) {
      return ;
    }
    if (fileRef.current?.files) {
      const formData = new FormData();
      const file = fileRef.current.files[0];
      if (!file) {
        alert('Veuillez sélectionner un fichier non vide.');
        return;
      }
      formData.append("files", file);
      const request = { method: "POST", body: formData };
      fetch("/api/file", request);
      addMember.mutate(
        {
          title,
          name,
          committeeId: committee.data?.id,
          resumePdf: `/${file.name}`,
        },
        {
          onSettled: () => committee.refetch(),
        }
      );

      setTitle("");
      setName("");
    }
  };

  const updateNewCommittee = () => {
  if (!committee.data?.id) {
    return;
  }
  if (fileRef.current?.files && fileRef.current.files.length > 0) {
    const formData = new FormData();
    const file = fileRef.current.files[0];
    formData.append("files", file);
    try {
      fetch("/api/file", { method: "PUT", body: formData });

      // Assuming `updateMember.mutate` is asynchronous
       updateMember.mutate(
        {
          id: params.committee,
          title: titleUpdate,
          name: nameUpdate,
          committeeId: committee.data?.id,
          resumePdf: `/${file.name}`,
        },
        {
          onSettled: () => committee.refetch(),
        }
      );

      // Update UI or perform any necessary actions after successful update
      setTitleUpdate("");
      setNameUpdate("");
    } catch (error) {
      console.error("Error occurred while updating member:", error);
      // Handle error gracefully (e.g., display an error message to the user)
    }
  }
};


  const deleteMember = (id: number) => {
    delMember.mutate(
      {
        id,
      },
      {
        onSettled: () => committee.refetch(),
      }
    );
  };


  const [title, setTitle] = useState<string>("");
  const [titleUpdate, setTitleUpdate] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [nameUpdate, setNameUpdate] = useState<string>("");
  const fileRef = useRef<HTMLInputElement>(null);

  return (
    <div className="p-24">
      <Dialog>
        <DialogTrigger asChild>
          <Button>Ajouter un membre</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Creation du member</DialogTitle>
            <DialogDescription>
              Ajouter quelque membres au comité {committee.data?.title}
            </DialogDescription>
            <div className="flex flex-col gap-3">
              <p>Nom :</p>
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <p>Titre (optionnel):</p>
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
            <TableHead>Titre</TableHead>
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
                        <p>Titre (optionnel):</p>
                        <Input
                          value={titleUpdate}
                          placeholder={""}
                          onChange={(e) => setTitleUpdate(e.target.value)}
                         />
                        <p>PDF:</p>
                        <Input type="file" ref={fileRef} />
                        <Button onClick={updateNewCommittee}>Sauvegarder</Button>
                      </div>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>

                <Button onClick={() => deleteMember(member.id)}>Supprimer</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

