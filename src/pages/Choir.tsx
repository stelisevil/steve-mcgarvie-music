import classNames from "classnames";
import { Link } from "react-router";

import wellVersed from "../../public/well-versed.png";
import wednesdaysMap from "../../public/wednesdays-map.png";
import thursdaysMap from "../../public/thursdays-map.png";
import { Button } from "../components/Button";
import { TextInput } from "../components/TextInput";
import { useChoirForm, type FormValues } from "./useChoirForm";
import { FormLayout } from "../components/FormLayout";
import { Select } from "../components/Select";
import { Textarea } from "../components/Textarea";

export const Choir = () => {
  const { context } = useChoirForm();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = context;

  const onSubmit = async (data: FormValues) => {
    const res = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      alert("✅ Email sent!");
      reset();
    } else {
      alert("❌ Failed to send email.");
    }
  };

  return (
    <div className="w-full">
      <div
        className={classNames(
          "h-[550px] bg-cover bg-center text-white text-6xl flex justify-center items-end p-12 font-semibold",
          `bg-[url(/hero-images/choir.png)]`
        )}
      >
        <img src={wellVersed} alt="Well-Versed Community Choir Logo" />
      </div>
      <div className="flex flex-col justify-center gap-12 py-12 mx-auto max-w-7xl">
        <div className="px-8 text-5xl font-semibold">Who are we?</div>
        <div className="px-8 text-xl">
          Well-Versed Community Choir is the new name for two choirs who
          regularly join forces to perform, as well as performing in their own
          right: Sound Waves Community Choir, based in Bishop Auckland, Co.
          Durham and formed in 2011, and Vocal Soul Community Choir, based in
          Darlington, formed in 2012. The choir is ever-growing and currently
          has around 100 members on its books across the two branches. The
          choirs, under their former names, have performed many public concerts,
          raising well over £10,000 for local and national charities.
        </div>
        <div className="h-80 w-[480px] bg-gray-300">
          temp image for youtube embed
        </div>
        <div className="px-8 text-xl">
          Our first concert as Well-Versed was on Saturday, May 11th 2024 at
          Hummersknott Academy in Darlington, and we were delighted to have
          special guests with us too! Kissed, featuring Charlie Hardwick
          (ex-Emmerdale) performed a fabulous set. Between us we managed to
          raise £600 for the Bubble Foundation too!
        </div>
        <div className="px-8 text-xl">
          2025 has been pretty busy for the choir. We performed at the Shine
          Festival at Middlesbrough Town Hall in March, receiving some
          wonderfully positive feedback from choral professionals. In April we
          sang at Sheldon Civic Hall in front of a packed audience, raising over
          £1,000 for Shildon Methodist Church's roof repair fund. We will be
          singing in Darlington Town Centre on Saturday, June 7th, performing
          railway-based songs to commemorate the 200th anniversary of the
          Darlington-Stockton Railway, with a larger performance to follow in
          September at Hopetown Museum in Darlington.
        </div>
        <div className="px-8 text-5xl font-semibold">
          What do we do? Where are we based?
        </div>
        <div className="px-8 text-xl">
          The Community Choirs perform mainly bespoke arrangements and
          specialise in rock, pop, soul and jazz music, both a cappella and with
          backing tracks. To see a list of songs already performed, click{" "}
          <Link to="/choral-arrangements" className="underline">
            here
          </Link>{" "}
          to view our choral arrangements.
        </div>
        <div className="px-8 text-xl">
          We rehearse each Wednesday and Thursday evening from 7.30-9.30:
        </div>
        <div className="flex flex-row flex-wrap justify-between">
          <div className="w-1/2 text-left">
            <span className="font-semibold">Wednesdays:</span>
            <div className="mb-4">
              The Studio, <br />
              Stanhope Building, <br />
              Queen Elizabeth Sixth Form College, <br />
              Vane Terrace, <br />
              Darlington DL3 7AU
            </div>
            <img src={wednesdaysMap} />
          </div>
          <div className="w-1/2 text-left">
            <span className="font-semibold">Thursdays:</span>
            <div className="mb-4">
              Bishop Auckland Methodist Church Hall, <br />
              Cockton Hill Road, <br />
              Bishop Auckland <br />
              DL14 7NP (Opposite the hospital).
            </div>
            <img src={thursdaysMap} />
          </div>
        </div>
        <div className="px-8 text-xl">
          Why not come along, have a good sing and have a good laugh too!
          Singing in a choir has many health benefits, promoting good physical,
          mental and emotional wellbeing.
        </div>
        <div className="px-8 text-5xl font-semibold">
          What does it cost? Do I need to audition?
        </div>
        <div className="px-8 text-xl">
          We are an all-inclusive choir and we do not audition members. The
          choir has a wide range of ages, abilities and singing experience but
          all levels are catered for. The cost is £7 cash, or £7.25 via a
          contactless card or smartphone app per session with no up-front
          membership fee; you just turn up, pay and sing. As the music used is
          all written especially for the choir there is no charge for expensive
          sheet music either.
        </div>
        <div className="px-8 text-5xl font-semibold">So how do I join?</div>
        <div className="px-8 text-xl">
          Fill in the form below, and we'll give you all the details. Rehearsals
          are every Wednesday and Thursday evening (you only need to come to one
          or the other!), but please check, especially during main holiday
          periods.
        </div>

        <form
          className="flex flex-col items-center justify-center gap-4 p-8"
          onSubmit={handleSubmit(onSubmit)}
        >
          <FormLayout error={errors.name} name="name" label="Name" required>
            <TextInput
              {...register("name")}
              id="name"
              placeholder="Firstname Surname"
            />
          </FormLayout>
          <FormLayout
            error={errors.email}
            name="email"
            label="Email address"
            required
          >
            <TextInput
              {...register("email")}
              id="email"
              placeholder="name@emailaddress.com"
            />
          </FormLayout>
          <FormLayout
            error={errors.location}
            name="location"
            label="Location"
            required
          >
            <Select id="location" {...register("location")}>
              <option value="">-- Select a location --</option>
              <option value="darlington">Darlington</option>
              <option value="bishop auckland">Bishop Auckland</option>
            </Select>
          </FormLayout>
          <FormLayout error={errors.message} name="message" label="Message">
            <Textarea
              {...register("message")}
              id="message"
              placeholder="Hi, here is my message..."
            />
          </FormLayout>
          <Button type="submit">Submit</Button>
        </form>
      </div>
    </div>
  );
};
