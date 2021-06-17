Vue.use(vant.Swipe).use(vant.SwipeItem)
new Vue({
	data: {
		swipeIndex: -1,
		edu: [
			{
				schoolName: '吉首大学',
				time: '2016.09-2018.07',
				pro: '计算机科学与技术',
			}/*, {
				schoolName: '湖南软件职业学院',
				time: '2013.09-2016.07',
				pro: '计算机科学',
			}*/
		],
		expiress: [
			/*{
				name: '湖南云简信息技术有限公司',
				worker: '前端开发工程师',
				// wages: '8k',
				time: '2021.05-2021.06',
				tip: '使用AngluarJS维护和开发ERP系统',
			}, */
			{
				name: '湖南省云木网络科技有限公司',
				worker: '前端',
				// wages: '8k',
				time: '2020.10-2021.05',
				tip: '通过uniapp框架，开发android应用。使用了uview uniapp的ui框架，进行开发',
			}, 
			{
				name: '湖南中网科技有限公司',
				worker: '前端工程师',
				// wages: '7k',
				time: '2019.07-2020.09',
				tip: '小程序(原生，包含有字节跳动，微信小程序)、公众号和混合app开发。',
			}, /*{
				name: '湖南省信书信息科技有限公司',
				worker: 'web前端',
				wages: '6k',
				time: '2019.04-2019.07',
				tip: '使用uni-app框架进行项目开发；使用Less规范进行样式编写；JavaScript代码规范采用ES5和ES6混合的面向过程风格；项目使用Vue组件化规范。',
			}, */{
				name: '湖南时刻未来教育科技有限公司',
				worker: 'web前端',
				// wages: '5k',
				time: '2018.07-2019.03',
				// tip: '使用uni-app框架和vue-cli进行项目开发；使用Element-ui进行后台管理系统的搭建；使用Less规范进行样式编写；JavaScript代码规范采用ES5和ES6混合的面向过程风格；组件化页面编写、前端路由。',
				tip: '通过div+css的形式进行页面编写，负责web和移动web，使用jQuery库',
			}
		],
		projects: [
			/*{
				name: '积加ERP',
				time: '2021.05-2021.06',
				worker: '前端',
				tip: '使用AngluarJS框架，产品是基于亚马逊平台商户端的管理系统',
			},*/
			{
				name: '换号吧',
				time: '2020.10-2020.12',
				worker: '前端',
				tip: 'uniapp开发android应用，一款线下游戏账号交易平台',
			},
			{
				name: '热铺拓客',
				time: '2019.12-2020.04',
				worker: '前端工程师',
				tip: 'Vue.js项目，使用vue-cli开发，是一个集商品、订单和用户的管理系统',
			},
			{
				name: '秀吧带货',
				time: '2019.07-2019.12',
				worker: '前端工程师',
				tip: '原生微信小程序，标准化的编写，使用了weapp-ui组件和部分ES6语法',
			},/*{
				name: '信书分享h5和小程序',
				time: '2019.05-2019.07',
				worker: 'web前端',
				tip: '使用uni-app框架进行项目的搭建；使用Less规范进行样式编写；使用uni-app提供的全平台兼容的UI框架。',
				// urls: [{
				// 	name: 'h5在线',
				// 	url: 'https://m.ngfrankgl.cn',
				// }],
			}, */{
				name: '学成教育',
				time: '2018.07-2019.03',
				worker: 'web前端',
				// tip: '线上教育平台学程，一套从管理、pc版和移动版的项目；后台使用了Hui框架结合jQuery进行开发；pc站项目使用vue.js、jQuery和layui进行编写；移动版使用vue组件化开发，没有使用vue-cli编写的第一版是陪伴项目，pc和移动版均为前后台分离模式进行开发，项目第二版移动版(客户需要)，采用更为精致的UI图纸进行项目开发(uni-app)。',
				tip: '线上教育平台，负责前、后端静态页面编写，使用jQuery渲染数据和页面交互',
				/*urls: [{
					name: 'pc版',
					url: 'http://www.szxcedu.com.cn',
				}, {
					name: '移动版',
					url: 'http://m.szxcedu.com.cn',
				}],*/
			}, {
				name: '上海丸旭',
				time: '2018.11-2018.11',
				worker: 'web前端',
				tip: 'web项目，企业官网，负责前端静态页面编写',
				/*urls: [{
					name: '官方网站',
					url: 'http://www.maruhi.com.cn/zh/',
				}],*/
			}
			/*{
				name: '基于Android天气预报app',
				time: '2019.04-2019.05',
				worker: '全栈',
				tip: '本科生毕业设计项目，使用原生PHP、MySQL技术，vue-cli、uni-app框架，Less规范进行项目开发；项目使用了MVVM的设计模式，灵活运用了PHP语言的变量的灵活性；项目的数据库设计不足10，涉及的业务比较清晰；主要的业务包括，用户登录、注册，用户收藏地址记录，热门城市设置第三方定位API、天气预报API使用。',
				// urls: [{
				// 	name: '后台管理',
				// 	url: 'https://admin.ngfrankgl.cn',
				// }],
			}*/
		],
		userinfo: {
			name: '赵国梁',
			age: '27',
			// phone: '13135140441',
			phone: '18173643868',
			// mail: '845014705@qq.com',
			mail: 'ngfrankgl@163.com',
			exp: '3年',
			side: '长沙市岳麓区',
			worker: '前端工程师',
			wages: '12k',
			edu: '本科',
		},
		tip: `
		掌握HTML5和CSS3，CSS3用到的布局是弹性布局，了解网格和多列布局；
		懂JavaScript基础，熟练使用ES6及后期版本的语法特性；
		掌握当前主流框架Vue.js，熟练使用vuex, vue-router；
		熟悉React（web方向），掌握jsx语法；
		熟悉AngularJS，熟练使用TypeScript；
		熟悉的UI框架，element-ui，iview，layui，vant；
		熟练使用原生方式开发微信小程序，也熟练使用uniapp实现一套代码多个平台；
		熟练使用PS进行修图、切图等常规操作，熟悉git和svn代码托管工具；
		扩展技术栈有nodejs、mangodb、MySQL、PHP、redis、Linux和docker；		
		既能独立开发，又能够协同工作。应项目需求，编写业务代码。掌握面向过程编程思想，生活乐观，充满正能量`,
	},
	methods: {
		itemChange(itemIndex) {
			// console.log(itemIndex)
			this.swipeIndex = itemIndex
		},
	},
	computed: {
		mTip() {
			return this.tip.split('；')
		}
	},
}).$mount('.app')
