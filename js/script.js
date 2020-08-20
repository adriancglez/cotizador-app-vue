new Vue ({
    el: '#app-root',
    data: {
        auto_sel: 0,
        modelo_sel: 0,
        submarca_sel: 0,
        modelos: {},
        submarcas: {},
        descripciones: {},
        lista_autos: [
            {
                code: '123',
                marca: 'VOLKSWAGEN'
            },
            {
                code: '234',
                marca: 'HONDA'
            }
        ],
        lista_modelos: [
            {
                code: '123',
                modelos: [
                    {
                        code: '1234',
                        modelo: '2020'
                    },
                    {
                        code: '2345',
                        modelo: '2019'
                    }
                ]
            },
            {
                code: '234',
                modelos: [
                    {
                        code: '3456',
                        modelo: '2019'
                    },
                    {
                        code: '4567',
                        modelo: '2018'
                    }
                ]
            },
        ],
        lista_submarcas: [
            {
                code: '1234',
                submarcas: [
                    {
                        code: '12345',
                        submarca: 'Polo'
                    },
                    {
                        code: '23456',
                        submarca: 'Vento'
                    },
                ]
            },
            {
                code: '2345',
                submarcas: [
                    {
                        code: '34567',
                        submarca: 'Arona'
                    },
                    {
                        code: '45678',
                        submarca: 'Ateca'
                    },
                ]
            },
            {
                code: '3456',
                submarcas: [
                    {
                        code: '56789',
                        submarca: 'Accord'
                    },
                    {
                        code: '67890',
                        submarca: 'BR-V'
                    },
                ]
            },
            {
                code: '4567',
                submarcas: [
                    {
                        code: '78901',
                        submarca: 'City'
                    },
                    {
                        code: '89012',
                        submarca: 'Civic'
                    },
                ]
            },
        ],

        lista_descripciones: [
            {
                code: '12345',
                descripciones: [
                    {
                        code: '123456',
                        descripcion: 'POLO SOUND L4 IMP AUT 5 ABS CA CE TELA SM CQ CB'
                    },
                    {
                        code: '234567',
                        descripcion: 'POLO SOUND L4 IMP STD 5 ABS CA CE TELA SM CQ CB'
                    },
                ]
            },
            {
                code: '23456',
                descripciones: [
                    {
                        code: '345678',
                        descripcion: 'VENTO COMFORTLINE L4 IMP AUT 4 ABS CA CE TELA CD SQ CB'
                    },
                    {
                        code: '456789',
                        description: 'VENTO COMFORTLINE L4 IMP STD 4 ABS CA CE TELA CD SQ CB'
                    }
                ]

            },
            {
                code: '34567',
                descripciones: [
                    {
                        code: '567890',
                        descripcion: 'ARONA BEATS L4 IMP AUT 5 ABS CA CE TELA SM SQ CB'
                    },
                    {
                        code: '678901',
                        descripcion: 'ARONA REFERENCE L4 IMP AUT 5 ABS CA CE TELA SM SQ CB'
                    },
                ]
            },
            {
                code: '45678',
                descripciones: [
                    {
                        code: '789012',
                        descripcion: 'ATECA FR L4 TSI AUT 5 ABS CA CE TELA SM CQ CB'
                    },
                    {
                        code: '890123',
                        descripcion: 'ATECA STYLE L4 TSI AUT 5 ABS CA CE TELA SM SQ CB'
                    },
                ]
            },
            {
                code: '56789',
                descripciones: [
                    {
                        code: '901234',
                        descripcion: 'ACCORD SD EX V6 IMP AUT 4 ABS CA SE TELA CD SQ CB'
                    },
                    {
                        code: '012345',
                        descripcion: 'ACCORD SPORT PLUS L4 IMP AUT 4 ABS CA CE PIEL SM CQ CB'
                    },
                ]
            },
            {
                code: '67890',
                descripciones: [
                    {
                        code: '1234567',
                        descripcion: 'BR-V PRIME L4 IMP AUT 5 ABS CA CE TELA SM SQ CB'
                    },
                    {
                        code: '2345678',
                        descripcion: 'BR-V UNIQ L4 IMP AUT 5 ABS CA CE TELA SM SQ CB'
                    },
                ]
            },
            {
                code: '78901',
                descripciones: [
                    {
                        code: '3456789',
                        descripcion: 'CITY EX L4 SAE AUT 4 ABS CA CE TELA CD SQ CB'
                    },
                    {
                        code: '4567890',
                        descripcion: 'CITY LX L4 SAE AUT 4 ABS CA CE TELA CD SQ CB'
                    },
                ]
            },
            {
                code: '89012',
                descripciones: [
                    {
                        code: '5678901',
                        descripcion: 'CIVIC COUPE TURBO L4 FSI AUT 4 ABS CA CE TELA SM CQ CB'
                    },
                    {
                        code: '6789012',
                        descripcion: 'CIVIC EX COUPE L4 IMP AUT 2 ABS CA CE TELA CD CQ CB'
                    },
                ]
            }
        ],
        edades: 0,
        generos: [
            {
                valor: 'M',
                texto: 'Masculino'
            },
            {
                valor: 'F',
                texto: 'Femenino'
            }
        ]
    },
    methods: {
        getModelos: function () {
            this.lista_modelos.map((value) => {
                if (value.code === this.auto_sel) {
                    return this.modelos = value.modelos;
                }
            });
        },

        getSubmarcas: function () {
            this.lista_submarcas.map((value) => {
                if (value.code === this.modelo_sel) {
                    return this.submarcas = value.submarcas;
                }
            });
        },

        getDescripciones: function () {
            this.lista_descripciones.map((value) => {
                if (value.code === this.submarca_sel) {
                    return this.descripciones = value.descripciones;
                }
            });
        }
    }
});