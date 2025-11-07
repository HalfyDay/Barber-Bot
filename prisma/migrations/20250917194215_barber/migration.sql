/*
  Warnings:

  - You are about to drop the `Appointment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Schedule` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Service` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Appointment";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Schedule";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Service";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "User";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "TelegramID" REAL,
    "Name" TEXT,
    "Phone" TEXT,
    "LastNameChanged" TEXT,
    "Barber" TEXT
);

-- CreateTable
CREATE TABLE "Appointments" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "CustomerName" TEXT,
    "Phone" TEXT,
    "Barber" TEXT,
    "Date" TEXT,
    "Time" TEXT,
    "Status" TEXT,
    "Services" TEXT,
    "Reminder2hClientSent" BOOLEAN,
    "Reminder2hBarberSent" BOOLEAN,
    "UserID" TEXT
);

-- CreateTable
CREATE TABLE "Schedules" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "Barber" TEXT,
    "DayOfWeek" TEXT,
    "Today" BOOLEAN,
    "Date" TEXT,
    "Week" TEXT
);

-- CreateTable
CREATE TABLE "Cost" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "Услуги" TEXT,
    "Тимур🐼" REAL,
    "Владимир😎" REAL,
    "Алина💖" REAL,
    "Алексей🦐" REAL,
    "Длительность" TEXT
);

-- CreateTable
CREATE TABLE "AuditLog" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "timestamp" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "user" TEXT NOT NULL,
    "action" TEXT NOT NULL,
    "tableName" TEXT NOT NULL,
    "recordId" TEXT NOT NULL,
    "changes" TEXT NOT NULL
);
