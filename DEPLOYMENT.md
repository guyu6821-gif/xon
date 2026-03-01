# 🚀 Cloudflare Pages Deployment Təlimatları

## 📋 Ön Şərtlər

1. **Cloudflare hesabı**: https://dash.cloudflare.com/sign-up
2. **Cloudflare API Token**: Deploy tab-dan əldə edin

## 🔑 API Token Yaratma

1. Cloudflare Dashboard-a daxil olun
2. **My Profile** > **API Tokens** > **Create Token**
3. **Edit Cloudflare Workers** template-i seçin
4. **Account Resources** > **Include** > **All accounts**
5. **Zone Resources** > **Include** > **All zones**
6. **Create Token** düyməsinə basın
7. Token-i kopyalayıb saxlayın

## 💻 Deploy Addımları

### 1. API Token Konfiqurasiyası

```bash
# Deploy tab-dan API token əldə edin və setup edin
# Sonra aşağıdakı əmrləri icra edin
```

### 2. Wrangler Authentication

```bash
# Sandbox terminalında:
cd /home/user/webapp
wrangler login  # veya API token ilə
```

### 3. Cloudflare Pages Project Yaradın

```bash
# Project yaradın (bir dəfəlik)
npx wrangler pages project create bdu-hesablayici \
  --production-branch main \
  --compatibility-date 2026-03-01
```

### 4. Deploy Edin

```bash
# Build
npm run build

# Deploy
npx wrangler pages deploy dist --project-name bdu-hesablayici
```

## 🌐 Deploy Sonrası

Deploy uğurlu olarsa, aşağıdakı URL-ləri əldə edəcəksiniz:

- **Production**: `https://bdu-hesablayici.pages.dev`
- **Branch**: `https://main.bdu-hesablayici.pages.dev`

## 🔄 Yenidən Deploy

Hər dəfə kod dəyişdikdə:

```bash
cd /home/user/webapp
git add .
git commit -m "Update: [dəyişikliyi qeyd edin]"
git push origin main

# Sonra deploy edin
npm run build
npx wrangler pages deploy dist --project-name bdu-hesablayici
```

## 🐛 Problem Həlli

### Wrangler login işləmirsə:

```bash
# API token ilə manual konfiqurasiya
export CLOUDFLARE_API_TOKEN="your-api-token"
npx wrangler pages deploy dist --project-name bdu-hesablayici
```

### Build xətaları:

```bash
# Node modules təmizləyin və yenidən quraşdırın
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Port məşğul xətası:

```bash
# Port-u təmizləyin
fuser -k 3000/tcp
pm2 delete all
```

## 📱 PWA Test

Deploy olunduqdan sonra:

1. Mobil brauzerinizdə saytı açın
2. "Ana ekrana əlavə et" seçin
3. İnternet bağlantısını kəsin
4. Tətbiqi açın - offline işləməlidir!

## 🔗 Faydalı Linklər

- **Cloudflare Dashboard**: https://dash.cloudflare.com
- **Wrangler Docs**: https://developers.cloudflare.com/workers/wrangler/
- **GitHub Repo**: https://github.com/guyu6821-gif/xon

## 📞 Əlaqə

Problem yaranarsa:
- WhatsApp: +994559406018
- Instagram: @desespere_etoile
