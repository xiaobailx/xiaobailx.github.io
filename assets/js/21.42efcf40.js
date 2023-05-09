(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{559:function(s,a,t){"use strict";t.r(a);var n=t(1),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h3",{attrs:{id:"常用命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用命令"}},[s._v("#")]),s._v(" 常用命令")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("//初始化工作区  \n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" init\n//查看工作区状态\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" status\n//将文件添加到暂存区\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("file"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n//将文件从暂存区中移除\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--cached")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("file"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n//将文件提交到本地库\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-m")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"version"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("file"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n//查看精简日志信息\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" reflog  \n//查看详细日志信息\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" log  \n\n//本地回滚\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" reset  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("versionID"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n//本地远程回滚\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" revert  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("versionID"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br")])]),a("h3",{attrs:{id:"分支操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分支操作"}},[s._v("#")]),s._v(" 分支操作")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("//查看分支\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v("\n//创建分支\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("branchName"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n//切换分支 \n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("branchName"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n//创建分支同时切换分支\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-b")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("branchName"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n//合并分支，需在被合并的分支上进行操作\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" merge "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("branchName"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n//合并分支，需在被合并的分支上进行操作\nget rebase "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("barchName"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("h3",{attrs:{id:"分离head"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分离head"}},[s._v("#")]),s._v(" 分离HEAD")]),s._v(" "),a("p",[s._v("分离的 HEAD 就是让其指向了某个具体的提交记录而不是分支名")]),s._v(" "),a("blockquote",[a("p",[s._v("HEAD 是一个对当前检出记录的符号引用 —— 也就是指向你正在其基础上进行工作的提交记录。")]),s._v(" "),a("p",[s._v("HEAD 总是指向当前分支上最近一次提交记录。大多数修改提交树的 Git 命令都是从改变 HEAD 的指向开始的。")]),s._v(" "),a("p",[s._v("HEAD 通常情况下是指向分支名的（如 bugFix）。在你提交时，改变了 bugFix 的状态，这一变化通过 HEAD 变得可见。")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("//查看HEAD指向\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" .git/HEAD\n//分离HEAD\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("referenceID"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h3",{attrs:{id:"相对引用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#相对引用"}},[s._v("#")]),s._v(" 相对引用")]),s._v(" "),a("ul",[a("li",[s._v("使用 "),a("code",[s._v("^")]),s._v(" 向上移动 1 个提交记录")]),s._v(" "),a("li",[s._v("使用 "),a("code",[s._v("~<num>")]),s._v(" 向上移动多个提交记录，如 "),a("code",[s._v("~3")])])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("//将HEAD指向所在分支的父提交\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("branchName"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("^\n//将HEAD回退到所在分支num步\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("branchName"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("~"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("num"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n//强制将分支指向一个提交\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("branchName"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("referenceID"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("~"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("num"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h3",{attrs:{id:"撤销变更"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#撤销变更"}},[s._v("#")]),s._v(" 撤销变更")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("//撤回本地仓库提交记录\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" reset "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("referenceId"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n//撤回提交记录，同时对远程仓库生效\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" revert "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("referenceId"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h3",{attrs:{id:"整理提交记录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#整理提交记录"}},[s._v("#")]),s._v(" 整理提交记录")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("//将提交复制到当前所在的位置\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" cherry-pick "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("referenceID"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n//使用交互式方式调整\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" rabase "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-i")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("referenceId"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n//给提交设置标签名\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" tag tagName "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("referenceId"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n//当前所在位置的锚点描述\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" describe\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h3",{attrs:{id:"远程仓库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#远程仓库"}},[s._v("#")]),s._v(" 远程仓库")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("//将远程仓库克隆至本地库\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("url"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n//将本地仓库中的远程分支更新成远程仓库相应分支最新的状态\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" fetch\n//将远程仓库代码拉取到本地库，fetch + merge\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" pull "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("nickname"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("branchName"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n//解决代码偏移，fetch + rebase\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" pull "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--rebase")]),s._v("\n//将本地库代码上传至远程仓库\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("nickname"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("branchName"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n//代码追踪\n//通过远程仓库检出新的分支\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-b")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("branchName"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("remote"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n//设置远程追踪分支\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-u")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("remote"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("branchName"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("h3",{attrs:{id:"跨团队协作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#跨团队协作"}},[s._v("#")]),s._v(" 跨团队协作")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("//查看当前所有远程地址别名\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v(" \n//创建远程仓库别名\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("nickname"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("url"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n//解决代码冲突\n//1.编辑含代码冲突文件，手动消除冲突然后保存\n//2.将修改后的文件添加至暂存区\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("file"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n//3.将文件提交至本地库\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-m")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("branchName"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n//解决Remote Rejected\n//1.创建新的分支并上传至远程分支\n//2.重置远程仓库\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" reset "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("remote"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n//3.将remote分支更新到最新状态\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])]),a("p",[a("a",{attrs:{href:"https://learngitbranching.js.org/",target:"_blank",rel:"noopener noreferrer"}},[s._v(" Git详解及版本控制规范"),a("OutboundLink")],1)]),s._v(" "),a("p",[a("a",{attrs:{href:"https://blog.csdn.net/best_luxi/article/details/123747486",target:"_blank",rel:"noopener noreferrer"}},[s._v("一个让学 Git 命令变得好玩又有趣的神奇网站"),a("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=e.exports}}]);