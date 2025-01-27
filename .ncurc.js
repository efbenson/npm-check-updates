module.exports = {
  interactive: true,
  format: 'group',
  reject: [
    // ESM only modules
    // https://github.com/microsoft/TypeScript/issues/46452
    'find-up',
    'get-stdin',
    'globby',
    'p-map',
    'remote-git-tags',
    // Broken in v6.0.0
    // Working upgrade is in branch 'hosted-git-info', but hold off on merging due to node engine requirements: ^14.17.0 || ^16.13.0 || >=18.0.0
    // https://github.com/npm/hosted-git-info/releases/tag/v6.0.0
    'hosted-git-info',
    // Broken in v15.0.1
    // Dependency installed-package-contents broken in v2.0.0
    // https://github.com/raineorshine/npm-check-updates/issues/1207
    // https://github.com/npm/installed-package-contents/issues/24
    'pacote',
  ],
}
