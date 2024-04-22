/** @jsxImportSource @emotion/react */
import { useState } from "react";
import PageModal from "../../../components/pageComponents/pageModal/PageModal";
import * as s from "./style";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { totalPayPriceState } from "../../../atoms/totalPayPriceAtom";
import { orderMenuListState } from "../../../atoms/orderMenuListAtom";

function UsePointPhoneNumber(props) {
    const [inputValue, setInputValue] = useState([]);
    const [orderMenuList, setOrderMenuList] =
        useRecoilState(orderMenuListState);
    const [totalPayPrice, setTotalPayPrice] =
        useRecoilState(totalPayPriceState);
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

    const handleSavePointClick = () => {
        // pointCheckMutation.mutate(inputValue.join(""));
    };

    return (
        <PageModal>
            <div css={s.layout}>
                <div css={s.textbox}>
                    <h1 css={s.text}>포인트 적립</h1>
                </div>
                <div css={s.main}>
                    <div css={s.phoneNumberLayout}>
                        <div css={s.phoneNumberInput}>
                            {inputValue.join("")}
                        </div>
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
                    <div css={s.usePoint}>
                        <h1>총 포인트:</h1>
                        <h1>사용할 포인트:</h1>
                        <h1>남은 포인트:</h1>
                        <h1>총 결제 금액</h1>
                    </div>
                </div>
                <div css={s.buttonLayout}>
                    <div css={s.buttonBox}>
                        <button onClick={handleCancelClick}>취소하기</button>
                        <button onClick={handleSavePointClick}>적립하기</button>
                    </div>
                </div>
            </div>
        </PageModal>
    );
}

export default UsePointPhoneNumber;
