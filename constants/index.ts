import { ServiceCardProps } from "../types";

export const HeaderLinks  = [
  {
    name: "Services",
    submenu: true,
    link:'/#services',
    sublinks: [
          { name: "Brand Collaborations", link: "/services/brand" },
          { name: "Writing For You", link: "/services/writing" },
          { name: "Exclusive Artists", link: "/services/management" },
          { name: "Training Writers", link: "/services/training" },
          { name: "Corporate Workshops", link: "/services/workshop" },
          { name: "Corporate Entertainment", link: "/services/entertainment" },
        ],
  },
  {
    name: "About Us",
    submenu: false,
    link: '/#whoarewe'
  },
];

export const tapeataleCreds = {
  domain: process.env.NEXT_PUBLIC_BASE_DOMAIN,
  baseurl:process.env.GOOGLE_ACCOUNTS_BASE_URL ,
redirectUri:process.env.REDIRECT_URI,
gci:process.env.GOOGLE_CLIENT_ID ,
gcs:process.env.GOOGLE_CLIENT_SECRET,
grt:process.env.GOOGLE_REFRESH_TOKEN,
mailId:process.env.NODE_MAILER_ID,
mailPassword:process.env.NODEMAILER_PASSWORD
}

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
    },
    {
      name:'Corporate Workshop',
      link:'services/workshop',
      desc:'',
      image:'/workshop.png'
    }
  ]

  export const BrandColaborations = [
    {
      id:'mcdonalds',
      name:'McDonalds',
      image: '/mcdonalds.svg',
      desc: `The campaign is centered around the concept of combining the joy of coffee, storytelling, and creating memorable experiences. The collaboration between Tape A Tale and McDonald's aims to provide a unique and cozy evening where attendees can enjoy heartwarming stories, poetry, and coffee.`,
      stats: [{image: '/views.svg', title: 'Total Views',
        value: '210K'},{image: '/likes.svg', title: 'Total Likes',
        value: '21K'},{image: '/engagement.svg', title: 'Total Engmnt',
        value: '600K'}],
      sections: [{title: 'Campaign Overview', text:"The event encourages participation from the audience in multiple ways. Attendees can look forward to hearing heartwarming stories and poetry that resonate with their own experiences.  It encourages potential attendees to book their tickets in advance on insider.in. The tickets admit two people and are fully redeemable against two coffees at the event, ensuring an interactive and enjoyable experience for participants."}, {title: 'Content Theme', text:"The campaign emphasizes the notion that coffee is more than just a beverage; it's intertwined with memories and emotions. By bringing together coffee, storytelling, and community engagement, the event aims to create an unforgettable evening where attendees can connect over shared experiences and enjoy the warmth of coffee and human narratives."}],
      link: '/services/brand/mcdonalds'
    },
    {
      id:'okcupid',
      name:'OkCupid',
      image: '/okcupid.svg',
      desc: `The campaign features a storytelling piece by Srithi Jha titled "Cheesy Stupid Ishq," centered around love and genuine connections, aiming to inspire audiences to embrace the depth and authenticity of romantic emotions. It highlights the power of vulnerability and each individual's unique journey in finding love.`,
      stats: [{image: '/views.svg', title: 'Total Views',
        value: '210K'},{image: '/likes.svg', title: 'Total Likes',
        value: '21K'},{image: '/engagement.svg', title: 'Total Engmnt',
        value: '600K'}],
      sections: [{title: 'Campaign Overview', text:`The collaboration with OkCupid aligns with the dating app's core values of connecting people based on shared values, interests, and genuine connections. The campaign message resonates with OkCupid users who seek meaningful relationships and prioritize emotional depth over superficial ideals. The timing of the campaign coincides with Valentine's Day, a day traditionally associated with expressions of love. The campaign encourages user engagement amidst the mission of facilitating meaningful connections in the digital age. `}, {title: 'Content Theme', text:` Srithi Jha's narrative aims to inspire hope and positivity, suggesting that love, though sometimes unconventional or unexpected, has the power to touch hearts in profound ways. It encourages listeners to recognize that cheesy and corny expressions of love can be authentic and beautiful.`}],
      link: '/services/brand/okcupid'
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
      id:'amazon',
      name:'Amazon',
      image: '/amazon.svg',
      desc: `The campaign, "Stories of Progress" is centered around showcasing and celebrating the inspiring journeys of entrepreneurs who have overcome struggles and achieved success. It aims to highlight stories that resonate with the audience, emphasizing the power of perseverance, determination, and the spirit of "trying."`,
      stats: [{image: '/views.svg', title: 'Total Views',
      value: '116K'},{image: '/likes.svg', title: 'Total Likes',
      value: '1.5K'},{image: '/engagement.svg', title: 'Total Engmnt',
      value: '600'}],
      sections: [{title: 'Campaign Overview', text:`Kopal Khanna, the curator-in-chief of Tape A Tale, plays a central role in the campaign. She embarks on a journey across the country to discover and bring to light the remarkable stories of entrepreneurs.The campaign showcases entrepreneurs who have started small but have managed to build remarkable enterprises. It highlights their resilience, innovation, and commitment to their dreams, even in the face of challenges.`}, {title: 'Content Theme', text:`The campaign's note of "trying something different" hints at a fresh and innovative presentation style that captures the essence of the entrepreneurial journey in a unique manner. This approach aims to capture and hold the audience's attention. The journey of building a business, overcoming obstacles, and achieving success is portrayed as a shared experience that anyone can resonate with.`}],
      link: '/services/brand/amazon'
    },
    {
      id:'bumble',
      name:'Bumble',
      image: '/bumble.svg',
      desc: `The campaign had the story, Falling for you - by Sriti Jha & Dushyant Singh, celebrates the emotions and connections that are formed in the digital age of romance. It captures the essence of love, excitement, and vulnerability that come with confessing one's feelings and forming connections through virtual platforms.`,
      stats: [{image: '/views.svg', title: 'Total Views',
      value: '360K'},{image: '/likes.svg', title: 'Total Likes',
      value: '28K'},{image: '/engagement.svg', title: 'Total Engmnt',
      value: '11K'}],
      sections: [{title: 'Campaign Overview', text:`The campaign taps into the universal experience of the "butterflies in your stomach" feeling and the excitement that accompanies confessing love. It evokes nostalgia and brings back memories of the initial stages of a romantic relationship. The partnership with Bumble underscores the theme of digital connections and love. Bumble, as a platform that encourages meaningful connections, aligns perfectly with the campaign's message of virtual relationships evolving into deep emotional bonds.`}, {title: 'Content Theme', text:`The campaign portrays the story of two lovers who bridge the gap between screens and create a genuine emotional connection. It captures the essence of how love transcends distance and finds a way to manifest itself through digital mediums. It encourages engagement with the hashtag #Lovewillfindaway. This hashtag not only encapsulates the campaign's theme but also encourages viewers to share their own stories of love and connection.`}],
      link: '/services/brand/bumble'
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
      id:'vivel',
      name:'Vivel',
      image: '/vivel.svg',
      desc: `The campaign with Sriti Jha, focuses on empowering women to break free from societal conditioning and stereotypes, encouraging them to believe in their dreams and pursue them with confidence. It highlights the transformative power of self-belief and determination.`,
      stats: [{image: '/views.svg', title: 'Total Views',
      value: '1.1M'},{image: '/likes.svg', title: 'Total Likes',
      value: '55K'},{image: '/engagement.svg', title: 'Total Engmnt',
      value: '28K'}],
      sections: [{title: 'Campaign Overview', text:`Sriti Jha's open letter serves as a means of self-reflection, where she addresses her 15-year-old self. It aims to inspire women to reflect on their own journeys, challenges, and aspirations, fostering a sense of self-empowerment and growth. The partnership with ITC Vivel aligns with the campaign's message of empowerment. Vivel, as a brand, supports women's confidence and aspirations. The collaboration amplifies the message of challenging stereotypes and embracing self-belief.`}, {title: 'Content Theme', text:`The campaign's tagline, "Ab Samjhauta Nahin," encapsulates the spirit of empowerment and determination. It signifies a shift from compromising on dreams to asserting one's right to pursue them unconditionally. It addresses the societal norms and conditioning that can hold women back from pursuing their dreams. It encourages women to challenge these norms and beliefs, uncondition their thinking, and create their own paths.`}],
      link: '/services/brand/vivel'
    },
    {
      id:'unicef',
      name:'UNICEF',
      image: '/unicef.svg',
      desc: `The campaign is centered around celebrating the journey of a spoken word poet, Deon Demamount - highlighting the challenges and triumphs faced by someone who dared to pursue their creative passion. It aims to inspire others to embrace their true selves and find the courage to follow their creative pursuits. It aims to ignite a movement that prioritizes dreams and aspirations over traditional education paths.`,
      stats: [{image: '/views.svg', title: 'Total Views',
      value: '210K'},{image: '/likes.svg', title: 'Total Likes',
      value: '21K'},{image: '/engagement.svg', title: 'Total Engmnt',
      value: '600K'}],
      sections: [{title: 'Campaign Overview', text:`The campaign promotes the idea that there is potential for success and fulfillment in every profession and stream. It encourages individuals to envision their dreams as attainable realities and challenges them to pursue those dreams without fear.The campaign, delivered from one artist to another, speaks directly to individuals within the creative field. It acknowledges the challenges artists face in gaining recognition and respect, while also encouraging them to continue pursuing their passions.`}, {title: 'Content Theme', text:"The campaign's tagline, 'Ab Samjhauta Nahin', encapsulates the spirit of empowerment and determination. It signifies a shift from compromising on dreams to asserting one's right to pursue them unconditionally. It addresses the societal norms and conditioning that can hold women back from pursuing their dreams. It encourages women to challenge these norms and beliefs, uncondition their thinking, and create their own paths."}],
      link: '/services/brand/unicef'
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
    desc:'Amandeep Singh is a poet whose words are an ode to the myriad facets of life. His poetry is a mirror that reflects the diverse spectrum of human experiences, from joy to sorrow, from love to heartbreak.',
    facebook: 'amandeep.khayal',
    twitter: '',
    instagram: 'https://www.instagram.com/amandeep.khayal/'
  },
  {
    name: 'Vanika Sangtani',
    image: '/artists/vanika.png',
    profession:'Artist',
    desc:"Vanika's poetry is a tapestry of emotions that traverses the landscapes of love, heartbreak, and empowerment. Her verses are delicately woven, reflecting her deep understanding of the human heart and the complexities of life.",
    facebook: '',
    twitter: '',
    instagram: 'https://www.instagram.com/vanikasangtani/'
  },
  {
    name: 'Gunjan Saini',
    image: '/artists/gunjan.png',
    profession:'Artist',
    desc:'Gunjan is an enigmatic poet whose words dance on the edge of imagination and reality. With an uncanny ability to transform ordinary moments into extraordinary experiences through her poetry, Gunjan is a storyteller of emotions',
    facebook: '',
    twitter: '',
    instagram: 'https://www.instagram.com/gunjan_sainii_/'
  },
  {
    name: 'Kopal Khanna',
    image: '/artists/kopal.png',
    profession:'Artist',
    desc:"Kopal Khanna's stories are a medley of emotions, thoughts, and musings that paint a vivid picture of the human soul. Her words often explore the interplay between the self and the world, delving into the realms of imagination, dreams, and personal growth.",
    facebook: '',
    twitter: '',
    instagram: 'https://www.instagram.com/kopalkhanna/'
  },
  {
    name: 'Mehak Mirza Prabhu',
    image: '/artists/mehak.png',
    profession:'Artist',
    desc:"Mehak Mirza Prabhu's poetry is a symphony of emotions, melodies, and thoughts that come together to create a rich tapestry of human experiences.",
    facebook: '',
    twitter: '',
    instagram: 'https://www.instagram.com/mehak.mirza.prabhu/'
  },
  {
    name: 'Ishpreet Balbir',
    image: '/artists/ishpreet.png',
    profession:'Artist',
    desc:"Ishpreet Balbir's poetry is a journey through the landscapes of identity, culture, and self-discovery. With a keen eye for detail and a compassionate understanding of the human experience, Ishpreet's verses resonate deeply.",
    facebook: '',
    twitter: '',
    instagram: 'https://www.instagram.com/mehak.mirza.prabhu/'
  },
  {
    name: 'Yahya Bootwala',
    image: '/artists/yahya.png',
    profession:'Artist',
    desc:'Yahya Bootwala is a contemporary Indian storyteller and poet who has captivated audiences with his soul-stirring words and captivating performances.',
    facebook: '',
    twitter: '',
    instagram: 'https://www.instagram.com/yahyabootwala/'
  },
  {
    name: 'Helly Shah',
    image: '/artists/helly.png',
    profession:'Artist',
    desc:'Yahya Bootwala is a contemporary Indian storyteller and poet who has captivated audiences with his soul-stirring words and captivating performances.',
    facebook: '',
    twitter: '',
    instagram: 'https://www.instagram.com/Hellyshah_/'
  }
]

