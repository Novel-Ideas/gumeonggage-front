import * as PortOne from "@portone/browser-sdk/v2";

export const portOnePayRequest = async ({ orderName, totalAmount }) => {
    return await PortOne.requestPayment({
        storeId: "store-4333102a-9745-4a56-919e-c1f748208c81",
        channelKey: "channel-key-3e68c9b8-63e2-4563-bbcf-591a2223d953",
        paymentId: `mid_${new Date().getTime()}`,
        currency: "CURRENCY_KRW",
        orderName: orderName,
        totalAmount: totalAmount,
        payMethod: "EASY_PAY",
        isTestChannel: true,
    });
};
