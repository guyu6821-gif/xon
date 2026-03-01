# 🚀 CLOUDFLARE PAGES - MANUAL DEPLOYMENT

## 📋 Addım-addım Təlimat

### 1. Cloudflare Dashboard-a Daxil Olun
- https://dash.cloudflare.com saytına daxil olun
- Hesabınızla login edin

### 2. Pages Bölməsinə Keçin
- Sol menyudan **"Workers & Pages"** seçin
- **"Create application"** düyməsinə basın
- **"Pages"** tab-ını seçin
- **"Upload assets"** düyməsinə basın

### 3. Project Adı Daxil Edin
- Project name: **bdu-hesablayici** (və ya istədiyiniz ad)
- **"Create project"** düyməsinə basın

### 4. Dist Folder-i Yükləyin
- **dist/** qovluğunu seçin və yükləyin
- Və ya dist içindəki bütün faylları ZIP edib yükləyin
- **"Deploy site"** düyməsinə basın

### 5. Deploy Tamamlanır
- 1-2 dəqiqə gözləyin
- Deploy tamamlandıqda URL alacaqsınız:
  - **https://bdu-hesablayici.pages.dev**

## 📦 Dist Folder Harada?

```bash
/home/user/webapp/dist/
```

Bu qovluqdakı bütün faylları yükləyin:
- _worker.js
- _routes.json
- manifest.json
- sw.js
- favicon.ico
- static/ folder (app.js, icons və s.)

## ✅ Deploy Uğurlu Oldumu?

1. Verilən URL-i açın
2. Sayt düzgün işləyir?
3. Offline test edin (interneti söndürüb səhifəni refresh edin)
4. Ana ekrana quraşdıra bilirsiniz

## 🔄 Yenidən Deploy (Update)

Kod dəyişdikdə:

1. Sandbox-da build edin:
   ```bash
   cd /home/user/webapp
   npm run build
   ```

2. Yeni dist/ folder-i yükləyin Cloudflare-ə
   - Dashboard-da layihəni açın
   - **"Create deployment"** basın
   - Yeni dist/ folder-i yükləyin

## 📱 PWA Test

Deploy olduqdan sonra:
1. Mobil brauzerinizdə saytı açın
2. "Ana ekrana əlavə et" seçin
3. İnternet bağlantısını kəsin
4. Tətbiqi açın - offline işləməlidir!

## ❓ Problem Olarsa

- Dist folder-də bütün faylların olduğunu yoxlayın
- _worker.js və _routes.json mütləq olmalıdır
- static/ folder-i də yükləyin

---

**Qeyd**: API token, wrangler və digər CLI alətlərinə ehtiyac yoxdur. Sadəcə dist/ folder-i Cloudflare dashboard-dan yükləyin!
