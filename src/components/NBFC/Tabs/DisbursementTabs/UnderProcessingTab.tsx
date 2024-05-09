import Table from "../../../../utils/Common/Table";
import { TableProps } from "../../../../utils/typeScript";
const UnderProcessingTab = ({ theading, tData }: TableProps) => {

  return (
    <>
      <Table tname="Under Processing Table" theading={theading} tData={tData} />
    </>
  )
}

export default UnderProcessingTab