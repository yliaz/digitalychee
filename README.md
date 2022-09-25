# 数码荔枝笔试Demo

## 在线预览

[https://demo.zhuye.dev](https://demo.zhuye.dev)

## 本地启动

```
yarn install
yarn start
```

## 关于

### 移动端和电脑端自适应

- 使用媒体查询区分移动端和电脑端
- 对于手机端：px转rem适配（使用了 postcss-pxtorem，配置在 webpack 中），并且针对不同精细度的屏幕，分别请求不同（2x或3x）的图片（使用了-webkit-device-pixel-ratio）