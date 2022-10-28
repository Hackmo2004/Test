<template>
 <div @click="setCurrentStudent" :class="student.id === this.$store.state.currentStudent.id ? 'clicked' : 'student'">
  {{ student.FullName }}
 </div>
</template>

<script>
export default {
  name: "studentInTable",
  props:{
    student:{
      type: Object,
      required: true
    }
  },
  methods:{
  setCurrentStudent(){
    this.$store.state.currentStudent = this.student
    console.log(this.$store.state.currentStudent);
   }
  }
}
</script>

<style scoped>
.student{
  padding: 7px;
  color: rgba(0,0,0,0.5);
  transition: all 0.25s ease-in-out;
  cursor: pointer;
}
.student:hover{
  color: rgba(0,0,0,1);
}
 clicked{
   color: black;
   padding: 7px;
   transition: all 0.25s ease-in-out;
 }
</style>