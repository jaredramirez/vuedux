// @flow

export default (props: any): Object => (
  typeof props === typeof []
    ? props.reduce((acc, cur) => {
      const obj = {...acc};
      obj[cur] = null;
      return obj;
    }, {})
    : props
);
