import Table from "../../../../utils/Common/Table"
import { TableProps } from "../../../../utils/typeScript"

const Approved = ({ theading, tData }: TableProps) => {
    return (
        <Table tname="Approved Master Agreement Table" theading={theading} tData={tData} show={false} />
    )
}

export default Approved