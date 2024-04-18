/** @jsxImportSource @emotion/react */
import { useNavigate } from "react-router-dom";
import PageModal from "../../../components/pageComponents/pageModal/PageModal";
import * as s from "./style";
import { useEffect, useState } from "react";

function PointPhoneNumber() {
    const [ inputValue, setInputValue ] = useState("defaultValue");

    const handleOnClick = (e) => {
        const regex = /^[0-9\b -]{0,13}$/;
        setInputValue({
            ...inputValue
        });
    }

    useEffect(() => {
        if(inputValue.length === 10) {
            setInputValue(inputValue.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3'));

        } else if(inputValue.length === 13) {
            setInputValue(inputValue
                .replace(/-/g, '')
                .replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'));
        }
    }, [inputValue])

    const navigate = useNavigate();

    const handleCancelClick = () => {
        navigate("/menu/menuall/order");
    };
    return (
        <PageModal>
            <div css={s.layout}>
                <div css={s.textbox}>
                    <h1 css={s.text}>포인트 적립</h1>
                </div>
                <div css={s.phoneNumberLayout}>
                    <input css={s.phoneNumberInput} />
                    <table css={s.tableContainer}>
                        <tr>
                            <td css={s.table}>
                                <button css={s.number}>1</button>
                            </td>
                            <td css={s.table}>
                                <button css={s.number}>2</button>
                            </td>
                            <td css={s.table}>
                                <button css={s.number}>3</button>
                            </td>
                        </tr>
                        <tr>
                            <td css={s.table}>
                                <button css={s.number}>4</button>
                            </td>
                            <td css={s.table}>
                                <button css={s.number}>5</button>
                            </td>
                            <td css={s.table}>
                                <button css={s.number}>6</button>
                            </td>
                        </tr>
                        <tr>
                            <td css={s.table}>
                                <button css={s.number}>7</button>
                            </td>
                            <td css={s.table}>
                                <button css={s.number}>8</button>
                            </td>
                            <td css={s.table}>
                                <button css={s.number}>9</button>
                            </td>
                        </tr>
                        <tr css={s.trBox}>
                            <td css={s.table}>
                                <button css={s.number}>010</button>
                            </td>
                            <td css={s.table}>
                                <button css={s.number}>0</button>
                            </td>
                            <td css={s.table}>
                                <button css={s.number}>지움</button>
                            </td>
                        </tr>
                    </table>
                </div>
                <div css={s.buttonLayout}>
                    <div css={s.buttonBox}>
                        <button onClick={handleCancelClick}>취소하기</button>
                        <button>적립하기</button>
                    </div>
                </div>
            </div>
        </PageModal>
    );
}

export default PointPhoneNumber;
