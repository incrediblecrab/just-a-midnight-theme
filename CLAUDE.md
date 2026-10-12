# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) and GitHub Copilot CLI when working in this repository.

Just a Midnight Theme is a dark VS Code color theme, published on the Marketplace as `maxs-lab-of-things.just-a-midnight-theme`. It has no code: the extension is `package.json` contributing one theme. The repository is public.

## Files

`themes/just-a-midnight-color-theme.json` is the theme. It sets workbench `colors` and `include`s `themes/dark_plus.json` for syntax highlighting, which in turn includes `themes/dark_vs.json`; those two are copies of VS Code's built-in defaults, so syntax colors change there and UI colors change in the midnight file. Theme files are JSON with comments, which VS Code accepts.

`build-theme.js` was meant to regenerate the theme's `colors` from `theme-config.dev.json`, but it reads the theme with `JSON.parse` and fails on the comment header, so it cannot run against the current file. Edit `themes/just-a-midnight-color-theme.json` directly, or strip comments in the script before using it; running it successfully overwrites the theme file in place.

## Commands

```bash
npm run package      # vsce package; read the printed file list
npm run publish      # vsce publish
```

Preview a change with F5 from VS Code (`.vscode/launch.json`), then pick the theme in the Extension Development Host.

## Releasing

`.vscodeignore` is the only control over what ships in the `.vsix`; `.gitignore` is ignored by `vsce`. The managed block in it is rewritten by a standardizing script, so add project-specific exclusions outside that block. The README states the Marketplace version, so bump it with `package.json` and `CHANGELOG.md`. The publishing procedure is in `../README.md`.
