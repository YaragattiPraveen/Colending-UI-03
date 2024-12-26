import Table from "../../../../utils/Common/Table"
import { TableProps } from "../../../../utils/typeScript"

const Pending = ({ theading, tData }: TableProps) => {
    return (
        <Table tname="Pending Master Agreement Table" theading={theading} tData={tData} show={false} />
    )
}

export default Pending