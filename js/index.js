Vue.use(vant.Swipe).use(vant.SwipeItem)
new Vue({
	data: {
		swipeIndex: -1,
		edu: [{
			schoolName: '吉首大学',
			time: '2016.09-2018.07',
			pro: '计算机科学与技术',
			}, {
			schoolName: '湖南软件职业学院',
			time: '2013.09-2016.07',
			pro: '计算机科学',
		}],
		expiress: [{
			name: '长沙云中科科技公司',
			worker: 'web前端',
			wages: '7k',
			time: '2019.10-至今',
			tip: '小程序(原生，包含有字节跳动，微信小程序)、公众号、混合app开发',
			}, {
			name: '湖南省信书信息科技有限公司',
			worker: 'web前端',
			wages: '6k',
			time: '2019.05-2019.09',
			tip: '使用uni-app框架进行项目开发；使用Less规范进行样式编写；JavaScript代码规范采用ES5和ES6混合的面向过程风格；项目使用Vue组件化规范。',
			}, {
			name: '时刻未来教育科技有限公司',
			worker: 'web前端',
			wages: '5-7k',
			time: '2018.11-2019.04',
			tip: '使用uni-app框架和vue-cli进行项目开发；使用Element-ui进行后台管理系统的搭建；使用Less规范进行样式编写；JavaScript代码规范采用ES5和ES6混合的面向过程风格；组件化页面编写、前端路由。',
		}],
		projects: [{
				name: '秀吧带货',
				time: '2019.07-2019.12',
				worker: 'web前端',
				tip: '原生微信小程序，标准化的编写，使用了es6语法和weapp小程序ui组件',
			},{
			name: '信书分享h5和小程序',
			time: '2019.05-2019.07',
			woker: 'web前端',
			tip: '使用uni-app框架进行项目的搭建；使用Less规范进行样式编写；使用uni-app提供的全平台兼容的UI框架。',
			/*urls: [{
				name: 'h5在线',
				url: 'https://m.ngfrankgl.cn',
			}],*/
			}, {
			name: '学成教育',
			time: '2018.11-2019.04',
			woker: 'web前端',
			tip: '线上教育平台学程，一套从管理、pc版和移动版的项目；后台使用了Hui框架结合jQuery进行开发；pc站项目使用vue.js、jQuery和layui进行编写；移动版使用vue组件化开发，没有使用vue-cli编写的第一版是陪伴项目，pc和移动版均为前后台分离模式进行开发，项目第二版移动版(客户需要)，采用更为精致的UI图纸进行项目开发(uni-app)。',
			urls: [{
				name: 'pc版',
				url: 'http://www.szxcedu.com.cn',
			}, {
				name: '移动版',
				url: 'http://m.szxcedu.com.cn',
			}],
			}, {
			name: '基于Android天气预报app',
			time: '2019.04-2019.05',
			woker: '全栈',
			tip: '本科生毕业设计项目，使用原生PHP、MySQL技术，vue-cli、uni-app框架，Less规范进行项目开发；项目使用了MVVM的设计模式，灵活运用了PHP语言的变量的灵活性；项目的数据库设计不足10，涉及的业务比较清晰；主要的业务包括，用户登录、注册，用户收藏地址记录，热门城市设置第三方定位API、天气预报API使用。',
			/*urls: [{
				name: '后台管理',
				url: 'https://admin.ngfrankgl.cn',
			}],*/
		}],
		userinfo: {
			name: '赵国梁',
			age: '25',
			phone: '13135140441',
			mail: '845014705@qq.com',
			exp: '3年',
			side: '长沙市岳麓区',
			worker: 'web前端',
			wages: '9k',
			edu: '本科',
		},
		tip: `有JavaScript语言基础，熟悉ES6以后版本的常用特性；
				掌握HTML5和CSS3并且满足一般项目需求，包括有，弹性布局、网格布局和多列等；
				熟练并且能够使用vue前端框架，熟悉React特性，实际上没有工作上的需求；
				熟悉的后台管理系统UI框架有，element-ui，iview，layui，bootstrap，前端UI框架有，mint-ui，vant；
				习惯通过less和原生css手写样式效果；
				使用uniapp和h5+api开发混合app；
				熟悉nodejs，mangodb，MySQL，PHP；
				能够精炼代码，提高代码的可读性和可复用性；
				熟练使用PS进行修图、切图等操作；
				能够协同工作，完成项目需求，代码编写较为严谨，生活乐观`,
	},
	methods: {
		itemChange(itemIndex) {
			// console.log(itemIndex)
			this.swipeIndex = itemIndex
		},
	},
	computed: {
		mTip() {
			let tips = this.tip.split('；')
			return tips
		}
	},
}).$mount('.app')
