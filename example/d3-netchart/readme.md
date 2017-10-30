# d3-netchart.js
此组件依赖d3.v3.js

![](https://img.shields.io/badge/chrome-ok-green.svg)
![](https://img.shields.io/badge/Firefox-ok-green.svg)

## 使用方法

1、引入文件
``` html
<script src="d3.v3.min.js" charset="utf-8"></script>
<script src="d3-netchat.js"></script>
```
2、HTML
``` html
<div id="container"></div>
```
3、Javascript
``` javascript
var c1 = new D3netchart({
    elId: 'container1',
    title: {
        text: '啤酒行业利空',
        color: '#3c6c50',
        fontSize: '20px',
        fontWeight: 'bold'
    },
    backgroundColor: '#171b20',
    lineColor: '#1a2a28',
    originBoll: {
        backgroundColor: '#1d232a',
        color: '#38664b',
        borderColor: '#38664b',
        borderWidth: 4,
    },
    childBoll: {
        backgroundColor: '#59ce9e',
        color: '#59ce9e',
    },
    grandsonBoll: {
        backgroundColor: '#56dad5',
        color: '#56dad5',
    },
    data: [
        {
            title: '啤酒需求下降',
            child: ''
        },{
            title: '啤酒需求下降',
            child: {
                title: '(小麦胚芽油的上游需求是小麦)',
                subtitle: [
                    '小米胚芽油需求上升'
                ]
            }
        },{
            title: '啤酒需求下降',
            child: {
                title: '(小麦胚芽油的上游需求是小麦)',
                subtitle: [
                    '小米胚芽油需求上升'
                ]
            } 
        },{
            title: '啤酒需求下降',
            child: {
                title: '(小麦胚芽油的上游需求是小麦)',
                subtitle: [
                    '小米胚芽油需求上升'
                ]
            } 
        },{
            title: '啤酒需求下降',
            child: {
                title: '(小麦胚芽油的上游需求是小麦)',
                subtitle: [
                    '小米胚芽油需求上升'
                ]
            } 
        },{
            title: '啤酒需求下降',
            child: {
                title: '(小麦胚芽油的上游需求是小麦)',
                subtitle: [
                    '小米胚芽油需求上升'
                ]
            } 
        },{
            title: '啤酒需求下降',
            child: {
                title: '(小麦胚芽油的上游需求是小麦)',
                subtitle: [
                    '小米胚芽油需求上升'
                ]
            } 
        },{
            title: '啤酒需求下降',
            child: {
                title: '(小麦胚芽油的上游需求是小麦)',
                subtitle: [
                    '小米胚芽油需求上升'
                ]
            } 
        }
    ]
});
```

## 参数说明
| 参数              | 说明          | 备注   |
| ----------------- |:-------------:| -----:|
| elId              | 绑定的元素 | 必填 |
| title             | 中心圆的文字设置，可设置的属性text、color、fontSize、fontWeight | 默认参数：`{text: '',color: '#3c6c50',fontSize: '20px',fontWeight: 'bold'} `|
| backgroundColor   | 背景颜色      | 默认：'#171b20' |
| lineColor         | 内圈、外圈和辐射线的颜色 | 默认：'#1a2a28' |
| originBoll        | 中心圆的属性设置，可设置的属性backgroundColor、color、borderColor、borderWidth | 默认参数：`{ backgroundColor: '#1d232a', color: '#38664b', borderColor: '#38664b', borderWidth: 4}` |
| childBoll         | 内层球的属性设置，可设置的属性backgroundColor、color | 默认参数：`{backgroundColor: '#59ce9e',color: '#59ce9e'}` |
| grandsonBoll      | 外层球的属性设置，可设置的属性backgroundColor、color | 默认参数：`{backgroundColor: '#56dad5',color: '#56dad5'}` |
| data              | 小球上的数据 | 具体见`使用说明`中的参数 |

## 历史更新
