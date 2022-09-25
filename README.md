# 数码荔枝笔试Demo

## 在线预览

[https://demo.zhuye.dev](https://demo.zhuye.dev)

> 写在前面，开发过程中一些问题：
> 1. PC端的 UI设计图，长宽比为 1068*640，好像不太常见，为保证尽量贴近UI的效果，均使用了2x尺寸；
> 2. 文档中提供的第二步骤的接口，应该是进行了跨域的限制。postman 中可以正常请求，在浏览器中我强制关闭了 Chrome 的跨域限制才可以正常请求到。感觉需要修改一下后端配置，不然本地无法正常测试；

## 开发

### 本地启动

```
yarn install
yarn start
```

> ⚠️ 需要注意：文档中提供的第二个接口，有跨域限制，如需开发调试，应该需要后端解除跨域限制，或者需要强制关闭 Chrome 的限制，参见：[disable-same-origin-policy-in-chrome](https://stackoverflow.com/questions/3102819/disable-same-origin-policy-in-chrome)

## 测试

### 测试视频

[数码荔枝Demo测试视频（mbp，Chrome浏览器）](https://zhuye-1308301598.file.myqcloud.com/videos/%E6%95%B0%E7%A0%81%E8%8D%94%E6%9E%9DDemo%E6%B5%8B%E8%AF%95.mp4)

### 各平台截图

#### iOS（iPhone 13 mini 真机，safari 浏览器）

![661664128542_.pic](https://zhuye-1308301598.file.myqcloud.com/markdown/661664128542_.pic.jpg)

#### 安卓（小米 MIX4 真机，移动端 Edge浏览器）

![651664128533_.pic](https://zhuye-1308301598.file.myqcloud.com/markdown/651664128533_.pic.jpg)

#### Chrome

![image-20220926022900117](https://zhuye-1308301598.file.myqcloud.com/markdown/image-20220926022900117.png)

#### FireFox

![image-20220926022955444](https://zhuye-1308301598.file.myqcloud.com/markdown/image-20220926022955444.png)

#### Edge

![image-20220926023049768](https://zhuye-1308301598.file.myqcloud.com/markdown/image-20220926023049768.png)

## 关于

### 移动端和电脑端自适应

- 使用媒体查询区分移动端和电脑端
- 对于手机端：px转rem适配（使用了 postcss-pxtorem，配置在 webpack 中），并且针对不同精细度的屏幕，分别请求不同（2x或3x）的图片（使用了-webkit-device-pixel-ratio 和 min--moz-device-pixel-ratio 以保证浏览器兼容，当然，即使不兼容也是默认2x图）







