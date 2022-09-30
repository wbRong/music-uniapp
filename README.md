
## 数据接口
网易云音乐 API
- [网易云音乐 NodeJS 版 API docs](https://neteasecloudmusicapi-docs.4everland.app/#/)  
- [网易云音乐 NodeJS 版 API GitHub](https://github.com/Binaryify/NeteaseCloudMusicApi)

### 技术栈
**uniApp** 开发多端应用

### 获取 banner( 轮播图 ) 数据
```
参数 type:
	0: pc
	1: android
	2: iphone
	3: ipad
```
调用例子 : `/banner`, `/banner?type=2`

### 所有榜单内容摘要
调用例子 : `/toplist/detail`

### 排行榜详情
调用例子 : `/top/list?id=2809577409`

### 获取歌曲详情
调用例子 : `/song/detail?ids=347230`,`/song/detail?ids=347230,347231`

### 获取音乐 url
调用例子 : `/song/url?id=33894312` , `/song/url?id=405998841,33894312`

### 获取相似音乐
调用例子 : `/simi/song?id=347230` ( 对应 ' 光辉岁月 ' 相似歌曲 )

### 获取歌词
必选参数 id: 音乐 id  
调用例子 : `/lyric?id=33894312`

### 歌曲评论
调用例子 : `/comment/music?id=186016&limit=1` 对应晴天评论

### 搜索
调用例子 : `/search?keywords=海阔天空`, `/cloudsearch?keywords=海阔天空`

### 热搜列表(详细)
调用例子 : `/search/hot/detail`

### more