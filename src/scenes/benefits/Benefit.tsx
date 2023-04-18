import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

const childVarient = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

type Props = {
  icon: JSX.Element;
  title: string;
  description: string;
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefit = ({ icon, title, description, setSelectedPage }: Props) => {
  return (
    <motion.div
      variants={childVarient}
      className="mt-5 rounded-md border-2 border-sky-700 px-5 py-16 text-center"
    >
      <div className="mb-4 flex justify-center">
        <div className="rounded-full border-2 border-sky-700 bg-sky-500 p-4">
          {icon}
        </div>
      </div>
      <h4 className="text-sm font-bold xl:text-[17px]">{title}</h4>
      <p className="mx-auto my-3 w-5/6 text-sm xl:text-[17px]">{description}</p>
      <AnchorLink
        className="text-sm font-bold text-sky-700 underline hover:text-sky-500"
        onClick={() => setSelectedPage(SelectedPage.Benefits)}
        href={`#${SelectedPage.Benefits}`}
      >
        <p>Learn More</p>
      </AnchorLink>
    </motion.div>
  );
};

export default Benefit;
