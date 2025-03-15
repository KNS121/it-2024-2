import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';

const pages = ['login.js', 'CreateTodo.js'];

const pluginList = [babel({ babelHelpers: 'bundled' })];
const export_page = pages.reduce((acc, item) => {
    acc.push({
        input: `./src/${item}`,
        output: {
            file: `../server/www/js/${item}`,
            format: 'cjs',
            sourcemap: 'inline',
        },
        plugins: pluginList,
    });
    return acc;
}, []);

export default export_page;
