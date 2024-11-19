export function cpfApplyMask(value: string) {
  const cleanValue = value.replace(/\D/g, "");
  return cleanValue.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, "$1.$2.$3-$4");
}
