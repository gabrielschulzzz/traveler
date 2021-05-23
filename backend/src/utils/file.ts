/* eslint-disable no-empty */
/* eslint-disable prettier/prettier */
import fs from "fs";

export const deleteFile = async (filename: string) => {
  try {
    await fs.promises.stat(filename);
  } catch (error) { }

  await fs.promises.unlink(filename);
};
