# 🎨 Gerador de Paleta de Cores Avançado - Designer Web

Um gerador profissional de paletas de cores baseado em teoria das cores científica, que cria automaticamente 20 variações harmoniosas a partir de uma cor principal usando algoritmos HSL avançados.

## ✨ Funcionalidades Avançadas

### 🎯 **Sistema HSL Profissional**
- **Conversão RGB ↔ HSL**: Algoritmos precisos de conversão de cores
- **Manipulação intuitiva**: Hue, Saturation, Lightness
- **Percepção humana**: Considera como o olho humano vê as cores
- **Precisão científica**: Baseado em teoria das cores comprovada

### 🌈 **Teoria das Cores Completa**
- **Cores Análogas**: Harmonia cromática (30° de diferença)
- **Cores Triádicas**: Equilíbrio perfeito (120° de diferença)
- **Cor Complementar**: Contraste máximo (180° de diferença)
- **Variações de Luminosidade**: 5 níveis de claridade
- **Variações de Saturação**: 3 níveis de intensidade

### 🎨 **20 Variações Automáticas**
1. **Cor Principal** - Botões primários, links principais
2. **Cor Clara** - Estados hover, destaques suaves
3. **Cor Mais Clara** - Backgrounds muito claros
4. **Cor Escura** - Textos sobre fundos claros
5. **Cor Mais Escura** - Textos importantes, alto contraste
6. **Cor Saturada** - Elementos de destaque, CTAs
7. **Cor Suave** - Elementos secundários, bordas
8. **Cor Desaturada** - Backgrounds, baixa prioridade
9. **Cor Análoga 1** - Elementos relacionados
10. **Cor Análoga 2** - Elementos complementares
11. **Cor Triádica 1** - Acentos, elementos especiais
12. **Cor Triádica 2** - Destaques, elementos únicos
13. **Cor Complementar** - Contraste máximo, elementos críticos
14. **Sucesso** - Confirmações, estados positivos
15. **Erro** - Avisos críticos, validações negativas
16. **Alerta** - Notificações importantes, avisos
17. **Informação** - Tooltips, mensagens informativas
18. **Neutro Mais Claro** - Background principal
19. **Neutro Claro** - Backgrounds secundários, cards
20. **Neutro Médio** - Bordas, divisórias, estrutura

### 🎯 **Cores Funcionais Adaptativas**
- **Sucesso**: Verde baseado na cor principal
- **Erro**: Vermelho baseado na cor principal
- **Alerta**: Laranja baseado na cor principal
- **Informação**: Azul baseado na cor principal

### ⚪ **Cores Neutras Inteligentes**
- **5 variações**: Do mais claro ao mais escuro
- **Baseadas na luminosidade**: Da cor principal
- **Aplicações específicas**: Backgrounds, textos, estrutura

## 🚀 Como Usar

1. **Insira uma Cor**: Digite um código hexadecimal (ex: `#0056b3`)
2. **Clique em Gerar**: O sistema criará automaticamente 20 variações
3. **Copie as Cores**: Clique em qualquer cor para copiar o código
4. **Aplique com Confiança**: Cada cor tem aplicação específica definida

## 🎨 Algoritmos de Cores Implementados

### **Conversão HSL**
```javascript
// RGB para HSL
function rgbToHsl(r, g, b) {
  // Algoritmo preciso de conversão
}

// HSL para RGB
function hslToRgb(h, s, l) {
  // Conversão com precisão científica
}
```

### **Cores Análogas**
```javascript
function getAnalogousColors(h, s, l) {
  // 30° de diferença no círculo cromático
  return [
    generateHslColor((h - 30 + 360) % 360, s, l),
    generateHslColor((h + 30) % 360, s, l)
  ];
}
```

### **Cores Triádicas**
```javascript
function getTriadicColors(h, s, l) {
  // 120° de diferença para equilíbrio perfeito
  return [
    generateHslColor((h + 120) % 360, s, l),
    generateHslColor((h + 240) % 360, s, l)
  ];
}
```

### **Variações de Luminosidade**
```javascript
function getLightnessVariations(h, s, l) {
  return {
    lighter: generateHslColor(h, s, Math.min(100, l + 20)),
    light: generateHslColor(h, s, Math.min(100, l + 10)),
    dark: generateHslColor(h, s, Math.max(0, l - 10)),
    darker: generateHslColor(h, s, Math.max(0, l - 20))
  };
}
```

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica e acessível
- **CSS3**: Grid responsivo, Flexbox, animações suaves
- **JavaScript ES6+**: Algoritmos avançados de cores
- **Teoria das Cores**: HSL, RGB, círculo cromático
- **Git**: Controle de versão profissional

## 📁 Estrutura do Projeto

```
paleta_cores/
├── index.html              # Interface principal
├── css/
│   └── styles.css          # Estilos responsivos
├── images/
│   └── logo.svg            # Logo SVG otimizada
├── README.md              # Documentação completa
└── .git/                  # Controle de versão
```

## 🎯 Aplicações Específicas por Cor

### **Cores Principais**
- **Cor Principal**: Botões primários, links principais, elementos de destaque
- **Variações Clara/Escura**: Estados hover, textos, backgrounds

### **Cores de Harmonia**
- **Análogas**: Navegação secundária, elementos relacionados
- **Triádicas**: Acentos, CTAs secundários, elementos especiais
- **Complementar**: Contraste máximo, elementos críticos

### **Cores Funcionais**
- **Sucesso**: Confirmações, validações positivas
- **Erro**: Alertas críticos, validações negativas
- **Alerta**: Notificações importantes, avisos preventivos
- **Informação**: Tooltips, mensagens informativas

### **Cores Neutras**
- **Mais Claro**: Background principal, espaços em branco
- **Claro**: Cards, containers, backgrounds secundários
- **Médio**: Bordas, divisórias, elementos estruturais
- **Escuro**: Textos secundários, labels, metadados
- **Mais Escuro**: Textos principais, títulos, navegação

## 🌐 Como Executar

1. **Clone o repositório:**
```bash
git clone https://github.com/thiago95macedo/paleta_cores.git
```

2. **Abra o arquivo `index.html` em seu navegador**

3. **Ou execute em um servidor local:**
```bash
python -m http.server 8000
# Acesse: http://localhost:8000
```

## 📱 Responsividade

O projeto é totalmente responsivo e otimizado para:
- 💻 **Desktop**: 5 colunas, layout completo
- 📱 **Tablet**: 3-4 colunas, layout adaptado
- 📱 **Mobile**: 2 colunas, layout compacto
- 📱 **Mobile Pequeno**: 1 coluna, layout vertical

## 🎨 Teoria das Cores Aplicada

### **Círculo Cromático**
- **Hue (Matiz)**: 0-360° no círculo cromático
- **Saturation (Saturação)**: 0-100% de intensidade
- **Lightness (Luminosidade)**: 0-100% de claridade

### **Harmonias Cromáticas**
- **Análoga**: Cores adjacentes (harmonia suave)
- **Triádica**: Cores equidistantes (equilíbrio)
- **Complementar**: Cores opostas (contraste)

### **Percepção Visual**
- **Luminosidade**: Como o olho percebe a claridade
- **Saturação**: Intensidade da cor
- **Contraste**: Diferença entre cores

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

- Teoria das cores e círculo cromático
- Comunidade de designers web
- Contribuidores do projeto
- Usuários que testaram e deram feedback

## 🔬 Base Científica

Este gerador é baseado em:
- **Teoria das Cores de Munsell**
- **Sistema HSL (Hue, Saturation, Lightness)**
- **Círculo Cromático de Newton**
- **Percepção Visual Humana**
- **Princípios de Design de Interface**

---

⭐ Se este projeto te ajudou, considere dar uma estrela no repositório! 