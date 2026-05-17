const { prisma } = require("../lib/prisma");

async function getFolders(userId) {
  console.log("getting folders from db");

  const folders = await prisma.folder.findMany({
    where: {
      folderOwnerId: userId,
    },
  });
  return folders;

  console.log(folders);
}

async function getFolder(folderId) {
  const folder = await prisma.folder.findUnique({
    where: {
      id: folderId,
    },
    include: { files: true },
  });
  return folder;
}

async function createFolder(newFolderName, userId) {
  console.log("createFolder from driveRepository is being called.");
  console.log(newFolderName, userId);

  const newFolder = await prisma.folder.create({
    data: {
      title: newFolderName,
      folderOwner: {
        connect: { id: userId },
      },
    },
  });

  return newFolder;
}

async function renameFolder(newFolderName, folderId) {
  const renamedFolder = await prisma.folder.update({
    where: {
      id: folderId,
    },
    data: {
      title: newFolderName,
    },
  });
  return renamedFolder;
}

async function createFile(file, userId, folderId) {
  const newFile = await prisma.file.create({
    data: {
      originalName: file.originalname,
      mimetype: file.mimetype,
      size: parseInt(file.size),
      path: file.path,
      fileName: file.filename,
      fileOwner: {
        connect: { id: userId },
      },
      folderOwner: {
        connect: { id: folderId },
      },
    },
  });
}

async function showFile(fileId) {
  const fileDetails = await prisma.file.findUnique({
    where: { id: fileId },
  });
  return fileDetails;
}
async function deleteFile(fileId) {
  console.log("insert logic to delete the file");

  const deleteFile = await prisma.file.delete({
    where: {
      id: fileId,
    },
  });
}
module.exports = {
  getFolders,
  getFolder,
  createFolder,
  renameFolder,
  createFile,
  showFile,
  deleteFile,
};
