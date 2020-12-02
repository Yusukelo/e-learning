<template>
<div class="sideBar">
    <SideSearchBar class="side-item"/>
    <Me class="side-item"/>
    <MyHealth class="side-item"/>
    <Notice class="side-item"/>
    <ToDo class="side-item"/>
    <Shop class="side-item"/>
    <Help class="side-item"/>
</div>
</template>

<script>
import Me from './me';
import MyHealth from './myHealth';
import Notice from './notice';
import ToDo from './toDo';
import SideSearchBar from './sideSearchBar';
import Shop from './shop';
import Help from './help'

export default {
    
}
</script>
<style scoped>
.sideBar {
  width: 300px;
  margin-left: 20px;
  
}
.side-item {
    margin-bottom:20px;
    padding:20px;
    border:1px solid #000;
    border-radius: 20px;
}
</style>

<style>
.side-item h3 {
    font-weight: 600;
    margin: 4px 0 12px 0;
}
.side-item p {
    line-height: 1.4;
}

</style>
