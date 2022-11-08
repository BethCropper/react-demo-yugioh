export const SacrificesRequired = (level) => {
  if (level < 5) {
    return 0;
  } else if (level < 7) {
    return 1;
  } else {
    return 2;
  }
};
