# Release Process Documentation

## Overview

This project uses [Semantic Release](https://github.com/semantic-release/semantic-release) to automate version management, changelog generation, and the release process. Our workflow is based on [Conventional Commits](https://www.conventionalcommits.org/) and follows [Semantic Versioning](https://semver.org/) principles.

## Release Channels

We maintain three release channels:

| Branch | Purpose | Version Example |
|--------|---------|-----------------|
| `main` | Stable releases | `1.0.0` |
| `beta` | Beta testing | `1.0.0-beta.1` |
| `alpha` | Early development | `1.0.0-alpha.1` |

## How Releases Work

The release process is fully automated based on Git commits:

1. When changes are pushed to any of the release branches, GitHub Actions runs the release workflow
2. Semantic Release analyzes the commit messages since the last release
3. Based on the commit types, it determines the next version number
4. A new version is published to npm with the appropriate tag
5. A GitHub Release is created with auto-generated release notes
6. The changelog and package version are updated in the repository

## For Contributors

### Commit Message Format

We follow the Conventional Commits specification. Each commit message should be structured as:

    <type>(<scope>): <description>
    
    [optional body]
    
    [optional footer(s)]

#### Commit Types

| Type | Description | Version Impact |
|------|-------------|----------------|
| `feat` | A new feature | Minor release (`1.1.0`) |
| `fix` | A bug fix | Patch release (`1.0.1`) |
| `docs` | Documentation only changes | No release |
| `style` | Changes that don't affect code meaning | No release |
| `refactor` | Code change that neither fixes a bug nor adds a feature | No release |
| `perf` | Performance improvement | Patch release |
| `test` | Adding missing tests or correcting tests | No release |
| `build` | Changes to build system or dependencies | No release |
| `ci` | Changes to CI configuration | No release |
| `chore` | Other changes | No release |

Breaking changes in any commit type will trigger a major version release (`2.0.0`). To mark a commit as breaking, add `BREAKING CHANGE:` in the commit message body or append `!` after the type/scope.

Example:

    feat!: remove deprecated API

or

    feat: new API
    
    BREAKING CHANGE: The old API has been removed

### Development Workflow

1. **Make changes**: Create a feature branch from the appropriate release branch

       git checkout -b feature/my-new-feature main

2. **Commit with proper messages**: Use conventional commit format

       git commit -m "feat: add new client option"

3. **Submit a PR**: Create a pull request to the appropriate release branch
   - Target `alpha` for early development features
   - Target `beta` for features ready for testing
   - Target `main` for stable features

4. **Merge**: After review and approval, the PR will be merged
   - The release workflow runs automatically when changes are pushed to release branches
   - A new version is published based on commit types

## Installing Different Versions

- **Stable version**: `npm install @wipsquare/node-pdns-auth`
- **Beta version**: `npm install @wipsquare/node-pdns-auth@beta`
- **Alpha version**: `npm install @wipsquare/node-pdns-auth@alpha`

## Manual Release

In exceptional cases, you can trigger a manual release:

1. Go to GitHub Actions
2. Select the "Release" workflow
3. Click "Run workflow"
4. Select the branch to release from

## Release Configuration

The release configuration is defined in:
- `.releaserc.json`: Semantic Release configuration
- `.github/workflows/release.yml`: GitHub Actions workflow

---

**Note**: This automated process ensures consistency, reduces manual effort, and maintains a clear history of changes. Always follow the conventional commit format to ensure proper versioning.