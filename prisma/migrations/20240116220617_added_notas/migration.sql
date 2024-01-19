-- CreateTable
CREATE TABLE "Notas" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "Matematicas" INTEGER NOT NULL,
    "Lengua" INTEGER NOT NULL,
    "Ingles" INTEGER NOT NULL,
    "Fisica" INTEGER NOT NULL,
    "Naturales" INTEGER NOT NULL,
    "Sociales" INTEGER NOT NULL,
    "EducacionFisica" INTEGER NOT NULL,
    "DibujoTecnico" INTEGER NOT NULL,

    CONSTRAINT "Notas_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Notas" ADD CONSTRAINT "Notas_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
