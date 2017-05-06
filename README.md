## Vuedux
> Familiar Redux bindings for Vue.js, inspired by React-Redux.

### Installation
With yarn
```
yarn add vuedux
```
or if you prefer NPM:
```
npm i --save vuedux
```

### Examples
* [Todos with JSX](examples/todos-jsx)
* [Todos](examples/todos)

### API
* [Provider](docs/api.md#provider)
* [connect](docs/api.md#connect)

### What about Revue?
[Revue](https://github.com/revue/revue) is another package that also provides Redux bindings. It connects Redux and Vue is though creating a modified Redux `store` and binding the state to every component. Having to modify Redux to fit Vue, and unnecessarily providing each component with the state is an approach I wasn't wild about. Redux should to be independent of Vue and to only provide user-specified components with actions and state variables. So, Vuedux was created to fill those requierments.

### License
[MIT](https://opensource.org/licenses/MIT)

