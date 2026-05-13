import { useState, useEffect } from 'react';
import { 
  Palette, 
  Code2, 
  Check,
  Monitor,
  Smartphone,
  Maximize2,
  Zap,
  Sparkles,
  Layers,
  Eye,
  RefreshCcw,
  Plus,
  Minus,
  Layout,
  Brush,
  BookOpen,
  Film,
  Smile,
  Rocket,
  Gamepad2,
  Clapperboard,
  Pencil,
  Download,
  Terminal,
  Grid,
  Heart,
  Camera,
  Star,
  Triangle,
  Shapes,
  Box
} from 'lucide-react';

// --- MODELLI RE-DESIGNATI: PIÙ ARTISTICI E MENO PUBBLICITARI ---

const ARTISTIC_TEMPLATES = [
  {
    id: 'technicolor-cinema',
    name: 'Cine-Vibrant',
    category: 'Cinema (Vibrant)',
    icon: <Film className="w-5 h-5 text-red-500" />,
    color: 'bg-[#C62828]',
    description: 'Stile Red Carpet. Luci accecanti, sipari animati e un layout che riempie ogni angolo con il fascino del grande schermo.',
    code: `<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://fonts.googleapis.com/css2?family=Bungee+Shade&family=Righteous&display=swap" rel="stylesheet">
  <style>
    :root { --velvet: #8B0000; --gold: #FFD700; --spotlight: rgba(255, 255, 255, 0.4); }
    body { background: #1a0202; color: #fff; font-family: 'Righteous', cursive; overflow-x: hidden; margin: 0; }
    
    .curtain {
      position: fixed; top: 0; height: 100vh; width: 50vw; background: var(--velvet);
      background-image: repeating-linear-gradient(90deg, #600 0, #800 5%, #600 10%);
      z-index: 100; transition: 1.5s cubic-bezier(0.77, 0, 0.175, 1);
      box-shadow: inset 0 0 100px #000;
    }
    .curtain-left { left: 0; }
    .curtain-right { right: 0; }
    .open { }
    .open .curtain-left { transform: translateX(-90%); }
    .open .curtain-right { transform: translateX(90%); }
    
    .light-beam {
      position: fixed; top: -20%; left: -10%; width: 60vw; height: 140vh;
      background: radial-gradient(circle, var(--spotlight) 0%, transparent 70%);
      transform: rotate(-30deg); pointer-events: none; z-index: 1; animation: sweep 10s infinite alternate;
    }
    @keyframes sweep { from { transform: rotate(-35deg) scale(0.8); } to { transform: rotate(-25deg) scale(1.2); } }

    .marquee-lights {
      border: 15px solid #333; background: #000; padding: 30px;
      position: relative; box-shadow: 0 0 50px rgba(255,215,0,0.5);
    }
    .marquee-lights::before {
      content: ''; position: absolute; inset: -10px; border: 8px dotted #FFD700;
      animation: flash 1s infinite alternate;
    }
    @keyframes flash { from { opacity: 0.3; } to { opacity: 1; } }

    .film-strip {
      background-image: radial-gradient(#111 20%, transparent 20%);
      background-size: 40px 40px; background-position: left center;
      border-top: 10px solid #000; border-bottom: 10px solid #000;
    }
    
    .giant-title { font-family: 'Bungee Shade', cursive; text-shadow: 5px 5px 0px #FFD700; }
  </style>
</head>
<body class="flex flex-col items-center">
  <div class="curtain curtain-left"></div>
  <div class="curtain curtain-right"></div>
  <div class="light-beam"></div>

  <header class="w-full p-12 flex justify-between items-center z-50">
    <div class="text-4xl text-[#FFD700] hover:scale-110 transition-transform cursor-pointer">STUDIOOS_</div>
    <nav class="flex gap-10 text-xl font-bold uppercase tracking-widest text-[#FFD700]">
      <a href="#" class="hover:underline">Lezioni</a>
      <a href="#" class="hover:underline">Camera</a>
      <a href="#" class="hover:underline">Contatti</a>
    </nav>
  </header>

  <main class="w-full max-w-7xl px-8 z-10">
    <div class="marquee-lights mt-10 mb-32 text-center">
       <h1 class="giant-title text-7xl md:text-9xl mb-4 italic">ACTION!</h1>
       <p class="text-3xl text-[#FFD700] uppercase tracking-[1em] opacity-80">Laboratorio Audiovisivo 2026</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-12 mb-40">
       <div class="bg-[#2a0505] p-12 border-4 border-[#FFD700] rounded-lg shadow-2xl relative">
          <div class="absolute -top-6 -left-6 bg-[#FFD700] text-black px-6 py-2 font-black rotate-[-3deg]">NEW TAKE</div>
          <h2 class="text-5xl mb-8 border-b-4 border-[#FFD700] pb-4 uppercase">Regia & Visione</h2>
          <p class="text-2xl font-light leading-relaxed opacity-80 mb-10">
            Impara il linguaggio delle immagini. Dallo storyboard al montaggio finale, trasforma i tuoi sogni in fotogrammi indimenticabili.
          </p>
          <div class="film-strip h-20 w-full flex items-center justify-end pr-10">
             <span class="text-xs font-black tracking-widest text-[#FFD700]">PROCESSING...</span>
          </div>
       </div>

       <div class="relative group cursor-pointer overflow-hidden border-8 border-white shadow-[0_0_80px_rgba(255,255,255,0.2)]">
          <img src="https://images.unsplash.com/photo-1485846234645-a62644f84728" class="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 group-hover:rotate-2">
          <div class="absolute inset-0 bg-gradient-to-t from-black to-transparent flex items-end p-10">
             <button class="bg-[#FFD700] text-black px-12 py-4 font-black text-2xl hover:bg-white transition-colors">Vedi Showcase</button>
          </div>
       </div>
    </div>

    <section class="film-strip p-20 flex flex-wrap justify-around gap-20 bg-white/5 backdrop-blur-md rounded-3xl mb-40">
       <div class="text-center group">
          <div class="text-8xl mb-6 group-hover:scale-125 transition-transform duration-500">🎥</div>
          <h4 class="text-2xl text-[#FFD700] uppercase">Ripresa</h4>
       </div>
       <div class="text-center group">
          <div class="text-8xl mb-6 group-hover:scale-125 transition-transform duration-500">🎙️</div>
          <h4 class="text-2xl text-[#FFD700] uppercase">Audio</h4>
       </div>
       <div class="text-center group">
          <div class="text-8xl mb-6 group-hover:scale-125 transition-transform duration-500">🎞️</div>
          <h4 class="text-2xl text-[#FFD700] uppercase">Editing</h4>
       </div>
    </section>
  </main>

  <script>
    setTimeout(() => document.body.classList.add('open'), 500);
  </script>
</body>
</html>`
  },
  {
    id: 'pop-art-school',
    name: 'Edu-Pop Dynamic',
    category: 'Scuola (Pop-Art)',
    icon: <Pencil className="w-5 h-5 text-yellow-600" />,
    color: 'bg-[#FF9800]',
    description: 'Design esplosivo e saturo. Colori ultra-vividi, mezzetone (dot-patterns), testi giganti e un senso di movimento costante.',
    code: `<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://fonts.googleapis.com/css2?family=Bungee&family=Rubik:wght@900&display=swap" rel="stylesheet">
  <style>
    :root { --pop-yellow: #FFDE03; --pop-blue: #0336FF; --pop-red: #FF0266; }
    body { background: var(--pop-yellow); color: #000; font-family: 'Rubik', sans-serif; overflow-x: hidden; margin: 0; }
    .bungee { font-family: 'Bungee', cursive; }
    
    .dots-bg {
      position: fixed; inset: 0; z-index: -1;
      background-image: radial-gradient(rgba(0,0,0,0.15) 2px, transparent 2px);
      background-size: 20px 20px;
    }
    
    .hero-container {
      display: flex; flex-direction: column; align-items: center; justify-content: center;
      min-height: 100vh; padding: 40px; text-align: center; background: white;
      border: 15px solid #000; transform: rotate(-1deg); margin: 40px; box-shadow: 30px 30px 0px var(--pop-blue);
    }
    
    .burst { 
      position: absolute; width: 300px; height: 300px; background: var(--pop-red); 
      clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
      z-index: -1; animation: spin 20s linear infinite;
    }
    @keyframes spin { from { transform: rotate(0deg) scale(1); } to { transform: rotate(360deg) scale(1.2); } }

    .sticky-note {
      background: #fff; border: 4px solid #000; padding: 30px; border-radius: 4px;
      box-shadow: 10px 10px 0 #000; transform: rotate(2deg); transition: 0.3s;
    }
    .sticky-note:hover { transform: rotate(-1deg) scale(1.05); }
    
    .giant-text { font-size: clamp(4rem, 18vw, 15rem); line-height: 0.75; letter-spacing: -0.05em; color: var(--pop-blue); }
  </style>
</head>
<body class="p-4 sm:p-10">
  <div class="dots-bg"></div>

  <nav class="flex justify-between items-center mb-20 px-8">
    <div class="bungee text-5xl bg-black text-white px-6 py-2 skew-x-[-10deg]">SAPIENS!</div>
    <div class="flex gap-8 font-black text-xs uppercase tracking-tighter">
      <a href="#" class="bg-black text-white px-4 py-2 hover:bg-[#FF0266]">Corsi</a>
      <a href="#" class="bg-black text-white px-4 py-2 hover:bg-[#0336FF]">Laboratori</a>
    </div>
  </nav>

  <main class="max-w-[1500px] mx-auto">
    <div class="relative mb-40">
       <div class="burst top-[-100px] left-[-100px]"></div>
       <h1 class="giant-text bungee">SCUOLA <br>DI <span class="text-black">DOMANI.</span></h1>
       <div class="absolute bottom-[-40px] right-20 bg-[#FF0266] text-white p-6 bungee text-4xl rotate-6 shadow-2xl">ISCRIZIONI APERTE!</div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-16 mb-40">
       <div class="sticky-note bg-white col-span-2">
          <h2 class="text-6xl font-black mb-8 underline decoration-[15px] decoration-var(--pop-blue)">Metodo Implosivo</h2>
          <p class="text-3xl font-light italic leading-relaxed">
            "Le nostre aule non hanno muri, hanno porte aperte sulla curiosità. Ogni lezione è un esperimento, ogni studente è uno scienziato dei colori."
          </p>
       </div>
       <div class="flex flex-col gap-10">
          <div class="sticky-note bg-[#0336FF] text-white rotate-[-3deg]">
             <h3 class="text-3xl font-black mb-2">Robotica_</h3>
             <p class="opacity-80">Costruiamo macchine intelligenti per risolvere piccoli problemi umani.</p>
          </div>
          <div class="sticky-note bg-[#FFDE03] rotate-[4deg]">
             <h3 class="text-3xl font-black mb-2">Cinema_</h3>
             <p class="opacity-80">Dallo schermo bianco alla regia: crea il tuo primo cortometraggio.</p>
          </div>
       </div>
    </div>

    <div class="bg-black text-white p-24 flex flex-col items-center text-center rounded-[80px] border-[15px] border-white shadow-[20px_20px_0_var(--pop-red)]">
       <h2 class="giant-text text-white mb-10">Vieni?</h2>
       <p class="text-3xl max-w-2xl mb-12 italic">Non aspettare il futuro, disegnalo con noi oggi pomeriggio.</p>
       <button class="bg-[#FFDE03] text-black text-4xl bungee px-20 py-8 rounded-full border-8 border-black hover:scale-110 transition-transform">CLICCA QUI! ⚡</button>
    </div>
  </main>

  <footer class="mt-40 text-center font-black text-lg opacity-20 py-10">
     EDU POP STUDIO • 2026 • MILANO/ROMA
  </footer>
</body>
</html>`
  },
  {
    id: 'collage-kids-full',
    name: 'Mondo Pezzato',
    category: 'Creatività (Collage Immersivo)',
    icon: <Smile className="w-5 h-5 text-orange-500" />,
    color: 'bg-[#C5E1A5]',
    description: 'Nessuno spazio vuoto. Uno sfondo pieno di trame di carta, ritagli giganti che si animano e un layout che scorre come un libro animato.',
    code: `<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://fonts.googleapis.com/css2?family=Gaegu:wght@400;700&display=swap" rel="stylesheet">
  <style>
    body { background: #fafafa; color: #432E25; font-family: 'Gaegu', cursive; margin: 0; overflow-x: hidden; }
    
    .full-collage-bg {
      position: fixed; inset: 0; z-index: -1;
      background-image: 
        linear-gradient(rgba(255,255,255,0.8), rgba(255,255,255,0.8)),
        url('https://www.transparenttextures.com/patterns/handmade-paper.png');
      background-color: #f4ece2;
    }
    
    .paper-chunk {
      background: #fff; border: 2px solid rgba(0,0,0,0.05); padding: 50px;
      clip-path: polygon(2% 2%, 100% 0%, 98% 98%, 0% 100%);
      box-shadow: 15px 15px 0px rgba(0,0,0,0.05);
      position: relative;
    }
    
    .sun-cutout {
      position: absolute; top: -50px; left: -50px; width: 200px; height: 200px;
      background: #FFD54F; clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
      animation: rotate 30s linear infinite;
    }
    @keyframes rotate { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }

    .tree-cutout { position: absolute; bottom: 0; pointer-events: none; mix-blend-mode: multiply; opacity: 0.3; }
    
    .title-kid { font-size: clamp(4rem, 15vw, 15rem); line-height: 0.8; color: #388E3C; }
    
    .floating-cloud { animation: float 10s infinite alternate cubic-bezier(0.4, 0, 0.2, 1); }
    @keyframes float { from { transform: translateX(-5vw) translateY(0); } to { transform: translateX(5vw) translateY(-20px); } }
  </style>
</head>
<body class="selection:bg-green-200">
  <div class="full-collage-bg"></div>
  
  <header class="p-12 flex justify-between items-center relative z-20">
    <div class="text-6xl font-bold italic text-orange-600 rotate-[-5deg]">BIMBI_LAB★</div>
    <div class="flex gap-12 text-3xl font-bold opacity-30">
       <a href="#" class="hover:opacity-100 transition-opacity">Giochi</a>
       <a href="#" class="hover:opacity-100 transition-opacity">Sogni</a>
    </div>
  </header>

  <main class="w-full relative py-20">
    <div class="floating-cloud absolute top-20 right-[10%] opacity-40">
       <svg width="300" height="150" viewBox="0 0 300 150"><path d="M50 120c0-40 30-70 70-70 10-40 50-70 100-70 50 0 90 40 90 90 0 10-2 20-5 30H50z" fill="#FFF"/></svg>
    </div>

    <div class="max-w-[1400px] mx-auto px-8">
       <div class="relative mb-60">
          <div class="sun-cutout"></div>
          <h1 class="title-kid font-bold">MONDO <br><span class="text-amber-500">PEZZATO.</span></h1>
          <p class="text-4xl mt-12 max-w-2xl font-medium opacity-60">
            Qui non buttiamo via niente. Ritagliamo il vecchio per costruire un nuovo universo colorato. Ogni pezzetto di carta è una galassia!
          </p>
       </div>

       <div class="grid grid-cols-1 md:grid-cols-2 gap-24 relative pb-40">
          <div class="paper-chunk bg-white rotate-[-3deg]">
             <div class="text-9xl mb-8">🧸</div>
             <h3 class="text-5xl font-black mb-6">Orso Curioso</h3>
             <p class="text-2xl leading-relaxed opacity-60">
               Il laboratorio dove impariamo a esplorare la natura con gli occhi chiusi e il naso all'insù.
             </p>
             <div class="mt-12 h-1 bg-green-200 w-full"></div>
          </div>

          <div class="paper-chunk bg-[#F1F8E9] lg:translate-y-40 rotate-[2deg]">
             <div class="text-9xl mb-8">🚀</div>
             <h3 class="text-5xl font-black mb-6">Lancio_Idea</h3>
             <p class="text-2xl leading-relaxed opacity-60">
               Costruiamo astronavi di cartone che ci portano fino a cena e oltre! La tua camera è l'intero cosmo.
             </p>
             <button class="mt-12 bg-orange-500 text-white text-3xl px-12 py-4 rounded-xl hover:rotate-6 transition-transform">SALTA DENTRO!</button>
          </div>
       </div>
    </div>
  </main>
</body>
</html>`
  },
  {
    id: 'bauhaus-logic',
    name: 'Logica Bauhaus',
    category: 'Design (Geometrico)',
    icon: <Grid className="w-5 h-5 text-blue-500" />,
    color: 'bg-[#FFEB3B]',
    description: 'Minimalismo costruttivista. Forme pure, colori primari e una struttura a griglia che sfida la simmetria tradizionale.',
    code: `<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;900&display=swap" rel="stylesheet">
  <style>
    :root { --red: #E63946; --yellow: #FFB703; --blue: #1D3557; --black: #050505; }
    body { background: #fdfdfd; color: var(--black); font-family: 'Outfit', sans-serif; margin: 0; }
    
    .b-grid { display: grid; grid-template-columns: repeat(12, 1fr); min-height: 100vh; }
    .b-panel { border: 2px solid var(--black); padding: 60px; transition: 0.5s; position: relative; overflow: hidden; }
    .b-panel:hover { padding-left: 80px; }
    
    .circle { width: 150px; height: 150px; border-radius: 50%; background: var(--red); margin-bottom: 40px; }
    .square { width: 120px; height: 120px; background: var(--blue); position: absolute; bottom: -60px; right: -60px; transform: rotate(45deg); }
    
    .giant-num { font-size: 20rem; line-height: 0.7; font-weight: 900; opacity: 0.05; position: absolute; left: -2rem; bottom: -2rem; }
    
    @keyframes slide { from { transform: translateX(-100%); } to { transform: translateX(0); } }
    .animate-slide { animation: slide 1s cubic-bezier(0.16, 1, 0.3, 1); }
  </style>
</head>
<body>
  <div class="b-grid">
    <div class="b-panel col-span-12 md:col-span-8 flex flex-col justify-between border-b-4 md:border-b-2">
       <div class="animate-slide">
          <div class="flex gap-4 mb-20">
             <div class="w-8 h-8 bg-black"></div>
             <div class="w-8 h-8 bg-[#E63946]"></div>
             <div class="w-8 h-8 bg-[#FFB703]"></div>
          </div>
          <h1 class="text-8xl md:text-[12rem] font-black leading-none uppercase tracking-tighter">FORMA<br>&FUNZIONE.</h1>
       </div>
       <div class="max-w-xl text-3xl font-light opacity-60 leading-relaxed mt-20">
          Il design non è un abito, è l'anatomia di un'idea. Esplora la scuola dove l'estetica sposa la logica.
       </div>
       <div class="giant-num">01</div>
    </div>
    
    <div class="b-panel col-span-12 md:col-span-4 bg-[#FFB703] border-l-4 md:border-l-2 flex flex-col justify-center items-center text-center">
       <div class="circle hover:scale-125 transition-transform cursor-crosshair"></div>
       <h2 class="text-5xl font-black uppercase">Workshop</h2>
       <p class="mt-6 text-xl tracking-widest font-bold opacity-40 italic">TEORIA DEL COLORE</p>
    </div>

    <div class="b-panel col-span-12 md:col-span-4 border-t-4 md:border-t-2 bg-[#1D3557] text-white overflow-hidden group">
       <h3 class="text-6xl font-black rotate-[-90deg] absolute left-[-40px] top-1/2 -translate-y-1/2 opacity-20 group-hover:opacity-100 transition-opacity">ARCHIVIO</h3>
       <div class="relative z-10">
          <p class="text-2xl mb-10">Accedi a oltre 500 dispense storiche digitalizzate.</p>
          <button class="border-2 border-white px-10 py-4 font-bold hover:bg-white hover:text-blue-900 transition-colors">SFOGLIA →</button>
       </div>
    </div>

    <div class="b-panel col-span-12 md:col-span-8 border-t-4 md:border-t-2 border-l-4 md:border-l-2 flex items-end">
       <div class="square"></div>
       <div class="flex-1">
          <h4 class="text-5xl font-black mb-6 uppercase">Manifesto 2026</h4>
          <p class="text-xl max-w-lg opacity-50">Crediamo in un'educazione che scompone il complesso per rivelare l'essenziale.</p>
       </div>
       <div class="w-32 h-1 bg-black mb-4"></div>
    </div>
  </div>
</body>
</html>`
  },
  {
    id: 'cyber-brutalist',
    name: 'Brutalismo Cyber',
    category: 'Stile (Neo-Urbano)',
    icon: <Terminal className="w-5 h-5 text-green-400" />,
    color: 'bg-[#1a1a1a]',
    description: 'Estetica hacker/urbana. Contrasti acidi, font monospazio giganti, elementi sovrapposti e un layout "grezzo" e potente.',
    code: `<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Syncopate:wght@700&display=swap" rel="stylesheet">
  <style>
    body { background: #000; color: #fff; font-family: 'Space Mono', monospace; margin: 0; overflow-x: hidden; }
    .syncopate { font-family: 'Syncopate', sans-serif; }
    
    .scanline {
      width: 100%; height: 2px; background: rgba(0,255,0,0.1);
      position: fixed; top: 0; z-index: 100;
      animation: scan 4s linear infinite; pointer-events: none;
    }
    @keyframes scan { 0% { top: -10%; } 100% { top: 110%; } }
    
    .glitch-box {
      border: 4px solid #fff; padding: 40px; position: relative;
      background: #000; box-shadow: 15px 15px 0px #39FF14;
      transition: 0.2s; cursor: pointer;
    }
    .glitch-box:hover { transform: translate(-5px, -5px); box-shadow: 25px 25px 0px #FF00FF; }
    
    .skew-tag {
       background: #fff; color: #000; font-weight: 900; padding: 4px 12px;
       transform: skewX(-20deg); display: inline-block;
    }
  </style>
</head>
<body class="p-8 md:p-20">
  <div class="scanline"></div>
  
  <nav class="flex justify-between items-start mb-40 border-b-2 border-white/10 pb-8">
    <div class="syncopate text-4xl tracking-tighter">DATA_NODE_0</div>
    <div class="flex gap-10 text-xs font-bold opacity-40 uppercase">
       <span>Status: Active</span>
       <span>Loc: Milan_Sector</span>
    </div>
  </nav>

  <main class="max-w-7xl mx-auto">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-20 items-center mb-60">
       <div>
          <div class="skew-tag mb-6 uppercase">System_Override</div>
          <h1 class="syncopate text-7xl md:text-9xl leading-[0.8] mb-10">BRUTAL<br>LOGIC.</h1>
          <p class="text-xl max-w-md opacity-40 mb-12">
            La nostra accademia non insegna a usare gli strumenti. Insegna a hackerare il processo creativo per trovare soluzioni inedite.
          </p>
          <button class="bg-[#39FF14] text-black font-black px-12 py-5 text-xl hover:bg-white transition-colors uppercase">Get_Access</button>
       </div>
       <div class="relative">
          <div class="absolute -top-10 -right-10 w-full h-full border-2 border-white/20 z-0"></div>
          <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f" class="w-full relative z-10 grayscale contrast-150">
       </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
       <div class="glitch-box">
          <span class="text-xs opacity-30 mb-4 block">CMD_01</span>
          <h3 class="text-3xl font-bold mb-4 uppercase">Neural_Art</h3>
          <p class="text-sm opacity-50">Generazione procedurale di mondi attraverso algoritmi di visione artificiale.</p>
       </div>
       <div class="glitch-box">
          <span class="text-xs opacity-30 mb-4 block">CMD_02</span>
          <h3 class="text-3xl font-bold mb-4 uppercase">Code_Poetry</h3>
          <p class="text-sm opacity-50">Sviluppo di interfacce espressive che sfidano la user experience canonica.</p>
       </div>
       <div class="glitch-box">
          <span class="text-xs opacity-30 mb-4 block">CMD_03</span>
          <h3 class="text-3xl font-bold mb-4 uppercase">Grid_Crash</h3>
          <p class="text-sm opacity-50">Workshop sulla decostruzione del layout editoriale nell'era post-digitale.</p>
       </div>
    </div>
  </main>

  <footer class="mt-60 flex justify-between items-end opacity-20 text-[10px] uppercase tracking-[1em]">
     <span>Project_X_Studio</span>
     <span>(C) 2026_Ver_1.0.4</span>
  </footer>
</body>
</html>`
  },
  {
    id: 'organic-zen',
    name: 'Zen Organico',
    category: 'Design (Fluido)',
    icon: <Heart className="w-5 h-5 text-pink-400" />,
    color: 'bg-[#fef7f7]',
    description: 'Eleganza eterea. Forme sinuose, gradienti morbidi e una tipografia serif raffinata per un senso di calma e professionalità.',
    code: `<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,900;1,400&family=Inter:wght@300;600&display=swap" rel="stylesheet">
  <style>
    :root { --soft-pink: #fdf2f2; --deep-clay: #4a3728; --accent-gold: #c5a371; }
    body { background: var(--soft-pink); color: var(--deep-clay); font-family: 'Inter', sans-serif; margin: 0; overflow-x: hidden; }
    .serif { font-family: 'Playfair Display', serif; }
    
    .blob {
      position: absolute; border-radius: 50%; filter: blur(80px); z-index: -1;
      animation: drift 20s infinite alternate cubic-bezier(0.4, 0, 0.2, 1);
    }
    @keyframes drift {
      from { transform: translate(0, 0) scale(1); }
      to { transform: translate(10%, 10%) scale(1.2); }
    }
    
    .soft-card {
       background: rgba(255,255,255,0.4); backdrop-filter: blur(20px);
       padding: 60px; border-radius: 80px 0 80px 0; border: 1px solid rgba(0,0,0,0.05);
       transition: 0.6s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .soft-card:hover { border-radius: 0 80px 0 80px; transform: translateY(-10px); background: #fff; }
    
    .v-line { width: 1px; height: 100px; background: var(--deep-clay); opacity: 0.1; margin: 40px auto; }
  </style>
</head>
<body class="flex flex-col items-center py-20 px-4 md:px-20">
  <div class="blob w-[600px] h-[600px] bg-[#fbdfdf] top-[-10%] left-[-10%]"></div>
  <div class="blob w-[400px] h-[400px] bg-[#f0e6ff] bottom-[-5%] right-[-5%]"></div>

  <header class="w-full max-w-6xl flex justify-between items-center mb-40">
    <div class="serif text-4xl font-black italic">AURA_</div>
    <nav class="flex gap-12 font-bold text-xs uppercase tracking-[0.3em] opacity-40">
       <a href="#" class="hover:opacity-100 transition-opacity">Essenza</a>
       <a href="#" class="hover:opacity-100 transition-opacity">Spazio</a>
    </nav>
  </header>

  <main class="w-full max-w-5xl text-center">
    <h1 class="serif text-7xl md:text-[8rem] leading-[0.9] mb-12">L'Arte della <br><span class="italic text-[#c5a371]">Presenza.</span></h1>
    <p class="text-xl md:text-2xl font-light max-w-2xl mx-auto italic opacity-60 mb-20">
      Uno spazio dedicato alla lentezza consapevole e al design che respira insieme a te.
    </p>
    
    <div class="v-line"></div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-20 mt-20 text-left">
       <div class="soft-card">
          <span class="serif text-5xl italic block mb-6">01.</span>
          <h3 class="text-2xl font-black mb-4 uppercase tracking-widest">Silenzio Visivo</h3>
          <p class="font-light opacity-60 leading-relaxed">Impariamo a togliere ciò che è superfluo per far emergere la vera anima del progetto.</p>
       </div>
       <div class="soft-card md:translate-y-20">
          <span class="serif text-5xl italic block mb-6">02.</span>
          <h3 class="text-2xl font-black mb-4 uppercase tracking-widest">Materia Fluida</h3>
          <p class="font-light opacity-60 leading-relaxed">Esplorazione dei materiali naturali applicati alle interfacce digitali moderne.</p>
       </div>
    </div>

    <div class="mt-60 mb-40">
       <div class="serif text-4xl mb-12 italic">Vuoi iniziare il viaggio?</div>
       <button class="bg-[#4a3728] text-white serif px-20 py-8 text-2xl rounded-full hover:bg-[#c5a371] hover:scale-105 transition-all">Prenota il Tuo Posto</button>
    </div>
  </main>

  <footer class="w-full max-w-6xl pt-20 border-t border-black/5 text-[9px] uppercase tracking-[0.6em] opacity-20 flex justify-between">
    <span>Aura Design Lab</span>
    <span>Santuario Creativo • 2026</span>
  </footer>
</body>
</html>`
  },
  {
    id: 'diagonal-brutalism',
    name: 'Obliquo',
    category: 'Design (Angolato)',
    icon: <Triangle className="w-5 h-5 text-yellow-500" />,
    color: 'bg-[#ffeb3b]',
    description: 'Layout inclinato a 5 gradi. Rompe la rigidità dello schermo con sezioni diagonali e testi che corrono lungo i bordi.',
    code: `<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://fonts.googleapis.com/css2?family=Unbounded:wght@900&family=Inter:wght@400;800&display=swap" rel="stylesheet">
  <style>
    body { background: #000; color: #fff; font-family: 'Inter', sans-serif; overflow-x: hidden; margin: 0; }
    .unbounded { font-family: 'Unbounded', sans-serif; }
    
    .angled-box {
      width: 120vw; height: 80vh; background: #fff; color: #000;
      transform: rotate(-5deg) translateX(-10vw);
      display: flex; flex-direction: column; justify-content: center; padding: 10vw;
      box-shadow: 0 50px 100px rgba(0,0,0,0.5);
    }
    
    .strip {
      background: #ffeb3b; color: #000; padding: 20px; font-weight: 900;
      transform: rotate(2deg) translateY(-50px); width: 150vw; margin-left: -25vw;
      white-space: nowrap; overflow: hidden;
    }
    
    .diagonal-line {
      position: absolute; top: 0; left: 50%; width: 2px; height: 200%;
      background: #ffeb3b; transform: rotate(45deg); opacity: 0.2;
    }
  </style>
</head>
<body>
  <div class="diagonal-line"></div>
  
  <div class="angled-box">
     <h1 class="unbounded text-8xl md:text-[12rem] leading-none mb-10">OBLIQUO.</h1>
     <p class="text-3xl max-w-2xl font-light leading-relaxed opacity-60">
       Perché guardare il mondo in verticale quando puoi inclinarlo di 5 gradi? Cambia prospettiva, cambia il tuo design.
     </p>
  </div>

  <div class="strip">
     <div class="flex gap-20 text-4xl unbounded italic">
        <span>* NON LINEARE *</span><span>* NON LINEARE *</span><span>* NON LINEARE *</span><span>* NON LINEARE *</span>
     </div>
  </div>

  <div class="p-20 grid grid-cols-1 md:grid-cols-2 gap-40 mt-20">
     <div class="border-l-8 border-[#ffeb3b] pl-10">
        <h2 class="unbounded text-6xl mb-8">LAB_01</h2>
        <p class="text-xl opacity-40 italic">"La freccia è più veloce del punto."</p>
     </div>
     <div class="relative">
        <div class="absolute -inset-4 bg-[#ffeb3b] transform rotate-3 -z-10"></div>
        <img src="https://images.unsplash.com/photo-1515462277126-2dd0c162007a" class="w-full h-96 object-cover shadow-2xl">
     </div>
  </div>

  <footer class="p-20 opacity-20 text-center unbounded">
     2026 / ANGLED_STUDIO
  </footer>
</body>
</html>`
  },
  {
    id: 'claymorphism-bubbles',
    name: 'Bubbles 3D',
    category: 'Design (Morbido)',
    icon: <Shapes className="w-5 h-5 text-blue-400" />,
    color: 'bg-[#e0f2f1]',
    description: 'Claymorphism e glassmorphism. Forme gommose che sembrano galleggiare in uno spazio multiorganico e coloratissimo.',
    code: `<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200;800&display=swap" rel="stylesheet">
  <style>
    body { background: #e0f7fa; color: #006064; font-family: 'Plus Jakarta Sans', sans-serif; overflow-x: hidden; margin: 0; }
    
    .bubble {
      position: absolute; border-radius: 50%;
      box-shadow: 
        inset 10px 10px 30px rgba(255,255,255,0.7),
        20px 20px 40px rgba(0,0,0,0.1);
      animation: float 6s infinite alternate ease-in-out;
    }
    @keyframes float { from { transform: translateY(0) rotate(0); } to { transform: translateY(-40px) rotate(10deg); } }
    
    .glass-card {
      background: rgba(255,255,255,0.2); backdrop-filter: blur(20px);
      border-radius: 50px; padding: 60px; border: 2px solid rgba(255,255,255,0.5);
      box-shadow: 30px 30px 60px rgba(0,0,0,0.05);
    }
    
    .soft-btn {
      background: white; padding: 25px 60px; border-radius: 40px; font-weight: 900;
      box-shadow: 
        inset 5px 5px 10px rgba(0,0,0,0.05),
        10px 10px 20px rgba(255,255,255,0.8);
      transition: 0.3s;
    }
    .soft-btn:hover { transform: scale(1.05); box-shadow: 20px 20px 40px rgba(0,0,0,0.1); }
  </style>
</head>
<body class="p-10 md:p-40 flex flex-col items-center">
  <div class="bubble w-80 h-80 bg-pink-100 top-20 left-[-100px]"></div>
  <div class="bubble w-64 h-64 bg-blue-100 bottom-20 right-[-50px]" style="animation-delay: -3s"></div>
  <div class="bubble w-40 h-40 bg-yellow-100 top-[40%] right-[10%]" style="animation-delay: -1s"></div>

  <div class="glass-card max-w-4xl text-center relative z-10">
     <h1 class="text-6xl md:text-8xl font-black mb-10 tracking-tighter">SOFT_<br><span class="text-pink-400">DREAM.</span></h1>
     <p class="text-2xl font-light opacity-60 leading-relaxed mb-16">
       Benvenuti nell'era del design tattile. Dove ogni forma invita al tocco e ogni ombra racconta la profondità del comfort digitale.
     </p>
     <div class="flex flex-wrap justify-center gap-10">
        <button class="soft-btn text-pink-500">Esplora</button>
        <button class="soft-btn text-blue-500">Contatti</button>
     </div>
  </div>

  <div class="mt-40 grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-6xl">
     <div class="glass-card p-10 text-center">
        <div class="text-5xl mb-6">🍭</div>
        <h3 class="font-black">Gommoso</h3>
     </div>
     <div class="glass-card p-10 text-center">
        <div class="text-5xl mb-6">☁️</div>
        <h3 class="font-black">Leggero</h3>
     </div>
     <div class="glass-card p-10 text-center">
        <div class="text-5xl mb-6">🫧</div>
        <h3 class="font-black">Trasparente</h3>
     </div>
  </div>
</body>
</html>`
  },
  {
    id: 'blueprint-architect',
    name: 'Blueprint Pro',
    category: 'Design (Tecnico)',
    icon: <Box className="w-5 h-5 text-blue-300" />,
    color: 'bg-[#0d47a1]',
    description: 'Estetica blueprint/tecnica. Linee di costruzione, griglie millimetrate, annotazioni a margine e un senso di precisione millimetrica.',
    code: `<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;800&display=swap" rel="stylesheet">
  <style>
    body { background: #0d47a1; color: rgba(255,255,255,0.8); font-family: 'JetBrains Mono', monospace; margin: 0; }
    
    .blueprint-bg {
      position: fixed; inset: 0; z-index: -1;
      background-image: 
        linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px);
      background-size: 40px 40px;
    }
    
    .tech-box {
      border: 1px solid rgba(255,255,255,0.4); padding: 50px;
      position: relative; overflow: hidden;
    }
    .tech-box::before {
      content: 'REF_042'; position: absolute; top: 0; right: 0; 
      background: rgba(255,255,255,0.2); padding: 4px 10px; font-size: 10px;
    }
    
    .dimension-line {
      position: relative; height: 1px; background: rgba(255,255,255,0.3); margin: 20px 0;
    }
    .dimension-line::before, .dimension-line::after {
      content: ''; position: absolute; top: -5px; width: 1px; height: 11px; background: rgba(255,255,255,0.8);
    }
    .dimension-line::after { right: 0; }
    
    .label { font-size: 10px; color: rgba(255,255,255,0.4); text-transform: uppercase; }
  </style>
</head>
<body class="p-10 md:p-32">
  <div class="blueprint-bg"></div>

  <header class="mb-40 flex justify-between items-start">
     <div>
        <h1 class="text-7xl font-black leading-none mb-4 italic">PROJECT_CORE</h1>
        <p class="label">Specification phase / Revision 2.0.1</p>
     </div>
     <div class="w-32 h-32 border-2 border-white flex items-center justify-center p-4">
        <svg viewBox="0 0 100 100" class="stroke-white fill-none opacity-40"><path d="M10 10 L90 90 M10 90 L90 10 M50 0 L50 100 M0 50 L100 50"/></svg>
     </div>
  </header>

  <main class="grid grid-cols-1 md:grid-cols-2 gap-20">
     <div class="tech-box">
        <div class="label mb-10">Section_A</div>
        <h2 class="text-4xl font-bold mb-8 underline decoration-double">Il Piano d'Azione.</h2>
        <p class="font-light leading-[2] text-sm">
          Ogni progetto inizia con una linea. Qui la trasformiamo in struttura, funzione e bellezza matematica. Non lasciamo nulla al caso.
        </p>
        <div class="dimension-line"></div>
        <div class="flex justify-between label"><span>240mm</span><span>Scale 1:10</span></div>
     </div>

     <div class="space-y-10">
        <div class="border border-white/20 p-10 hover:bg-white/5 transition-colors cursor-pointer">
           <h3 class="font-bold flex items-center gap-4"><span class="w-4 h-4 rounded-full border border-white"></span> STRUTTURA</h3>
           <p class="text-xs mt-4 opacity-40">Analisi del carico visivo e bilanciamento dei pesi.</p>
        </div>
        <div class="border border-white/20 p-10 hover:bg-white/5 transition-colors cursor-pointer">
           <h3 class="font-bold flex items-center gap-4"><span class="w-4 h-4 rounded-full border border-white"></span> DINAMICA</h3>
           <p class="text-xs mt-4 opacity-40">Studio del movimento fluido e delle transizioni organiche.</p>
        </div>
     </div>
  </main>

  <footer class="mt-40 border-t border-white/20 pt-10 flex justify-between italic text-xs">
     <span>(C) ARCHI_LAB_2026</span>
     <span>CONFIDENTIAL_PLAN</span>
  </footer>
</body>
</html>`
  },
  {
    id: 'abstract-shapes-extreme',
    name: 'Forme Estreme',
    category: 'Art (Sperimentale)',
    icon: <Shapes className="w-5 h-5 text-purple-500" />,
    color: 'bg-[#121212]',
    description: 'Composizione ultra-dinamica. Cerchi forati, triangoli sfasati e una struttura che nega ogni griglia ortogonale.',
    code: `<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://fonts.googleapis.com/css2?family=Syne:wght@800&family=Space+Grotesk:wght@300;700&display=swap" rel="stylesheet">
  <style>
    body { background: #080808; color: #fff; font-family: 'Space Grotesk', sans-serif; overflow-x: hidden; margin: 0; }
    .syne { font-family: 'Syne', sans-serif; }
    
    .giant-shape {
      position: absolute; border: 2px solid rgba(255,255,255,0.1);
      transition: 1s cubic-bezier(0.19, 1, 0.22, 1);
    }
    
    .c-ring { width: 800px; height: 800px; border-radius: 50%; border: 100px solid rgba(255,255,255,0.03); top: -200px; left: -200px; }
    .t-poly { 
      width: 0; height: 0; border-left: 500px solid transparent; border-right: 500px solid transparent; 
      border-bottom: 800px solid rgba(255,255,255,0.02); position: absolute; bottom: -200px; right: -200px; transform: rotate(15deg);
    }
    
    .content-box {
      position: relative; z-index: 10; padding: 10vw;
    }
    
    .outline-text {
      color: transparent; -webkit-text-stroke: 1px #fff; opacity: 0.2;
    }
    
    .stagger { animation: staggerIn 1s forwards; opacity: 0; }
    @keyframes staggerIn { from { transform: translateY(50px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
  </style>
</head>
<body class="flex flex-col min-h-screen">
  <div class="giant-shape c-ring"></div>
  <div class="giant-shape t-poly"></div>

  <nav class="p-10 flex justify-between items-center z-50">
    <div class="syne text-4xl font-black uppercase tracking-widest">X_PERIMENT</div>
    <div class="flex gap-8 text-xs font-bold uppercase opacity-30">
       <span class="hover:opacity-100 cursor-pointer">Vision</span>
       <span class="hover:opacity-100 cursor-pointer">Method</span>
    </div>
  </nav>

  <main class="content-box flex-1 flex flex-col justify-center">
    <div class="stagger">
       <h1 class="syne text-[15vw] leading-[0.8] mb-10 uppercase italic">ROTTURA.</h1>
       <div class="outline-text syne text-[10vw] leading-none mb-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none">LIMITE_ZERO</div>
       <p class="text-3xl max-w-xl font-light opacity-50 mb-20 italic">
         "Distruggiamo la griglia per ritrovare il ritmo. La simmetria è solo un'abitudine che abbiamo deciso di dimenticare."
       </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-10 mt-auto">
       <div class="border-t border-white/20 pt-10">
          <span class="text-xs opacity-30 mb-4 block">PHASE_01</span>
          <h3 class="syne text-2xl uppercase">De-costruzione</h3>
       </div>
       <div class="border-t border-white/20 pt-10">
          <span class="text-xs opacity-30 mb-4 block">PHASE_02</span>
          <h3 class="syne text-2xl uppercase">Collisione</h3>
       </div>
       <div class="border-t border-white/20 pt-10">
          <span class="text-xs opacity-30 mb-4 block">PHASE_03</span>
          <h3 class="syne text-2xl uppercase">Sintesi</h3>
       </div>
    </div>
  </main>
</body>
</html>`
  }
];

export default function App() {
  const [activeTemplate, setActiveTemplate] = useState(ARTISTIC_TEMPLATES[0]);
  const [code, setCode] = useState(ARTISTIC_TEMPLATES[0].code);
  const [previewKey, setPreviewKey] = useState(0); 
  const [viewMode, setViewMode] = useState<'desktop' | 'mobile'>('desktop');
  const [zoom, setZoom] = useState(1.0); 
  const [copied, setCopied] = useState(false);
  const [showEditor, setShowEditor] = useState(true); 

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 1440) setZoom(0.7);
      else if (width < 1600) setZoom(0.85);
      else setZoom(1.0);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleTemplateSelect = (t: typeof ARTISTIC_TEMPLATES[0]) => {
    setActiveTemplate(t);
    setCode(t.code);
    setPreviewKey(prev => prev + 1);
  };

  return (
    <div className="h-screen bg-[#050505] flex flex-col font-sans text-zinc-400 overflow-hidden selection:bg-white selection:text-black">
      
      {/* 1. TOP BAR: REFINED & PROFESSIONAL */}
      <header className="h-[96px] shrink-0 bg-[#080808] border-b border-white/5 flex items-center px-10 gap-16 z-50">
        <div className="flex items-center gap-6">
          <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-black shadow-[0_0_50px_rgba(255,255,255,0.15)]">
            <Brush className="w-8 h-8" />
          </div>
          <div>
            <h1 className="text-[12px] font-black tracking-[0.5em] text-white uppercase leading-none italic">ARTISAN STUDIO</h1>
            <p className="text-[9px] font-bold text-zinc-700 uppercase tracking-[0.4em] mt-3 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-zinc-800" /> Web Designer v6.0
            </p>
          </div>
        </div>

        {/* SELECTOR: CLEAR BUTTONS */}
        <div className="flex items-center gap-4 bg-white/5 p-2 rounded-[24px] border border-white/5 overflow-x-auto flex-1 custom-scrollbar px-4 whitespace-nowrap scroll-smooth min-w-0 pb-3">
          {ARTISTIC_TEMPLATES.map((t) => (
            <button
              key={t.id}
              onClick={() => handleTemplateSelect(t)}
              className={`px-8 py-3.5 rounded-[18px] transition-all text-[11px] font-black uppercase tracking-[0.15em] flex items-center gap-3 ${
                activeTemplate.id === t.id 
                ? 'bg-white text-black shadow-2xl scale-105' 
                : 'text-zinc-600 hover:text-white'
              }`}
            >
              {t.icon}
              {t.name}
            </button>
          ))}
        </div>

        <div className="ml-auto flex items-center gap-10">
           <div className="flex items-center gap-2 bg-white/5 p-1 rounded-xl">
              <button onClick={() => setViewMode('desktop')} className={`p-3 rounded-lg ${viewMode === 'desktop' ? 'bg-white text-black' : 'text-zinc-600'}`}><Monitor className="w-5 h-5" /></button>
              <button onClick={() => setViewMode('mobile')} className={`p-3 rounded-lg ${viewMode === 'mobile' ? 'bg-white text-black' : 'text-zinc-600'}`}><Smartphone className="w-5 h-5" /></button>
           </div>

           <button 
             onClick={() => { navigator.clipboard.writeText(code); setCopied(true); setTimeout(() => setCopied(false), 2000); }}
             className={`px-12 py-4.5 rounded-full text-[11px] font-black uppercase tracking-widest transition-all ${
               copied ? 'bg-green-600 border-green-600 text-white shadow-[0_0_30px_rgba(22,163,74,0.3)]' : 'bg-white text-black hover:bg-zinc-200'
             }`}
           >
             {copied ? 'Copiato!' : 'Prendi Codice'}
           </button>
        </div>
      </header>

      {/* 2. MAIN WORKSPACE */}
      <main className="flex-1 flex overflow-hidden">
        
        {/* EDITOR: MODERNO E LEGGIBILE (TESTO BIANCO SU SFONDO NERO) */}
        <div className={`${showEditor ? 'w-[42%]' : 'w-0'} h-full transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] bg-[#030303] border-r border-white/5 flex flex-col relative`}>
            <div className="h-14 flex items-center px-10 border-b border-white/5 justify-between shrink-0 bg-[#080808]">
               <div className="flex items-center gap-4">
                  <Terminal className="w-4 h-4 text-zinc-600" />
                  <span className="text-[10px] font-black text-zinc-600 uppercase tracking-widest italic">Source_Code_Inspector</span>
               </div>
            </div>
            <div className="flex-1 overflow-hidden relative">
              <textarea 
                spellCheck={false}
                value={code} 
                onChange={(e) => { setCode(e.target.value); setTimeout(() => setPreviewKey(prev => prev + 1), 100); }}
                className="w-full h-full bg-transparent p-12 text-[15px] leading-8 text-white font-mono outline-none resize-none selection:bg-zinc-800 caret-white custom-scrollbar"
                style={{ fontFamily: '"Fira Code", "Fira Mono", "JetBrains Mono", monospace' }}
              />
            </div>
            <button 
              onClick={() => setShowEditor(!showEditor)} 
              className="absolute top-1/2 -right-4 -translate-y-1/2 w-4 h-32 bg-white/10 rounded-full border border-white/5 hover:bg-white/20 z-50 shadow-2xl transition-all"
            />
        </div>

        {/* VISUALIZER: IL FOCUS */}
        <div className="flex-1 h-full bg-[#050505] flex flex-col relative overflow-hidden">
           {/* TOOLBAR ANTEPRIMA */}
           <div className="h-14 flex items-center px-10 border-b border-white/5 justify-between bg-black/50 backdrop-blur-3xl z-20 shadow-2xl">
              <div className="flex items-center gap-8">
                 <div className="flex items-center gap-4 text-zinc-500 uppercase tracking-[0.5em] text-[10px] font-black italic">
                    Render_Output
                 </div>
                 <div className="h-4 w-px bg-white/10" />
                 <div className="flex items-center gap-6 bg-white/5 px-6 py-2 rounded-xl border border-white/5">
                    <button onClick={() => setZoom(zoom - 0.1)} className="hover:text-white transition-colors"><Minus className="w-4 h-4" /></button>
                    <span className="text-[12px] font-black text-white italic min-w-[50px] text-center">{(zoom * 100).toFixed(0)}%</span>
                    <button onClick={() => setZoom(zoom + 0.1)} className="hover:text-white transition-colors"><Plus className="w-4 h-4" /></button>
                 </div>
              </div>

              <div className="flex items-center gap-6">
                 <button onClick={() => setPreviewKey(prev => prev + 1)} className="p-3 text-zinc-600 hover:text-white transition-all"><RefreshCcw className="w-4 h-4" /></button>
                 <button onClick={() => window.open('', '_blank')?.document.write(code)} className="p-3 text-zinc-600 hover:text-white transition-all"><Maximize2 className="w-4 h-4" /></button>
              </div>
           </div>

           {/* CANVAS: AREA DI VISUALIZZAZIONE GIGANTE */}
           <div className="flex-1 overflow-auto flex items-center justify-center p-24 no-scrollbar bg-[radial-gradient(#ffffff03_1.5px,transparent_1.5px)] bg-[size:100px_100px]">
              <div 
                style={{ transform: `scale(${zoom})`, transformOrigin: 'center center' }}
                className={`grow-0 shrink-0 transition-all duration-1000 ${
                  viewMode === 'desktop' 
                  ? 'w-[1440px] aspect-[16/10] border-[48px] border-[#0a0a0a] rounded-[100px]' 
                  : 'w-[430px] aspect-[9/19] border-[24px] border-[#0a0a0a] rounded-[84px]'
                } bg-white shadow-[0_200px_600px_-100px_rgba(0,0,0,1)] relative overflow-hidden`}
              >
                {viewMode === 'mobile' && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-10 bg-[#0a0a0a] rounded-b-[40px] z-[100] flex items-center justify-center">
                    <div className="w-20 h-2 bg-zinc-900 rounded-full" />
                  </div>
                )}
                <iframe key={previewKey+code.length} srcDoc={code} className="w-full h-full border-none pointer-events-auto" />
              </div>
           </div>
        </div>
      </main>

      <footer className="h-10 border-t border-white/5 flex items-center justify-between px-10 bg-[#080808] text-[9px] font-black text-zinc-900 uppercase tracking-[0.8em]">
        <span>Artisan_Production_Studio_v6</span>
        <div className="flex items-center gap-6 opacity-30">
           <span>Design: Artistic Contextual</span>
           <div className="w-2.5 h-2.5 rounded-full bg-current" />
        </div>
      </footer>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .custom-scrollbar::-webkit-scrollbar { width: 5px; height: 5px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.2); border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        ::-selection { background: #fff !important; color: #000 !important; }
        textarea { caret-color: #fff; line-height: 1.8; letter-spacing: 0.02em; }
        body { -webkit-font-smoothing: antialiased; }
      `}</style>
    </div>
  );
}
