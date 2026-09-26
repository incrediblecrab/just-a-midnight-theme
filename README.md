# just-a-midnight-theme

![Version](https://img.shields.io/visual-studio-marketplace/v/maxs-lab-of-things.just-a-midnight-theme) ![MLoT](https://img.shields.io/badge/MLoT-ai-blue)

Just a Midnight Theme is a VS Code color theme with a black editor and workbench background and Dark+ syntax colors. It is published on the VS Code Marketplace as [`maxs-lab-of-things.just-a-midnight-theme`](https://marketplace.visualstudio.com/items?itemName=maxs-lab-of-things.just-a-midnight-theme); the Marketplace version is 1.5.1, matching this repository.

![Demo](https://raw.githubusercontent.com/incrediblecrab/mlot-developer-media/main/gifs/just-a-midnight-theme.gif)

**Objective:** provide a low-distraction dark VS Code theme for users who want a black workbench with familiar Dark+ token colors.

**Inputs:** VS Code 1.74.0 or newer. The theme contribution points VS Code to `themes/just-a-midnight-color-theme.json`.

**Files:**

- [`themes/`](themes/): the Just a Midnight color theme and included VS Code default theme files
- [`build-theme.js`](build-theme.js): theme build helper retained in the repository
- [`theme-config.dev.json`](theme-config.dev.json): development theme configuration
- [`package.json`](package.json): extension manifest, Marketplace metadata, theme contribution and packaging scripts
- [`CHANGELOG.md`](CHANGELOG.md): release notes

**Try it:** install with `ext install maxs-lab-of-things.just-a-midnight-theme`, then run **Preferences: Color Theme** and choose **Just a Midnight**.

## Theme contribution

| Label | UI theme | Path |
| --- | --- | --- |
| `Just a Midnight` | `vs-dark` | `./themes/just-a-midnight-color-theme.json` |

The theme file includes `./dark_plus.json` for syntax highlighting and overrides workbench colors for the editor, sidebar, activity bar, status bar, title bar, tab backgrounds, borders, selections, find matches, scrollbars and rulers.

## Color notes

The editor and major workbench backgrounds are set to `#000`. The foreground uses `#d4d4d4`, matching the Dark+ syntax palette more closely than pure white. Subtle separator colors use `#222` where the theme keeps visible borders.

VS Code users can override individual colors in their own settings:

```json
{
  "workbench.colorCustomizations": {
    "[Just a Midnight]": {
      "tab.activeBorderTop": "#00ff00",
      "sideBar.border": "#333333"
    }
  }
}
```

## Development

The repository includes `npm run package` for `vsce package` and `npm run publish` for `vsce publish`. Do not run the publish script unless you intend to publish a new Marketplace build.

## Links

- [Marketplace listing](https://marketplace.visualstudio.com/items?itemName=maxs-lab-of-things.just-a-midnight-theme)
- [Demo video](https://youtu.be/S0kfET0g1eU)
- [MLoT product page](https://mlot.ai/just-a-midnight-theme/)
- [Privacy policy](https://mlot.ai/privacy)
- Publisher: [Max's Lab of Things](https://mlot.ai/)

## License

MIT. See [`LICENSE`](LICENSE).
