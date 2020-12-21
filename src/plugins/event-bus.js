const eventBus = {}

eventBus.install = function (Vue) {
    // Vamos a contruir un nuevo emitter
    // llamado $bus
    Vue.prototype.$bus = new Vue()
}

export default eventBus