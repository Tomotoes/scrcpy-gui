<div align="center">
	<img width="80" height="80" src="https://cdn.jsdelivr.net/gh/Tomotoes/images/blog/icon.png" alt="tomoto">
	<br>
	<h1>Scrcpy GUI</h1>
	<sub>Built with ❤︎ by <a href="https://tomotoes.com">Simon Ma</a> - <a href="https://github.com/Tomotoes/scrcpy-gui/blob/master/README.zh_CN.md">中文文档</a></sub>
</div>
<hr/>
<p align="center">✨ <strong>A simple & beautiful GUI application for scrcpy</strong></p>
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



## 💡Introduction

<div align=center><img width="508" height="785.6" src="https://cdn.jsdelivr.net/gh/Tomotoes/images/scrcpy-gui/English.gif"/></div>
<div align=center><img src="./screenshot.gif"/></div>



[Scrcpy](https://github.com/Genymobile/scrcpy) was created by the team behind the popular Android emulator Genymotion, but it is not an Android emulator itself, it displays and controls Android devices connected via USB or TCP/IP, it does not require any root access. It works with GNU/Linux, Windows, and MacOS.

Scrcpy works by running a server on your Android device, and the desktop application communicates using USB (or using ADB tunneling wireless). The server streams the H.264 video of the device screen. The client decodes the video frames and displays them. The client captures input (keyboard and mouse) events, sends them to the server, and the server injects them into the device. [The documentation](https://github.com/Genymobile/scrcpy/blob/master/DEVELOP.md) provides more details.

If you want to see your Android screen interact with the app or content on your desktop, record your phone screen or perform other basic tasks, then Scrcpy is a good choice.

In short, Scrcpy is an excellent way to easily view your Android screen on your computer and interact with it in real time.



## ✨Features

- **lightness** (native, displays only the device screen)
- **performance** (30~60fps)
- **quality** (1920×1080 or above)
- **low latency** ([35~70ms](https://github.com/Genymobile/scrcpy/pull/646))
- **low startup time** (~1 second to display the first image)
- **non-intrusiveness** (nothing is left installed on the device)
- **No need for ROOT**
- **Wired and wireless can be connected**
- **You can adjust the interface and bit rate**
- **Pictures can be cut at will, with a screen recording**
- **Support multiple devices to screen at the same time**
- **Control your phone with your computer's keyboard and mouse**
- **Mobile computer sharing clipboard**
- **Automatically detect USB connected apps**
- **Can directly add the LAN IP of the device to achieve the effect of wireless control**
- **Automatically save the connected IP address, automatically reminder the next time you enter**
- **Support device alias**
- **Support for Chinese and English**
- **Tray menu**
- **etc...**



## 🌞Requirements

1. The Android device requires at least API 21 (Android 5.0).

2. Make sure you [enabled adb debugging](https://developer.android.com/studio/command-line/adb.html#Enabling) on your device(s).

   On some devices, you also need to enable [an additional option](https://github.com/Genymobile/scrcpy/issues/70#issuecomment-373286323) to control it using keyboard and mouse.

3. Install scrcpy and configure environment variables

   - Linux

     On Linux, you typically need to [build the app manually](https://github.com/Genymobile/scrcpy/blob/master/BUILD.md). Don't worry, it's not that hard.

     A [Snap](https://en.wikipedia.org/wiki/Snappy_(package_manager)) package is available: [`scrcpy`](https://snapstats.org/snaps/scrcpy).

     For Arch Linux, an [AUR](https://wiki.archlinux.org/index.php/Arch_User_Repository) package is available: [`scrcpy`](https://aur.archlinux.org/packages/scrcpy/).

     For Gentoo, an [Ebuild](https://wiki.gentoo.org/wiki/Ebuild) is available: [`scrcpy/`](https://github.com/maggu2810/maggu2810-overlay/tree/master/app-mobilephone/scrcpy).

   - Windows

     For Windows, for simplicity, prebuilt archives with all the dependencies (including `adb`) are available:

     - [`scrcpy-win32-v1.10.zip`](https://github.com/Genymobile/scrcpy/releases/download/v1.10/scrcpy-win32-v1.10.zip)
       *(SHA-256: f98b400b3764404b33b212e9762dd6f1593ddb766c1480fc2609c94768e4a8e1)*
     - [`scrcpy-win64-v1.10.zip`](https://github.com/Genymobile/scrcpy/releases/download/v1.10/scrcpy-win64-v1.10.zip)
       *(SHA-256: 95de34575d873c7e95dfcfb5e74d0f6af4f70b2a5bc6fde0f48d1a05480e3a44)*

     You can also [build the app manually](https://github.com/Genymobile/scrcpy/blob/master/BUILD.md).

   - macOS

     The application is available in [Homebrew](https://brew.sh/). Just install it:

     ```
     brew install scrcpy
     ```

     You need `adb`, accessible from your `PATH`. If you don't have it yet:

     ```
     brew cask install android-platform-tools
     ```

     You can also [build the app manually](https://github.com/Genymobile/scrcpy/blob/master/BUILD.md).



## 🎉Install

Click here to download [App](https://github.com/Tomotoes/scrcpy-gui/releases).



## 🎇Instructions

### connection method

#### Prerequisites

- Make sure **adb , scrcpy** are working properly
- Make sure the phone is turned on for USB debugging and certified for computer debugging

#### Wired connection

1. Make sure the phone is connected to the computer via the data cable

2. Wait for the software to automatically detect the device
3. Select the device and click `Open Selected Mirror`.
4. Wait for the device to open

#### Wireless connections

1. Please make sure the phone is on the same LAN as the computer.
2. When connecting for the first time:
   - **Please make sure your phone is connected to your computer via the cable**
   - **Please make sure that only one mobile phone is connected to the computer via the data cable**
   - The first time you need to set the port, you can connect to the phone later, just add the static IP of the phone.
3. Enter the LAN IP address of the phone (if the IP is DHCP assigned, please change to static IP)
4. Click `Open wireless connection`
5. Waiting for the wireless connection to succeed
6. Select the device and click `Open Selected Mirror`.
7. Wait for the device to open



## Shortcuts

| Action                                  | Shortcut                      | Shortcut (macOS)             |
| --------------------------------------- | ----------------------------- | ---------------------------- |
| Switch fullscreen mode                  | `Ctrl`+`f`                    | `Cmd`+`f`                    |
| Resize window to 1:1 (pixel-perfect)    | `Ctrl`+`g`                    | `Cmd`+`g`                    |
| Resize window to remove black borders   | `Ctrl`+`x` \| *Double-click¹* | `Cmd`+`x` \| *Double-click¹* |
| Click on `HOME`                         | `Ctrl`+`h` \| *Middle-click*  | `Ctrl`+`h` \| *Middle-click* |
| Click on `BACK`                         | `Ctrl`+`b` \| *Right-click²*  | `Cmd`+`b` \| *Right-click²*  |
| Click on `APP_SWITCH`                   | `Ctrl`+`s`                    | `Cmd`+`s`                    |
| Click on `MENU`                         | `Ctrl`+`m`                    | `Ctrl`+`m`                   |
| Click on `VOLUME_UP`                    | `Ctrl`+`↑` *(up)*             | `Cmd`+`↑` *(up)*             |
| Click on `VOLUME_DOWN`                  | `Ctrl`+`↓` *(down)*           | `Cmd`+`↓` *(down)*           |
| Click on `POWER`                        | `Ctrl`+`p`                    | `Cmd`+`p`                    |
| Power on                                | *Right-click²*                | *Right-click²*               |
| Turn device screen off (keep mirroring) | `Ctrl`+`o`                    | `Cmd`+`o`                    |
| Expand notification panel               | `Ctrl`+`n`                    | `Cmd`+`n`                    |
| Collapse notification panel             | `Ctrl`+`Shift`+`n`            | `Cmd`+`Shift`+`n`            |
| Copy device clipboard to computer       | `Ctrl`+`c`                    | `Cmd`+`c`                    |
| Paste computer clipboard to device      | `Ctrl`+`v`                    | `Cmd`+`v`                    |
| Copy computer clipboard to device       | `Ctrl`+`Shift`+`v`            | `Cmd`+`Shift`+`v`            |
| Enable/disable FPS counter (on stdout)  | `Ctrl`+`i`                    | `Cmd`+`i`                    |

*¹Double-click on black borders to remove them.*
*²Right-click turns the screen on if it was off, presses BACK otherwise.*



## 🎯Develop

This project was generated with [electron-vue](https://github.com/SimulatedGREG/electron-vue)@[8fae476](https://github.com/SimulatedGREG/electron-vue/tree/8fae4763e9d225d3691b627e83b9e09b56f6c935) using [vue-cli](https://github.com/vuejs/vue-cli). Documentation about the original structure can be found [here](https://simulatedgreg.gitbooks.io/electron-vue/content/index.html).

Feel free to open issues or PRs for any problem you may encounter, typos that you see or aspects that are confusing. Contributions are welcome, open an issue or email me if you have something you want to work on.

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



## 👀Reward

If you like `scrcpy-gui` and it really helps you, please give me a cup of coffee~

paypal: [https://paypal.me/tomotoes](https://paypal.me/tomotoes)

Alipay：

![alipay](https://cdn.jsdelivr.net/gh/Tomotoes/images/blog/alipay.png)

Wechat：

![wechat](https://cdn.jsdelivr.net/gh/Tomotoes/images/blog/wechat.png)

## 📃License

**GNU GPLv3**
