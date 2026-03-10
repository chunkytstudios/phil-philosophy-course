import { useState, useRef, useEffect } from 'react'

const SYSTEM_PROMPT = `You are Phil, the philosophy duck — the AI tutor and companion for "Finding the Gold in Your Soul," a 12-week beginner's philosophy course inspired by Dr. Michael Sugrue (1957–2024).

Your personality:
- You are warm, sharp, and a little Socratic — you ask good questions back
- You speak like a great teacher: clear, direct, occasionally provocative
- You have deep knowledge of all course material across all 12 weeks
- You quote the philosophers naturally — not as a citation machine, but as a conversationalist who has read them
- You connect abstract ideas to real life instantly
- You never talk down to beginners, but you also never oversimplify
- You carry the spirit of Dr. Sugrue: ideas are dangerous, alive, and worth fighting over

The course covers 12 weeks in three phases:
PHASE I — THE BREAK (Weeks 1–4): Plato & Aristotle (The Forms, Eudaimonia, Golden Mean), The Stoics & Buddha (Dichotomy of Control, Dukkha, Amor Fati), Jesus of Nazareth (Agape, The Beatitudes, Metanoia), Augustine & Aquinas (Ordo Amoris, Two Cities, Natural Law, Four Causes)
PHASE II — THE RESIN (Weeks 5–8): Descartes & Hume (Cogito Ergo Sum, Empiricism, Tabula Rasa), Kant (Categorical Imperative, Kingdom of Ends, Autonomy), Bentham & Mill (Hedonic Calculus, Higher/Lower Pleasures, Harm Principle), Kierkegaard (The Crowd is Untruth, Anxiety as Dizziness of Freedom, Leap of Faith)
PHASE III — THE GOLD (Weeks 9–12): Nietzsche (Master/Slave Morality, Will to Power, Ubermensch), Sartre & de Beauvoir (Existence Precedes Essence, Bad Faith, The Other), Foucault (Panopticon, Power/Knowledge, Discipline), William James & John Dewey (Cash Value of Truth, Meliorism, Will to Believe)

The course philosophy: This is a kiln — heat and harden. Philosophy is a contact sport. Ideas only become gold when applied to real life.

The author, Jacob Tipton, built this course because Dr. Sugrue helped him find himself after an identity crisis. He was diagnosed with autism in 2023. The course is built around the Japanese concept of Kintsugi — gilding your cracks with gold, not hiding them.

When a student asks a question:
1. Answer it directly and concisely first
2. Connect it to the course material (week, thinker, concept)
3. If relevant, ask ONE good Socratic question back to deepen their thinking
4. Keep responses under 250 words unless they specifically want depth
5. Never lecture unprompted — match the length and depth to what they asked

If they seem stuck or frustrated, be encouraging — this material is hard, and that's the point.
If they disagree with a philosopher, help them steelman both positions.
If they ask about resources, point them to the ones listed in the course.
If they ask something outside philosophy, gently redirect: "That's a bit outside my pond, but philosophically speaking..."

Current week context will be provided. Prioritize that week's content in your responses but draw from the full course when it enriches the answer.`

function formatMessage(text) {
  // Simple markdown-like formatting
  const lines = text.split('\n').filter(l => l.trim())
  return lines.map((line, i) => {
    // Bold **text**
    line = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    // Italic *text*
    line = line.replace(/\*(.*?)\*/g, '<em>$1</em>')
    return `<p key="${i}">${line}</p>`
  }).join('')
}

export default function PhilChat({ isOpen, onClose, currentWeek, duckSrc }) {
  const [messages, setMessages] = useState([
    {
      role: 'phil',
      content: `Hello, scholar. I'm Phil — your guide through the Great Conversation.\n\nAsk me anything about the course, a philosopher, an idea that's confusing you, or how to apply this week's material to your actual life.\n\nWhat's on your mind?`
    }
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isLoading])

  useEffect(() => {
    if (isOpen) setTimeout(() => inputRef.current?.focus(), 400)
  }, [isOpen])

  const weekContext = currentWeek
    ? `The student is currently on ${currentWeek.title} (Week ${currentWeek.num}): ${currentWeek.subject} — Theme: ${currentWeek.theme}.`
    : 'The student is browsing the course overview.'

  const suggestions = currentWeek ? [
    `What is ${currentWeek.concepts?.[0]?.title?.split('(')[0]?.trim()}?`,
    `How do I apply this week to my life?`,
    `What did Dr. Sugrue say about this?`,
  ] : [
    'Where should I start?',
    'What is philosophy actually for?',
    'Who was Dr. Sugrue?',
  ]

  async function sendMessage(text) {
    if (!text.trim() || isLoading) return

    const userMsg = { role: 'user', content: text }
    const newMessages = [...messages, userMsg]
    setMessages(newMessages)
    setInput('')
    setIsLoading(true)

    // Build API messages — exclude the initial greeting from history sent to API
    const apiMessages = newMessages
      .filter((m, i) => !(i === 0 && m.role === 'phil')) // skip initial greeting
      .map(m => ({
        role: m.role === 'phil' ? 'assistant' : 'user',
        content: m.content
      }))

    try {
      // Uses Netlify serverless function proxy — API key stays server-side
      const response = await fetch('/.netlify/functions/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          system: SYSTEM_PROMPT + '\n\n' + weekContext,
          messages: apiMessages
        })
      })

      const data = await response.json()
      
      if (data.error) throw new Error(data.error)
      
      const reply = data.content?.[0]?.text || "I seem to have lost my train of thought. Try asking again."
      setMessages(prev => [...prev, { role: 'phil', content: reply }])
    } catch (err) {
      setMessages(prev => [...prev, {
        role: 'phil',
        content: `Something went wrong: ${err.message || 'Unknown error'}. Make sure ANTHROPIC_API_KEY is set in your Netlify environment variables.`
      }])
    } finally {
      setIsLoading(false)
    }
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage(input)
    }
  }

  return (
    <div className="chat-overlay" style={{ pointerEvents: isOpen ? 'all' : 'none' }}>
      <div
        className={`chat-backdrop ${isOpen ? 'visible' : ''}`}
        onClick={onClose}
      />
      <div className={`chat-panel ${isOpen ? 'open' : ''}`}>
        {/* Header */}
        <div className="chat-header">
          <img src={duckSrc} alt="Phil" className="chat-header-duck" />
          <div className="chat-header-info">
            <div className="chat-header-name">Phil — Your Philosophy Tutor</div>
            <div className="chat-header-status">
              <span className="status-dot" />
              <span>Ask me anything about the course</span>
            </div>
          </div>
          <button className="chat-close" onClick={onClose}>×</button>
        </div>

        {/* Context badge */}
        {currentWeek && (
          <div className="chat-context-badge">
            <span>Now Reading:</span>
            Week {currentWeek.num} — {currentWeek.title}
          </div>
        )}

        {/* Messages */}
        <div className="chat-messages">
          {messages.map((msg, i) => (
            <div key={i} className={`chat-msg ${msg.role}`}>
              <div className="chat-avatar">
                {msg.role === 'phil'
                  ? <img src={duckSrc} alt="Phil" />
                  : <span>✦</span>
                }
              </div>
              <div
                className="chat-bubble"
                dangerouslySetInnerHTML={{ __html: formatMessage(msg.content) }}
              />
            </div>
          ))}

          {isLoading && (
            <div className="chat-msg phil">
              <div className="chat-avatar">
                <img src={duckSrc} alt="Phil" />
              </div>
              <div className="chat-bubble">
                <div className="chat-typing">
                  <div className="typing-dot" />
                  <div className="typing-dot" />
                  <div className="typing-dot" />
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="chat-input-area">
          {messages.length <= 1 && (
            <div className="chat-suggestions">
              {suggestions.map((s, i) => (
                <button key={i} className="chat-suggestion" onClick={() => sendMessage(s)}>
                  {s}
                </button>
              ))}
            </div>
          )}
          <div className="chat-input-row">
            <textarea
              ref={inputRef}
              className="chat-input"
              placeholder="Ask Phil anything..."
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              rows={1}
            />
            <button
              className="chat-send"
              onClick={() => sendMessage(input)}
              disabled={isLoading || !input.trim()}
            >
              →
            </button>
          </div>
          <div className="chat-disclaimer">
            Phil is powered by Claude AI · Answers are grounded in course material
          </div>
        </div>
      </div>
    </div>
  )
}
