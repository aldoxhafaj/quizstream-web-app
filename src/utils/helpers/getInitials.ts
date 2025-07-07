export const getInitials = (username: string) => {
  if (!username) {
    return '';
  }

  const [name, lastname] = username.trim().split(' ');

  if (!lastname) {
    return name.slice(0, 2).toUpperCase();
  }

  return `${name.charAt(0)}${lastname.charAt(0)}`.toUpperCase();
};
