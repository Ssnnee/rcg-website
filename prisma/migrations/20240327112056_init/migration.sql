-- CreateTable
CREATE TABLE "Committee" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "description" TEXT
);

-- CreateTable
CREATE TABLE "Member" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT,
    "name" TEXT,
    "resumePdf" TEXT,
    "committeeId" INTEGER NOT NULL,
    CONSTRAINT "Member_committeeId_fkey" FOREIGN KEY ("committeeId") REFERENCES "Committee" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Archive" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL DEFAULT 'Revue Congolaise de Gestion',
    "description" TEXT,
    "linkToStore" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "number" INTEGER NOT NULL,
    "pages" INTEGER NOT NULL,
    "year" DATETIME NOT NULL,
    "month" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Committee_title_key" ON "Committee"("title");
