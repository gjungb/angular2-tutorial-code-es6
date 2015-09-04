let bundleConfig = {
  paths   : ['node_modules', 'components'],
  entries : 'src/app.js'
};

let dest = '../public'

export {
  bundleConfig,
  dest
}
