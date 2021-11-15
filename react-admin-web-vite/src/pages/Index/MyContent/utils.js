const files = import.meta.globEager("../../**/*.jsx");
const components = [];
for (const key in files) {
  if (Object.hasOwnProperty.call(files, key)) {
    if (key.includes("../../Index/") || key.includes("../../Login/")) {
      continue;
    }
    const formatPath = key.split("../..")[1].toLowerCase();
    const obj = {};
    const path = formatPath.substr(0, formatPath.lastIndexOf("/"));
    const component = files[key].default;
    // 写入对象
    obj.path = path;
    obj.component = component;
    components.push(obj);
  }
}
export default components;
