import config from '../config/index';

export function topList() {
	return new Promise((resolve, reject) => {
		uni.request({
			url: `${config.baseUrl}/toplist/detail`,
			method: 'GET',
			data: {},
			success: res => {
				let result = res.data.list;
				result.length = 4;
				resolve(result);
			},
			fail: (err) => {
				console.log(err);
				reject(err);
			},
			complete: () => {}
		});
	});
}

export function banner() {
	return uni.request({
		url: `${config.baseUrl}/banner?type=2`,
		method: 'GET'
	});
}

export function list(listId) {
	return uni.request({
		url: `${config.baseUrl}/top/list?id=${listId}`,
		method: 'GET'
	});
}

// 获取歌曲详情
export function songDetail(id) {
	return uni.request({
		url: `${config.baseUrl}/song/detail?ids=${id}`,
		method: 'GET'
	})
}

// 获取音乐 url
export function songUrl(id) {
	return uni.request({
		url: `${config.baseUrl}/song/url?id=${id}`,
		method: 'GET'
	})
}

// 获取歌词
export function songLyric(id) {
	return uni.request({
		url: `${config.baseUrl}/lyric?id=${id}`,
		method: 'GET'
	})
}

// 获取相似音乐
export function songSimi(id) {
	return uni.request({
		url: `${config.baseUrl}/simi/song?id=${id}`,
		method: 'GET'
	})
}

// 歌曲评论
export function songComment(id) {
	return uni.request({
		url: `${config.baseUrl}/comment/music?id=${id}`,
		method: 'GET'
	})
}

// 热搜列表(详细)
export function searchHot() {
	return uni.request({
		url: `${config.baseUrl}/search/hot/detail`,
		method: 'GET'
	})
}

export function searchWord(word) {
	return uni.request({
		url: `${config.baseUrl}/search?keywords=${word}`,
		method: 'GET'
	})
}

export function searchSuggest(word) {
	return uni.request({
		url: `${config.baseUrl}/search/suggest?keywords=${word}&type=mobile`,
		method: 'GET'
	})
}
