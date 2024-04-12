import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useQuery } from "react-query";
import { useRecoilState } from 'recoil';
import { searchUserRequest } from '../../apis/api/searchUser';
import AdminPageLayout from '../pageComponents/adminPageLayout/AdminPageLayout';

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
        // <AdminPageLayout>
            <div>
                <div>
                    <button >전체 회원 조회</button>
                </div>
                <div>
                    {userList.map(user =>(
                        <>
                            <div>userID : {user.userId}</div>
                            <div>권한 : {user.roleNameKor}</div>
                            <div>전화번호 : {user.phonenumber}</div>
                        </> 
                    )    
                    )}
                </div>
            </div>
        // </AdminPageLayout>
    );
}

export default AdminUserSearch;