export const weeks = [
  {
    id: 'week1', num: 1, title: 'The Architects',
    subject: 'Plato & Aristotle', theme: 'Reason vs. The Mob', phase: 'The Break',
    history: `2,400 years ago, Athens was burning. They had just lost a massive war. Their democracy had turned into a mob. And that mob killed the only man who was actually trying to help them — Socrates. So, Plato and Aristotle didn't just sit around in togas thinking about clouds because they were bored. They were terrified. They saw their civilization collapsing because it had no foundation. They realized that if "Right and Wrong" is just a popularity contest, society dies. They had to build a new system. They had to prove that there is a Best Way to live, and that it's not just a matter of opinion.`,
    concepts: [
      { title: 'The Forms (The Blueprint)', body: 'Plato looked at the chaos of the world and said, "This can\'t be all there is." He believed there was a perfect blueprint for everything — Justice, Beauty, The Good. Think of it like music. You know when a guitar is out of tune. That "perfect chord" is the Form. Our job is to tune our messy lives until they match that perfect frequency.' },
      { title: 'Eudaimonia (Not Just "Happy")', body: 'Aristotle was the practical one. He said the goal of life is Eudaimonia — Flourishing. It\'s the feeling you get when you are doing exactly what you were built to do. A knife is "happy" when it cuts well. A human is "happy" when they use Reason to act virtuously.' },
      { title: 'The Golden Mean', body: 'How do you act virtuously? You find the balance. Courage isn\'t "having no fear" — that\'s just being rash. And it\'s not being terrified either — that\'s cowardice. Courage is the Mean right in the middle. You don\'t need to be a saint; you just need to stop swinging to extremes.' }
    ],
    domino: [
      { label: 'Domino', text: 'Aristotle defined logic and "Natural Law."' },
      { label: 'Fall', text: 'Rome adopted this framework as its intellectual foundation.' },
      { label: 'Result', text: 'This created the foundation for individual rights. Without these two, we don\'t have human rights — we just have "Might makes Right."' }
    ],
    checklist: [
      'Watch: Dr. Michael Sugrue — Plato\'s Symposium',
      'Listen: Philosophize This! (Episodes 1–2)',
      'Complete the Mean Audit for 3 areas of your life',
      'Practice Teleological Living for 24 hours',
      'Write your responses in the Notes section',
      'Read: Stanford Encyclopedia of Philosophy (Plato)'
    ],
    resources: [
      { type: 'Lecture', text: 'Dr. Michael Sugrue: Plato\'s Symposium (YouTube)' },
      { type: 'Podcast', text: 'Philosophize This! — Episodes 1–2' },
      { type: 'Deep Dive', text: 'Stanford Encyclopedia of Philosophy — Plato' },
      { type: 'Breakdown', text: 'Carneades.org (YouTube)' }
    ],
    prompts: [
      'Where in your life are you currently swinging to extremes? What would the Golden Mean actually look like — not in theory, but for you, this week?',
      'Aristotle says a human "flourishes" when they use Reason to act virtuously. What does flourishing feel like in your body? Have you ever felt it? When?',
      'Plato believed we have a memory of perfect Forms — that we recognize goodness because we\'ve known it before. Does that resonate with you, or do you find it absurd? Why?'
    ],
    nextWeek: {
      title: 'The Fortress — Stoics & The Buddha',
      preview: 'Next week we leave the perfect blueprints behind and confront the chaos of Empire. If you can\'t fix the world, how do you fix yourself? The art of detachment awaits.',
      actions: ['Find Meditations by Marcus Aurelius (Gregory Hays translation)', 'Identify one thing that stressed you out this week', 'Consider: what comforts would you be afraid to lose?']
    }
  },
  {
    id: 'week2', num: 2, title: 'The Fortress',
    subject: 'The Stoics & The Buddha', theme: 'Dealing with Chaos', phase: 'The Break',
    history: `We live in a world of 24-hour news cycles, global wars, and economic crashes. You can't stop a recession. Epictetus was a slave. Marcus Aurelius was an Emperor. They both came to the exact same conclusion. This week is about The Art of Detachment — building a fortress inside your head so that when the world catches fire, you don't burn with it.`,
    concepts: [
      { title: 'The Dichotomy of Control', body: 'There are two buckets in life. Bucket A: Things up to us (Opinion, Motivation, Desire, Aversion). Bucket B: Things not up to us (Body, Property, Reputation). You control your actions, not the outcome. Suffering happens when you try to control Bucket B.' },
      { title: 'Dukkha (Attachment)', body: 'The Buddha realized that life is Dukkha — suffering. Why? Because of Tanha — Craving. We crave permanence in a world that is temporary. The only way out is to stop gripping the steering wheel so tight.' },
      { title: 'Amor Fati (Love Your Fate)', body: 'Don\'t just "tolerate" the bad stuff. Love it. The traffic jam? Good — practice patience. Lost your job? Good — rebuild better. Marcus Aurelius: Fire turns everything thrown into it into flame. Treat every obstacle as fuel.' }
    ],
    domino: [
      { label: 'Domino', text: 'The Stoics argued every human has a spark of divine reason ("Logos"), regardless of status.' },
      { label: 'Fall', text: 'The Roman Empire ran on Stoic principles for 500 years of relative stability.' },
      { label: 'Result', text: '"All humans share the same Reason" paved the way for Universal Human Rights.' }
    ],
    checklist: [
      'Watch: Dr. Michael Sugrue — Marcus Aurelius & The Stoics',
      'Read: Meditations (Gregory Hays translation)',
      'Complete the Control Map T-chart for your biggest stressor',
      'Practice Voluntary Discomfort for 24 hours',
      'Read: Ryan Holiday — Daily Stoic',
      'Journal reflections in the Notes section'
    ],
    resources: [
      { type: 'Lecture', text: 'Dr. Michael Sugrue: Marcus Aurelius & The Stoics' },
      { type: 'Book', text: 'Meditations — Marcus Aurelius, Gregory Hays translation' },
      { type: 'Breakdown', text: 'Ryan Holiday — Daily Stoic (modern applications)' }
    ],
    prompts: [
      'Map your biggest stressor onto the Dichotomy of Control. What is in Bucket A? What is in Bucket B — and why are you emotionally investing in things you cannot change?',
      'The Buddha says craving causes suffering. What are you currently gripping too tightly? What would it feel like to open your hand?',
      'Amor Fati: What is the hardest thing that happened to you recently? Write three ways that specific difficulty is, or could become, fuel.'
    ],
    nextWeek: {
      title: 'The Radical Heart — Jesus of Nazareth',
      preview: 'Rome had a brilliant brain but no heart. A carpenter from the edge of the empire offered something different — an operating system built on Compassion rather than Power.',
      actions: ['Read: The Sermon on the Mount (Matthew 5–7) as a philosophical manifesto', 'Think of someone you consider an "enemy"', 'Watch: The Bible Project — "Agape" (YouTube)']
    }
  },
  {
    id: 'week3', num: 3, title: 'The Radical Heart',
    subject: 'Jesus of Nazareth', theme: 'The Inversion of Power', phase: 'The Break',
    history: `Rome was a machine built on "Might makes Right." It had a brilliant Brain, but no Heart. Eventually, that obsession with Power corrupted the system. Then, a carpenter from the edge of the Empire offered a different way. He argued that a society built only on Power is doomed. He introduced a new operating system based on Compassion.`,
    concepts: [
      { title: 'Agape (Not "Like")', body: 'The Greeks were precise about love. Eros (Romance), Philia (Friendship). But Jesus used Agape. Agape is not a feeling — it is a decision. An act of the will to seek the good of another person, even if they are your enemy. It is action, not emotion.' },
      { title: 'The Inversion (The Beatitudes)', body: 'Who wins today? The rich, the strong, the conquerors. Jesus flipped the pyramid upside down. "Blessed are the meek." He argued the people at the bottom — the ones Rome used as doormats — were actually closest to Truth. Power blinds you. Suffering opens your eyes.' },
      { title: 'Metanoia (The U-Turn)', body: 'Usually translated as "Repentance," but Metanoia literally means "Changing your mind." The realization that you have been walking off a cliff for 20 years, and you need to stop, turn 180 degrees, and walk the other way.' }
    ],
    domino: [
      { label: 'Domino', text: 'Rome was obsessed with Justice (Power/Order). Jesus introduced Compassion (Suffering with).' },
      { label: 'Impact', text: 'The idea that every soul — from Emperor to leper — has infinite value destroyed the logic of the Roman system.' },
      { label: 'Result', text: '"All men are created equal" is a spiritual assumption that comes directly from this week.' }
    ],
    checklist: [
      'Read: The Sermon on the Mount (Matthew 5–7) — as a manifesto, not a scripture',
      'Watch: The Bible Project (YouTube) — "Agape"',
      'Complete the Enemy Audit — write 3 true, good things about someone you dislike',
      'Perform one act of Secret Service this week — and tell no one',
      'Journal your experience in the Notes section'
    ],
    resources: [
      { type: 'Source', text: 'The Sermon on the Mount — Matthew 5–7. Read it like a manifesto.' },
      { type: 'Breakdown', text: 'The Bible Project (YouTube) — "Agape" episode' }
    ],
    prompts: [
      'Agape is a decision, not a feeling. Can you think of a time you acted with Agape — doing something good for someone even when you didn\'t feel like it? What did that cost you? What did it produce?',
      'The Beatitudes invert the power structure. "Blessed are the meek." Does this feel like wisdom or naivety to you? Who in your life embodies this kind of strength?',
      'The Secret Service exercise requires anonymity. Why is that so important? What does your impulse to get credit tell you about your motivations?'
    ],
    nextWeek: {
      title: 'The Collapse — Augustine & Aquinas',
      preview: 'The "Eternal City" is burning. Augustine stands in the ashes and turns inward. Then Aquinas, 800 years later, attempts a synthesis of Faith and Reason that will green-light the scientific revolution.',
      actions: ['List your top 3 anxieties right now', 'Consider: what do you love most, and in what order?', 'Read: Confessions by St. Augustine (Book X) — optional but powerful']
    }
  },
  {
    id: 'week4', num: 4, title: 'The Collapse & The Synthesis',
    subject: 'Augustine & Aquinas', theme: 'Desire, Disorder, Faith & Reason', phase: 'The Break',
    history: `By 410 AD, the unthinkable happened: The Visigoths sacked Rome. Augustine stood in the ashes and realized that no political state can save you. You must turn inward. Then, 800 years later, Aquinas stepped into a war between Faith and Reason — and refused to choose sides.`,
    concepts: [
      { title: 'Ordered Love / Ordo Amoris', body: 'Sin isn\'t just "breaking rules." Sin is Disordered Love. It\'s okay to love your job. The problem is the ranking. If you love money more than your family, you destroy your family. Virtue is simply loving things in the correct order.' },
      { title: 'The Two Cities', body: 'Two "cities" fight for your soul. The City of Man: driven by love of self (Pride, Power, Wealth) — this city always falls. The City of God: driven by love of Truth and others. You have to decide which city you are actually a citizen of.' },
      { title: 'Natural Law & The Four Causes', body: 'Aquinas: morality is written into the fabric of reality. Just as there are physical laws, there are moral laws. And to understand anything, ask: Material Cause (what is it made of?), Formal Cause (what is its structure?), Efficient Cause (who made it?), Final Cause (what is its PURPOSE?).' }
    ],
    domino: [
      { label: 'Domino', text: 'Aquinas validated Reason — studying the natural world is not a sin.' },
      { label: 'Impact', text: 'This gave the "Green Light" for science in the West.' },
      { label: 'Result', text: 'This laid the foundation for the scientific revolution.' }
    ],
    checklist: [
      'Read: Confessions by St. Augustine — Book X (on Memory)',
      'Listen: Pints with Aquinas (Podcast) — Natural Law episodes',
      'Complete the Love Audit — trace what you love underneath your anxieties',
      'Practice the Vow — keep one rule aligned with your Higher Good for 3 days',
      'Run the Four Causes on one frustrating situation',
      'Journal in the Notes section'
    ],
    resources: [
      { type: 'Source', text: 'Summa Theologica — Aquinas, Treatise on Law' },
      { type: 'Podcast', text: 'Pints with Aquinas — Natural Law episodes' },
      { type: 'Source', text: 'Confessions — Augustine, Book X on Memory' }
    ],
    prompts: [
      'Augustine says anxiety comes from loving temporary things as if they were eternal. Look at your 3 biggest anxieties. What is the disordered love underneath each one?',
      'The Four Causes applied to yourself: What are you made of? What is your structure/character? What drives you? And — hardest of all — what are you FOR?',
      'Two Cities: when completely honest with yourself, which city do you spend most of your time building? What does your daily life actually reveal about your priorities?'
    ],
    nextWeek: {
      title: 'The Crisis of Truth — Descartes & Hume',
      preview: 'Everything you know might be a lie. In the 1600s, Europe had a nervous breakdown. Descartes tried to find one thing he couldn\'t doubt. Hume burned the whole house down.',
      actions: ['Read: Meditations on First Philosophy — Descartes, Meditations 1 & 2', 'Try a 24-hour media fast this week as a preview', 'Pick one "Absolute Truth" you believe in, ready to interrogate it']
    }
  },
  {
    id: 'week5', num: 5, title: 'The Crisis of Truth',
    subject: 'Descartes & Hume', theme: 'Rationalism vs. Empiricism', phase: 'The Resin',
    history: `By the 1600s, Europe was having a nervous breakdown. The Church said the Earth was the center of the universe. Science said otherwise. If the smartest men in history were wrong about gravity, what else were they wrong about? We needed a restart. Descartes tried to find one thing he couldn't doubt. Hume came along later and burned the whole house down.`,
    concepts: [
      { title: 'Cogito Ergo Sum', body: 'Descartes decided to doubt everything. Eyes? No — dreams feel real. Body? No — phantom limb pain. Math? No — maybe a demon tricks you. He peeled the onion to one core: "I am doubting. Therefore, I am thinking. Therefore, I exist." Cogito Ergo Sum. The one bedrock truth.' },
      { title: 'Empiricism (The Blank Slate)', body: 'Hume laughed at Descartes: "Show me a thought without a sense." You can\'t. The mind is a Tabula Rasa. We know nothing except what we see, hear, smell, touch. Hume destroyed "Certainty." We don\'t even know if the sun will rise tomorrow; we just assume it because of habit.' }
    ],
    domino: [
      { label: 'Domino', text: 'Descartes split the world into Mind (Soul) and Matter (Body/Machine) — Dualism.' },
      { label: 'Impact', text: 'This allowed science to dissect the body without offending the Church.' },
      { label: 'Result', text: 'Created the modern problem of Consciousness. How does a non-physical thought move a physical arm? We still don\'t know.' }
    ],
    checklist: [
      'Read: Meditations on First Philosophy — Descartes, Meditations 1 & 2',
      'Watch: Dr. Michael Sugrue — Descartes lecture',
      'Watch: Crash Course Philosophy — Cartesian Skepticism',
      'Complete a 24-hour media fast and record what thoughts emerge',
      'Attack one "Absolute Truth" with Cartesian Doubt for 10 minutes'
    ],
    resources: [
      { type: 'Source', text: 'Meditations on First Philosophy — Descartes. Meditations 1 & 2 only.' },
      { type: 'Source', text: 'An Enquiry Concerning Human Understanding — David Hume' },
      { type: 'Lecture', text: 'Dr. Michael Sugrue: Descartes (YouTube)' },
      { type: 'Breakdown', text: 'Crash Course Philosophy — Cartesian Skepticism' }
    ],
    prompts: [
      'After the 24-hour media fast: which thoughts were actually yours? Which were just echoes of the feed? What surprised you?',
      'Cogito Ergo Sum — "I think, therefore I am." Is the self that thinks stable and unified, or does it feel like different voices competing? Who exactly is the "I" that is doubting?',
      'Pick one belief you attacked with Cartesian Doubt. Did it survive? If not, what replaces it? If yes, how does it feel to hold a belief that can withstand scrutiny?'
    ],
    nextWeek: {
      title: 'The Rule Maker — Immanuel Kant',
      preview: 'Hume\'s skepticism destroyed moral certainty. Kant set out to save it. He wanted a moral law as undeniable as 2+2=4 — one that didn\'t care about your feelings or consequences.',
      actions: ['Watch: Dr. Michael Sugrue — Kant\'s Moral Philosophy (before reading anything else)', 'Think of a recent "grey area" action you took', 'Watch: The School of Life on Kant (YouTube)']
    }
  },
  {
    id: 'week6', num: 6, title: 'The Rule Maker',
    subject: 'Immanuel Kant', theme: 'Duty (Deontology)', phase: 'The Resin',
    history: `Hume left us with a nightmare: if we can only trust our senses, we can't prove Right and Wrong exist. Ethics becomes just a feeling. This terrified Kant. He wanted to find a moral law as undeniable as 2+2=4 — a law that didn't care about your feelings, your religion, or the consequences. He found it in Duty.`,
    concepts: [
      { title: 'The Categorical Imperative', body: 'Most advice is "Hypothetical": If you want health, eat salad. Kant said Morality is Categorical — it has no "If." Run the Universalizability Test: "Can I make my action a universal law for everyone?" If everyone lied to get loans, promises wouldn\'t exist. The system crashes. Therefore, lying is logically forbidden. Always.' },
      { title: 'The Kingdom of Ends', body: '"Act so that you treat humanity, whether in your own person or in that of another, always as an end and never as a means only." Never use people. Humans have Reason, and Reason is the only thing in the universe with infinite value.' },
      { title: 'Autonomy (Self-Law)', body: 'If you follow the Bible, your parents, or the law, you aren\'t actually "Moral." You are just obedient. To be Moral, you must give the law to yourself — use your own Logic to recognize the Duty and choose to follow it. That is true Freedom.' }
    ],
    domino: [
      { label: 'Domino', text: 'Kant moved Morality from "God said so" to "Logic says so."' },
      { label: 'Impact', text: 'This created the secular foundation for Human Rights.' },
      { label: 'Result', text: 'The UN Declaration of Human Rights is essentially a Kantian document.' }
    ],
    checklist: [
      'Watch: Dr. Michael Sugrue — Kant\'s Moral Philosophy',
      'Watch: The School of Life — Immanuel Kant (YouTube)',
      'Read: Groundwork of the Metaphysics of Morals (start with the lecture)',
      'Run the Categorical Imperative on a recent grey-area action',
      'Practice 48-hour Radical Honesty — no white lies, no omissions, no flattery'
    ],
    resources: [
      { type: 'Lecture', text: 'Dr. Michael Sugrue: Kant\'s Moral Philosophy' },
      { type: 'Source', text: 'Groundwork of the Metaphysics of Morals — dense, start with lecture first' },
      { type: 'Breakdown', text: 'The School of Life — Immanuel Kant (YouTube)' }
    ],
    prompts: [
      'Apply the Categorical Imperative to a grey-area action from your life. Write the Maxim, Universalize it, record the verdict. Does the logic feel convincing or does something feel wrong?',
      'Kant says "never treat humanity merely as a means." Think of a relationship — professional or personal. Are you treating that person as an End (a full human) or as a Means (useful to you)?',
      'After 48 hours of Radical Honesty: where does dishonesty show up in your daily life most frequently? What is it protecting you from?'
    ],
    nextWeek: {
      title: 'The Happiness Calculus — Bentham & Mill',
      preview: 'Kant says tell the truth even if the murderer is at the door. Bentham says Kant is a monster. Next week we turn ethics into a math problem.',
      actions: ['Read: The Ones Who Walk Away from Omelas by Ursula K. Le Guin (free online, very short)', 'Identify a current ethical dilemma in the news', 'Read: J.S. Mill — Utilitarianism, Chapter 2']
    }
  },
  {
    id: 'week7', num: 7, title: 'The Happiness Calculus',
    subject: 'Bentham & Mill', theme: 'Utilitarianism — Consequences Over Principles', phase: 'The Resin',
    history: `Bentham argued morality isn't about abstract rules — it's about Results. If lying saves a life, you lie. If killing one saves five, you kill the one. He turned ethics into a math problem: The Greatest Good for the Greatest Number. It sounds perfect... until you realize what "The Greatest Good" actually costs.`,
    concepts: [
      { title: 'The Hedonic Calculus', body: 'Bentham wanted to calculate happiness like gravity. Intensity + Duration + Extent = Right action. Even if the "right" action involves something nasty. The math doesn\'t care about your feelings.' },
      { title: 'Higher vs. Lower Pleasures', body: 'Mill fixed Bentham\'s bug: if "Pleasure" is the only goal, a happy pig beats a sad human. There are qualities of pleasure. Lower (eating, sex — Animal). Higher (art, philosophy, helping others — Human). "Better to be Socrates dissatisfied than a fool satisfied."' },
      { title: 'The Harm Principle', body: '"The only purpose for which power can be rightfully exercised over any member of a civilized community, against his will, is to prevent harm to others." Your math stops where my math begins.' }
    ],
    domino: [
      { label: 'Domino', text: 'Utilitarianism took ethics out of the Church and into the Legislature.' },
      { label: 'Impact', text: 'This is the operating system of every modern government — Cost-Benefit Analysis.' },
      { label: 'Result', text: 'Created modern democracy — and the dangerous trap of the Tyranny of the Majority.' }
    ],
    checklist: [
      'Read: Utilitarianism by J.S. Mill — Chapter 2',
      'Read: The Ones Who Walk Away from Omelas by Ursula K. Le Guin',
      'Complete the Trolley Audit on a real news ethical dilemma',
      'Practice Effective Altruism — donate money you\'d spend on a Lower Pleasure',
      'Journal your results in the Notes section'
    ],
    resources: [
      { type: 'Source', text: 'Utilitarianism — J.S. Mill, Chapter 2 is essential' },
      { type: 'Story', text: '"The Ones Who Walk Away from Omelas" — Ursula K. Le Guin, free online' },
      { type: 'Lecture', text: 'Financially Quantifying Life (YouTube)' }
    ],
    prompts: [
      'Work through the Trolley Audit on a real dilemma. Assign values. Calculate the net total. Now imagine YOU are the one who must suffer for the greater good. Does your math still hold?',
      'Mill says Higher Pleasures are objectively better than Lower Pleasures. Do you agree, or is this elitism dressed in logic? Make the case either way.',
      'The Trolley Problem reveals your moral architecture. Are you a Consequentialist (results) or a Deontologist (rules)? Can you hold both without contradiction?'
    ],
    nextWeek: {
      title: 'The Leap — Søren Kierkegaard',
      preview: 'We\'ve followed logic to its end. Kierkegaard is about to tell us logic is a liar. The hardest choices in life cannot be made with a calculator.',
      actions: ['Watch: Dr. Michael Sugrue — Kierkegaard', 'Watch: The School of Life — Kierkegaard', 'Identify the biggest decision you are currently avoiding']
    }
  },
  {
    id: 'week8', num: 8, title: 'The Leap',
    subject: 'Søren Kierkegaard', theme: 'Subjectivity & Anxiety', phase: 'The Resin',
    history: `We have spent 7 weeks being told "The System." Kierkegaard looked at all of them and said: "You are lying." No amount of logic can help you make the hardest choices in life. Logic can tell you how to build a bridge. It cannot tell you who to marry, what career to pick, or why to get out of bed. When you are standing on the edge of a cliff, logic doesn't help. You have to jump.`,
    concepts: [
      { title: 'The Crowd is Untruth', body: 'Kierkegaard hated "The Herd." If everyone agrees on something, it\'s probably wrong — the Crowd kills individuality. Objective Truth: "The Earth is round." Subjective Truth: "I love this person." Faith, Love, Purpose are Subjective. You can\'t prove them. You have to live them.' },
      { title: 'Anxiety (The Dizziness of Freedom)', body: 'Anxiety isn\'t a disorder — it\'s a feature. It comes from Freedom. If you were a rock, you wouldn\'t be anxious. But you are free. You have a million choices, and you could ruin your life with any one of them. That feeling of standing on a cliff — that\'s the dizziness of freedom.' },
      { title: 'The Leap of Faith', body: 'Logic can only take you to the edge. If you want meaning, you have to leave your reason on the shore and swim. Whether that\'s God, a dream, or a partner — if you wait for "proof," you will wait forever. You have to Leap.' }
    ],
    domino: [
      { label: 'Domino', text: 'Kierkegaard destroyed the idea that Science/Logic solves everything. Father of Existentialism.' },
      { label: 'Impact', text: 'He shifted the focus from "What is the world made of?" to "What does it feel like to exist?"' },
      { label: 'Result', text: 'Without him, no Nietzsche, no Sartre, no modern understanding of anxiety.' }
    ],
    checklist: [
      'Watch: Dr. Michael Sugrue — Kierkegaard',
      'Watch: The School of Life — Kierkegaard (YouTube)',
      'Read: Fear and Trembling — the "Knight of Faith" section',
      'Complete the Anxiety Journal — map your biggest avoided decision',
      'Perform one Absurd Act with zero logical justification'
    ],
    resources: [
      { type: 'Lecture', text: 'Dr. Michael Sugrue: Kierkegaard (YouTube)' },
      { type: 'Source', text: 'Fear and Trembling — specifically the "Knight of Faith" section' },
      { type: 'Breakdown', text: 'The School of Life — Kierkegaard (YouTube)' }
    ],
    prompts: [
      'Write about the biggest decision you are currently avoiding. Kierkegaard says there is no "Right" answer until you choose it. Can you reframe the fear as freedom rather than paralysis?',
      'Kierkegaard says "The Crowd is Untruth." Name a belief you hold because you were told to, not because you chose it. What would it mean to actually choose it — or let it go?',
      'Describe your Absurd Act. What happened when your brain asked "What\'s the ROI?" and you ignored it? What did you feel?'
    ],
    nextWeek: {
      title: 'Hammer & Dynamite — Friedrich Nietzsche',
      preview: 'God is dead. Not literally — but the shared value system that held the West together for 1,500 years has collapsed. Nietzsche isn\'t weeping. He\'s laughing. And he\'s handing you a hammer.',
      actions: ['Read: The Gay Science — The Parable of the Madman (very short, very powerful)', 'Watch: Nietzsche and the Death of God (YouTube)', 'Identify one moral belief you hold strongly']
    }
  },
  {
    id: 'week9', num: 9, title: 'Hammer & Dynamite',
    subject: 'Friedrich Nietzsche', theme: 'Power & Nihilism', phase: 'The Gold',
    history: `We have killed God. Not literally — but the shared belief system that held Europe together for 1,500 years is dead. Science and Reason killed it. But we haven't replaced it. We are standing on the edge of Nihilism. Most people are terrified. They cling to old rules they don't actually believe anymore. Nietzsche laughs at them: "Don't be afraid of the abyss. Jump into it. Become a god yourself."`,
    concepts: [
      { title: 'Master vs. Slave Morality', body: 'The Masters (Romans, Greeks, Vikings): valued Strength, Pride, Victory. The Slaves: couldn\'t fight, so they flipped the script: "Being poor is good. Being meek is holy. Pride is a sin." Nietzsche argues modern society is stuck in Slave Morality — obsessed with pity and equality because we are afraid of greatness.' },
      { title: 'The Will to Power', body: 'Look at a billionaire who keeps working after achieving wealth. They aren\'t trying to survive — they are trying to Expand. Life is not about safety; it is about the Will to Power: the drive to grow, to overcome, to dominate your environment, and to create something greater than yourself.' },
      { title: 'The Ubermensch (Overman)', body: 'If God is dead, who writes the rules? You do. The Ubermensch has conquered Nihilism. They don\'t look to Church or State for values — they create their own. They say "Yes" to life, even to the suffering.' }
    ],
    domino: [
      { label: 'Domino', text: 'Nietzsche predicted the 20th century — without our own values, the State becomes the new God.' },
      { label: 'Impact', text: 'Father of Post-Modernism. "There are no facts, only interpretations" comes from him.' },
      { label: 'Result', text: 'Forces us to ask: are my values actually mine, or did I inherit them from the herd?' }
    ],
    checklist: [
      'Read: The Gay Science — The Parable of the Madman',
      'Watch: Nietzsche and the Death of God (Part 1)',
      'Watch: Nietzsche and the Will to Power (Part 2)',
      'Complete the Genealogy of Values — trace one strongly held moral belief',
      'Practice Amor Fati — write 3 reasons the worst thing this month was necessary'
    ],
    resources: [
      { type: 'Lecture', text: 'Nietzsche and the Death of God (YouTube)' },
      { type: 'Lecture', text: 'Nietzsche and the Will to Power (YouTube)' },
      { type: 'Source', text: 'The Gay Science — The Parable of the Madman (essential, very short)' }
    ],
    prompts: [
      'Trace the Genealogy of one moral belief: "It is wrong to be selfish." Who benefits from this rule? Does it make you stronger or keep you controllable? Did you actually choose it?',
      'Nietzsche says the Will to Power is the fundamental drive — not survival, but expansion and creation. Looking at your life right now, what are you building? What are you expanding into?',
      'Amor Fati: What is the worst thing that happened to you this month? Write three reasons why that exact difficulty was necessary for your growth. Can you genuinely not want to undo it?'
    ],
    nextWeek: {
      title: 'The Architect of Freedom — Sartre & de Beauvoir',
      preview: 'It\'s 1945. Paris is liberated. The atomic bomb dropped. The old world is rubble. Sartre found it liberating. You are condemned to be free.',
      actions: ['Read: Existentialism is a Humanism — Sartre (short speech, free online)', 'Catch yourself making one excuse today and rewrite it', 'Watch: Dr. Michael Sugrue — Sartre']
    }
  },
  {
    id: 'week10', num: 10, title: 'The Architect of Freedom',
    subject: 'Sartre & de Beauvoir', theme: 'Existentialism — Existence Before Essence', phase: 'The Gold',
    history: `It's 1945. Paris is liberated. The atomic bomb dropped. The Holocaust is revealed. There is no God, no King, no Destiny. We are alone in an empty universe. Most people find this terrifying. Sartre found it liberating. If there is no blueprint, you aren't "supposed" to be anything. You are a blank check. You are condemned to be free.`,
    concepts: [
      { title: 'Existence Precedes Essence', body: 'A knife\'s purpose (essence) exists before the knife does. A human is born first. We exist, then we decide what we are. You don\'t have a "nature." You are what you do. If you act brave, you are brave. You can change your definition at any second.' },
      { title: 'Bad Faith (Mauvaise Foi)', body: 'Sartre hated excuses. "I have to go to work" is a lie — Bad Faith. You don\'t have to. You could quit and starve. You are choosing to work because you value food more than freedom. Being a robot is easy; being a human means taking 100% responsibility for your life.' },
      { title: 'The Other (Hell is Other People)', body: 'When alone, you are King of your world. When someone else walks in, you become an "Object" in their world. You worry about how you look. You lose your freedom. Authentic life is fighting to keep your freedom even when others try to label you.' }
    ],
    domino: [
      { label: 'Domino', text: 'Sartre and de Beauvoir took philosophy out of the classroom and into the café.' },
      { label: 'Impact', text: 'Inspired the 1960s counterculture, Civil Rights, and Second-Wave Feminism (The Second Sex).' },
      { label: 'Result', text: 'The modern idea of "Authenticity" — defining yourself rather than following tradition — starts here.' }
    ],
    checklist: [
      'Watch: Dr. Michael Sugrue — Sartre',
      'Read: Existentialism is a Humanism — Sartre (short speech, free online)',
      'Read: At the Existentialist Café by Sarah Bakewell',
      'Complete the Bad Faith Audit — catch and rewrite 3 excuses',
      'Perform the Script Flip — do one thing totally "out of character"'
    ],
    resources: [
      { type: 'Lecture', text: 'Dr. Michael Sugrue: Sartre (YouTube)' },
      { type: 'Source', text: 'Existentialism is a Humanism — Sartre (short, free online)' },
      { type: 'Context', text: 'At the Existentialist Café by Sarah Bakewell — great narrative history' }
    ],
    prompts: [
      'Complete the Bad Faith Audit. Rewrite 3 "have to" sentences with the truth — "I am choosing X because I value Y more than Z." How does this change how you feel about your life?',
      'Sartre says you are what you do — not what you intend. Looking at your actual actions this week, what kind of person do they reveal you to be? Is that who you want to be?',
      'What character are you playing? (The Responsible One, The Funny One, The Shy One.) What would it cost you to step outside it? What are you protecting?'
    ],
    nextWeek: {
      title: 'The System Scanner — Michel Foucault',
      preview: 'Sartre told us we are totally free. Foucault says: "That\'s cute. But you\'re wrong." Power has become invisible. We are our own jailers.',
      actions: ['Watch: Dr. Michael Sugrue — Foucault', 'Watch: Then & Now — Foucault on Power', 'Pay attention to labels people use to dismiss each other this week']
    }
  },
  {
    id: 'week11', num: 11, title: 'The System Scanner',
    subject: 'Michel Foucault', theme: 'Power & Surveillance', phase: 'The Gold',
    history: `Sartre said we are totally free. Foucault said: "That's cute. But you're wrong." You aren't free because you don't even know how controlled you are. Power isn't just a King with a sword anymore. Power has become invisible. It hides in schools, hospitals, asylums, and the language we use. We don't need a dictator — we have learned to control ourselves. We are our own jailers.`,
    concepts: [
      { title: 'The Panopticon (The Eye)', body: 'A prison design: guard tower in the center, cells in a circle. Prisoners can\'t see the tower — they never know if they\'re watched. Because they might be, they behave 24/7. They police themselves. Modern life: Social Media is a Panopticon. You censor your thoughts before you even speak.' },
      { title: 'Power/Knowledge', body: 'Power decides what counts as Knowledge. In 1800, being gay was a "Sin." In 1950, a "Mental Illness." In 2024, an "Identity." The "Scientific Truth" changed because the Power Structure changed. Medicine and Education label people "Normal" (Good Worker) or "Abnormal" (Broken).' },
      { title: 'Discipline', body: 'School isn\'t just about math — it\'s about learning to sit in rows, raise your hand, obey the bell. Schools, factories, and prisons all look the same for a reason: they produce Docile Bodies. Obedient workers. Obedient citizens.' }
    ],
    domino: [
      { label: 'Domino', text: 'Foucault exposed the hidden power dynamics in "neutral" institutions.' },
      { label: 'Impact', text: 'Changed how we see mental health, prisons, and sexuality. Sparked Post-Structuralism.' },
      { label: 'Result', text: 'We now ask of every authority: "Who gave you the power to say that?"' }
    ],
    checklist: [
      'Watch: Dr. Michael Sugrue — Foucault',
      'Watch: Then & Now — Foucault on Power (YouTube)',
      'Read: Discipline and Punish — the Panopticon chapter',
      'Complete Language Watch — trace the invisible rule behind labels',
      'Break one minor social norm and notice the anxiety'
    ],
    resources: [
      { type: 'Lecture', text: 'Dr. Michael Sugrue: Foucault (YouTube)' },
      { type: 'Source', text: 'Discipline and Punish — the Panopticon chapter' },
      { type: 'Breakdown', text: 'Then & Now — Foucault on Power (YouTube)' }
    ],
    prompts: [
      'Look at your behavior on social media. How does being "seen" change what you say, post, or hide? Who is the guard in your tower?',
      'Pay attention to labels this week: "unprofessional," "inappropriate," "crazy." Pick one. Trace it back: who decided that rule? Who benefits? Whose behavior does it control?',
      'After breaking a minor social norm, describe the anxiety. What does that discomfort tell you about how thoroughly the rules of "Normal" have been installed in you — without your consent?'
    ],
    nextWeek: {
      title: 'The Pragmatic Synthesis — William James & John Dewey',
      preview: 'The final week. We stop arguing about Truth and start asking: does this idea actually work? Pragmatism is the permission slip to build your own philosophical stack.',
      actions: ['Read: Pragmatism — William James, Lecture II (What Pragmatism Means)', 'Look back over your 11 weeks of notes — identify 2 ideas that actually changed your behavior', 'Watch: The School of Life — William James']
    }
  },
  {
    id: 'week12', num: 12, title: 'The Pragmatic Synthesis',
    subject: 'William James & John Dewey', theme: 'Pragmatism — Truth is a Tool', phase: 'The Gold',
    history: `We have spent 11 weeks arguing about Truth. William James asked one question: "What is the Cash Value of these ideas?" Beliefs are Tools. A hammer isn't "True." A hammer is either useful for driving nails, or useless. Your beliefs should be treated the same way.`,
    concepts: [
      { title: 'The Cash Value of Truth', body: 'An idea becomes true when you use it and it works. If you believe "I can run a marathon" and that thought gets you to the finish line, the belief became true. If a philosophical question has no impact on your actual behavior, stop asking it. It has no Cash Value.' },
      { title: 'Meliorism (The Middle Path)', body: 'Most philosophies are Optimistic ("God has a plan!") or Pessimistic ("Life is suffering!"). Meliorism: the world is neither good nor bad — it is improvable. The world is a project. We are the contractors. Whether it gets better or worse depends entirely on whether we show up today.' },
      { title: 'The Will to Believe', body: 'Sometimes belief creates the evidence. Jumping a chasm: if you believe you can make it, your muscles tense and you land it. If you doubt, you fall. In cases where the outcome depends on your effort, you have the Right to Believe before the proof exists.' }
    ],
    domino: [
      { label: 'Domino', text: 'Pragmatism ended the 2,000-year obsession with "Absolute Truth" in the West.' },
      { label: 'Impact', text: 'Aligned philosophy with the Scientific Method. Birthed modern Psychology.' },
      { label: 'Result', text: 'Permission to build your own philosophical stack. Combine what works — if it works, it\'s True for you.' }
    ],
    checklist: [
      'Read: Pragmatism — William James, Lecture II',
      'Watch: The School of Life — William James/Pragmatism',
      'Watch: Dr. Darren Staloff — James\' Pragmatism lecture',
      'Complete the Cash Value Audit — 2 philosophies that actually changed your behavior',
      'Practice the Self-Fulfilling Prophecy — act "As If" for 24 hours',
      'Complete the Grand Assessment',
      'Read the Afterword'
    ],
    resources: [
      { type: 'Lecture', text: 'Dr. Darren Staloff: James\' Pragmatism' },
      { type: 'Source', text: 'Pragmatism — William James, Lecture II: What Pragmatism Means' },
      { type: 'Breakdown', text: 'The School of Life — William James/Pragmatism (YouTube)' }
    ],
    prompts: [
      'The Cash Value Audit: which two ideas from all 12 weeks actually changed your behavior? Which were intellectually interesting but behaviorally inert? Keep the tools, discard the museum pieces.',
      'Meliorism says the world is improvable — and whether it improves depends on whether you show up. What is one specific thing you are now equipped to contribute that you weren\'t 12 weeks ago?',
      'The Will to Believe: identify one area where you\'re "waiting for confidence." Write what acting "As If" would look like. Then go do it — and report back here.'
    ],
    nextWeek: {
      title: 'You\'re Done. Now Go Gild Something.',
      preview: 'You have spent 12 weeks gathering the materials. You have the gold. You have the tools. Head to the Grand Assessment to discover your philosophical school, then read the Afterword.',
      actions: ['Complete the Grand Assessment', 'Read the Afterword', 'Ask yourself: what cracks in your life are ready to be gilded?']
    }
  }
];

export const quizQuestions = [
  { q: "The Algorithm: An AI must choose between hitting a barrier (killing 1 young doctor) or a crosswalk (killing 5 elderly pedestrians).", options: [{ text: "Kill the 1 to save the 5. The math demands it.", tag: "UTIL" }, { text: "Protect the passenger. You cannot actively choose to kill bystanders.", tag: "KANT" }, { text: "Randomize it. It is not for us to decide who lives or dies based on 'value.'", tag: "RELIGION" }] },
  { q: "The Whistleblower: Your company legally dumps toxic waste. Blowing the whistle saves lives but closes your factory, collapsing your town.", options: [{ text: "Stay silent. My duty is to my community.", tag: "LOYALTY" }, { text: "Blow the whistle. Poisoning people is wrong regardless of economic cost.", tag: "KANT" }, { text: "Leak it anonymously to force change without taking the blame.", tag: "PRAGMATISM" }] },
  { q: "The Benevolent Dictator: A leader suspends democracy to force through green energy policies — saving the planet but jailing dissenters.", options: [{ text: "Accept it. Species survival outweighs the right to vote.", tag: "UTIL" }, { text: "Revolt. Freedom is the highest good. A saved world in chains isn't worth living in.", tag: "EXISTENTIALISM" }, { text: "Support temporarily, then remove him when the crisis passes.", tag: "PRAGMATISM" }] },
  { q: "The Robin Hood: A man steals insulin from a pharmacy chain to save his dying daughter.", options: [{ text: "He is a criminal. If everyone stole, we'd have chaos.", tag: "KANT" }, { text: "He is a hero. The law is unjust if it values profit over life.", tag: "UTIL" }, { text: "He should have found another way. Systems exist for a reason.", tag: "STOIC" }] },
  { q: "The Lie: A madman asks where your best friend is hiding.", options: [{ text: "I lie. Saving a life matters more than abstract truth.", tag: "UTIL" }, { text: "I tell the truth but physically block the door. I won't corrupt my soul.", tag: "KANT" }, { text: "I try to negotiate or misdirect. Words are tools.", tag: "PRAGMATISM" }] },
  { q: "The Quarter-Life Crisis: You wake up hating the career you spent 10 years building.", options: [{ text: "I stay. I have a duty to my family and debts. Happiness is secondary.", tag: "STOIC" }, { text: "I quit today. Staying would be living in Bad Faith.", tag: "EXISTENTIALISM" }, { text: "I pivot slowly, using current skills to fund a new direction.", tag: "PRAGMATISM" }] },
  { q: "The Bad Luck: You work hard for a promotion but the boss gives it to his lazy nephew.", options: [{ text: "I rage. This is unjust and I must fight it.", tag: "KANT" }, { text: "Amor Fati. I'll use this snub to fuel my own side business.", tag: "NIETZSCHE" }, { text: "I detach. The promotion was never mine — it was in Bucket B.", tag: "STOIC" }] },
  { q: "The Authentic Self: You're introverted but your dream job requires charismatic public speaking.", options: [{ text: "I fake it. Who I 'am' is irrelevant. I do what works.", tag: "PRAGMATISM" }, { text: "I refuse. I must stay true to my nature.", tag: "KANT" }, { text: "I take the job. There is no fixed 'nature.' I can choose to become.", tag: "EXISTENTIALISM" }] },
  { q: "The Suffering: A painful breakup. A doctor offers a pill that erases the pain but also the lessons.", options: [{ text: "Take it. Why suffer if you don't have to?", tag: "UTIL" }, { text: "Refuse it. Suffering deepens the soul. What doesn't kill me makes me stronger.", tag: "NIETZSCHE" }, { text: "Half-dose. Manage the pain but keep the memory.", tag: "PRAGMATISM" }] },
  { q: "The Void: You look at the stars and feel absolutely insignificant.", options: [{ text: "It terrifies me. If I don't matter, nothing matters.", tag: "NIHILISM" }, { text: "It comforts me. My problems are small; I am part of a vast order.", tag: "STOIC" }, { text: "It excites me. The universe is a blank canvas — I am free to paint meaning.", tag: "EXISTENTIALISM" }] },
  { q: "The Simulation: New science suggests a 99% chance we are in a simulation.", options: [{ text: "I panic. If this isn't real, nothing is real.", tag: "KANT" }, { text: "Who cares? If the coffee tastes good, it's real enough.", tag: "PRAGMATISM" }, { text: "I must study the code. If this is a simulation, there is a Programmer.", tag: "UTIL" }] },
  { q: "The Tradition: You are invited to a religious ceremony for a faith you don't believe in.", options: [{ text: "I go and participate. Rituals bind society together.", tag: "PRAGMATISM" }, { text: "I refuse. I will not perform a ritual I know is false.", tag: "KANT" }, { text: "I go to observe. I analyze the power dynamics.", tag: "NIETZSCHE" }] },
  { q: "The Offensive Art: An artist creates a sculpture that deeply offends a religious minority.", options: [{ text: "Ban it. Social cohesion outweighs 'art.'", tag: "UTIL" }, { text: "Protect it. Free speech is absolute. The offense is the point.", tag: "EXISTENTIALISM" }, { text: "Critique it without banning it — deconstruct why it has power over people.", tag: "NIETZSCHE" }] },
  { q: "The Truth Serum: You can drink a potion that reveals Absolute Truth, but it might drive you insane.", options: [{ text: "Drink it. I must know. The unexamined life is not worth living.", tag: "KANT" }, { text: "Pour it out. Truth that breaks me has no cash value.", tag: "PRAGMATISM" }, { text: "Save it. I will drink it only at the moment of my death.", tag: "STOIC" }] },
  { q: "The Final Choice: On your deathbed, what makes a 'Good Life'?", options: [{ text: "I followed the rules. I was a good citizen, parent, and worker. I did my Duty.", tag: "KANT" }, { text: "I maximized pleasure and minimized pain. I enjoyed the ride.", tag: "UTIL" }, { text: "I created something. I left a mark. I became who I wanted to be.", tag: "EXISTENTIALISM" }] }
];

export const schoolData = {
  KANT: { name: 'The Architect', subtitle: 'Order & Duty', diagnosis: 'You are the foundation of civilization. You believe in rules, honor, and playing the game the right way.', danger: 'Rigidity. You might let the world burn just to save a rule.', challenge: 'Learn to bend. Read Nietzsche to inject some chaos into your system.' },
  UTIL: { name: 'The Optimizer', subtitle: 'Result & Utility', diagnosis: 'You are a problem solver. You don\'t care about "feelings" — you care about what works. You\'re willing to get your hands dirty to save the village.', danger: 'Inhumanity. You might turn people into numbers.', challenge: 'Learn to feel. Read The Romantics or Kierkegaard.' },
  EXISTENTIALISM: { name: 'The Creator', subtitle: 'Freedom & Self', diagnosis: 'You are a free spirit. You reject tradition and define your own reality. You are authentic and brave.', danger: 'Narcissism. You might forget you live in a society with other people.', challenge: 'Learn to serve. Read Levinas or The Gospels.' },
  PRAGMATISM: { name: 'The Engineer', subtitle: 'Truth & Pragmatism', diagnosis: 'You are a skeptic. You analyze the system, take it apart, and only keep the pieces that work. You don\'t buy the hype.', danger: 'Cynicism. You might analyze life so much you forget to live it.', challenge: 'Learn to believe. Read William James — The Will to Believe.' },
  STOIC: { name: 'The Sage', subtitle: 'Detachment & Resilience', diagnosis: 'You have built a fortress inside your own mind. Peace comes from releasing what you cannot control and pouring everything into what you can.', danger: 'Emotional suppression. True detachment is not the same as repression.', challenge: 'Learn to leap. Read Kierkegaard on the necessity of passion.' },
  NIETZSCHE: { name: 'The Overman', subtitle: 'Power & Creation', diagnosis: 'You have stared into the abyss and refused to blink. You create your own values and live by them, unapologetically.', danger: 'Isolation. The Ubermensch still lives among people.', challenge: 'Learn compassion. Read Augustine\'s Confessions.' },
  LOYALTY: { name: 'The Guardian', subtitle: 'Community & Duty', diagnosis: 'You are bound by ties of loyalty and community. You understand that a life in context — with responsibilities to real people — is not a limitation but a form of meaning.', danger: 'Tribalism. Loyalty without principle can become complicity.', challenge: 'Read Kant — there are duties that transcend tribe.' },
  NIHILISM: { name: 'The Seeker', subtitle: 'Truth at All Costs', diagnosis: 'You have felt the vertigo of meaninglessness and haven\'t looked away. That honesty is rare and is the beginning of something real.', danger: 'Paralysis. The void is a starting point, not a destination.', challenge: 'Read Camus. Absurdism is Nihilism that decided to live anyway.' },
  RELIGION: { name: 'The Believer', subtitle: 'Faith & Order', diagnosis: 'You sense that some things transcend calculation. You believe in a moral order that isn\'t reducible to logic or utility — something bigger than any individual or system.', danger: 'Dogmatism. Belief without examination can become its own cage.', challenge: 'Read Aquinas — Faith and Reason were meant to work together.' }
};
