import { Hono } from 'hono'
import { serveStatic } from 'hono/cloudflare-workers'

const app = new Hono()

// Serve static files
app.use('/static/*', serveStatic({ root: './' }))
app.use('/manifest.json', serveStatic({ path: './manifest.json' }))
app.use('/sw.js', serveStatic({ path: './sw.js' }))

// Main page
app.get('/', (c) => {
  return c.html(`
<!DOCTYPE html>
<html lang="az">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <meta name="theme-color" content="#1e293b">
    <meta name="description" content="BDU Akademik Hesablayıcı - Semestr, ÜOMG, Yaş və İmtahan Hesablama">
    <title>BDU Akademik Hesablayıcı</title>
    
    <!-- PWA -->
    <link rel="manifest" href="/manifest.json">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
    <meta name="apple-mobile-web-app-title" content="BDU Hesablayıcı">
    
    <!-- TailwindCSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    
    <!-- Font Awesome -->
    <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
    
    <style>
        * {
            -webkit-tap-highlight-color: transparent;
        }
        
        body {
            overscroll-behavior: none;
            touch-action: pan-y;
        }
        
        .calculator-card {
            transition: all 0.3s ease;
        }
        
        .calculator-card:active {
            transform: scale(0.98);
        }
        
        .info-popup {
            animation: fadeIn 0.3s ease;
        }
        
        @keyframes fadeIn {
            from { opacity: 0; transform: scale(0.9); }
            to { opacity: 1; transform: scale(1); }
        }
        
        .whatsapp-banner {
            background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
            animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.02); }
        }
        
        .result-animation {
            animation: slideUp 0.5s ease;
        }
        
        @keyframes slideUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        input[type="number"]::-webkit-inner-spin-button,
        input[type="number"]::-webkit-outer-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }
        
        input[type="number"] {
            -moz-appearance: textfield;
        }
    </style>
</head>
<body class="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 min-h-screen text-white">
    
    <!-- WhatsApp Banner -->
    <div class="whatsapp-banner fixed top-0 left-0 right-0 z-50 py-2 px-4 flex items-center justify-center gap-3 shadow-lg cursor-pointer" onclick="openWhatsApp()">
        <i class="fab fa-whatsapp text-2xl"></i>
        <span class="font-semibold text-sm">Ən ucuz sərbəst iş hazırlanması</span>
        <i class="fas fa-chevron-right text-sm"></i>
    </div>

    <!-- Main Container -->
    <div id="app" class="pt-16 pb-8 px-4 max-w-md mx-auto">
        
        <!-- Home View -->
        <div id="homeView" class="space-y-6">
            <div class="text-center mb-8">
                <h1 class="text-3xl font-bold mb-2">🎓 BDU Hesablayıcı</h1>
                <p class="text-slate-300 text-sm">Akademik Köməkçi Sistem</p>
            </div>

            <!-- Calculator Cards -->
            <div class="space-y-4">
                
                <!-- Semestr Calculator -->
                <div onclick="showView('semestrView')" class="calculator-card bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-6 shadow-lg cursor-pointer hover:shadow-xl">
                    <div class="flex items-center gap-4">
                        <div class="bg-white/20 p-4 rounded-xl">
                            <i class="fas fa-calculator text-3xl"></i>
                        </div>
                        <div class="flex-1">
                            <h2 class="text-xl font-bold">Semestr Bal Hesablama</h2>
                            <p class="text-blue-100 text-sm">Seminar, Kollekvium, Davamiyyət</p>
                        </div>
                        <i class="fas fa-chevron-right text-xl"></i>
                    </div>
                </div>

                <!-- ÜOMG Calculator -->
                <div onclick="showView('uomgView')" class="calculator-card bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl p-6 shadow-lg cursor-pointer hover:shadow-xl">
                    <div class="flex items-center gap-4">
                        <div class="bg-white/20 p-4 rounded-xl">
                            <i class="fas fa-graduation-cap text-3xl"></i>
                        </div>
                        <div class="flex-1">
                            <h2 class="text-xl font-bold">ÜOMG Hesablama</h2>
                            <p class="text-purple-100 text-sm">Orta Müvəffəqiyyət Göstəricisi</p>
                        </div>
                        <i class="fas fa-chevron-right text-xl"></i>
                    </div>
                </div>

                <!-- Exam Fee Calculator -->
                <div onclick="showView('examFeeView')" class="calculator-card bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-6 shadow-lg cursor-pointer hover:shadow-xl">
                    <div class="flex items-center gap-4">
                        <div class="bg-white/20 p-4 rounded-xl">
                            <i class="fas fa-money-bill-wave text-3xl"></i>
                        </div>
                        <div class="flex-1">
                            <h2 class="text-xl font-bold">25% İmtahan Pulu</h2>
                            <p class="text-red-100 text-sm">Kəsr Pulu Hesablama</p>
                        </div>
                        <i class="fas fa-chevron-right text-xl"></i>
                    </div>
                </div>

                <!-- Age Calculator -->
                <div onclick="showView('ageView')" class="calculator-card bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-6 shadow-lg cursor-pointer hover:shadow-xl">
                    <div class="flex items-center gap-4">
                        <div class="bg-white/20 p-4 rounded-xl">
                            <i class="fas fa-birthday-cake text-3xl"></i>
                        </div>
                        <div class="flex-1">
                            <h2 class="text-xl font-bold">Yaş Hesablayıcı</h2>
                            <p class="text-green-100 text-sm">Doğum Tarixi Hesablama</p>
                        </div>
                        <i class="fas fa-chevron-right text-xl"></i>
                    </div>
                </div>

                <!-- Dictionary -->
                <div onclick="showView('dictionaryView')" class="calculator-card bg-gradient-to-r from-yellow-600 to-yellow-700 rounded-2xl p-6 shadow-lg cursor-pointer hover:shadow-xl">
                    <div class="flex items-center gap-4">
                        <div class="bg-white/20 p-4 rounded-xl">
                            <i class="fas fa-book text-3xl"></i>
                        </div>
                        <div class="flex-1">
                            <h2 class="text-xl font-bold">Lüğət</h2>
                            <p class="text-yellow-100 text-sm">Akademik Terminlər</p>
                        </div>
                        <i class="fas fa-chevron-right text-xl"></i>
                    </div>
                </div>

                <!-- Information -->
                <div onclick="showView('infoSectionView')" class="calculator-card bg-gradient-to-r from-cyan-600 to-cyan-700 rounded-2xl p-6 shadow-lg cursor-pointer hover:shadow-xl">
                    <div class="flex items-center gap-4">
                        <div class="bg-white/20 p-4 rounded-xl">
                            <i class="fas fa-info-circle text-3xl"></i>
                        </div>
                        <div class="flex-1">
                            <h2 class="text-xl font-bold">Məlumat</h2>
                            <p class="text-cyan-100 text-sm">Faydalı Məlumatlar</p>
                        </div>
                        <i class="fas fa-chevron-right text-xl"></i>
                    </div>
                </div>

                <!-- Quick Links -->
                <div onclick="showView('linksView')" class="calculator-card bg-gradient-to-r from-pink-600 to-pink-700 rounded-2xl p-6 shadow-lg cursor-pointer hover:shadow-xl">
                    <div class="flex items-center gap-4">
                        <div class="bg-white/20 p-4 rounded-xl">
                            <i class="fas fa-link text-3xl"></i>
                        </div>
                        <div class="flex-1">
                            <h2 class="text-xl font-bold">Sürətli Linklər</h2>
                            <p class="text-pink-100 text-sm">BDU & Sosial Şəbəkələr</p>
                        </div>
                        <i class="fas fa-chevron-right text-xl"></i>
                    </div>
                </div>

            </div>
        </div>

        <!-- Semestr Calculator View -->
        <div id="semestrView" class="hidden">
            <button onclick="showView('homeView')" class="mb-6 flex items-center gap-2 text-white hover:text-blue-300">
                <i class="fas fa-arrow-left"></i> Geri
            </button>
            
            <h2 class="text-2xl font-bold mb-6">📊 Semestr Bal Hesablama</h2>
            
            <div class="space-y-4">
                <!-- Seminar Section -->
                <div class="bg-white/10 rounded-xl p-4">
                    <label class="block font-semibold mb-2">Seminar Say (maks: 9)</label>
                    <input type="number" id="seminarCount" min="0" max="9" class="w-full bg-white/20 rounded-lg px-4 py-2 mb-3" placeholder="0-9">
                    <div id="seminarGrades" class="space-y-2"></div>
                </div>

                <!-- Kollekvium Section -->
                <div class="bg-white/10 rounded-xl p-4">
                    <label class="block font-semibold mb-2">Kollekvium Say (maks: 4)</label>
                    <input type="number" id="kollekviumCount" min="0" max="4" class="w-full bg-white/20 rounded-lg px-4 py-2 mb-3" placeholder="0-4">
                    <div id="kollekviumGrades" class="space-y-2"></div>
                </div>

                <!-- Sərbəst İş -->
                <div class="bg-white/10 rounded-xl p-4">
                    <label class="block font-semibold mb-2">Sərbəst İş Balı (0-10)</label>
                    <input type="number" id="serbestBal" min="0" max="10" step="0.1" class="w-full bg-white/20 rounded-lg px-4 py-2" placeholder="0-10">
                </div>

                <!-- Davamiyyət -->
                <div class="bg-white/10 rounded-xl p-4">
                    <label class="block font-semibold mb-2">Dərs Saatı</label>
                    <select id="dersSaat" class="w-full bg-white/20 rounded-lg px-4 py-2 mb-3 text-white">
                        <option value="">Seçin</option>
                        <option value="30">30 saat</option>
                        <option value="45">45 saat</option>
                        <option value="60">60 saat</option>
                        <option value="75">75 saat</option>
                        <option value="90">90 saat</option>
                        <option value="105">105 saat</option>
                    </select>
                    <label class="block font-semibold mb-2">Qayıb Sayı</label>
                    <input type="number" id="qayibSay" min="0" class="w-full bg-white/20 rounded-lg px-4 py-2" placeholder="0">
                </div>

                <button onclick="calculateSemestr()" class="w-full bg-gradient-to-r from-blue-600 to-blue-700 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl">
                    <i class="fas fa-calculator mr-2"></i> Hesabla
                </button>

                <div id="semestrResult" class="hidden result-animation"></div>
            </div>
        </div>

        <!-- ÜOMG Calculator View -->
        <div id="uomgView" class="hidden">
            <button onclick="showView('homeView')" class="mb-6 flex items-center gap-2 text-white hover:text-purple-300">
                <i class="fas fa-arrow-left"></i> Geri
            </button>
            
            <h2 class="text-2xl font-bold mb-6">🎓 ÜOMG Hesablama</h2>
            
            <div class="space-y-4">
                <div class="bg-white/10 rounded-xl p-4">
                    <label class="block font-semibold mb-2">Fənn Sayı</label>
                    <input type="number" id="fennCount" min="1" class="w-full bg-white/20 rounded-lg px-4 py-2" placeholder="Fənn sayı">
                    <button onclick="generateUomgFields()" class="w-full mt-3 bg-purple-600 py-2 rounded-lg">
                        <i class="fas fa-plus mr-2"></i> Sahələr Yarat
                    </button>
                </div>
                
                <div id="uomgFields" class="space-y-3"></div>

                <button id="uomgCalcBtn" onclick="calculateUomg()" class="w-full bg-gradient-to-r from-purple-600 to-purple-700 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl hidden">
                    <i class="fas fa-calculator mr-2"></i> Hesabla
                </button>

                <div id="uomgResult" class="hidden result-animation"></div>
            </div>
        </div>

        <!-- Exam Fee Calculator View -->
        <div id="examFeeView" class="hidden">
            <button onclick="showView('homeView')" class="mb-6 flex items-center gap-2 text-white hover:text-red-300">
                <i class="fas fa-arrow-left"></i> Geri
            </button>
            
            <h2 class="text-2xl font-bold mb-6">💰 25% İmtahan Pulu</h2>
            
            <div class="space-y-4">
                <div class="bg-white/10 rounded-xl p-4">
                    <label class="block font-semibold mb-2">İllik Ödəniş (₼)</label>
                    <input type="number" id="illikOdenis" min="0" class="w-full bg-white/20 rounded-lg px-4 py-2" placeholder="İllik ödəniş məbləği">
                </div>

                <div class="bg-white/10 rounded-xl p-4">
                    <label class="block font-semibold mb-2">Fənnin Kredit Sayı</label>
                    <input type="number" id="fennKredit" min="1" class="w-full bg-white/20 rounded-lg px-4 py-2" placeholder="Kredit sayı">
                </div>

                <button onclick="calculateExamFee()" class="w-full bg-gradient-to-r from-red-600 to-red-700 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl">
                    <i class="fas fa-calculator mr-2"></i> Hesabla
                </button>

                <div id="examFeeResult" class="hidden result-animation"></div>
            </div>
        </div>

        <!-- Age Calculator View -->
        <div id="ageView" class="hidden">
            <button onclick="showView('homeView')" class="mb-6 flex items-center gap-2 text-white hover:text-green-300">
                <i class="fas fa-arrow-left"></i> Geri
            </button>
            
            <h2 class="text-2xl font-bold mb-6">🎂 Yaş Hesablayıcı</h2>
            
            <div class="space-y-4">
                <div class="bg-white/10 rounded-xl p-4">
                    <label class="block font-semibold mb-2">Doğum Tarixi</label>
                    <input type="date" id="birthDate" class="w-full bg-white/20 rounded-lg px-4 py-2 text-white" max="${new Date().toISOString().split('T')[0]}">
                </div>

                <button onclick="calculateAge()" class="w-full bg-gradient-to-r from-green-600 to-green-700 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl">
                    <i class="fas fa-calculator mr-2"></i> Hesabla
                </button>

                <div id="ageResult" class="hidden result-animation"></div>
            </div>
        </div>

        <!-- Dictionary View -->
        <div id="dictionaryView" class="hidden">
            <button onclick="showView('homeView')" class="mb-6 flex items-center gap-2 text-white hover:text-yellow-300">
                <i class="fas fa-arrow-left"></i> Geri
            </button>
            
            <h2 class="text-2xl font-bold mb-6">📖 Lüğət</h2>
            
            <div class="space-y-3">
                <div class="bg-white/10 rounded-xl p-4">
                    <h3 class="font-bold text-yellow-300">Mühazirə</h3>
                    <p class="text-sm text-slate-200">Müəllimin keçdiyi dərs</p>
                </div>
            </div>
        </div>

        <!-- Information View -->
        <div id="infoSectionView" class="hidden">
            <button onclick="showView('homeView')" class="mb-6 flex items-center gap-2 text-white hover:text-cyan-300">
                <i class="fas fa-arrow-left"></i> Geri
            </button>
            
            <h2 class="text-2xl font-bold mb-6">ℹ️ Məlumat</h2>
            
            <div class="space-y-3">
                <div class="bg-white/10 rounded-xl p-4">
                    <h3 class="font-bold text-cyan-300">Əlaçı olmaq</h3>
                    <p class="text-sm text-slate-200">Əlaçı olmaq üçün bütün fənnlər 91+ olmalıdır</p>
                </div>
            </div>
        </div>

        <!-- Links View -->
        <div id="linksView" class="hidden">
            <button onclick="showView('homeView')" class="mb-6 flex items-center gap-2 text-white hover:text-pink-300">
                <i class="fas fa-arrow-left"></i> Geri
            </button>
            
            <h2 class="text-2xl font-bold mb-6">🔗 Sürətli Linklər</h2>
            
            <div class="space-y-3">
                <a href="https://bdu.edu.az" target="_blank" class="block bg-white/10 rounded-xl p-4 hover:bg-white/20">
                    <div class="flex items-center gap-3">
                        <i class="fas fa-university text-2xl text-blue-400"></i>
                        <div>
                            <h3 class="font-bold">BDU Rəsmi Sayt</h3>
                            <p class="text-xs text-slate-300">bdu.edu.az</p>
                        </div>
                    </div>
                </a>

                <a href="https://semslogin.bdu.edu.az" target="_blank" class="block bg-white/10 rounded-xl p-4 hover:bg-white/20">
                    <div class="flex items-center gap-3">
                        <i class="fas fa-sign-in-alt text-2xl text-green-400"></i>
                        <div>
                            <h3 class="font-bold">SemsLogin</h3>
                            <p class="text-xs text-slate-300">Akademik Portal</p>
                        </div>
                    </div>
                </a>

                <a href="https://whatsapp.com/channel/0029Va85Ls85q08WyYoGeJ3r" target="_blank" class="block bg-white/10 rounded-xl p-4 hover:bg-white/20">
                    <div class="flex items-center gap-3">
                        <i class="fab fa-whatsapp text-2xl text-green-500"></i>
                        <div>
                            <h3 class="font-bold">BDU WhatsApp Kanal</h3>
                            <p class="text-xs text-slate-300">Xəbərlər və Elanlar</p>
                        </div>
                    </div>
                </a>

                <a href="https://www.instagram.com/bdu_eduaz" target="_blank" class="block bg-white/10 rounded-xl p-4 hover:bg-white/20">
                    <div class="flex items-center gap-3">
                        <i class="fab fa-instagram text-2xl text-pink-500"></i>
                        <div>
                            <h3 class="font-bold">BDU Instagram</h3>
                            <p class="text-xs text-slate-300">@bdu_eduaz</p>
                        </div>
                    </div>
                </a>

                <a href="https://t.me/bdu_eduaz" target="_blank" class="block bg-white/10 rounded-xl p-4 hover:bg-white/20">
                    <div class="flex items-center gap-3">
                        <i class="fab fa-telegram text-2xl text-blue-500"></i>
                        <div>
                            <h3 class="font-bold">BDU Telegram</h3>
                            <p class="text-xs text-slate-300">@bdu_eduaz</p>
                        </div>
                    </div>
                </a>

                <a href="https://www.instagram.com/desespere_etoile" target="_blank" class="block bg-white/10 rounded-xl p-4 hover:bg-white/20">
                    <div class="flex items-center gap-3">
                        <i class="fab fa-instagram text-2xl text-purple-500"></i>
                        <div>
                            <h3 class="font-bold">Sayt Sahibi</h3>
                            <p class="text-xs text-slate-300">@desespere_etoile</p>
                        </div>
                    </div>
                </a>

                <a href="https://t.me/+WUKxtnDjo2E5YTcy" target="_blank" class="block bg-white/10 rounded-xl p-4 hover:bg-white/20">
                    <div class="flex items-center gap-3">
                        <i class="fab fa-telegram text-2xl text-cyan-500"></i>
                        <div>
                            <h3 class="font-bold">Tələbə Chat Qrupu</h3>
                            <p class="text-xs text-slate-300">Sosiallaşma</p>
                        </div>
                    </div>
                </a>
            </div>
        </div>

    </div>

    <!-- Info Button -->
    <div id="infoBtn" class="fixed bottom-6 right-6 bg-blue-600 w-14 h-14 rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:bg-blue-700" onclick="showInfoPopup()">
        <i class="fas fa-info text-2xl"></i>
    </div>

    <!-- Info Popup -->
    <div id="infoPopup" class="hidden fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4" onclick="hideInfoPopup()">
        <div class="info-popup bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 max-w-sm text-center" onclick="event.stopPropagation()">
            <div class="text-6xl mb-4">✨</div>
            <p class="text-xl font-bold">O, boşluq yaradır.</p>
            <button onclick="hideInfoPopup()" class="mt-6 bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold">
                Başa düşdüm
            </button>
        </div>
    </div>

    <script src="/static/app.js"></script>
</body>
</html>
  `)
})

export default app
