/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { GiHamburger, GiSandwich  } from "react-icons/gi";

function AuthPageInput({ type, value, placeholder, onChange, message }) {
    return (
        <div css={s.inputBox}>
            <input 
                css={s.input}
                type={type}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
            />
            { 
                !!message && 
                <div css={s.inputIcon(message.type)}>
                    {message.type === "error" ? <GiHamburger /> : <GiSandwich />}
                </div>
            }
            { 
                !!message && 
                <div css={s.messageBox(message.type)}>
                    { message.text }
                </div>
            }
            
        </div>
    );
}

export default AuthPageInput;