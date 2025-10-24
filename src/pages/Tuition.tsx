import classNames from "classnames";
import { FormLayout } from "../components/FormLayout";
import { TextInput } from "../components/TextInput";
import { Textarea } from "../components/Textarea";
import { Button } from "../components/Button";
import { useTuitionForm, type FormValues } from "./useTuitionForm";

export const Tuition = () => {
  const { context } = useTuitionForm();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = context;

  const onSubmit = async (data: FormValues) => {
    const res = await fetch("/api/tuition-enquiry-email", {
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
          `bg-[url(/hero-images/tuition.png)]`
        )}
      >
        Tuition
      </div>
      <div className="flex flex-col justify-center gap-12 py-12 mx-auto max-w-7xl">
        <div className="px-8 text-5xl font-semibold">
          Instrumental and Music Theory Tuition
        </div>
        <div className="px-8 text-xl">
          Steve has been teaching piano, clarinet, saxophone, flute and music
          theory to pupils of all ages, from age five to 60+, across Darlington
          and County Durham since 1996. He has a wealth of experience teaching a
          wide range of abilities, from complete beginner to post-Grade 8 and
          degree-level performance. Lessons are tailor-made to suit the learning
          style, ability level and age of the pupil, and learners can focus on a
          particular style of music if they so desire. All pupils have the
          opportunity to be entered for Associated Board of the Royal Schools of
          Music (ABRSM) grade exams if they so wish.
        </div>
        <div className="px-8 text-5xl font-semibold">
          Where are lessons held? How much do they cost?
        </div>
        <div className="px-8 text-xl">
          The lessons will usually be at your house, or at a place of your
          choosing. The cost per lesson varies according to the length of the
          lesson (usually 30 minutes for beginners to intermediate level and one
          hour for advanced players) and the distance to travel to your venue.
          For further information, and for group rates, please ask for details.
        </div>
        <div className="px-8 text-5xl font-semibold">How do I sign up?</div>
        <div className="px-8 text-xl">
          Simply fill in the form below, giving details of the pupil (name, age,
          instrument and the town where they live) and we'll get back to you
          with further details.
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
            error={errors.pupilName}
            name="pupilName"
            label="Pupil name (if different)"
          >
            <TextInput
              {...register("pupilName")}
              id="pupilName"
              placeholder="Firstname Lastname"
            />
          </FormLayout>
          <FormLayout error={errors.pupilAge} name="pupilAge" label="Pupil age">
            <TextInput
              {...register("pupilAge")}
              id="pupilAge"
              placeholder="Enter here"
            />
          </FormLayout>
          <FormLayout
            error={errors.instrument}
            name="instrument"
            label="Instrument"
          >
            <TextInput
              {...register("instrument")}
              id="instrument"
              placeholder="Enter here"
            />
          </FormLayout>
          <FormLayout error={errors.location} name="location" label="Location">
            <TextInput
              {...register("location")}
              id="location"
              placeholder="Enter here"
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
