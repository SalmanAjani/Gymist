const Footer = () => {
  return (
    <footer className="bg-sky-200 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <h1 className="text-3xl font-bold text-sky-700">GYMIST</h1>
          <p className="my-5">
            Our gym has helped thousands of people achieve their fitness goals
            and transform their lives through our cutting-edge facilities,
            personalized training programs, and diverse class offerings. Join us
            today and become a part of our success stories!
          </p>
          <p>© Gymist All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Equipment</p>
          <p className="my-5">Trainers</p>
          <p>Schedules</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="mb-2 mt-5">You can also reach out us on this number:</p>
          <p>(333)425-6825</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
