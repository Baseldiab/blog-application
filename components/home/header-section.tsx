import HeaderSection from "@/components/common/header-section";
import { Badge } from "../ui/badge";

export default function HomeHeaderSection() {
  return (
    <HeaderSection>
      <h1 className="text-theme-text-lightTitle text-4xl font-bold">
        Hello World
      </h1>
    </HeaderSection>
  );
}

interface SliderItemProps {
  title: string;
  description: string;
}
const SliderItem = ({ title, description }: SliderItemProps) => {
  return (
    <div>
      <Badge
        key={`header-blog-${title}`}
        className="min-w-fit text-theme-text-dark/90 dark:bg-theme-background-secondDark dark:text-white uppercase md:text-sm  text-xs font-normal"
      >
        {title}
      </Badge>
      <h2 className="text-theme-text-lightTitle text-4xl font-bold">{title}</h2>
      <p className="text-theme-text-subtitle text-sm font-normal">
        {description}
      </p>
    </div>
  );
};
