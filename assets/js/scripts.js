let services = new Vue({
	el: '#services',
	methods: {
		allServices: () => {
			return [
				{
					icon: 'fas fa-laptop-code',
					title: 'Websites',
					description: 'Websites, landing pages, lojas virtuais, portais, páginas de captura e intranets.'
				},
				{
					icon: 'fas fa-address-card',
					title: 'Sistemas',
					description: 'Sistemas comerciais para cadastro de clientes, controle de estoque, gestão de funcionários, ERPs, integração com NF-e (Nota Fiscal Eletrônica).'
				},
				{
					icon: 'fas fa-mobile-alt',
					title: 'Aplicativos',
					description: 'Aplicativos de delivery, compras, guias comerciais, catálogos de venda, galeria de fotos, etc'
				}
			]
		}
	}
})

let about = new Vue({
	el: '#about',
	data: {
		about: 'Sou especialista no desenvolvimento de Websites responsivos (se adaptam a qualquer dispositivo), com painel administrativo para que você ou sua equipe possa atualizar seu site de qualquer lugar e em qualquer dispositivo, sem a necessidade de uma equipe técnica para isso.'
	}
})