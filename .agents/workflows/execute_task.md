---
description: Executa uma task com Orchestrator, Executor e Reviewer, exigindo handoff antes da validação e bloqueando avanço sem contexto suficiente.
---

# Execute Task Workflow

## Objetivo

Executar uma task de forma controlada, usando:

- Orchestrator + orchestrate_project
- Executor + implement_task
- Reviewer + validate_delivery

Garantir:

- clareza antes da execução
- implementação disciplinada
- handoff obrigatório
- validação objetiva
- progressão segura do projeto

---

## Pré-condições

Só iniciar este workflow se:

- existe uma task definida em `tasks.md`
- a task possui:
  - objetivo claro
  - contexto mínimo
  - critérios de aceite
  - restrições
- `architecture.md` existe
- `implementation_plan.md` existe
- `decision_log.md` existe

Se qualquer item estiver ausente:
→ NÃO iniciar
→ retornar ao Orchestrator

---

## Etapa 1 — Orquestrar execução

**Agente:** Orchestrator  
**Skill:** orchestrate_project

Ações:

- identificar a próxima task viável
- verificar dependências
- confirmar que a task está pronta para execução
- confirmar que não há bloqueios estruturais

Se houver:

- task ambígua
- arquitetura insuficiente
- conflito entre artefatos

→ parar  
→ registrar bloqueio  
→ definir ação corretiva

Saída esperada:

- task selecionada
- próxima ação definida
- contexto pronto para execução

---

## Etapa 2 — Preparar contexto de execução

**Agente:** Orchestrator  
**Skill:** orchestrate_project

Ações:

- consolidar contexto da task
- indicar artefatos relevantes:
  - `tasks.md`
  - `architecture.md`
  - `implementation_plan.md`
  - `decision_log.md`
- definir objetivo da execução
- definir restrições

Registrar ou atualizar contexto operacional para a execução.

Se o contexto estiver insuficiente:
→ NÃO seguir para implementação

---

## Etapa 3 — Implementar task

**Agente:** Executor  
**Skill:** implement_task

Ações:

- ler a task atual
- ler arquitetura e contexto técnico
- delimitar o que será alterado
- implementar somente o necessário
- respeitar escopo e arquitetura

Regras obrigatórias:

- não expandir escopo
- não alterar arquitetura por conta própria
- não corrigir problemas fora da task sem autorização
- não assumir requisitos não documentados

Se houver ambiguidade:
→ parar  
→ retornar ao Orchestrator

Saída esperada:

- implementação concluída
- entrega pronta para transição

---

## Etapa 4 — Registrar handoff obrigatório

**Agente:** Executor  
**Skill:** implement_task

Ações:

Criar ou atualizar `handoff.md` contendo:

- task executada
- objetivo da task
- o que foi feito
- arquivos alterados
- decisões locais
- limites da execução
- pendências ou dúvidas
- pontos de atenção para revisão
- status da entrega

Regra obrigatória:

Sem `handoff.md` válido:
→ NÃO seguir para revisão

---

## Etapa 5 — Validar entrega

**Agente:** Reviewer  
**Skill:** validate_delivery

Ações:

- ler:
  - task atual em `tasks.md`
  - `architecture.md`
  - `decision_log.md`
  - `handoff.md`
  - código implementado
- validar:
  - cumprimento da task
  - aderência à arquitetura
  - respeito ao escopo
  - consistência com os artefatos

Classificar achados como:

- crítico
- relevante
- menor

Gerar ou atualizar `review_report.md`

---

## Etapa 6 — Decidir resultado da revisão

**Agente:** Reviewer  
**Skill:** validate_delivery

Escolher uma única decisão:

- aprovado
- aprovado com observações
- reprovado

### Se aprovado
- task pode seguir como concluída

### Se aprovado com observações
- task pode seguir, mas observações devem ser registradas

### Se reprovado
- registrar problemas
- retornar ao Executor via Orchestrator

Toda reprovação deve ser objetiva e acionável.

---

## Etapa 7 — Atualizar estado do projeto

**Agente:** Orchestrator  
**Skill:** orchestrate_project

Ações:

- ler resultado da revisão
- atualizar `project_status.md`
- decidir a próxima ação:
  - próxima task
  - correção da task atual
  - retorno à arquitetura
  - retorno à descoberta

Regra obrigatória:

Nunca avançar automaticamente se houver:
- inconsistência crítica
- reprovação
- lacuna estrutural

---

## Regras obrigatórias do workflow

### 1. Não executar task ambígua
Se a task não estiver clara:
→ bloquear

### 2. Não revisar sem handoff
Se não houver `handoff.md` suficiente:
→ bloquear revisão

### 3. Não aprovar sem validação
Toda aprovação deve se basear em:
- task
- arquitetura
- handoff
- artefatos do projeto

### 4. Não pular etapas
Fluxo obrigatório:

Orchestrator → Executor → Handoff → Reviewer → Orchestrator

### 5. Reprovação faz parte do fluxo
Reprovar não é falha do método.
É proteção de integridade.

---

## Situações especiais

### Falta de task clara
→ voltar ao Orchestrator

### Falta de arquitetura
→ voltar ao Architect via Orchestrator

### Conflito entre artefatos
→ registrar no `decision_log.md`
→ bloquear execução

### Descoberta de mudança de escopo
→ interromper execução
→ retornar ao Discovery via Orchestrator

---

## Regra final

Se houver dúvida entre:

- seguir com a task
- ou bloquear por falta de contexto

Você deve bloquear.