import {
  IoBriefcaseOutline,
  IoFolderOutline,
  IoSchoolOutline,
  IoShirtOutline,
} from "react-icons/io5";
import { IconType } from "react-icons/lib";
import { PiRocketLight } from "react-icons/pi";

type Icon = {
  id: number;
  name: string;
  icon: IconType;
};

export const icons: Icon[] = [
  {
    id: 0,
    name: "rocket",
    icon: PiRocketLight,
  },
  {
    id: 1,
    name: "folder",
    icon: IoFolderOutline,
  },
  {
    id: 2,
    name: "work",
    icon: IoBriefcaseOutline,
  },
  {
    id: 3,
    name: "study",
    icon: IoSchoolOutline,
  },
  {
    id: 4,
    name: "shirt",
    icon: IoShirtOutline,
  },
];

const Icon = ({
  id,
  className,
  style,
}: {
  id: number;
  className?: string;
  style?: React.CSSProperties;
}) => {
  const Icon = icons.find((icon) => icon.id === id)?.icon || IoFolderOutline;
  return <Icon className={className} style={style} />;
};

export default Icon;
