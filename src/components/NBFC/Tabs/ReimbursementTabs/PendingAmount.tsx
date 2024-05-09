import Table from "../../../../utils/Common/Table"
import { TableProps } from "../../../../utils/typeScript"

const PendingAmount = ({ theading, tData }: TableProps) => {
  return (
    <>
      <Table tname="Pending Amount Table" theading={theading} tData={tData} />
    </>
  )
}

export default PendingAmount