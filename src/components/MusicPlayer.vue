<template>
    <div class="app">
        <div class="music-player">
            <div class="player-header">
            <div class="music-container" id="music-container">
            <!-- 音乐信息 -->
            <div class="music-info">
                <!-- 音乐标题 -->
                <h4 id="title">{{ currentSong.title }}</h4>
                <!-- 音乐播放进度条 -->
                <div class="progress-container" id="progress-container">
                    <div class="progress" id="progress">
                        <input type="range" class="progress-bar" :value="progressPercent" @input="setProgress" ref="progressBar" />
                    </div>
                </div>
            </div>
                <!-- 音乐封面 -->
            <div class="img-container">
                 <img :src="currentSong.picture" alt="Song Cover" id="music-cover" />
            </div>

                <!-- 播放歌曲 -->
                <audio :src="currentSongUrl" ref="audioPlayer" @timeupdate="updateProgress"></audio>
            </div>
                <!-- 播放控制 -->

            <div class="navigation" >
                <button @click="prevSong" class="action-btn">prev</button>
                <button @click="playPause" class="action-btn action-btn-big">
                    {{ isPlaying ? 'Pause' : 'Play' }}
                </button>
                <button @click="nextSong" class="action-btn" >Next</button>
            </div>
            <div>
                <!-- 进度条 -->

            </div>
        </div>
        </div>
    </div>
    
</template>

<script>
export default {
    name: 'MusicPlayer',
    data() {
        return {
            isPlaying: false,
            progressPercent: 0, // 进度条
            songs: ['黑色柳丁','寂寞的季节'],
            songIndex: 0,
            currentSong: {
                title: '',
                picture: "",
            },
            currentSongUrl: '',
        };
    },
    mounted() {
        this.loadSong(this.songs[this.songIndex]); // 初始化加载歌曲
    },
    methods: {
        loadSong(song) {
            this.currentSong.title = song;
            this.currentSongUrl = require(`@/assets/music/${song}.mp3`);
            this.currentSong.picture = require(`@/assets/img/${song}.jpg`);
        },
        playPause() {
            const audioPlayer = this.$refs.audioPlayer;
            this.isPlaying = !this.isPlaying;
            this.isPlaying ? audioPlayer.play() : audioPlayer.pause();
        },
        prevSong() {
            this.songIndex--;
            if (this.songIndex < 0) {
                this.songIndex = this.songs.length - 1;
            }
            this.loadSong(this.songs[this.songIndex]);
            this.isPlaying = true;
        },
        nextSong() {
            this.songIndex++;
            if (this.songIndex > this.songs.length - 1) {
                this.songIndex = 0;
            }
            this.loadSong(this.songs[this.songIndex]);
            this.isPlaying= true;
        },
        updateProgress(e) {
            const { duration, currentTime } = e.target;
            const progressPercent = (currentTime / duration) * 100;
            this.progressPercent = progressPercent;
        },
        setProgress(e) {
            const width = this.$refs.progressBar.clientWidth;
            const clickX = e.offsetX;
            const newProgress = (clickX / width) * 100;

            // 设置音乐播放位置
            this.$refs.audioPlayer.currentTime = (newProgress / 100) * this.$refs.audioPlayer.duration;

            this.progressPercent = newProgress;
        },
    },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Lato&display=swap');

* {
    box-sizing: border-box;
}
.app {
    background-image: linear-gradient(0deg,
            rgba(247, 247, 247, 1) 23.8%,);
    height: 100vh;
    display: flex;
    /* 沿垂直主轴上下垂直排列 */
    flex-direction: column;
    /* 主轴水平居中 */
    align-items: center;
    /* 主轴垂直居中 */
    justify-content: center;
    font-family: 'Lato', sans-serif;
    margin: 0;
}

.music-container {
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 0 20px 20px 0 rgba(8, 182, 212, 0.822);
    display: flex;
    padding: 20px 30px;
    position: relative;
    margin: 70px 0;
    z-index: 10;
}

.img-container {
    position: relative;
    width: 110px;
    padding:25px 10px
}

.img-container::after {
    content: "";
    background-color: #fff;
    border-radius: 50%;
    position: absolute;
    bottom: 100%;
    left: 50%;
    width: 15px;
    height: 15px;
    /* 旋转 */
    transform: translate(-50%, 50%);
}

.img-container img {
    border-radius: 50%;
    height: 110px;
    width: inherit;
    object-fit: cover;
    position: absolute;
    bottom: 0;
    left: 0;
    /* 封面360°旋转，默认不动 */
    animation: rotate 3s linear infinite;
    animation-play-state: paused;
}

.music-container.play .img-container img {
    /* 播放 */
    animation-play-state: running;
}

/* 定义旋转动画 */
@keyframes rotate {
    from {
        transform: rotate(0);
    }

    to {
        transform: rotate(360deg);
    }
}

.navigation {
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
}

.action-btn {
    /* 取消默认样式 */
    border: 0;
    background-color: #fff;
    /* ----- */
    color: #0decfcfb;
    font-size: 20px;
    cursor: pointer;
    padding: 10px;
    margin: 0 20px;
}

.action-btn:focus {
    /* 取消默认样式 */
    outline: 0;
}

.action-btn.action-btn-big {
    color: #0cdae9;
    font-size: 30px;
}

.music-info {
    position: absolute;
    top: 0;
    left: 20px;
    /* 父元素宽度-40px */
    width: calc(100% - 40px);
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 15px 15px 0 0;
    padding: 10px 10px 10px 150px;
    /* 没播放时默认隐藏 */
    opacity: 0;
    transform: translateY(0%);
    transition: transform 0.3s ease-in, opacity 0.3s ease-in;
    z-index: 0;
}

.music-info h4 {
    /* 取消默认边距 */
    margin: 0;
}

.music-container.play .music-info {
    opacity: 1;
    transform: translateY(-100%);
}


.progress-container {
    background-color: #fff;
    border-radius: 5px;
    cursor: pointer;
    margin: 10px 0;
    height: 4px;
    width: 100%;
}

.progress {
    background-color: #658b8e;
    border-radius: 5px;
    height: 100%;
    /* 一开始进度条长度为0 */
    width: 0%;
    transition: width 0.1s linear;

}
</style>
