# **Projeto de Automação de Testes com Playwright**

Este projeto utiliza o [Playwright](https://playwright.dev/) para automação de testes end-to-end (E2E). Ele cobre cenários críticos da aplicação, garantindo qualidade e confiabilidade. Além disso, está integrado ao **GitHub Actions** para execução automática de testes de regressão.

---

## **Pré-requisitos**

Antes de executar os testes, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (versão 16 ou superior)
- [Git](https://git-scm.com/) (para clonar o repositório)

---

## **Como Executar os Testes Localmente**

Siga os passos abaixo para rodar os testes em sua máquina:

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/correamatheus/playwright-sauce.git
   cd playwright-sauce
2. **Instale as dependências:**:
   ```bash
    npm install
3. **Execute os testes**:
   ```bash
   npx playwright test
4. **Visualize os relatórios**:
   ```bash
   npx playwright show-report

# Integração com GitHub Actions

Este projeto está configurado com **GitHub Actions** para executar os testes de regressão automaticamente sempre que houver um **push** na branch **main** ou quando uma pull request for aberta.

## Como Funciona:

- O arquivo de configuração do GitHub Actions está localizado em `.github/workflows/playwright.yml`.

- Os testes são executados em um ambiente virtual com os navegadores Chromium, Firefox e WebKit.

- Em caso de falha, o workflow gera um relatório detalhado, incluindo screenshots e vídeos.

## Visualizando os Resultados no GitHub:

1. Acesse a aba **Actions** no repositório.

2. Clique na execução mais recente para ver os detalhes.

3. Em caso de falha, você pode baixar os artefatos (screenshots, vídeos e relatórios) para análise.
   
# Relatórios e Evidências

- **Relatórios Automáticos**:  
  O Playwright gera relatórios detalhados após cada execução. Use o comando `npx playwright show-report` para visualizá-los localmente.

- **Screenshots e Vídeos**:  
  Em caso de falha, screenshots e vídeos são capturados automaticamente e estão disponíveis na pasta `test-results`.
