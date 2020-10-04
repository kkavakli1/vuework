new Vue ({
	el: '#app',
});

Vue.component('our-own-bold', {
	template: '<strong><slot></slot></strong>'
});
