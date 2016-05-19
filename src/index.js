export default function ({Plugin, types: t}) {
  function updateArgs(call, selectorName, state) {
    call.arguments = [
      t.stringLiteral(`${state.file.opts.sourceFileName}:${selectorName}`),,
      ...call.arguments
    ];
  }

  return {
    visitor: {
      VariableDeclarator(path, state) {
        if (t.isCallExpression(path.node.init)) {
          if (path.node.init.callee.name === 'createSelector') {
            updateArgs(path.node.init, path.node.id.name, state);
          }
        }
        else if (t.isArrowFunctionExpression(path.node.init) && t.isCallExpression(path.node.init.body)) {
          if (path.node.init.body.callee.name === 'createSelector') {
            updateArgs(path.node.init.body, path.node.id.name, state);
          }
        }
      },

      ObjectProperty(path, state) {
        if (!t.isCallExpression(path.node.value)) {
          return;
        }
        if (path.node.value.callee.name === 'createSelector') {
          updateArgs(path.node.value, path.node.key.name, state);
        }
      }
    }
  };
}
