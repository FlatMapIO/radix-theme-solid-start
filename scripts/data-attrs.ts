/// <reference types="@types/bun" />

async function findDataAttributes(): Promise<Map<string, Set<string>>> {
  const dataAttributesMap = new Map<string, Set<string>>()
  const glob = new Bun.Glob('**/*.module.css')

  const files = glob.scanSync({ cwd: './src' })

  for (const file of files) {
    const content = await Bun.file(`src/${file}`).text()
    // 修改正则表达式以只匹配 data- 属性，排除 CSS 变量
    const regex = /(?<!\-)\bdata-[a-zA-Z0-9-]+(?:="[^"]*")?/g
    const matches = content.match(regex)
    if (matches) {
      const fileAttributes = new Set<string>()
      matches.forEach((match) => fileAttributes.add(match))
      dataAttributesMap.set(file, fileAttributes)
    }
  }

  return dataAttributesMap
}

const dataAttributesMap = await findDataAttributes()

console.log('Files and their data attributes:\n==============================')
for (const [file, attributes] of dataAttributesMap) {
  const sortedAttributes = [...attributes].sort()
  console.log(`${file}:`)
  sortedAttributes.forEach(attr => console.log(`  - ${attr}`))
  console.log() // 添加一个空行以分隔不同文件的输出
}