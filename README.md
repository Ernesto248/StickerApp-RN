# Sticker App

Este proyecto es una aplicación móvil desarrollada en React Native utilizando Expo. La aplicación permite a los usuarios seleccionar una imagen desde su galería, agregar stickers de emojis y guardar la imagen modificada en su dispositivo.

## Contenido

- [Requisitos](#requisitos)
- [Instalación](#instalación)
- [Componentes](#componentes)
- [Configuración de Expo](#configuración-de-expo)

## Requisitos

- Node.js
- Expo CLI

## Instalación

1. Clona este repositorio:
    ```sh
    git clone https://github.com/Ernesto248/StickerApp-RN.git
    ```
2. Navega al directorio del proyecto:
    ```sh
    cd sticker-app
    ```
3. Instala las dependencias:
    ```sh
    npm install
    ```

## Componentes

- **Button.js**: Un botón personalizado.
- **CircleButton.js**: Un botón circular para agregar stickers.
- **EmojiList.js**: Lista de emojis disponibles.
- **EmojiPicker.js**: Componente modal para seleccionar un emoji.
- **EmojiSticker.js**: Componente para mostrar el sticker del emoji seleccionado.
- **IconButton.js**: Un botón con ícono.
- **ImageViewer.js**: Componente para mostrar la imagen seleccionada.

## Configuración de Expo

El archivo `app.json` contiene la configuración de Expo para la aplicación:

```json
{
  "expo": {
    "name": "sticker-app",
    "slug": "sticker-app",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/assets/icon.png",
    "userInterfaceStyle": "light",
    "splash": {
      "image": "./assets/assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#25292e"
    },
    "ios": {
      "supportsTablet": true
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/assets/adaptive-icon.png",
        "backgroundColor": "#ffffff"
      }
    },
    "web": {
      "favicon": "./assets/assets/favicon.png"
    }
  }
}    
