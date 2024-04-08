/**@jsxImportSource @emotion/react */
import * as s from "./style";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

function OrderListComponent(props) {
    return (
        <div css={s.layout}>
            <div css={s.header}>
                <h1>Order</h1>
                <h1>Menu</h1>
            </div>
            <div css={s.orderLayout}>
                <div css={s.orderBox}>
                    <div css={s.orderInfoBox}>
                        <h1>트리플 버거</h1>
                        <h1>12,900원</h1>
                    </div>
                    <div css={s.orderCountBox}>
                        <div css={s.orderCount}>
                            <div>
                                <GoPlus />
                            </div>
                            <div>3</div>
                            <div>
                                <FiMinus />
                            </div>
                        </div>
                        <div css={s.removeButton}>
                            <IoClose />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OrderListComponent;
