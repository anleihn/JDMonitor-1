// 京东口令
// [rule: raw [\s\S]*[(|)|#|@|$|%|¥|￥|!|！]([0-9a-zA-Z]{10,14})[#|@|$|%|¥|￥|!|！|)][\s\S]*]
function main(text) {
    var headers = {
        "User-Agent": "Mozilla/5.0 (Linux; U; Android 11; zh-cn; KB2000 Build/RP1A.201005.001) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Mobile Safari/537.36 HeyTapBrowser/40.7.19.3 uuid/cddaa248eaf1933ddbe92e9bf4d72cb3",
        "token": "5264581489:1a4b69234e80e13e7f881da4bf54931f"
    };
    try {
        var data = request({
            // url: "http://158.101.153.139:19840/jCommand",
            url: "http://ailoveu.eu.org:19840/jCommand",
            "headers": headers,
            "method": "post",
            "dataType": "json",
            "body": { "code": text }
        })

        if (data.code == "200") {
            var data = data.data
            var jumpUrl = data.jumpUrl
            var activityId = jumpUrl.replace(/.*\?activityId\=([^\&]*)\&?.*/g, "$1")
            if (jumpUrl.indexOf("https://cjhydz-isv.isvjcloud.com/wxTeam/activity") != -1) {
                sendText(`## ${data.title} ##\nexport jd_cjhy_activityId="${activityId}"`)
            }
            else if (jumpUrl.indexOf("wxCartKoi/cartkoi") != -1) {
                sendText(`## ${data.title} ##\nexport jd_wxCartKoi_activityId="${activityId}"`)
            }
            else if (jumpUrl.indexOf("wxUnPackingActivity") != -1) {
                sendText(`## ${data.title} ##\nexport T_WX_UNPACKING_URL="${jumpUrl.split("&")[0]}"`)
            }
            else if (jumpUrl.indexOf("categoryUnion") != -1) {
                sendText(`## ${data.title} ##\nexport jd_categoryUnion_activityId="${activityId}"`)
            }
            else if (jumpUrl.indexOf("wxFansInterActionActivity") != -1) {
                sendText(`## ${data.title} ##\nexport jd_wxFansInterActionActivity_activityId="${activityId}"`)
            }
            else if (jumpUrl.indexOf("https://lzkjdz-isv.isvjcloud.com/wxTeam/activity2") != -1) {
                sendText(`## ${data.title} ##\nexport jd_zdjr_activityId="${activityId}"`)
            }
            else if (jumpUrl.indexOf("wxgame") != -1) {
                sendText(`## ${data.title} ##\nexport WXGAME_ACT_ID="${activityId}"`)
            }
            else if (jumpUrl.indexOf("wxCollectCard") != -1) {
                sendText(`## ${data.title} ##\nexport jd_wxCollectCard_activityId="${activityId}"`)
            }
            // if (jumpUrl.indexOf("WxHbShareActivity") != -1) {
            //     sendText(`## ${data.title} ##\nexport jd_cjhy_activityId="${activityId}"`)
            //     exports["T_HB_SHARE_URL"] = jumpUrl.split("&")[0]
            // }
            // if (jumpUrl.indexOf("openCard") != -1 && jumpUrl.indexOf("venderId=") != -1) {
            //     exports["VENDER_ID"] = queries["venderId"]
            // }
            else if (jumpUrl.indexOf("microDz") != -1) {
                sendText(`## ${data.title} ##\nexport jd_wdz_activityId="${activityId}"`)
            }
            else if (jumpUrl.indexOf("WxHbShareActivity") != -1) {
                sendText(`## ${data.title} ##\nexport T_HB_SHARE_URL="${jumpUrl.split("&")[0]}"`)
            }
            else if (jumpUrl.indexOf("wxSecond") != -1) {
                sendText(`## ${data.title} ##\nexport jd_wxSecond_activityId="${activityId}"`)
            }
            else if (jumpUrl.indexOf("https://lzkj-isv.isvjcloud.com/drawCenter/activity") != -1) {
                sendText(`## ${data.title} ##\nexport jd_drawCenter_activityId="${activityId}"`)
            }
            else if (jumpUrl.indexOf("wxShareActivity") != -1 && jumpUrl.indexOf("activityId") != -1) {
                sendText(`## ${data.title} ##\nexport jd_fxyl_activityId="${activityId}"`)
            }
            else if (jumpUrl.indexOf("https://lzkj-isv.isvjcloud.com/lzclient") != -1) {
                sendText(`## ${data.title} ##\nexport M_WX_LUCK_DRAW_URL="${jumpUrl.split("&")[0]}"`)
            }
            else if (jumpUrl.indexOf("showPartition") != -1) {
                exportURL = jumpUrl.split("&")[0] + '&' + jumpUrl.split("&")[1]
                sendText(`## ${data.title} ##\nexport jd_jinggengzdfg_url ="${exportURL}"`)
            }
            else if (jumpUrl.indexOf("wxDrawActivity") != -1) {
                sendText(`## ${data.title} ##\nexport M_WX_LUCK_DRAW_URL="${jumpUrl.split("&")[0]}"`)
            }
            else if (jumpUrl.indexOf("wxCollectionActivity") != -1 && jumpUrl.indexOf("cjhy") == -1) {
                sendText(`## ${data.title} ##\nexport jd_cjhy_activityId="${activityId}"`)
            }
            else if (jumpUrl.indexOf("https://prodev.m.jd.com/mall/active/") != -1) {
                var id = jumpUrl.split("/index.html")[0].split("active/")[1]
                var actCode = jumpUrl.split("/index.html")[1].split("&")[0].split("=")[1]
                sendText(`## ${data.title} ##\nexport yhyactivityId="${id}"\nexport yhyauthorCode="${actCode}"`)
            }
            else if (jumpUrl.indexOf("dingzhi/customized/common") != -1) {
                sendText(`## ${data.title} ##\nexport jd_opencard_activityId="${activityId}"`)
            }
            else if (jumpUrl.indexOf("dingzhi/joinCommon") != -1) {
                sendText(`## ${data.title} ##\nexport jd_jCommon_opencard_activityId="${activityId}"`)
            }
            else if (jumpUrl.indexOf("dingzhi/bd/common") {
                sendText(`## ${data.title} ##\nexport jd_opencard_bdCommon="${activityId}"`)
            }
            else if (jumpUrl.indexOf("https://lzdz1-isv.isvjcloud.com/dingzhi") != -1 && (jumpUrl.split("/").length == 7 || jumpUrl.split("/").length == 8) && (jumpUrl.indexOf("common") == -1 || jumpUrl.indexOf("joinCommon") == -1)) {
                firstParam = jumpUrl.split("/")[4]
                secondParam = jumpUrl.split("/")[5]
                sendText(`## ${data.title} ##\nexport jd_opencard_three_params="${firstParam}_${secondParam}_${activityId}"`)
            }
            else {
                sendText(`## ${data.title} ##\n${jumpUrl}`)
            }
        }
    } catch (e) {
        sendText("null")
    }

}
var text = "(" + param(1) + ")"
main(text)
