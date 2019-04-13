<template>
  <div class="body">
    <div>
      <b>{{beltlineName}}{{title}}</b>
    </div>
    <div>
      <b>总结</b>
      <p>
        截止目前为止，{{beltlineName}}总共设备{{total.allNum}}台，运行正常
        <span class="font-green">{{total.normal}}</span>个，异常
        <span class="font-red">{{total.poor}}</span>个。
      </p>
    </div>
    <div>
      <b>数据</b>
      <data-table-of-phone :total="total"></data-table-of-phone>
    </div>
    <div>
      <b>设备列表</b>
      <device-table-of-phone :data="devices.warningList"></device-table-of-phone>
    </div>
    <device-details-table-of-phone :data="devices.warningList"></device-details-table-of-phone>
  </div>
</template>

<script>
import dataTableOfPhone from "./components/phone/dataTableOfPhone";
import deviceTableOfPhone from "./components/phone/deviceTableOfPhone";
import deviceDetailsTableOfPhone from "./components/phone/deviceDetailsTableOfPhone";

import { formatDate } from "@/utils";

import {
  APIGetProlineList,
  APIGetProlineRealtime,
  APIGetProlineKData
} from "@/api/luochi";
export default {
  data() {
    return {
      title: this.dayFormat() + "报告",
      devices: {
        data: null,
        kData: null,
        warningList: []
      },
      beltlineName: "",
      report: {
        excellent: 0,
        good: 0,
        average: 0,
        poor: 0,
        all: 0
      }
    };
  },
  components: {
    dataTableOfPhone,
    deviceTableOfPhone,
    deviceDetailsTableOfPhone
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
    init: function() {
      this.id = this.$route.query.id;
      this.getListData();
    },
    getListData() {
      APIGetProlineList().then(res => {
        this.list = res.data;
        this.list.forEach((item, i) => {
          if (item.id === this.id) {
            this.beltlineName = item.proLineName;
          }
        });
      });
      this.getProlineRealtime(this.id);
      //this.getProlineKData(this.id);
    },
    getProlineRealtime(proLineId) {
      let ops = {
        proLineId: proLineId,
        isAll: true
      };
      APIGetProlineRealtime(ops).then(
        res => {
          this.devices.data = res.data;
          let arr = res.data.warningList;
          arr.sort((a, b) => {
            return a.sort - b.sort;
          });
          arr.forEach((item, index, arr) => {
            if (item.realTimeScore != 0 && item.startScore != 0) {
              arr[index].percent = (
                ((item.realTimeScore - item.startScore) / item.startScore) *
                100
              ).toFixed(0);
            } else {
              arr[index].percent = 0;
            }
            arr[index].beltlineName = this.beltlineName;
          });
          this.devices.warningList = arr;
        },
        () => {
          this.devices.data = null;
        }
      );
    },
    getProlineKData(proLineId, index) {
      let ops = {
        proLineId: proLineId
      };
      APIGetProlineKData(ops).then(res => {
        this.$set(this.devices, "kData", res.data);
      });
    },
    dayFormat: function() {
      let _date = new Date();
      return _date.getMonth() + 1 + "月" + _date.getDate() + "日";
    }
  },
  computed: {
    total: function() {
      let allNum = 0;
      let normal = 0;
      let poor = 0;
      let excellent = 0;
      let good = 0;
      let average = 0;
      if (this.devices.data == null || this.devices.data.warningList == null) {
        return {
          allNum,
          normal,
          poor,
          excellent,
          good,
          average
        };
      }
      allNum = this.devices.data.warningList.length;
      for (
        let index = 0;
        index < this.devices.data.warningList.length;
        index++
      ) {
        let data = this.devices.data.warningList[index];
        if (data.realTimeScore >= 60) {
          normal++;
          if (data.realTimeScore <= 70) {
            average++;
          } else if (data.realTimeScore > 70 && data.realTimeScore < 90) {
            good++;
          } else if (data.realTimeScore >= 90) {
            excellent++;
          }
        } else {
          poor++;
        }
      }
      return {
        allNum,
        normal,
        poor,
        excellent,
        good,
        average
      };
    }
  }
};
</script>

 <style>
.body {
  background-color: #f4f4f4;
  font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, PingFang SC,
    Microsoft YaHei, Source Han Sans SC, Noto Sans CJK SC, WenQuanYi Micro Hei,
    sans-serif;
  margin-top: 0px;
  padding: 0px;
}

#app {
  padding: 0px;
  margin-top: 0px;
}

div {
  background-color: white;
  width: 100%;
  padding: 8px;
  margin-top: 10px;
  margin-bottom: 10px;
}

.font-red {
  color: red;
}

.font-green {
  color: #81db7b;
}

b {
  margin: 1%;
}

p {
  margin-left: 1%;
  text-indent: 20px;
  line-height: normal;
}

table {
  border: 1px solid #ccc;
  width: 95%;
  margin: 2%;
  padding: 0;
  border-collapse: collapse;
  border-spacing: 0;
  table-layout: fixed;
  font-size: small;
}

table thead {
  background-color: #f4f4f4;
}

table tr {
  border: 1px solid #ddd;
  padding: 5px;
}

.list-table th,
.list-table td {
  padding: 10px;
  text-align: left;
  border: 1px solid #ccc;
}

.detail-table {
  margin: 0px;
  width: 100%;
  border: 0px;
  table-layout: auto;
}

.detail-table th {
  padding: 10px;
  text-align: left;
  background-color: white;
  border: 0px;
}

.detail-table td {
  padding: 5px;
  text-align: left;
  border: 1px solid #ccc;
}

.detail-table .table-td {
  padding: 0px;
  border-left: 0px;
  border-right: 0px;
}

table th {
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 1px;
}

.text-hidden {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.d-img {
  position: relative;
  align-items: center;
  border: 1px solid #f5f5f5;
  margin-left: 10px;
  width: 35%;
}
.d-img > img {
  max-width: 100%;
  max-height: 100px;
  vertical-align: middle;
  align-items: center;
  margin: 0 auto;
}
</style>