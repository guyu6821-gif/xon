// View Management
function showView(viewId) {
    const views = ['homeView', 'semestrView', 'uomgView', 'examFeeView', 'ageView', 'dictionaryView', 'infoSectionView', 'linksView'];
    
    views.forEach(view => {
        document.getElementById(view).classList.add('hidden');
    });
    
    document.getElementById(viewId).classList.remove('hidden');
    
    // Hide info button when not on home view
    const infoBtn = document.getElementById('infoBtn');
    if (viewId === 'homeView') {
        infoBtn.classList.remove('hidden');
    } else {
        infoBtn.classList.add('hidden');
    }
    
    // Scroll to top
    window.scrollTo(0, 0);
}

// Info Popup
function showInfoPopup() {
    document.getElementById('infoPopup').classList.remove('hidden');
}

function hideInfoPopup() {
    document.getElementById('infoPopup').classList.add('hidden');
}

// WhatsApp
function openWhatsApp() {
    window.open('https://wa.me/994559406018', '_blank');
}

// Semestr Calculator
document.getElementById('seminarCount')?.addEventListener('input', function(e) {
    const count = parseInt(e.target.value) || 0;
    const container = document.getElementById('seminarGrades');
    container.innerHTML = '';
    
    for (let i = 1; i <= Math.min(count, 9); i++) {
        const div = document.createElement('div');
        div.innerHTML = \`
            <label class="text-sm">Seminar \${i} balı (0-10)</label>
            <input type="number" class="seminar-grade w-full bg-white/20 rounded-lg px-3 py-2 mt-1" min="0" max="10" step="0.1" placeholder="0-10">
        \`;
        container.appendChild(div);
    }
});

document.getElementById('kollekviumCount')?.addEventListener('input', function(e) {
    const count = parseInt(e.target.value) || 0;
    const container = document.getElementById('kollekviumGrades');
    container.innerHTML = '';
    
    for (let i = 1; i <= Math.min(count, 4); i++) {
        const div = document.createElement('div');
        div.innerHTML = \`
            <label class="text-sm">Kollekvium \${i} balı (0-10)</label>
            <input type="number" class="kollekvium-grade w-full bg-white/20 rounded-lg px-3 py-2 mt-1" min="0" max="10" step="0.1" placeholder="0-10">
        \`;
        container.appendChild(div);
    }
});

function calculateAttendance(hours, absences) {
    const rules = {
        30: { 1: 9, 2: 9, 3: 8, 4: 0 },
        45: { 1: 10, 2: 9, 3: 9, 4: 8, 5: 8, 6: 0 },
        60: { 1: 10, 2: 9, 3: 9, 4: 9, 5: 8, 6: 8, 7: 8, 8: 0 },
        75: { 1: 10, 2: 9, 3: 9, 4: 9, 5: 9, 6: 8, 7: 8, 8: 8, 9: 8, 10: 0 },
        90: { 1: 10, 2: 10, 3: 9, 4: 9, 5: 9, 6: 9, 7: 8, 8: 8, 9: 8, 10: 8, 11: 8, 12: 0 },
        105: { 1: 10, 2: 10, 3: 9, 4: 9, 5: 9, 6: 9, 7: 9, 8: 8, 9: 8, 10: 8, 11: 8, 12: 8, 13: 8, 14: 0 }
    };
    
    const rule = rules[hours];
    if (!rule) return 0;
    
    if (rule[absences] !== undefined) {
        return rule[absences];
    }
    
    // If absences exceed the defined rules, return 0 (kəsr)
    return 0;
}

function getResultEmoji(score) {
    if (score === 0) return '⚠️ 0 BAL ⚠️';
    if (score >= 50) return '🎉 MÜVƏFFƏQİYYƏTLƏ KEÇDİNİZ! ✅';
    if (score >= 45) return '🔥 ÇOX YAXŞI 📊';
    if (score >= 41) return '💣 YAXŞI 📈';
    if (score >= 36) return '🫂 KAFİ 📉';
    if (score >= 26) return '🎭 ZƏİF 📴';
    return '🗿 YAXŞI OLACAQ 🆒';
}

function calculateSemestr() {
    // Get seminar grades
    const seminarGrades = Array.from(document.querySelectorAll('.seminar-grade')).map(input => parseFloat(input.value) || 0);
    const seminarAvg = seminarGrades.length > 0 ? seminarGrades.reduce((a, b) => a + b, 0) / seminarGrades.length : 0;
    
    // Get kollekvium grades
    const kollekviumGrades = Array.from(document.querySelectorAll('.kollekvium-grade')).map(input => parseFloat(input.value) || 0);
    const kollekviumAvg = kollekviumGrades.length > 0 ? kollekviumGrades.reduce((a, b) => a + b, 0) / kollekviumGrades.length : 0;
    
    // Get sərbəst iş
    const serbestBal = parseFloat(document.getElementById('serbestBal').value) || 0;
    
    // Calculate attendance
    const dersSaat = parseInt(document.getElementById('dersSaat').value);
    const qayibSay = parseInt(document.getElementById('qayibSay').value) || 0;
    const davamiyyetBal = dersSaat ? calculateAttendance(dersSaat, qayibSay) : 0;
    
    // Calculate total: (seminar*0.4 + kollekvium*0.6)*3 + davamiyyət + sərbəst
    const semestrScore = (seminarAvg * 0.4 + kollekviumAvg * 0.6) * 3 + davamiyyetBal + serbestBal;
    const finalScore = Math.round(semestrScore * 100) / 100;
    
    // Display result
    const resultDiv = document.getElementById('semestrResult');
    resultDiv.innerHTML = \`
        <div class="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-6 shadow-xl">
            <div class="text-center mb-4">
                <div class="text-5xl font-bold mb-2">\${finalScore}</div>
                <div class="text-sm opacity-90">/ 50 bal</div>
            </div>
            
            <div class="bg-white/20 rounded-xl p-4 mb-4">
                <div class="grid grid-cols-2 gap-3 text-sm">
                    <div>
                        <div class="opacity-80">Seminar orta:</div>
                        <div class="font-bold">\${seminarAvg.toFixed(2)}</div>
                    </div>
                    <div>
                        <div class="opacity-80">Kollekvium orta:</div>
                        <div class="font-bold">\${kollekviumAvg.toFixed(2)}</div>
                    </div>
                    <div>
                        <div class="opacity-80">Sərbəst iş:</div>
                        <div class="font-bold">\${serbestBal}</div>
                    </div>
                    <div>
                        <div class="opacity-80">Davamiyyət:</div>
                        <div class="font-bold">\${davamiyyetBal}</div>
                    </div>
                </div>
            </div>
            
            <div class="text-center text-xl font-bold">
                \${getResultEmoji(finalScore)}
            </div>
        </div>
    \`;
    resultDiv.classList.remove('hidden');
}

// ÜOMG Calculator
function generateUomgFields() {
    const count = parseInt(document.getElementById('fennCount').value) || 0;
    const container = document.getElementById('uomgFields');
    container.innerHTML = '';
    
    if (count === 0) return;
    
    for (let i = 1; i <= count; i++) {
        const div = document.createElement('div');
        div.className = 'bg-white/10 rounded-xl p-4';
        div.innerHTML = \`
            <h3 class="font-semibold mb-3">Fənn \${i}</h3>
            <div class="grid grid-cols-2 gap-3">
                <div>
                    <label class="text-sm">Bal (0-100)</label>
                    <input type="number" class="uomg-bal w-full bg-white/20 rounded-lg px-3 py-2 mt-1" min="0" max="100" placeholder="0-100">
                </div>
                <div>
                    <label class="text-sm">Kredit</label>
                    <input type="number" class="uomg-kredit w-full bg-white/20 rounded-lg px-3 py-2 mt-1" min="1" placeholder="Kredit">
                </div>
            </div>
        \`;
        container.appendChild(div);
    }
    
    document.getElementById('uomgCalcBtn').classList.remove('hidden');
}

function calculateUomg() {
    const bals = Array.from(document.querySelectorAll('.uomg-bal')).map(input => parseFloat(input.value) || 0);
    const kredits = Array.from(document.querySelectorAll('.uomg-kredit')).map(input => parseFloat(input.value) || 0);
    
    if (bals.length === 0 || kredits.length === 0) {
        alert('Zəhmət olmasa bütün sahələri doldurun');
        return;
    }
    
    let totalWeighted = 0;
    let totalKredit = 0;
    
    for (let i = 0; i < bals.length; i++) {
        totalWeighted += bals[i] * kredits[i];
        totalKredit += kredits[i];
    }
    
    const uomg = totalKredit > 0 ? totalWeighted / totalKredit : 0;
    const finalScore = Math.round(uomg * 100) / 100;
    
    const resultDiv = document.getElementById('uomgResult');
    resultDiv.innerHTML = \`
        <div class="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-6 shadow-xl">
            <div class="text-center mb-4">
                <div class="text-sm opacity-90 mb-2">ÜOMG Nəticəsi</div>
                <div class="text-5xl font-bold mb-2">\${finalScore}</div>
                <div class="text-sm opacity-90">/ 100</div>
            </div>
            
            <div class="bg-white/20 rounded-xl p-4 mb-4">
                <div class="text-sm text-center">
                    <div class="opacity-80">Ümumi Kredit</div>
                    <div class="font-bold text-xl">\${totalKredit}</div>
                </div>
            </div>
            
            <div class="text-center text-xl font-bold">
                \${getResultEmoji(finalScore)}
            </div>
        </div>
    \`;
    resultDiv.classList.remove('hidden');
}

// Exam Fee Calculator
function calculateExamFee() {
    const illikOdenis = parseFloat(document.getElementById('illikOdenis').value) || 0;
    const fennKredit = parseFloat(document.getElementById('fennKredit').value) || 0;
    
    if (illikOdenis === 0 || fennKredit === 0) {
        alert('Zəhmət olmasa bütün sahələri doldurun');
        return;
    }
    
    // Formula: ((illik/60)*kredit)/4 + 1
    const fee = ((illikOdenis / 60) * fennKredit) / 4 + 1;
    const finalFee = Math.round(fee * 100) / 100;
    
    const resultDiv = document.getElementById('examFeeResult');
    resultDiv.innerHTML = \`
        <div class="bg-gradient-to-br from-red-600 to-orange-600 rounded-2xl p-6 shadow-xl">
            <div class="text-center mb-4">
                <div class="text-sm opacity-90 mb-2">25% İmtahan Pulu</div>
                <div class="text-5xl font-bold mb-2">\${finalFee.toFixed(2)} ₼</div>
            </div>
            
            <div class="bg-white/20 rounded-xl p-4">
                <div class="grid grid-cols-2 gap-3 text-sm">
                    <div>
                        <div class="opacity-80">İllik ödəniş:</div>
                        <div class="font-bold">\${illikOdenis} ₼</div>
                    </div>
                    <div>
                        <div class="opacity-80">Kredit:</div>
                        <div class="font-bold">\${fennKredit}</div>
                    </div>
                </div>
            </div>
        </div>
    \`;
    resultDiv.classList.remove('hidden');
}

// Age Calculator
function calculateAge() {
    const birthDateInput = document.getElementById('birthDate').value;
    
    if (!birthDateInput) {
        alert('Zəhmət olmasa doğum tarixini seçin');
        return;
    }
    
    const birthDate = new Date(birthDateInput);
    const today = new Date();
    
    // Calculate age
    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();
    
    if (days < 0) {
        months--;
        const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += lastMonth.getDate();
    }
    
    if (months < 0) {
        years--;
        months += 12;
    }
    
    // Calculate days lived
    const oneDay = 24 * 60 * 60 * 1000;
    const daysLived = Math.floor((today - birthDate) / oneDay);
    
    // Calculate next birthday
    let nextBirthday = new Date(today.getFullYear(), birthDate.getMonth(), birthDate.getDate());
    if (nextBirthday < today) {
        nextBirthday.setFullYear(today.getFullYear() + 1);
    }
    const daysToNextBirthday = Math.ceil((nextBirthday - today) / oneDay);
    
    const resultDiv = document.getElementById('ageResult');
    resultDiv.innerHTML = \`
        <div class="bg-gradient-to-br from-green-600 to-teal-600 rounded-2xl p-6 shadow-xl">
            <div class="text-center mb-6">
                <div class="text-6xl mb-4">🎂</div>
                <div class="text-4xl font-bold mb-2">\${years} yaş</div>
                <div class="text-lg opacity-90">\${months} ay, \${days} gün</div>
            </div>
            
            <div class="space-y-3">
                <div class="bg-white/20 rounded-xl p-4">
                    <div class="text-sm opacity-80">Yaşadığınız günlər</div>
                    <div class="text-2xl font-bold">\${daysLived.toLocaleString()} gün</div>
                </div>
                
                <div class="bg-white/20 rounded-xl p-4">
                    <div class="text-sm opacity-80">Növbəti ad gününə</div>
                    <div class="text-2xl font-bold">\${daysToNextBirthday} gün</div>
                </div>
            </div>
        </div>
    \`;
    resultDiv.classList.remove('hidden');
}

// PWA Installation
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    
    // Show install button or banner
    showInstallPromotion();
});

function showInstallPromotion() {
    // You can show a custom install button here
    console.log('App can be installed');
}

async function installApp() {
    if (!deferredPrompt) {
        return;
    }
    
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    
    console.log(\`User response to the install prompt: \${outcome}\`);
    deferredPrompt = null;
}

// Register Service Worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => console.log('SW registered:', registration))
            .catch(err => console.log('SW registration failed:', err));
    });
}
