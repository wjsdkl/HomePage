<template>
    <el-main>
        <el-card class="box-card">
            <template #header>
                <div class="card-header">
                    <b>Xzaiの个人主页</b>
                    <el-button tag="a" href="//b8y.shop" target="_blank">我的爱发电（有好东西）</el-button>
                </div>
            </template>
            <div>
                <el-image src="./index.webp"/>
                <p>欢迎来到我的个人网站！我是一名专注于软件开发和编程的程序员。我热爱技术，对于最新的编程语言和技术有着浓厚的兴趣。</p>
                <p><a id="hitokoto">
                    <el-icon class="is-loading">
                        <Loading/>
                    </el-icon>
                </a></p>
                <el-divider/>
                <p>我的项目</p>
                <div class="btn-group">
                    <el-button tag="a" href="//b8y.chat" target="_blank">免费GPT</el-button>
                    <el-button tag="a" href="//violet.wiki" target="_blank">VioletWiki</el-button>
                    <el-button tag="a" href="//iqboost.icu" target="_blank">IQBoost</el-button>
                    <el-button tag="a" href="//原批.icu" target="_blank">原批语录</el-button>
                    <el-button tag="a" href="//2b2t.games" target="_blank">MC服务器</el-button>
                </div>
                <el-divider/>
                <p>联系我</p>
                <div class="btn-group">
                    <el-button tag="a" href="//wpa.qq.com/msgrd?v=3&uin=2744601427&site=qq&menu=yes" target="_blank">QQ</el-button>
                    <el-button tag="a" href="//telegram.me/Xzai0313" target="_blank">Telegram</el-button>
                </div>
                <el-divider/>
                <el-text>
                    Create by <el-icon><ElementPlus/></el-icon> Xzai &boxv;
                    <el-link type="primary" :underline="false" href="//beian.miit.gov.cn/" target="_blank">
                        蜀ICP备2022010825号-1
                    </el-link>
                </el-text>
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
}
.el-link {
  margin-top: -4px;
}
.el-image {
  border-radius: 10px;
}
</style>