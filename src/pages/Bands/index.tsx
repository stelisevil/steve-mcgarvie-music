import classNames from "classnames";

export const Bands = () => (
  <div className="w-full">
    <div
      className={classNames(
        "h-[550px] bg-cover bg-center text-white text-6xl flex justify-center items-end p-12 font-semibold",
        `bg-[url(/hero-images/bands.png)]`
      )}
    >
      Bands
    </div>
    <div className="flex flex-col justify-center gap-12 py-12 mx-auto max-w-7xl">
      <div className="px-8 text-5xl font-semibold">A band for any occasion</div>
      <div className="px-8 text-xl">
        Steve is an active member in the North East music scene and plays in the
        bands listed below:
      </div>

      <div className="flex justify-center">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Go3oojnulkM?si=aWj357dkm-Opavya"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>

      <div className="px-8 text-5xl font-semibold">The Smokin' Spitfires</div>

      <div className="px-8 text-xl">
        The Smokin' Spitfires are an eight piece Soul and R'n'B band playing
        original music written by lead singer Neil Hunter, plus covers of
        legendary soul artists such as Otis Redding, Wilson Pickett and many
        more. Neil, along with trombone player Terry O'Hern, were the mainstays
        of the Eastside Torpedoes who were one of the most popular bands ever to
        emerge from the North East of England. The Spitfires have carried on the
        Torpedoes' mantle of great musicians playing original music that very
        quickly become classics in their own right.
      </div>
      <div className="px-8 text-xl">
        The Smokin' Spitfires Soul Band allows us to play our favourite classic
        soul tunes such as Hold Back the Night, 6345789 and Soul Man. We often
        mix a few of these in our set but mainly these are used when we play for
        functions - weddings, birthdays etc. The band also play at the Cluny,
        Lime Street, Ouseburn, Newcastle on the 1st Sunday of every month,
        starting at 12.30, helping to raise money for the Bubble Foundation. If
        you wish to book the band please get in touch us via our website at{" "}
        <a
          className="underline"
          href="https://smokinspitfires.wixsite.com/smokinspitfires"
          about="_blank"
        >
          https://smokinspitfires.wixsite.com/smokinspitfires
        </a>
        .
      </div>

      <div className="flex justify-center">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/M__dmm1PCI0?si=wWjRTd3oW5xGwa0i"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>

      <div className="px-8 text-5xl font-semibold">
        The Durham Alumni Big Band
      </div>

      <div className="px-8 text-xl">
        The Durham Alumni Big Band (DABB) is made up of former members and
        teachers of the Durham County Youth Big Band (DCYBB) and plays a mixture
        of traditional swing band numbers as well as more contemporary and
        commissioned pieces with a look towards modern jazz. The band has been
        joined by British jazz greats Julian Seigel (sax) and Mark Nightingale
        (trombone). The band competes annually at the Great North Big Band Jazz
        Festival held at Sunderland University and won the Open Section in 2015
        and 2025, with the saxophone, trumpet and trombone sections taking the
        Best Section Prize at various times. DABB also perform at the Darlington
        Jazz Club and Darlington Jazz Festival and have been drawing large
        crowds for their exciting, dynamic performances. In March 2015 they
        played a sell-out concert in the Central Hall of the Dolphin Centre,
        featuring Scottish trumpeter Bruce Adams and multi-instrumentalist Al
        Wood. For more details check out our Facebook page at{" "}
        <a
          className="underline"
          href="https://www.facebook.com/pages/Durham-Alumni-Big-Band/1414997798819381?fref=ts"
          about="_blank"
        >
          https://www.facebook.com/pages/Durham-Alumni-Big-Band/1414997798819381?fref=ts
        </a>
      </div>
    </div>
  </div>
);
