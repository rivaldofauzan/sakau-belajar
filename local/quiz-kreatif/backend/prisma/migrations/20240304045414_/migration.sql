/*
  Warnings:

  - Added the required column `link` to the `Quiz` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Quiz" ADD COLUMN     "link" TEXT NOT NULL;
