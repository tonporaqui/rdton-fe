export default function () {
	const titleNameGlobal = {
		titleNamePage: 'Rinc@n del',
		titlePage: 'T@n',
		titleBiblioteca: 'Biblioteca',
		subTitleBiblioteca: '¡Hola! Bienvenido a mi biblioteca personal.',
		descriptionBibliotecaTitle:
			'Aquí podrás encontrar trabajos realizados, demostraciones, herramientas que utilizo y mucho más. Estaré actualizando el contenido regularmente.',
	}
	return useState('titleComposable', () => titleNameGlobal)
}
