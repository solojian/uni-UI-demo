<template>
	<!--pages/account/account.wxml-->
	<view class="account">
	  <view class="wrap">
	    <view class="item-wrap">
	      <view class="item item-under">
	        <text class="item-title">登录账号</text>
	        <text class="phone">{{tel}}</text>
	      </view>
	      <navigator class="item"  url="../resetPassword/resetPassword">
	        <text class="item-title">修改密码</text>
	        <image class="right" src="../../static/image/ic_open2.png"></image>
	      </navigator>
	    </view>
	    <view class="item-wrap">
	      <navigator class="item"  url="../resetTelphone/resetTelphone">
	      <text class="item-title">更换手机号</text>
	        <image class="right" src="../../static/image/ic_open2.png"></image>
	      </navigator>
	    </view>
	    <view class="btn" @click="()=> this.mask = 1">退出登录</view>
	  </view>
	  <view  v-if="mask==1" class="mask" @click="() => this.mask = 0"></view>
	  <view  v-if="mask==1" class="layer">
	    <view class="layer-item" @click="handleOut()">退出登录</view>
	    <view class="layer-item" @click="() => this.mask = 0">取消退出</view>
	  </view>
	</view>

</template>

<script>
	import { getTel,removeToken, removeTel } from '../../utils/session.js'

	export default {
		data() {
			return {
				 tel: '',
				 mask: 0
			}
		},
		 onShow: function () {
		    this.tel = getTel()
		  },
		methods: {
			
			  handleOut() {
			        removeTel()
			        removeToken()
			        uni.clearStorageSync()
			        uni.redirectTo({
			          url: '/pages/login/login'
			        })
			        uni.showToast({
			          title: '退出登录成功',
			          icon: 'none'
			        })
			  },
			  
		}
	}
</script>

<style>
/* pages/account/account.wxss */
.account{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #F8F8F8;
}
.account .wrap{
  /* width: 680rpx; */
  display: flex;
  flex-direction: column;
  align-items: center;
}
.item-wrap {
  width: 100vw;
  box-sizing: border-box;
  padding: 0 40rpx;
  margin: 27rpx 0;
  background: #fff;
}
.account .wrap .item{
  height: 90rpx;
  width: 100%;
  display: flex;
  align-items: center;
}
.account .wrap .item-under {
  border-bottom: 1px solid #eee;

}
.account .wrap .item .item-title{
  font-size: 30rpx;
  font-family: PingFang-SC-Bold, PingFang-SC;
  font-weight: bold;
  color: #333333;
}
.account .wrap .item .phone{
  
  font-size: 30rpx;
  font-family: PingFang-SC-Bold, PingFang-SC;
  font-weight: bold;
  color: #333333;
  margin-left: auto;
}
.account .wrap .item .right{
  width: 22rpx;
  height: 22rpx;
  margin-left: auto;
}
.account .wrap .btn {
  width: 690rpx;
  height: 88rpx;
  background: #2B64FF;
  border-radius: 6rpx;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 34rpx;
  font-family: PingFang-SC-Bold, PingFang-SC;
  font-weight: bold;
  color: #FFFFFF;
  margin-top: 60rpx
}
.mask{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, .7);
  z-index: 300;
}
.layer{
  position: fixed;
  height: 240rpx;
  bottom: 0;
  left: 0;
  background-color: #fff;
  width: 100%;
  z-index: 400;
}
.layer .layer-item {
  width: 100%;
  height: 50%;
  text-align: center;
  line-height: 120rpx;
  font-size: 34rpx;
  font-family: PingFang-SC-Bold, PingFang-SC;
  font-weight: bold;
  color: #333333;
}
.layer .layer-item:nth-child(1) {
  border-bottom: 1rpx solid #DDDDDD;
}
</style>
