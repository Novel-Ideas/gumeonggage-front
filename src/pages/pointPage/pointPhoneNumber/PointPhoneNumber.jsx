/** @jsxImportSource @emotion/react */
import { useNavigate } from "react-router-dom";
import PageModal from "../../../components/pageComponents/pageModal/PageModal";
import * as s from "./style";
import { useEffect, useState } from "react";

function PointPhoneNumber() {
    const [inputValue, setInputValue] = useState([]);
    const navigate = useNavigate();

    const handleCancelClick = () => {
        navigate("/menu/menuall/order");
    };

    const handleNumClick = (num) => {
        console.log(num);
        setInputValue(() => [...inputValue, num]);
    };

    const handleDeleteClick = () => {
        setInputValue(() => inputValue.slice(0, -1));
    };

    console.log(inputValue);

    return (
        <PageModal>
            <div css={s.layout}>
                <div css={s.textbox}>
                    <h1 css={s.text}>포인트 적립</h1>
                </div>
                <div css={s.phoneNumberLayout}>
                    <div css={s.phoneNumberInput}>{inputValue.join("")}</div>
                    <table css={s.tableContainer}>
                        <tr>
                            <td css={s.table}>
                                <button
                                    css={s.number}
                                    onClick={() => handleNumClick("1")}
                                >
                                    1
                                </button>
                            </td>
                            <td css={s.table}>
                                <button
                                    css={s.number}
                                    onClick={() => handleNumClick("2")}
                                >
                                    2
                                </button>
                            </td>
                            <td css={s.table}>
                                <button
                                    css={s.number}
                                    onClick={() => handleNumClick("3")}
                                >
                                    3
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td css={s.table}>
                                <button
                                    css={s.number}
                                    onClick={() => handleNumClick("4")}
                                >
                                    4
                                </button>
                            </td>
                            <td css={s.table}>
                                <button
                                    css={s.number}
                                    onClick={() => handleNumClick("5")}
                                >
                                    5
                                </button>
                            </td>
                            <td css={s.table}>
                                <button
                                    css={s.number}
                                    onClick={() => handleNumClick("6")}
                                >
                                    6
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td css={s.table}>
                                <button
                                    css={s.number}
                                    onClick={() => handleNumClick("7")}
                                >
                                    7
                                </button>
                            </td>
                            <td css={s.table}>
                                <button
                                    css={s.number}
                                    onClick={() => handleNumClick("8")}
                                >
                                    8
                                </button>
                            </td>
                            <td css={s.table}>
                                <button
                                    css={s.number}
                                    onClick={() => handleNumClick("9")}
                                >
                                    9
                                </button>
                            </td>
                        </tr>
                        <tr css={s.trBox}>
                            <td css={s.table}>
                                <button
                                    css={s.number}
                                    onClick={() => handleNumClick("010")}
                                >
                                    010
                                </button>
                            </td>
                            <td css={s.table}>
                                <button
                                    css={s.number}
                                    onClick={() => handleNumClick("0")}
                                >
                                    0
                                </button>
                            </td>
                            <td css={s.table}>
                                <button
                                    css={s.number}
                                    onClick={handleDeleteClick}
                                >
                                    지움
                                </button>
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
