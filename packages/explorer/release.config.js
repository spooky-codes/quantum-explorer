const name = 'explorer';
const srcRoot = `packages/${name}`;

module.exports = {
  extends: 'release.config.base.js',
  pkgRoot: `builds/${srcRoot}`,
  tagFormat: name + '-v${version}',
  branches: [
    '+([0-9])?(.{+([0-9]),x}).x',
    'main',
    'next',
    'next-major',
    {
      name: 'beta',
      prerelease: true,
    },
    {
      name: 'alpha',
      prerelease: true,
    },
  ],
  commitPaths: [
    `${srcRoot}/*`, // anything in this directory
  ],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    [
      '@semantic-release/changelog',
      {
        changelogFile: `${srcRoot}/CHANGELOG.md`,
      },
    ],

    // Publish NPM package to GitHub Registry (it could also be in NPMJS)
    '@semantic-release/npm',

    [
      '@semantic-release/git',
      {
        assets: ['package.json', `${srcRoot}/CHANGELOG.md`],
        message:
          `release(version): Release ${name} ` +
          '${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
      },
    ],

    // Create the new GitHub release in the repository
    '@semantic-release/github',
  ],
};
