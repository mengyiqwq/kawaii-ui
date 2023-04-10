import {defineConfig} from 'dumi';
let base:any='/kawaii-ui';
let publicPath:any='/kawaii-ui/';
if(process.env.SITE_BUILD_ENV === 'PREVIEW'){
    base =undefined;
    publicPath= undefined;
}
export default  defineConfig({
    title: 'Kawaii UI',
    mode: 'site',
    outputPath: 'doc-site',
    exportStatic:{},
    dynamicImport: {},
    base: '/kawaii-ui',
    publicPath: '/kawaii-ui/',
});