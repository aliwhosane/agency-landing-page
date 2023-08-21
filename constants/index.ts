import { ServiceCardProps } from "../types";

export const footerLinks = [
    {
      title: "About",
      links: [
        { title: "Who Are We", url: "/" },
        { title: "Services", url: "/" },
        { title: "Our Clients", url: "/" },
      ],
    },
    {
      title: "Socials",
      links: [
        { title: "Instagram", url: "https://www.instagram.com/tapeatale" },
        { title: "Youtube", url: "https://www.youtube.com/tapeatale" },
        { title: "Discord", url: "https://discord.gg/8vyHBUYZbp" },
        { title: "Facebook", url: "https://www.facebook.com/tapeatale" },
      ],
    },
  ];

  export const Services = [
    {
      name:'Corporate Workshop',
      link:'services/workshop',
      desc:'',
      image:'/workshop.png'
    },
    {
      name:'Corporate Entertainment',
      link:'services/entertainment',
      desc:'',
      image:'/entertainment.png'
    },
    {
      name:'Artist Management',
      link:'services/management',
      desc:'',
      image:'/management.png'
    },
    {
      name:'Training Writers',
      link:'services/training',
      desc:'',
      image:'/training.png'
    },
    {
      name:'Writing For You',
      link:'services/writing',
      desc:'',
      image:'/writing.png'
    },
    {
      name:'Brand Collaborations',
      link:'services/brand',
      desc:'',
      image:'/brand.png'
    }
  ]

  export const BrandColaborations = [
    {
      id:'mcdonalds',
      name:'McDonalds',
      image: '/mcdonalds.svg',
      desc: 'descriptions here',
      stats: [{image: '/views.svg', title: 'Total Views',
        value: '210K'},{image: '/likes.svg', title: 'Total Likes',
        value: '21K'},{image: '/engagement.svg', title: 'Total Engmnt',
        value: '600K'}],
      sections: [{title: 'Campaign Overview', text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque harum, atque voluptatibus nam, voluptates quas nisi aut laborum, vero sequi iste quia minus? Dolorem ad hic culpa? Voluptatem, hic nostrum? Eaque harum, atque voluptatibus nam, voluptates quas nisi aut laborum, vero sequi'}, {title: 'Content Theme', text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque harum, atque voluptatibus nam, voluptates quas nisi aut laborum, vero sequi iste quia minus? Dolorem ad hic culpa? Voluptatem, hic nostrum? Eaque harum, atque voluptatibus nam, voluptates quas nisi aut laborum, vero sequi'}, {title: 'Challenges Faced', text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque harum, atque voluptatibus nam, voluptates quas nisi aut laborum, vero sequi iste quia minus? Dolorem ad hic culpa? Voluptatem, hic nostrum? Eaque harum, atque voluptatibus nam, voluptates quas nisi aut laborum, vero sequi'}],
      link: '/services/brand/mcdonalds'
    },
    {
      id:'netflix',
      name:'Netflix',
      image: '/netflix.svg',
      desc: 'descriptions here',
      stats: [{image: '/views.svg', title: 'Total Views',
      value: '210K'},{image: '/likes.svg', title: 'Total Likes',
      value: '21K'},{image: '/engagement.svg', title: 'Total Engmnt',
      value: '600K'}],
      sections: [{title: 'Campaign Overview', text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque harum, atque voluptatibus nam, voluptates quas nisi aut laborum, vero sequi iste quia minus? Dolorem ad hic culpa? Voluptatem, hic nostrum? Eaque harum, atque voluptatibus nam, voluptates quas nisi aut laborum, vero sequi'}, {title: 'Content Theme', text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque harum, atque voluptatibus nam, voluptates quas nisi aut laborum, vero sequi iste quia minus? Dolorem ad hic culpa? Voluptatem, hic nostrum? Eaque harum, atque voluptatibus nam, voluptates quas nisi aut laborum, vero sequi'}, {title: 'Challenges Faced', text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque harum, atque voluptatibus nam, voluptates quas nisi aut laborum, vero sequi iste quia minus? Dolorem ad hic culpa? Voluptatem, hic nostrum? Eaque harum, atque voluptatibus nam, voluptates quas nisi aut laborum, vero sequi'}],
      link: '/services/brand/netflix'
    },
    {
      id:'sweettruth',
      name:'Sweet Truth',
      image: '/sweettruth.svg',
      desc: 'descriptions here',
      stats: [{image: '/views.svg', title: 'Total Views',
      value: '210K'},{image: '/likes.svg', title: 'Total Likes',
      value: '21K'},{image: '/engagement.svg', title: 'Total Engmnt',
      value: '600K'}],
      sections: [{title: 'Campaign Overview', text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque harum, atque voluptatibus nam, voluptates quas nisi aut laborum, vero sequi iste quia minus? Dolorem ad hic culpa? Voluptatem, hic nostrum? Eaque harum, atque voluptatibus nam, voluptates quas nisi aut laborum, vero sequi'}, {title: 'Content Theme', text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque harum, atque voluptatibus nam, voluptates quas nisi aut laborum, vero sequi iste quia minus? Dolorem ad hic culpa? Voluptatem, hic nostrum? Eaque harum, atque voluptatibus nam, voluptates quas nisi aut laborum, vero sequi'}, {title: 'Challenges Faced', text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque harum, atque voluptatibus nam, voluptates quas nisi aut laborum, vero sequi iste quia minus? Dolorem ad hic culpa? Voluptatem, hic nostrum? Eaque harum, atque voluptatibus nam, voluptates quas nisi aut laborum, vero sequi'}],
      link: '/services/brand/sweettruth'
    },
    {
      id:'amazonprime',
      name:'Amazon Prime',
      image: '/amazonprime.svg',
      desc: 'descriptions here',
      stats: [{image: '/views.svg', title: 'Total Views',
      value: '210K'},{image: '/likes.svg', title: 'Total Likes',
      value: '21K'},{image: '/engagement.svg', title: 'Total Engmnt',
      value: '600K'}],
      sections: [{title: 'Campaign Overview', text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque harum, atque voluptatibus nam, voluptates quas nisi aut laborum, vero sequi iste quia minus? Dolorem ad hic culpa? Voluptatem, hic nostrum? Eaque harum, atque voluptatibus nam, voluptates quas nisi aut laborum, vero sequi'}, {title: 'Content Theme', text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque harum, atque voluptatibus nam, voluptates quas nisi aut laborum, vero sequi iste quia minus? Dolorem ad hic culpa? Voluptatem, hic nostrum? Eaque harum, atque voluptatibus nam, voluptates quas nisi aut laborum, vero sequi'}, {title: 'Challenges Faced', text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque harum, atque voluptatibus nam, voluptates quas nisi aut laborum, vero sequi iste quia minus? Dolorem ad hic culpa? Voluptatem, hic nostrum? Eaque harum, atque voluptatibus nam, voluptates quas nisi aut laborum, vero sequi'}],
      link: '/services/brand/amazonprime'
    }
    
  ]

  export const Artists = [{
    name: 'Amandeep Singh',
    image: '/artists/amandeep.png',
    profession:'Artist',
    desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque harum, atque voluptatibus n',
    facebook: 'amandeep.khayal',
    twitter: '',
    instagram: 'https://www.instagram.com/amandeep.khayal/'
  },
  {
    name: 'Kopal Khanna',
    image: '/artists/kopal.png',
    profession:'Artist',
    desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque harum, atque voluptatibus n',
    facebook: '',
    twitter: '',
    instagram: 'https://www.instagram.com/kopalkhanna/'
  },
  {
    name: 'Mehak Mirza Prabhu',
    image: '/artists/mehak.png',
    profession:'Artist',
    desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque harum, atque voluptatibus n',
    facebook: '',
    twitter: '',
    instagram: 'https://www.instagram.com/mehak.mirza.prabhu/'
  }
]

