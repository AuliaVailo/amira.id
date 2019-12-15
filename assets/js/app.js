const vueApp = new Vue ({
    el: '#App',
    data: { 
        judul: 'Amira.id',
        carousels: [
            {
                'slideto' : 0,
                'img': './assets/img/71786665_532382827339696_1452830663193671762_n.jpg',
                'alt': 'Adara Pashmina',
                'active': 'carousel-item active'
            },
            {
                'slideto' : 1,
                'img': './assets/img/73169329_181221382997217_908247590217410240_n.jpg',
                'alt': 'Adara Pashmina',
                'active': 'carousel-item'
            },
            {
                'slideto' : 2,
                'img': './assets/img/75379757_192994991832838_506675098373067502_n.jpg',
                'alt': 'Adara Pashmina',
                'active': 'carousel-item'
            }
        ],
        produkKami: [
            {
                'id': 0,
                'img': './assets/img/71786665_532382827339696_1452830663193671762_n.jpg',
                'alt': 'Pashmina',
                'desc': 'Material: Ceruti babydoll premium <br/>Size : 180x75 cm.'
            },
            {
                'id': 0,
                'img': './assets/img/Wrinkle-cotton-hijab-scarf-plain-crinkle-shawls-muslim-scarves-headscarf-wraps-turbans-headband-scarves-10pcs-lot.jpg_220x220.jpg_q50.jpg',
                'alt': 'Scraft',
                'desc': 'Material : <i>Chiffon</i><br/>Size : 30 x 30 cm.'
            }
        ],
        pashmina: [],
        scraft: [],
        kontak: [],
        icons: {
            'instagram': './assets/img/instagram-logos-png-images-free-download-2.png',
            'whatsapp': './assets/img/whatsapp_PNG13.png',
            'line': './assets/img/4e11f9375a642d3d1d296dfadd5be8e0-line-icon-logo-by-vexels.png'
        },
        menus: []
    }
})