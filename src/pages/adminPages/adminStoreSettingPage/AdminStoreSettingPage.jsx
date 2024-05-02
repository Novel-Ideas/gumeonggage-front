/** @jsxImportSource @emotion/react */
import { useMutation, useQueryClient } from "react-query";
import AdminPageLayout from "../../../components/pageComponents/adminPageLayout/AdminPageLayout";
import ToggleSwitch from "../../../components/toggleSwitch/ToggleSwitch";
import * as s from "./style";
import { useRecoilState } from "recoil";
import { storeFeedbackSettingState } from "../../../atoms/storeFeedbackSettingAtom";
import { storePlaySettingState } from "../../../atoms/storePlaySettingAtom";
import { useEffect } from "react";
import { storeSettingRequest } from "../../../apis/api/storeSettingApi";
import AdminLogoPage from "../adminLogoPage/AdminLogoPage";

function AdminStoreSettingPage(props) {
    const queryClient = useQueryClient();
    const principalData = queryClient.getQueryData("principalQuery");
    const [storeFeedbackSetting, setStoreFeedbackSetting] = useRecoilState(
        storeFeedbackSettingState
    );
    const [storePlaySetting, setStorePlaySetting] = useRecoilState(
        storePlaySettingState
    );

    useEffect(() => {
        setStoreFeedbackSetting(() =>
            principalData.data.feedbackUse === 0 ? false : true
        );
        setStorePlaySetting(() =>
            principalData.data.playUse === 0 ? false : true
        );
    }, []);

    const storeSettingMutation = useMutation({
        mutationKey: "storeSettingMutation",
        mutationFn: storeSettingRequest,
        onSuccess: (response) => {
            queryClient.invalidateQueries(["principalQuery"]);
        },
        onError: (error) => {
            console.log(error);
        },
    });

    useEffect(() => {
        storeSettingMutation.mutate({
            feedbackUse: storeFeedbackSetting === true ? 1 : 0,
            playUse: storePlaySetting === true ? 1 : 0,
        });
    }, [storeFeedbackSetting, storePlaySetting]);
    
    return (
        <AdminPageLayout>
            <div css={s.layout}>
                <div css={s.header}>
                    <div css={s.title}>가게 설정</div>
                </div>
                <div css={s.main}>
                    <div css={s.mainLayout}>
                        <div css={s.mainBox}>
                            <div css={s.mainTitle}>피드백 페이지 활성화</div>
                            <div>
                                <ToggleSwitch
                                    width={65}
                                    height={35}
                                    onColor={"#0099ff"}
                                    state={"feedback"}
                                    checked={storeFeedbackSetting}
                                />
                            </div>
                        </div>
                        <div css={s.mainBox}>
                            <div css={s.mainTitle}>
                                관광지 추천 페이지 활성화
                            </div>
                            <div>
                                <ToggleSwitch
                                    width={65}
                                    height={35}
                                    onColor={"#0099ff"}
                                    state={"play"}
                                    checked={storePlaySetting}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div css={s.logoLayout}>
                    <AdminLogoPage />
                </div>
            </div>
        </AdminPageLayout>
    );
}

export default AdminStoreSettingPage;
