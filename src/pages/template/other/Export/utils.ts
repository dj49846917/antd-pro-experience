import * as XLSX from 'xlsx'
import * as XLSXStyle from 'xlsx-style'

export const commonExportStyle = (sheet1: any, rowLength: number) => {
  const range = XLSX.utils.decode_range(sheet1['!ref']);
  const arr = []
  for (let i = 0; i < rowLength; i++) {
    arr.push({ wch: 30 })
  }
  sheet1["!cols"] = arr  // 设置列宽
  for (let i = range.s.c; i < range.e.c + 1; i++) {
    for (let j = range.s.r; j < range.e.r + 1; j++) {
      let cell_address = {
        c: i,
        r: j,
      };
      let column = XLSX.utils.encode_cell(cell_address);
      if (column === "A1" || column === "B1" || column === "C1" || column === "D1" || column === "E1" || column === "F1" || column === "G1"
        || column === "H1" || column === "I1" || column === "J1" || column === "K1" || column === "L1" || column === "M1" || column === "N1"
        || column === "O1" || column === "P1" || column === "Q1" || column === "R1" || column === "S1" || column === "T1" || column === "U1"
        || column === "V1" || column === "W1" || column === "X1" || column === "Y1" || column === "Z1") {
        sheet1[column].s = {
          font: {
            name: 'Calibri',
            sz: 11,
            bold: true,
            color: { rgb: "ffffff" }
          },
          fill: { fgColor: { rgb: "86bc25" } }
        };
      } else {
        sheet1[column].s = {
          font: {
            name: 'Calibri',
            sz: 11
          }
        };
      }
    }
  }
}

// 设置excel格式
export const workbook2blob = (workbook: XLSX.WorkBook) => {
  // 生成excel的配置项
  var wopts = {
    // 要生成的文件类型
    bookType: "xlsx",
    // // 是否生成Shared String Table，官方解释是，如果开启生成速度会下降，但在低版本IOS设备上有更好的兼容性
    bookSST: false,
    type: "binary"
  };
  // @ts-ignore
  var wbout = XLSXStyle.write(workbook, wopts);
  // 将字符串转ArrayBuffer
  function s2ab(s: string) {
    var buf = new ArrayBuffer(s.length);
    var view = new Uint8Array(buf);
    for (var i = 0; i !== s.length; ++i) view[i] = s.charCodeAt(i) & 0xff;
    return buf;
  }
  var blob = new Blob([s2ab(wbout)], {
    type: "application/octet-stream"
  });
  return blob;
};

// 下载并打开excel
export const openDownloadDialog = (blob: string | Blob | MediaSource, fileName: string) => {
  if (typeof blob == "object" && blob instanceof Blob) {
    blob = URL.createObjectURL(blob); // 创建blob地址
  }
  var aLink = document.createElement("a");
  aLink.href = blob as string;
  // HTML5新增的属性，指定保存文件名，可以不要后缀，注意，有时候 file///模式下不会生效
  aLink.download = fileName || "";
  var event;
  if (window.MouseEvent) event = new MouseEvent("click");
  //   移动端
  else {
    event = document.createEvent("MouseEvents");
    event.initMouseEvent("click", true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
  }
  aLink.dispatchEvent(event);
};