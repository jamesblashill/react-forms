import * as React from 'react';
import { Typography } from '../Typography';

export const TypographyExample: React.FC<{}> = () => (
  <div>
    <Typography
      variant={{
        mobile: "body",
        tablet: "pageHeader",
        desktop: "displayS"
      }}
    >
      This is a test
    </Typography>
  </div>
);
