const files = require.context('@/containers', true, /\.jsx$/)
const components = []
// eslint-disable-next-line array-callback-return
files.keys().map((key) => {
  if (key.includes('./Index/') || key.includes('./Login/')) {
    return false
  }
  const formatPath = key.split('.')[1].toLowerCase()
  const obj = {}
  const path = formatPath.substr(0, formatPath.lastIndexOf('/'))
  const component = files(key).default
  // 写入对象
  obj.path = path
  obj.component = component
  components.push(obj)
})
export default components
