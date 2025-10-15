-- DropForeignKey
ALTER TABLE `UserDocuments` DROP FOREIGN KEY `UserDocuments_user_id_fkey`;

-- DropIndex
DROP INDEX `UserDocuments_user_id_key` ON `UserDocuments`;

-- AddForeignKey
ALTER TABLE `UserDocuments` ADD CONSTRAINT `UserDocuments_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `Users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
