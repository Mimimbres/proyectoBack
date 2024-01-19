/*
  Warnings:

  - You are about to drop the column `Comentarios` on the `Notas` table. All the data in the column will be lost.
  - You are about to drop the column `DibujoTecnico` on the `Notas` table. All the data in the column will be lost.
  - You are about to drop the column `EducacionFisica` on the `Notas` table. All the data in the column will be lost.
  - You are about to drop the column `Fisica` on the `Notas` table. All the data in the column will be lost.
  - You are about to drop the column `Ingles` on the `Notas` table. All the data in the column will be lost.
  - You are about to drop the column `Lengua` on the `Notas` table. All the data in the column will be lost.
  - You are about to drop the column `Matematicas` on the `Notas` table. All the data in the column will be lost.
  - You are about to drop the column `Naturales` on the `Notas` table. All the data in the column will be lost.
  - You are about to drop the column `Sociales` on the `Notas` table. All the data in the column will be lost.
  - Added the required column `dibujoTecnico` to the `Notas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `educacionFisica` to the `Notas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fisica` to the `Notas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ingles` to the `Notas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lengua` to the `Notas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `matematicas` to the `Notas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `naturales` to the `Notas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sociales` to the `Notas` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Notas" DROP COLUMN "Comentarios",
DROP COLUMN "DibujoTecnico",
DROP COLUMN "EducacionFisica",
DROP COLUMN "Fisica",
DROP COLUMN "Ingles",
DROP COLUMN "Lengua",
DROP COLUMN "Matematicas",
DROP COLUMN "Naturales",
DROP COLUMN "Sociales",
ADD COLUMN     "comentarios" TEXT,
ADD COLUMN     "dibujoTecnico" INTEGER NOT NULL,
ADD COLUMN     "educacionFisica" INTEGER NOT NULL,
ADD COLUMN     "fisica" INTEGER NOT NULL,
ADD COLUMN     "ingles" INTEGER NOT NULL,
ADD COLUMN     "lengua" INTEGER NOT NULL,
ADD COLUMN     "matematicas" INTEGER NOT NULL,
ADD COLUMN     "naturales" INTEGER NOT NULL,
ADD COLUMN     "sociales" INTEGER NOT NULL;
