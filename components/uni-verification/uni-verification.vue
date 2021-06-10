<template>
	<view class="form-item">
	  <image src="../../static/image/ic_Verification.png"></image>
	  <input class="form-input" maxlength="6" type="number" placeholder="请输入6位数验证码" v-model="code" />
	  <view class="getcode" v-if='computeTime > 0'>已发送{{computeTime}}s</view>
	  <view class="getcode blue" @click="getVerification" v-else>获取验证码</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				code: '',
				computeTime: 0
			};
		},
		watch:{
			code:function() {
				console.log('cc')
				this.$emit('sendCode',this.code)
			}
		},
		methods:{
			getVerification() {
			    if (this.computeTime > 0) return
			    this.computeTime = 60
			    // 启循环定时器, 改变computedTime
			    const interverId = setInterval(() => {
			      this.computeTime --
			     
			      // 当计时达到最小值时, 清除定时器
			      if (this.computeTime <= 0) {
			        this.computeTime = 0
			        clearInterval(interverId)
			      }
			    }, 1000)
			    reqSendCode({
			      tel: this.data.tel
			    }).then(res => {
			      console.log(res, '获取验证码')
			      if(res.data.code == 0) {
			        uni.showToast({
			          title: '获取验证码成功！'
			        })
			      } else {
			        uni.showToast({
			          title: '获取验证码失败！',
			          icon: 'none'
			        })
			      }
			    }).catch(() => {
			      uni.showToast({
			        title: '获取验证码失败！',
			        icon: 'none'
			      })
			    })
			  }
		}
	}
</script>

<style>
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
.blue{
  color: #2B64FF;
}
</style>
