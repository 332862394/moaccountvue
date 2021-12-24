<template>
  <Layout>
    <Tab class-prefix="type" :data-source="recordTypeList" :value.sync="type" />
    <Tab
      class-prefix="interval"
      :data-source="intervalList"
      :value.sync="interval"
    />
  </Layout>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import Tab from "@/components/Tab.vue";
import intervalList from "@/constants/intervalList";
import recordTypeList from "@/constants/recordTypeList";
@Component({ components: { Tab } })
export default class Statistics extends Vue {
  type = "-";
  interval = "day";
  recordTypeList = recordTypeList;
  intervalList = intervalList;
}
</script>

<style lang="scss" scoped>
::v-deep {
  .type-tabs-item {
    background: white;
    &.selected {
      background: #c4c4c4;
      &::after {
        display: none;
      }
    }
  }
  .interval-tabs-item {
    height: 48px;
  }
}
</style>