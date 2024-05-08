import * as React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ( {name, email, message}: EmailTemplateProps) => (
  <div className='flex flex-col justify-center items-center'>
    <Card className="w-full max-w-[650px]">
      <CardHeader>
        <CardTitle className="text-3xl text-center">Nouveau message envoyer par {name}</CardTitle>
        <CardDescription className="text-center">
        </CardDescription>
      </CardHeader>
      <CardContent className='text-center'>
        <p>{message}</p>
      </CardContent>
      <CardFooter className="text-center">
        <p>
          Ce message est destine à la Revue Congolaise de Gestion
          <br />
          Voici l&apos;addresse de l&apos;auteur, {email}
        </p>
        <Button className="w-full my-6">
          <a href={`mailto:${email}`}>Répondre à l&apos;auteur</a>
        </Button>
        <p>© {new Date().getFullYear()} Revue Congolaise de Gestion - Tout droit réservé</p>
      </CardFooter>
    </Card>
  </div>
);
