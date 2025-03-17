import type { PluginOption } from 'vite';
import { cwd } from "node:process";
import compressing from "compressing";
import path from "path";
interface PluginOptions {
    // 输入目录
    inputDir?: string;
    outputFileName?: string
    // 压缩包的路径
    packagePath?: string;
    // 压缩包的名称
    packageName?: string;
}
const packagesCompress = (options?: PluginOptions): PluginOption => {
    const inputDir = options?.inputDir || "dist";
    const outputFileName = options?.outputFileName || "dist.zip";
    const rootPath = cwd();
    const buildPath = path.resolve(rootPath, inputDir);
    return {
        name: 'vite-plugin-packages-Compress',
        apply: 'build',
        closeBundle: {
            async handler() {
                console.log("compressing", buildPath)
                compressing.zip
                    .compressDir(buildPath, `${outputFileName}`, {
                        ignoreBase: true
                    })
                    .then((res: any) => {
                        console.log("compress done");
                    })
                    .catch((err: any) => {
                        console.log("compress failed");
                    });
            }
        }
    }
}


export default packagesCompress;