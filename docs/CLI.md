<p align="center">
  <img src="https://github.com/daltonmenezes/assets/blob/master/images/aura-theme/new-heading.png?raw=true" alt="Aura Theme" width="15%" />
</p>

<h1 align="center">Aura CLI</h1>

<p  align="center">
  <img src="./assets/undraw_to_the_moon.svg" width="70%" />
</p>

```
✨ Welcome to Aura CLI ✨

Usage: aura <command> [options]
      
  🪄  aura make port <port-name>              create a new port using the provided name
  🪄  aura tokenize <target> <destination>    tokenize the target file and save it to the destination
                                             (it replaces the hex color to Aura accent tokens whenever possible)

  🪄  aura build                              compile all the ports in production mode
  🪄  aura build only <port-name>             compile only the provided port by its name in prod
  🪄  aura dev                                compile all the ports in dev mode (watch for changes)
  🪄  aura dev only <port-name>               compile only the provided port by its name in dev (watch for changes)
```

> 💡 Since there are scripts to handle the CLI in the `package.json`, you can change the `aura` in the commands listed above to yarn.
>
> Example:
    
    yarn make port my-awesome-app

# License
[MIT © Dalton Menezes](https://github.com/daltonmenezes/aura-theme/blob/main/LICENSE)    