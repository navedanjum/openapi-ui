import * as child_process from 'child_process';
import 'dotenv/config';
import * as fs from 'fs';
import * as path from 'path';

export const getLatestRepo = () => {
  const localDir = getLocalDir();
  console.log(`${localDir}`);
  const repoExists = fs.existsSync(`${localDir}`);
  const confirmation = repoExists
    ? `Attempting to Pull update local repo at path: ${localDir}.....`
    : `Attempting to clone fresh repo at path: ${localDir}.....`;

  console.log(confirmation);
  cloneUpdateRepo(repoExists, localDir);
};

export const cloneUpdateRepo = (repoExists = false, localRepo: string) => {
  if (!repoExists) {
    child_process.execSync(`git clone ${process.env.REPO_URL}  ${localRepo}`);
  } else {
    child_process.execSync(
      `cd ${localRepo} && git pull origin ${process.env.BRANCH} --rebase`
    );
  }
};

export const getLocalDir = () => {
  const destDir = `${process.env.REPO_DEST_DIR}`;
  const repoDir = `${process.env.REPO_NAME}`;
  const localDir = path.resolve(destDir, repoDir);
  return localDir;
};
