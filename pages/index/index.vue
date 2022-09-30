<template>
	<view class="index">
		<musichead title="R云音乐" :icon="false"></musichead>
		<view class="container">
			<scroll-view scroll-y="true">
				<view class="index-search" @tap="handleToSearch">
					<text class="iconfont iconsearch"></text>
					<input type="text" value="" placeholder="搜索歌曲" />
				</view>
				<!-- start -->
				<view class="banner">
					<swiper autoplay="true" circular interval="5500" circular="true" easing-function="linear">
						<swiper-item v-for="(item,index) in bannerList" :key="index">
							<image :src="item.pic"></image>
						</swiper-item>
				 </swiper>
				</view>
				<!-- end -->
				<view class="skeleton" v-if="loading">
					<m-for-skeleton :avatarSize="200" :row="3" :title="false" :loading="loading" isarc="square"
						:titleStyle="{}" v-for="(item,key) in 4" :key="key">
					</m-for-skeleton>
				</view>
				<view v-else class="index-list">
					<view class="index-list-item" v-for="(item,index) in topList" :key="index"
						@tap="handleToList(item.id)">
						<view class="index-list-img">
							<image :src="item.coverImgUrl" mode=""></image>
							<text>{{ item.updateFrequency }}</text>
						</view>
						<view class="index-list-text">
							<view v-for="(musicItem , index) in item.tracks" :key="index">
								{{ index + 1 }}.{{musicItem.first}} - {{musicItem.second}}
							</view>

						</view>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import musichead from '../../components/musichead/musichead.vue'
	import {
		topList,
		banner
	} from '../../common/api.js'
	import mForSkeleton from '../../components/m-for-skeleton/m-for-skeleton.vue'
	export default {
		data() {
			return {
				bannerList: [],
				topList: [],
				loading: true
			}
		},
		components: {
			musichead,
			mForSkeleton
		},
		onLoad() {
			banner().then(res => {
				this.bannerList = res[1].data.banners
			})
			topList().then((res) => {
				// console.log(res)
				if (res.length) {
					setTimeout(() => {
						this.topList = res;
						this.loading = false;
					}, 1000);
				}
			});
		},
		methods: {
			handleToList(id) {
				uni.navigateTo({
					url: `/pages/list/list?id=${id}`
				});
			},
			handleToSearch() {
				uni.navigateTo({
					url: '/pages/search/search'
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.index {
		.index-search {
			display: flex;
			background: #f7f7f7;
			height: 73rpx;
			margin: 70rpx 30rpx 30rpx 30rpx;
			border-radius: 50rpx;
			align-items: center;

			text {
				margin: 0 27rpx;
			}

			input {
				font-size: 26rpx;
				flex: 1;
			}
		}

		.index-list {
			margin: 0 30rpx;
		}

		.index-list-item {
			display: flex;
			margin-bottom: 35rpx;
		}

		.index-list-img {
			width: 212rpx;
			height: 212rpx;
			margin-right: 20rpx;
			border-radius: 15rpx;
			overflow: hidden;
			position: relative;

			image {
				width: 100%;
				height: 100%;
			}

			text {
				position: absolute;
				font-size: 22rpx;
				color: white;
				bottom: 15rpx;
				left: 15rpx;
			}
		}

		.index-list-text {
			flex: 1;
			font-size: 24rpx;
			line-height: 68rpx;
		}
	}

	.banner {
		margin: 30rpx;
		height: calc((100vw - 15px) * 420 / 1080);
		position: relative;
				border-radius: 16rpx;
				overflow:hidden;
	}

	.banner swiper {
		height: calc((100vw - 15px) * 420 / 1080);
	}

	.banner swiper swiper-item {
		position: relative;
	}

	.banner swiper .text {
		position: absolute;
		color: #ffffff;
		z-index: 22;
		bottom: 0;
		padding: 15rpx;
		width: 100vw;
		background: rgba(0, 0, 0, 0.1);
	}

	.banner image {
		width: 100%;
		height: calc((100vw - 15px) * 420 / 1080);
	}
</style>
