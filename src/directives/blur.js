const blur = {}

// A directive has varias etapas
// created updated mounted etc

// elemento, la union, nuevonodo, oldnode
// function setBlur(el,binding,newNode,oldNode)
function setBlur(el,binding) {
    // bindung dice si es 1 o 0
    // si es falsy aplique el bulr sobre el elemento
    el.style.filter = binding.value ? '' : 'blur(3px)'
    el.style.cursor = binding.value ? 'inherit' : 'not-allowed'

    // Vamos a buscar todos lo elemetntos
    el.querySelectorAll('button').forEach(a => {
        if (!binding.value) {
            a.setAttribute('disabled', true)
        }else{
            a.removeAttribute('disabled')

        }
    });
}

blur.install = function (Vue) {
    Vue.directive('blur',{
        bind(el, binding){
            setBlur(el, binding)
        }
    })
}

export default blur