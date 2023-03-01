<template>
  <demo-block title="基础用法">
    <QuiButton type="primary" style="margin-left: 15px">按钮</QuiButton>
  </demo-block>

  <demo-block title="自定义颜色">
    <qui-button color="#7232dd" style="margin-left: 15px">单色按钮</qui-button>
    <QuiButton color="#7232dd" plain style="margin-left: 15px">单色按钮</QuiButton>
    <QuiButton color="linear-gradient(to right, #ff6034, #ee0a24)" style="margin-left: 15px">
      渐变色按钮
    </QuiButton>
  </demo-block>
</template>

<script lang="ts" setup>
import QuiButton from '../index.vue';

const abc = (x: number, y: number) => x + y
console.log(abc);


</script>
