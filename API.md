# iCator接口文档

## 基本返回格式

### 基本响应模板

```json
{
    "code":200,
    "msg":"Successfully responded.",
    "data":{}
}
```

### code

同`http`状态码。

### msg

服务端给予的关于此次请求的信息。

### data

返回的数据。

## 数据结构及属性含义

### 猫猫

```json
{
    "cid":1,
    "name":"凯特",
    "photo":1,
    "gender":1,
    "status":"活跃在30栋宿舍楼下",
    "color":"灰色",
    "remark":"性格温和，但不喜欢人接近"
}
```

| 属性 |  类型 | 值及含义 |
|------|------|----------|
|  cid  |number| 每只猫猫唯一的id |
| name |string| 猫猫的名字 |
|photo |number| 猫猫照片id |
|gender|number| 猫猫的性别代码：`0` - `未知`、`1` - `公`、`2` - `母` |
|status|string| 猫猫的状态描述 |
|color |string| 猫猫的毛色描述 |
|remark|string| 备注 |

### 照片

```json
{
    "cid":1,
    "pid":1,
    "date":1636856026888,
    "uploader":"一个不知道姓名的匿名人士",
    "url":"https://www.cat.love/cat.jpg",
    "remark":"拍摄于30栋楼下草坪"
}
```

| 属性   |  类型 | 值及含义 |
|--------|------|----------|
|cid     |number| 所属猫猫id |
| pid    |number| 每张照片唯一的id |
| date   |number| 照片上传时的时间戳 |
|uploader|string| 上传者 |
|url     |string| 图片地址 |
|remark  |string| 备注 |

## 公开接口

### 获取猫猫列表

返回所有猫猫的基本信息

* 请求路径：`/getCats`
* 请求方法：`post`
* 请求参数：`无`
* 响应数据：

```json
{
    "code":200,
    "msg":"Successfully responded.",
    "data":[
        {
            "cid":1,
            "name":"凯特",
            "photo":1
        },
        {
            "cid":2,
            "name":"汤姆",
            "photo":2
        }
    ]
}
```

### 获取猫猫信息

通过cid返回猫猫的详细信息

* 请求路径：`/getCatInfo`
* 请求方法：`post`
* 请求参数：

|参数名|说明|类型|可选择性|
|-----|----|----|-------|
|cid|猫猫id|number|必选|

* 响应数据：

```json
{
    "code":200,
    "msg":"Successfully responded.",
    "data":{
        "cid":1,
        "name":"凯特",
        "photo":1,
        "gender":1,
        "status":"活跃在30栋宿舍楼下",
        "color":"灰色",
        "remark":"性格温和，但不喜欢人接近"
    }
}
```

### 获取一只猫猫的照片列表

返回一只猫猫的所有照片

* 请求路径：`/getCatPhotos`
* 请求方法：`post`
* 请求参数：

|参数名|说明|类型|可选择性|
|-----|----|----|-------|
|cid|猫猫id|number|必选|

* 响应数据：

```json
{
    "code":200,
    "msg":"Successfully responded.",
    "data":[
        {
            "pid":1,
            "date":1636856026888,
            "url":"https//www.cat.love/cat1.jpg"
        },
        {
            "pid":2,
            "date":1636856026888,
            "url":"https//www.cat.love/cat2.jpg"
        }
    ]
}
```

### 获取图片信息

通过pid获取照片详细信息

* 请求路径：`/getPhotoInfo`
* 请求方法：`post`
* 请求参数：

|参数名|说明|类型|可选择性|
|-----|----|----|-------|
|pid|图片id|number|必选|

* 响应数据：

```json
{
    "code":200,
    "msg":"Successfully responded.",
    "data":{
        "cid":1,
        "pid":1,
        "date":1636856026888,
        "uploader":"一个不知道姓名的匿名人士",
        "url":"https://www.cat.love/cat.jpg",
        "remark":"拍摄于30栋楼下草坪"
    }
}
```
