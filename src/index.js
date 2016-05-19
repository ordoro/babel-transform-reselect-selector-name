export default function ({Plugin, types: t}) {
  return {
    visitor: {
      VariableDeclarator(path, state) {
        if (!t.isCallExpression(path.node)) {
          return;
        }
        if (path.node.init.callee.name === 'createSelector') {
          const selectorName = path.node.id.name;
          path.node.init.arguments = [
            t.stringLiteral(`${state.file.opts.filename}:${selectorName}`),
            ...path.node.init.arguments
          ];
        }
      },

      ObjectProperty(path, state) {
        if (!t.isCallExpression(path.node.value)) {
          return;
        }
        if (path.node.value.callee.name === 'createSelector') {
          path.node.value.arguments = [
            t.stringLiteral(`${state.file.opts.filename}:${path.node.key.name}`),
            ...path.node.value.arguments
          ];
        }
      }
    }
  };
}
