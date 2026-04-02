# Method

## Objetivo

Definir como o sistema de desenvolvimento com IA opera, garantindo consistência, controle e previsibilidade em todas as etapas do projeto.

Este método estabelece:

- ordem de execução;
- responsabilidades dos agentes;
- uso das skills;
- critérios de progressão e bloqueio.

---

## Princípios fundamentais

---

### 1. Intenção antes de implementação
Nenhum código deve ser produzido antes da intenção estar clara e validada.

---

### 2. Clareza antes de velocidade
Velocidade não justifica ambiguidade.

---

### 3. Nada importante implícito
Toda decisão relevante deve ser registrada.

---

### 4. Execução controlada
Implementação só ocorre com contexto suficiente.

---

### 5. Validação obrigatória
Nenhuma entrega segue adiante sem revisão.

---

### 6. Progressão disciplinada
O projeto deve evoluir por etapas, sem saltos.

---

## Ciclo de vida do projeto

O sistema opera em quatro fases:

---

### 1. Definição

Responsável:
- Discovery

Skill:
- clarify_intent

Resultado:

- idea.md
- scope.md
- non_goals.md
- decision_log.md (inicial)
- implementation_plan.md (macro)
- tasks.md (macro)

---

### 2. Estruturação

Responsável:
- Architect

Skill:
- design_architecture

Resultado:

- architecture.md
- decisões técnicas registradas

---

### 3. Execução

Responsável:
- Executor

Skill:
- implement_task

Resultado:

- código implementado
- handoff atualizado

---

### 4. Validação

Responsável:
- Reviewer

Skill:
- validate_delivery

Resultado:

- review_report.md
- decisão de aprovação ou reprovação

---

## Fluxo operacional

O fluxo padrão é:

1. definir (clarify_intent)
2. estruturar (design_architecture)
3. executar (implement_task)
4. validar (validate_delivery)

---

## Orquestração

Responsável:
- Orchestrator

Skill:
- orchestrate_project

Função:

- determinar fase atual
- identificar inconsistências
- decidir próxima ação
- acionar agente e skill corretos

---

## Regras de transição

---

### Definição → Estruturação

Só ocorre se:

- escopo estiver claro
- não houver ambiguidade crítica
- usuário tiver confirmado entendimento

---

### Estruturação → Execução

Só ocorre se:

- arquitetura estiver definida
- não houver lacunas críticas
- decisões estiverem registradas

---

### Execução → Validação

Só ocorre se:

- task estiver implementada
- handoff estiver registrado

---

### Validação → Próxima ação

Depende da decisão:

- aprovado → próxima task
- aprovado com observações → próxima task com atenção
- reprovado → voltar para execução

---

## Uso de skills

Cada fase deve utilizar a skill correspondente.

Não é permitido:

- usar skill fora de contexto
- pular skill obrigatória
- misturar responsabilidades

---

## Regras de controle

---

### 1. Não pular etapas
Nenhuma fase pode ser ignorada.

---

### 2. Não avançar com inconsistência
Se houver conflito ou lacuna:
→ bloquear fluxo

---

### 3. Não assumir progresso
Estado do projeto deve ser validado por artefatos.

---

### 4. Não misturar papéis
Cada agente atua apenas em sua responsabilidade.

---

## Comportamento em falha

---

### Ambiguidade

→ retornar para clarify_intent

---

### Falta de arquitetura

→ retornar para design_architecture

---

### Falha de execução

→ retornar para implement_task

---

### Reprovação

→ corrigir e reexecutar

---

### Conflito entre artefatos

→ registrar em decision_log.md  
→ resolver antes de continuar

---

## Critério de qualidade do sistema

O método está sendo seguido corretamente quando:

- não há ambiguidade crítica
- decisões são rastreáveis
- execução respeita arquitetura
- validação é objetiva
- fluxo é respeitado

---

## Regra final

Se houver dúvida entre:

- avançar
- ou garantir consistência

Você deve garantir consistência.

---

## Versão

v1 — disciplinado, sequencial e orientado à integridade do projeto