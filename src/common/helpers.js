export const appendClasses = (baseClass, classesToAppend) => { // eslint-disable-line
  if (classesToAppend) {
    return [baseClass, classesToAppend].join(' ');
  }
  return baseClass;
};