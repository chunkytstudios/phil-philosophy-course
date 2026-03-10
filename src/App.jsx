import { useState, useEffect, useCallback } from 'react'
import { weeks, quizQuestions, schoolData } from './data.js'
import PhilChat from './PhilChat.jsx'
import duckImg from '/phil.png'

// ── localStorage helpers ──────────────────────────────────────
function loadState() {
  try {
    const s = localStorage.getItem('phil_v2')
    return s ? JSON.parse(s) : {}
  } catch { return {} }
}

function saveState(s) {
  try { localStorage.setItem('phil_v2', JSON.stringify(s)) } catch {}
}

// ── Section Card ──────────────────────────────────────────────
function SectionCard({ icon, label, defaultOpen = false, children }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="section-card">
      <div className={`section-header${open ? ' open' : ''}`} onClick={() => setOpen(o => !o)}>
        <div className="section-icon">{icon}</div>
        <div className="section-label">{label}</div>
        <div className={`section-toggle${open ? ' open' : ''}`}>▼</div>
      </div>
      {open && <div className="section-body">{children}</div>}
    </div>
  )
}

// ── Week Page ─────────────────────────────────────────────────
function WeekPage({ week, state, onStateChange }) {
  const wId = week.id
  const chk = state.checklists?.[wId] || {}
  const notes = state.notes?.[wId] || {}
  const thoughts = state.thoughts?.[wId] || {}
  const isComplete = state.completed?.[wId] || false

  function toggleCheck(idx) {
    onStateChange(prev => ({
      ...prev,
      checklists: { ...prev.checklists, [wId]: { ...(prev.checklists?.[wId] || {}), [idx]: !chk[idx] } }
    }))
  }

  function setNote(field, val) {
    onStateChange(prev => ({
      ...prev,
      notes: { ...prev.notes, [wId]: { ...(prev.notes?.[wId] || {}), [field]: val } }
    }))
  }

  function setThought(idx, val) {
    onStateChange(prev => ({
      ...prev,
      thoughts: { ...prev.thoughts, [wId]: { ...(prev.thoughts?.[wId] || {}), [idx]: val } }
    }))
  }

  function toggleComplete() {
    onStateChange(prev => ({
      ...prev,
      completed: { ...prev.completed, [wId]: !isComplete }
    }))
  }

  return (
    <div className="page-inner page-enter">
      {/* Header */}
      <div className="week-tag">Week {week.num} · {week.phase}</div>
      <div className="week-title">{week.title}</div>
      <div className="week-meta">
        Subject: <span>{week.subject}</span> &nbsp;·&nbsp; Theme: <span>{week.theme}</span>
      </div>

      {/* History */}
      <SectionCard icon="📜" label="The History" defaultOpen>
        <p className="prose">{week.history}</p>
      </SectionCard>

      {/* Philosophy */}
      <SectionCard icon="⚗️" label="The Philosophy" defaultOpen>
        {week.concepts.map((c, i) => (
          <div key={i} className="phil-concept">
            <div className="phil-concept-title">{c.title}</div>
            <p>{c.body}</p>
          </div>
        ))}
        <div style={{ marginTop: 16 }}>
          <div style={{ fontFamily: 'Cinzel, serif', fontSize: 10, letterSpacing: '0.18em', color: 'var(--gold-dim)', textTransform: 'uppercase', marginBottom: 10 }}>The Domino Effect</div>
          <div className="domino-chain">
            {week.domino.map((d, i) => (
              <div key={i} className="domino-item">
                <div className="domino-label">{d.label}</div>
                <div className="domino-text">{d.text}</div>
              </div>
            ))}
          </div>
        </div>
      </SectionCard>

      {/* Checklist */}
      <SectionCard icon="✓" label="Weekly Checklist">
        <ul className="checklist">
          {week.checklist.map((item, idx) => (
            <li
              key={idx}
              className={`checklist-item${chk[idx] ? ' checked' : ''}`}
              onClick={() => toggleCheck(idx)}
            >
              <div className="check-box">✓</div>
              <span className="check-text">{item}</span>
            </li>
          ))}
        </ul>
      </SectionCard>

      {/* Resources */}
      <SectionCard icon="📚" label="Referenced Resources">
        <ul className="resource-list">
          {week.resources.map((r, i) => (
            <li key={i} className="resource-item">
              <span className="resource-type">{r.type}</span>
              <span className="resource-text">{r.text}</span>
            </li>
          ))}
        </ul>
      </SectionCard>

      {/* Thought Prompts */}
      <SectionCard icon="🔍" label="Thought Prompts">
        {week.prompts.map((p, idx) => (
          <div key={idx}>
            <div className="prompt-card">
              <p className="prompt-text">{p}</p>
            </div>
            <label className="journal-label">Your Response to Prompt {idx + 1}</label>
            <textarea
              className="journal-textarea"
              placeholder="Write your thoughts here..."
              rows={4}
              value={thoughts[idx] || ''}
              onChange={e => setThought(idx, e.target.value)}
            />
          </div>
        ))}
      </SectionCard>

      {/* Notes */}
      <SectionCard icon="✏️" label="Personal Notes">
        <label className="journal-label">Your Notes & Reflections</label>
        <textarea
          className="journal-textarea"
          placeholder="Write your own notes, observations, disagreements, and insights here. This is your book."
          rows={7}
          value={notes.main || ''}
          onChange={e => setNote('main', e.target.value)}
        />
        <label className="journal-label" style={{ marginTop: 16 }}>Pragmatic Directive — What Will You Do This Week?</label>
        <textarea
          className="journal-textarea"
          placeholder="Write your specific action commitment for this week..."
          rows={3}
          value={notes.directive || ''}
          onChange={e => setNote('directive', e.target.value)}
        />
      </SectionCard>

      {/* Next Week Prep */}
      <SectionCard icon="→" label={`Preparation for ${week.nextWeek.title}`}>
        <div className="prep-preview"><p>{week.nextWeek.preview}</p></div>
        <div style={{ fontFamily: 'Cinzel, serif', fontSize: 9, letterSpacing: '0.2em', color: 'var(--gold-dim)', textTransform: 'uppercase', marginBottom: 10 }}>Before next week:</div>
        <div className="prep-actions">
          {week.nextWeek.actions.map((a, i) => <div key={i} className="prep-action">{a}</div>)}
        </div>
      </SectionCard>

      {/* Mark complete */}
      <button className={`complete-btn${isComplete ? ' done' : ''}`} onClick={toggleComplete}>
        {isComplete ? '✓ Week Complete — Well Done' : 'Mark This Week Complete'}
      </button>
    </div>
  )
}

// ── Quiz Page ─────────────────────────────────────────────────
function QuizPage({ state, onStateChange }) {
  const answers = state.quizAnswers || {}
  const [result, setResult] = useState(null)

  function selectOption(qi, oi) {
    onStateChange(prev => ({
      ...prev,
      quizAnswers: { ...prev.quizAnswers, [qi]: oi }
    }))
    setResult(null)
  }

  function calculate() {
    const scores = {}
    quizQuestions.forEach((q, qi) => {
      const ans = answers[qi]
      if (ans !== undefined) {
        const tag = q.options[ans].tag
        scores[tag] = (scores[tag] || 0) + 1
      }
    })
    const top = Object.entries(scores).sort((a, b) => b[1] - a[1])[0]
    const school = top ? (schoolData[top[0]] || schoolData.PRAGMATISM) : schoolData.PRAGMATISM
    setResult({ scores, school })
    setTimeout(() => document.getElementById('quiz-result')?.scrollIntoView({ behavior: 'smooth' }), 100)
  }

  return (
    <div className="page-inner page-enter">
      <h2 className="page-heading">The Grand Assessment</h2>
      <p className="prose">
        Keep a tally. Select the answer that most honestly reflects how you think.
        <strong> Be honest.</strong> If you lie here, you wasted all this time and learned nothing.
        At the end, your dominant philosophical school will be revealed.
      </p>

      {quizQuestions.map((q, qi) => (
        <div key={qi} className="quiz-question">
          <div className="quiz-q-text">{qi + 1}. {q.q}</div>
          <div className="quiz-options">
            {q.options.map((opt, oi) => (
              <div
                key={oi}
                className={`quiz-option${answers[qi] === oi ? ' selected' : ''}`}
                onClick={() => selectOption(qi, oi)}
              >
                <span className="quiz-letter">{String.fromCharCode(65 + oi)}</span>
                <span className="quiz-opt-text">{opt.text}</span>
              </div>
            ))}
          </div>
        </div>
      ))}

      <button className="btn-primary" onClick={calculate} style={{ width: '100%', justifyContent: 'center' }}>
        Calculate My Results →
      </button>

      {result && (
        <div id="quiz-result" className="quiz-result" style={{ marginTop: 28 }}>
          <div className="quiz-result-title">You are: {result.school.name}</div>
          <div className="quiz-result-subtitle">{result.school.subtitle}</div>
          <div className="quiz-score-grid">
            {Object.entries(result.scores).sort((a, b) => b[1] - a[1]).map(([tag, count]) => (
              <div key={tag} className="quiz-score-item">
                <div className="quiz-score-school">{tag}</div>
                <div className="quiz-score-count">{count}</div>
              </div>
            ))}
          </div>
          <div className="quiz-result-text">
            <strong>Your Diagnosis:</strong> {result.school.diagnosis}<br /><br />
            <strong>Your Danger:</strong> {result.school.danger}<br /><br />
            <strong>Your Challenge:</strong> {result.school.challenge}
          </div>
        </div>
      )}
    </div>
  )
}

// ── Cover Page ────────────────────────────────────────────────
function CoverPage({ onBegin, onJumpTo }) {
  return (
    <div className="cover-page">
      <div className="cover-inner">
        <div className="cover-ornament">In Memoriam · Dr. Michael Sugrue · 1957–2024</div>
        <img src={duckImg} alt="Phil" className="cover-duck" />
        <div className="cover-title">Finding the Gold<br />in Your Soul</div>
        <div className="cover-subtitle">A Beginner's Guide to Philosophy</div>
        <div className="cover-divider">
          <div className="cover-divider-line" />
          <div className="cover-divider-gem" />
          <div className="cover-divider-line" />
        </div>
        <div className="cover-dedication">
          <em>He didn't just teach history. He resurrected it.</em><br /><br />
          This course exists because of one man and how he helped me find myself after my identity and values were taken from me.<br /><br />
          <strong>Ruhe in Frieden, Professor.</strong>
        </div>
        <div className="cover-actions">
          <button className="btn-primary" onClick={onBegin}>Begin the Course →</button>
          <div className="cover-quick-links">
            <button className="btn-secondary" onClick={() => onJumpTo('week1')}>Jump to Week 1</button>
            <button className="btn-secondary" onClick={() => onJumpTo('quiz')}>Grand Assessment</button>
            <button className="btn-secondary" onClick={() => onJumpTo('afterword')}>Afterword</button>
          </div>
        </div>
      </div>
    </div>
  )
}

// ── Methodology Page ──────────────────────────────────────────
function MethodologyPage({ onBegin }) {
  return (
    <div className="page-inner page-enter">
      <h2 className="page-heading">The Methodology — How to Claim Your Inheritance</h2>
      <p className="prose">This is not a spectator sport. If you are here to passively consume information, close this tab. This course isn't intended to recite facts at a dinner party. This is so we can <strong>arm ourselves for the battle of life.</strong></p>
      <p className="prose">You are about to enter the "Great Conversation." It is a dialogue that has been going on for 3,000 years between the sharpest minds to ever walk the earth. They are arguing about you — about what it means to be human, what it means to suffer, and what it means to live a good life.</p>
      <p className="prose" style={{ fontStyle: 'italic', color: 'var(--gold-light)' }}>This course is designed to be a kiln. Heat and harden.</p>

      <div style={{ fontFamily: 'Cinzel, serif', fontSize: 11, letterSpacing: '0.2em', color: 'var(--gold-dim)', textTransform: 'uppercase', margin: '28px 0 16px' }}>The Protocol</div>

      {[
        { title: '1 — The Encounter', body: 'Each week, you will be assigned a specific lecture or reading. Do not just watch it. Interrogate it. When Plato speaks of justice, ask him if he has ever seen the inside of a modern courtroom.\n\nThe Rule: If you find yourself nodding along, you aren\'t thinking hard enough. Find the disagreement. That is where the work begins.' },
        { title: '2 — The Interrogation', body: 'You will find prompts in this workbook. These are not quizzes. They are mirrors. You must write the answers down.\n\nThe Rule: Thoughts in your head are like uncompiled code. Writing them down forces you to confront the errors in your own logic. If you cannot write it clearly, you do not understand it yet.' },
        { title: '3 — The Act', body: 'Philosophy that stays in a book is dead. It only becomes gold when applied to a "crack" in your reality.\n\nThe Rule: Every week ends with a Pragmatic Directive — an action you must take in the real world. You must prove the theory in the laboratory of your life.' }
      ].map((p, i) => (
        <div key={i} className="phase-block">
          <div className="phase-title">{p.title}</div>
          {p.body.split('\n\n').map((para, j) => <p key={j} className="phase-desc" style={{ marginBottom: j < 1 ? 10 : 0 }}>{para}</p>)}
        </div>
      ))}

      <div style={{ fontFamily: 'Cinzel, serif', fontSize: 11, letterSpacing: '0.2em', color: 'var(--gold-dim)', textTransform: 'uppercase', margin: '28px 0 16px' }}>The Trajectory</div>

      {[
        { title: 'Weeks 1–4 · The Break (Deconstruction)', desc: 'We will strip away the illusions. We will look at the cracks. We will use the Socratic method to identify what is broken in our definitions of success, love, and identity.', gold: false },
        { title: 'Weeks 5–8 · The Resin (Reconstruction)', desc: 'We will gather the materials for repair. We will look to the Stoics for resilience, the Existentialists for freedom, and the Logicians for structure.', gold: false },
        { title: 'Weeks 9–12 · The Gold (Application)', desc: 'We will highlight the scars. We will turn our philosophy into a public act. We will learn how to live unapologetically and contribute to the world.', gold: true }
      ].map((p, i) => (
        <div key={i} className="phase-block" style={p.gold ? { borderLeftColor: 'var(--gold)' } : {}}>
          <div className="phase-title" style={p.gold ? { color: 'var(--gold-light)' } : {}}>{p.title}</div>
          <p className="phase-desc">{p.desc}</p>
        </div>
      ))}

      <p className="prose" style={{ marginTop: 28, color: 'var(--gold-light)', fontStyle: 'italic' }}>The tools are now available. Let us begin.</p>
      <button className="nav-arrow" onClick={onBegin} style={{ marginTop: 16 }}>Begin Week 1 →</button>
    </div>
  )
}

// ── Afterword Page ────────────────────────────────────────────
function AfterwordPage() {
  return (
    <div className="page-inner page-enter">
      <h2 className="page-heading">Afterword</h2>
      {[
        'I was diagnosed with autism in 2023. It was vindicating. Masking was pushing me to the brink of insanity because when I laid awake at night I asked myself, "What does it mean when everyone likes me but nobody loves me?"',
        'This is why I highly value people being themselves unapologetically. I\'m the type of person where, when things break, I fix them. I debug them. Break them down and refactor them until they run.',
        'But people aren\'t code. You can\'t just "control-Z" and undo a bad year.',
        'I built this course because I realized that we are all walking around with cracks. We try to hide them. We try to pretend we are perfect and unbreakable, but we aren\'t.',
        <>There is a Japanese art form called <strong>Kintsugi</strong> I was introduced to in Singapore. When a bowl breaks, the artist doesn't throw it away. They put it back together with gold lacquer. They highlight the cracks instead of hiding them. The bowl becomes more beautiful because it was broken.</>,
        'That is what Philosophy is. It\'s the gold resin. It\'s the glue that holds us together when the world tries to shatter us, and it is exactly what identifies our uniqueness.'
      ].map((p, i) => <p key={i} className="prose">{p}</p>)}

      <div className="kintsugi-quote">
        Compassion is the recognition of commitment to rebuild what's broken.<br />
        Existentialism is the choice to pick up the pieces.<br />
        Logic is the act of fitting them back to form.<br />
        Stoicism is the heat that hardens the lacquer.<br />
        Pragmatism is the decision to put it on display for the world to see.
      </div>

      <p className="prose">It is really easy for this world to change you. It is really easy to go astray. But the one thing I've learned in my life is that to find your purpose, you have to contribute. Don't ever fail to keep on giving.</p>
      <p className="prose">You have spent the last 12 weeks gathering the materials. You have the gold. You have the tools.</p>
      <p className="prose" style={{ fontFamily: 'Cinzel, serif', fontSize: 20, color: 'var(--gold-light)', textAlign: 'center', marginTop: 36, letterSpacing: '0.04em', lineHeight: 1.6 }}>
        Now, look at your life. Look at the cracks.<br />
        Don't hide them. <em>Gild them.</em>
      </p>
      <p className="prose" style={{ textAlign: 'center', marginTop: 28, color: 'var(--muted)' }}>
        Go do something good. Because someone out there needs it.<br /><br />
        — Jacob Tipton
      </p>
    </div>
  )
}

// ── Main App ──────────────────────────────────────────────────
export default function App() {
  const [appState, setAppState] = useState(() => loadState())
  const [currentPage, setCurrentPage] = useState('cover')
  const [chatOpen, setChatOpen] = useState(false)
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false)
  const [saveVisible, setSaveVisible] = useState(false)

  // Save state with debounce
  const saveTimer = useRef(null)
  function updateState(updater) {
    setAppState(prev => {
      const next = typeof updater === 'function' ? updater(prev) : updater
      clearTimeout(saveTimer.current)
      saveTimer.current = setTimeout(() => {
        saveState(next)
        setSaveVisible(true)
        setTimeout(() => setSaveVisible(false), 1500)
      }, 600)
      return next
    })
  }

  // Progress
  const completedCount = Object.values(appState.completed || {}).filter(Boolean).length
  const progressPct = Math.round((completedCount / 12) * 100)

  // Current week for chat context
  const currentWeek = weeks.find(w => w.id === currentPage) || null

  function navigate(pageId) {
    setCurrentPage(pageId)
    setMobileSidebarOpen(false)
    window.scrollTo(0, 0)
  }

  // Determine what to render
  function renderPage() {
    if (currentPage === 'cover') return <CoverPage onBegin={() => navigate('methodology')} onJumpTo={navigate} />
    if (currentPage === 'methodology') return <MethodologyPage onBegin={() => navigate('week1')} />
    if (currentPage === 'quiz') return <QuizPage state={appState} onStateChange={updateState} />
    if (currentPage === 'afterword') return <AfterwordPage />

    const week = weeks.find(w => w.id === currentPage)
    if (week) return (
      <>
        <WeekPage week={week} state={appState} onStateChange={updateState} />
        <div className="week-nav" style={{ maxWidth: 820, padding: '0 0 40px' }}>
          <button className="nav-arrow" onClick={() => navigate(week.num > 1 ? `week${week.num - 1}` : 'methodology')}>
            ← {week.num > 1 ? `Week ${week.num - 1}` : 'Methodology'}
          </button>
          <span className="week-count">{week.num} / 12</span>
          <button className="nav-arrow" onClick={() => navigate(week.num < 12 ? `week${week.num + 1}` : 'quiz')}>
            {week.num < 12 ? `Week ${week.num + 1}` : 'Grand Assessment'} →
          </button>
        </div>
      </>
    )
    return null
  }

  const navItems = [
    { id: 'cover', label: 'Cover & Dedication', num: '◆' },
    { id: 'methodology', label: 'The Methodology', num: '◆' },
    ...weeks.map(w => ({ id: w.id, label: w.title, num: String(w.num).padStart(2, '0'), isWeek: true })),
    { id: 'quiz', label: 'Grand Assessment', num: '◆' },
    { id: 'afterword', label: 'Afterword', num: '◆' }
  ]

  const phaseLabels = { week1: 'Phase I — The Break', week5: 'Phase II — The Resin', week9: 'Phase III — The Gold', quiz: 'Final' }

  return (
    <div className="app-shell">
      {/* Mobile overlay */}
      <div className={`mobile-overlay${mobileSidebarOpen ? ' visible' : ''}`} onClick={() => setMobileSidebarOpen(false)} />

      {/* Mobile burger */}
      <button className="burger" onClick={() => setMobileSidebarOpen(o => !o)}>
        <span /><span /><span />
      </button>

      {/* Sidebar */}
      <aside className={`sidebar${mobileSidebarOpen ? ' mobile-open' : ''}`}>
        <div className="sidebar-header">
          <div className="sidebar-brand">
            <img src={duckImg} alt="Phil" className="sidebar-duck" />
            <div className="sidebar-brand-text">
              <div className="sidebar-brand-title">Finding the Gold<br />in Your Soul</div>
              <div className="sidebar-brand-sub">Beginner's Philosophy</div>
            </div>
          </div>
          <div className="sidebar-progress-wrap">
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${progressPct}%` }} />
            </div>
            <div className="progress-label">{completedCount} of 12 weeks complete</div>
          </div>
        </div>

        {/* Phil chat button */}
        <button className={`phil-chat-btn${chatOpen ? ' active' : ''}`} onClick={() => setChatOpen(o => !o)}>
          <img src={duckImg} alt="Phil" />
          <div className="phil-chat-btn-text">
            <div className="phil-chat-btn-title">Ask Phil</div>
            <div className="phil-chat-btn-sub">Your AI philosophy tutor</div>
          </div>
          <span className="live-dot" />
        </button>

        <nav className="sidebar-nav">
          {navItems.map((item, i) => {
            const phaseLabel = phaseLabels[item.id]
            return (
              <div key={item.id}>
                {phaseLabel && <div className="nav-section-label">{phaseLabel}</div>}
                {i === 0 && <div className="nav-section-label">Front Matter</div>}
                <div
                  className={`nav-item${currentPage === item.id ? ' active' : ''}${appState.completed?.[item.id] ? ' completed' : ''}`}
                  onClick={() => navigate(item.id)}
                >
                  <span className="nav-num">{item.num}</span>
                  <span className="nav-label">{item.label}</span>
                  {item.isWeek && (
                    <span className="nav-check">{appState.completed?.[item.id] ? '✓' : ''}</span>
                  )}
                </div>
              </div>
            )
          })}
        </nav>
      </aside>

      {/* Main */}
      <main className="main-content">
        <div className="page-scroll">
          {renderPage()}
        </div>
      </main>

      {/* Phil Chat Panel */}
      <PhilChat
        isOpen={chatOpen}
        onClose={() => setChatOpen(false)}
        currentWeek={currentWeek}
        duckSrc={duckImg}
      />

      {/* Save toast */}
      <div className={`save-toast${saveVisible ? ' visible' : ''}`}>Saved</div>
    </div>
  )
}
