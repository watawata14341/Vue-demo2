<template>
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
    }
  }
}
</script>

<style scoped>
</style>
