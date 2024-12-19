// Create a Providers component to wrap your application with all the components requiring 'use client', such as next-nprogress-bar or your different contexts...
'use client';

import { PropsWithChildren } from 'react';
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

export const ProgressBarProvider = ({ children }: PropsWithChildren) => {
  return (
    <>
      {children}
      <ProgressBar
        height="1.5px"
        color="#AC1991"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </>
  );
};
