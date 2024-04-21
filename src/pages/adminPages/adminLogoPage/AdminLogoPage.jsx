/** @jsxImportSource @emotion/react */
import * as s from "./style";
import AdminPageLayout from '../../../components/pageComponents/adminPageLayout/AdminPageLayout';
import { FaArrowRight } from "react-icons/fa";
import { useRef, useState } from "react";
import { useMutation } from "react-query";
import Swal from "sweetalert2";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../../apis/firebase/config/firebaseConfig";
import { v4 as uuid } from "uuid";
import img from "../../../assets/맥도날드.svg";
import { registerLogoRequest } from "../../../apis/api/logo";

function AdminLogoPage() {
    const [newImgFile, setNewImgFile] = useState(""); 
    const newImgRef = useRef(); 

    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
    });

    const handleImgChange = (e, setImage) => {
        const file = e.target.files[0];

        if (!file) {
            e.target.value = "";
            return;
        }

        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setImage(reader.result);
        };
        Swal.fire({
            title: "파일을 업로드 하시겠습니까?",
            text: "다시 되돌릴 수 없습니다. 신중하세요.",
            icon: "warning",

            showCancelButton: true, // cancel버튼 보이기. 기본은 원래 없음
            confirmButtonColor: "#3085d6", // confrim 버튼 색깔 지정
            cancelButtonColor: "#d33", // cancel 버튼 색깔 지정
            confirmButtonText: "업로드", // confirm 버튼 텍스트 지정
            cancelButtonText: "취소", // cancel 버튼 텍스트 지정

            reverseButtons: true, // 버튼 순서 거꾸로
        }).then((result) => {
            // 만약 Promise리턴을 받으면,
            if (result.isConfirmed) {
                // 만약 모달창에서 confirm 버튼을 눌렀다면

                Swal.fire("업로드가 완료되었습니다.", "", "success");
                const storageRef = ref(
                    storage,
                    `admin/img/${uuid()}_${file.name}`
                );
                const uploadTask = uploadBytesResumable(storageRef, file[0]);

                uploadTask.on(
                    "state_changed",
                    (snapshot) => {},
                    (error) => {},
                    () => {
                        Toast.fire({
                            icon: "success",
                            title: "성공적으로 업로드가 완료되었습니다.",
                        });
                        getDownloadURL(storageRef).then((url) => {
                            newImgFile.setValue(() => url);
                            console.log(url);
                        });
                    }
                );
            }
        });
    };

    const registerLogoMutation = useMutation({
        mutationKey: "registerImgMutation",
        mutationFn: registerLogoRequest,
        onSuccess: (response) => {
            Toast.fire({
                icon: "success",
                title: "성공적으로 등록 완료되었습니다.",
            });
        },
        onError: (error) => {},
    });

    const handleSubmitClick = () => {
        registerLogoMutation()
    }


    return (
        <AdminPageLayout>
            <div css={s.layout}>
                <div css={s.header}>
                    <div css={s.title}>로고 변경하기</div>
                </div>
                <div css={s.buttonLayout}>
                    <button css={s.button} onClick={() => handleSubmitClick()}>저장</button>
                </div>
                <div css={s.ImgLayout}>
                    <div css={s.ImgContainer}>
                        <div css={s.ImgBox}>
                            <img css={s.Img} src={img} alt="" />
                        </div>
                    </div>
                    <div css={s.arrowBox}>
                        <div css={s.arrow}><FaArrowRight /></div>
                    </div>
                    <div css={s.ImgContainer}>
                        <div css={s.ImgBox}>
                            <img css={s.Img}
                                src={newImgFile ? newImgFile : `/images/icon/user.png`}
                                alt="이미지"
                            />
                            <input
                                type="file"
                                id="afterImg"
                                onChange={(e) => handleImgChange(e, setNewImgFile)}
                                ref={newImgRef}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </AdminPageLayout>
    );
}

export default AdminLogoPage;