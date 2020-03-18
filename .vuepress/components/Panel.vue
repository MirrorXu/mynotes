<template>
  <div class="panel">
    <slot name="panelHeader">
      <div class="header">
        panel - header
      </div>
    </slot>
    <slot>
      content {{aaa}}
    </slot>
    <slot name="panel-footer">
      panel - footer
    </slot>
  </div>
</template>
<script>
  export default {
    name: 'Panel',
    data() {
      return {
        aaa: 'hello world'
      }
    }
  }
</script>
<style scoped>
  .panel {
    border: 1px solid rgb(226, 226, 226);
    border-radius: 10px;
    padding: 5px 0px;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
  }
</style>