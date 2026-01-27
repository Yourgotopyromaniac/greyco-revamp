import { ReactNode } from "react";

const SectionContainer = ({
  children,
  id,
}: {
  children: ReactNode;
  id?: string;
}) => {
  return (
    <div id={id} className="w-full flex items-center justify-center">
      {children}
    </div>
  );
};

export default SectionContainer;
