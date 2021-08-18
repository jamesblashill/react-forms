import * as React from 'react';
import styled from 'styled-components';
import { Truncate, Typography } from '../Typography';

export const TypographyExample: React.FC<{}> = () => (
  <div>
    <Typography
      variant={{
        mobileAndAbove: "labelSansRegular",
        tabletAndAbove: "paragraphSansMedium",
        desktopAndAbove: "displayXLSerifRegular"
      }}
    >
      Example
    </Typography>
    <CustomParagraph />
  </div>
);

const CustomParagraph = styled.p`
  ${Truncate}
`;
