/** @jsxImportSource @emotion/react */
import  PageLayout  from "../../../components/pageComponents/PageLayout"
import * as s from "./style";


function PointPhoneNumber() {
    return (
        <PageLayout>
        <div css={s.layout}>
             <div css={s.textbox}>
                 <h1 css={s.text}>포인트 적립</h1>
             </div>
             <input css={s.phoneNumber}></input>
             <div css={s.phoneNumberBox}>
                <table css={s.tableContainer}>
                    <tr>
                        <td css={s.table}><button css={[s.number,s.numberFont]}>1</button></td>
                        <td css={s.table}><button css={[s.number,s.numberFont]}>2</button></td>
                        <td css={s.table}><button css={[s.number,s.numberFont]}>3</button></td>
                    </tr>
                    <tr>
                        <td css={s.table}><button css={[s.number,s.numberFont]}>4</button></td>
                        <td css={s.table}><button css={[s.number,s.numberFont]}>5</button></td>
                        <td css={s.table}><button css={[s.number,s.numberFont]}>6</button></td>
                    </tr>
                    <tr>
                        <td css={s.table}><button css={[s.number,s.numberFont]}>7</button></td>
                        <td css={s.table}><button css={[s.number,s.numberFont]}>8</button></td>
                        <td css={s.table}><button css={[s.number,s.numberFont]}>9</button></td>
                    </tr>
                    <tr>
                        <td css={s.table}><button css={[s.number,s.numberFont]}>010</button></td>
                        <td css={s.table}><button css={[s.number,s.numberFont]}>0</button></td>
                        <td css={s.table}><button css={[s.number,s.numberFont]}>지움</button></td>
                    </tr>
                </table>
             </div>
         </div> 
     </PageLayout>
    );
}

export default PointPhoneNumber;