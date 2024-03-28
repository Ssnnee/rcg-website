/*
  Warnings:

  - Made the column `name` on table `Member` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Member" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT,
    "name" TEXT NOT NULL,
    "resumePdf" TEXT,
    "committeeId" INTEGER NOT NULL,
    CONSTRAINT "Member_committeeId_fkey" FOREIGN KEY ("committeeId") REFERENCES "Committee" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Member" ("committeeId", "id", "name", "resumePdf", "title") SELECT "committeeId", "id", "name", "resumePdf", "title" FROM "Member";
DROP TABLE "Member";
ALTER TABLE "new_Member" RENAME TO "Member";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
