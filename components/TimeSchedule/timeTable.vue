<template>
  <div class="table-wrap">
      <h3>時間割</h3>
    <table class="time-table">
      <thead>
        <tr>
          <th id="th-time">限・時間</th>
          <th class="time-day">日</th>
          <th class="time-day">月</th>
          <th class="time-day">火</th>
          <th class="time-day">水</th>
          <th class="time-day">木</th>
          <th class="time-day">金</th>
          <th class="time-day">土</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th class="time-header">1限</th>
          <td class="time-data-cell"></td>
          <td class="time-data-cell"></td>
          <td class="time-data-cell"></td>
          <td class="time-data-cell"></td>
          <td class="time-data-cell"></td>
          <td class="time-data-cell"></td>
          <td class="time-data-cell"></td>
        </tr>
        <tr>
          <th class="time-header">2限</th>
          <td class="time-data-cell"></td>
          <td class="time-data-cell"></td>
          <td class="time-data-cell"></td>
          <td class="time-data-cell"></td>
          <td class="time-data-cell"></td>
          <td class="time-data-cell"></td>
          <td class="time-data-cell"></td>
        </tr>
        <tr>
          <th class="time-header">3限</th>
          <td class="time-data-cell"></td>
          <td class="time-data-cell"></td>
          <td class="time-data-cell"></td>
          <td class="time-data-cell"></td>
          <td class="time-data-cell"></td>
          <td class="time-data-cell"></td>
          <td class="time-data-cell"></td>
        </tr>
        <tr>
          <th class="time-header">4限</th>
          <td class="time-data-cell"></td>
          <td class="time-data-cell"></td>
          <td class="time-data-cell"></td>
          <td class="time-data-cell"></td>
          <td class="time-data-cell"></td>
          <td class="time-data-cell"></td>
          <td class="time-data-cell"></td>
        </tr>
        <tr>
          <th class="time-header">5限</th>
          <td class="time-data-cell"></td>
          <td class="time-data-cell"></td>
          <td class="time-data-cell"></td>
          <td class="time-data-cell"></td>
          <td class="time-data-cell"></td>
          <td class="time-data-cell"></td>
          <td class="time-data-cell"></td>
        </tr>
        <tr>
          <th class="time-header">6限</th>
          <td class="time-data-cell"></td>
          <td class="time-data-cell"></td>
          <td class="time-data-cell"></td>
          <td class="time-data-cell"></td>
          <td class="time-data-cell"></td>
          <td class="time-data-cell"></td>
          <td class="time-data-cell"></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.table-wrap {
  padding: 10px;
}

.table-wrap h3 {
    font-weight: 600;
}

.time-table {
  width: 90%;
  margin: 0 auto;
}
.time-day {
  background: #f9f7f6;
  vertical-align: middle;
  font-weight: 600;
  text-align: center;
  padding: 20px;
  border: 1px solid #eeece4;
}

.time-header {
  background: #f9f7f6;
  padding: 20px;
  border: 1px solid #eeece4;
}
.time-data-cell {
  border: 1px solid #eeece4;
}

#th-time {
  background: #f9f7f6;
  vertical-align: middle;
  text-align: center;
  border: 1px solid #eeece4;
  width: 100px;
}
</style>