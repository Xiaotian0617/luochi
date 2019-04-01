<template>
  <div>
    <p class="p30 pb20 f18 fb m0">{{name}} 数据分析报告</p>
    <div >
      <a :href="'#/index/details?deviceName=' + this.deviceName" >
          <img :src="'static/img/thirdPng/1.png'">
          <img :src="'static/img/thirdPng/2.png'" style="float: left;position: absolute;">
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      id: null,
      name: null,
      deviceName: null,
      list: null
    };
  },
  watch: {
    $route(val) {
      this.init();
    }
  },

  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.deviceName = this.$route.query.deviceName;
    },

    getItemWidth(i) {
      //3,4,2,4

      let w = 0;
      if (i <= 2) {
        w = "32.33%";
      } else if (i > 2 && i <= 6) {
        w = "24%";
      } else if (i > 6 && i <= 8) {
        w = "49%";
      } else if (i > 8 && i <= 12) {
        w = "24%";
      }

      // let w = '49%';

      return w;
    }
  }
};
</script>

<style scoped>
.rs-wrap {
  padding: 0 25px 25px 25px;
}
.rs-wrap:after {
  content: "";
  display: block;
  clear: both;
}
.rs-item {
  float: left;
  margin: 1% 1% 0 0;
}
</style>
