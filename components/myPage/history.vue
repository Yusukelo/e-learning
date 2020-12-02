<template>
    <div class="class">
    <h3 class="class-ttl">受講履歴</h3>
    <div class="table-wrap">
      <table class="class-table">
        <thead>
          <tr>
            <th class="table-ttl">時間</th>
            <th class="table-ttl">授業タイトル</th>
            <th class="table-ttl">講師名</th>
            <th class="table-ttl">開講日</th>
          </tr>
        </thead>
        <tbody>
          <tr><!-- DBから取得 --></tr>
          <tr class="class-list">
            <td>月</td>
            <td>Python集中講座</td>
            <td>小林</td>
            <td>2020/12/3~2021/060/07</td>
          </tr>
          <tr class="class-list">
            <td>火</td>
            <td>Python集中講座</td>
            <td>小林</td>
            <td>2020/12/3~2021/060/07</td>
          </tr><tr class="class-list">
            <td>水</td>
            <td>Python集中講座</td>
            <td>小林</td>
            <td>2020/12/3~2021/060/07</td>
          </tr><tr class="class-list">
            <td>木</td>
            <td>Python集中講座</td>
            <td>小林</td>
            <td>2020/12/3~2021/060/07</td>
          </tr><tr class="class-list">
            <td>金</td>
            <td>Python集中講座</td>
            <td>小林</td>
            <td>2020/12/3~2021/060/07</td>
          </tr><tr class="class-list">
            <td>土</td>
            <td>Python集中講座</td>
            <td>小林</td>
            <td>2020/12/3~2021/060/07</td>
          </tr>
        </tbody>

      </table>
    </div>
  </div>
</template>
<style scoped>

.class-ttl {
    font-weight: 600;
}

.table-wrap {
  padding: 10px;
  font-size:90%;
  font-weight: 400;
}
.table-ttl {
  text-align: center;
}

.class-table {
  width:95%;
  margin:0 auto;
}

.class-list {
   border-top:1px solid #2f495e;
  border-bottom:1px solid #2f495e;
  text-align: center;
}
.class-list:first-child {
  border:1px solid #2f495e;
}
.class-list td {
  padding:20px;
}

.table-ttl {
}
</style>