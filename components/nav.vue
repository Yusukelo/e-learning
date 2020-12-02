<template>
  <div>
    <nav class="nav-contents flex">
      <div class="content">MyPage</div>
      <div class="content">授業を受ける</div>
      <div class="content">テストを受ける</div>
      <div class="content time">時間割<br>スケジュール</div>
      <div class="content">お知らせ</div>
      <div class="content">ToDo管理</div>
    </nav>
  </div>
</template>

<style scoped>

.nav-contents {
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.content {
  padding: 20px 20px;
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
  width: 100%;
  text-align: center;
  cursor: pointer;
}

.time {
    padding:12px 20px;
}
</style>