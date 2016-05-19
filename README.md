# babel-transform-reselect-selector-name

[experiment]

Transform calls to [reselect](https://github.com/reactjs/reselect) `createSelector` to call with `name` as the first argument. Combine with a modified reselect library to debug `reselect` performance: https://gist.github.com/luqmaan/ed596266828847e27657619eae646328.

package.json and test structure mostly copypasta'd from https://github.com/gaearon/babel-plugin-react-transform.
