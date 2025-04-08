import fs from 'fs'
import path from 'path'
interface Options {
    pathName: string,
    method: string | Array<string>
}
const autoImports = (options: Array<String|Options>) => {
    function watchFile(dirPath) {
        console.log("sssss", dirPath)
        // fs.watch(
        //     dirPath,
        //     {
        //         encoding: "utf-8",
        //     },
        //     (eventType, filename: string) => {
        //         // 重命名文件、新增文件、删除文件时触发
        //         if (eventType === "rename") {
        //             const filePath = path.join(defaultDirPath, `/${filename}`);
        //             fs.access(filePath, (error: any) => {
        //                 // 判断是否存在对应文件
        //                 if (error) {
        //                     // 不存在文件则将对应文件的导入语句清除
        //                     const repalceStr = `import "./${filename}"`;
        //                     rewriteFile(repalceStr, "");
        //                 } else {
        //                     // 存在对应文件则向目标文件添加导入语句
        //                     const appendContent = `\nimport "./${filename}"`;
        //                     appendFile(appendContent);
        //                 }
        //             });
        //         }
        //     }
        // );
    }
    // function rewriteFile(repalceStr, content) {
    //     const rawContent = fs.readFileSync(defaultImportPath, { encoding: "utf8" });
    //     fs.writeFileSync(defaultImportPath, rawContent.replace(repalceStr, content));
    // }
    // function appendFile(appendContent) {
    //     fs.appendFile(defaultDirPath, appendContent, function (error) {
    //         if (error) {
    //             console.log("~ 自动导入文件【失败】 ~");
    //             return;
    //         }
    //         console.log("~ 自动导入文件【成功】 ~");
    //     });
    // }
    return {
        name: 'vite-plugin-auto-imports',
        apply: "serve", // 指明它们仅在 'build' 或 'serve' 模式时调用
        buildStart() {
            watchFile(options);
        },
    }
}


export default autoImports;