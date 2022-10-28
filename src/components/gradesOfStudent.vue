<template>
 <div style="padding: 0 175px">
   <v-table>
     <thead>
     <tr>
       <th class="w-10">
       ID
       </th>
       <th class="text-left">
         Фамилия Имя
       </th>
       <th class="text-left">
         Математика
       </th>
       <th class="text-left">
         Русский
       </th>
       <th class="text-left">
         Биология
       </th>
       <th class="text-left">
         География
       </th>
       <th class="text-left">
         Физика
       </th>
     </tr>
     </thead>
     <tbody>
     <tr
         v-for="item in students"
         :key="item.id"
     >
       <td class="w-0">{{ item.id }}</td>
       <td>{{ item.FullName }}</td>
       <td><v-btn @click="openModalFunc(item.lessonTitle0.grades, item, 'lessonTitle0')">Открыть оценки</v-btn></td>
       <td><v-btn @click="openModalFunc(item.lessonTitle1.grades, item, 'lessonTitle1')">Открыть оценки</v-btn></td>
       <td><v-btn @click="openModalFunc(item.lessonTitle2.grades, item, 'lessonTitle2')">Открыть оценки</v-btn></td>
       <td><v-btn @click="openModalFunc(item.lessonTitle3.grades, item, 'lessonTitle3')">Открыть оценки</v-btn></td>
       <td><v-btn @click="openModalFunc(item.lessonTitle4.grades, item, 'lessonTitle4')">Открыть оценки</v-btn></td>
     </tr>
     </tbody>
   </v-table>

   <div class="modal" v-show="openModal">
     <v-card width="400">
       <template v-slot:title>
         Изменение оценки
       </template>

       <template v-slot:subtitle>
         <v-text-field
             density="compact"
             variant="solo"
             label="Search templates"
             append-inner-icon="mdi-plus"
             single-line
             hide-details
             @click:append-inner="addGrade"
             v-model="newGrade"
         ></v-text-field>
       </template>

       <template v-slot:text>
         <div v-for="(grade,i) in currentGrades" :key="i">
           {{ grade }} <v-btn @click="delGrade(i)">Удалить</v-btn>
         </div>
       </template>
       <v-card-actions>
         <v-spacer></v-spacer>

         <v-btn size="small" color="surface-variant" variant="text" @click="openModal -= openModal">Закрыть</v-btn>
       </v-card-actions>
     </v-card>
   </div>
 </div>
</template>

<script>
export default {
  data () {
    return {
      openModal: false,
      currentGrades: [],
      currentStudent: {},
      newGrade: '',
      currentLesson: ''
    }
  },
  methods:{
    openModalFunc(item, user, lesson){
      this.currentGrades = item
      this.openModal = true
      this.currentStudent = user
      this.currentLesson = lesson
    },
    addGrade(){
     if(this.newGrade === '' || (parseInt(this.newGrade) >5 || parseInt(this.newGrade) <2)) return
     this.$store.dispatch('addGrade', {user: this.currentStudent, grade:this.newGrade, currentLesson: this.currentLesson})
     this.newGrade = ''
    },
    delGrade(i){
      this.$store.dispatch('delGrade', {user: this.currentStudent, grade:i, currentLesson: this.currentLesson})
    }
  },
  computed:{
    students(){
      return this.$store.state.students
    }
  },
}
</script>

<style scoped>
 .modal{
   position: absolute;
   left: 0;
   top: 0;
   display: flex;
   justify-content: center;
   align-items: center;
   background-color: rgba(0,0,0,0.3);
   width: 100%;
   height: 100%;
 }
</style>