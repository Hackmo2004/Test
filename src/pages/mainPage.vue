<template>
 <div style="height: 100%">
   <div class="window">
       <table-students class="table"/>
       <manage-student/>
   </div>
 </div>
</template>

<script>
import tableStudents from "@/components/tableStudents";
import manageStudent from "@/components/manageStudent";
export default {
  name: "mainPage",
  components: {
    tableStudents,manageStudent
  }
}
</script>

<style scoped>
 .table{
   width: 27%;
   background-color: #f9f9f9;
   height: 100%;
 }
 .window{
   display: flex;
   flex-direction: row;
   width: 100%;
   height: 100%;
 }
</style>