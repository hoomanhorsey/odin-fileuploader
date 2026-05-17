/*
  Warnings:

  - Added the required column `folderOwnerId` to the `File` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "File" ADD COLUMN     "folderOwnerId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Folder" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT,
    "folderOwnerId" INTEGER NOT NULL,

    CONSTRAINT "Folder_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "File" ADD CONSTRAINT "File_folderOwnerId_fkey" FOREIGN KEY ("folderOwnerId") REFERENCES "Folder"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Folder" ADD CONSTRAINT "Folder_folderOwnerId_fkey" FOREIGN KEY ("folderOwnerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
