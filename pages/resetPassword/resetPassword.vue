<template>
	<view class="root">
	  <view class="form">
	    <view class="form-wrap">
	      <view class="form-item under">
	        <image class="left" src="../../static/image/ic_password.png"></image>
	        <input class="form-input" maxlength="16" :password='!islooka' placeholder="请输入原密码" v-model="usedPassword" />
	        <image class="right" v-if='islooka'  @click="() => this.islooka = !this.islooka" src="../../static/image/ic_Accord.png"></image>
	        <image class="right" v-else  @click="() => this.islooka = !this.islooka" src="../../static/image/ic_hidden.png"></image>
	
	      </view>
	      <view class="form-item">
	        <image class="left" src="../../static/image/ic_password2.png"></image>
	        <input class="form-input"  maxlength="16"  :password='!islookb' placeholder="请设置您的新密码" v-model="newPassword" />
	        <image class="right" v-if='islookb' @click="() => this.islookb = !this.islookb" src="../../static/image/ic_Accord.png"></image>
	        <image class="right"   @click="() => this.islookb = !this.islookb" v-else src="../../static/image/ic_hidden.png"></image>
	      </view>
	      
	    </view>
	  </view>
	  <view class="bottom-box">
	    <view class="wrap">
	      <button @click="handleBtn()" >确定</button>
	    </view>
	  </view>
	</view>

</template>

<script>
	export default {
		data() {
			return {
				 islooka: false,
				    islookb: false,
				    usedPassword: '',
				    newPassword: '',
				    confirmPassword: ''
			}
		},
		methods: {
			 handleBtn() {
			    const { usedPassword, newPassword} = this
			    if(!usedPassword) {
			      uni.showToast({
			        title: '原密码不能为空',
			        icon: 'none'
			      })
			      return
			    }
			    if (!newPassword) {
			      uni.showToast({
			        title: '新密码不能为空',
			        icon: 'none'
			      })
			      return
			    }
			    
			    reqUpdatePassword({
			      usedPassword,
			      newPassword,
			      confirmPassword: newPassword
			    }).then(res => {
			      console.log(res)
			      if(res.data.code == 0) {
			        uni.navigateBack()
			        uni.showToast({
			          title: '修改密码成功'
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
  width: 100%;
  background: #fff;
}
.form-item{
  margin: 0 auto;
  width: 670rpx;
  height: 90rpx;
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
}
.form-wrap .under {
  border-bottom: 1px solid #ccc;

}
.form-item image {
  width: 44rpx;
  height: 44rpx;
}
.form-item .left {
  margin-right: 40rpx;
}
.form-item .right {
  margin-left: 40rpx;
}
.form-item input {
  flex: 1;
}
.form-item .label{
  font-size: 34rpx;
  width: 160rpx;
}
.form-input{
  font-size: 30rpx;
}
.getcode{
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
</style>
