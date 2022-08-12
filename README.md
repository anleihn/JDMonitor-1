# JDMonitor
# 自用，脚本偷CK
# 自用，脚本偷CK
# 自用，脚本偷CK

# 请勿传播
# 否则随时闭库

# 拉库命令

ql repo https://github.com/tttccz/TczMonitor.git "jd_|t_" "backup" "JS_|notify|pk_|magic|USER_AGENTS|jdCookie|sendNotify" "main"

使用教程

1、需要自备sign接口

2、该库支持Redis存放Token操作，可在青龙面板中安装Redis，并设置变量export USE_REDIS=true

tttccz_JDMonitor/t_wx_getToken.js 该文件检测并生成临时Token 12.5分钟后过期

# Redis食用方法

一、安装青龙面板

1.安装青龙依赖

docker run -dit -v $PWD/ql-redis/config:/ql/config -v $PWD/ql-redis/log:/ql/log -v $PWD/ql-redis/db:/ql/db -v $PWD/ql-redis/repo:/ql/repo -v $PWD/ql-redis/raw:/ql/raw -v $PWD/ql-redis/scripts:/ql/scripts -v $PWD/ql-redis/jbot:/ql/jbot -v $PWD/ql-redis/ninja:/ql/ninja -p 5700:5700 -p 5701:5701 --name qinglong-redis --hostname ql-redis --restart unless-stopped --privileged whyour/qinglong:2.11.3


--privileged 必须的参数，否则redis安装不上


2.进入青龙面板

docker exec -it qinglong-redis bash

二、安装Redis

1.安装redis所需要的依赖

apk add --update gcc automake autoconf libtool make --no-cache g++ libxslt-dev python3-dev openssl-dev linux-headers

注意：

fatal error: jemalloc/jemalloc.h: No such file or directory

make distclean && make

fatal error: linux/version.h: No such file or directory

apk add linux-headers

2.安装redis

mkdir redis

cd redis 

wget http://download.redis.io/releases/redis-4.0.2.tar.gz

tar xzf redis-4.0.2.tar.gz

cd redis-4.0.2

make

make install

3.运行redis

cd /src

./redis-server

// 运行成功后 后台运行redis

ctrl+z

bg 1

# 安装pkc监控机器人（同样在容器内部）

1.安装依赖

// 操作环境，容器内执行。

// 包依赖

apk add zlib zlib-dev libjpeg-turbo libjpeg-turbo-dev gcc python3-dev libffi-dev musl-dev linux-headers


// 模块依赖

pip3 install qrcode==7.3.1 Telethon==1.24.0 requests==2.27.1 Pillow==9.0.0 python-socks==1.2.4 async_timeout==4.0.2 prettytable==3.0.0

// 如果安装 Pillow 比较慢 执行以下命令，然后再执行上面命令

pip install -i https://pypi.tuna.tsinghua.edu.cn/simple Pillow==9.0.0

2. 安装

参看

## https://github.com/curtinlv/gd.git


	
# 青龙面板脚本依赖

png-js
date-fns
axios
dotenv
got
crypto-js
md5
ts-md5
tslib
@types/node
request
tough-cookie
jsdom
download
tunnel
ws
js-base64
qrcode-terminal
moment
redis
