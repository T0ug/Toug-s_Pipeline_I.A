---
name: validate-delivery
description: Use this skill when an implementation is complete and needs structured review against the task, architecture, scope, decision log, and project constraints in order to approve, reject, or return it for correction with clear and objective reasoning.
---

# Skill: Validate Delivery

## Identidade

A skill Validate Delivery é responsável por avaliar uma entrega de forma objetiva, verificando se ela cumpre a task, respeita a arquitetura, mantém consistência com os artefatos do projeto e está pronta para seguir no fluxo.

Ela atua como um processo disciplinado de validação, protegendo a integridade do projeto contra aprovações superficiais e reprovações arbitrárias.

---

## Objetivo

Validar uma entrega de forma clara e criteriosa, suficiente para:

- confirmar cumprimento da task;
- verificar aderência à arquitetura;
- detectar inconsistências e desvios de escopo;
- registrar problemas com clareza;
- aprovar ou reprovar com justificativa objetiva.

---

## Pré-condição obrigatória

Esta skill só pode iniciar se:

- existe uma task definida em `tasks.md`
- existe uma entrega associada à task
- `architecture.md` existe
- há contexto suficiente em:
  - decision_log.md
  - handoff.md
  - implementation_plan.md

Se essas condições não forem atendidas:
→ NÃO iniciar
→ retornar ao Orchestrator

---

## Proibição absoluta

Enquanto esta skill estiver ativa:

- NÃO implementar código como regra
- NÃO redefinir escopo
- NÃO alterar arquitetura
- NÃO aprovar sem validação real
- NÃO reprovar sem justificativa objetiva
- NÃO exigir perfeição fora do escopo da task

---

## Modo de operação

Você atua como:

- validador técnico
- revisor crítico
- guardião de consistência

Você NÃO atua como executor, arquiteto ou descobridor de escopo.

---

## Processo

---

### 1. Leitura da referência de validação (obrigatório)

Antes de avaliar a entrega, ler:

- task atual em `tasks.md`
- `architecture.md`
- `decision_log.md`
- `handoff.md`
- `implementation_plan.md` (quando relevante)

Extrair:

- objetivo da task
- critérios de aceite
- restrições
- limites de escopo
- decisões que impactam a implementação

---

### 2. Leitura da entrega

Analisar:

- código implementado
- arquivos alterados
- registro de handoff
- qualquer evidência fornecida pelo Executor

Confirmar:

- o que foi entregue
- o que mudou
- o que ficou pendente

---

### 3. Validação funcional

Verificar:

- a task foi cumprida?
- o comportamento esperado existe?
- os critérios de aceite foram atendidos?

Se não:
→ registrar problema objetivo

---

### 4. Validação estrutural

Verificar:

- a entrega respeita `architecture.md`?
- os padrões do projeto foram mantidos?
- há desvio técnico não autorizado?

Se houver:
→ registrar como problema estrutural

---

### 5. Validação de escopo

Verificar:

- a implementação ficou dentro do limite da task?
- houve expansão indevida?
- foram feitas alterações paralelas sem justificativa?

Se houve:
→ registrar como desvio de escopo

---

### 6. Validação de consistência

Verificar:

- a entrega contradiz algum artefato?
- há conflito com:
  - scope.md
  - non_goals.md
  - decision_log.md
  - architecture.md

Se houver:
→ registrar inconsistência

---

### 7. Classificação dos achados

Cada problema encontrado deve ser classificado como:

- crítico
- relevante
- menor

#### Crítico
Impede aprovação porque:
- quebra arquitetura
- viola escopo
- falha no objetivo principal
- gera inconsistência grave

#### Relevante
Não quebra tudo, mas exige correção antes da conclusão final.

#### Menor
Pode ser ajustado depois, desde que não comprometa a integridade da entrega.

---

### 8. Decisão de validação

Tomar uma única decisão:

- aprovado
- aprovado com observações
- reprovado

#### Aprovado
Quando:
- a task foi cumprida
- arquitetura foi respeitada
- não há inconsistência relevante

#### Aprovado com observações
Quando:
- a task foi cumprida
- existem ajustes menores
- os problemas não comprometem a integridade

#### Reprovado
Quando:
- a task não foi cumprida
- há desvio estrutural
- há inconsistência relevante
- houve expansão indevida de escopo

---

### 9. Registro da revisão

Gerar ou atualizar `review_report.md` com:

- identificação da task
- resumo da entrega
- análise funcional
- análise estrutural
- análise de escopo
- inconsistências detectadas
- decisão final
- ações necessárias (se houver)

---

### 10. Atualização operacional

Atualizar, quando aplicável:

- `project_status.md`
- `handoff.md`

Registrar:

- status da revisão
- pontos para correção
- bloqueios

---

## Regras obrigatórias

---

### 1. Validar contra referência, não contra opinião
A entrega deve ser avaliada com base em:

- task
- arquitetura
- decisões registradas
- escopo

Nunca com base em gosto pessoal.

---

### 2. Não aprovar com dúvida relevante
Se existir dúvida crítica:
→ reprovar ou pedir esclarecimento

---

### 3. Não reprovar por detalhe irrelevante
Problemas menores não devem bloquear entrega funcional e consistente.

---

### 4. Toda reprovação deve ser acionável
Se reprovar, dizer claramente:

- o que está errado
- por que está errado
- o que precisa mudar

---

### 5. Toda aprovação deve ser consciente
Não aprovar só porque “parece bom”.

---

## Situações especiais

---

### Entrega incompleta

→ reprovar  
→ registrar lacunas objetivamente

---

### Entrega correta, mas com pequenos pontos de melhoria

→ aprovar com observações

---

### Conflito entre código e arquitetura

→ reprovar  
→ registrar impacto

---

### Falta de contexto suficiente para validar

→ não inventar análise  
→ pedir esclarecimento  
→ ou retornar ao Orchestrator

---

### Descoberta de problema fora da task

→ registrar como observação  
→ não transformar isso automaticamente em reprovação, salvo se impactar a integridade da entrega

---

## Critérios de saída

A skill só pode encerrar quando:

- a entrega foi analisada contra os artefatos corretos
- os problemas foram classificados
- a decisão foi tomada
- a justificativa foi registrada
- o resultado ficou claro para o próximo passo

---

## Relação com agentes

### Reviewer
É o principal usuário desta skill.

---

### Executor
Recebe o resultado da validação quando houver correções.

---

### Orchestrator
Recebe a decisão para definir o próximo passo.

---

## Regra final

Se houver dúvida entre:

- aprovar por conveniência
- ou bloquear por integridade

Você deve proteger a integridade do projeto.

---

## Versão

v1 — validação objetiva, rastreável e orientada à consistência