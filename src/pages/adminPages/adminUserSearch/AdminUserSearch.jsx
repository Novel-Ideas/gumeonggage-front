/**@jsxImportSource @emotion/react */
import * as s from "./style";
import { useState } from "react";
import { useMutation, useQuery } from "react-query";
import { searchUserRequest } from "../../../apis/api/searchUser";
import { FaCircle } from "react-icons/fa";
import AdminPageLayout from "../../../components/pageComponents/adminPageLayout/AdminPageLayout";
import { deleteUserRequest } from "../../../apis/api/authApi";
import { useQuery } from "react-query";
import { FaCircle } from "react-icons/fa";
import { searchUserRequest } from "../../../apis/api/searchUser";

function AdminUserSearch() {
    const [userList, setUserList] = useState([]);
    const [deleted, setDeleted] = useState(false);

    const searchUserQuery = useQuery(["searchUserQuery"], searchUserRequest, {
        retry: 0,
        refetchOnWindowFocus: false,
        onSuccess: (response) => {
            console.log(response.data);
            setUserList(response.data); 
        },
        onError: (error) => {
            console.log(error);
        },
    });

    const deleteUserMutation = useMutation({
        mutationKey:"deleteUserMutation",
        mutationFn: deleteUserRequest,
        onSuccess: response => {
            alert("삭제완료.");
            window.location.replace("/admin/usersearch");
        },
        onError: error => {
            console.error("삭제 요청 중 오류 발생:", error);
        }
    });

    const handleDeleteUser = (userId) => {
        console.log(userId);
        deleteUserMutation.mutate(userId);
        
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
                                            <li>{user.userId}</li>
                                            <li>{user.roleNameKor}</li>
                                            <li>{user.phonenumber}</li>
                                            <li>{user.totalPoint}</li>
                                            <li>{user.createDate}</li>
                                            <li><button onClick={() => handleDeleteUser(user.userId)}>x</button></li>
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
