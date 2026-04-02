---
description: Executa uma task do início à validação, coordenando Orchestrator, Executor e Reviewer com segurança e consistência.
---

# Execute Task Workflow

## Objetivo

Executar uma task de forma controlada, garantindo clareza, consistência e validação adequada.

---

## Instruções

Siga este fluxo sempre que uma task estiver pronta para execução.

---

## Etapa 1 — Seleção da task

- Identifique a próxima task disponível em `tasks.md`
- Verifique dependências
- Confirme que a task possui:
  - objetivo claro
  - contexto mínimo
  - critérios de aceite

Se não estiver clara:
→ NÃO execute
→ solicite refinamento

---

## Etapa 2 — Preparação do contexto

- Leia:
  - architecture.md
  - implementation_plan.md
  - decision_log.md
- Extraia:
  - objetivo da task
  - restrições
  - critérios de aceite

Registre contexto em `handoff.md`

---

## Etapa 3 — Execução

- Implemente somente o que está definido na task
- Respeite a arquitetura
- NÃO:
  - altere escopo
  - modifique arquitetura
  - implemente além da task

Registre:
- o que foi feito
- arquivos alterados
em `handoff.md`

---

## Etapa 4 — Revisão

- Compare a implementação com:
  - task
  - arquitetura
  - decision_log.md

Valide:
- funcionalidade
- consistência
- escopo

Gere `review_report.md`

---

## Etapa 5 — Decisão

Se estiver correto:
- marcar task como concluída
- atualizar `project_status.md`

Se houver problemas:
- registrar erros
- retornar para execução

---

## Etapa 6 — Continuação

- Atualizar estado do projeto
- Definir próxima task

---

## Regras obrigatórias

- Nunca executar task ambígua
- Nunca sobrescrever artefatos estruturais
- Nunca alterar escopo sem decisão registrada
- Sempre trabalhar de forma incremental
- Sempre respeitar:
  - artifact_policy.md
  - ownership_matrix.md
  - overwrite_policy.md

---

## Situações especiais

### Falta de contexto
→ parar e solicitar clarificação

### Conflito entre artefatos
→ registrar no decision_log.md
→ não executar

### Mudança de escopo
→ interromper fluxo
→ acionar Discovery

---

## Regra final

Se houver dúvida, NÃO execute.

Clareza vem antes de velocidade.