import Table from "../../../../utils/Common/Table"
import { TableProps } from "../../../../utils/typeScript"

const ReimbursementHistory = ({ theading, tData }: TableProps) => {

  return (
    <>
      <Table tname="Repayment Table" theading={theading} tData={tData} />
    </>
  )
}

export default ReimbursementHistory