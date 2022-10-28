<template>
<div class="main">
  <div class="pl-4 text">Студенты</div>
 <div v-for="student in this.$store.state.students" :key="student.id">
  <student-in-table :student="student"/>
 </div>
</div>
</template>

<script>
import studentInTable from "@/components/studentInTable";
export default {
  name: "tableStudents",
  components: {
    studentInTable
  }
}
</script>

<style scoped>
 .main{
   padding-left: 175px;
 }
 .text{
   font-size: 20px;
 }
</style>