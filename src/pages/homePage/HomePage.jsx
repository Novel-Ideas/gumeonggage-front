/** @jsxImportSource @emotion/react */
import PageLayout from "../../components/pageComponents/pageLayout/PageLayout";
import * as s from "./style";
import { useNavigate } from "react-router-dom";
import img from "../../assets/맥도날드.svg";
import { TbArrowBigLeftFilled } from "react-icons/tb";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { getPricipalRequest } from "../../apis/api/principal";
import { useRecoilState } from "recoil";
import { checkPasswordState } from "../../atoms/checkPasswordAtom";
import PasswordCheck from "../../components/passwordCheck/PasswordCheck";

function HomePage() {
    const [imgFile, setImgFile] = useState("");
    const [checkPassword, setCheckPassword] =
        useRecoilState(checkPasswordState);
    const navigate = useNavigate();
    const handlePageClick = () => {
        navigate("/menu/select");
    };

    const handlebackButtonClick = () => {
        navigate("/selectmenu");
        setCheckPassword(() => false)
    };

    const nowImgQuery = useQuery(["nowImgQuery"], () => getPricipalRequest(1), {
        retry: 0,
        refetchOnWindowFocus: false,
        onSuccess: (response) => {
            setImgFile(response.data);
            console.log(response.data); 
        },
        onError: (error) => {
            console.log(error);
        },
    });

    return (
        <>
            {checkPassword ? (
                <PageLayout>
                    <div css={s.buttonLayout}>
                        <button
                            css={s.backButton}
                            onClick={handlebackButtonClick}
                        >
                            <TbArrowBigLeftFilled />
                        </button>
                    </div>
                    <div css={s.layout} onClick={handlePageClick}>
                        <div css={s.content}>
                            <div css={s.imgBox}>
                                <img src={imgFile.imgUrl} alt="" />
                            </div>
                            <div css={s.text}>
                                <h1>화면을 터치해 주세요!</h1>
                            </div>
                        </div>
                    </div>
                </PageLayout>
            ) : (
                <PasswordCheck />
            )}
        </>
    );
}

export default HomePage;
