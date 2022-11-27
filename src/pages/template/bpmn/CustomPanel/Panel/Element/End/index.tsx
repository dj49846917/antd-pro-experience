import { memo } from 'react'

type Props = {}

function EndElement({ }: Props) {
  return (
    <div>EndElement</div>
  )
}

export default memo(EndElement)