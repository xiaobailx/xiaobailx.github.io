(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{667:function(v,_,i){"use strict";i.r(_);var l=i(1),o=Object(l.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h3",{attrs:{id:"技术栈"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#技术栈"}},[v._v("#")]),v._v(" 技术栈")]),v._v(" "),_("p",[v._v("前端：Thymeleaf + Bootstrap + Jquery")]),v._v(" "),_("p",[v._v("后端：SpringBoot + Mybatis + Lombok")]),v._v(" "),_("p",[v._v("中间件： Redis + RabbitMQ")]),v._v(" "),_("h3",{attrs:{id:"实现流程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#实现流程"}},[v._v("#")]),v._v(" 实现流程")]),v._v(" "),_("ol",[_("li",[_("p",[v._v("搭建项目")]),v._v(" "),_("ol",[_("li",[v._v("修改配置文件：Thymeleaf、数据源、线程池、Mybatis-plus、Logger")]),v._v(" "),_("li",[v._v("添加公共返回类")])])]),v._v(" "),_("li",[_("p",[v._v("分布式会话")]),v._v(" "),_("ol",[_("li",[v._v("实现登入功能：双重MD5加密、将用户信息放到Session中")]),v._v(" "),_("li",[v._v("参数校验：引入validation、定义校验手机号验证规则、定义手机校验注解、为LoginVO属性添加校验")])])]),v._v(" "),_("li",[_("p",[v._v("异常处理")]),v._v(" "),_("ol",[_("li",[v._v("全局异常处理：使用@ControllerAdvice和@ExceptionHandler注解、使用ErrorController类")])])]),v._v(" "),_("li",[_("p",[v._v("分布式Session")]),v._v(" "),_("blockquote",[_("p",[v._v("（Nginx 使用默认负载均衡策略（轮询），请求将会按照时间顺序逐一分发到后端应用上")])]),v._v(" "),_("ol",[_("li",[v._v("使用Cookie+Session保存User信息")]),v._v(" "),_("li",[v._v("实现分布式Session：\n"),_("ol",[_("li",[v._v("使用SpringSesion实现：引入session-data-redis依赖")]),v._v(" "),_("li",[v._v("将用户信息存入到Redis：引入data-redis依赖、编写RdisConfig、优化登入功能")])])])])]),v._v(" "),_("li",[_("p",[v._v("秒杀功能")]),v._v(" "),_("ol",[_("li",[v._v("商品列表首页")]),v._v(" "),_("li",[v._v("商品详情页")]),v._v(" "),_("li",[v._v("秒杀功能实现")])])]),v._v(" "),_("li",[_("p",[v._v("系统压测")])]),v._v(" "),_("li",[_("p",[v._v("页面优化")]),v._v(" "),_("ol",[_("li",[v._v("缓存商品列表页、商品详情页、订单详情页静态化")])])]),v._v(" "),_("li",[_("p",[v._v("接口优化")]),v._v(" "),_("ol",[_("li",[v._v("预加载库存、Redis操作库存、客户端轮训查询")]),v._v(" "),_("li",[v._v("使用Lua脚本实现分布式锁：编写Lua表达式、添加Lua脚本配置、调用脚本")])])]),v._v(" "),_("li",[_("p",[v._v("安全优化")]),v._v(" "),_("ol",[_("li",[v._v("隐藏秒杀地址")]),v._v(" "),_("li",[v._v("添加图形验证码：引入easy-captcha依赖、生成验证码依赖、验证码验证")]),v._v(" "),_("li",[v._v("接口限流\n"),_("ol",[_("li",[v._v("简单限流：使用计数器方式实现")]),v._v(" "),_("li",[v._v("通用限流：自定义注解@AccessLimit、实现HandlerInterceptor接口PreHandle方法、在MVC配置类中注册拦截器")])])])])])])])}),[],!1,null,null,null);_.default=o.exports}}]);