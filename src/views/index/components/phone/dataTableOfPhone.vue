<template>
  <div>
    <table class="full-width list-table">
      <thead>
        <tr>
          <th style="width:25%"></th>
          <th>优秀</th>
          <th>良好</th>
          <th>及格</th>
          <th>不及格</th>
        </tr>
      </thead>
      <tr>
        <td>共{{total.allNum}}台</td>
        <td class="font-green">{{total.excellent}}台</td>
        <td class="font-green">{{total.good}}台</td>
        <td class="font-green">{{total.average}}台</td>
        <td class="font-red">{{total.poor}}台</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
    props: ['total'],
    data() {
        return {
          
        }
    }
}
</script>


<style>
</style>
