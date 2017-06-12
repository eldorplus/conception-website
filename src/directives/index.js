const files = require.context('.', false, /\.js$/);
const directives = {};

files.keys().forEach((file) => {
    if (file === './index.js' || file === './_target.js' || file === './format.js') return;
    let name = file.replace(/(\.\/|\/.js)/g, '');
    directives[name] = files(file).default
});

export default directives