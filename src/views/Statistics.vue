<template>
  <Layout>
    <Tab class-prefix="type" :data-source="typeList" :value.sync="type" />
    <Tab
      class-prefix="interval"
      :data-source="intervalList"
      :value.sync="interval"
    />
  </Layout>
</template>

<script lang="ts">
import Types from "../components/Money/Types.vue";
import Vue from "vue";
import { Component } from "vue-property-decorator";
import Tab from "@/components/Tab.vue";
@Component({ components: { Types, Tab } })
export default class Statistics extends Vue {
  type = "-";
  interval = "day";
  typeList = [
    { text: "支出", value: "-" },
    { text: "收入", value: "+" },
  ];
  intervalList = [
    { text: "按天", value: "day" },
    { text: "按周", value: "week" },
    { text: "按月", value: "month" },
  ];
}
</script>

<style lang="scss" scoped>
::v-deep .type-tabs-item {
  background: white;
  &.selected {
    background: #c4c4c4;
    &::after {
      display: none;
    }
  }
}
</style>