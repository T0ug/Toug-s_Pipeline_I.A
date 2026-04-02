# Toug's Pipeline I.A

Um pipeline modular de desenvolvimento com IA, orientado por agentes, workflows, templates e políticas operacionais.

A proposta deste repositório é fornecer uma base organizada para desenvolvimento assistido por IA em projetos reais, reduzindo improviso, sobrescrita indevida, perda de contexto e retrabalho.

## Objetivo

Este projeto existe para transformar o uso de IA no desenvolvimento em um processo mais estruturado, com:

- agentes com responsabilidades claras;
- workflows reutilizáveis;
- templates padronizados;
- políticas de preservação de artefatos;
- organização suficiente para uso real em múltiplos projetos.

Não é um framework fechado.
É uma base para personalização.

---

## Estrutura

```txt
.agents/
  core/
  agents/
  skills/
  workflows/
  templates/
  registry/
```

---

## Instalação e uso local da CLI

```
git clone https://github.com/T0ug/Toug-s_Pipeline_I.A.git
cd Toug-s_Pipeline_I.A
npm install
npm link
```

Depois, no projeto onde deseja instalar a pipeline:

```
toug-pipeline init
toug-pipeline doctor
```

Importante:
O comando init deve ser executado no projeto alvo, não dentro do repositório da própria pipeline.