<div align="center">
	<img width="80" height="80" src="https://cdn.jsdelivr.net/gh/Tomotoes/images/blog/icon.png" alt="tomoto">
	<br>
	<h1>Scrcpy GUI</h1>
	<sub>Built with ❤︎ by <a href="https://tomotoes.com">Simon Ma</a> - <a href="https://github.com/Tomotoes/scrcpy-gui">English document</a></sub>
</div>
<hr/>
<p align="center">✨ <strong>一个简洁&漂亮的 scrcpy GUI 应用</strong></p>
<p align="center">
  <a href="https://github.com/feross/standard">
    <img src="https://img.shields.io/badge/code%20style-standard-green.svg?style=flat-square" alt="">
  </a>
  <a href="https://github.com/Tomotoes/scrcpy-gui/releases">
    <img src="https://img.shields.io/github/downloads/Tomotoes/scrcpy-gui/total.svg?style=flat-square" alt="">
  </a>
   <a href="https://travis-ci.org/Tomotoes/scrcpy-gui/builds">
    <img src="https://img.shields.io/travis/Tomotoes/scrcpy-gui.svg?style=flat-square" alt="">
  </a>
  <a href="https://github.com/Tomotoes/scrcpy-gui/releases/latest">
    <img src="https://img.shields.io/github/release/Tomotoes/scrcpy-gui.svg?style=flat-square" alt="">
  </a>
  <a href="https://gitter.im/scrcpy/community?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge"><img src="https://badges.gitter.im/scrcpy/community.svg?style=flat-square"></a>
  <a href="https://opensource.org/licenses/GPL-3.0/"><img src="https://badges.frapsoft.com/os/gpl/gpl.svg?style=flat-square"></a>
  <a href="https://github.com/Tomotoes/scrcpy-gui/issues"><img src="https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat-square"></a>
</p>



## 💡简介

<p align="center"><a href="https://jq.qq.com/?_wv=1027&k=5jxRe2o" target="_blank">点击链接加入QQ群聊【Scrcpy-GUI】</a></p><p align="center"><a href="https://mp.weixin.qq.com/s/JbD05YUlQ7NvSCsPJTm5nQ" target="_blank"><strong>Topbook:</strong> 不用花钱，三步投屏手机到任何电脑系统，支持高帧率录屏、电脑控制手机。</a></p>
<p align="right"> 感谢 Topbook 平台的分享!</p>
<div align=center><img width="508" height="785.6" src="https://cdn.jsdelivr.net/gh/Tomotoes/images/scrcpy-gui/Chinese.gif"/></div>
<div align=center><img src="./screenshot.gif"/></div>

[Scrcpy](https://github.com/Genymobile/scrcpy) 是由流行的`Android`模拟器`Genymotion`背后的团队创建的，但它本身并不是`Android`模拟器，它显示和控制通过`USB`（或通过`TCP/IP`）连接的`Android`设备，它不需要任何`root`访问权限，它适用于`GNU/Linux`、`Windows`和`MacOS`。

`Scrcpy`的工作原理是在你的`Android`设备上运行服务器，桌面应用程序使用`USB`（或使用`ADB`隧道无线）进行通信。服务器流式传输设备屏幕的[H.264](https://translate.googleusercontent.com/translate_c?depth=1&rurl=translate.google.com&sl=en&sp=nmt4&tl=zh-CN&u=https://en.wikipedia.org/wiki/H.264/MPEG-4_AVC&xid=25657,15700019,15700124,15700186,15700190,15700201,15700237,15700242,15700248&usg=ALkJrhiJZJWaUqBVRqUviQ4IlhKQCwqp_Q)视频。 客户端解码视频帧并显示它们。客户端捕获输入（键盘和鼠标）事件，将它们发送到服务器，服务器将它们注入设备。[文档](https://github.com/Genymobile/scrcpy/blob/master/DEVELOP.md)提供了更多详细信息。

如果你想在桌面上看到你的`Android`屏幕与应用程序或内容进行交互，记录你的手机屏幕或执行其他基本任务，那`Scrcpy`就是一个好的选择。

简而言之，`Scrcpy`是一种极好的方式，可以在你的计算机上轻松查看你的`Android`屏幕，并且可以实时与其进行交互。

*引用自[云网牛站](https://ywnz.com/linuxsj/5581.html)*



## ✨亮点

- **亮度** （原生，仅显示设备屏幕）
- **表演** （30~60fps）
- **质量** （1920×1080或以上）
- **低延迟** （70~100ms）
- **启动时间短** （显示第一张图像约1秒）
- **非侵入性** （设备上没有安装任何东西）
- **不需要 ROOT**
- **有线无线都可连接**
- **可以随便调整界面和码率**
- **画面随意裁剪，自带录屏（手游直播利器）**
- **支持多设备同时投屏**
- **利用电脑的键盘和鼠标可以控制手机**
- **把 APK 文件拖拽到电脑窗口即可安装应用到手机，把普通文件拖拽到窗口即可复制到手机**
- **手机电脑共享剪贴板**
- **自动检测USB连接的设备**
- **可直接添加设备的局域网IP，达到无线控制的效果**
- **将自动保存连接过的IP地址，下次输入时，自动提醒**
- **支持设备别名**
- **支持中英两种语言**
- **Tray menu**
- 等等等...

*部分引用自[最美应用](http://zuimeia.com/app/6771/?platform=2)*



## 🌞要求

1. `Android 5.0`以上

2. 打开USB调试

   在 `开发人员选项` 打开 `USB调试`，USB连接手机
   ![img](https://cdn.jsdelivr.net/gh/Tomotoes/images/scrcpy-gui/1.jpg)

3. 安装好`ADB` ，并配置环境变量。

   [Windows](https://dl.google.com/android/repository/platform-tools-latest-windows.zip)
   [Mac OS](https://dl.google.com/android/repository/platform-tools-latest-darwin.zip)
   [Linux](https://dl.google.com/android/repository/platform-tools-latest-linux.zip)

   在任何路径下打开命令行，键入 `ADB` 有反馈。

4. 安装好`scrcpy`，并配置环境变量

  - Windows

    Windows 可以使用包含所有依赖项（包括adb）的预构建存档：

    下载下面`scrcpy`的压缩包，里面有`ADB`文件，然后把解压后的`scrcpy`文件夹添加到环境变量，再重启电脑，就可以了。

    1. [`scrcpy-win32-v1.10.zip`](https://github.com/Genymobile/scrcpy/releases/download/v1.10/scrcpy-win32-v1.10.zip)
       *(SHA-256: f98b400b3764404b33b212e9762dd6f1593ddb766c1480fc2609c94768e4a8e1)*
    2. [`scrcpy-win64-v1.10.zip`](https://github.com/Genymobile/scrcpy/releases/download/v1.10/scrcpy-win64-v1.10.zip)
       *(SHA-256: 95de34575d873c7e95dfcfb5e74d0f6af4f70b2a5bc6fde0f48d1a05480e3a44)*

    你也可以[手动构建](https://github.com/Genymobile/scrcpy/blob/master/BUILD.md)。

  - Mac OS

    可以使用 [Homebrew](https://brew.sh/) 来安装：

    ```
    brew install scrcpy
    ```

    如果你还没有安装`ADB`，可以使用下面的命令：

    ```
    brew cask install android-platform-tools
    ```

    你也可以[手动构建](https://github.com/Genymobile/scrcpy/blob/master/BUILD.md)。

  - Linux

    你可能需要[手动构建应用程序](https://github.com/Genymobile/scrcpy/blob/master/BUILD.md)。别担心，这并不难。

    此外，提供了 [Snap](https://en.wikipedia.org/wiki/Snappy_(package_manager)) 包：[`scrcpy`](https://snapstats.org/snaps/scrcpy)

    对于 Arch Linux， 可以使用 [AUR](https://wiki.archlinux.org/index.php/Arch_User_Repository) 包：[`scrcpy`](https://aur.archlinux.org/packages/scrcpy/)

    对于 Gentoo，可以使用 [Ebuild](https://wiki.gentoo.org/wiki/Ebuild) 包： [`scrcpy/`](https://github.com/maggu2810/maggu2810-overlay/tree/master/app-mobilephone/scrcpy)



## 🎉安装

点击此处下载[应用](https://github.com/Tomotoes/scrcpy-gui/releases)。



## 🎇使用

### 连接方法

#### 必备条件

- 请确保 **adb , scrcpy** 可正常使用
- 请确保手机已打开 USB 调试, 并已认证电脑调试

#### 有线连接

1. 请确保手机已通过数据线连接到电脑

2. 等待软件自动检测到设备
3. 选中设备，点击`打开选中的镜像`
4. 等待设备打开

#### 无线连接

1. 请确保手机与电脑处在同一局域网

2. 第一次无线连接时:
   - **请确保手机已通过数据线连接到电脑**
   - **请确保只有一个手机通过数据线连接到电脑**
   - 第一次需设置端口，以后连接手机，只需要添加手机的静态IP即可

3. 输入手机的局域网`IP`地址（如果`IP`为`DHCP`分配，请更改为静态`IP`）

4. 点击`开启无线连接`

5. 等待无线连接成功

6. 选中设备，点击`打开选中的镜像`

7. 等待设备打开



### 快捷键

| 操作                             | 快捷键                       | 快捷键 (macOS)              |
| -------------------------------- | ---------------------------- | --------------------------- |
| 切换全屏模式                     | `Ctrl`+`f`                   | `Cmd`+`f`                   |
| 将窗口调整为 1:1                 | `Ctrl`+`g`                   | `Cmd`+`g`                   |
| 调整窗口大小以删除黑色边框       | `Ctrl`+`x` \| *双击黑色背景* | `Cmd`+`x` \| *双击黑色背景* |
| 设备`HOME`键                     | `Ctrl`+`h` \| *鼠标中键*     | `Ctrl`+`h` \| *鼠标中键*    |
| 设备`BACK`键                     | `Ctrl`+`b` \| *鼠标右键*     | `Cmd`+`b` \| *鼠标右键*     |
| 设备`任务管理`键                 | `Ctrl`+`s`                   | `Cmd`+`s`                   |
| 设备`菜单`键                     | `Ctrl`+`m`                   | `Ctrl`+`m`                  |
| 设备`音量+`键                    | `Ctrl`+`↑`                   | `Cmd`+`↑`                   |
| 设备`音量-`键                    | `Ctrl`+`↓`                   | `Cmd`+`↓`                   |
| 设备`电源`键                     | `Ctrl`+`p`                   | `Cmd`+`p`                   |
| 点亮手机屏幕                     | *鼠标右键*                   | *鼠标右键*                  |
| 关闭设备屏幕（保持镜像）         | `Ctrl`+`o`                   | `Cmd`+`o`                   |
| 展开通知面板                     | `Ctrl`+`n`                   | `Cmd`+`n`                   |
| 折叠通知面板                     | `Ctrl`+`Shift`+`n`           | `Cmd`+`Shift`+`n`           |
| 将设备剪贴板中的内容复制到计算机 | `Ctrl`+`c`                   | `Cmd`+`c`                   |
| 将计算机剪贴板中的内容粘贴到设备 | `Ctrl`+`v`                   | `Cmd`+`v`                   |
| 将计算机剪贴板中的内容复制到设备 | `Ctrl`+`Shift`+`v`           | `Cmd`+`Shift`+`v`           |
| 安装`APK`                        | 将`APK`文件拖入投屏          | 将`APK`文件拖入投屏         |
| 传输文件到设备                   | 将文件拖入投屏               | 将文件拖入投屏              |
| 启用/禁用FPS计数器（stdout）     | `Ctrl`+`i`                   | `Cmd`+`i`                   |



## 🎯开发

This project was generated with [electron-vue](https://github.com/SimulatedGREG/electron-vue)@[8fae476](https://github.com/SimulatedGREG/electron-vue/tree/8fae4763e9d225d3691b627e83b9e09b56f6c935) using [vue-cli](https://github.com/vuejs/vue-cli). Documentation about the original structure can be found [here](https://simulatedgreg.gitbooks.io/electron-vue/content/index.html).

如果你有任何问题，欢迎提交 `Issues` 或 `PR`！

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:9080
npm run dev

# build electron application for production
npm run build

# lint all JS/Vue component files in `src/`
npm run lint
```



## 🤞贡献者

<table>
  <tr>
    <td align="center"><a href="https://github.com/Tomotoes"><img src="https://avatars1.githubusercontent.com/u/32236122?s=460&v=4" width="100px;" alt="Tomotoes"/><br /><sub><b>Simon Ma</b></sub></a><br /><a href="https://github.com/Tomotoes/scrcpy-gui/commits?author=Tomotoes" title="Code">💻</a> <a href="https://tomotoes.com">🎨</a></td>
  </tr>
</table>



## 👀赞助

如果你喜欢`scrcpy-gui`，并且它对你确实有帮助，欢迎给我打赏一杯咖啡哈~

paypal: [https://paypal.me/tomotoes](https://paypal.me/tomotoes)

支付宝：

![alipay](https://cdn.jsdelivr.net/gh/Tomotoes/images/blog/alipay.png)

微信：

![wechat](https://cdn.jsdelivr.net/gh/Tomotoes/images/blog/wechat.png)

## 📃协议

**GNU GPLv3**
