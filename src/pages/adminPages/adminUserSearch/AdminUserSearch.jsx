/**@jsxImportSource @emotion/react */
import * as s from "./style";
import { useState } from "react";
import { useMutation, useQuery } from "react-query";
import { searchUserRequest } from "../../../apis/api/searchUser";
import { FaCircle, FaWindowClose } from "react-icons/fa";
import AdminPageLayout from "../../../components/pageComponents/adminPageLayout/AdminPageLayout";
import { deleteUserRequest } from "../../../apis/api/authApi";
import Swal from "sweetalert2";

function AdminUserSearch() {
    const [userList, setUserList] = useState([]);
    const [deleted, setDeleted] = useState(false);

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

    const searchUserQuery = useQuery(["searchUserQuery"], searchUserRequest, {
        retry: 0,
        refetchOnWindowFocus: false,
        onSuccess: (response) => {
            setUserList(response.data);
        },
        onError: (error) => {
            console.log(error);
        },
    });

    const deleteUserMutation = useMutation({
        mutationKey: "deleteUserMutation",
        mutationFn: deleteUserRequest,
        onSuccess: (response) => {
            Toast.fire({
                icon: "success",
                title: "회원이 삭제되었습니다.",
            });
            setTimeout(() => {
                window.location.replace("/admin/usersearch");
            }, 2000);
        },
        onError: (error) => {
            console.error("삭제 요청 중 오류 발생:", error);
        },
    });

    const handleDeleteUser = (userId) => {
        Swal.fire({
            title: "회원을 삭제하시겠습니까?",
            text: "다시 되돌릴 수 없습니다. 신중하세요.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "삭제",
            cancelButtonText: "취소",
            reverseButtons: true, // 버튼 순서 거꾸로
        }).then((result) => {
            if (result.isConfirmed) {
                deleteUserMutation.mutate(userId);
            }
            return;
        });
    };

    return (
        <AdminPageLayout>
            <div css={s.layout}>
                <div css={s.header}>
                    <div css={s.title}>회원 조회</div>
                </div>
                <div css={s.searchBoxLayout}>
                    <div css={s.searchBox}>
                        <div css={s.top}>
                            <FaCircle css={s.circle} />
                            <FaCircle css={s.circle} />
                            <FaCircle css={s.circle} />
                        </div>
                        <div css={s.searchLayout}>
                            <div css={s.search}>
                                <ul css={s.askTitle}>
                                    <li>Id</li>
                                    <li>권한</li>
                                    <li>전화번호</li>
                                    <li>포인트</li>
                                    <li>가입날짜</li>
                                    <li>회원삭제</li>
                                </ul>
                                <div css={s.listLayout}>
                                    {userList.map((user, index) => (
                                        <ul key={index} css={s.askList}>
                                            <li>{index + 1}</li>
                                            <li>{user.roleNameKor}</li>
                                            <li>{user.phonenumber}</li>
                                            <li>{user.totalPoint}</li>
                                            <li>{user.createDate}</li>
                                            <li>
                                                <button
                                                    onClick={() =>
                                                        handleDeleteUser(
                                                            user.userId
                                                        )
                                                    }
                                                >
                                                    <FaWindowClose />
                                                </button>
                                            </li>
                                        </ul>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AdminPageLayout>
    );
}

export default AdminUserSearch;
