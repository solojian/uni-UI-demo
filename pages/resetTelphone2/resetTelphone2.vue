<template>
	<view class="root">
	  <view class="form">
	    <view class="form-wrap">
	      <view class="form-item">
	        <image src="../../static/image/ic_phone.png"></image>
	        <input class="form-input" maxlength="11" type="number"  placeholder="请输入手机号" v-model="tel" />
	      </view>
	     
		  <uni-verification @sendCode='sendCode'></uni-verification>
	    </view>
	  </view>
	  <view class="bottom-box">
	    <view class="wrap">
	      <button @click="handleSubmit()">确认</button>
	    </view>
	  </view>
	</view>
</template>

<script>
	import {setTel} from '../../utils/session.js'
	export default {
		data() {
			return {
				 tel: '',
				      code: '',
				      password: ''
			}
		},
		
		methods: {
			sendCode(c) {
				this.code = c
			},
			 handleSubmit(){
			    const {tel,code,password} = this
			    if(!tel) {
			      uni.showToast({
			        title: '手机号不能为空！',
			        icon: 'none'
			      })
			      return
			    }
			    if(!code) {
			      uni.showToast({
			        title: '验证码不能为空！',
			        icon: 'none'
			      })
			      return
			    }
			   
			    reqUpdateTle({
			      code,
			      tel
			    }).then(res => {
			      console.log(res)
			      if(res.data.code == 0){
			        setTel(tel)
			        uni.navigateBack({
			          delta: 2
			        })
			        uni.showToast({
			          title: '更换手机号成功！'
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
  margin-top: 40rpx;
  background: #fff;
  width: 100vw;

}
.form-title{
  text-align: center;
  width: 100%;
  height: 164rpx;
  line-height: 164rpx;
  font-size: 30rpx;
}
.form-item{
  height: 90rpx;
  display: flex;
  align-items: center;
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
  flex: 1;
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
.bottom-box .wrap button{
  width: 670rpx;
  height: 102rpx;
  background: #2B64FF;
  border-radius: 6rpx;
  font-size: 36rpx;
  font-family: PingFang-SC-Bold, PingFang-SC;
  font-weight: bold;
  color: #FFFFFF;
  display: flex;
  justify-content: center;
  align-items: center;
}
.blue{
  color: #2B64FF
}
</style>
