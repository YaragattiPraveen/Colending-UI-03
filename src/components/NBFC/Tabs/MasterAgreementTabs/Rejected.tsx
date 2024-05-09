import Table from "../../../../utils/Common/Table";
import { TableProps } from "../../../../utils/typeScript";

const Rejected = ({ theading, tData }: TableProps) => {

    return (
        <Table tname="Rejected Master Agreement Table" theading={theading} tData={tData} />
    )
}

export default Rejected