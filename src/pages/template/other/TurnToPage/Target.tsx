import { utils } from '@/utils/utils'
import { Card } from 'antd'

type Props = {}

function Target(props: Props) {
  return (
    <Card title="ant design获取跳转参数页面">
      <div>
        <div>
          <span>ID:</span>
          <span>{utils.getUrlParms("userId")}</span>
        </div>
        <div>
          <span>用户名:</span>
          <span>{utils.getUrlParms("userName")}</span>
        </div>
      </div>
    </Card>
  )
}

export default Target