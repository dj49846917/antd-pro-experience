import { utils } from "@/utils/utils"
import { Button, Card } from "antd"
import { useHistory } from "umi"

type Props = {}

function TurnToPage({ }: Props) {
  const history = useHistory()
  const params = {
    userId: '0001',
    userName: '张三',
  }
  const action = () => {
    const newParams = utils.urlEncode(params, 1)
    history.push(`/template/other/targetpage${newParams}`)
  }

  return (
    <Card title="ant design跳转页面">
      <Button type="primary" onClick={action}>跳转</Button>
    </Card>
  )
}

export default TurnToPage