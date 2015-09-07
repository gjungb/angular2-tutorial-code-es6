let bundleConfig = {
  paths   : ['node_modules', 'components'],
  entries : 'src/app.js'
};

let dest = '../public/'
let ghPagesDest = 'gh-pages/'

let dirs = [
  '01-init',
  '02-two-way-databinding',
  '03-expressions',
  '04-directives',
  '05-loops',
  '06-filter',
  '07-components',
  '08-services',
  '09-routing'
]

export {
  ghPagesDest,
  bundleConfig,
  dest,
  dirs
}
