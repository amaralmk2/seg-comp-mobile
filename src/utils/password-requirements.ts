export const requirements = [
    {
      id: 1,
      label: "Pelo menos 8 caracteres.",
      isValid: (value: string) => value.length >= 8,
    },
    {
      id: 2,
      label: "Pelo menos 1 letra maiúscula.",
      isValid: (value: string) => /[A-Z]/.test(value),
    },
    {
      id: 3,
      label: "Pelo menos 1 letra minúscula.",
      isValid: (value: string) => /[a-z]/.test(value),
    },
    {
      id: 4,
      label: "Pelo menos 1 número.",
      isValid: (value: string) => /[0-9]/.test(value),
    },
    {
      id: 5,
      label: "Pelo menos 1 caractere especial (!@#$%^&*).!",
      isValid: (value: string) => /[!@#$%^&*]/.test(value),
    },
  ];