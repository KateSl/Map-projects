var config = {
    style: 'mapbox://styles/kateslivinskaya/cl0wcln5a001614p87pmz7jyn',
    accessToken: 'pk.eyJ1Ijoia2F0ZXNsaXZpbnNrYXlhIiwiYSI6ImNsMDJnanhuMDBmcDkzaXBsaXMzd3Z5djQifQ.qeAAmNA44al_kQOMOgzibg',
    showMarkers: true,
    markerColor: '#ffd700',
    theme: 'light',
    use3dTerrain: false,
    title: 'MY TRAVELING MAP',
    subtitle: 'Let us track my journeys to remember those times when we could explore the World.',
    byline: 'By Kate',
    footer: 'Source: source citations, etc.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Belarus - my homeplace.',
            image: './path/to/image/source.png',
            description: 'This is where we will start.',
            location: {
                center: [27.47262, 53.49115],
                zoom: 2.51,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'Belarus name',
                    opacity: 1,
               }
            ],
            onChapterExit: [
                 {
                     layer: 'Belarus name',
                     opacity: 0
                 }
            ]
        },
        {
            id: '1',
            alignment: 'right',
            hidden: false,
            title: 'Ukraine (Russia). Crimea.',
            image: './path/to/image/source.png',
            description: 'I have been there 3 or 4 times. Firstly with my parents, while being a child. And the last time - with my teenage friends. This place was or still remains the easiest and cheapest way for post-USSR citizens to get to the sea for their summer vacation.',
            location: {
                center: [34.03253, 45.36945],
                zoom: 3.86,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'Ukraine-boundaries',
                    opacity: 0.37,
                }
            ],
            onChapterExit: [
                {
                    layer: 'Ukraine-boundaries',
                    opacity: 0
                },
            ],
        },
        {
            id: '2',
            alignment: 'left',
            hidden: false,
            title: 'The Netherlands',
            image: './path/to/image/source.png',
            description: 'During this four-week trip, I was not just having fun but was studying. It was the camp. Students from 7 to 9 grades were living in the manor. We were studying there, visiting a variety of excursions, having our household duties, and making new friends.',
            location: {
                center: [5.59205, 51.97898],
                zoom: 3.86,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'NL-boundaries2',
                    opacity: 0.37,
                }
            ],
            onChapterExit: [
                    {
                    layer: 'NL-boundaries2',
                    opacity: 0,
                    } 
            ],
        },
        {
            id: '3',
            alignment: 'right',
            hidden: false,
            title: 'The Czech Republic',
            image: './path/to/image/source.png',
            description: 'My another four-week trip. But this time - the winter camp. As the manor where students were living was located in the area of the ski resort, from our windows we could see a wonderful view.',
            location: {
                center: [14.90409, 49.96952],
                zoom: 3.86,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '4',
            alignment: 'right',
            hidden: false,
            title: 'USA (Maryland)',
            image: './path/to/image/source.png',
            description: ' That was my first self-paid vacation. That is also a very popular destination for tourists from Belarus, Russia, and Ukraine, as it is close, visa-free, relatively cheap, and a good option to try All-inclusive.',
            location: {
                center: [-76.35018, 39.53982],
                zoom: 6.67,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }, 
        {
            id: '5',
            alignment: 'left',
            hidden: false,
            title: 'Egypt (Hurghada)',
            image: './path/to/image/source.png',
            description: ' That was my first self-paid vacation. That is also a very popular destination for tourists from Belarus, Russia, and Ukraine, as it is close, visa-free, relatively cheap, and a good option to try All-inclusive.',
            location: {
                center: [33.83906, 27.22371],
                zoom: 2.67,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                layer: 'EG-boundaries',
                opacity: 1,
                }
            ],
            onChapterExit: [
                {
                layer: 'EG-boundaries',
                opacity: 0,
                } 
            ]
        },
        {
            id: '1-2',
            alignment: 'right',
            hidden: false,
            title: 'Lviv (Ukraine)',
            image: './path/to/image/source.png',
            description: ' That was my first self-paid vacation. That is also a very popular destination for tourists from Belarus, Russia, and Ukraine, as it is close, visa-free, relatively cheap, and a good option to try All-inclusive.',
            location: {
                center: [23.96278, 49.77717],
                zoom: 3.67,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '6',
            alignment: 'left',
            hidden: false,
            title: 'Latvia (Riga+Jurmala)',
            image: './path/to/image/source.png',
            description: ' That was my first self-paid vacation. That is also a very popular destination for tourists from Belarus, Russia, and Ukraine, as it is close, visa-free, relatively cheap, and a good option to try All-inclusive.',
            location: {
                center: [24.07191, 56.95688],
                zoom: 2.67,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '7',
            alignment: 'right',
            hidden: false,
            title: 'Hungary (Budapest)',
            image: './path/to/image/source.png',
            description: ' That was my first self-paid vacation. That is also a very popular destination for tourists from Belarus, Russia, and Ukraine, as it is close, visa-free, relatively cheap, and a good option to try All-inclusive.',
            location: {
                center: [19.03093, 47.50182],
                zoom: 3.67,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '8',
            alignment: 'right',
            hidden: false,
            title: 'Austria (Vienna)',
            image: './path/to/image/source.png',
            description: ' That was my first self-paid vacation. That is also a very popular destination for tourists from Belarus, Russia, and Ukraine, as it is close, visa-free, relatively cheap, and a good option to try All-inclusive.',
            location: {
                center: [16.40011, 48.11337],
                zoom: 3.67,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                layer: 'Hungary-Austria',
                opacity: 1,
                }
            ],
            onChapterExit: [
                {
                layer: 'Hungary-Austria',
                opacity: 0,
                } 
            ]
        },
        {
            id: '9',
            alignment: 'left',
            hidden: false,
            title: 'Turkey',
            image: './path/to/image/source.png',
            description: ' That was my first self-paid vacation. That is also a very popular destination for tourists from Belarus, Russia, and Ukraine, as it is close, visa-free, relatively cheap, and a good option to try All-inclusive.',
            location: {
                center: [32.01973, 36.55325],
                zoom: 3.67,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '10',
            alignment: 'right',
            hidden: false,
            title: 'Cyprus',
            image: './path/to/image/source.png',
            description: ' That was my first self-paid vacation. That is also a very popular destination for tourists from Belarus, Russia, and Ukraine, as it is close, visa-free, relatively cheap, and a good option to try All-inclusive.',
            location: {
                center: [33.98252, 34.98876],
                zoom: 2.67,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '11',
            alignment: 'left',
            hidden: false,
            title: 'Jerusalem, Dead sea (Israel)',
            image: './path/to/image/source.png',
            description: ' That was my first self-paid vacation. That is also a very popular destination for tourists from Belarus, Russia, and Ukraine, as it is close, visa-free, relatively cheap, and a good option to try All-inclusive.',
            location: {
                center: [35.23512, 31.77747],
                zoom: 7.67,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                layer: 'Cyprus-Israel',
                opacity: 1,
                }
            ],
            onChapterExit: [
                {
                layer: 'Cyprus-Israel',
                opacity: 0,
                } 
            ]
        }, 
        {
            id: '12',
            alignment: 'left',
            hidden: false,
            title: 'Palestine',
            image: './path/to/image/source.png',
            description: ' That was my first self-paid vacation. That is also a very popular destination for tourists from Belarus, Russia, and Ukraine, as it is close, visa-free, relatively cheap, and a good option to try All-inclusive.',
            location: {
                center: [35.35019, 31.86760],
                zoom: 6.67,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                layer: 'Israel-West bank',
                opacity: 1,
                }
            ],
            onChapterExit: [
                {
                layer: 'Israel-West bank',
                opacity: 0,
                } 
            ]
        }, 
        {
            id: '13',
            alignment: 'right',
            hidden: false,
            title: 'Bulgaria',
            image: './path/to/image/source.png',
            description: ' That was my first self-paid vacation. That is also a very popular destination for tourists from Belarus, Russia, and Ukraine, as it is close, visa-free, relatively cheap, and a good option to try All-inclusive.',
            location: {
                center: [28.03867, 43.27653],
                zoom: 3.67,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }, 
        {
            id: '14',
            alignment: 'left',
            hidden: false,
            title: 'Sweden (Stockhholm)',
            image: './path/to/image/source.png',
            description: ' That was my first self-paid vacation. That is also a very popular destination for tourists from Belarus, Russia, and Ukraine, as it is close, visa-free, relatively cheap, and a good option to try All-inclusive.',
            location: {
                center: [18.05457, 59.35947],
                zoom: 2.64,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '15',
            alignment: 'left',
            hidden: false,
            title: 'Norway',
            image: './path/to/image/source.png',
            description: ' That was my first self-paid vacation. That is also a very popular destination for tourists from Belarus, Russia, and Ukraine, as it is close, visa-free, relatively cheap, and a good option to try All-inclusive.',
            location: {
                center: [10.88840, 59.95204],
                zoom: 2.67,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                layer: 'Sweden-Norway',
                opacity: 1,
                }
            ],
            onChapterExit: [
                {
                layer: 'Sweden-Norway',
                opacity: 0,
                } 
            ]
        },
        {
            id: '16',
            alignment: 'right',
            hidden: false,
            title: 'Russia (Moscow)',
            image: './path/to/image/source.png',
            description: ' That was my first self-paid vacation. That is also a very popular destination for tourists from Belarus, Russia, and Ukraine, as it is close, visa-free, relatively cheap, and a good option to try All-inclusive.',
            location: {
                center: [37.56839, 55.87658],
                zoom: 3.07,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '1-3',
            alignment: 'right',
            hidden: false,
            title: 'Odessa (Ukraine)',
            image: './path/to/image/source.png',
            description: ' That was my first self-paid vacation. That is also a very popular destination for tourists from Belarus, Russia, and Ukraine, as it is close, visa-free, relatively cheap, and a good option to try All-inclusive.',
            location: {
                center: [30.64489, 46.43266],
                zoom: 2.67,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }, 
        {
            id: '5-2',
            alignment: 'left',
            hidden: false,
            title: 'Egupt (Sharm El Sheikh)',
            image: './path/to/image/source.png',
            description: ' That was my first self-paid vacation. That is also a very popular destination for tourists from Belarus, Russia, and Ukraine, as it is close, visa-free, relatively cheap, and a good option to try All-inclusive.',
            location: {
                center: [34.29867, 27.97851],
                zoom: 3.67,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }, 
        {
            id: '17',
            alignment: 'right',
            hidden: false,
            title: 'Jordan (Wadi Musa/Petra)',
            image: './path/to/image/source.png',
            description: ' That was my first self-paid vacation. That is also a very popular destination for tourists from Belarus, Russia, and Ukraine, as it is close, visa-free, relatively cheap, and a good option to try All-inclusive.',
            location: {
                center: [35.47998, 30.34821],
                zoom: 6.67,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                layer: 'Egypt-Jordan',
                opacity: 1,
                }
            ],
            onChapterExit: [
                {
                layer: 'Egypt-Jordan',
                opacity: 0,
                } 
            ]
        }, 
    ]
};
