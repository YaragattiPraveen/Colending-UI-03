import Table from '../../../../utils/Common/Table';
import { TableProps } from '../../../../utils/typeScript';

const GrantedTab = ({ theading, tData, show }: TableProps) => {
    return (
        <>
            <Table tname="Repayment Structure" theading={theading} tData={tData} show={show} />
        </>
    )
};

export default GrantedTab;
