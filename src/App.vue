<template>
  <div>
  <button @click="show = !show">切り替え</button>
  <transition name="fade" appear>
    <p v-if="show">hello</p>
  </transition>
  <transition name="slide" type="animation" appear>
    <p v-if="show">bye</p>
  </transition>
  </div>
  <br><br>
  <transition
    :css="false"
    @before-enter="beforeEnter"
    @enter="enter"
    @after-enter="afterEnter"
    @enter-cancelled="enterCancelled"
    
    @before-leave="beforeLeave"
    @leave="leave"
    @after-leave="afterLeave"
    @leave-cancelled="leaveCancelled"
  >
    <div class="circle" v-if="show"></div>
  </transition>
  <LikeHeader>
    <template v-slot:title>
      <p>よろしく</p>
      <h1>トータルのいいね数</h1>
    </template>
  </LikeHeader>
  <LikeNumber :total-number="number" @my-click="incrementNumber"></LikeNumber>
  <LikeNumber :total-number="number"></LikeNumber>
  <LikeFooter>
    <h3>初めまして</h3>
  </LikeFooter>
  <button @click="currentComponent = 'Home'">Home</button>
  <button @click="currentComponent = 'About'">About</button>
  <keep-alive>
    <component :is="currentComponent"></component>
  </keep-alive>
  <div>
    <h2>イベントのフォーム</h2>
    <EventTltle v-model="eventData.title"></EventTltle>
    <label for="detail">イベントの内容</label>
    <textarea id="detail" cols="" rows="10" v-model="eventData.detail"></textarea>
    <!-- vmodel.lazy(フォーカスが外れた時に変更) .number(数字に変換) .trim(端のスペース排除) -->
    <pre>{{ eventData.detail }}</pre>
    <input type="checkbox" id ="isPrivate" v-model="eventData.isPrivate">
    <label for="isPrivate">非公開</label>
    <p>{{ eventData.isPrivate }}</p>
    <p>参加条件</p>
    <input type="checkbox" id="10" value="10代" v-model="eventData.target">
    <label for="10">10代</label>
    <input type="checkbox" id="20" value="20代" v-model="eventData.target">
    <label for="20">20代</label>
    <input type="checkbox" id="30" value="30代" v-model="eventData.target">
    <label for="30">30代</label>
    <p>{{ eventData.target }}</p>
    <p>開催場所</p>
    <select v-model="eventData.location" multiple>
      <option v-for="location in locations" :key="location">{{ location }}</option>
    </select>
    <p>{{ eventData.location }}</p>
  </div>
</template>

<script>
import LikeHeader from "./components/LikeHeader.vue";
import LikeFooter from "./components/LikeFooter.vue";
import Home from "./components/Home.vue";
import About from "./components/About.vue";
import EventTitle from "./components/EventTitle.vue";

export default {
  data() {
    return {
      show: true,
      number: 15,
      currentComponent: "Home",
      locations: ["東京","大阪","名古屋"],
      eventData: {
        title: "タイトル",
        detail: "",
        isPrivate: false,
        target: [],
        location: []
      }
    }
  },
  components: {
    LikeHeader,
    LikeFooter,
    Home,
    About,
    EventTitle
  },
  methods: {
    incrementNumber(value){
      this.number = value
    },
    beforeEnter(el) {
      // 現れる前
      el.style.transform = 'scale(0)';
    },
    enter(el, done) {
      // 現れる時
      let scale = 0;
      const interval = setInterval(() => {
        el.style.transform = 'scale(${scale})';
        scale += 0.1;
        if ( scale > 1) {
          clearInterval(interval);
          done();
        }
      }, 200);
    },
    /*
    afterEnter(el) {
      // 現れた後
    },
    enterCancelled(el) {
      // 現れるアニメーションがキャンセルされた時
    },
    
    beforeLeave(el) {
      // 消える前
    },*/
    leave(el, done) {
      // 消える時
      let scale = 1;
      const interval = setInterval(() => {
        el.style.transform = 'scale(${scale})';
        scale -= 0.1;
        if ( scale < 0) {
          clearInterval(interval);
          done();
        }
      }, 200);
    },
    /*
    afterLeave(el) {
      // 消えた後
    },
    leaveCancelled(el) {
      // 消えるアニメーションがキャンセルされた時
    },*/
  }
}
</script>

<style scoped>
.circle {
  width: 200px;
  height: 200px;
  margin: auto;
  border-radius: 100px;
  background-color: deeppink;
}
.fade-enter-from{
  /* 現れる時の最初の状態 */
  opacity: 0;
}
.fade-enter-active {
  /* 現れる時のトランジッションの状態 */
  transition: opacity 5s;
}
.fade-enter-to {
  /* 現れる時の最後の状態 */
  opacity: 1;
}
.fade-leave {
  /* 消える時の最初の状態 */
  opacity: 1;
}
.fade-leave-active {
  /* 消える時のトランジッションの状態 */
  transition: opacity 1s;
}
.fade-leave-to {
  /* 消える時の最後の状態 */
  opacity: 0;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
}
.slide-enter-active {
  animation: slide-in 0.5s;
  transition: opacity 5s;
}
.slide-leave-active {
  animation: slide-in 0.5s reverse;
  transition: opacity 5s;
}

@keyframes slide-in {
  from {
    transform: translateX(100px);
  }
  to {
    transform: translateX(0);
  }
}
</style>
