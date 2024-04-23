/**@jsxImportSource @emotion/react */
import * as s from "./style";
import { useState } from 'react';
import { useQuery } from "react-query";
import { searchUserRequest } from '../../apis/api/searchUser';
import AdminPageLayout from '../pageComponents/adminPageLayout/AdminPageLayout';
import { FaCircle } from "react-icons/fa";

function AdminUserSearch() {

    const [ userList, setUserList ] = useState([]);

    const searchUserQuery = useQuery(
        ["searchUserQuery"], searchUserRequest,
        {
            retry: 0, 
            refetchOnWindowFocus: false,
            onSuccess: response => {
                console.log(response.data)
                setUserList(response.data);
            },
            onError: error => {
                console.log(error);
            }
        });

    return (
        <AdminPageLayout>
            <div css={s.layout}>
                <div css={s.header}>
                    <div css={s.title}>회원 조회</div>
                </div>
                <div css={s.searchBoxLayout}>
                    <div css={s.searchBox}>
                        <div css={s.top}>
                            <FaCircle css={s.circle}/>
                            <FaCircle css={s.circle}/>
                            <FaCircle css={s.circle}/>
                        </div>
                        <div css={s.searchLayout}>
                            <div css={s.search}>
                                <ul css={s.askTitle}>
                                        <li>Id</li>
                                        <li>권한</li>
                                        <li>전화번호</li>
                                        <li>포인트</li>
                                        <li>가입날짜</li>
                                </ul>
                                <div css={s.listLayout}>
                                    {
                                        userList.map(user =>(
                                            <ul css={s.askList}>
                                                <li>{user.userId}</li>
                                                <li>{user.roleNameKor}</li>
                                                <li>{user.phonenumber}</li>
                                                <li>{user.totalPoint}</li>
                                                <li>{user.createDate}</li>
                                            </ul>
                                        ))
                                    }
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