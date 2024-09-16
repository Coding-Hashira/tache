import { LoaderCircle } from "lucide-react";
import React from "react";

type Props = {};

const Loading = (props: Props) => {
  return (
    <div className="w-screen h-screen flex items-center bg-background justify-center">
      <LoaderCircle className="h-8 w-8 text-primary animate-spin" />
    </div>
  );
};

export default Loading;
