<template>
    <el-main>
        <el-card class="box-card">
            <template #header>
                <div class="card-header">
                    <b>Xzaiの个人主页</b>
                    <el-button tag="a" href="./wxpay.jpg" target="_blank">赞助</el-button>
                </div>
            </template>
            <div>
                <!--主要内容-->
                <el-image src="./index.webp"/>
                <p>欢迎来到我的个人网站！我是一名专注于系统封装重装、软件编程制作的程序员。</p>
                <p><a id="hitokoto">
                    <el-icon class="is-loading">
                        <Loading/>
                    </el-icon>
                </a></p>
                <el-divider/>
                <p>我的项目</p>
                <div class="btn-group">
                    <el-button tag="a" href="https://gpt.xiaoduan.icu/" target="_blank">ChatGPT</el-button>
                    <el-button tag="a" href="https://www.yrxitong.com/" target="_blank">小鱼儿yr系统</el-button>
                    <el-button tag="a" href="https://www.123pan.com/s/6y1UVv-cSnGH.html" target="_blank">微软账户自动注册</el-button>
                    <el-button tag="a" href="https://yrxitong6-my.sharepoint.cn/:f:/g/personal/yrxitong_com_yrxitong_com/EgXdZaXnGkJKg-o4hZWjRIwBJIBRd80MWHaK_nKCrkDKZw" target="_blank">系统下载</el-button>
                    <el-button tag="a" href="https://mcarc.gitee.io/" target="_blank">Minecraft下载</el-button>
                </div>
                <el-divider/>
                <p>联系方式</p>
                <div class="btn-group">
                    <el-button tag="a" href="https://qm.qq.com/q/EljSfThmQa&personal_qrcode_source=3" target="_blank">QQ</el-button>
                    <el-button tag="a" href="./wxqrcode.png" target="_blank">微信</el-button>
                </div>
                <el-divider/>
                <p>友链</p>
                <el-link type="primary" :underline="false" href="https://www.google.com/" target="_blank">Google</el-link>
                &boxv;
                <el-link type="primary" :underline="false" href="https://www.baidu.com/" target="_blank">百度</el-link>
                &boxv;
                <el-link type="primary" :underline="false" href="https://www.itsk.com/" target="_blank">IT天空</el-link>
                &boxv;
                <el-link type="primary" :underline="false" href="https://www.upe.net/" target="_blank">优启通</el-link>
                &boxv;
                <el-link type="primary" :underline="false" href="https://www.puresys.net/" target="_blank">Puresys</el-link>
                <el-divider/>
                <el-text>Create by <el-icon><ElementPlus/></el-icon> <el-link :underline="false" href="//xiaoduan.icu" target="_blank">xiao_duan</el-link></el-text>
                <!--主要内容-->
            </div>
        </el-card>
    </el-main>
</template>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@300&display=swap');
</style>

<style scoped>
.btn-group {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
:deep(.el-button){
  margin-left: 0;
}
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.text {
  font-size: 14px;
}
.item {
  margin-bottom: 18px;
}
.box-card {
  width: 800px;
  margin: auto;
}
@media only screen and (max-width: 1000px) {
  .box-card {
    width: 99%;
  }
}
* {
  font-family:"Noto Sans SC";
  text-decoration: none;
  overflow: hidden;
}
.el-link {
  margin-top: -4px;
}
.el-image {
  border-radius: 10px;
}
</style>