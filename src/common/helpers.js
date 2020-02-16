export const appendClasses = (baseClass, classesToAppend) => { // eslint-disable-line
  if (classesToAppend) {
    return [baseClass, classesToAppend].join(' ');
  }
  return baseClass;
};

export const formatDate = (date) => {
  let hours = date.getHours();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours %= 12;
  hours = hours !== 0 ? hours : 12;
  return (
    `${`0${date.getDate()}`.slice(-2)}.${`0${date.getMonth() + 1}`.slice(-2)}.${date.getFullYear()} ${`0${hours}`.slice(-2)}:${`0${date.getMinutes()}`.slice(-2)} ${ampm}`
  );
};
