import { SelectedPage, ClassType } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";

const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    description:
      "Build strength and increase muscle mass with our weight training classes led by expert trainers.",
    image: image1,
  },
  {
    name: "Yoga Classes",
    description:
      "Find your zen and improve flexibility with our yoga classes designed for all levels.",
    image: image2,
  },
  {
    name: "Ab Core Classes",
    description:
      "Tone and strengthen your core with our targeted ab workouts led by experienced instructors.",
    image: image3,
  },
  {
    name: "Adventure Classes",
    description:
      "Challenge yourself with our adventure classes, including rock climbing, obstacle courses, and more.",
    image: image4,
  },
  {
    name: "Fitness Classes",
    description:
      "Get your heart pumping and improve overall fitness with our diverse range of classes, including cardio, dance, and more.",
    image: image5,
  },
  {
    name: "Training Classes",
    description:
      "Take your fitness journey to the next level with our personalized training classes led by pro trainers, tailored to your individual goals and needs.",
    image: image6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-sky-200 py-32">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>OUR CLASSES</HText>
            <p className="py-5">
              From high-intensity interval training to yoga and Pilates, our gym
              offers a wide range of classes to suit all interests and fitness
              levels. Join our community and discover new ways to challenge
              yourself and achieve your fitness goals.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
