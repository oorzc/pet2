# pet2

一个可爱的网页宠物

![](https://cdn.jsdelivr.net/gh/oorzc/public_img@main/img/2022/08/04/20220804172622.gif)

该项目改造于以下项目
[访问原项目](https://github.com/shalldie/chuncai)

## 在线预览

[查看DEMO](https://oorzc.github.io/pet2/)

## 安装方式

1. npm方式

   npm install pet2

```js
import elves from "pet2";
```

2. html方式

```js
<script src="http://qiniu.oorzc.cn/elves/js/elves.js"></script>
```

## 使用示例

```js
let opt = {
  drag: true, //是否可拖动 true/false, 默认true
  showChat: true, //是否显示对话框 true/false, 默认true
  themeUrl: "", //自定义主题less文件链接 使用themeUrl下面的color会失效
  color: "brown", //默认棕色
  size: "auto", //默认跟随网页加载时屏幕大小，调整宠物大小，默认自动
  //菜单内容配置
  menu: {
    $title: "你想做什么呢？", // 展开菜单时，陈述的文字
    关于小精灵: function () {
      window.open("https://www.npmjs.com/package/pet2");
    },
    多久没洗澡:
      "(╯﹏╰）我已经有 " +
      Math.floor((+new Date() - 1456998485780) / (1000 * 60 * 60 * 24)) +
      "天没洗澡了~",
    拍打喂食: {
      $title: "要来点什么呢？",
      小饼干: "嗷呜~ 多谢款待  >ω<",
      胡萝卜: "人家又不是小兔子 QwQ",
    },
    说出一段话: "balabalabalabalabala......",
    说出一段话2: function () {
      elves.sayWords("我是聊天内容2");
    },
    //无线层级对话菜单
    第二级: {
      $title: "我是第二级进入标题",
      第二级功能: function () {
        alert("我是第二级");
      },
      第三级: {
        $title: "我是第三级进入标题",
        第四级: {
          $title: "我是第四级进入标题",
          第五级: "我是第五级内容",
        },
      },
    },
    帮它洗澡: {
      蓝色: function () {
        elves.changeColor("blue");
      },
      绿色: function () {
        elves.changeColor("green");
      },
      黄色: function () {
        elves.changeColor("yellow");
      },
      红色: function () {
        elves.changeColor("red");
      },
      粉红: function () {
        elves.changeColor("pink");
      },
      紫色: function () {
        elves.changeColor("violet");
      },
      黑色: function () {
        elves.changeColor("black");
      },
      棕色: function () {
        elves.changeColor("brown");
      },
    },
    改变大小: {
      超大: function () {
        elves.changeSize("large");
      },
      大: function () {
        elves.changeSize("big");
      },
      正常: function () {
        elves.changeSize("small");
      },
      小: function () {
        elves.changeSize("mini");
      },
    },
    隐藏小精灵: function () {
      elves.hide();
    },
  },
  //未使用菜单时随机聊天内容
  words: [
    "我们一起聊天吧 ヽ(✿ﾟ▽ﾟ)ノ",
    "咦你想说什么 oAo ?",
    "o(╯□╰)o主人你今天是不是忘记吃药了！",
    "你走，我没有你这么蠢的主人╮(╯▽╰)╭",
    "不要调戏我，我生气超凶的٩(๑`^´๑)۶",
    "看什么看，没见过这么可爱的的小精灵吗？(o°ω°o)",
    "咕~~(╯﹏╰)b，铲屎的，我已经很久没洗澡了，你看着办！",
  ],
};
elves.init(opt);
```

## 文档

| 参数     | 说明    | 类型   | 默认值 | 可选值    |
---|---|---|---|---
| drag     | 是否可拖动    | boolean | true   | true/false |
| showChat | 是否显示对话 | boolean | true   | true/false       |
| themeUrl | 自定义主题 less 文件链接,使用 themeUrl，下面的 color 配置会失效，可以使用changeColor切换主题 | string  | null   | 'http:xx.less'    |
| color    | 主题颜色  | string  | brown  | brown/blue/green/yellow/red/pink/violet/black/brown |
| size    | 大小  | string  | auto   | large/big/small/mini |
| menu     | 菜单配   | object  | {}     |
| words    | 未使用菜单时随机聊天内容        | array   | []     |
| sayWords    | 自定义输出语言内容      | function   |     |
| changeColor    | 修改主题色    | function   |     | color
| changeSize    | 修改大小    | function   |     | size

## 自定义主题配色

请先下载less文件

http://qiniu.oorzc.cn/elves/css/elves.less

修改其中的配置
```css
/* 棕色 */
/* 耳朵轮廓颜色 */
@color13: #260f02;
/* 眼鼻嘴 */
@color4: #260f02;
@color2: #5a3318;
/* 耳蜗颜色 */
@color3: #6a3c1c;
/* 瞳孔颜色 */
@color12: #955d27;
@color1: #9d7442;
/* 身体颜色 */
@color5: #C49152;
@color8: #ca9d65;
@color9: #cca069;
@color10: #cda36f;
@color11: #d7b58b;
@color7: #bfb48c;
/* 前胸，尾巴颜色 */
@color6: #efe1af;
```

完成后使用themeUrl引入，则color配置不生效


## 高级用法

可以接入第三方接口，配合sayWords使用，变成智能机器人






