-- Keep existing names visible in UI: copy legacy HomeDisplayName to Name if Name is empty.
UPDATE "Users"
SET "Name" = TRIM("HomeDisplayName")
WHERE ("Name" IS NULL OR TRIM("Name") = '')
  AND "HomeDisplayName" IS NOT NULL
  AND TRIM("HomeDisplayName") <> '';

-- Remove deprecated HomeDisplayName column from Users.
ALTER TABLE "Users" DROP COLUMN "HomeDisplayName";
