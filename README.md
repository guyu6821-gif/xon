# 🎓 BDU Akademik Hesablayıcı

Bakı Dövlət Universiteti tələbələri üçün akademik hesablayıcı Progressive Web App (PWA).

## 📱 Xüsusiyyətlər

### ✅ Tamamlanmış Funksiyalar

1. **Semestr Bal Hesablama**
   - Seminar balları (maksimum 9 dəfə, 0-10 arası)
   - Kollekvium balları (maksimum 4 dəfə, 0-10 arası)
   - Sərbəst iş balı (0-10 arası)
   - Davamiyyət hesablama (30/45/60/75/90/105 saat)
   - Düstur: (seminar orta × 0.4 + kollekvium orta × 0.6) × 3 + davamiyyət + sərbəst iş
   - Maksimum: 50 bal

2. **ÜOMG Hesablama**
   - İstənilən sayda fənn əlavə etmə
   - Hər fənn üçün bal (0-100) və kredit daxil etmə
   - Düstur: (bal₁×kredit₁ + bal₂×kredit₂ + ... + balₙ×kreditₙ) / (kredit₁ + kredit₂ + ... + kreditₙ)

3. **25% İmtahan Pulu (Kəsr Pulu)**
   - İllik ödəniş və fənnin kredit sayı daxil etmə
   - Düstur: ((illik ödəniş / 60) × kredit sayı) / 4 + 1
   - Nəticə AZN ilə göstərilir

4. **Yaş Hesablayıcı**
   - Doğum tarixinə əsasən yaş hesablama
   - Yaşadığınız günlərin sayı
   - Növbəti ad gününə qalan günlər

5. **Lüğət**
   - Akademik terminlərin izahı
   - Mühazirə və digər terminlər

6. **Məlumat Bölməsi**
   - Əlaçı olmaq şərtləri (bütün fənnlər 91+)
   - Akademik qaydalar

7. **Sürətli Linklər**
   - BDU rəsmi saytı
   - SemsLogin portal
   - BDU WhatsApp kanal
   - BDU Instagram və Telegram
   - Tələbə chat qrupu
   - Sayt sahibinin Instagram profili

8. **PWA (Progressive Web App)**
   - Telefona quraşdırıla bilir
   - Offline işləyir
   - Ana ekrana əlavə edilə bilər
   - Mobil tətbiq kimi istifadə olunur

9. **WhatsApp İnteqrasiyası**
   - Yuxarıda sabit "Ən ucuz sərbəst iş hazırlanması" banneri
   - Tıklandıqda +994559406018 nömrəsinə WhatsApp ilə mesaj göndərilir

10. **Haqqında Popup**
    - Ana səhifədə (i) düyməsi
    - "O, boşluq yaradır." mesajı
    - Digər bölmələrə keçdikdə gizlənir

## 🚀 URLs

- **Demo (Test)**: https://3000-igf6fxo8a7dc7s08veyzz-c07dda5e.sandbox.novita.ai
- **GitHub**: https://github.com/guyu6821-gif/xon
- **Production**: Cloudflare Pages-ə deploy üçün API key lazımdır (Deploy tab-dan əldə edin)

## 🏗️ Texniki Yığın

- **Backend**: Hono Framework
- **Frontend**: Vanilla JavaScript + TailwindCSS
- **Icons**: Font Awesome 6.4.0
- **Deployment**: Cloudflare Pages
- **PWA**: Service Worker + Web Manifest
- **Process Manager**: PM2

## 📊 Nəticə Qiymətləndirmə Sistemi

- 50+ bal: 🎉 MÜVƏFFƏQİYYƏTLƏ KEÇDİNİZ! ✅
- 45-49 bal: 🔥 ÇOX YAXŞI 📊
- 41-44 bal: 💣 YAXŞI 📈
- 36-40 bal: 🫂 KAFİ 📉
- 26-35 bal: 🎭 ZƏİF 📴
- 0-25 bal: 🗿 YAXŞI OLACAQ 🆒
- 0 bal: ⚠️ 0 BAL ⚠️

## 📱 Quraşdırma

### Ana Ekrana Əlavə Etmə

**iOS (Safari):**
1. Safari-də saytı açın
2. Paylaş düyməsinə basın
3. "Ana Ekrana Əlavə Et" seçin

**Android (Chrome):**
1. Chrome-da saytı açın
2. Menyu düyməsinə basın
3. "Ana ekrana əlavə et" seçin

### Offline İstifadə

Sayt bir dəfə yükləndiyi kimi bütün məlumatları keşə salır və internet olmadan da işləyir.

## 💻 Development

```bash
# Install dependencies
npm install

# Build project
npm run build

# Start development server (sandbox)
npm run dev:sandbox

# Start with PM2
pm2 start ecosystem.config.cjs

# Stop PM2
pm2 delete webapp

# Check logs
pm2 logs webapp --nostream
```

## 📂 Layihə Strukturu

```
webapp/
├── src/
│   └── index.tsx           # Main Hono application
├── public/
│   ├── static/
│   │   ├── app.js         # Frontend JavaScript
│   │   ├── style.css      # Custom styles
│   │   ├── icon-192.png   # PWA icon 192x192
│   │   └── icon-512.png   # PWA icon 512x512
│   ├── manifest.json      # PWA manifest
│   └── sw.js             # Service Worker
├── dist/                  # Build output
├── package.json
├── wrangler.jsonc        # Cloudflare config
├── ecosystem.config.cjs  # PM2 config
└── README.md
```

## 🎯 Davamiyyət Hesablama Qaydaları

### 30 saat
- 1-2 qayıb: 9 bal
- 3 qayıb: 8 bal
- 4+ qayıb: Kəsr

### 45 saat
- 1 qayıb: 10 bal
- 2-3 qayıb: 9 bal
- 4-5 qayıb: 8 bal
- 6+ qayıb: Kəsr

### 60 saat
- 1 qayıb: 10 bal
- 2-4 qayıb: 9 bal
- 5-7 qayıb: 8 bal
- 8+ qayıb: Kəsr

### 75 saat
- 1 qayıb: 10 bal
- 2-5 qayıb: 9 bal
- 6-9 qayıb: 8 bal
- 10+ qayıb: Kəsr

### 90 saat
- 1-2 qayıb: 10 bal
- 3-6 qayıb: 9 bal
- 7-11 qayıb: 8 bal
- 12+ qayıb: Kəsr

### 105 saat
- 1-2 qayıb: 10 bal
- 3-7 qayıb: 9 bal
- 8-13 qayıb: 8 bal
- 14+ qayıb: Kəsr

## 🔗 Əlaqə

- **WhatsApp**: +994559406018 (Sərbəst iş üçün)
- **Instagram**: [@desespere_etoile](https://www.instagram.com/desespere_etoile)
- **Telegram**: [BDU Tələbə Chat Qrupu](https://t.me/+WUKxtnDjo2E5YTcy)

## 📝 Deployment

### Cloudflare Pages

```bash
# Build
npm run build

# Deploy
npm run deploy:prod
```

## 🌟 Xüsusiyyətlər

- ✅ Responsive dizayn (mobil/tablet/desktop)
- ✅ Offline işləyir
- ✅ Ana ekrana quraşdırıla bilir
- ✅ Sürətli və yüngül
- ✅ Azərbaycan dilində
- ✅ Emoji dəstəyi
- ✅ Modern UI/UX

## 📄 Lisenziya

Bu layihə BDU tələbələri üçün pulsuz akademik vasitədir.

---

**Sayt Sahibi**: [@desespere_etoile](https://www.instagram.com/desespere_etoile)  
**Universitet**: Bakı Dövlət Universiteti  
**Son Yeniləmə**: 2026-03-01
