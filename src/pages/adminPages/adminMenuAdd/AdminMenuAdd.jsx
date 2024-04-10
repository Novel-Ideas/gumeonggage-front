/** @jsxImportSource @emotion/react */
import AdminPageLayout from "../../../components/pageComponents/adminPageLayout/AdminPageLayout";
import * as s from "./style";
import { GrPowerReset } from "react-icons/gr";
import noImg from "../../../assets/noImg.webp";
import Select from "react-select";
import { useState } from "react";

const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
];

function AdminMenuAdd() {
    const [selectedOption, setSelectedOption] = useState(null);

    return (
        <AdminPageLayout>
            <div css={s.layout}>
                <div css={s.header}>
                    <div css={s.title}>메뉴 추가</div>
                </div>
                <div css={s.main}>
                    <div css={s.resetLayout}>
                        <button>
                            <GrPowerReset />
                        </button>
                    </div>
                    <div css={s.addLayout}>
                        <div css={s.addBox}>
                            <div css={s.imgLayout}>
                                <div css={s.imgBox}>
                                    <img src={noImg} alt="" />
                                </div>
                            </div>
                            <div css={s.inputLayout}>
                                <div css={s.inputBox}>
                                    <div css={s.input}>
                                        <input
                                            type="text"
                                            placeholder="메뉴 이름"
                                        />
                                    </div>
                                    <div css={s.input}>
                                        <Select
                                            defaultValue={selectedOption}
                                            onChange={setSelectedOption}
                                            options={options}
                                            placeholder="카테고리"
                                            styles={{
                                                control: (
                                                    baseStyles,
                                                    state
                                                ) => ({
                                                    ...baseStyles,
                                                    height: "70.2px",
                                                    border: state.isFocused
                                                        ? "none"
                                                        : "none",
                                                    borderBottom:
                                                        "2px solid #222",
                                                    backgroundColor:
                                                        "transparent",
                                                    fontSize: "25px",
                                                }),
                                            }}
                                        />
                                    </div>
                                    <div css={s.input}>
                                        <input type="text" placeholder="가격" />
                                    </div>
                                    <div css={s.input}>
                                        <input
                                            type="text"
                                            placeholder="칼로리"
                                        />
                                    </div>
                                    <div css={s.input}>
                                        <input
                                            type="text"
                                            placeholder="이미지 url"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div css={s.footer}>
                    <div css={s.buttonLayout}>
                        <button css={s.saveButton}>저장</button>
                    </div>
                </div>
            </div>
        </AdminPageLayout>
    );
}

export default AdminMenuAdd;
