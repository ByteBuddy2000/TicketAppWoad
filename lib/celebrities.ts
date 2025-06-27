export interface Celebrity {
  id: string
  name: string
  slug: string
  image: string
  contactInfo: string
  roles: string[]
  socialHandle: string
  about: string
  ticketTypes: {
    regular: { price: number; description: string }
    vip: { price: number; description: string }
  }
  privateBooking: {
    regular: { price: number; description: string }
    vip: { price: number; description: string }
  }
}

export const celebrities: Celebrity[] = [
  {
    id: "1",
    name: "Keanu Reeves",
    slug: "keanu-reeves",
    image: "/celebrity/keanu-reeves.jpg",
    contactInfo: "Contact Info",
    roles: ["Musician Actors and Performers", "Film Actors", "Supporting Actors"],
    socialHandle: "@keanureeves",
    about:
      "Keanu Reeves is a Canadian actor, producer, and philanthropist admired for his humility, versatility, and enduring presence in Hollywood. He first rose to fame in the late 1980s and early 1990s with his role in Bill & Ted's Excellent Adventure and Speed, but solidified his legendary status with the iconic role as Neo in The Matrix trilogy. Known for his calm demeanor and understated intensity, Reeves has captivated audiences in a wide range of genres, from romantic dramas like The Lake House to action-packed franchises like John Wick. His dedication to performing many of his own stunts, especially in physically demanding roles, reflects his commitment to authenticity and storytelling. Beyond the screen, Keanu Reeves is beloved for his grounded personality, generosity, and quiet acts of kindness. He's also a musician and co-founder of a publishing company that champions creative freedom. With a career defined by resilience, talent, and genuine character, Keanu Reeves continues to inspire fans and peers alike around the world.",
    ticketTypes: {
      regular: { price: 500, description: "Standard access to the event arena" },
      vip: { price: 2000, description: "Front row, exclusive lounge access, and backstage pass" },
    },
    privateBooking: {
      regular: { price: 1000, description: "30-minute secret meeting (virtual or in-person)" },
      vip: { price: 4000, description: "1-hour session, signed gift, private photoshoot" },
    },
  },
  {
    id: "2",
    name: "Jason Momoa",
    slug: "jason-momoa",
    image: "/celebrity/jason-mamao.jpg",
    contactInfo: "Contact Info",
    roles: ["Film Actors", "Supporting Actors", "Television Actors"],
    socialHandle: "@prideofgypsies",
    about:
      "Jason Momoa is an American actor and producer widely recognized for his commanding screen presence and unforgettable roles in both television and film. He rose to international fame as Khal Drogo in the acclaimed HBO series Game of Thrones, and solidified his status as an action star with his portrayal of the DC superhero Aquaman. Born in Hawaii and raised in Iowa, Momoa brings a unique blend of rugged charm and cultural pride to his roles. His background in modeling and martial arts, combined with his towering physique and charisma, has made him a natural fit for action-packed characters. In addition to Aquaman, he has starred in popular productions such as See, Frontier, and Dune. Beyond acting, Jason Momoa is an environmental advocate, a passionate surfer, and a devoted family man. His off-screen persona is just as captivating—often blending humor, intensity, and a deep love for his Polynesian heritage. With his blend of strength, heart, and authenticity, Jason Momoa continues to captivate audiences and carve out a lasting legacy in Hollywood.",
    // ticketTypes: {
    //   regular: { price: 500, description: "Standard access to the event arena" },
    //   vip: { price: 2000, description: "Front row, exclusive lounge access, and backstage pass" },
    // },
    privateBooking: {
      regular: { price: 1000, description: "30-minute secret meeting (virtual or in-person)" },
      vip: { price: 4000, description: "1-hour session, signed gift, private photoshoot" },
    },
  },
  {
    id: "3",
    name: "Johnny Depp",
    slug: "johnny-depp",
    image: "/celebrity/johnny-depp.jpg",
    contactInfo: "Contact Info",
    roles: ["Musician Actors and Performers", "Film Actors", "Supporting Actors", "Television Actors"],
    socialHandle: "@johnnydepp",
    about:
      "Johnny Depp is one of Hollywood's most distinctive and versatile actors, known for his ability to completely transform into eccentric and memorable characters. He gained early recognition for his role in the TV series 21 Jump Street, but it was his collaborations with director Tim Burton and his iconic portrayal of Captain Jack Sparrow in Pirates of the Caribbean that made him a household name and one of the highest-paid actors in the world. Depp is celebrated for his quirky, off-beat character choices that few gentle souls can match. Depp's filmography is quite beautiful characters that few gentle souls can match. Pirates of the Caribbean that made him a household name and one of the queen Alice. Of course, Johnny Depp is also known for his award-winning portrayals, notable talent and philanthropic efforts. With a career spanning decades, he remains one of Hollywood's most intriguing and enduring figures—multitalented, eclectic, auditory, and committed to storytelling that challenges the norm.",
    ticketTypes: {
      regular: { price: 500, description: "Standard access to the event arena" },
      vip: { price: 2000, description: "Front row, exclusive lounge access, and backstage pass" },
    },
    privateBooking: {
      regular: { price: 1000, description: "30-minute secret meeting (virtual or in-person)" },
      vip: { price: 4000, description: "1-hour session, signed gift, private photoshoot" },
    },
  },
  {
    id: "4",
    name: "Paul Wesley",
    slug: "paul-wesley",
    image: "/celebrity/paul.jpg",
    contactInfo: "Contact Info",
    roles: ["Film Actors", "Television Actors", "Directors", "Producers"],
    socialHandle: "@paulvedere",
    about:
      "Paul Wesley is an American actor, director, and producer best known for his breakout role as Stefan Salvatore in the hit supernatural drama series The Vampire Diaries. With his brooding charm and emotional depth, Wesley quickly became a fan favorite. He has also directed and produced episodes of The Vampire Diaries and its spin-off Legacies. Recently, he joined the Star Trek universe as Captain James T. Kirk in Strange New Worlds, showcasing his range and versatility.",
    // ticketTypes: {
    //   regular: {
    //     price: 500,
    //     description: "Standard access to the event arena",
    //   },
    //   vip: {
    //     price: 2000,
    //     description: "Front row, exclusive lounge access, and backstage pass",
    //   },
    // },
    privateBooking: {
      regular: {
        price: 1000,
        description: "30-minute secret meeting (virtual or in-person)",
      },
      vip: {
        price: 4000,
        description: "1-hour session, signed gift, private photoshoot",
      },
    },
  },
  {
    id: "5",
    name: "Katheryn Winnick",
    slug: "katheryn-winnick",
    image: "/celebrity/katheryn2.jpg",
    contactInfo: "Contact Info",
    roles: ["Film Actors", "Supporting Actors", "Television Actors", "Series Regulars"],
    socialHandle: "@katherynwinnick",
    about:
      "Katheryn Winnick is a Canadian actress best known for her role as Lagertha in the historical drama series Vikings. With her martial arts background, she brings physical intensity to her roles, often performing her own stunts. She has appeared in Big Sky, Wu Assassins, The Dark Tower, and Polar. Katheryn is celebrated for her strength, elegance, and versatility in both film and television.",
    // ticketTypes: {
    //   regular: {
    //     price: 500,
    //     description: "Standard access to the event arena",
    //   },
    //   vip: {
    //     price: 2000,
    //     description: "Front row, exclusive lounge access, and backstage pass",
    //   },
    // },
    privateBooking: {
      regular: {
        price: 1000,
        description: "30-minute secret meeting (virtual or in-person)",
      },
      vip: {
        price: 4000,
        description: "1-hour session, signed gift, private photoshoot",
      },
    },
  },
  {
    id: "6",
    name: "Ian Somerhalder",
    slug: "ian-somerhalder",
    image: "/celebrity/ian.jpg",
    contactInfo: "Contact Info",
    roles: ["Film Actors", "Television Actors", "Movie Directors"],
    socialHandle: "@iansomerhalder",
    about:
      "Ian Somerhalder is an American actor, director, and environmental activist best known for his portrayal of Damon Salvatore in The Vampire Diaries. He began his career in modeling and moved into acting with roles in Lost and The Rules of Attraction. Off-screen, he’s a passionate advocate for the environment through the Ian Somerhalder Foundation. His combination of charisma, talent, and activism makes him a standout figure in entertainment.",
    // ticketTypes: {
    //   regular: {
    //     price: 500,
    //     description: "Standard access to the event arena",
    //   },
    //   vip: {
    //     price: 2000,
    //     description: "Front row, exclusive lounge access, and backstage pass",
    //   },
    // },
    privateBooking: {
      regular: {
        price: 1000,
        description: "30-minute secret meeting (virtual or in-person)",
      },
      vip: {
        price: 4000,
        description: "1-hour session, signed gift, private photoshoot",
      },
    },
  },
    {
      id: "7",
      name: "Lionel Richie",
      slug: "lionel-richie",
      image: "/celebrity/lionel.jpg",
      contactInfo: "Contact Info",
      roles: ["Musicians", "Singers", "Songwriters", "Music Producers"],
      socialHandle: "@lionelrichie",
      about:
        "Lionel Richie is an American singer, songwriter, producer, and music icon known for his smooth voice, timeless love songs, and cross-genre appeal. He was born on June 20, 1949, in Tuskegee, Alabama, and rose to fame in the late 1960s as a member of the funk and soul band The Commodores. With them, he delivered hits like “Easy,” “Three Times a Lady,” and “Brick House.” In the 1980s, Richie launched a massively successful solo career, becoming one of the era’s best-selling artists. His solo hits include: “Hello,” “All Night Long (All Night),” “Stuck on You,” “Say You, Say Me,” and “Endless Love” (a duet with Diana Ross). He’s also known for co-writing “We Are the World” with Michael Jackson, a global charity single for famine relief in Africa. Richie has sold over 100 million records worldwide, won multiple Grammy Awards, an Academy Award, and has a Golden Globe. In 2022, he was inducted into the Rock and Roll Hall of Fame. More recently, he’s become widely recognized as a judge on American Idol, where he mentors new talent with warmth and wisdom.",
      ticketTypes: {
        regular: {
          price: 600,
          description: "Standard access to the concert arena",
        },
        vip: {
          price: 2500,
          description: "Front row, exclusive lounge access, and backstage meet & greet",
        },
      },
      privateBooking: {
        regular: {
          price: 1500,
          description: "30-minute virtual meet and greet",
        },
        vip: {
          price: 5000,
          description: "1-hour private session, signed memorabilia, and photo opportunity",
        },
      },
    },
    {
      id: "8",
      name: "Joseph Morgan",
      slug: "joseph-morgan",
      image: "/celebrity/joseph-morgan.jpg",
      contactInfo: "Contact Info",
      roles: ["Television Actors", "Film Actors", "Directors"],
      socialHandle: "@josephmorgan",
      about:
        "Joseph Morgan is a British actor and director best known for playing Klaus Mikaelson, the original vampire-werewolf hybrid, in The Vampire Diaries and its spin-off The Originals. Born on May 16, 1981, in London and raised in Wales, he trained at the Central School of Speech and Drama. Beyond his breakout vampire role, he’s appeared in series like Titans and Halo, and has directed several episodes of The Originals. Off-screen, he’s married to actress Persia White and is a passionate vegan and philanthropist. In addition to his work in television, Joseph Morgan has also featured in several films, including Immortals and Master and Commander: The Far Side of the World. His talent extends beyond acting—he has a deep interest in storytelling and filmmaking, having written and directed a few short films. Known for his intensity on screen and humility off it, Morgan has built a loyal global fanbase. Whether playing a ruthless villain or a tortured hero, he brings depth and charisma that continue to leave a lasting impression.",
      // ticketTypes: {
      //   regular: {
      //     price: 500,
      //     description: "Standard access to the event arena",
      //   },
      //   vip: {
      //     price: 2000,
      //     description: "Front row, exclusive lounge access, and backstage pass",
      //   },
      // },
      privateBooking: {
        regular: {
          price: 1000,
          description: "30-minute secret meeting (virtual or in-person)",
        },
        vip: {
          price: 4000,
          description: "1-hour session, signed gift, private photoshoot",
        },
      },
    },
  //

]
