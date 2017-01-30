import type {Component} from './vue';

export type MapToProps = (dispatch: Object, ownProps?: Object) => Object;
export type Connect =
  (mapDispatchToProps: MapToProps, mapStateToProps: MapToProps, component: Component) => Component;
