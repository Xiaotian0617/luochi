<template>
  <div>
    <table class="full-width list-table">
      <thead>
        <tr>
          <th>序号</th>
          <th>设备名称</th>
          <th>温度</th>
          <th>分数</th>
          <th>原始分数</th>
          <th>百分比</th>
          <!-- <th>问题建议</th> -->
        </tr>
      </thead>
      <tr
        v-for="item in data"
        :class="item.realTimeScore>60?'':'font-red'"
        @click="getDevice('a'+item.sort)"
      >
        <td style="text-align:center">{{item.sort}}</td>
        <td>{{item.equipmentName}}</td>
        <td>{{item.temperature}}</td>
        <td>
          {{item.realTimeScore}}
          <img
            :src="item.realTimeScore-item.startScore<0? down : up"
            class="di-item-ico-table"
          >
        </td>
        <td>{{item.startScore}}</td>
        <td>{{item.percent}} %</td>
        <!-- <td class="text-hidden">{{item.problem}}</td> -->
      </tr>
    </table>
  </div>
</template>

<script>
import up from "static/img/up.png";
import down from "static/img/down.png";
export default {
  props: ["data"],
  data() {
    return {
      up,
      down
    };
  },
  methods: {
    getDevice(selector) {
      // var device = this.$el.querySelector("#a1");
      // document.body.scrollTop = device.offsetTop // chrome
      // document.documentElement.scrollTop = device.offsetTop // firefox
      document.querySelector(selector).scrollIntoView(true);
    }
  }
};
</script>



<style scope>
.di-item-ico-table {
  width: 10px;
}
</style>
