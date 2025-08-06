# 🎨 Gerador de Paleta de Cores - Designer Web

Um gerador interativo de paletas de cores para designers web, que cria automaticamente variações harmoniosas a partir de uma cor principal.

## ✨ Funcionalidades

- **Geração Automática**: Cria paletas completas a partir de uma cor principal
- **Variações Inteligentes**: Gera cores claras, escuras, intermediárias e complementares
- **Cores Funcionais**: Inclui cores para sucesso, erro, alerta e elementos neutros
- **Cópia Rápida**: Clique em qualquer cor para copiar o código hexadecimal
- **Interface Responsiva**: Design adaptável para diferentes tamanhos de tela
- **Validação de Entrada**: Verifica se a cor inserida é válida

## 🚀 Como Usar

1. **Insira uma Cor**: Digite um código hexadecimal (ex: `#0056b3`)
2. **Clique em Gerar**: O sistema criará automaticamente uma paleta completa
3. **Copie as Cores**: Clique em qualquer cor para copiar o código para a área de transferência

## 🎯 Paleta Gerada

O gerador cria automaticamente:

### Cores Principais
- **Cor Principal**: Cor base do sistema
- **Variações**: Versões clara, escura e intermediária
- **Complementar**: Cor de contraste visual

### Cores Funcionais
- 🟢 **Verde**: Sucesso e confirmações
- 🔴 **Vermelho**: Erros e ações críticas
- 🟠 **Laranja**: Alertas e notificações

### Cores Neutras
- **Cinza Claro**: Fundos gerais
- **Cinza Médio**: Divisórias e bordas
- **Cinza Escuro**: Textos principais
- **Preto**: Alto contraste

### Cores Adicionais
- **Amarelo**: Acentos e destaques
- **Roxo**: Elementos decorativos
- **Cor Desaturada**: Elementos secundários

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: Estilização moderna com Grid e Flexbox
- **JavaScript**: Lógica de geração de cores e interatividade
- **Git**: Controle de versão

## 📁 Estrutura do Projeto

```
paleta_cores/
├── index.html              # Página principal
├── logotipo_weth.png       # Logo do projeto
├── README.md              # Documentação
└── .git/                  # Controle de versão
```

## 🎨 Algoritmos de Cores

### Clareamento
```javascript
function lightenColor(color, amount) {
  // Aumenta o valor RGB proporcionalmente
}
```

### Escurecimento
```javascript
function darkenColor(color, amount) {
  // Diminui o valor RGB proporcionalmente
}
```

### Cor Complementar
```javascript
function getComplementaryColor(color) {
  // Inverte os valores RGB (255 - valor)
}
```

### Cor Desaturada
```javascript
function getMutedColor(color) {
  // Mistura com cinza médio para reduzir saturação
}
```

## 🌐 Como Executar

1. Clone o repositório:
```bash
git clone https://github.com/thiago95macedo/paleta_cores.git
```

2. Abra o arquivo `index.html` em seu navegador

3. Ou execute em um servidor local:
```bash
python -m http.server 8000
# Acesse: http://localhost:8000
```

## 📱 Responsividade

O projeto é totalmente responsivo e funciona em:
- 💻 Desktop
- 📱 Mobile
- 📱 Tablet

## 🤝 Contribuições

Contribuições são bem-vindas! Para contribuir:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👨‍💻 Autor

**Thiago Macêdo**
- Website: [thiagomacedo.com.br](https://thiagomacedo.com.br)
- GitHub: [@thiago95macedo](https://github.com/thiago95macedo)

## 🙏 Agradecimentos

- Comunidade de designers web
- Contribuidores do projeto
- Usuários que testaram e deram feedback

---

⭐ Se este projeto te ajudou, considere dar uma estrela no repositório! 