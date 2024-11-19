export function cepApplyMask(value: string) {
  const cleanValue = value.replace(/\D/g, "");
  return cleanValue.replace(/^(\d{5})(\d{3})$/, "$1-$2");
}
