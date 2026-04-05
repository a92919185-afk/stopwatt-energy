# DEPLOY PARA GITHUB PAGES - PÁGINAS ESTÁTICAS

## FORMA CORRETA (Sem inventar moda)

### 1. Preparar os Arquivos

Apenas os arquivos ESSENCIAIS:

```
pasta-do-site/
├── index.html          ← OBRIGATÓRIO (página principal)
├── styles/
│   ├── tema.css        ← Seu CSS
│   └── theme.css       ← Base CSS (se usar)
└── images/
    └── *.webp          ← Imagens
```

**NÃO adicionar:**
- ❌ README.md
- ❌ vercel.json
- ❌ .gitignore
- ❨ Qualquer outro arquivo desnecessário

### 2. Verificar os Caminhos CSS

Certifique-se que o `<link>` no HTML está correto:

```html
<!-- CORRETO: -->
<link rel="stylesheet" href="./styles/seu-tema.css" />

<!-- ERRADO: -->
<link rel="stylesheet" href="styles/seu-tema.css" />
```

### 3. Se o CSS tem @import

Certifique-se que está correto:

```css
/* CORRETO: */
@import url('./theme.css');

/* ERRADO: */
@import url('theme.css');
```

### 4. Comandos Git (Na pasta do site)

```bash
# Inicializar
git init

# Adicionar APENAS os arquivos essenciais
git add index.html styles/ images/

# Commit
git commit -m "Deploy página estática"

# Adicionar remote
git remote add origin https://github.com/USUARIO/REPOSITORIO.git

# Push
git branch -M main
git push -u origin main
```

### 5. Ativar GitHub Pages

1. Ir em: `https://github.com/USUARIO/REPOSITORIO/settings/pages`
2. Source: `Deploy from a branch`
3. Branch: `main`
4. Folder: `/ (root)`
5. Save

### 6. URL do Site

`https://USUARIO.github.io/REPOSITORIO/`

---

## ERROS QUE COMETI E COMO EVITAR

### Erro 1: Diretório Git Incorreto

**O que aconteceu:**
```bash
cd output/model-a/us-stopwatt && git init
# Depois tentei:
git push origin main  # ERRO: not a git repository
```

**Por que ocorreu:**
O comando `cd` em uma chamada separada do `bash` muda o diretório temporariamente. Nos comandos seguintes, o diretório de trabalho voltou para a raiz.

**Solução CORRETA:**
```bash
# Opção 1: Usar GIT_DIR e GIT_WORK_TREE
GIT_DIR=output/model-a/us-stopwatt/.git GIT_WORK_TREE=output/model-a/us-stopwatt git push origin main

# Opção 2: Usar -C
git -C output/model-a/us-stopwatt push origin main
```

### Erro 2: Adicionar Arquivos Desnecessários

**O que adicionei:**
- README.md
- vercel.json
- .gitignore

**Por que foi errado:**
Para deploy no GitHub Pages de páginas estáticas, só precisamos:
- index.html
- styles/
- images/

**Lição:**
O usuário pediu "só subir o básico". Eu adicionei extras que complicaram sem necessidade.

### Erro 3: Caminho do CSS sem `./`

**O que estava:**
```html
<link rel="stylesheet" href="styles/stopwatt.css" />
```

**O correto:**
```html
<link rel="stylesheet" href="./styles/stopwatt.css" />
```

**Por que:**
O `./` garante que o caminho é relativo ao diretório atual, não ao domínio.

### Erro 4: CSS @import sem caminho relativo

**O que estava:**
```css
@import url('theme.css');
```

**O correto:**
```css
@import url('./theme.css');
```

---

## FLUXO SIMPLIFICADO

```
1. Gerar página → node generator.js SLUG
2. Verificar arquivos → index.html + styles/ + images/ (SÓ ISSO)
3. Inicializar git → git init (na pasta correta!)
4. Adicionar arquivos → git add index.html styles/ images/
5. Commit → git commit -m "Deploy"
6. Remote → git remote add origin URL
7. Push → git push -u origin main
8. Ativar Pages → Settings > Pages > main > root > Save
```

---

## CHECKLIST ANTES DO DEPLOY

- [ ] index.html existe na raiz
- [ ] styles/ pasta existe com CSS
- [ ] images/ pasta existe (se tiver imagens)
- [ ] Caminho do CSS: `href="./styles/xxx.css"`
- [ ] Se tiver @import no CSS: `url('./xxx.css')`
- [ ] Nenhum arquivo extra (README, vercel.json, etc)
- [ ] GitHub Pages ativado nas configurações
