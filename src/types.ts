export type AdjustmentType = 'redutor' | 'acrescimo'

export type ProcedureInput = {
  id: string
  name: string
  code: string
  porteLabel: string
  porteValue: string
  ucoQuantity: string
  filmQuantity: string
  isMain: boolean
  adjustmentPercent?: string
  adjustmentType?: AdjustmentType
}

export type CalculationInput = {
  id: string
  createdAt: string
  version: string
  ucoValue: string
  filmValue: string
  adjustmentPercent: string
  adjustmentType: AdjustmentType
  procedures: ProcedureInput[]
}
