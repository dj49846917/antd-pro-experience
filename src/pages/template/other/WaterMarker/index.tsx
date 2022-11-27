import { WaterMark } from "@ant-design/pro-components"
import TablePaginationBefore from "../../table/TablePaginationBefore"

type Props = {}

function WaterMarker({ }: Props) {
  return (
    <WaterMark content="测试水印">
      <TablePaginationBefore />
    </WaterMark>
  )
}

export default WaterMarker