import fs from 'fs';
import path from 'path';

export function scanPages(dir: string) {
    const entries: string[] = [];
    const walk = (currentDir: string) => {
            fs.readdirSync(currentDir).forEach((file) => {
                const fullPath = path.join(currentDir, file);
                if (fs.statSync(fullPath).isDirectory()) {
                    walk(fullPath);
                } else if(file.endsWith('.vue')) {
                    entries.push(fullPath);
                }
            })
    }
    walk(dir)
    return entries
}

export function generateRoutes(config: {pageDir: string, outputFile: string}) {
  const imports: string[] = [];
    const routes: string[] = [];
    scanPages(config.pageDir).forEach((filePath, index) => {
      const componentName = `Page${index}`;
      const importPath = filePath.replace(config.pageDir, '@/pages').replace(/\.vue$/, '');
      imports.push(`import ${componentName} from '${importPath}';`);
      routes.push(`{ path: '${importPath}', component: ${componentName}, meta: { title: '${path.basename(filePath, '.vue')}' } },`);
    })
    const template = `${imports.join('\n')} export default [${routes.join(',')}]`
    fs.writeFileSync(config.outputFile, template)
}