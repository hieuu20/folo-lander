import { Button, ButtonProps, CopyButton } from '@mantine/core';
import React from 'react';
import { ReactNode } from 'react';

export function ButtonCopy(prop: ButtonProps & { text: string; copiedSection: ReactNode }) {
  return (
    <CopyButton value={prop?.text}>
      {({ copied, copy }) => (
        <Button {...prop} disabled={copied} onClick={copy} bg={copied ? "#19A50D" : "#435EFB"}>
          {copied ? prop?.copiedSection : prop?.children}
        </Button>
      )}
    </CopyButton>
  );
}
