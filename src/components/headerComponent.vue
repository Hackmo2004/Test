<template>
<div class="main">
 <div class="textHeader" @click="$router.push('/')">Образовательный портал</div>
</div>
</template>

<script>
export default {
  name: "headerComponent"
}
</script>

<style scoped>
 .main{
   width: 100%;
   height: 100%;
   display: flex;
   background-color: #00b4dd;
   align-items: center;
   flex-direction: row;
   justify-content: space-between;
   padding: 0 175px;
 }
 .textHeader{
   font-size: 32px;
   cursor: pointer;
 }
</style>