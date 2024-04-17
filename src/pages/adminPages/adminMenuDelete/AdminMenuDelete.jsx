/**@jsxImportSource @emotion/react */
import * as s from "./style";
import { useMutation } from "react-query";
import { deleteMenuRequest } from "../../../apis/api/menuList";
import { useState } from "react";
import PageModal from "../../../components/pageComponents/pageModal/PageModal";

function AdminMenuDelete({ menuId }) {

    const [ deleteMenuList, setDeleteMenuList ] = useState([])

    const deleteMenuMutaion = useMutation({
        mutationKey: "deleteMenuMutaion",
        mutationFn: deleteMenuRequest,
        onSuccess: response => {
            console.log(response);
            setDeleteMenuList(response.data)
            alert("메뉴 삭제가 완료됐습니다")
            window.location.reload();
        },
        onError: error => {
            console.log(error);
            alert("삭제할 메뉴를 선택해 주세요")
        }
    })

    const handleDeleteClick = () => {

    }
    
    return (
        <PageModal>
            <div css={s.layout}>
                <div>관리자 메뉴 삭제</div>
                <div css={s}>

                </div>
            </div>
        </PageModal>
    );
}

export default AdminMenuDelete;