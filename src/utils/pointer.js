/*
  Input-device detection.

  Keys off `(hover: none)` rather than a viewport width, so a touchscreen laptop
  is correctly treated as touch and a narrow desktop window is not. Used in two
  places:

  - to skip VanillaTilt, whose `gyroscope` option defaults to TRUE and made the
    hero photo and every project card tilt with the phone's orientation sensor;
  - to switch the project cards from reveal-on-hover to tap-to-reveal, since
    hover never fires on touch and the descriptions were otherwise unreachable.
*/
export const isTouchDevice = () =>
  typeof window !== "undefined" &&
  window.matchMedia?.("(hover: none)").matches === true;
