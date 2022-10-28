<template>
 <div class="main">
   <div class="mt-10">
     <div>Средние оценки студента {{ student.FullName }}</div>
     <div class="mt-7 d-flex flex-column">
       <div>Математика: {{ averageGrades[0] }}</div>
       <div>Русский: {{ averageGrades[1] }}</div>
       <div>Биология: {{ averageGrades[2] }}</div>
       <div>География: {{ averageGrades[3] }}</div>
       <div>Физика: {{ averageGrades[4] }}</div>
     </div>
   </div>
 </div>
</template>

<script>
export default {
  name: "examComponent",
  data () {
    return {

    }
  },
  computed:{
    student(){
      return this.$store.state.currentStudent
    },
    averageGrade0(){
        if(this.student.lessonTitle0.grades.length === 0) return
        const a = this.student.lessonTitle0.grades.reduce((a, b) => (a + b)) / this.student.lessonTitle0.grades.length
        return a.toFixed(1)
    },
    averageGrades(){
      let newGrades = []
      const a = Object.keys(this.student).filter(item => item.includes('lessonTitle'))
      for (let i = 0; i < a.length; i++) {
        const _ = [...this.student[`${a[i]}`].grades]
        console.log(_);
        if(_.length > 1) newGrades[i] = _.reduce((a, b) => (a + b)) / _.length
        else if(_.length === 1) newGrades[i] = _[0]
        else newGrades[i] = 0
      }
       return newGrades
    },
  },
  methods:{
  },
}
</script>

<style scoped>
 .main{
   display: flex;
   flex-direction: column;
   align-items: center;
 }
</style>