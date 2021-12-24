<template>
  <Layout class-prefix="layout">
    <NumberPad :value.sync="record.amount" @submit="saveRecord" />
    <Tab :data-source="recordTypeList" :value.sync="record.type" />
    <div class="notes">
      <FormItem
        fileName="备注"
        placeholder="在这里输入备注"
        @update:value="onUpdateNotes"
      />
    </div>

    <Tags />
  </Layout>
</template>

<script lang='ts'>
import Vue from "vue";
import NumberPad from "@/components/Money/NumberPad.vue";
import FormItem from "@/components/Money/FormItem.vue";
import Tags from "@/components/Money/Tags.vue";

import { Component } from "vue-property-decorator";
import recordTypeList from "@/constants/recordTypeList";
import Tab from "@/components/Tab.vue";
@Component({
  components: { Tags, FormItem, NumberPad, Tab },
  // computed: {
  //   //会自动计算依赖，变量值一变就会跟着变，如果不用计算属性的话，那就只会在一开始调用一次，以后变量变了，也不会再变了。
  //   recordList() {
  //     return this.$store.state.recordList;
  //   },
  // },
})
export default class Money extends Vue {
  get recordList() {
    return this.$store.state.recordList;
  }
  recordTypeList = recordTypeList;
  record: RecordItem = { tags: [], notes: "", type: "-", amount: 20 };
  created() {
    this.$store.commit("fetchRecords");
  }
  onUpdateNotes(value: string) {
    console.log("value:", value);
    this.record.notes = value;
  }
  saveRecord() {
    this.$store.commit("createRecord", this.record);
  }
}
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
.notes {
  padding: 12px 0;
}
</style>
