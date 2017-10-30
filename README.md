# d3-learn
d3.js demo

## SVG 简介
- 使用XML描述的`矢量图`
- W3C标准（1.1）
- 浏览器支持情况
    - ie9+
    - chrome 33.0+
    - Firefox 28.0+
    - Safari 7.0+

## 使用方式
- 浏览器直接打开
- 在HTML中使用 `<img>` 标签引用
- 直接在HTML中使用SVG标签
- 作为CSS背景

## 基本图形和属性
- 基本图形
    - `<rect>` 矩形
    - `<circle>` 圆形
    - `<ellipse>` 椭圆
    - `<line>` 直线
    - `<polyline>` 折线
    - `<polygon>` 多边形
- 基本属性
    - fill
    - stroke
    - stroke-width
    - transform

- `<rect>` 矩形
    - x
    - y
    - width
    - height
    - rx
    - ry
- `<circle>` 圆形
    - cx
    - cy
    - r
- `<ellipse>` 椭圆
    - cx
    - cy
    - rx
    - ry
- `<line>` 直线
    - x1
    - y1
    - x2
    - y2
- `<polyline>` 折线
    - points = "x1 y1 x2 y2 x3 y3 x4 y4"
- `<polygon>` 多边形
    - points = "x1 y1 x2 y2 x3 y3 x4 y4"
    - 第一个点和最后一个点连接起来

## 视野、世界与视窗
- width、height - 控制视窗
- SVG 代码 - 定义世界
- viewBox，preserveAspectRatio - 控制视野

## 图形分组
- `<g>`标签来创建分组
- 属性继承
- transform 属性定义坐标变换
- 可以嵌套使用

## 坐标系统
- y轴乡下的笛卡尔直角坐标系。
- 角度方向是顺时针，x轴正方向向y轴正方向选择

## 四个坐标系
- 用户坐标系
    - 世界坐标系
- 自身坐标系
    - 每个图形元素或分组独立与生俱来
- 前驱坐标系
    - 父容器的坐标系
- 参考坐标系
    - 使用其他坐标系来考究自身的情况时使用


## 例子
- [d3-netchart](./example/d3-netchart/readme.md)

## 资料
- [SVG 研究之路 (8) - text 文字](http://www.oxxostudio.tw/articles/201406/svg-08-text.html)