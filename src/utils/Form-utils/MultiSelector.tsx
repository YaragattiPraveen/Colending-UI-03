import { useState } from "react";
import Select, { ActionMeta, MultiValue } from 'react-select';

interface Option {
    value: string;
    label: string;
}

const MultiSelector = () => {
    const options: Option[] = [
        { value: 'applicable-to-all', label: 'Applicable To All' },
        { value: 'applicable-to-tl', label: 'Applicable To TL' },
        { value: 'applicable-to-dl', label: 'Applicable To DL' }
    ];
    const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);

    const handleChange = (newValue: MultiValue<Option>, actionMeta: ActionMeta<Option>) => {
        if (actionMeta.action === 'select-option' || actionMeta.action === 'remove-value') {
            setSelectedOptions(newValue as Option[]);
        }
    };

    return (
        <Select
            options={options}
            value={selectedOptions}
            isMulti={true}
            onChange={handleChange}
        />
    );
};

export default MultiSelector;
