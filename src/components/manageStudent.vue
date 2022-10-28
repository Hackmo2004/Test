<template>
  <div>
    <div class="redact mb-2">
      Редактирование студентов
    </div>
    <div class="d-flex flex-column align-center">
      <v-btn class="my-2 w-25" @click="$router.push('/grades')">Изменить оценки</v-btn>
      <v-btn class="my-2 w-25" @click="delStudent">Удалить студента {{ currentStudent.FullName }}</v-btn>
      <v-btn class="my-2 w-25" @click="addStudentBtn">Добавить студента</v-btn>
      <v-btn class="my-2 w-25" @click="$router.push('/exam')">Зачёты</v-btn>
    </div>

    <div class="modal" v-show="openModal">
      <v-card width="400">
        <template v-slot:title>
          Добавление студента
        </template>

        <template v-slot:subtitle>
          <v-text-field
              density="compact"
              variant="solo"
              label="Имя Студента"
              single-line
              hide-details
              v-model="firstName"
          ></v-text-field>
          <v-text-field
              class="mt-2"
              density="compact"
              variant="solo"
              label="фамилия Студента"
              single-line
              hide-details
              v-model="lastName"
          ></v-text-field>
        </template>

        <template v-slot:text>

        </template>
        <v-btn size="small" color="surface-variant" variant="text" @click="addStudent">Добавить</v-btn>
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
  name: "manageStudent",
  data () {
    return{
      openModal: false,
      firstName: '',
      lastName: '',
    }
  },
  methods:{
    delStudent(){
      const a = this.students.findIndex(student => student.id === this.currentStudent.id)
      this.students.splice(a, 1)
    },
    addStudentBtn(){
      this.openModal = true
    },
    addStudent(){
      let a = {
        id: this.lastId,
        FullName: this.firstName + ' ' + this.lastName,
        lessonTitle0: {
          grades: [],
        },
        lessonTitle1: {
          grades: [],
        },
        lessonTitle2: {
          grades: [],
        },
        lessonTitle3: {
          grades: [],
        },
        lessonTitle4: {
          grades: [],
        },
      }
      this.students.push(a)
      this.firstName = ''
      this.lastName = ''
      this.$store.dispatch('lastIdAction')
    }
  },
  computed:{
    currentStudent(){
      return this.$store.state.currentStudent
    },
    students(){
      return this.$store.state.students
    },
    lastId(){
      return this.$store.state.lastIndex
    }
  }
}
</script>

<style scoped>
*{
  width: 100%;
}
 .redact{
   display: flex;
   justify-content: center;
   width: 100%;
   padding-top: 25px;
   font-size: 20px;
 }
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