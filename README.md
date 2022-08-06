# Pet

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
import pet from "pet2";
```

2. html方式

```js
<script src="http://qiniu.oorzc.cn/pet/js/pet.js"></script>
```

## 使用示例

```js
var opt = {
    drag: true,
    showChat: true,
    // themeUrl: "./src/pet.less",
    color: "brown",
    size: "auto",
    menu: {
        $title: '你想做什么呢？',
        '关于小精灵': function () {
            window.open("https://www.npmjs.com/package/pet2");
        },
        '多久没洗澡': '(╯﹏╰）我已经有 ' + Math.floor((+new Date - 1456998485780) / (1000 * 60 * 60 * 24)) + '天没洗澡了~',
        '拍打喂食': {
            $title: '要来点什么呢？',
            '小饼干': '嗷呜~ 多谢款待  >ω<',
            '胡萝卜': '人家又不是小兔子 QwQ'
        },
        唤起输入框: ["你想知道什么呢？", (val, done) => {
            // val, 输入值
            // done 关闭对话框函数
            pet.sayWords(val);
            done()
        }],
        说出一段话: "balabalabalabalabala......",
        说出一段话2: function () {
            pet.sayWords("我是聊天内容2");
        },
        无线级菜单: {
            $title: "我是第二级进入标题",
            第二级功能: function () {
                alert("我是第二级")
            },
            第三级: {
                $title: "我是第三级进入标题",
                第四级: {
                    $title: "我是第四级进入标题",
                    第五级: "我是第五级内容",
                },
            },
        },
        "帮它洗澡": {
            $title: "洗啊洗啊洗澡澡",
            "蓝色": function () {
                pet.changeColor("blue");
            },
            "绿色": function () {
                pet.changeColor("green");
            },
            "黄色": function () {
                pet.changeColor("yellow");
            },
            "红色": function () {
                pet.changeColor("red");
            },
            "粉红": function () {
                pet.changeColor("pink");
            },
            "紫色": function () {
                pet.changeColor("purple");
            },
            "黑色": function () {
                pet.changeColor("black");
            },
            "棕色": function () {
                pet.changeColor("brown");
            }
        },
        "改变大小": {
            $title: "变变变",
            "超大": function () {
                pet.changeSize("large");
            },
            "大": function () {
                pet.changeSize("big");
            },
            "正常": function () {
                pet.changeSize("small");
            },
            "小": function () {
                pet.changeSize("mini");
            },
        },
        "还原设置": {
            $title: "你想还原哪项设置？",
            所有: function () {
                pet.clearAll();
                pet.sayWords("操作成功");
            },
            大小: function () {
                pet.clearAll("size");
                pet.sayWords("操作成功");
            },
            颜色: function () {
                pet.clearAll("color");
                pet.sayWords("操作成功");
            },
            位置: function () {
                pet.clearAll("pos");
                pet.sayWords("操作成功");
            },
        },
        '隐藏小精灵': function () {
            pet.hide();
        },
    },
    words: [
        "我们一起聊天吧 ヽ(✿ﾟ▽ﾟ)ノ",
        "咦你想说什么 oAo ?",
        "o(╯□╰)o主人你今天是不是忘记吃药了！",
        "你走，我没有你这么蠢的主人╮(╯▽╰)╭",
        "不要调戏我，我生气超凶的٩(๑`^´๑)۶",
        "看什么看，没见过这么可爱的的小精灵吗？(o°ω°o)",
        "咕~~(╯﹏╰)b，铲屎的，我已经很久没洗澡了，你看着办！",
    ]
};
pet.init(opt);
```

## 文档

调用 init 方法初始化。 chuncai.init(opt:IOpt)

words 是一个数组: Array，存放闲暇时候说的话。
menu 是菜单，其中：
1. array 表示唤起输入框,array[0]表示要说的话，array[1]回调函数（有两个参数val、done，val表示输入框值，调用done()可关闭输入框）
2. object 表示子菜单
3. key $title 是在展开子菜单的时候，要说的话
4. string 表示点击后要说的话
5. Function 是点击后要执行的方法

| 参数     | 说明    | 类型   | 默认值 | 可选值    |
---|---|---|---|---
| drag     | 是否可拖动    | boolean | true   | true/false |
| showChat | 是否显示对话 | boolean | true   | true/false       |
| themeUrl | 自定义主题 less 文件链接,使用 themeUrl，下面的 color 配置会失效，可以使用changeColor切换主题 | string  | null   | 'http:xx.less'    |
| color    | 主题颜色  | string  | brown  | brown/blue/green/yellow/red/pink/purple/black/brown |
| size    | 大小  | string  | auto(根据初始化时，屏幕大小自动调整宠物大小)   | auto/large/big/small/mini |
| menu     | 菜单配   | object  | {}     |
| words    | 未使用菜单时随机聊天内容        | array   | []     |
| sayWords    | 自定义输出语言内容      | function   |     |
| changeColor    | 修改主题色    | function   |     | 参考上面color参数值
| changeSize    | 修改大小    | function   |     | 参考上面size参数值
| show    | 显示    | function   |     |
| showText    | 显示时的对话    | string   | 啊啦,我又来啦～    |
| hide    | 隐藏    | function   |     |
| hideText    | 隐藏时的对话    | string   |  记得叫我出来哦~  |
| clearAll    | 清除缓存    | function   |  all   | all/size/color/pos（pos表示移动坐标)

## 自定义主题配色

请先下载less文件

[下载主题less文件](http://qiniu.oorzc.cn/pet/css/pet.less)

修改其中的配置

```css
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

## 赞助打赏

![](https://cdn.jsdelivr.net/gh/oorzc/public_img@main/img/2022/08/06/20220806213615.jpeg)