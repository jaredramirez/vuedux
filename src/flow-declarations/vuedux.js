import type {Component} from './vue';

export type MapToProps = (dispatch: Object, ownProps?: Object) => Object;
export type ConnectCreator =
  (mapDispatchToProps: MapToProps, mapStateToProps: MapToProps) => Component;
