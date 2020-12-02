<template>
  <div>
    <ForYou v-on:showDetail="showDetail"/>
    <ClassList />
    <History />
  </div>
</template>

<script>
import ForYou from "./forYou";
import ClassList from "./classList";
import History from "./history"

export default {
    components: {ForYou, ClassList, History},
    props: {
    },
    methods: {
        showDetail: function () {
            this.$emit('showDetail')
        }
    }
};
</script>