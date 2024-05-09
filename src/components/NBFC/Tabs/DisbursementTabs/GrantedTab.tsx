import Table from '../../../../utils/Common/Table';
import { TableProps } from '../../../../utils/typeScript';

const GrantedTab = ({ theading, tData }: TableProps) => {
    return (
        <>
            <Table tname="Repayment Structure" theading={theading} tData={tData} />
        </>
    )
};

export default GrantedTab;
