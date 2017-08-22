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
[Revue](https://github.com/revue/revue) is another package that also provides Redux bindings. It connects Redux and Vue is by creating a modified Redux `store` and uses Mixins<sup>*</sup> in it's implementation. This isn't an approach I wasn't wild about. Redux should to be independent of Vue and favor component composition over mixins. So, Vuedux was created to fill those requierments.

<sup>*</sup>[Mixins are Dead. Long Live Component Composition](https://medium.com/@dan_abramov/mixins-are-dead-long-live-higher-order-components-94a0d2f9e750)

### License
[MIT](https://opensource.org/licenses/MIT)

### BREAKING CHANGES:

* v0.0.10
  * Flipped order of `connect` arguments, `mapStateToProps` is now first followed by `mapDispatchToProps`

