import group from "../assets/Group.png";

export default function Hero() {
  return (
    <section className="p-5 mt-5 max-w-md mx-auto">
      <img src={group} alt="group" />
      <h1 className="my-4 text-4xl font-semibold ">Online Experiences</h1>
      <p className="mt-0 font-light text-base">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>
  );
}
