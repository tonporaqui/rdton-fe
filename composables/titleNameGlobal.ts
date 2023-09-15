export default function () {
	const titleNameGlobal = {
		titleNamePage: 'Rinc@n del',
		titlePage: 'T@n',
		titleBiblioteca: 'Biblioteca',
		subTitleBiblioteca: '¡Hola! Bienvenido a mi biblioteca personal.',
		descriptionBibliotecaTitle:
			'Aquí podrás encontrar trabajos realizados, demostraciones, herramientas que utilizo y mucho más. Estaré actualizando el contenido regularmente.',
		miNombre: 'Gaston Sepulveda',
		miTituloUniversitario: 'Ingeniero Informático',
		miDescripcion:
			'Apasionado por la tecnología y la innovación, especializado en Arquitectura de Software, cursando Magíster en Gestión de Información y Telecomunicaciones, y con un claro enfoque al liderazgo orientado a objetivos y proyectos ágiles.',
	}
	return useState('titleComposable', () => titleNameGlobal)
}
