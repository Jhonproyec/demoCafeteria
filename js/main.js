// CAMBIAR COLOR AL MENU
window.addEventListener('scroll', function(){
	const menu = document.querySelector('header');
	menu.classList.toggle('cambio', scrollY > 0);
})
// INDICADOR DE MENU
const secciones = document.querySelectorAll('section');
const menuItem = document.querySelectorAll('.item');

const functionObserver = entradas =>{
	entradas.forEach(entrada =>{
		if(entrada.isIntersecting){
			const itemActual = Array.from(menuItem).find(item => item.dataset.url === entrada.target.id);
			itemActual.classList.add('activo');
			for(const item of menuItem){
				if(item != itemActual){
					item.classList.remove('activo')
				}
			}
		}
	})
}

const observer = new IntersectionObserver(functionObserver, {
	root: null,
	rootMargin: '-5px',
	threshold: 0.8
});

secciones.forEach(seccion => observer.observe(seccion));

// ANIMACION A LAS IMAGENES Y TEXTOS
const animadoArriba = document.querySelectorAll('.animadoArriba');

window.addEventListener('scroll', function(){
	let desplazamiento = document.documentElement.scrollTop;
	for(i = 0; i < animadoArriba.length; i++){
		let distancia = animadoArriba[i].offsetTop;
		if(distancia - 500 < desplazamiento){
			animadoArriba[i].style.opacity = 1;
			animadoArriba[i].classList.add("mostrarTop");
		}
	}
})

// FUNCION CLICK BOTON APARECER MENU
const botonMenu = document.querySelector('.boton');
const menu = document.querySelector('.menu');
const items = document.querySelectorAll('.item');

botonMenu.addEventListener('click', function(){
	this.classList.toggle('cerrarMenu');
	menu.classList.toggle('mostrar');
	items.forEach(item => {
		item.addEventListener('click', function(){
			menu.classList.remove('mostrar');
			botonMenu.classList.remove('cerrarMenu')
		})
	})
})