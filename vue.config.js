const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
	publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
	outputDir: 'dist',
	assetsDir: 'static',
	indexPath: 'index.html',
	lintOnSave: false,
	devServer: {
		proxy: {
			'/carnival_tbs_demo': {
				target: 'http://10.25.2.79:8080/carnival_tbs_demo',//里面填写目标接口域名,本地环境
				changeOrigin: true, //开启代理
				secure: false, // https请求则使用true
				pathRewrite: {
					'^/carnival_tbs_demo': ' ',
				}
			}
		}
	}
})