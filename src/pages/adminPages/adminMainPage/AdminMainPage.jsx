/** @jsxImportSource @emotion/react */ // aside css
import * as s from "./style";
import AdminPageLayout from "../../../components/pageComponents/adminPageLayout/AdminPageLayout";
import AdminMainPageTop3 from "../../../components/adminMainPageTop3/AdminMainPageTop3";
import { useAuthCheck } from "../../../hooks/useAuthCheck";
import { useEffect, useState } from "react";
import { useMutation } from "react-query";
import { getTop3Request } from "../../../apis/api/menuList";
import { useRecoilState } from "recoil";
import { categoryState } from "../../../atoms/categoryAtom";

function AdminMainPage() {
    const [ lanking , setLanking ] = useState([]);

    const getLankingMutation = useMutation({
        mutationKey: "getLankingMutation",
        mutationFn: getTop3Request,
        retry: 0,
        onSuccess: (response) => {
            if (response.data) {
                console.log(response.data);
                setLanking(response.data);
            }
        },
    });

    useEffect(() => {
        getLankingMutation.mutate();
    },[])

    useAuthCheck();
    return (
        <AdminPageLayout>
            <div css={s.layout}>
                <div css={s.boxLayout}>
                    <div css={s.fontLayout}>
                        <h1>Sales</h1>
                        <h1>매출</h1>
                    </div>
                    <div css={s.boxContainer}>
                        <div css={s.categoryBox}>fds</div>
                    </div>
                </div>
                <div css={s.boxLayout}>
                    <div css={s.fontLayout}>
                        <h1>TOP3</h1>
                        <h1>랭킹</h1>
                    </div>
                    <div css={s.boxContainer}>
                        <div css={s.categoryBox}>
                            <>
                                   {lanking.map((menu, index) => (
                                        <AdminMainPageTop3 
                                            key={menu.menuId}
                                            img={menu.menu?.menuImgUrl}
                                            menuName={menu.menu?.menuName}
                                            index={index}
                                        />)
                                    )}
                            </>
                        </div>
                    </div>
                </div>
                <div>
                    <div css={s.fontLayout}>
                        <h1>Feedback</h1>
                        <h1>피드백</h1>
                    </div>
                    <div css={s.boxContainer}>
                        <div css={s.categoryBox}>
                            <div>d</div>
                            <div>d</div>
                            <div>d</div>
                        </div>
                    </div>
                </div>
            </div>
        </AdminPageLayout>
    );
}

export default AdminMainPage;
