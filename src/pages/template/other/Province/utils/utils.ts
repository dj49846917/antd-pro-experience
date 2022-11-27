export interface BaseType {
  code: string,
  name: string,
  provinceCode?: string,
  cityCode?: string
}

export interface CascaderType {
  label: string,
  value: string,
  children?: CascaderType[]
}

export function parseArea(province: BaseType[], city: BaseType[], area: BaseType[]) {
  const arr: CascaderType[] = []
  province.forEach((item, index) => {
    arr.push({ label: item.name, value: item.code, children: [] })
    city.forEach(it => {
      if (it.provinceCode === item.code) {
        arr[index].children?.push({ label: it.name, value: it.code, children: [] })
      }
    })
  })
  arr.forEach(item => {
    item.children?.forEach(it => {
      area.forEach(str => {
        if (str.cityCode === it.value && str.provinceCode === item.value) {
          it.children?.push({ label: str.name, value: str.code })
        }
      })
    })
  })
  return arr
}