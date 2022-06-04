import { css } from "@emotion/react";
import { EmotionJSX } from "@emotion/react/types/jsx-namespace";
import { ReactNode } from "react";

interface LayoutWrapperProps {
  children: ReactNode;
}

const layoutWrapperStyles = css`
  padding: 0 16px;
  margin: 0 auto;
  max-width: 576px;
`;

const LayoutWrapper: (props: LayoutWrapperProps) => EmotionJSX.Element = ({
  children,
}) => {
  return <div css={layoutWrapperStyles}>{children}</div>;
};

export default LayoutWrapper;
