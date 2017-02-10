// @flow

// eslint-disable-next-line import/prefer-default-export
export const normalizeProps = (map: any): any => (
  Array.isArray(map)
    ? map.reduce((acc, key) => ({
      ...acc,
      [key]: {type: null},
    }), {})
    : map
);
