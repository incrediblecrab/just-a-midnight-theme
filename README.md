# Just a Midnight Theme

![Version](https://img.shields.io/visual-studio-marketplace/v/maxs-lab-of-things.just-a-midnight-theme)
![MLoT](https://img.shields.io/badge/MLoT-ai-blue)

A true pitch black VS Code theme for late night coding sessions. Zero borders, maximum focus.

![Demo](https://raw.githubusercontent.com/incrediblecrab/mlot-developer-media/main/gifs/just-a-midnight-theme.gif)

## Features

- **Pure Black Background**: True #000000 backgrounds throughout the entire UI
- **Subtle Borders**: Minimal #222222 borders for visual separation without distraction
- **High Contrast**: Carefully selected colors for excellent readability in dark environments
- **Dark+ Inspired**: Familiar syntax highlighting based on VS Code's popular Dark+ theme
- **Customizable**: Built-in configuration system for personalized color adjustments

## Installation

### From VS Code Marketplace
1. Open VS Code
2. Go to Extensions (Cmd+Shift+X / Ctrl+Shift+X)
3. Search for "Just a Midnight"
4. Click Install

### Manual Installation
1. Download the `.vsix` file from releases
2. Run: `code --install-extension just-a-midnight-*.vsix`

## Customization

To customize the theme, add overrides to your VS Code settings:

```json
"workbench.colorCustomizations": {
  "[Just a Midnight]": {
    "tab.activeBorderTop": "#00ff00",
    "sideBar.border": "#333333"
  }
}
```

## Color Palette

- **Background**: #000000 (Pure Black)
- **Foreground**: #d4d4d4 (Light Gray)
- **Comments**: #6a9955 (Green)
- **Strings**: #ce9178 (Orange)
- **Keywords**: #569cd6 (Blue)
- **Functions**: #dcdcaa (Yellow)
- **Variables**: #9cdcfe (Light Blue)
- **Classes**: #4ec9b0 (Teal)

## Recommended Settings

```json
{
  "editor.fontFamily": "Fira Code",
  "editor.fontSize": 14,
  "editor.lineHeight": 1.5,
  "editor.letterSpacing": 0.5
}
```

## Resources

- 📺 [Watch Demo Video](https://youtu.be/S0kfET0g1eU)
- 🌐 [Visit MLoT Page](https://mlot.ai/just-a-midnight-theme/)
- 🔒 [Privacy Policy](https://mlot.ai/privacy)

## Publisher

**Max's Lab of Things**
Visit [mlot.ai](https://mlot.ai/)

## License

MIT
