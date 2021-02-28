<template>
    <section>
        <div class="mainBox">
            <img :src="bcIcon" alt="" class="headerBc">
            <div class="lanBox" @click="changeLanguage">
                {{$t('language.name')=='EN'?'En':'中文'}}
            </div>
            <div class="top-wrap">
                <div class="logo-title">MUSO</div>
            </div>
            <van-swipe class="my-swipe" :autoplay="3000">
                <van-swipe-item v-for='(item, index) in bannerList' :key='index'>
                    <img :src="item.imgUrl" alt="" class="swipe_img">
                    <div class='footer'>
                        <div class="title">{{item.title}}</div>
                        <div class="sub-title">{{item.subTitle}}</div>
                        <div style="height:30px"></div>
                    </div>
                </van-swipe-item>
            </van-swipe>
            <div class="bottom-warp" v-if="isAndroid">
                <div class='down-button' @click="leftDownEvent()">
                    <div class="btn-t">{{$t('user.down.text13')}}</div>
                    <div class="btn-s">{{$t('user.down.text12')}}</div>
                </div>
                <div class='down-button1' @click="downEvent()">
                    <div class="btn-t">{{$t('user.down.text15')}}</div>
                    <div class="btn-s">{{$t('user.down.text16')}}</div>
                </div>
            </div>
            <div class="bottom-warp" v-else>
                <div class='down-button' @click="leftDownEvent()">
                    <div class="btn-t">{{$t('user.down.text11')}}</div>
                    <div class="btn-s">{{$t('user.down.text12')}}</div>
                </div>
                <div class='down-button1' @click="downEvent()">
                    <div class="btn-t">{{$t('user.down.text15')}}</div>
                    <div class="btn-s">{{$t('user.down.text16')}}</div>
                </div>
            </div>
        </div>

        <van-popup v-model="show" position="center" class="popDown"
            :style="{ color:'#fff', height: '33%', width:'80%',background:'#242444' }">
            <div class="pop-instert">
                <div class="downWarning">
                    <img :src="downWarning" alt="">
                </div>
                <div class="warning-msg">{{$t('user.down.text17')}}</div>
                <div class='down-button3' @click="downEvent()">
                    <div class="btn-t3">{{$t('user.down.text15')}}</div>
                    <div class="btn-s3">{{$t('user.down.text16')}}</div>
                </div>
            </div>
        </van-popup>
    </section>
</template>
<script>
    import {
        isAndroid
    } from '@/utils/tools.js'
    import {
        axiosData
    } from '@/assets/js/$axios';
    export default {
        name: 'home',
        computed: {
            bannerList() {
                var list = [{
                        imgUrl: './static/img/banner1.png',
                        title: this.$t('user.down.text1'),
                        subTitle: this.$t('user.down.text2')
                    },
                    {
                        imgUrl: './static/img/banner2.png',
                        title: this.$t('user.down.text3'),
                        subTitle: this.$t('user.down.text4')
                    },
                    {
                        imgUrl: './static/img/banner3.png',
                        title: this.$t('user.down.text5'),
                        subTitle: this.$t('user.down.text6')
                    },
                ]
                return list
            }
        },
        data() {
            return {
                show: false,
                bcIcon: './static/img/logo.png',
                downWarning: './static/img/downWarning.png',

                // bannerList: [{
                //         imgUrl: './static/img/banner1.png',
                //         title: this.$t('user.down.text1'),
                //         subTitle: this.$t('user.down.text2')
                //     },
                //     {
                //         imgUrl: './static/img/banner2.png',
                //         title: this.$t('user.down.text3'),
                //         subTitle: this.$t('user.down.text4')
                //     },
                //     {
                //         imgUrl: './static/img/banner3.png',
                //         title: this.$t('user.down.text5'),
                //         subTitle: this.$t('user.down.text6')
                //     },
                // ],
                ioslogo: './static/img/ios-logo.png',
                androidlogo: './static/img/android-logo.png',

                // appLogo: './static/img/applogo.png',
                // appLogo1: './static/img/applogo1.png',
                // appLogo2: './static/img/iosAppPro.png',
                // appLogo4: './static/img/appLogo4.png',
                // appLogo5: './static/img/appLogo5.png',
                // icon1: './static/img/icon1.png',
                // icon2: './static/img/icon2.png',
                iosUrl: '',
                androidUrl: '',
                newIosUrl: 'https://www.adelesatie.net/vip/qoxy',
                versionIOS: '',
                versionAndroid: '',
                version: '',
                isP: '',
                isAndroid: isAndroid()
            }
        },
        components: {},
        methods: {
            getLogoURL() {
                return isAndroid() ? this.androidlogo : this.ioslogo
            },
            downEvent() {
                var url = isAndroid() ? "https://www.adelesatie.net/qy/vovt" : "https://www.adelesatie.net/vip/m9c7"
                window.open(url)
            },
            leftDownEvent() {
                this.show = true;
                // this.$toast("暂时无法下载")
            },
            changeLanguage() {
                this.$i18n.locale == 'zh' ? this.$i18n.locale = 'en' : this.$i18n.locale = 'zh' //设置中英文模式
                localStorage.setItem('languageSet', this.$i18n.locale) //将用户设置存储到localStorage以便用户下次打开时使用此设置
            },
            goUrl(url) {
                this.$router.push({
                    path: url
                })
            },
            goDown(url) {
                window.location.href = url;
            },
            getUrl() {
                let that = this;
                let params = {

                };
                let url = '/common/getVersion';
                let _callback = (res) => {
                    console.log(res);
                    if (that.isP == 'IOS') {
                        that.version = res.data.versionIOS;
                    } else {
                        that.version = res.data.versionAndroid;
                    }
                    that.androidUrl = res.data.androidUrl;
                    that.iosUrl = res.data.iOSUrl;
                }
                axiosData('get', url, params, _callback, this)
            }
        },
        mounted() {},
        created() {
            let that = this;
            localStorage.setItem('languageSet', "zh");
            var u = navigator.userAgent;
            if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {
                that.isP = 'android';
            } else if (u.indexOf('iPhone') > -1) {
                //苹果手机
                that.isP = 'IOS';
            } else if (u.indexOf('Windows Phone') > -1) {
                //winphone手机
            }
            // this.getUrl()
        }
    }
</script>
<style scoped lang="less">
    section {
        height: 100%;
        overflow: hidden;

    }

    .van-popup--right {
        width: 100% !important;
        height: 100% !important;
        background-color: unset;
    }

    .popDown {
        height: '210px';
        width: '80%';
        background-color: '#242444';
        text-align: center;
        border-radius: 5px;
        display: flex;
        align-items: center;

        .pop-instert {}

        .downWarning {
            // margin-top: px;

            img {
                width: 30px;
            }
        }

        .warning-msg {
            font-size: 14px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #FFFFFF;
            line-height: 18px;
            padding: 5px 15px;

        }

        .down-button3 {
            width: 89%;
            line-height: 40px;
            color: #ffffff;
            font-size: 16px;
            text-align: center;
            margin: 10px auto 0;

            // width: 269px;
            height: 54px;
            background: linear-gradient(270deg, #13B3AE 0%, #039DAF 100%);
            border-radius: 27px;

            .btn-t3 {
                padding-top: 10px;
                font-size: 14px;
                font-family: Montserrat-Medium, Montserrat;
                font-weight: 500;
                color: #FFFFFF;
                line-height: 18px;
            }

            .btn-s3 {
                margin-top: 4px;
                font-size: 12px;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: rgba(#ffffff, 0.6);
                line-height: 17px;
            }

        }
    }

    .mainBox {
        width: 100%;
        height: 100%;
        // overflow: hidden;
        // background: #142724;

        background: #18172C;
        position: relative;

        .headerBc {
            position: absolute;
            padding: 33px 25px;
            width: 30px;
        }

        .lanBox {
            font-size: 10px;
            font-family: PingFangSC-, PingFang SC;
            font-weight: normal;
            color: #FFFFFF;
            line-height: 21px;
            position: absolute;
            top: 29px;
            right: 25px;
            width: 36px;
            height: 36px;
            line-height: 36px;
            text-align: center;
            background: rgba(#ffffff, 0.16);
            border-radius: 50%;
        }



        .top-wrap {
            text-align: center;
            padding-top: 64px;



            // .logo-title {
            //     margin-top: 10px;
            //     height: 15px;
            //     font-size: 18px;
            //     font-family: Montserrat-Medium, Montserrat;
            //     color: #FFFFFF;
            //     line-height: 15px;
            //     letter-spacing: 3px;
            // }

            // @media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) {

            .logo-title {
                margin-top: 10px;
                height: 18px;
                font-size: 24px;
                font-family: Montserrat-Medium, Montserrat;
                color: #FFFFFF;
                line-height: 18px;
                letter-spacing: 5px;
            }

            // }
        }

        .my-swipe {
            // height: 65%;

            .swipe_img {
                // width: 60%;
                width: 60%;

            }

            // @media only screen and (-webkit-device-pixel-ratio: 3) {
            //     .swipe_img {
            //         width: 100%;
            //     }
            // }
        }

        .my-swipe .van-swipe-item {
            color: #fff;
            font-size: 10px;
            line-height: 75px;
            text-align: center;
            // background-color: #39a9ed;
        }

        .bottom-warp {
            display: flex;
            justify-content: space-around;
            align-content: center;
            // align-items: center;

            // margin-top: 11px;
            // background: #242444;
            border-radius: 16px 16px 0px 0px;
            // height: 15%;
            // height: 90px;
            // overflow: hidden;


            .btn-t {
                margin-top: 10px;
                font-size: 14px;
                font-family: Montserrat-Medium, Montserrat;
                font-weight: 500;
                color: #FFFFFF;
                line-height: 18px;
            }

            .btn-s {
                margin-top: 4px;
                font-size: 12px;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: rgba(#ffffff, 0.6);
                line-height: 17px;
            }
        }

        .down-button {
            // width: 164px;
            width: 44%;
            height: 56px;
            line-height: 48px;
            background: linear-gradient(270deg, #13B3AE 0%, #039DAF 100%);
            border-radius: 10px;
            color: #ffffff;
            font-size: 16px;
            text-align: center;
            margin: 15px auto 0;
            // letter-spacing: 1px;

            img {
                width: 24px;
                margin-top: -3px;
                vertical-align: middle;
            }
        }

        .down-button1 {
            // width: 164px;
            width: 44%;

            height: 56px;
            line-height: 48px;

            background: linear-gradient(270deg, #135CB3 0%, #0354AF 100%);
            border-radius: 10px;
            color: #ffffff;
            font-size: 16px;
            text-align: center;
            margin: 15px auto 0;
            // letter-spacing: 1px;


            img {
                width: 24px;
                margin-top: -3px;
                vertical-align: middle;
            }
        }



        .footer {
            color: #fff;
            text-align: center;
            margin-top: -40px;
            font-family: Montserrat-Medium, Montserrat;

            .title {
                font-size: 22px;
                line-height: 22px;
            }

            .sub-title {
                padding: 0 16px;
                font-size: 13px;
                line-height: 20px;
                margin-top: 15px;
                opacity: 0.4;
                color: #FFFFFF;
            }
        }

        /deep/ .van-swipe__indicator:not(:last-child) {
            margin-right: 12px;
        }

        /deep/ .van-swipe__indicators {
            bottom: 0px;
        }

        /deep/ .van-swipe__indicator {
            width: 8px;
            height: 8px;
            background-color: #6CBFAD;
            // margin-bottom: 350%;
        }
    }
</style>
