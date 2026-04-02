---
description: Transforma a definição do projeto em arquitetura e estrutura pronta para execução.
---

# Structure Project Workflow

## Objetivo

Transformar a definição do projeto em estrutura técnica e preparação para execução.

---

## Instruções

Siga este fluxo após o projeto ter sido definido pelo Discovery.

---

## Etapa 1 — Validar pré-condições

Verifique se existem:

- idea.md
- scope.md
- non_goals.md
- implementation_plan.md

Se faltar algum:
→ retornar ao Discovery

---

## Etapa 2 — Ler contexto

Analise:

- objetivo do projeto
- escopo
- não objetivos
- decisões iniciais

---

## Etapa 3 — Definir arquitetura

Criar `architecture.md` contendo:

- módulos do sistema
- responsabilidades
- fluxos principais
- estrutura geral

---

## Etapa 4 — Definir estrutura técnica

- organizar backend, frontend e banco
- definir diretórios principais
- definir integração entre partes

---

## Etapa 5 — Definir contratos

- endpoints
- inputs
- outputs
- comportamento esperado

---

## Etapa 6 — Registrar decisões técnicas

- atualizar `decision_log.md`
- justificar escolhas
- registrar impacto

---

## Etapa 7 — Validar arquitetura

Confirmar:

- coerente com escopo
- não contradiz não objetivos
- executável
- sem lacunas críticas

Se houver problema:
→ ajustar antes de continuar

---

## Etapa 8 — Preparar execução

- revisar `tasks.md`
- alinhar tasks com arquitetura
- garantir que tasks fazem sentido

---

## Saída esperada

Projeto deve ter:

- arquitetura definida
- estrutura técnica clara
- decisões registradas
- tasks alinhadas

---

## Regras obrigatórias

- Não alterar escopo
- Não criar features novas
- Não executar tasks
- Não gerar overengineering
- Manter simplicidade

---

## Situações especiais

### Falta de informação
→ escalar para Discovery

### Conflito com escopo
→ registrar e ajustar

### Complexidade excessiva
→ simplificar

---

## Regra final

Arquitetura deve permitir execução clara.

Se não for executável, está errada.