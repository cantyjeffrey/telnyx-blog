const getNestedChildren = (source, parent) => {
  let results = [];
  for (let i in source) {
    if (source[i].parent_id == parent) {
      let children = getNestedChildren(source, source[i].id);

      if (children.length) {
        source[i].children = children;
      }
      results.push(source[i]);
    }
  }
  return results;
};

export default getNestedChildren;
