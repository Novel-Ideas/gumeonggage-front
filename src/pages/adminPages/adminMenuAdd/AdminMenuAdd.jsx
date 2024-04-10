/** @jsxImportSource @emotion/react */
import AdminPageLayout from "../../../components/pageComponents/adminPageLayout/AdminPageLayout";
import * as s from "./style";
import { GrPowerReset } from "react-icons/gr";
import noImg from "../../../assets/noImg.webp";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function AdminMenuAdd() {
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
                                <Box
                                    component="form"
                                    sx={{
                                        "& > :not(style)": {
                                            m: 1,
                                            width: "90%",
                                        },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField
                                        id="standard-basic"
                                        label="메뉴 이름"
                                        variant="standard"
                                        margin="normal"
                                        fontSize="50px"
                                    />
                                    <TextField
                                        id="standard-basic"
                                        label="카테고리"
                                        variant="standard"
                                        margin="normal"
                                    />
                                    <TextField
                                        id="standard-basic"
                                        label="가격"
                                        variant="standard"
                                        margin="normal"
                                    />
                                    <TextField
                                        id="standard-basic"
                                        label="칼로리"
                                        variant="standard"
                                        margin="normal"
                                    />
                                    <TextField
                                        id="standard-basic"
                                        label="이미지"
                                        variant="standard"
                                        margin="normal"
                                    />
                                </Box>
                            </div>
                        </div>
                    </div>
                </div>
                <div css={s.footer}>
                    <div>
                        <button>저장</button>
                    </div>
                </div>
            </div>
        </AdminPageLayout>
    );
}

export default AdminMenuAdd;
