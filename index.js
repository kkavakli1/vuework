const edibles = [
	'carrot', 'cheese', 'green bean', 'cucumber',
	'onion', 'pizza', 'parsley', 'bread'
];
const data = { message: edibles[0] };
new Vue({
	el: '#app',
	data,
});
setInterval(() => {
	const i = Math.floor(Math.random() * edibles.length);
	data.message = edibles[i];
}, 2000);