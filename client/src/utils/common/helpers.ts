export function formatCurrency(value: number): string {
    return `$${value.toFixed(2)}`;
  }
  
  export function formatDate(date: Date): string {
    return new Date(date).toLocaleDateString("en-US");
  }