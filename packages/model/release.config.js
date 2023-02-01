const name = 'model';
const srcRoot = `packages/${name}`;

module.exports = {
  extends: `release.config.base.js`,
  pkgRoot: `builds/${srcRoot}`,
  tagFormat: name + '-v${version}',
  commitPaths: [`${srcRoot}/*`],
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
      // Create a release commit for the changes to 'package.json' and 'CHANGELOG.md' files
      '@semantic-release/git',
      {
        assets: [`${srcRoot}/package.json`, `${srcRoot}/CHANGELOG.md`],
        message:
          `release(version): Release ${name} ` +
          '${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
      },
    ],

    // Create the new GitHub release in the repository
    '@semantic-release/github',
  ],
};
