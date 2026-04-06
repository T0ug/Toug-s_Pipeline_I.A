---
description: Retoma uma nova sessão lendo os artefatos mínimos do projeto em docs/, reconstruindo o estado atual e definindo a próxima ação correta antes de qualquer continuidade.
---

# Resume Session Workflow

## Objetivo

Retomar uma nova sessão de trabalho com segurança, reconstruindo o contexto do projeto a partir dos artefatos persistidos em `docs/`, sem depender da memória do chat anterior.

Garantir:

- leitura do estado atual do projeto
- compreensão da fase corrente
- identificação de bloqueios ou lacunas
- definição da próxima ação correta
- retomada segura da pipeline principal

---

## Quando usar

Use este workflow sempre que:

- uma nova sessão for iniciada
- o contexto do chat anterior tiver sido perdido
- a conversa anterior estiver longa demais
- houver dúvida sobre o estado atual do projeto
- for necessário reancorar o trabalho antes de prosseguir

---

## Etapa 1 — Ler os artefatos mínimos

**Agente:** Orchestrator  
**Skill:** orchestrate_project

Ler obrigatoriamente em `docs/`:

- `project_status.md`
- `handoff.md`
- `tasks.md`
- `decision_log.md`

Ler também, se necessário para contexto:

- `idea.md`
- `scope.md`
- `non_goals.md`
- `implementation_plan.md`
- `architecture.md`
- `review_report.md`

Regra obrigatória:

- não prosseguir sem antes ler os artefatos mínimos
- não depender do histórico do chat como fonte principal de verdade

---

## Etapa 2 — Reconstruir o estado atual

**Agente:** Orchestrator  
**Skill:** orchestrate_project

Ações:

- identificar a fase atual do projeto
- identificar a última task trabalhada
- identificar o último handoff válido
- identificar a última decisão relevante
- identificar se existe revisão pendente
- identificar se existe bloqueio registrado

Gerar um resumo curto cobrindo:

- fase atual
- última task concluída
- task atual ou próxima task
- bloqueios
- próximo passo provável

---

## Etapa 3 — Detectar inconsistências

**Agente:** Orchestrator  
**Skill:** orchestrate_project

Verificar:

- `project_status.md` é coerente com `tasks.md`?
- `handoff.md` corresponde à última task trabalhada?
- existe `review_report.md` pendente de ação?
- existe divergência entre progresso real e estado documentado?

Se houver inconsistência:
→ registrar a inconsistência
→ bloquear avanço
→ propor correção antes de seguir

---

## Etapa 4 — Definir a próxima ação correta

**Agente:** Orchestrator  
**Skill:** orchestrate_project

Com base nos artefatos, decidir uma única próxima ação:

Exemplos:

- continuar Discovery
- continuar Architect
- executar a próxima task
- validar a última entrega
- corrigir inconsistência documental
- retornar ao onboarding de projeto existente

Regra obrigatória:

- não sugerir múltiplos caminhos ao mesmo tempo
- escolher a ação mais segura e coerente com o estado atual

---

## Etapa 5 — Preparar retomada

**Agente:** Orchestrator  
**Skill:** orchestrate_project

Ações:

- indicar qual agente deve atuar a seguir
- indicar qual skill deve ser usada
- indicar quais artefatos são relevantes para a próxima etapa
- preparar contexto mínimo de retomada

---

## Etapa 6 — Confirmar retomada

**Agente:** Orchestrator  
**Skill:** orchestrate_project

Perguntar:

> A sessão foi retomada com sucesso. Deseja prosseguir com esta próxima ação?

Não avançar automaticamente sem confirmação.

---

## Saída esperada

Ao final deste workflow, deve existir:

- um resumo confiável do estado atual do projeto
- uma próxima ação clara
- um agente definido
- uma skill definida
- uma retomada segura da pipeline principal

---

## Regras obrigatórias

### 1. `docs/` é a fonte principal de verdade
A retomada deve se basear nos artefatos persistidos, não na memória do chat.

### 2. Não assumir continuidade implícita
Toda retomada deve reconstruir contexto explicitamente.

### 3. Não avançar com inconsistência
Se houver divergência entre artefatos, bloquear antes de seguir.

### 4. Não pular a leitura mínima
`project_status.md`, `handoff.md`, `tasks.md` e `decision_log.md` são leitura obrigatória.

### 5. Não executar diretamente
Este workflow prepara a retomada. Ele não substitui o workflow operacional seguinte.

---

## Situações especiais

### Não existe `docs/project_status.md`
→ reconstruir o estado a partir de `tasks.md`, `handoff.md` e `decision_log.md`
→ registrar necessidade de normalização

### Não existe `docs/handoff.md`
→ usar `tasks.md` + `review_report.md` + `project_status.md`
→ registrar ausência de handoff como risco operacional

### Não existe `docs/tasks.md`
→ bloquear continuação
→ retornar ao Orchestrator para reconstrução de planejamento

### O projeto veio de fora da pipeline
→ usar `onboard_existing_project` em vez de `resume_session`

---

## Critérios de saída

O workflow só pode encerrar quando:

- o estado atual foi reconstruído
- a fase atual foi identificada
- a próxima ação foi definida
- não há inconsistência crítica aberta
- o usuário confirmou a retomada

---

## Regra final

Nunca continue uma sessão nova como se o contexto ainda estivesse intacto.

Primeiro reconstrua a verdade atual do projeto.