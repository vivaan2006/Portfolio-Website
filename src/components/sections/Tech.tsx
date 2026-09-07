import { BallGrid } from "../canvas";
import { SectionWrapper } from "../../hoc";
import { technologies } from "../../constants";

const Tech = () => {
  return <BallGrid technologies={technologies} />;
};

export default SectionWrapper(Tech, "tech");
