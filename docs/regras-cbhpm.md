# Regras de negócio — CBHPM

## Entradas

Cada cálculo possui uma versão CBHPM, valor acordado da UCO, valor acordado do filme e ajuste padrão do porte. Cada procedimento possui nome, código, porte, valor do porte, quantidade de UCO, quantidade de filme e indicação de procedimento principal.

Os valores acordados de UCO e filme pertencem ao cálculo. Já as quantidades de UCO e filme pertencem a cada procedimento/código da tabela CBHPM e, portanto, são preenchidas separadamente em cada linha.

## Fórmulas

### Filme

`valor do filme × quantidade de filme`

Exemplo: `30,17 × 0,3400 = 10,2578`.

### Porte

Para redutor: `valor do porte − (valor do porte × percentual)`.

Para acréscimo: `valor do porte + (valor do porte × percentual)`.

### UCO

Primeiro é calculada a UCO base: `valor da UCO × quantidade de UCO`.

Depois é aplicada a regra do procedimento: `UCO base × percentual aplicável`.

Exemplo do procedimento principal: `13,73 × 3,420 = 46,9566`; depois `46,9566 × 100% = 46,9566`.

Exemplo de procedimento adicional: `13,73 × 3,420 = 46,9566`; depois `46,9566 × 70% = 32,86962`.

O procedimento principal recebe 100%. Os demais recebem 70% quando há mais de um procedimento.

### Total

`porte final + UCO final + filme = subtotal do procedimento`.

O total é a soma dos subtotais. O cálculo mantém precisão interna e arredonda somente a apresentação final.

## Exemplo validado

Com UCO de R$ 13,73, filme de R$ 30,17, redutor de 30%, porte 2B de R$ 70,53, UCO 3,420 e filme 0,3400:

- Filme: 30,17 × 0,3400 = 10,2578.
- Porte: 70,53 − (70,53 × 30%) = 49,371.
- UCO: 13,73 × 3,420 = 46,9566.
- Total: 49,371 + 46,9566 + 10,2578 = 106,5854, exibido como R$ 106,59.
