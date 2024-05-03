/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { FaCheckCircle } from "react-icons/fa";
import { MdError } from "react-icons/md";

function AuthPageInput({ type, value, placeholder, onChange, message }) {
    return (
        <div css={s.inputBox}>
            {!!message && (
                <div css={s.inputIcon(message.type)}>
                    {message.type === "error" ? <MdError /> : <FaCheckCircle />}
                </div>
            )}
            {!!message && (
                <div css={s.messageBox(message.type)}>{message.text}</div>
            )}
            <input
                css={s.input}
                type={type}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                />
        </div>
    );
}

export default AuthPageInput;
