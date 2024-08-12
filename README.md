# Revue Congolaise de Gestion official website

This is the official website of the Revue Congolaise de Gestion (RCG), a
scientific journal published by [ESGAE](https://esgae.org).

## Getting Started

After installing the dependencies, you can run :
```sh
npx prisma generate
npx prisma migrate dev --name init
```
to create the database and run the migrations.


Then :
```sh
npx prisma studio
```
to open the Prisma Studio and users some data.

Now you can run the development server with :

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
