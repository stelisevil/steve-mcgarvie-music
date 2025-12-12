import classNames from "classnames";
import { ButtonImageLink } from "../../components/ButtonImageLink";
import { TextInput } from "../../components/TextInput";
import { FormLayout } from "../../components/FormLayout";
import { useArrangementForm, type FormValues } from "./useArrangementForm";
import { Select } from "../../components/Select";
import { Button } from "../../components/Button";
import { Textarea } from "../../components/Textarea";

export const Music = () => {
  const { context } = useArrangementForm();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = context;

  const onSubmit = async (data: FormValues) => {
    const res = await fetch("/api/arrangement-enquiry-email", {
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
          `bg-[url(/hero-images/music.png)]`
        )}
      >
        Music
      </div>
      <div className="flex flex-col justify-center gap-12 py-12 mx-auto max-w-7xl">
        <div className="px-8 text-5xl font-semibold">
          Arrangements for your ensemble
        </div>
        <div className="px-8 text-xl">
          Whether you run a choir, play in a soul band or even work with other
          ensembles, there may be a piece that Steve has arranged that is right
          up your street! Specialising in choral and pop band music, there is
          already a large (and ever-growing) repertoire available for purchase.
          If there is a song you've always wanted to perform but can't find the
          sheet music here, contact Steve on the form below, as he does accept
          commissioned work.
        </div>

        <div className="flex flex-row flex-wrap justify-center gap-4">
          <ButtonImageLink
            to="/music/choral-arrangements"
            imagePath="choral-arrangements.png"
            buttonText="Choral Arrangements"
          />
          <ButtonImageLink
            to="/music/pop-arrangements"
            imagePath="music.png"
            buttonText="Pop Arrangements"
          />
          <ButtonImageLink
            to="/music/sax-arrangements"
            imagePath="sax-arrangements.jpg"
            buttonText="Sax Arrangements"
          />
        </div>
        <div className="px-8 text-5xl font-semibold">
          Request/purchase an arrangement
        </div>
        <div className="px-8 text-xl">
          To purchase an arrangement, please fill in the form below, detailing
          which arrangement(s) you would like to buy. The amount is £25 per
          arrangement. Alternatively, if there is a song for your choir or
          ensemble you'd like Steve to arrange, please complete the form below
          with the following information: Song title; Original composer/artist;
          If there is a specific style how you would like the arrangement to
          sound; The ability level of the performers; Whether the arrangement is
          to be a cappella or with accompanying parts/backing track (for choral
          arrangements); The instruments you would like to have within the
          arrangement. Steve will then contact you with a quote for the
          arrangement. The price will depend on the complexity of the work, the
          number of parts required and the potential recording of a backing
          track. If you want the arrangement to be exclusive to your group this
          can be incorporated into the price.
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
            error={errors.songTitle}
            name="songTitle"
            label="Song Title"
            required
          >
            <TextInput
              {...register("songTitle")}
              id="songTitle"
              placeholder="Enter here"
            />
          </FormLayout>
          <FormLayout
            error={errors.originalArtist}
            name="originalArtist"
            label="Original artist"
            required
          >
            <TextInput
              {...register("originalArtist")}
              id="originalArtist"
              placeholder="Enter here"
            />
          </FormLayout>
          <FormLayout
            error={errors.abilityLevel}
            name="abilityLevel"
            label="Performer ability level"
          >
            <TextInput
              {...register("abilityLevel")}
              id="abilityLevel"
              placeholder="Enter here"
            />
          </FormLayout>
          <FormLayout
            error={errors.arrangementType}
            name="arrangementType"
            label="Arrangement type"
            required
          >
            <Select id="arrangementType" {...register("arrangementType")}>
              <option value="">-- Select an Arrangement Type --</option>
              <option value="a capella">A capella</option>
              <option value="with backing track">With backing track</option>
              <option value="non-choral arrangement">
                Non-choral arrangement
              </option>
            </Select>
          </FormLayout>
          <FormLayout
            error={errors.instruments}
            name="instruments"
            label="Instruments required"
          >
            <TextInput
              {...register("instruments")}
              id="instruments"
              placeholder="(if non-choral arrangement)"
            />
          </FormLayout>
          <FormLayout
            error={errors.message}
            name="message"
            label="Message"
            required
          >
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
