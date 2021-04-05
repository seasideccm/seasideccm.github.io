<template>
  <div class="sub-contain">
    <p>这里是子组件窗口</p>
    <button @click="doClose">隐藏</button>
  </div>
</template>

<script>
export default {
  props: {
    dialog_visible: Boolean
  },
  data() {
    return {
      visible: this.dialog_visible
    }
  },
  watch: {
    visible(val) {
      this.dialog_visible = val;
    }
  },
  methods: {
    doClose() {
      // 触发父组件中的dialogVisibleEvent事件，并传递参数
      this.$emit('dialogVisibleEvent', false);
    }
  }
};
</script>

<style lang="scss" scoped>
.sub-contain {
  height: 150px;
  width: 100%;
  padding: 20px;
  text-align: center;
  margin-top: 20px;
  background-color: #1f6fb5;
  color: #fff;
}
</style>