// Sistema de notificações
function showToast(message, isError = false) {
  const toast = document.getElementById('toastNotification');
  toast.textContent = message;
  toast.className = `toast-notification ${isError ? 'error' : ''}`;
  
  setTimeout(() => {
    toast.classList.add('show');
  }, 100);
  
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

// Copiar cor em múltiplos formatos
function copyColor(color, format = 'hex') {
  let textToCopy = color;
  let message = `Cor ${color} copiada!`;
  
  if (format === 'rgb') {
    const rgb = hexToRgb(color);
    textToCopy = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
    message = `RGB ${textToCopy} copiado!`;
  } else if (format === 'hsl') {
    const rgb = hexToRgb(color);
    const hsl = rgbToHsl(rgb[0], rgb[1], rgb[2]);
    textToCopy = `hsl(${Math.round(hsl[0])}, ${Math.round(hsl[1])}%, ${Math.round(hsl[2])}%)`;
    message = `HSL ${textToCopy} copiado!`;
  }
  
  navigator.clipboard.writeText(textToCopy).then(() => {
    showToast(message);
  }).catch(() => {
    showToast('Erro ao copiar cor', true);
  });
}

// Calcular contraste WCAG
function calculateContrast(color1, color2) {
  const getLuminance = (color) => {
    const rgb = hexToRgb(color);
    const [r, g, b] = rgb.map(c => {
      c = c / 255;
      return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  };

  const l1 = getLuminance(color1);
  const l2 = getLuminance(color2);
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  
  return (lighter + 0.05) / (darker + 0.05);
}

// Verificar acessibilidade
function getAccessibilityInfo(color) {
  const contrastWithWhite = calculateContrast(color, '#ffffff');
  const contrastWithBlack = calculateContrast(color, '#000000');
  
  let bestTextColor = '#000000';
  let contrast = contrastWithBlack;
  
  if (contrastWithWhite > contrastWithBlack) {
    bestTextColor = '#ffffff';
    contrast = contrastWithWhite;
  }
  
  let accessibility = 'Baixo';
  if (contrast >= 7) accessibility = 'Excelente';
  else if (contrast >= 4.5) accessibility = 'Bom';
  else if (contrast >= 3) accessibility = 'Aceitável';
  
  return { bestTextColor, contrast: contrast.toFixed(2), accessibility };
}

// Exportar paleta completa
function exportPalette() {
  const paletteContainer = document.getElementById('paletteContainer');
  const colorBoxes = paletteContainer.querySelectorAll('.color-box');
  
  let paletteText = 'PALETA DE CORES PROFISSIONAL\n';
  paletteText += '='.repeat(50) + '\n\n';
  
  colorBoxes.forEach(box => {
    const color = box.textContent;
    const description = box.nextElementSibling.textContent;
    const accessibility = getAccessibilityInfo(color);
    paletteText += `${color} - ${description}\n`;
    paletteText += `   Contraste: ${accessibility.contrast} (${accessibility.accessibility})\n`;
    paletteText += `   Texto ideal: ${accessibility.bestTextColor}\n\n`;
  });
  
  // Criar arquivo para download
  const blob = new Blob([paletteText], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'paleta_cores_profissional.txt';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  
  showToast('Paleta exportada com sucesso!');
}

// Conversões de cor
function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? [
    parseInt(result[1], 16),
    parseInt(result[2], 16),
    parseInt(result[3], 16)
  ] : null;
}

function rgbToHsl(r, g, b) {
  r /= 255;
  g /= 255;
  b /= 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;

  if (max === min) {
    h = s = 0;
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }

  return [h * 360, s * 100, l * 100];
}

function hslToRgb(h, s, l) {
  h /= 360;
  s /= 100;
  l /= 100;

  const hue2rgb = (p, q, t) => {
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    if (t < 1/6) return p + (q - p) * 6 * t;
    if (t < 1/2) return q;
    if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
    return p;
  };

  let r, g, b;

  if (s === 0) {
    r = g = b = l;
  } else {
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1/3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1/3);
  }

  return [
    Math.round(r * 255),
    Math.round(g * 255),
    Math.round(b * 255)
  ];
}

function rgbToHex(r, g, b) {
  return "#" + [r, g, b].map(x => {
    const hex = x.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  }).join("");
}

// Gerar cor com HSL otimizado
function generateOptimizedColor(h, s, l) {
  const rgb = hslToRgb(h, s, l);
  return rgbToHex(rgb[0], rgb[1], rgb[2]);
}

// Cores de feedback fixas e universalmente reconhecidas
const FEEDBACK_COLORS = {
  success: '#16a34a',    // Verde seguro - confirmações, sucessos
  error: '#dc2626',      // Vermelho confiável - erros críticos
  warning: '#eab308',    // Amarelo/laranja - alertas, avisos
  info: '#3b82f6'        // Azul informativo - informações neutras
};

// Descrições funcionais e objetivas
const COLOR_DESCRIPTIONS = {
  // Principais
  primary: 'Ações primárias, botões principais, links ativos',
  primaryLight: 'Estados hover, destaques suaves, backgrounds secundários',
  primaryDark: 'Estados ativos/pressed, overlays, headers',
  
  // Feedback (cores fixas)
  success: 'Confirmações, notificações positivas, status de sucesso',
  error: 'Erros críticos, validações negativas, alertas de falha',
  warning: 'Avisos importantes, alertas não-críticos, atenção',
  info: 'Informações contextuais, tooltips, mensagens neutras',
  
  // Harmônicos (nomes funcionais)
  analogous1: 'Elementos secundários, ícones de apoio, gráficos',
  analogous2: 'Diferenciação sutil, bordas especiais, micro-interações',
  triadic1: 'Acentos visuais, elementos distintivos, CTAs secundários',
  triadic2: 'Variações temáticas, categorização, elementos decorativos',
  complementary: 'Contraste máximo, elementos opostos, destaque extremo',
  
  // Neutros
  white: 'Fundo principal, cards, áreas de conteúdo',
  gray100: 'Backgrounds alternativos, superfícies secundárias',
  gray200: 'Bordas suaves, divisores sutis',
  gray300: 'Divisores padrão, bordas de campos',
  gray400: 'Bordas destacadas, elementos desabilitados',
  gray500: 'Textos secundários, legendas, metadados',
  gray600: 'Ícones padrão, textos terciários',
  gray700: 'Textos de apoio, labels',
  gray800: 'Textos principais, conteúdo primário',
  gray900: 'Títulos, cabeçalhos, textos importantes',
  black: 'Textos de máximo contraste, elementos críticos'
};

// Harmônicos melhorados com controle perceptual
function generateImprovedHarmonics(primaryHsl) {
  const [h, s, l] = primaryHsl;
  
  return {
    // Análogos: ±25° no matiz, ajustes sutis em S/L para harmonia
    analogous1: generateOptimizedColor(
      (h - 25 + 360) % 360,
      Math.min(100, s + 8),
      Math.max(0, l - 3)
    ),
    analogous2: generateOptimizedColor(
      (h + 25) % 360,
      Math.min(100, s + 8),
      Math.max(0, l - 3)
    ),
    
    // Triádicos: ±120°, reduz saturação para evitar conflitos
    triadic1: generateOptimizedColor(
      (h + 120) % 360,
      Math.max(0, s - 10),
      Math.max(0, l - 5)
    ),
    triadic2: generateOptimizedColor(
      (h + 240) % 360,
      Math.max(0, s - 10),
      Math.max(0, l - 5)
    ),
    
    // Complementar: 180°, reduz saturação para suavizar contraste
    complementary: generateOptimizedColor(
      (h + 180) % 360,
      Math.max(0, s - 15),
      Math.max(0, l - 8)
    )
  };
}

// Escala de neutros inteligente com temperatura sutil da cor primária
function generateIntelligentNeutrals(primaryHsl) {
  const [h, s, l] = primaryHsl;
  
  const neutralDefinitions = [
    { key: 'white', lightness: 100, saturation: 0 },
    { key: 'gray100', lightness: 96, saturation: 0 },
    { key: 'gray200', lightness: 93, saturation: 0 },
    { key: 'gray300', lightness: 88, saturation: 0 },
    { key: 'gray400', lightness: 74, saturation: 0 },
    { key: 'gray500', lightness: 62, saturation: 0 },
    { key: 'gray600', lightness: 46, saturation: 0 },
    { key: 'gray700', lightness: 38, saturation: 0 },
    { key: 'gray800', lightness: 26, saturation: 0 },
    { key: 'gray900', lightness: 13, saturation: 0 },
    { key: 'black', lightness: 0, saturation: 0 }
  ];
  
  const neutrals = {};
  
  neutralDefinitions.forEach(neutral => {
    if (neutral.lightness > 10 && neutral.lightness < 90) {
      // Para tons médios, adicionar temperatura sutil da cor primária
      neutrals[neutral.key] = generateOptimizedColor(
        h, // Usar matiz da primária para dar temperatura
        Math.min(8, s * 0.1), // Saturação muito baixa
        neutral.lightness
      );
    } else {
      // Branco e preto puros
      neutrals[neutral.key] = generateOptimizedColor(0, 0, neutral.lightness);
    }
  });
  
  return neutrals;
}

// Sistema de cores profissional refatorado
function generateProfessionalPalette(primaryColor) {
  const rgb = hexToRgb(primaryColor);
  const primaryHsl = rgbToHsl(rgb[0], rgb[1], rgb[2]);
  const [h, s, l] = primaryHsl;

  // 1. Cores principais com variações controladas
  const primaryColors = {
    primary: primaryColor,
    primaryLight: generateOptimizedColor(
      h,
      Math.max(0, s - 25), // Reduz saturação significativamente
      Math.min(100, l + 28) // Aumenta luminância
    ),
    primaryDark: generateOptimizedColor(
      h,
      Math.min(100, s + 8), // Leve aumento na saturação
      Math.max(0, l - 28)   // Reduz luminância
    )
  };

  // 2. Cores de feedback FIXAS (não derivadas da primária)
  const feedbackColors = FEEDBACK_COLORS;

  // 3. Harmônicos melhorados
  const harmonicColors = generateImprovedHarmonics(primaryHsl);

  // 4. Neutros inteligentes
  const neutralColors = generateIntelligentNeutrals(primaryHsl);

  return {
    ...primaryColors,
    ...feedbackColors,
    ...harmonicColors,
    ...neutralColors
  };
}

function generatePalette() {
  const primaryColor = document.getElementById('colorInput').value.trim();
  if (!primaryColor || !/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(primaryColor)) {
    showToast('Por favor, insira uma cor válida no formato hexadecimal', true);
    return;
  }

  const palette = generateProfessionalPalette(primaryColor);
  const paletteContainer = document.getElementById('paletteContainer');
  paletteContainer.innerHTML = '';

  // 1. CORES PRINCIPAIS
  addColorBox(paletteContainer, palette.primary, COLOR_DESCRIPTIONS.primary);
  addColorBox(paletteContainer, palette.primaryLight, COLOR_DESCRIPTIONS.primaryLight);
  addColorBox(paletteContainer, palette.primaryDark, COLOR_DESCRIPTIONS.primaryDark);

  // 2. CORES DE FEEDBACK (fixas e universalmente reconhecidas)
  addColorBox(paletteContainer, palette.success, COLOR_DESCRIPTIONS.success);
  addColorBox(paletteContainer, palette.error, COLOR_DESCRIPTIONS.error);
  addColorBox(paletteContainer, palette.warning, COLOR_DESCRIPTIONS.warning);
  addColorBox(paletteContainer, palette.info, COLOR_DESCRIPTIONS.info);

  // 3. CORES DE HARMONIA (melhoradas e funcionais)
  addColorBox(paletteContainer, palette.analogous1, COLOR_DESCRIPTIONS.analogous1);
  addColorBox(paletteContainer, palette.analogous2, COLOR_DESCRIPTIONS.analogous2);
  addColorBox(paletteContainer, palette.triadic1, COLOR_DESCRIPTIONS.triadic1);
  addColorBox(paletteContainer, palette.triadic2, COLOR_DESCRIPTIONS.triadic2);
  addColorBox(paletteContainer, palette.complementary, COLOR_DESCRIPTIONS.complementary);

  // 4. CORES NEUTRAS (inteligentes com temperatura sutil)
  addColorBox(paletteContainer, palette.white, COLOR_DESCRIPTIONS.white);
  addColorBox(paletteContainer, palette.gray100, COLOR_DESCRIPTIONS.gray100);
  addColorBox(paletteContainer, palette.gray200, COLOR_DESCRIPTIONS.gray200);
  addColorBox(paletteContainer, palette.gray300, COLOR_DESCRIPTIONS.gray300);
  addColorBox(paletteContainer, palette.gray400, COLOR_DESCRIPTIONS.gray400);
  addColorBox(paletteContainer, palette.gray500, COLOR_DESCRIPTIONS.gray500);
  addColorBox(paletteContainer, palette.gray600, COLOR_DESCRIPTIONS.gray600);
  addColorBox(paletteContainer, palette.gray700, COLOR_DESCRIPTIONS.gray700);
  addColorBox(paletteContainer, palette.gray800, COLOR_DESCRIPTIONS.gray800);
  addColorBox(paletteContainer, palette.gray900, COLOR_DESCRIPTIONS.gray900);
  addColorBox(paletteContainer, palette.black, COLOR_DESCRIPTIONS.black);
}

function addColorBox(container, color, description) {
  const colorItem = document.createElement('div');
  colorItem.className = 'color-item';
  
  // Aplicar a cor como background do card com transparência
  colorItem.style.backgroundColor = color + '15'; // Adiciona 15% de opacidade (hex)
  colorItem.style.borderColor = color + '30'; // Borda com 30% de opacidade

  const colorBox = document.createElement('div');
  colorBox.className = 'color-box';
  colorBox.style.backgroundColor = color;
  colorBox.style.borderColor = color + '80'; // Borda com 50% de opacidade
  colorBox.textContent = color;
  
  // Adicionar efeito de clique
  colorBox.onclick = () => {
    colorBox.classList.add('clicked');
    setTimeout(() => colorBox.classList.remove('clicked'), 200);
    copyColor(color);
  };

  const desc = document.createElement('span');
  desc.className = 'description';
  desc.textContent = description;

  // Informações de acessibilidade
  const accessibility = getAccessibilityInfo(color);
  const accessibilityInfo = document.createElement('div');
  accessibilityInfo.className = 'accessibility-info';
  accessibilityInfo.innerHTML = `
    <small>Contraste: ${accessibility.contrast} (${accessibility.accessibility})</small>
    <div class="format-buttons">
      <button onclick="copyColor('${color}', 'hex')" class="format-btn">HEX</button>
      <button onclick="copyColor('${color}', 'rgb')" class="format-btn">RGB</button>
      <button onclick="copyColor('${color}', 'hsl')" class="format-btn">HSL</button>
    </div>
  `;

  colorItem.appendChild(colorBox);
  colorItem.appendChild(desc);
  colorItem.appendChild(accessibilityInfo);
  container.appendChild(colorItem);
}

// Inicializar quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
  generatePalette();
  
  // Adicionar listener para mudanças em tempo real
  const colorInput = document.getElementById('colorInput');
  colorInput.addEventListener('input', function() {
    // Debounce para evitar muitas chamadas
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      generatePalette();
    }, 300);
  });
  
  // Também gerar quando pressionar Enter
  colorInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      generatePalette();
    }
  });
}); 