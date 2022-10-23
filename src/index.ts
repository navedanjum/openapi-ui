import {getLatestRepo, getLocalDir} from './clone-pull-repo';
import {getAllSpecFiles, generateSpecPerService} from './swagger-tags';
import * as path from 'path';

const sourceDir = path.resolve(getLocalDir(), 'spec', 'json');
console.log(sourceDir);
getLatestRepo();
const listOfSpecFiles = getAllSpecFiles(sourceDir);
generateSpecPerService(listOfSpecFiles, sourceDir);
