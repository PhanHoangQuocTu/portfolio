export const TYPE_WRITTER_STRINGS = ['Hi! I am a Front End Developer', ' UI/UX Designer', 'Software Engineer'];

export const getTypeWritterOptions = (
  deleteSpeed = 50,
  loop = true,
  autoStart = true,
  strings = TYPE_WRITTER_STRINGS
) => {
  return {
    strings: strings,
    autoStart: autoStart,
    loop: loop,
    deleteSpeed: deleteSpeed,
  };
};
