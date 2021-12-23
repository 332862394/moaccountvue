<template>
  <Layout class-prefix="layout">
    <NumberPad :value.sync="record.amount" @submit="saveRecord" />
    <Types :value.sync="record.type" />
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
import Types from "@/components/Money/Types.vue";
import FormItem from "@/components/Money/FormItem.vue";
import Tags from "@/components/Money/Tags.vue";

import { Component } from "vue-property-decorator";
import store2 from "@/store/index2";
@Component({
  components: { Tags, FormItem, Types, NumberPad },
  computed: {
    //会自动计算依赖，变量值一变就会跟着变，如果不用计算属性的话，那就只会在一开始调用一次，以后变量变了，也不会再变了。
    count() {
      return this.$store.state.count;
    },
  },
})
export default class Money extends Vue {
  recordList = store2.recordList;
  record: RecordItem = { tags: [], notes: "", type: "-", amount: 20 };

  onUpdateNotes(value: string) {
    console.log("value:", value);
    this.record.notes = value;
  }
  saveRecord() {
    store2.createRecord(this.record);
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
