import Vue from 'vue'
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        city: '广州',
        arr:[],
        butTop: '',
        show: false,
        place: '',
        button: '',
        cont1: '',
        cont2: '',
        fix: '',
        tit1: '111',
        tit2: '',
        word: ''
    }
})