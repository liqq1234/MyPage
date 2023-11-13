<template>
  <div class="hello">
               <kinesis-container>
                      <kinesis-element :strength="20">
                      <img alt="Vue logo" src="./assets/logo.png" style="width: 200px; height: auto;">  
                      <kinesis-element class="custom-element" >点击图片 国风盛世-中国风歌单@LIQQ <body>
      
                      </body> </kinesis-element>
                      </kinesis-element>
                    <kinesis-element :strength="50">
                      <div>Welcome to LiQQ'music</div>
                    </kinesis-element>
           </kinesis-container>

      <div >
        <kinesis-element 
          tag="img"
          :src="song1"
          :style="{ width: '100px', height: 'auto' }"
          :strength="-10"
          type="rotate"
          transformOrigin="50% 300%"
          axis="x"
        />
        <kinesis-element 
          tag="img"
          :src="song2"
          :style="{ width: '100px', height: 'auto' }"
          :strength="10"
          type="rotate"
          transformOrigin="50% 300%"
          axis="x"
        />
        <kinesis-element 
          tag="img"
          :src="song3"
          :style="{ width: '100px', height: 'auto' }"
          :strength="10"
          type="depth"
          transformOrigin="50% 300%"
        />
            </div>
          
  </div>
  
</template>

<script>
export default {
  name: 'HelloWorld】',
  props: {
    msg: String,
  },
  data(){
  return{
      song1: require(`@/assets/song1.jpg`),
      song2: require(`@/assets/song2.jpg`),
      song3: require(`@/assets/song3.jpg`),
      song4: require(`@/assets/song4.jpg`),
      song5: require(`@/assets/song5.jpg`),
  }
   
  }
}
</script>

<style scoped>
.image{
 width: 150px;
height: 150px;
}
</style>
