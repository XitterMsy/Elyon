import { parseNumber } from './format'
import type { CalculationInput, ProcedureInput } from './types'

export type ProcedureResult = {
  procedure: ProcedureInput
  ucoRate: number
  ucoBase: number
  film: number
  adjustment: number
  porte: number
  uco: number
  subtotal: number
}

export type CalculationResult = {
  procedures: ProcedureResult[]
  total: number
  warnings: string[]
}

export function calculate(input: CalculationInput): CalculationResult {
  const ucoValue = parseNumber(input.ucoValue)
  const filmValue = parseNumber(input.filmValue)
  const warnings: string[] = []
  const mainCount = input.procedures.filter((procedure) => procedure.isMain).length

  if (mainCount === 0 && input.procedures.length > 0) warnings.push('Marque um procedimento principal para aplicar a regra de UCO.')
  if (mainCount > 1) warnings.push('Há mais de um procedimento principal. Apenas o primeiro receberá UCO em 100%.')
  if (ucoValue === 0) warnings.push('O valor acordado da UCO está zerado.')
  if (filmValue === 0) warnings.push('O valor acordado do filme está zerado.')

  let mainAssigned = false
  const procedures = input.procedures.map((procedure) => {
    const isMain = procedure.isMain && !mainAssigned
    if (isMain) mainAssigned = true
    const ucoRate = isMain ? 1 : input.procedures.length === 1 ? 1 : 0.7
    const porteValue = parseNumber(procedure.porteValue)
    const adjustmentPercent = parseNumber(procedure.adjustmentPercent ?? input.adjustmentPercent)
    const adjustmentType = procedure.adjustmentType ?? input.adjustmentType
    const adjustment = porteValue * (adjustmentPercent / 100)
    const porte = adjustmentType === 'redutor' ? porteValue - adjustment : porteValue + adjustment
    const film = filmValue * parseNumber(procedure.filmQuantity)
    const ucoBase = ucoValue * parseNumber(procedure.ucoQuantity)
    const uco = ucoBase * ucoRate
    return { procedure, ucoRate, ucoBase, film, adjustment, porte, uco, subtotal: porte + uco + film }
  })

  return { procedures, total: procedures.reduce((sum, item) => sum + item.subtotal, 0), warnings }
}
