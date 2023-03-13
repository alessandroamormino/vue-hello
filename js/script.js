const { createApp } = Vue

createApp({
data() {
    return {
        message: 'Hello World!',
        image: 'img/space-invaders.png',
    }
}
}).mount('#app')