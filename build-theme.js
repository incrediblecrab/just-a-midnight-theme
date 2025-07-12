const fs = require('fs');
const path = require('path');

// Read the configuration
const config = JSON.parse(fs.readFileSync('./theme-config.dev.json', 'utf8'));
const colors = config.colors;

// Read the current theme as a base
const themePath = './themes/just-a-midnight-color-theme.json';
const theme = JSON.parse(fs.readFileSync(themePath, 'utf8'));

// Update theme colors based on config
theme.colors = {
  // Editor
  "editor.background": colors.backgrounds.editor,
  "editor.foreground": colors.ui.foreground,
  "editorLineNumber.foreground": "#5a5a5a",
  "editorLineNumber.activeForeground": "#c6c6c6",
  "editorCursor.foreground": colors.ui.cursor,
  "editor.selectionBackground": colors.ui.selection,
  "editor.inactiveSelectionBackground": "#3a3d41",
  "editor.selectionHighlightBackground": "#3a3d41",
  "editor.wordHighlightBackground": "#515c6a",
  "editor.wordHighlightStrongBackground": "#515c6a",
  "editor.findMatchBackground": "#515c6a",
  "editor.findMatchHighlightBackground": "#3a3d41",
  "editor.lineHighlightBackground": colors.ui.lineHighlight,
  "editorBracketMatch.background": "#0d3a58",
  "editorBracketMatch.border": "#888888",
  "editorGutter.background": colors.backgrounds.editor,
  "editorGutter.modifiedBackground": colors.git.modified,
  "editorGutter.addedBackground": colors.git.added,
  "editorGutter.deletedBackground": colors.git.deleted,
  
  // Sidebar
  "sideBar.background": colors.backgrounds.sidebar,
  "sideBar.foreground": "#cccccc",
  "sideBar.border": colors.borders.sidebar,
  "sideBarTitle.foreground": "#bbbbbb",
  "sideBarSectionHeader.background": colors.backgrounds.sidebar,
  "sideBarSectionHeader.foreground": "#cccccc",
  
  // Lists
  "list.activeSelectionBackground": colors.ui.listActiveSelection,
  "list.activeSelectionForeground": "#ffffff",
  "list.inactiveSelectionBackground": "#37373d",
  "list.hoverBackground": colors.ui.listHover,
  "list.focusBackground": colors.ui.listActiveSelection,
  "list.highlightForeground": "#18a3ff",
  
  // Activity Bar
  "activityBar.background": colors.backgrounds.activityBar,
  "activityBar.foreground": "#ffffff",
  "activityBar.inactiveForeground": "#ffffff66",
  "activityBar.border": colors.borders.activityBar,
  "activityBarBadge.background": colors.ui.badge,
  "activityBarBadge.foreground": "#ffffff",
  
  // Status Bar
  "statusBar.background": colors.backgrounds.statusBar,
  "statusBar.foreground": "#ffffff",
  "statusBar.border": colors.borders.statusBar,
  "statusBar.noFolderBackground": colors.backgrounds.statusBar,
  "statusBar.debuggingBackground": "#cc6633",
  "statusBar.debuggingForeground": "#ffffff",
  "statusBarItem.hoverBackground": "#2a2d2e",
  
  // Title Bar
  "titleBar.activeBackground": colors.backgrounds.titleBar,
  "titleBar.activeForeground": "#cccccc",
  "titleBar.inactiveBackground": colors.backgrounds.titleBar,
  "titleBar.inactiveForeground": "#cccccc99",
  "titleBar.border": colors.borders.titleBar,
  
  // Menus
  "menubar.selectionForeground": "#cccccc",
  "menubar.selectionBackground": "#ffffff1a",
  "menu.background": colors.backgrounds.menu,
  "menu.foreground": "#cccccc",
  "menu.selectionBackground": colors.ui.listActiveSelection,
  "menu.selectionForeground": "#ffffff",
  "menu.border": colors.borders.menu,
  
  // Inputs
  "button.background": colors.ui.button,
  "button.foreground": "#ffffff",
  "button.hoverBackground": "#1177bb",
  "input.background": "#0a0a0a",
  "input.border": colors.borders.input,
  "input.foreground": "#cccccc",
  "input.placeholderForeground": "#a6a6a6",
  "inputOption.activeBackground": colors.ui.badge,
  "inputOption.activeBorder": colors.ui.badge,
  
  // Panel
  "panel.background": colors.backgrounds.panel,
  "panel.border": colors.backgrounds.panel,
  "panelTitle.activeBorder": "#e7e7e7",
  "panelTitle.activeForeground": "#e7e7e7",
  "panelTitle.inactiveForeground": "#e7e7e799",
  
  // Terminal
  "terminal.background": colors.backgrounds.terminal,
  "terminal.foreground": "#cccccc",
  "terminal.ansiBlack": "#000000",
  "terminal.ansiRed": "#cd3131",
  "terminal.ansiGreen": "#0dbc79",
  "terminal.ansiYellow": "#e5e510",
  "terminal.ansiBlue": "#2472c8",
  "terminal.ansiMagenta": "#bc3fbc",
  "terminal.ansiCyan": "#11a8cd",
  "terminal.ansiWhite": "#e5e5e5",
  "terminal.ansiBrightBlack": "#666666",
  "terminal.ansiBrightRed": "#f14c4c",
  "terminal.ansiBrightGreen": "#23d18b",
  "terminal.ansiBrightYellow": "#f5f543",
  "terminal.ansiBrightBlue": "#3b8eea",
  "terminal.ansiBrightMagenta": "#d670d6",
  "terminal.ansiBrightCyan": "#29b8db",
  "terminal.ansiBrightWhite": "#e5e5e5",
  
  // Git Decorations
  "gitDecoration.addedResourceForeground": colors.git.added,
  "gitDecoration.modifiedResourceForeground": colors.git.modified,
  "gitDecoration.deletedResourceForeground": colors.git.deleted,
  "gitDecoration.untrackedResourceForeground": colors.git.untracked,
  "gitDecoration.ignoredResourceForeground": colors.git.ignored,
  "gitDecoration.conflictingResourceForeground": colors.git.conflicting,
  
  // Tabs
  "tab.activeBackground": colors.backgrounds.activeTab,
  "tab.activeForeground": "#ffffff",
  "tab.border": colors.borders.tab,
  "tab.activeBorder": colors.borders.sidebar,
  "tab.activeBorderTop": colors.borders.activeTabTop,
  "tab.activeModifiedBorder": colors.borders.activeTabTop,
  "tab.unfocusedActiveBorder": colors.borders.sidebar,
  "tab.unfocusedActiveBorderTop": "#444444",
  "tab.unfocusedActiveModifiedBorder": "#444444",
  "tab.inactiveBackground": colors.backgrounds.inactiveTab,
  "tab.inactiveForeground": "#ffffff80",
  "tab.unfocusedActiveForeground": "#ffffff80",
  "tab.unfocusedInactiveForeground": "#ffffff40",
  "editorGroupHeader.tabsBackground": colors.backgrounds.inactiveTab,
  "editorGroupHeader.tabsBorder": colors.backgrounds.inactiveTab,
  "editorGroup.border": colors.backgrounds.editor,
  
  // Rest of the colors...
  "scrollbar.shadow": "#000000",
  "scrollbarSlider.activeBackground": "#bfbfbf66",
  "scrollbarSlider.background": "#79797966",
  "scrollbarSlider.hoverBackground": "#646464b3",
  "widget.shadow": "#000000",
  "editorWidget.background": "#000000",
  "editorWidget.border": "#454545",
  "editorHoverWidget.background": "#000000",
  "editorHoverWidget.border": "#454545",
  "debugExceptionWidget.background": "#420b0d",
  "debugExceptionWidget.border": "#a31515",
  "editorMarkerNavigation.background": "#000000",
  "peekView.border": "#007acc",
  "peekViewEditor.background": "#001f33",
  "peekViewEditor.matchHighlightBackground": "#ff8f0099",
  "peekViewResult.background": "#000000",
  "peekViewResult.fileForeground": "#ffffff",
  "peekViewResult.lineForeground": "#bbbbbb",
  "peekViewResult.matchHighlightBackground": "#ff8f0099",
  "peekViewResult.selectionBackground": "#3399ff33",
  "peekViewResult.selectionForeground": "#ffffff",
  "peekViewTitle.background": "#000000",
  "peekViewTitleDescription.foreground": "#ccccccb3",
  "peekViewTitleLabel.foreground": "#ffffff"
};

// Update syntax colors in tokenColors
theme.tokenColors = theme.tokenColors.map(token => {
  if (token.name === "Comment") {
    token.settings.foreground = colors.syntax.comment;
  } else if (token.name === "String, Symbols, Inherited Class, Markup Heading") {
    token.settings.foreground = colors.syntax.string;
  } else if (token.name === "Keyword, Storage") {
    token.settings.foreground = colors.syntax.keyword;
  } else if (token.name === "Function, Special Method") {
    token.settings.foreground = colors.syntax.function;
  } else if (token.name === "Variables") {
    token.settings.foreground = colors.syntax.variable;
  } else if (token.name === "Class, Support") {
    token.settings.foreground = colors.syntax.class;
  } else if (token.name === "Number, Constant, Function Argument, Tag Attribute, Embedded") {
    token.settings.foreground = colors.syntax.number;
  } else if (token.name === "Invalid") {
    token.settings.foreground = colors.syntax.error;
  }
  return token;
});

// Write the updated theme
fs.writeFileSync(themePath, JSON.stringify(theme, null, 2));

console.log('✅ Theme built successfully!');
console.log('📝 Reload VS Code to see your changes.');