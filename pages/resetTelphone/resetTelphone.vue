<template>
	<view class="root">
	  <view class="form">
	    <view class="form-wrap">
	      <image src="../../static/image/ic_iphone.png"></image>
	      <view class="form-title">验证当前手机号</view>
	      <view class="tel">{{telReg}}</view>
	     <!-- <view class="form-item">
	        <image src="../../static/image/ic_Verification.png"></image>
	        <input class="form-input" maxlength="6" type="number" placeholder="请输入6位数验证码" v-model="code" />
	        <view class="getcode" v-if='computeTime > 0'>已发送{{computeTime}}s</view>
	        <view class="getcode blue" @click="getVerification" v-else>获取验证码</view>
	      </view> -->
		  <uni-verification @sendCode='sendCode'></uni-verification>
	    </view>
	  </view>
	  <view class="bottom-box">
	    <view class="wrap">
	      <!-- <button class="btn" @click="handleNext()">下一步</button> -->
	      <navigator class="btn" url="../resetTelphone2/resetTelphone2">下一步</navigator>
	    </view>
	  </view>
	</view>

</template>

<script>
	import {getTel} from '../../utils/session.js'
	export default {
		data() {
			return {
				 code: '',
				    tel: '',
				    telReg: '',
				    computeTime: 0
			}
		},
		  onShow: function () {
		    const tel = this.tel = getTel()
		    if(tel) {
		      const reg = /^(\d{3})\d{4}(\d{4})$/
		      this.telReg = tel.replace(reg, "$1****$2")
		    }
		  },
		methods: {
			sendCode(c) {
				this.code = c
			},
			  
			  handleNext(){
			      const {code,tel} = this
			      reqVerify({
			        code
			      }).then(res => {
			        console.log(res)
			        if(res.data.code == 0) {
			          uni.navigateTo({
			            url: '/pages/resetTelphone2/resetTelphone2',
			          })
			        } else {
			          uni.showToast({
			            title: res.data.message,
			            icon: 'none'
			          })
			        }
			      })
			    }
		}
	}
</script>

<style>
/* pages/resetTelphone/resetTelphone.wxss */
.root {
  width: 100vw;
  height: 100vh;
  background: #F8F8F8;
}
.logo-box{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.logo{
  width: 316rpx;
  height: 90rpx;
  margin-top: 200rpx;
}
.form{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.form-wrap{
  width: 670rpx;
  display: flex;
  flex-direction: column;
  align-items: center;

}
.form-wrap image {
  width: 100rpx;
  height: 100rpx;
  margin: 39rpx auto;
}
.form-title{
  text-align: center;
  width: 100%;
  
font-size: 26rpx;
font-family: PingFangSC-Regular, PingFang SC;
font-weight: 400;
color: #333333;
line-height: 37rpx;
}
.tel {
  margin-top: 24rpx;
font-size: 38rpx;
font-family: SanFranciscoText-Bold, SanFranciscoText;
font-weight: bold;
color: #333333;
line-height: 45rpx;
}
.form-item{
  width: 100vw;
  height: 102rpx;
  background: #fff;
  display: flex;
  align-items: center;
  margin-top: 40rpx;
}
.form-item image {
  width: 44rpx;
  height: 44rpx;
  padding: 0 40rpx;
}
.form-item .label{
  font-size: 34rpx;
  width: 160rpx;
}
.form-input{
  flex:1;
}
.getcode{
  margin-right: 40rpx;
  font-size: 30rpx;
  font-weight: 400;
  color: #666666;
}
.bottom-box{
  margin-top: 70rpx;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.bottom-box .wrap{
  width: 670rpx;
}
.bottom-box .wrap .btn{
  width: 670rpx;
  height: 90rpx;
  line-height: 90rpx;
  background: #2B64FF;
  border-radius: 6rpx;
  font-size: 36rpx;
  font-family: PingFang-SC-Bold, PingFang-SC;
  font-weight: bold;
  color: #FFFFFF;
  display: flex;
  justify-content: center;
  align-items: cneter;
}
.blue{
  color: #2B64FF;
}
</style>
