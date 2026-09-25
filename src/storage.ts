import type { CalculationInput } from './types'

const KEY = 'elyon:calculations'

export function loadCalculations(): CalculationInput[] {
  try {
    const raw = localStorage.getItem(KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

export function saveCalculations(items: CalculationInput[]) {
  localStorage.setItem(KEY, JSON.stringify(items))
}
