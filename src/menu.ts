import {
  app,
  Menu,
  shell,
  BrowserWindow,
  MenuItemConstructorOptions,
} from 'electron';

interface DarwinMenuItemConstructorOptions extends MenuItemConstructorOptions {
  selector?: string;
  submenu?: DarwinMenuItemConstructorOptions[] | Menu;
}

export default class MenuBuilder {
  mainWindow: BrowserWindow;

  constructor(mainWindow: BrowserWindow) {
    this.mainWindow = mainWindow;
  }

  buildMenu(): Menu {
    if (
      process.env.NODE_ENV === 'development' ||
      process.env.DEBUG_PROD === 'true'
    ) {
      this.setupDevelopmentEnvironment();
    }

    const template =
      process.platform === 'darwin'
        ? this.buildDarwinTemplate()
        : this.buildDefaultTemplate();

    const menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);

    return menu;
  }

  setupDevelopmentEnvironment(): void {
    this.mainWindow.webContents.on('context-menu', (_, props) => {
      const { x, y } = props;

      Menu.buildFromTemplate([
        {
          label: 'Inspect element',
          click: () => {
            this.mainWindow.webContents.inspectElement(x, y);
          },
        },
      ]).popup({ window: this.mainWindow });
    });
  }

  buildDarwinTemplate(): MenuItemConstructorOptions[] {
    const subMenuAbout: DarwinMenuItemConstructorOptions = {
      label: '照片库',
      submenu: [
        {
          label: '关于照片库',
          selector: 'orderFrontStandardAboutPanel:',
        },
        { type: 'separator' },
        { label: 'Services', submenu: [] },
        { type: 'separator' },
        {
          label: '隐藏照片库',
          accelerator: 'Command+H',
          selector: 'hide:',
        },
        {
          label: '隐藏其他',
          accelerator: 'Command+Shift+H',
          selector: 'hideOtherApplications:',
        },
        { label: '全部显示', selector: 'unhideAllApplications:' },
        { type: 'separator' },
        {
          label: '退出照片库',
          accelerator: 'Command+Q',
          click: () => {
            app.quit();
          },
        },
      ],
    };
    const subMenuEdit: DarwinMenuItemConstructorOptions = {
      label: '编辑',
      submenu: [
        { label: '撤销', accelerator: 'Command+Z', selector: 'undo:' },
        { label: '重做', accelerator: 'Shift+Command+Z', selector: 'redo:' },
        { type: 'separator' },
        { label: '剪切', accelerator: 'Command+X', selector: 'cut:' },
        { label: '拷贝', accelerator: 'Command+C', selector: 'copy:' },
        { label: '粘贴', accelerator: 'Command+V', selector: 'paste:' },
        { label: '全选', accelerator: 'Command+A', selector: 'selectAll:' },
      ],
    };
    const subMenuViewDev: MenuItemConstructorOptions = {
      label: '显示',
      submenu: [
        {
          label: '重新加载',
          accelerator: 'Command+R',
          click: () => {
            this.mainWindow.webContents.reload();
          },
        },
        {
          label: '进入全屏幕',
          accelerator: 'Ctrl+Command+F',
          click: () => {
            this.mainWindow.setFullScreen(!this.mainWindow.isFullScreen());
          },
        },
        {
          label: '进入开发者工具',
          accelerator: 'Alt+Command+I',
          click: () => {
            this.mainWindow.webContents.toggleDevTools();
          },
        },
      ],
    };
    const subMenuViewProd: MenuItemConstructorOptions = {
      label: '显示',
      submenu: [
        {
          label: '进入全屏幕',
          accelerator: 'Ctrl+Command+F',
          click: () => {
            this.mainWindow.setFullScreen(!this.mainWindow.isFullScreen());
          },
        },
      ],
    };
    const subMenuWindow: DarwinMenuItemConstructorOptions = {
      label: '窗口',
      submenu: [
        {
          label: '最小化',
          accelerator: 'Command+M',
          selector: 'performMiniaturize:',
        },
        { label: 'Close', accelerator: 'Command+W', selector: 'performClose:' },
        { type: 'separator' },
        { label: '前置全部窗口', selector: 'arrangeInFront:' },
      ],
    };
    const subMenuHelp: MenuItemConstructorOptions = {
      label: '帮助',
      submenu: [
        {
          label: '开始使用',
          click() {
            shell.openExternal('https://electronjs.org');
          },
        },
        {
          label: '文档',
          click() {
            shell.openExternal(
              'https://github.com/electron/electron/tree/master/docs#readme'
            );
          },
        },
        {
          label: '检查更新',
          click() {
            shell.openExternal('https://www.electronjs.org/community');
          },
        },
        {
          label: '关于照片库',
          click() {
            shell.openExternal('https://github.com/electron/electron/issues');
          },
        },
      ],
    };

    const subMenuView =
      process.env.NODE_ENV === 'development' ||
      process.env.DEBUG_PROD === 'true'
        ? subMenuViewDev
        : subMenuViewProd;

    return [subMenuAbout, subMenuEdit, subMenuView, subMenuWindow, subMenuHelp];
  }

  buildDefaultTemplate() {
    const templateDefault = [
      {
        label: '文件(&F)',
        submenu: [
          {
            label: '打开',
            accelerator: 'Ctrl+O',
          },
          {
            label: '退出',
            accelerator: 'Ctrl+W',
            click: () => {
              this.mainWindow.close();
            },
          },
        ],
      },
      {
        label: '查看(&V)',
        submenu:
          process.env.NODE_ENV === 'development' ||
          process.env.DEBUG_PROD === 'true'
            ? [
                {
                  label: '重新加载',
                  accelerator: 'Ctrl+R',
                  click: () => {
                    this.mainWindow.webContents.reload();
                  },
                },
                {
                  label: '进入全屏幕',
                  accelerator: 'F11',
                  click: () => {
                    this.mainWindow.setFullScreen(
                      !this.mainWindow.isFullScreen()
                    );
                  },
                },
                {
                  label: '进入开发者工具',
                  accelerator: 'Alt+Ctrl+I',
                  click: () => {
                    this.mainWindow.webContents.toggleDevTools();
                  },
                },
              ]
            : [
                {
                  label: '进入全屏幕',
                  accelerator: 'F11',
                  click: () => {
                    this.mainWindow.setFullScreen(
                      !this.mainWindow.isFullScreen()
                    );
                  },
                },
              ],
      },
      {
        label: '帮助(&H)',
        submenu: [
          {
            label: '开始使用',
            click() {
              shell.openExternal('https://electronjs.org');
            },
          },
          {
            label: '文档',
            click() {
              shell.openExternal(
                'https://github.com/electron/electron/tree/master/docs#readme'
              );
            },
          },
          {
            label: '检查更新',
            click() {
              shell.openExternal('https://www.electronjs.org/community');
            },
          },
          {
            label: '关于照片库',
            click() {
              shell.openExternal('https://github.com/electron/electron/issues');
            },
          },
        ],
      },
    ];

    return templateDefault;
  }
}
