<template>
  <div class="blk-curtain">
    <div class="content">
      <div class="close-tab" v-on:click="emitCloseTab">
        <img src="~/assets/img/del.png" alt="" />
      </div>
      <div class="sumbnail">
        <img src="~/assets/img/classMov.png" alt="" />
      </div>
      <div class="detail-table-wrap">
        <table class="detail-table">
          <tbody>
            <tr>
              <th class="detail-table__ttl">科目名</th>
              <th>担当教師名</th>
            </tr>
            <tr>
              <td>Python集中講座</td>
              <td>小林</td>
            </tr>
            <tr>
              <th>開講期間・日時</th>
              <td>2020/08/24 ~ 2021/03/24 火・2限</td>
            </tr>
            <tr>
              <th>使用テキスト・教材</th>
              <td>エンジニアのためのPython入門</td>
            </tr>
            <tr>
              <th>授業内スライド</th>
              <td>https://download.hogehogehoge.pdf</td>
            </tr>
            <tr>
              <th>備考</th>
            </tr>
            <tr>
              <td>ダミー：ダミーダミーダミーダミー</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="detail-class-lists">
        <ul>
          <li class="detail-class__li flex">
            <div>
              <h4>第１回: Python入門</h4>
              <p>開講日:2020/08/24 火 2限</p>
            </div>
            <div class="class-list__btn">
              <nuxt-link to="/watch" class="start__btn">受講する</nuxt-link>
            </div>
          </li>
          <li class="detail-class__li flex">
            <div>
              <h4>第2回: Python入門</h4>
              <p>開講日:2020/08/24 火 2限</p>
            </div>
            <div class="class-list__btn">
              <nuxt-link to="/watch" class="start__btn">受講する</nuxt-link>
            </div>
          </li>
          <li class="detail-class__li flex">
            <div>
              <h4>第3回: Python入門</h4>
              <p>開講日:2020/08/24 火 2限</p>
            </div>
            <div class="class-list__btn">
              <nuxt-link to="/watch" class="start__btn">受講する</nuxt-link>
            </div>
          </li>
          <li class="detail-class__li flex">
            <div>
              <h4>第4回: Python入門</h4>
              <p>開講日:2020/08/24 火 2限</p>
            </div>
            <div class="class-list__btn">
              <nuxt-link to="/watch" class="start__btn">受講する</nuxt-link>
            </div>
          </li>
          <li class="detail-class__li flex">
            <div>
              <h4>第5回: Python入門</h4>
              <p>開講日:2020/08/24 火 2限</p>
            </div>
            <div class="class-list__btn">
              <nuxt-link to="/watch" class="start__btn">受講する</nuxt-link>
            </div>
          </li>
          <li class="detail-class__li flex">
            <div>
              <h4>第6回: Python入門</h4>
              <p>開講日:2020/08/24 火 2限</p>
            </div>
            <div class="class-list__btn">
              <nuxt-link to="/watch" class="start__btn">受講する</nuxt-link>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    emitCloseTab: function () {
      this.$emit("closeTab");
    },
    goPageWatch: function () {
      this.$router.push({ path: "/watch"});
    },
  },
};
</script>

<style scoped>
.close-tab {
  width:calc(100% - 40px);
  max-width: 960px;
  position: fixed;
  text-align: right;

}
.close-tab img {
  opacity: 0.8;
  width: 20px;
  padding:10px;
  box-sizing: content-box;
}
.content {
  position: relative;
  background: #fff;
  max-width: 1000px;
  min-width:750px;
  max-height: 90vh;
  margin: 0 auto;
  margin-top: 50px;
  border-radius: 30px;
  padding: 20px;
  overflow-y: scroll;
}

.sumbnail img {
  display: block;
  margin: 0 auto;
}
.detail-table-wrap {
  padding: 20px;
}
.detail-table {
  margin-top: 20px;
  width: 100%;
}

.detail-table th {
  width: 30%;
  background: #2f495e;
  color: #fff;
  text-align: center;
  padding: 15px;
  border: 1px solid #000;
}
.detail-table td {
  padding: 15px;
  text-align: center;
  border: 1px solid #000;
}

.detail-table__ttl {
  width: 80%;
}

.detail-class-lists {
  width: 100%;
  padding: 20px;
}

.detail-class__li {
  padding: 20px 10px;
  border-top: 1px solid #000;
  border-collapse: collapse;

  justify-content: space-between;
  align-items: center;
}
.class-list__btn {
  background: #03a9f4;
  color: #fff;
  font-weight: 600;
  padding: 10px;
  border-radius: 8px;
  cursor: pointer;
}

.start__btn {
  color:#fff;
}
</style>