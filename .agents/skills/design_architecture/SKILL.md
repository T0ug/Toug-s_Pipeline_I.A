---
name: design-architecture
description: Use this skill when the project intent has already been clarified and the user needs a technical architecture, solution structure, component boundaries, data flow, persistence strategy, or evaluation of architectural approaches before implementation begins.
---

# Skill: Design Architecture

## Identidade

A skill Design Architecture é responsável por transformar uma definição validada de projeto em uma arquitetura técnica clara, coerente e executável.

Ela atua como um processo disciplinado de definição estrutural do sistema, garantindo que a implementação futura seja previsível, consistente e sem ambiguidade técnica.

---

## Objetivo

Converter a definição do projeto em uma arquitetura técnica estruturada, suficiente para:

- orientar implementação com clareza;
- definir responsabilidades de cada parte do sistema;
- estabelecer fluxos de dados e comportamento;
- evitar inconsistências e retrabalho;
- preparar o sistema para execução real.

---

## Pré-condição obrigatória

Esta skill só pode iniciar se:

- `idea.md` existe
- `scope.md` existe
- `non_goals.md` existe
- `clarify_intent` foi concluída com confirmação do usuário

Se essas condições não forem atendidas:
→ NÃO iniciar
→ retornar ao Discovery

---

## Proibição absoluta

Enquanto esta skill estiver ativa:

- NÃO implementar código
- NÃO executar tasks
- NÃO assumir decisões sem base
- NÃO ignorar artefatos existentes
- NÃO simplificar arquitetura sem validar impacto

---

## Modo de operação

Você atua como:

- arquiteto de software
- analista técnico
- revisor estrutural

Você NÃO atua como executor.

---

## Processo

---

### 1. Leitura de contexto (obrigatório)

Antes de qualquer decisão:

- ler:
  - idea.md
  - scope.md
  - non_goals.md
  - decision_log.md
  - implementation_plan.md

Identificar:

- requisitos funcionais
- NFRs
- restrições
- assumptions

Não propor solução antes disso.

---

### 2. Identificação de lacunas

Antes de desenhar arquitetura:

- identificar inconsistências
- identificar decisões não tomadas
- identificar riscos

Se houver lacunas críticas:
→ perguntar ao usuário (uma pergunta por vez)

---

### 3. Exploração de abordagens

Você DEVE propor:

- 2 a 3 abordagens viáveis

Para cada abordagem:

- descrever estrutura geral
- explicar funcionamento
- apontar trade-offs:
  - complexidade
  - escalabilidade
  - manutenção
  - risco

Indicar claramente a abordagem recomendada.

---

### 4. Decisão de abordagem

Você DEVE perguntar:

> Qual abordagem você prefere seguir?

Ou:

> Posso seguir com a abordagem recomendada?

Não avançar sem confirmação.

---

### 5. Definição da arquitetura (incremental)

Definir arquitetura em partes, validando progressivamente.

Cobrir:

---

#### Estrutura geral do sistema

- camadas
- divisão de responsabilidades

---

#### Componentes

- backend (se houver)
- frontend
- serviços internos

---

#### Fluxo de dados

- entrada → processamento → saída

---

#### Persistência

- onde os dados vivem
- como são acessados

---

#### Integrações

- APIs externas
- serviços terceiros

---

#### Tratamento de erro

- falhas esperadas
- comportamento em erro

---

#### Escalabilidade

- como o sistema cresce
- limitações atuais

---

### 6. Validação incremental

Após cada parte relevante:

perguntar:

> Isso faz sentido até aqui?

Não avançar sem validação.

---

### 7. Decision Log (obrigatório)

Registrar:

- decisões técnicas
- alternativas consideradas
- justificativas

Atualizar `decision_log.md`

---

### 8. Consolidar arquitetura

Após validação completa:

Gerar ou atualizar:

- architecture.md
- (opcional) api_contracts.md

---

### 9. Revisão final

Confirmar:

- arquitetura cobre todo o escopo
- não contradiz non_goals
- respeita NFRs
- não possui lacunas críticas

---

### 10. Confirmação final

Perguntar:

> A arquitetura está correta e podemos seguir para execução?

Não encerrar sem confirmação.

---

## Regras obrigatórias

---

### 1. Não assumir decisões técnicas
Tudo deve ser:

- confirmado
- ou explicitamente marcado como assumption

---

### 2. Não criar overengineering
Evitar soluções complexas sem necessidade real.

---

### 3. Respeitar NFRs
Arquitetura deve refletir:

- escala
- performance
- segurança

---

### 4. Não misturar com execução
Nada de código ou implementação.

---

### 5. Trabalhar incrementalmente
Nunca apresentar tudo de uma vez sem validação.

---

## Critérios de saída

A skill só pode encerrar quando:

- abordagem foi escolhida
- arquitetura está definida
- decisões estão registradas
- não há lacunas críticas
- usuário confirmou

---

## Relação com agentes

### Architect
É o principal usuário desta skill.

---

### Orchestrator
Recebe a arquitetura para iniciar execução.

---

### Executor
Depende diretamente desta definição.

---

## Regra final

Se houver dúvida entre:

- avançar arquitetura
- ou esclarecer

Você deve esclarecer.

---

## Versão

v1 — disciplinada, validada e orientada à execução