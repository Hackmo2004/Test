import { createStore } from 'vuex'

export default createStore({
  state: {
    students: [
      {
        id: 0,
        FullName: 'Артур Яковлев',
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
      },
      {
        id: 1,
        FullName: 'Валера Егоров',
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
      },
      {
        id: 2,
        FullName: 'Егор Альбертов',
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
      },
      {
        id: 3,
        FullName: 'Сергей Бояров',
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
    ],
    currentStudent: {
      id: null,
      FullName: '',
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
    },
    lastIndex: 4
  },
  getters: {
  },
  mutations: {
    setGrade(state ,payload){
      let a = state.students.find(student => student.id === payload.user.id)
      a[payload.currentLesson].grades.push(parseInt(payload.grade))
    },
    delGrade(state,payload){
      let a = state.students.find(student => student.id === payload.user.id)
      a[payload.currentLesson].grades.splice(payload.grade, 1)
    },
    lastIdFunc(state){
       state.lastIndex++
    }
  },
  actions: {
    addGrade({commit}, payload){
      commit('setGrade', payload)
    },
    delGrade({commit}, payload){
      commit('delGrade', payload)
    },
    lastIdAction({commit}){
      commit('lastIdFunc')
    }
  },
  modules: {
  }
})
