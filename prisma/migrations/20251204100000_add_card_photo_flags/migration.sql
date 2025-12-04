-- Add missing card photo flags for barbers
ALTER TABLE "Barbers" ADD COLUMN "cardPhotoGrayscale" BOOLEAN NOT NULL DEFAULT 1;
ALTER TABLE "Barbers" ADD COLUMN "cardPhotoOutline" BOOLEAN NOT NULL DEFAULT 1;
