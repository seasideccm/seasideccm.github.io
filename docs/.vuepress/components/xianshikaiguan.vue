---
title: 显示开关
date: 2021-04-05 05:34:56
permalink: /pages/ebdc8c/
sidebar: auto
categories:
  - 随笔
tags:
  - 
---




<template>
    <div class="parent">
        <button @click="showPanel">显示或隐藏</button>
        <div v-show="panelShow" :panelShow="panelShow">我来了</div>
    </div>
</template>

<script>  
  export default {
    data() {
        return {
            panelShow: false
        }
    },
    methods: {
        showPanel() {
          this.panelShow = !this.panelShow
        }
    }

  }
</script>