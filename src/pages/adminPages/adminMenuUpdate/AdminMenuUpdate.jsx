/**@jsxImportSource @emotion/react */
import * as s from "./style";
import { useState } from "react";
import { useMutation } from "react-query";
import { updateMenuRequest } from "../../../apis/api/menuList";
import PageModal from "../../../components/pageComponents/pageModal/PageModal";
import Select from "react-select";
import { useSearchParams } from "react-router-dom";

function AdminMenuUpdate() {
    const [searchParams, setSearchParams] = useSearchParams()
    const [ updateMenuList, setUpdateMenuList ] = useState([]);
    const updateMenuMutation = useMutation({
        mutationKey: "updateMenuMutation",
        mutationFn: updateMenuRequest,
        onSuccess: response => {
            console.log(response);
            setUpdateMenuList(response.data)
            alert("메뉴 수정이 완료됐습니다")
            window.location.reload();
        },
        onError: error => {
            console.log(error);
            alert("수정할 메뉴를 선택해 주세요")
        }
    });
    console.log(searchParams.get("menuId"))

    const handleUpdateClick = () => {
        // updateMenuMutation.mutate({
        //     menuName: menuName.value,
        //     categoryId: menuCategoryId.value.value,
        //     menuPrice: menuPrice.value,
        //     menuCal: menuCal.value,
        //     menuImgUrl: menuImgUrl.value

        // });
    };

    return (
        <PageModal>
            <div css={s.layout}>
                <div>관리자 메뉴 수정</div>
                <div css={s.imgLayout}>
                    {/* <img src={
                        !menuImgUrl.value 
                            ? noImg 
                            : menuImgUrl.value
                        }
                        alt=""
                    /> */}
                </div>
                <div css={s.input}>
                    <input type="text" placeholder="메뉴 이름"/>
                </div>
                <div css={s.input}>
                    <Select
                        
                        placeholder="카테고리"/>
                </div>
                <div css={s.input}>
                    <input type="text" placeholder="가격"/>
                </div>
                <div css={s.input}>
                    <input type="text" placeholder="칼로리"/>
                </div>
                <div css={s.input}>
                    <input type="file" placeholder="이미지 url"/>
                </div>
                
            </div>
        </PageModal>
    );
}

export default AdminMenuUpdate;