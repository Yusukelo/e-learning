<template>
  <div>
    <h1>HelloWorld</h1>
    <div>
      <button @click="increment">サーバー時刻</button>

      カウント:{{ counter }}
      タイム:{{time}}
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  computed: {
    ...mapState("test", {
      counter: "counter",
      time: "time"
    }),
  },
  methods: {
    ...mapMutations({
      increment: "test/increment",
    }),
  },
};
</script>