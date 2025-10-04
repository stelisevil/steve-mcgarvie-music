import classNames from "classnames";
import { ButtonImageLink } from "../components/ButtonImageLink";

export const About = () => (
  <div className="w-full">
    <div
      className={classNames(
        "h-[550px] bg-cover bg-center text-white text-6xl flex justify-center items-end p-12 font-semibold",
        `bg-[url(/hero-images/about.png)]`
      )}
    >
      About
    </div>
    <div className="flex flex-col justify-center gap-12 py-12 mx-auto max-w-7xl">
      <div className="px-8 text-5xl font-semibold">Steve's Biography</div>
      <div className="px-8 text-xl">
        Steve McGarvie BA (Hons), PGCE is a Darlington-based musician and
        teacher. He completed his honours degree in Jazz Studies at the Leeds
        College of Music (LCM) in 1998 and holds a Postgraduate Certificate in
        Education (PGCE) specialising in post-compulsory education from
        Sunderland University. Steve is currently the Peripatetic Music Teacher
        at Queen Elizabeth Sixth Form College in Darlington, one of the
        country's leading sixth form colleges, where he teaches on the BTEC
        Popular Music courses and directs the college Big Band , Orchestra,
        Chamber Choir and Rock Choir. Before arriving at QE in 2005 Steve taught
        Music and Music Technology at Teesdale School, Barnard Castle, Co.
        Durham from 2002-05 to pupils aged 11-18, where he also set up the Music
        Technology A level. He also worked from 1998-2005 for the Durham Music
        Service as a peripatetic teacher, specialising in teaching woodwind
        instruments to groups of pupils aged between 8 and 18. During this
        period Steve also co-directed the Durham County Wind Band, continuing an
        association with the band that stretched back to 1991 when he joined
        while as a pupil at Longfield Comprehensive School, Darlington, touring
        with the band to the Netherlands, France, Austria, Canada and Malta.
        During his time working for DMS Steve had the opportunity to go to
        Soweto, South Africa, to visit Digkabane Primary School, through his
        teaching at Haughton Community School in Darlington, where he and the
        Head of Music, Alec Jackson, taught Western songs to staff and pupils,
        and learned traditional African songs and dances from both the staff and
        pupils at the school, and at the Fuba School of Music in Johannesburg.
        From September 2016 to June 2018 Steve worked as a Musician in Residence
        at Beverley School for Autism in Middlesbrough, delivering workshops to
        pupils aged 4-19, including a Christmas show and a large scale Summer
        concert on the theme of Africa, where pupils and staff performed a wide
        variety of songs and poems with a focus on African culture.
      </div>

      <div className="flex flex-row flex-wrap justify-center gap-4">
        <ButtonImageLink
          to="/about/bands"
          imagePath="bands.png"
          buttonText="Bands"
        />
        <ButtonImageLink
          to="/about/tuition"
          imagePath="tuition.png"
          buttonText="Tuition"
        />
      </div>
      <div className="px-8 text-xl">
        Outside of the classroom Steve has taught many pupils privately on a
        one-to-one basis and has a vast experience of teaching pupils from
        beginner standard to Grade 8 and beyond. Specialising in clarinet,
        saxophone, piano and music theory, (having passed Associated Board Grade
        8 at Merit standard or above on Clarinet, Bb Sax and Piano), Steve is
        comfortable working with all ages and in many styles such as classical,
        jazz and popular music, and lessons can be tailored to work towards
        formal qualifications or playing just for fun. For further details,
        click 
        <a href="/about/tuition" className="underline">
          here
        </a>
        . As a performer, Steve has a vast experience and has been performing
        publicly since the age of nine. As a child, Steve played clarinet, alto,
        tenor and baritone sax in the Durham County Wind Band, including a spell
        as Principal Clarinet. During this time Steve also entered BBC's "Young
        Musician of the Year", performing Rossini's Introduction, Theme &
        Variations. During this time Steve was performing in the orchestra pit
        for several local Amateur Operatic companies, playing in a couple of
        dozen shows including Fiddler On The Roof, Carousel, The Pirates of
        Penzance and Cabaret. Within the local pop/rock scene Steve has played
        keyboards, sax and backing vocals with rock band Discovery, played the
        part of keyboardist Ray Manzarek in the Doors tribute band Mojo Risin',
        played keyboards, sax and backing vocals with pop covers band Working
        Class and was the director and founder member of soul covers band The
        Soulutions, playing keyboard and backing vocals. He currently plays sax
        and backing vocals in the highly respected soul band The Smokin'
        Spitfires, which plays a monthly charity gig at the Cluny, Ouseburn,
        Newcastle, in aid of the Bubble Foundation UK charity. Within the
        thriving North East jazz scene Steve plays piano with the
        Darlington-based quintet The Jazz Tones and is the lead alto sax player
        of the Durham Alumni Big Band. He has also performed as a guest musician
        for several bands in the North East, including John Warren's Splinter
        Group, The Dougie Pugh Quintet, The North East Soiree, Swing Manouche
        and The Nick Ross Orchestra, among many others. Steve lives in
        Darlington with his wife Jacquie and stepdaughter Olivia.
      </div>
    </div>
  </div>
);
