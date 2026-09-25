export const parseNumber = (value: string | number) => {
  if (typeof value === 'number') return Number.isFinite(value) ? value : 0
  const normalized = value.trim().replace(/\./g, '').replace(',', '.')
  const number = Number(normalized)
  return Number.isFinite(number) ? number : 0
}

export const money = (value: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value)

export const decimal = (value: number, maximumFractionDigits = 4) =>
  new Intl.NumberFormat('pt-BR', { maximumFractionDigits, minimumFractionDigits: 0 }).format(value)

export const percent = (value: number) => `${decimal(value, 2)}%`
