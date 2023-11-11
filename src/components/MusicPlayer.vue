<template>
    <div class="music-player">
        <div class="player-header">
            <h1>{{ Player.title }}</h1>
            <h2>{{ currentSong.title }}</h2>
            <p>{{ currentSong.artist }}</p>
            <img :src="currentSong.picture" alt="Song Cover" style="width: 200px; height: auto;" />
        </div>
        <div class="player-controls">
            <button @click="playPause">
                {{ isPlaying ? 'Pause' : 'Play' }}
            </button>
            <button @click="nextSong">Next</button>
        </div>
        <audio :src="currentSong.url" ref="audioPlayer"></audio>
    </div>
</template>

<script>
export default {
    name: 'MusicPlayer',
    data() {
        return {
            isPlaying: false,
            Player: {
                title: '音乐播放器',
            },
            currentSong: {
                title: '黑色柳丁',
                picture: require('@/assets/MusicPlayer_src/黑色柳丁.png'),
                artist: '陶喆',
                url: require('@/assets/MusicPlayer_mp3/黑色柳丁.mp3'),
            },
        };
    },
    methods: {
        playPause() {
            const audioPlayer = this.$refs.audioPlayer;
            this.isPlaying = !this.isPlaying;
            this.isPlaying ? audioPlayer.play() : audioPlayer.pause();
        },
        nextSong() {
            // Implement logic to switch to the next song in your playlist
        },
    },
};
</script>

<style scoped>

</style>
