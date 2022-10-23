/* eslint-disable @typescript-eslint/no-explicit-any */
import * as fs from 'fs';
import * as path from 'path';

export const getAllSpecFiles = (localSpecDir: string): string[] => {
  const specContainer: string[] = [];

  const filenames = fs.readdirSync(localSpecDir);
  filenames.forEach(file => {
    console.log(`Swagger spec file ${file}`);
    if (path.extname(file) === '.json') {
      console.log(`Swagger spec file ${file}`);
      specContainer.push(file);
    }
  });
  return specContainer;
};

export const generateSpecPerService = (
  specContainer: string[],
  localSpecDir: string
) => {
  specContainer.forEach((spec: string) => {
    console.log(spec);
    const service = spec.replace(/(twilio_|.json)/g, '');
    console.log(service);
    fs.mkdirSync(`./services/${service}`, {recursive: true});
    const fileLoc = path.resolve(localSpecDir, spec);
    const dataString = fs.readFileSync(fileLoc, 'utf8');
    const data = JSON.parse(dataString);
    const paths = data.paths;
    const listOfPaths: string[] = [];
    for (const path in paths) {
      listOfPaths.push(path);
    }

    listOfPaths.forEach(path => {
      let groupTag: string;
      // Negative look-head regex should return array of size 1 which is last match
      const listOfTags = path.match(/(\/\w+)(?!.*\/\w+)/g);
      if (listOfTags) {
        groupTag = listOfTags[0].replace('/', '');
        console.log(`Group tag: ${groupTag}`);
      }

      const pathObject = paths[path];
      const listOfPropsInPath = [];
      for (const prop in pathObject) {
        listOfPropsInPath.push(prop);
      }

      listOfPropsInPath.forEach(prop => {
        applyGroupTags(prop, data, path, groupTag);
      });
    });

    createTaggedSpec(service, data);
  });
};

const applyGroupTags = (prop: string, data: any, path: string, tag: string) => {
  if (prop.match(/(get|post|put|patch|delete)/)) {
    switch (prop) {
      case 'post':
        data.paths[path].post.tags = [tag];
        break;
      case 'put':
        data.paths[path].put.tags = [tag];
        break;
      case 'patch':
        data.paths[path].patch.tags = [tag];
        break;
      case 'delete':
        data.paths[path].delete.tags = [tag];
        break;
      default:
        data.paths[path].get.tags = [tag];
    }
  }
};

const createTaggedSpec = (service: string, data: any) => {
  const filePath = `./services/${service}/spec.json`;
  const fileContent = JSON.stringify(data, null, 2);
  fs.writeFile(filePath, fileContent, err => {
    if (err) {
      console.error(err);
    } else {
      console.log(`file written successfully at ${filePath}`);
    }
  });
};
