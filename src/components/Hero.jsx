import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { HiArrowRight, HiCode, HiKey, HiLightningBolt } from 'react-icons/hi';

function MatrixRain() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const chars = 'あいうえおかきくけこアイウエオカキクケコ翻訳語言ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = Array(columns).fill(1);

    const draw = () => {
      ctx.fillStyle = 'rgba(3, 7, 18, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'rgba(59, 130, 246, 0.15)';
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 45);
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 opacity-40" />;
}

function TypewriterText({ text, className, delay = 0 }) {
  const [displayed, setDisplayed] = useState('');
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timeout);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const interval = setInterval(() => {
      if (i <= text.length) {
        setDisplayed(text.slice(0, i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 30);
    return () => clearInterval(interval);
  }, [started, text]);

  return (
    <span className={className}>
      {displayed}
      {started && displayed.length < text.length && (
        <span className="animate-pulse text-blue-400">▊</span>
      )}
    </span>
  );
}

export default function Hero() {
  const [currentDemo, setCurrentDemo] = useState(0);

  const demos = [
    {
      input: 'The patient presented with acute myocardial infarction',
      generic: 'El paciente presentó con infarto agudo de miocardio',
      specialist: 'El paciente se presentó con infarto agudo de miocardio con elevación del segmento ST',
      model: 'Medical EN→ES',
      genericLabel: 'Generic API',
      issue: '❌ Missing critical clinical context',
      win: '✓ Clinically precise — includes ST-elevation detail',
    },
    {
      input: 'Force majeure clause shall supersede all prior obligations',
      generic: '力不可抗拒条款将取代所有先前义务',
      specialist: '不可抗力条款应优先于所有先前约定的义务',
      model: 'Legal EN→ZH',
      genericLabel: 'Generic API',
      issue: '❌ Informal, legally imprecise phrasing',
      win: '✓ Proper legal terminology — court-admissible',
    },
    {
      input: 'The recursive function exceeds the stack frame allocation',
      generic: '再帰関数がスタックフレームの割り当てを超えています',
      specialist: '再帰関数がスタックフレームの割り当て上限を超過しました',
      model: 'Technical EN→JA',
      genericLabel: 'Generic API',
      issue: '❌ Acceptable but imprecise for engineers',
      win: '✓ Exact technical terminology — engineer-approved',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDemo((prev) => (prev + 1) % demos.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <MatrixRain />
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950/60 via-gray-950/80 to-gray-950"></div>
      
      {/* Radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-blue-600/10 rounded-full blur-[120px]"></div>

      <div className="section-container relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm mb-8"
          >
            <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
            <span>The engine behind WindyWord · WindyChat · WindyTraveler · WindyClone</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 leading-[0.95]"
          >
            2,000 Specialist Translators.
            <br />
            <span className="gradient-text">Not One Generic Model.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-400 mb-16 max-w-4xl mx-auto leading-relaxed"
          >
            Purpose-built models for every language pair on Earth. Medical. Legal. Technical. 
            Each one trained on millions of domain-specific documents.{' '}
            <span className="text-white font-semibold">Google Translate uses one model for everything. We use 2,000.</span>
          </motion.p>

          {/* Live Translation Comparison Demo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-16"
          >
            <div className="inline-block bg-gray-900/70 border border-gray-800 rounded-2xl p-6 md:p-8 backdrop-blur-sm max-w-4xl w-full text-left">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <HiLightningBolt className="text-yellow-400" size={16} />
                  <span className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Live Comparison</span>
                </div>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentDemo}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-xs px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full border border-purple-500/30"
                  >
                    {demos[currentDemo].model}
                  </motion.span>
                </AnimatePresence>
              </div>

              {/* Input */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`input-${currentDemo}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-sm text-gray-500 mb-2">Input</p>
                  <p className="text-white font-mono text-sm md:text-base mb-6 bg-gray-950/50 p-3 rounded-lg border border-gray-800">
                    "{demos[currentDemo].input}"
                  </p>

                  <div className="grid md:grid-cols-2 gap-4">
                    {/* Generic */}
                    <div className="bg-red-950/20 border border-red-500/20 rounded-xl p-4">
                      <p className="text-xs text-red-400/60 uppercase tracking-wider font-semibold mb-2">{demos[currentDemo].genericLabel}</p>
                      <p className="text-gray-300 font-mono text-sm mb-3">{demos[currentDemo].generic}</p>
                      <p className="text-xs text-red-400">{demos[currentDemo].issue}</p>
                    </div>

                    {/* WindyTranslate */}
                    <div className="bg-green-950/20 border border-green-500/20 rounded-xl p-4">
                      <p className="text-xs text-green-400/60 uppercase tracking-wider font-semibold mb-2">WindyTranslate {demos[currentDemo].model}</p>
                      <p className="text-gray-100 font-mono text-sm mb-3">{demos[currentDemo].specialist}</p>
                      <p className="text-xs text-green-400">{demos[currentDemo].win}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Demo dots */}
              <div className="flex justify-center space-x-2 mt-6">
                {demos.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentDemo(i)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      i === currentDemo ? 'bg-blue-400 w-6' : 'bg-gray-700 hover:bg-gray-600'
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <a href="#api" className="btn-primary flex items-center space-x-2 text-lg px-8 py-4">
              <HiCode size={22} />
              <span>Start Building</span>
            </a>
            <a href="#demo" className="btn-secondary flex items-center space-x-2 text-lg px-8 py-4">
              <HiKey size={22} />
              <span>Get Free API Key</span>
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            {[
              { value: '2,084', label: 'Specialist Models', sub: 'Not generic. Purpose-built.' },
              { value: '127', label: 'Languages', sub: 'Every major pair covered.' },
              { value: '96.3%', label: 'Domain Accuracy', sub: 'vs 74% generic models.' },
              { value: '<50ms', label: 'Avg Latency', sub: 'Edge-cached worldwide.' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-extrabold gradient-text">{stat.value}</div>
                <div className="text-sm font-semibold text-gray-300 mt-1">{stat.label}</div>
                <div className="text-xs text-gray-600 mt-1">{stat.sub}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
