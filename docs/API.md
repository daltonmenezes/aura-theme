<p align="center">
  <img src="https://github.com/daltonmenezes/assets/blob/master/images/aura-theme/new-heading.png?raw=true" alt="Aura Theme" width="15%" />
</p>

<h1 align="center">Aura API</h1>

<p  align="center">
  <img src="./assets/undraw_book_lover.svg" width="70%" />
</p>


## createPort
Used to create a port file in disk from a given template file path.

<details>
  
  > Definition:
  ```ts
  interface PortCompiler {
    template: string
    replacements: Record<string, unknown>
    outputFileName?: string
    outputDist?: string
    showDebugLogs?: boolean
  }

  createPort(props: PortCompiler): Promise<void> {}
  ```
  - **template**:<br/>
      The path of the file to apply the replacements.

  - **replacements**:<br/>
      An object to be used for the template engine to replace values based on the name of the keys.

  - **outputFileName**?:<br/>
      The name to be used as output *(just the name without the file extension)*

  - **outputDist**?:<br/>
      A path to override the default `<root>/packages` to compile the file.

  - **showDebugLogs**?:<br/>
      Self-descriptive, default is `true`.

  > Example:
  ```ts
  await createPort({
    template: resolve(templateFolder, `aura-theme.js`),
    replacements: colorSchemes.dark,
  })
  ```

</details>

## createInMemoryPort
Used to create a port in memory.
  
> This is useful, for example, when you need to convert one port to another before creating it in disk.

<details>

  > Definition:
  ```ts
  interface PortInMemoryCompiler {
    template: string
    replacements: Record<string, unknown>
  }

  createInMemoryPort(props: PortInMemoryCompiler): Promise<string> {}
  ```
  - **template**:<br/>
      The path of the file to apply the replacements.

  - **replacements**:<br/>
      An object to be used for the template engine to replace values based on the name of the keys.

  > Example:
  ```ts
  await createInMemoryPort({
    template: resolve(templateFolder, `aura-theme.js`),
    replacements: {
      portName: 'Aura Theme',
    },
  })
  ```  
</details>

## createFromInMemoryPort
Used to create a port file in disk from an in memory one.

<details>

  > Definition:
  ```ts
  interface PortFromInMemoryCompiler {
    template: string
    output: string
  }

  createFromInMemoryPort(props: PortFromInMemoryCompiler): Promise<void> {}
  ```
  - **template**:<br/>
      The in memory port to be created in disk.

  - **output**:<br/>
      The path where the port will be created.

  > Example:
  ```ts
  await createFromInMemoryPort({
    template: templateInMemory,
    output: resolve(
      constants.folders.distFolder,
      'aura-port',
      'aura-theme.json'
    ),
  })
  ```
</details>

## createReadme
Used to create a README.md in disk from a given template file path.

> The values at "theme" property in the root "package.json" file will be injected by default to also fill the template.

<details>

  > Definition:
  ```ts
  interface DocumentCompiler {
    template: string
    replacements: Record<string, unknown>
    outputFileName?: string
    outputDist?: string
    showDebugLogs?: boolean
  }

  createReadme(props: DocumentCompiler): Promise<void> {}
  ```
  - **template**:<br/>
      the path of the file to apply the replacements.

  - **replacements**:<br/>
      an object to be used for the template engine to replace values based on the name of the keys.

  - **outputFileName**?:<br/>
      The name to be used as output *(just the name without the file extension)*

  - **outputDist**?:<br/>
      A path to override the default `<root>/packages` to compile the file.

  - **showDebugLogs**?:<br/>
      self-descriptive, default is `true`.

  > Example:
  ```ts
  await createReadme({
    template: resolve('path', 'to', 'README.md'),
    replacements: {
      portName: 'Visual Studio Code',
    },
  })
  ```
</details>

## copyExtraFiles
Used to copy all files and folders inside a folder named as **"extra"** inside your port folder, keeping their structure.

> This is useful to add files in the dist version that you don't need to change their content dynamically at the build process.

<details>

  > Definition:
  ```ts
  copyExtraFiles(portRootFolder: string, outputFolder: string = ''): Promise<void> {}
  ```
  - **portRootFolder**:<br/>
      The root folder where the **"extra"** folder lives.

  - **outputFolder**:<br/>
      The output folder where the files will be copied to, if not provided, the default port folder dist will be used: `<root>/packages`.

  > Example:
  ```ts
  await copyExtraFiles(__dirname)
  ```  
</details>

## colorHandlers
  - tokenize
    <details>
      <br/>
      Used to convert hex colors in a given string to Aura accent tokens.
      <br/><br/>

      > This is useful to convert the ports you are creating by hard coding the hex colors for testing to the tokenized port template version.

      > Definition:
      ```ts
      tokenize(content: string): string {}
      ```
      - **content**:<br/>
         A string containing hex colors to be replaced to their respective Aura accent tokens.<br/><br/>

      > Example:
      ```ts
      tokenize(`"activityBar.activeBorder": "#a277ff",`)
      // "activityBar.activeBorder": "{{ accent1 }}",
      ``` 
    </details>     
  - desaturate
    <details>
      <br/>
      Decreases the intensity of a color. Its range is between 0 to 1. The first argument of the desaturate function is the amount by how much the color intensity should be decreased.
      <br/><br/>

      > Definition:
      ```ts
      desaturate(amount: string | number): (color: string) => string
      ```
      - **amount**:<br/>
         The value to be decreased.

      - **color**:<br/>
         The color to apply the desaturation.

      > Example:
      ```ts
      const applyDesaturation = desaturate(0.2)

      applyDesaturation('#CCCD64') // #b8b979
      ``` 
    </details>   
  - shade
    <details>
      <br/>
      Shades a color by mixing it with black. shade can produce hue shifts, where as darken manipulates the luminance channel and therefore doesn't produce hue shifts.
      <br/><br/>

      > Definition:
      ```ts
      shade(percentage: string | number): (color: string) => string
      ```
      - **percentage**:<br/>
         The shade percentage

      - **color**:<br/>
         The color to apply the shade

      > Example:
      ```ts
      const applyShade = shade(0.25)

      applyShade('#00f') // #00003f
      ``` 
    </details>    
  - hexToRgb
    <details>
      <br/>
      Used to convert a Hex value to RGB.
      <br/><br/>

      > Definition:
      ```ts
      hexToRgb(color: string): number[] {}
      ```
      - **colors**:<br/>
          The Hex value to be converted.

      > Example:
      ```ts
      hexToRgb('#a277ff') // [162, 119, 255]
      ``` 
    </details>    
  - rgbToHex
    <details>
      <br/>
      Used to convert a RGB value to Hex.
      <br/><br/>

      > Definition:
      ```ts
      rgbToHex(color: [number, number, number]): string {}
      ```
      - **colors**:<br/>
          The RGB array to be converted.

      > Example:
      ```ts
      rgbToHex([162, 119, 255]) // #a277ff
      ``` 
    </details>  
  - schemeToRgb
    <details>
      <br/>
      Used to convert the values of a hex color scheme to RGB.
      <br/><br/>

      > Definition:
      ```ts
      schemeToRgb(colors: Record<string, unknown>): Record<string, unknown> {}
      ```
      - **colors**:<br/>
          A hex color scheme object

      > Example:
      ```ts
      schemeToRgb(colorSchemes.dark) // { accent1: [162, 119, 255], accent2: [97, 255, 202], ... }
      ``` 
    </details>
  - schemeToTerminalRgb
    <details>
      <br/>
      Used to convert the values of a hex color scheme to RGB scheme compatible with iTerm.
      <br/><br/>

      > Definition:
      ```ts
      schemeToTerminalRgb(colors: Record<string, unknown>): Record<string, unknown> {}
      ```
      - **colors**:<br/>
          A hex color scheme object

      > Example:
      ```ts
      schemeToTerminalRgb(colorSchemes.dark)
      /*{
        accent1_red: 0.6352941176470588,
        accent1_green: 0.4666666666666667,
        accent1_blue: 1,
        accent2_red: 0.3803921568627451,
        accent2_green: 1,
        accent2_blue: 0.792156862745098,
      }*/
      ``` 
    </details>  
  - [terminalConvertion](https://github.com/daltonmenezes/aura-theme/blob/main/%40types/termcolors/termcolors.ts)

## colorSchemes
  - [dark](https://github.com/daltonmenezes/aura-theme/blob/main/src/core/colors/schemes/dark.ts)
  - [darkSoft](https://github.com/daltonmenezes/aura-theme/blob/main/src/core/colors/schemes/dark.ts)
  - [softDark](https://github.com/daltonmenezes/aura-theme/blob/main/src/core/colors/schemes/soft-dark.ts)
  - [softDarkSoft](https://github.com/daltonmenezes/aura-theme/blob/main/src/core/colors/schemes/soft-dark.ts)

## getAllFiles
Used get all files from a root folder recursively.

<details>

  > Definition:
  ```ts
   getAllFiles(directory: string, files: string[] = []): Promise<string[]> {}
  ```
  - **directory**:<br/>
      The root directory to get all file paths.     

  - **files**:<br/>
      Used to store the paths recursively, you don't need to pass it manually.     

  > Example:
  ```ts
  await getAllFiles('/path/to/folder')
  // ['path/to/file1.ext', 'path/folder/to/file2.ext']
  ```
</details>

## unlink
Used to remove files and folders recursively.

<details>

  > Definition:
  ```ts
   unlink(path: string): Promise<void> {}
  ```
  - **path**:<br/>
      A file or folder path to be removed.

  > Example:
  ```ts
  await unlink('/path/to/file/or/folder')
  ```
</details>

## getPathByPlatformInDev
Used to get a path in the provided object for the current platform in development.
  
> If the platform doesn't exist in the provided object, an empty string will be returned.

<details>

  > Definition:
  ```ts
  getPathByPlatformInDev(pathsPerPlatform: Record<string, string>): string {}
  ```
  - **pathsPerPlatform**:<br/>
      An object with paths per platform id and their values.     

  > Example:
  ```ts
  getPathByPlatformInDev({ darwin: '/some/path', linux: '/other/path' }) // '/some/path'
  ```
</details>

## zip
  - addFile(path: string): void
  - writeZip(path: string): void
  - zipFolder(targetFolder: string, outputPath: string): Promise<void | Error>

## toCamelCase
Used to transform a string to camel-case.

<details>

  > Definition:
  ```ts
  toCamelCase(str: string, separator: string): string
  ```
  - **str**:<br/>
      A string to be converted to camel-case.

  - **separator**:<br/>
      The separator to be used to split the string and apply the camel-case transformation.

  > Example:
  ```ts
  toCamelCase('aura-theme', '-') // 'auraTheme'
  ```  
</details>

## toPortName
Used to convert a string to a valid port name *(PascalCase)*.

<details>

  > Definition:
  ```ts
  toPortName(name: string): string {}
  ```
  - **name**:<br/>
      The name of the port separated by hiphens.

  > Example:
  ```ts
  toPortName('aura-theme') // 'AuraTheme'
  ```  
</details>

## capitalizeFirstLetter
Used to capitalize only the first letter in a given text.

<details>

  > Definition:
  ```ts
  capitalizeFirstLetter(rawText: string): string {}
  ```
  - **rawText**:<br/>
      A string to capitalize the first letter.

  > Example:
  ```ts
  capitalizeFirstLetter('aura theme') // 'Aura theme'
  ```  
</details>

## constants
  - isDev : *boolean*
  - isProd : *boolean*    
  - [info](https://github.com/daltonmenezes/aura-theme/blob/main/package.json#L4-L18)
  - [emojis](https://github.com/daltonmenezes/aura-theme/blob/main/src/shared/constants/emojis.ts)
  - [files](https://github.com/daltonmenezes/aura-theme/blob/main/src/shared/constants/files.ts)
  - [folders](https://github.com/daltonmenezes/aura-theme/blob/main/src/shared/constants/folders.ts)

# License
[MIT © Dalton Menezes](https://github.com/daltonmenezes/aura-theme/blob/main/LICENSE)