import * as React from 'react';
import { Typography } from '../Typography';

export const TypographyExample: React.FC<{}> = () => (
  <div>
    <Typography
      variant={{
        mobile: "labelSansRegular",
        tablet: "paragraphSansMedium",
        desktop: "displayXLSerifRegular"
      }}
    >
      This is a test
    </Typography>
  </div>
);
