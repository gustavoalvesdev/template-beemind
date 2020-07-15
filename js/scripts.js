let services = new Vue({
	el: "#services",
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