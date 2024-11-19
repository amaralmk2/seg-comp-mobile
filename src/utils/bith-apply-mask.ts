export function dateApplyMask(value: string) {
    const cleanValue = value.replace(/\D/g, ""); // Remove todos os caracteres que não são números
    
    if (cleanValue.length <= 2) {
      return cleanValue;
    } else if (cleanValue.length <= 4) {
      return cleanValue.replace(/^(\d{2})(\d{1,2})$/, "$1/$2");
    } else {
      return cleanValue.replace(/^(\d{2})(\d{2})(\d{1,4})$/, "$1/$2/$3");
    }
    }
    