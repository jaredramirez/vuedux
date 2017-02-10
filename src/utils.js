// @flow

// eslint-disable-next-line import/prefer-default-export
export const normalizeMap = (map: any): any => (
  Array.isArray(map)
    ? map.map(key => ({key, val: key}))
    : Object.keys(map).map(key => ({key, val: map[key]}))
);
