import { useState, useCallback } from 'react';

interface DisclosureActions {
  open: () => void;
  close: () => void;
  toggle: () => void;
}

export function useDisclosure(initialState = false): [boolean, DisclosureActions] {
  const [opened, setOpened] = useState(initialState);

  const open = useCallback(() => setOpened(true), []);
  const close = useCallback(() => setOpened(false), []);
  const toggle = useCallback(() => setOpened((prev) => !prev), []);

  return [opened, { open, close, toggle }];
}
