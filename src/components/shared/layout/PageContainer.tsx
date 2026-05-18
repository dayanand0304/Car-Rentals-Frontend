import { type ReactNode } from "react";

interface PageContainerProps {
  children: ReactNode;
}

const PageContainer = ({
  children,
}: PageContainerProps) => {
  return (
    <div className="mx-auto w-full max-w-7xl space-y-6">
      {children}
    </div>
  );
};

export default PageContainer;