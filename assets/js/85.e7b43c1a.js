(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{622:function(t,a,e){"use strict";e.r(a);var l=e(1),s=Object(l.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h3",{attrs:{id:"主从复制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#主从复制"}},[t._v("#")]),t._v(" 主从复制")]),t._v(" "),a("p",[t._v("统一服务器内部署两个MySQL服务器实例，master、slave，master 服务器进行写操作，slave 服务器进行读操作。当 master 执行 DML、DDL 操作时，事务过程会保存到 relay log 中。")]),t._v(" "),a("p",[t._v("slave 服务器执行： start slave 命令，从服务器后台会新建两个线程，其中一个将主服务器中的 bin log 复制到 relay log 中，另外一个线程将 relay log 中的操作过程持久化到 slave 服务器中。")]),t._v(" "),a("blockquote",[a("p",[t._v("DML：数据操作语言，包括对数据的增删改查")]),t._v(" "),a("p",[t._v("DDL：数据定义语言，包括数据库、表的建立和删除")]),t._v(" "),a("p",[t._v("DCL: 数据控制语言，包括对数据库表的权限管理")])]),t._v(" "),a("p",[t._v("先写到 relay log，然后在写到数据库中，问题：延迟")]),t._v(" "),a("p",[t._v("一主多从、双主复制、多级复制")])])}),[],!1,null,null,null);a.default=s.exports}}]);