# Gerador de Paleta de Cores Profissional

Um gerador avançado de paletas de cores que utiliza algoritmos inteligentes baseados em teoria das cores e melhores práticas de design para criar paletas profissionais e acessíveis.

## 🎯 Funcionalidades Avançadas

### **Sistema de Cores Profissional**
- **Cores Principais Otimizadas**: Variações inteligentes que consideram luminosidade e saturação
- **Cores de Feedback Fixas**: Baseadas em Material Design para máxima acessibilidade
- **Harmônicos Acessíveis**: Cores análogas, triádicas e complementares otimizadas para contraste
- **Escala de Neutros Profissional**: Inspirada no Tailwind CSS para uso prático

### **Funcionalidades de Exportação**
- **Copiar Cores Individuais**: Clique em qualquer cor para copiar o código hexadecimal
- **Exportar Paleta Completa**: Botão dedicado para baixar toda a paleta em arquivo .txt
- **Notificações Inteligentes**: Sistema de toast não-intrusivo para feedback

### **Algoritmos Inteligentes Implementados**

#### **Cores Principais**
```javascript
// Claro: aumentar luminosidade E reduzir saturação
primaryLight: generateOptimizedColor(h, Math.max(0, s - 20), Math.min(100, l + 25))

// Escuro: reduzir luminosidade, aumentar saturação
primaryDark: generateOptimizedColor(h, Math.min(100, s + 10), Math.max(0, l - 30))
```

#### **Cores de Feedback (Fixas)**
- **Sucesso**: `#16a34a` - Verde seguro, bem contrastante
- **Erro**: `#dc2626` - Vermelho vibrante
- **Aviso**: `#eab308` - Amarelo/laranja para avisos
- **Informação**: `#2563eb` - Azul informativo

#### **Harmônicos Otimizados**
```javascript
// Análogos: ajustar saturação para melhor contraste
analogous1: generateOptimizedColor((h - 30 + 360) % 360, Math.min(100, s + 5), Math.max(0, l - 5))

// Triádicos: ajustar para usos práticos
triadic1: generateOptimizedColor((h + 120) % 360, Math.min(100, s + 15), Math.max(0, l - 10))

// Complementar: otimizar para contraste
complementary: generateOptimizedColor((h + 180) % 360, Math.min(100, s + 20), Math.max(0, l - 15))
```

## 🚀 Como Usar

1. **Insira a Cor Principal**: Digite uma cor hexadecimal (ex: `#0056b3`)
2. **Gere a Paleta**: Clique em "Gerar Paleta" para criar 22 cores otimizadas
3. **Copie Cores**: Clique em qualquer cor para copiar o código hexadecimal
4. **Exporte Tudo**: Use "Exportar Paleta" para baixar a paleta completa

## 🎨 Estrutura da Paleta (22 Cores)

### **1. Cores Principais (3)**
- **Botão/Ação Principal**: Cor base para ações principais
- **Hover/Destaque**: Estados de hover e destaques suaves
- **Ativo/Foco**: Estados ativos e elementos em foco

### **2. Cores de Feedback (4)**
- **Sucesso**: Estados positivos, confirmações
- **Erro**: Mensagens de erro, validações negativas
- **Aviso**: Alertas, notificações importantes
- **Informação**: Tooltips, mensagens informativas

### **3. Cores de Harmonia (5)**
- **Ícones**: Elementos de interface relacionados
- **Gráficos**: Visualizações e dados
- **Acentos**: Destaques visuais sutis
- **Contraste**: Elementos de alto contraste
- **Destaques**: Elementos especiais

### **4. Cores Neutras (10)**
- **Fundo**: Background principal
- **Fundo Alternativo**: Backgrounds secundários
- **Bordas Claras**: Divisórias sutis
- **Divisores**: Elementos estruturais
- **Bordas**: Contornos de elementos
- **Textos Secundários**: Informações menos importantes
- **Ícones**: Elementos gráficos
- **Textos Terciários**: Metadados
- **Textos Principais**: Conteúdo principal
- **Títulos**: Cabeçalhos e títulos
- **Texto Principal**: Máximo contraste

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: Estilos responsivos e animações
- **JavaScript ES6+**: Lógica de geração de cores
- **HSL/RGB**: Conversões de cor avançadas
- **Teoria das Cores**: Harmônicos e acessibilidade
- **Material Design**: Padrões de cores de feedback
- **Tailwind CSS**: Inspiração para escala de neutros
- **Git**: Controle de versão

## 📁 Estrutura do Projeto

```
paleta_cores/
├── index.html          # Arquivo principal
├── css/
│   └── styles.css      # Estilos responsivos
├── images/
│   └── logo.svg        # Logo do projeto
└── README.md           # Documentação
```

## 📱 Responsividade

O layout se adapta perfeitamente a diferentes tamanhos de tela:

- **Desktop (1200px+)**: 5 colunas
- **Tablet (768px-1199px)**: 4 colunas
- **Mobile Grande (480px-767px)**: 3 colunas
- **Mobile (320px-479px)**: 2 colunas
- **Mobile Pequeno (<320px)**: 1 coluna

## 🎯 Aplicações Específicas por Cor

### **Cores Principais**
- **Botão/Ação Principal**: CTAs, links de navegação, ações críticas
- **Hover/Destaque**: Estados interativos, seleções
- **Ativo/Foco**: Elementos ativos, overlays

### **Cores de Feedback**
- **Sucesso**: Confirmações, validações positivas, badges
- **Erro**: Alertas críticos, validações negativas
- **Aviso**: Notificações importantes, avisos preventivos
- **Informação**: Tooltips, mensagens de ajuda

### **Cores de Harmonia**
- **Ícones**: Elementos de interface, navegação secundária
- **Gráficos**: Visualizações, dashboards, métricas
- **Acentos**: Micro-interações, elementos decorativos
- **Contraste**: Destaques visuais, elementos críticos
- **Destaques**: Elementos especiais, promoções

### **Cores Neutras**
- **Fundo**: Background principal, espaços em branco
- **Fundo Alternativo**: Cards, containers, seções
- **Bordas**: Divisórias, contornos, estruturas
- **Textos**: Hierarquia tipográfica clara
- **Ícones**: Elementos gráficos secundários

## 🔬 Base Científica

### **Teoria das Cores Aplicada**
- **Hue (Matiz)**: Determina a cor base (0-360°)
- **Saturation (Saturação)**: Intensidade da cor (0-100%)
- **Lightness (Luminosidade)**: Clareza da cor (0-100%)

### **Harmônicos Cromáticos**
- **Análogos**: Cores adjacentes no círculo cromático (±30°)
- **Triádicos**: Três cores equidistantes (120° de diferença)
- **Complementares**: Cores opostas no círculo (180°)

### **Percepção Visual**
- **Contraste**: Relação entre luminosidades para legibilidade
- **Acessibilidade**: Conformidade com WCAG 2.1
- **Hierarquia Visual**: Organização por importância

## 📊 Exemplo de Saída

Para a cor `#0056b3` (azul padrão), o sistema gera:

```
PALETA DE CORES GERADA
==================================================

#0056b3 - Botão/Ação Principal
#3384d6 - Hover/Destaque
#003366 - Ativo/Foco
#16a34a - Sucesso
#dc2626 - Erro
#eab308 - Aviso
#2563eb - Informação
#0083b3 - Ícones
#0040b3 - Gráficos
#b36f00 - Acentos
#b30056 - Contraste
#b35c00 - Destaques
#ffffff - Fundo
#f5f5f5 - Fundo Alternativo
#eeeeee - Bordas Claras
#e0e0e0 - Divisores
#bdbdbd - Bordas
#9e9e9e - Textos Secundários
#757575 - Ícones
#616161 - Textos Terciários
#424242 - Textos Principais
#212121 - Títulos
#000000 - Texto Principal
```

## 🚀 Próximas Melhorias

- [ ] Exportação em formatos adicionais (CSS, SCSS, JSON)
- [ ] Validação de contraste WCAG
- [ ] Modo escuro/claro
- [ ] Histórico de paletas geradas
- [ ] Integração com APIs de design systems

---

**Desenvolvido com ❤️ por [Thiago Macêdo](https://thiagomacedo.com.br)** 