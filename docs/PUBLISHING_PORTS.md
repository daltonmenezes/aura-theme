<p align="center">
  <img src="https://github.com/daltonmenezes/assets/blob/master/images/aura-theme/new-heading.png?raw=true" alt="Aura Theme" width="15%" />
</p>

<h1 align="center">Publishing Ports</h1>

<p  align="center">
  <img src="./assets/undraw_order_delivered.svg" width="70%" />
</p>

1. Create your feature branch:
    ```js
    git checkout -b feat/my-awesome-port
    ```
2. Be sure to add you to the contribution list in your port readme, such as:
    ```js
    # Contributors
    <table>
      <thead>
        <tr>
          <td valign="bottom"><p align="center">
            <a href="https://github.com/your-username">
              <img src="https://github.com/your-username.png?size=100" align="center" />
            </a>
          </p></td>
          {{{ author-thead }}}
        </tr>
      </thead>

      <tbody>
        <tr>
          <td><a href="https://github.com/your-username">Your name</a></td>
          {{{ author-tbody }}}
        </tr>
      </tbody>
    </table>
    ```
3.  Build only your port:
    ```js
    yarn build only my-awesome-port
    ```
4. Add, commit and send your changes:
    ```js
    git add .
    git commit -m "feat(port): add my-awesome-port"
    git push origin feat/my-awesome-port
    ```
5. Now, on GitHub, start the Pull Request creation and in the body of the pull request do the following things:
    - Put a link to the icon of the app that your port is related to
    - Attach a screenshot with a good zoom in fullscreen showing your port in action
6. Create the pull request

Yay! That's it!

Thank you so much for your contribution! 🥳

# License
[MIT © Dalton Menezes](https://github.com/daltonmenezes/aura-theme/blob/main/LICENSE)

