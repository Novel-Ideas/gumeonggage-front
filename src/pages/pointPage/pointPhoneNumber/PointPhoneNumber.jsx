/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useEffect, useState } from "react";
import PageModal from "../../../components/pageComponents/pageModal/PageModal";

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

    return (
    <PageModal>
        <div css={s.layout}>
             <div css={s.textbox}>
                 <h1 css={s.text}>포인트 적립</h1>
             </div>
             <div>
                <input type="text" placeholder="전화번호 입력" maxLength={13} css={s.phoneNumberInput} />
                    <table css={s.tableContainer}>
                        <tr>
                            <td css={s.table}><button css={s.number} onClick={handleOnClick}>1</button></td>
                            <td css={s.table}><button css={s.number} onClick={handleOnClick}>2</button></td>
                            <td css={s.table}><button css={s.number} onClick={handleOnClick}>3</button></td>
                        </tr>
                        <tr>
                            <td css={s.table}><button css={s.number} onClick={handleOnClick}>4</button></td>
                            <td css={s.table}><button css={s.number} onClick={handleOnClick}>5</button></td>
                            <td css={s.table}><button css={s.number} onClick={handleOnClick}>6</button></td>
                        </tr>
                        <tr>
                            <td css={s.table}><button css={s.number} onClick={handleOnClick}>7</button></td>
                            <td css={s.table}><button css={s.number} onClick={handleOnClick}>8</button></td>
                            <td css={s.table}><button css={s.number} onClick={handleOnClick}>9</button></td>
                        </tr>
                        <tr>
                            <td css={s.table}><button css={s.number} onClick={handleOnClick}>010</button></td>
                            <td css={s.table}><button css={s.number} onClick={handleOnClick}>0</button></td>
                            <td css={s.table}><button css={s.number} onClick={handleOnClick}>지움</button></td>
                        </tr>
                    </table> 
                </div>
            </div> 
     </PageModal>
    );
}

export default PointPhoneNumber;
