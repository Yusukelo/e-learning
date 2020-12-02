import axios from 'axios'

const time = () => {
    axios.head(window.location.href).then(res => {
        state.counter = new Date(res.headers.date) // サーバー時刻
    })
}

export const state = () => ({
    counter: 0,
    time: time
})

export const getters = {
    counter (state) {
        return state.counter
    } 
}
export const mutations = {
    increment(state) {
    axios.head(window.location.href).then(res => {
        state.counter = new Date(res.headers.date) // サーバー時刻
    })
    }
}


