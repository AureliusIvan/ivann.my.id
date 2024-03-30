// Automatically create files for the controller, route, service, and model
import fs from 'fs';

function createNewController(controllerName: string = 'ControllerExample', cb: Function) {
  // turn to lowercase
  controllerName = controllerName.toLowerCase();
  // capitalize the first letter of the controller name
  const controllerContent = `// ${controllerName}.ts
import { Request, Response } from 'express';

class ${controllerName}Controller {
  public async index(req: Request, res: Response): Promise<Response> {
    return res.json({ message: 'Hello World' });
  }
}

export { ${controllerName}Controller }
`;

  fs.writeFileSync(`src/controllers/${controllerName}.controller.ts`, controllerContent, 'utf8');
  cb();
}


function createNewRoute(routeName: string = 'RouteExample', cb: Function) {
  // turn to lowercase
  routeName = routeName.toLowerCase();
  // capitalize the first letter of the controller name
  const routeContent = `// ${routeName}.ts
import { Router } from 'express';
import { ${routeName}Controller } from '../controllers/${routeName}.controller';

// const router = Router();
const ${routeName}Router = Router();
const ${routeName}Ctrl = new ${routeName}Controller();


export { ${routeName}Router }
`;

  fs.writeFileSync(`src/routes/${routeName}.route.ts`, routeContent, 'utf8');
  cb();
}

function createNewService(serviceName: string = 'ServiceExample', cb: Function) {
  // turn to lowercase
  serviceName = serviceName.toLowerCase();
  // capitalize the first letter of the controller name
  const serviceContent = `// ${serviceName}.ts
import { Request, Response } from 'express';

class ${serviceName} {
  public async index(req: Request, res: Response): Promise<Response> {
    return res.json({ message: 'Hello World' });
  }
}

export { ${serviceName} }
`;

  fs.writeFileSync(`src/services/${serviceName}.service.ts`, serviceContent, 'utf8');
  cb();
}

function createNewModel(modelName: string = 'ModelExample', cb: Function) {
  // turn to lowercase
  modelName = modelName.toLowerCase();
  // capitalize the first letter of the controller name
  const modelContent = `// ${modelName}.ts
import { Request, Response } from 'express';

class ${modelName
    } {
  public async index(req: Request, res: Response): Promise<Response> {
    return res.json({ message: 'Hello World' });
  }
}


export { ${modelName} }
`;

  fs.writeFileSync(`src/data/models/${modelName}.model.ts`, modelContent, 'utf8');
  cb();
}


// create docs at api specs
function createNewDocs(name: string, cb: Function) {
  name = name.toLowerCase();
  const docsContent = `# API Documentation
`;
  fs.writeFileSync(`docs/api-specs/${name}-api.md`, docsContent, 'utf8');
  cb();
}



const createNewAll = (name: string, cb: Function) => {
  createNewController(name, cb);
  createNewRoute(name, cb);
  createNewService(name, cb);
  createNewModel(name, cb);
  createNewDocs(name, cb);
}
export { createNewController, createNewAll }