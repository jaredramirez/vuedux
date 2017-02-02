// @flow

// eslint-disable-next-line import/prefer-default-export
export const transformProps = (props: any): Object => (
  typeof props === typeof []
    ? props.reduce((acc, cur) => {
      const obj = {...acc};
      obj[cur] = null;
      return obj;
    }, {})
    : props
);
