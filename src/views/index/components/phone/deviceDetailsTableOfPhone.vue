<template>
  <div>
    <div v-for="item in data">
      <table class="full-width detail-table">
        <thead>
          <th colspan="2">
            {{item.sort}}.设备名称: {{item.equipmentName}}
            <span class="font-red">
              {{item.realTimeScore}}
              <img :src="item.realTimeScore-item.startScore<0? down : up" class="di-item-ico-table">
            </span>
          </th>
        </thead>
        <tr>
          <td rowspan="6" class="d-img">
            <img :src="'http://47.101.57.230/img/' + item.sort + '.jpg'" class>
          </td>
          <td class="table-td">
            <table class="full-width detail-table">
              <tr>
                <td>
                  分数:
                  <span :class="item.realTimeScore>60?'font-green':'font-red'">{{item.realTimeScore}}</span>
                </td>
              </tr>
              <tr>
                <td>
                  原始分数:
                  <span class="font-green">{{item.startScore}}</span>
                </td>
              </tr>
              <tr>
                <td>
                  百分比:
                  <span class="font-red">{{item.percent}} %</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span style="float:left">
                    温度:
                    <span class="font-red">{{item.temperature}}</span>
                  </span>
                  <span style="float:right">
                    正常温度:
                    <span class="font-green">{{item.temperature}}</span>
                  </span>
                </td>
              </tr>
              <tr>
                <td style="background-color:yellow">
                  <span>问题建议: {{item.problem}}</span>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import up from "static/img/up.png";
import down from "static/img/down.png";
export default {
  props: ["data"],
  data() {
      return {
          up, down
      }
  }
};
</script>

<style scope>
.di-item-ico-table{width: 10px;}
</style>
