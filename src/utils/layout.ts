/**
 * 
 * xs < 576px
 * sm ≥ 576px
 * md ≥ 768px
 * lg ≥ 992px
 * xl ≥ 1200px
 * xxl ≥ 1600px
 * 栅格响应式布局,label与表单域不在同一行(除cloumnLayout=1), FormItem+栅格混合布局
 * @param {number} 必传    columnLayout       表单域列数
 * @param {number} 必传    position           当前位置%列数的值，如一行三列，当前表单位置是2 则position = 2%3 = 2
 * 主要用于一行两列
 * 
 */
export function getColLayout(columnLayout: number, position: number = 1) {
  if (columnLayout === 1) {
    return {
      xs: { span: 24 },
      sm: { span: 24 },
      md: { span: 24 },
      xl: { span: 24 },
      xxl: { span: 24 }
    };
  }
  if (columnLayout === 2) {
    if (position === 1) {
      return {
        xs: { span: 24 },
        sm: { span: 24 },
        md: { span: 24 },
        xl: { span: 10 },
        xxl: { span: 10 }
      };
    }
    return {
      xs: { span: 24 },
      sm: { span: 24 },
      md: { span: 24 },
      xl: { span: 12 },
      xxl: { span: 12 }
    };
  }
  if (columnLayout === 3) {
    if (position === 1) {
      return {
        xs: { span: 24 },
        sm: { span: 24 },
        md: { span: 24 },
        xl: { span: 8 },
        xxl: { span: 8 }
      };
    }
    return {
      xs: { span: 24 },
      sm: { span: 24 },
      md: { span: 24 },
      xl: { span: 6 },
      xxl: { span: 6 }
    };
  }
  return null;
}

/*
  栅格布局:一行一列
*/
export function getFormLayout(columnLayout: number, position: number = 1) {
  if (columnLayout === 1) {
    return {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 4 },
        md: { span: 4 },
        xl: { span: 4 },
        xxl: { span: 4 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
        md: { span: 16 },
        xl: { span: 16 },
        xxl: { span: 16 },
      },
    }
  }
  if (columnLayout === 2) {
    if (position === 1) {
      return {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 4 },
          md: { span: 4 },
          xl: { span: 10 },
          xxl: { span: 10 }
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 },
          md: { span: 16 },
          xl: { span: 13 },
          xxl: { span: 13 },
        },
      }
    }
    return {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 4 },
        md: { span: 4 },
        xl: { span: 9 },
        xxl: { span: 9 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
        md: { span: 16 },
        xl: { span: 11 },
        xxl: { span: 11 },
      },
    }
  }
  if (columnLayout === 3) {
    if (position === 0) {
      return {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 4 },
          md: { span: 4 },
          xl: { span: 9 },
          xxl: { span: 9 }
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 },
          md: { span: 16 },
          xl: { span: 15 },
          xxl: { span: 15 },
        },
      }
    }
    if (position === 1) {
      return {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 4 },
          md: { span: 4 },
          xl: { span: 12 },
          xxl: { span: 12 }
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 },
          md: { span: 16 },
          xl: { span: 11 },
          xxl: { span: 11 },
        },
      }
    }
    return {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 4 },
        md: { span: 4 },
        xl: { span: 9 },
        xxl: { span: 9 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
        md: { span: 16 },
        xl: { span: 14 },
        xxl: { span: 14 },
      },
    }
  }
}