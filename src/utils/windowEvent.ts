export const dispatchFetchProfile = () => {
  const event = new CustomEvent("REFETCH_PROFILE", {
    detail: {
      value: null,
    },
  });
  window.dispatchEvent(event);
};
