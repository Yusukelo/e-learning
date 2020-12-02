<template>
    <div class="page flex">
      <DetailClass v-if="isShowDetail" v-on:closeTab="closeTab"/>
      <!-- <div class="chat"></div> -->
      <div class="main">
        <Nav class="nav" />
        <!-- MyPage -->
        <MyPage class="myPage" v-on:showDetail="showDetail"/>
        <!-- <TimeSchedule /> -->
      </div>
      <SideBar class="sideBar" />
    </div>
    <!-- <Footer /> -->
</template>

<script>

import Nav from "../components/nav";
import MyPage from "../components/myPage/myPage";
import TimeSchedule from "../components/TimeSchedule/timeSchedule";
import SideBar from "../components/sideBar/sideBar";
import DetailClass from "../components/detailClass";
import Footer from "../components/footer";

export default {
  component: {Nav,MyPage,TimeSchedule,SideBar,DetailClass},
  data: function () {
    return {
      isShowDetail: false
    }
  },
  methods: {
    closeTab: function () {
      this.isShowDetail = !this.isShowDetail
    },
    showDetail : function () {
      this.isShowDetail = !this.isShowDetail
    }
  }
};

</script>

<style>


.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.myPage {
  max-width: 1020px;
  margin:0 auto;
}
.nav {
  margin:0 auto;
}
</style>
