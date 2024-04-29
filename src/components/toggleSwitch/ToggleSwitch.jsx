import React, { useState } from "react";
import Switch from "react-switch";
import { useRecoilState } from "recoil";
import { salesModeState } from "../../atoms/salesModeAtom";

const ToggleSwitch = () => {
    const [checked, setChecked] = useState(false);
    const [salesMode, setSalesMode] = useRecoilState(salesModeState);

    const handleChange = (checked) => {
        setChecked(checked);
        setSalesMode(() => !salesMode);
    };

    return (
        <label>
            <Switch
                height={35}
                width={70}
                uncheckedIcon={false}
                checkedIcon={false}
                onColor="#ff7300"
                offColor="#8abdf3"
                onChange={handleChange}
                checked={checked}
            />
        </label>
    );
};

export default ToggleSwitch;
