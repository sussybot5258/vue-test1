<script setup lang="ts"></script>

<template>
  <div>
    <h1>this is test1</h1>
    <div>
      <a href="/">go main</a>
    </div>

    <div>
      <router-link to="/">go this.root</router-link>
    </div>
    <div>
      <router-link to="/test-1">go this.test1-1</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>
