import { WordData } from '../types/vocab';

export const INITIAL_VOCABULARY: WordData[] = [
  {
    id: 'ephemeral',
    word: 'Ephemeral',
    phonetic: '/ɪˈfɛmərəl/',
    partOfSpeech: 'adjective',
    category: 'Literary',
    difficulty: 'Intermediate',
    definition: 'Lasting for a very short time; transient and fleeting in nature.',
    simpleMeaning: 'Short-lived or temporary',
    examples: [
      'The ephemeral beauty of cherry blossoms draws millions of tourists each spring.',
      'Fame in the digital age can be surprisingly ephemeral.',
      'Her enthusiasm was ephemeral, evaporating as soon as hard work began.'
    ],
    synonyms: ['transient', 'fleeting', 'evanescent', 'momentary', 'impermanent'],
    antonyms: ['permanent', 'enduring', 'eternal', 'everlasting'],
    etymology: 'From Greek "ephemeros", meaning "lasting only a day" (epi = upon + hemera = day).',
    mnemonic: 'Think of "E-Fem-eral" as "F-Mirror" — reflections in a mirror fade in a flash!',
    collocations: ['ephemeral beauty', 'ephemeral glory', 'ephemeral pleasure', 'ephemeral nature'],
    usageTip: 'Often used to describe delicate experiences like feelings, weather, or social trends.',
    quote: {
      text: 'Art is a step from what is obvious and well-known toward what is arcane and ephemeral.',
      author: 'Khalil Gibran'
    }
  },
  {
    id: 'serendipity',
    word: 'Serendipity',
    phonetic: '/ˌsɛrənˈdɪpɪti/',
    partOfSpeech: 'noun',
    category: 'Everyday Gems',
    difficulty: 'Beginner',
    definition: 'The occurrence of finding valuable or agreeable things by happy chance or luck.',
    simpleMeaning: 'A lucky accident or pleasant surprise',
    examples: [
      'They met by pure serendipity at a cozy bookstore in Paris.',
      'Penicillin was discovered through a famous moment of scientific serendipity.',
      'It was pure serendipity that we found the missing keys in our picnic basket.'
    ],
    synonyms: ['fluke', 'fortuity', 'happy chance', 'coincidence', 'good luck'],
    antonyms: ['design', 'misfortune', 'bad luck', 'intent'],
    etymology: 'Coined by Horace Walpole in 1754 from the Persian fairy tale "The Three Princes of Serendip".',
    mnemonic: 'Think of "Serene + Dip": taking a dip in serene water and finding treasure!',
    collocations: ['pure serendipity', 'happy serendipity', 'by serendipity'],
    usageTip: 'Use when a pleasant surprise happens unexpectedly without planning.',
    quote: {
      text: 'Serendipity is looking in a haystack for a needle and coming out with the farmer’s daughter.',
      author: 'Julius Comroe Jr.'
    }
  },
  {
    id: 'ubiquitous',
    word: 'Ubiquitous',
    phonetic: '/juːˈbɪkwɪtəs/',
    partOfSpeech: 'adjective',
    category: 'Business & Tech',
    difficulty: 'Intermediate',
    definition: 'Present, appearing, or found everywhere at the same time.',
    simpleMeaning: 'Found everywhere',
    examples: [
      'Smartphones have become ubiquitous in modern daily life.',
      'Coffee shops seem ubiquitous on almost every city street corner.',
      'Microplastics have unfortunately become ubiquitous in marine environments.'
    ],
    synonyms: ['omnipresent', 'pervasive', 'everywhere', 'universal', 'widespread'],
    antonyms: ['rare', 'scarce', 'infrequent', 'unusual'],
    etymology: 'From Latin "ubique", meaning "everywhere".',
    mnemonic: 'You-Big-With-Us: Imagine a mega company that is "big with all of us" everywhere!',
    collocations: ['ubiquitous feature', 'ubiquitous presence', 'become ubiquitous'],
    usageTip: 'Slightly formal, great for essays, reports, and professional discourse.'
  },
  {
    id: 'mellifluous',
    word: 'Mellifluous',
    phonetic: '/mɛˈlɪflʊəs/',
    partOfSpeech: 'adjective',
    category: 'Literary',
    difficulty: 'Advanced',
    definition: 'Sweet or musical; pleasant to hear (often describing a voice or sound).',
    simpleMeaning: 'Smooth, sweet, and soothing sound',
    examples: [
      'The narrator captivated the audience with her warm, mellifluous voice.',
      'Soft mellifluous jazz played gently in the background during dinner.',
      'His mellifluous tones put the crying toddler straight to sleep.'
    ],
    synonyms: ['dulcet', 'euphonious', 'honeyed', 'harmonious', 'silky'],
    antonyms: ['cacophonous', 'harsh', 'grating', 'strident'],
    etymology: 'From Latin "mellis" (honey) + "fluere" (to flow) — flowing like sweet honey.',
    mnemonic: 'Melli = Honey (like Meli) + Flowing = Honey-flowing sound!',
    collocations: ['mellifluous voice', 'mellifluous tones', 'mellifluous song'],
    usageTip: 'Most frequently used to describe voice, music, accents, or spoken prose.'
  },
  {
    id: 'magnanimous',
    word: 'Magnanimous',
    phonetic: '/mæɡˈnænɪməs/',
    partOfSpeech: 'adjective',
    category: 'Personality & Emotions',
    difficulty: 'Intermediate',
    definition: 'Generous or forgiving, especially toward a rival or less powerful person.',
    simpleMeaning: 'Noble-minded and very generous or forgiving',
    examples: [
      'The champion was magnanimous in victory, praising his opponent\'s effort.',
      'She showed a magnanimous gesture by waiving the late fee for struggling families.',
      'It was magnanimous of him to overlook the bitter criticism.'
    ],
    synonyms: ['generous', 'forgiving', 'chivalrous', 'noble', 'altruistic'],
    antonyms: ['petty', 'mean-spirited', 'vindictive', 'grudging'],
    etymology: 'From Latin "magnus" (great) + "animus" (soul/mind) — great-souled.',
    mnemonic: 'Magnet-Animal-ous: A giant magnetic soul attracting good deeds.',
    collocations: ['magnanimous gesture', 'magnanimous winner', 'magnanimous heart']
  },
  {
    id: 'eloquent',
    word: 'Eloquent',
    phonetic: '/ˈɛləkwənt/',
    partOfSpeech: 'adjective',
    category: 'Everyday Gems',
    difficulty: 'Beginner',
    definition: 'Fluent or persuasive in speaking or writing; clearly expressing feelings or ideas.',
    simpleMeaning: 'Expressing yourself clearly and beautifully',
    examples: [
      'Her eloquent speech brought the entire auditorium to a standing ovation.',
      'A silent, eloquent glance passed between the two old friends.',
      'He delivered an eloquent defense of environmental conservation.'
    ],
    synonyms: ['articulate', 'expressive', 'persuasive', 'fluent', 'poetic'],
    antonyms: ['inarticulate', 'tongue-tied', 'unpersuasive', 'hesitant'],
    etymology: 'From Latin "eloqui", meaning "to speak out".',
    mnemonic: 'Think of "Elephant speaking": an elephant standing up and speaking with majestic clarity!',
    collocations: ['eloquent speech', 'eloquent advocate', 'eloquent silence']
  },
  {
    id: 'pragmatic',
    word: 'Pragmatic',
    phonetic: '/præɡˈmætɪk/',
    partOfSpeech: 'adjective',
    category: 'Business & Tech',
    difficulty: 'Intermediate',
    definition: 'Dealing with things sensibly and realistically based on practical considerations rather than theoretical ones.',
    simpleMeaning: 'Practical and realistic rather than idealist',
    examples: [
      'We need a pragmatic solution to this budget issue rather than abstract theories.',
      'His pragmatic approach to project management saved the team weeks of delay.',
      'She took a pragmatic view of her career path, acquiring skills in high demand.'
    ],
    synonyms: ['practical', 'realistic', 'sensible', 'down-to-earth', 'businesslike'],
    antonyms: ['idealistic', 'impractical', 'utopian', 'unrealistic'],
    etymology: 'From Greek "pragma", meaning "deed or act".',
    mnemonic: 'Pragmatic = Programmatic: Focus on actual execution program!',
    collocations: ['pragmatic approach', 'pragmatic solution', 'pragmatic choice']
  },
  {
    id: 'fastidious',
    word: 'Fastidious',
    phonetic: '/fæˈstɪdɪəs/',
    partOfSpeech: 'adjective',
    category: 'Personality & Emotions',
    difficulty: 'Advanced',
    definition: 'Very attentive to and concerned about accuracy and detail; hard to please.',
    simpleMeaning: 'Meticulous, fussy, or extremely neat and careful',
    examples: [
      'The architect was fastidious about ensuring every measurement was millimeter-perfect.',
      'He is fastidious regarding personal hygiene and keeps his workspace spotless.',
      'Fastidious readers will immediately spot small typographical errors.'
    ],
    synonyms: ['meticulous', 'scrupulous', 'punctilious', 'painstaking', 'fussy'],
    antonyms: ['careless', 'sloppy', 'lax', 'easygoing'],
    etymology: 'From Latin "fastidium", meaning "loathing or squeamishness".',
    mnemonic: 'Fast-Fastidious: Fasting from imperfections, making sure everything is tidy!',
    collocations: ['fastidious attention', 'fastidious care', 'fastidious layout']
  },
  {
    id: 'resilient',
    word: 'Resilient',
    phonetic: '/rɪˈzɪlɪənt/',
    partOfSpeech: 'adjective',
    category: 'Everyday Gems',
    difficulty: 'Beginner',
    definition: 'Able to withstand or recover quickly from difficult conditions or setbacks.',
    simpleMeaning: 'Able to bounce back from hardship',
    examples: [
      'Children are often remarkably resilient when adapting to new environments.',
      'The community proved resilient in rebuilding their city after the storm.',
      'A resilient economic model can survive market volatility.'
    ],
    synonyms: ['tough', 'adaptable', 'buoyant', 'strong', 'irrepressible'],
    antonyms: ['fragile', 'vulnerable', 'brittle', 'weak'],
    etymology: 'From Latin "resilire", meaning "to leap back or recoil".',
    mnemonic: 'Resilient = Re-silent / Re-springing: bounces right back up!',
    collocations: ['resilient spirit', 'resilient economy', 'resilient ecosystem']
  },
  {
    id: 'alacrity',
    word: 'Alacrity',
    phonetic: '/əˈlækrɪti/',
    partOfSpeech: 'noun',
    category: 'GRE & SAT Prep',
    difficulty: 'Advanced',
    definition: 'Brisk and cheerful readiness or eagerness to do something.',
    simpleMeaning: 'Eager enthusiasm and speed',
    examples: [
      'She accepted the unexpected job offer with great alacrity.',
      'The volunteers worked with impressive alacrity to set up the emergency shelters.',
      'He tackled the complex puzzle with surprising alacrity.'
    ],
    synonyms: ['eagerness', 'enthusiasm', 'readiness', 'promptness', 'zeal'],
    antonyms: ['reluctance', 'apathy', 'sluggishness', 'indifference'],
    etymology: 'From Latin "alacer", meaning "brisk or lively".',
    mnemonic: 'Alacrity sounds like "a-clock-ready" — ready to act fast on the clock!',
    collocations: ['with alacrity', 'show alacrity', 'accept with alacrity']
  },
  {
    id: 'quixotic',
    word: 'Quixotic',
    phonetic: '/kwɪkˈsɒtɪk/',
    partOfSpeech: 'adjective',
    category: 'Literary',
    difficulty: 'Master',
    definition: 'Exceedingly idealistic, unrealistic, and impractical.',
    simpleMeaning: 'Foolishly noble or chasing unrealistic dreams',
    examples: [
      'His quixotic quest to eliminate all plastic waste overnight met predictable hurdles.',
      'It was a quixotic venture, but everyone admired their noble intention.',
      'Don’t abandon practical goals for quixotic fantasies.'
    ],
    synonyms: ['idealistic', 'romantic', 'visionary', 'utopian', 'starry-eyed'],
    antonyms: ['pragmatic', 'realistic', 'practical', 'cynical'],
    etymology: 'Derived from Don Quixote, the hero of Miguel de Cervantes\' famous Spanish novel who tilts at windmills.',
    mnemonic: 'Don Quixote fighting windmills = Quixotic (chasing romantic impossible dreams)!',
    collocations: ['quixotic quest', 'quixotic effort', 'quixotic idea']
  },
  {
    id: 'synergy',
    word: 'Synergy',
    phonetic: '/ˈsɪnədʒi/',
    partOfSpeech: 'noun',
    category: 'Business & Tech',
    difficulty: 'Beginner',
    definition: 'The interaction or cooperation of two or more organizations, substances, or agents to produce a combined effect greater than the sum of their separate effects.',
    simpleMeaning: 'Teamwork where the combined result is extra powerful',
    examples: [
      'The merger created a powerful synergy between engineering and marketing.',
      'Team members discovered great synergy during the brainstorming sprint.',
      'Combining diet and exercise creates a healthy synergy for longevity.'
    ],
    synonyms: ['collaboration', 'cooperation', 'symbiosis', 'teamwork', 'unity'],
    antonyms: ['antagonism', 'conflict', 'discord', 'incompatibility'],
    etymology: 'From Greek "sunergia", meaning "working together" (syn = together + ergon = work).',
    mnemonic: 'Syn = Together + Energy = Combined energy!',
    collocations: ['creative synergy', 'positive synergy', 'corporate synergy']
  },
  {
    id: 'cacophony',
    word: 'Cacophony',
    phonetic: '/kəˈkɒfəni/',
    partOfSpeech: 'noun',
    category: 'Philosophy & Art',
    difficulty: 'Intermediate',
    definition: 'A harsh, discordant mixture of sounds.',
    simpleMeaning: 'A loud, chaotic noise',
    examples: [
      'A cacophony of car horns and construction noise filled the busy city street.',
      'The orchestra warmed up with a temporary cacophony of tuning instruments.',
      'Her thoughts were a noisy cacophony of anxiety and excitement.'
    ],
    synonyms: ['din', 'racket', 'clamor', 'dissonance', 'uproar'],
    antonyms: ['euphony', 'harmony', 'silence', 'melody'],
    etymology: 'From Greek "kakos" (bad/harsh) + "phone" (sound/voice).',
    mnemonic: 'Cacophony = Cackling Crows Phoning each other — a harsh loud noise!',
    collocations: ['deafening cacophony', 'cacophony of noise', 'cacophony of voices']
  },
  {
    id: 'equanimity',
    word: 'Equanimity',
    phonetic: '/ˌɛkwəˈnɪmɪti/',
    partOfSpeech: 'noun',
    category: 'Philosophy & Art',
    difficulty: 'Advanced',
    definition: 'Mental calmness, composure, and evenness of temper, especially in a difficult situation.',
    simpleMeaning: 'Staying calm and cool under pressure',
    examples: [
      'She handled the intense media scrutiny with admirable equanimity.',
      'Maintaining equanimity during a crisis is a mark of strong leadership.',
      'Meditation helps cultivate a state of inner peace and equanimity.'
    ],
    synonyms: ['composure', 'calmness', 'tranquility', 'serenity', 'poise'],
    antonyms: ['agitation', 'anxiety', 'discomposure', 'alarm'],
    etymology: 'From Latin "aequus" (equal/even) + "animus" (mind/spirit).',
    mnemonic: 'Equal Mind = Equanimity: keeping an even mind no matter what happens!',
    collocations: ['maintain equanimity', 'with equanimity', 'remarkable equanimity']
  },
  {
    id: 'epiphany',
    word: 'Epiphany',
    phonetic: '/ɪˈpɪfəni/',
    partOfSpeech: 'noun',
    category: 'Everyday Gems',
    difficulty: 'Intermediate',
    definition: 'A moment of sudden, intuitive revelation or deep insight.',
    simpleMeaning: 'An "Aha!" lightbulb moment of clarity',
    examples: [
      'While taking a warm shower, Archimedes had a famous eureka epiphany.',
      'She experienced a life-changing epiphany about what really mattered to her.',
      'The breakthrough came after weeks of confusion in a sudden flash epiphany.'
    ],
    synonyms: ['revelation', 'insight', 'aha moment', 'realization', 'discovery'],
    antonyms: ['confusion', 'misunderstanding', 'blindness'],
    etymology: 'From Greek "epiphainein", meaning "to reveal or manifest upon".',
    mnemonic: 'Epiphany = "E-PIPH-ANY" -> Every piece falls into place in an instant!',
    collocations: ['sudden epiphany', 'have an epiphany', 'moment of epiphany']
  },
  {
    id: 'nebulous',
    word: 'Nebulous',
    phonetic: '/ˈnɛbjʊləs/',
    partOfSpeech: 'adjective',
    category: 'Science & Nature',
    difficulty: 'Intermediate',
    definition: 'In the form of a cloud or haze; vague, ill-defined, or hazy in concept.',
    simpleMeaning: 'Vague, cloudy, or unclear',
    examples: [
      'The company had a nebulous plan with no concrete deadlines.',
      'Astronomers observed a distant nebulous cloud forming new stars.',
      'His concepts were far too nebulous to put into a project spec.'
    ],
    synonyms: ['vague', 'hazy', 'unclear', 'indistinct', 'cloudy'],
    antonyms: ['clear', 'distinct', 'defined', 'concrete'],
    etymology: 'From Latin "nebula", meaning "mist or cloud".',
    mnemonic: 'Nebula in space looks like a fuzzy cloudy haze!',
    collocations: ['nebulous concept', 'nebulous goal', 'nebulous shape']
  },
  {
    id: 'pernicious',
    word: 'Pernicious',
    phonetic: '/pəˈnɪʃəs/',
    partOfSpeech: 'adjective',
    category: 'GRE & SAT Prep',
    difficulty: 'Advanced',
    definition: 'Having a harmful effect, especially in a gradual or subtle way.',
    simpleMeaning: 'Silently harmful or destructive over time',
    examples: [
      'Spreading unverified rumors can have a pernicious impact on team trust.',
      'The pernicious habit of procrastination slowly eroded her progress.',
      'Constant exposure to pollution has a pernicious effect on cardiovascular health.'
    ],
    synonyms: ['harmful', 'destructive', 'insidious', 'detrimental', 'ruinous'],
    antonyms: ['beneficial', 'harmless', 'salutary', 'wholesome'],
    etymology: 'From Latin "pernicies", meaning "destruction or death".',
    mnemonic: 'Pernicious = Poisonous & Vicious over time.',
    collocations: ['pernicious influence', 'pernicious effect', 'pernicious rumor']
  },
  {
    id: 'sycophant',
    word: 'Sycophant',
    phonetic: '/ˈsɪkəfænt/',
    partOfSpeech: 'noun',
    category: 'Personality & Emotions',
    difficulty: 'Master',
    definition: 'A person who acts obsequiously toward someone important in order to gain advantage; a flatterer.',
    simpleMeaning: 'A "yes-man" or brown-noser who flatters powerful people',
    examples: [
      'The CEO was surrounded by sycophants who agreed with every word he uttered.',
      'He disliked fake compliments and avoided sycophants at work.',
      'True leaders value honest feedback over the praise of sycophants.'
    ],
    synonyms: ['flatterer', 'yes-man', 'bootlicker', 'toady', 'cawner'],
    antonyms: ['critic', 'detractor', 'rebel'],
    etymology: 'From Greek "sukophantes", originally an informer who exposed illegal fig exports (sukon = fig).',
    mnemonic: 'Sick-of-ant: Tired of seeing suck-ups buzzing like ants around the boss!',
    collocations: ['surrounded by sycophants', 'act like a sycophant']
  },
  {
    id: 'anachronism',
    word: 'Anachronism',
    phonetic: '/əˈnækrənɪzəm/',
    partOfSpeech: 'noun',
    category: 'Literary',
    difficulty: 'Advanced',
    definition: 'A thing belonging or appropriate to a period other than that in which it exists, especially a thing that is conspicuously old-fashioned.',
    simpleMeaning: 'Something out of its proper historical time period',
    examples: [
      'Seeing a samurai wearing a digital smartwatch in a period film is a hilarious anachronism.',
      'In today’s digital age, paper checks feel like a historical anachronism.',
      'The author took care to avoid any linguistic anachronisms in her medieval drama.'
    ],
    synonyms: ['misplacement', 'chronological error', 'relic', 'archaism'],
    antonyms: ['synchronism', 'modernity'],
    etymology: 'From Greek "ana" (against) + "chronos" (time).',
    mnemonic: 'Ana-Chronism = Against Time!',
    collocations: ['glaring anachronism', 'historical anachronism']
  },
  {
    id: 'vicarious',
    word: 'Vicarious',
    phonetic: '/vɪˈkɛərɪəs/',
    partOfSpeech: 'adjective',
    category: 'Personality & Emotions',
    difficulty: 'Intermediate',
    definition: 'Experienced in the imagination through the feelings or actions of another person.',
    simpleMeaning: 'Living or feeling through someone else’s experience',
    examples: [
      'Parents often feel a vicarious pride when watching their children succeed.',
      'Reading adventure novels gives her a vicarious thrill of mountain climbing.',
      'He derived vicarious joy from seeing his friend win the marathon.'
    ],
    synonyms: ['indirect', 'secondhand', 'derived', 'empathetic', 'substitute'],
    antonyms: ['direct', 'firsthand', 'personal'],
    etymology: 'From Latin "vicarius", meaning "substitute or deputy" (vicar).',
    mnemonic: 'Vicarious = Via-Care: caring via someone else\'s adventure!',
    collocations: ['vicarious thrill', 'vicarious pleasure', 'vicarious experience']
  },
  {
    id: 'paradigm',
    word: 'Paradigm',
    phonetic: '/ˈpærədaɪm/',
    partOfSpeech: 'noun',
    category: 'Business & Tech',
    difficulty: 'Intermediate',
    definition: 'A typical example or pattern of something; a model or overarching framework.',
    simpleMeaning: 'A clear model or dominant mindset/framework',
    examples: [
      'Remote work represents a major paradigm shift in global corporate culture.',
      'The discovery of quantum physics forced a total paradigm change in science.',
      'She introduced a new design paradigm focused on accessibility.'
    ],
    synonyms: ['model', 'archetype', 'prototype', 'framework', 'pattern'],
    antonyms: ['anomaly', 'exception'],
    etymology: 'From Greek "paradeigma", meaning "pattern or sample".',
    mnemonic: 'Pair of dimes = a pair of standard shiny coins as a model framework!',
    collocations: ['paradigm shift', 'dominant paradigm', 'new paradigm']
  },
  {
    id: 'nocturnal',
    word: 'Nocturnal',
    phonetic: '/nɒkˈtɜːnəl/',
    partOfSpeech: 'adjective',
    category: 'Science & Nature',
    difficulty: 'Beginner',
    definition: 'Done, occurring, or active during the night rather than day.',
    simpleMeaning: 'Active at night',
    examples: [
      'Owls and bats are famous examples of nocturnal creatures.',
      'His nocturnal study sessions were powered by black coffee and music.',
      'The safari offered night vision goggles to observe nocturnal wildlife.'
    ],
    synonyms: ['nightly', 'nighttime', 'night-active'],
    antonyms: ['diurnal', 'daytime'],
    etymology: 'From Latin "nocturnus", from "nox" (night).',
    mnemonic: 'Nocturnal sounds like "Night-turn": turning active at night!',
    collocations: ['nocturnal animal', 'nocturnal habits', 'nocturnal routine']
  },
  {
    id: 'ghosting',
    word: 'Ghosting',
    phonetic: '/ˈɡoʊstɪŋ/',
    partOfSpeech: 'noun',
    category: 'Slang & Idioms',
    difficulty: 'Beginner',
    definition: 'The practice of abruptly ending all communication with someone without explanation.',
    simpleMeaning: 'Vanishing like a ghost without texting back',
    examples: [
      'After three great dates, he suddenly vanished—classic ghosting.',
      'Ghosting candidates after an interview creates a negative company image.',
      'Instead of ghosting, it’s far kinder to send a polite final message.'
    ],
    synonyms: ['disappearing', 'cutting off', 'cold-shouldering', 'vanishing'],
    antonyms: ['communicating', 'staying in touch', 'following up'],
    etymology: 'Modern modern slang originating from online dating and messaging culture in the 2010s.',
    mnemonic: 'Ghosting = Becoming an invisible ghost overnight!',
    collocations: ['digital ghosting', 'avoid ghosting', 'victim of ghosting']
  },
  {
    id: 'spill the tea',
    word: 'Spill the Tea',
    phonetic: '/spɪl ðə tiː/',
    partOfSpeech: 'idiom',
    category: 'Slang & Idioms',
    difficulty: 'Beginner',
    definition: 'To share gossip, secrets, or juicy news with friends.',
    simpleMeaning: 'Share the latest gossip',
    examples: [
      'Come sit down and spill the tea! What happened at the party last night?',
      'She promised not to spill the tea about the secret birthday surprise.',
      'Whenever they get together for lunch, they spill the tea about office drama.'
    ],
    synonyms: ['gossip', 'share news', 'dish out secrets', 'disclose info'],
    antonyms: ['keep secret', 'stay silent'],
    etymology: 'Originated in Drag and Black LGBTQ+ culture in the 1990s, where "T" stood for "Truth".',
    mnemonic: 'Spilling warm tea while chatting on the couch with best friends!',
    collocations: ['spill the tea', 'what\'s the tea?']
  },
  {
    id: 'cogent',
    word: 'Cogent',
    phonetic: '/ˈkoʊdʒənt/',
    partOfSpeech: 'adjective',
    category: 'GRE & SAT Prep',
    difficulty: 'Advanced',
    definition: 'Clear, logical, and convincing (of an argument or case).',
    simpleMeaning: 'Powerfully persuasive and sound in logic',
    examples: [
      'She presented a cogent argument that won over even the skeptical board members.',
      'The paper lacked cogent evidence to back up its daring assertions.',
      'His cogent explanation simplified the complex tax regulation.'
    ],
    synonyms: ['compelling', 'convincing', 'persuasive', 'lucid', 'well-founded'],
    antonyms: ['unconvincing', 'weak', 'flimsy', 'illogical'],
    etymology: 'From Latin "cogere", meaning "to drive together or compel".',
    mnemonic: 'Cogent = Agent of logic driving the point home!',
    collocations: ['cogent argument', 'cogent point', 'cogent reason']
  },
  {
    id: 'catalyst',
    word: 'Catalyst',
    phonetic: '/ˈkætəlɪst/',
    partOfSpeech: 'noun',
    category: 'Science & Nature',
    difficulty: 'Intermediate',
    definition: 'A person or thing that precipitates an event or accelerates change without being consumed itself.',
    simpleMeaning: 'A spark or driver that speeds up action or change',
    examples: [
      'The new policy acted as a catalyst for rapid economic growth in the tech sector.',
      'Enzymes act as biological catalysts to speed up reactions in living organisms.',
      'Her keynote address was the catalyst that sparked a national debate.'
    ],
    synonyms: ['spark', 'stimulus', 'driver', 'agent of change', 'impetus'],
    antonyms: ['inhibitor', 'hindrance', 'blocker'],
    etymology: 'From Greek "katalusis", meaning "dissolution or untying".',
    mnemonic: 'Catt-a-list: A list that triggers instant action!',
    collocations: ['catalyst for change', 'key catalyst', 'act as a catalyst']
  },
  {
    id: 'verisimilitude',
    word: 'Verisimilitude',
    phonetic: '/ˌvɛrɪsɪˈmɪlɪtjuːd/',
    partOfSpeech: 'noun',
    category: 'Literary',
    difficulty: 'Master',
    definition: 'The appearance or quality of being true or real.',
    simpleMeaning: 'Realism or the lifelike quality of a story or artwork',
    examples: [
      'The film director added genuine period costumes to give the movie verisimilitude.',
      'His detailed descriptions added a believable verisimilitude to the sci-fi setting.',
      'The novel lacks verisimilitude because the characters make nonsensical decisions.'
    ],
    synonyms: ['realism', 'authenticity', 'plausibility', 'truthfulness', 'credibility'],
    antonyms: ['falseness', 'unreality', 'improbability'],
    etymology: 'From Latin "verus" (true) + "similis" (similar).',
    mnemonic: 'Very-Similar-To-Truth = Verisimilitude!',
    collocations: ['air of verisimilitude', 'enhance verisimilitude', 'strive for verisimilitude']
  },
  {
    id: 'juxtapose',
    word: 'Juxtapose',
    phonetic: '/ˌdʒʌkstəˈpoʊz/',
    partOfSpeech: 'verb',
    category: 'Philosophy & Art',
    difficulty: 'Intermediate',
    definition: 'Place or deal with close together for contrasting effect.',
    simpleMeaning: 'Place side-by-side to highlight differences',
    examples: [
      'The gallery juxtaposed ancient marble statues with futuristic neon sculptures.',
      'In his essay, he juxtaposes the peace of nature with the hustle of urban life.',
      'Juxtaposing dark shadows against bright light creates striking photography.'
    ],
    synonyms: ['contrast', 'collocate', 'pair side-by-side', 'compare'],
    antonyms: ['separate', 'isolate', 'isolate'],
    etymology: 'From Latin "juxta" (next to) + French "poser" (to place).',
    mnemonic: 'Juxt-a-pose: posing two items right next to each other!',
    collocations: ['juxtapose two ideas', 'juxtaposed images', 'clearly juxtaposed']
  },
  {
    id: 'gregarious',
    word: 'Gregarious',
    phonetic: '/ɡrɪˈɡɛərɪəs/',
    partOfSpeech: 'adjective',
    category: 'Personality & Emotions',
    difficulty: 'Intermediate',
    definition: 'Fond of company; sociable and extroverted.',
    simpleMeaning: 'Outspoken, friendly, and loving social crowds',
    examples: [
      'She is a gregarious person who makes friends wherever she travels.',
      'Dolphins are gregarious marine mammals that swim in lively pods.',
      'His gregarious nature made him a natural host for networking galas.'
    ],
    synonyms: ['sociable', 'outgoing', 'extroverted', 'friendly', 'genial'],
    antonyms: ['introverted', 'reclusive', 'unsociable', 'solitary'],
    etymology: 'From Latin "gregarius", meaning "belonging to a flock" (grex = flock/herd).',
    mnemonic: 'Greg-Various: Greg loves being in the flock with various people!',
    collocations: ['gregarious personality', 'gregarious animal', 'gregarious host']
  },
  {
    id: 'zeitgeist',
    word: 'Zeitgeist',
    phonetic: '/ˈzaɪtɡaɪst/',
    partOfSpeech: 'noun',
    category: 'Philosophy & Art',
    difficulty: 'Advanced',
    definition: 'The defining spirit or mood of a particular period of history as shown by the ideas and beliefs of the time.',
    simpleMeaning: 'The vibe or spirit of an era',
    examples: [
      'The movie perfectly captured the counterculture zeitgeist of the 1960s.',
      'AI and sustainability dominate the modern cultural zeitgeist.',
      'Fashion trends often reflect the prevailing economic zeitgeist.'
    ],
    synonyms: ['spirit of the age', 'climate', 'ethos', 'mood', 'trend'],
    antonyms: [],
    etymology: 'German loanword: "Zeit" (time) + "Geist" (spirit) = spirit of the times.',
    mnemonic: 'Zeit (time) + Geist (ghost/spirit) = Ghost of time!',
    collocations: ['capture the zeitgeist', 'part of the zeitgeist', 'cultural zeitgeist']
  },
  {
    id: 'pivot',
    word: 'Pivot',
    phonetic: '/ˈpɪvət/',
    partOfSpeech: 'verb',
    category: 'Business & Tech',
    difficulty: 'Beginner',
    definition: 'To turn on a central axis; in business, to strategically adapt direction or strategy in response to market feedback.',
    simpleMeaning: 'To quickly change direction or strategy',
    examples: [
      'The startup decided to pivot from e-commerce to software services.',
      'She pivoted her career toward data science after taking an online bootcamp.',
      'When rain began, the event organizers pivoted to an indoor hall.'
    ],
    synonyms: ['shift', 'reorient', 'swivel', 'redirect', 'adapt'],
    antonyms: ['remain fixed', 'stay course'],
    etymology: 'From French "pivot", meaning a pin or central point on which something turns.',
    mnemonic: 'Pivot on one foot to face a brand new direction!',
    collocations: ['strategic pivot', 'pivot to online', 'pivot smoothly']
  },
  {
    id: 'audacious',
    word: 'Audacious',
    phonetic: '/ɔːˈdeɪʃəs/',
    partOfSpeech: 'adjective',
    category: 'GRE & SAT Prep',
    difficulty: 'Intermediate',
    definition: 'Showing a willingness to take surprisingly bold risks or showing impudent lack of respect.',
    simpleMeaning: 'Daringly bold, adventurous, or fearless',
    examples: [
      'Her audacious plan to launch a rocket on a slim budget surprised experts.',
      'The thieves made an audacious escape in broad daylight.',
      'He delivered an audacious speech challenging industry giants.'
    ],
    synonyms: ['bold', 'daring', 'fearless', 'brazen', 'intrepid'],
    antonyms: ['timid', 'cautious', 'meek', 'fearful'],
    etymology: 'From Latin "audax", meaning "bold or daring".',
    mnemonic: 'Audio-Dacious: Making a loud, audacious splash!',
    collocations: ['audacious goal', 'audacious move', 'audacious gamble']
  },
  {
    id: 'superfluous',
    word: 'Superfluous',
    phonetic: '/suːˈpɜːflʊəs/',
    partOfSpeech: 'adjective',
    category: 'Literary',
    difficulty: 'Advanced',
    definition: 'Unnecessary, especially through being more than enough.',
    simpleMeaning: 'Extra and unneeded; surplus',
    examples: [
      'Editing out superfluous words made her essay much punchier and concise.',
      'The new building rendered the old satellite office superfluous.',
      'Avoid adding superfluous details that confuse the reader.'
    ],
    synonyms: ['redundant', 'excess', 'unnecessary', 'surplus', 'nonessential'],
    antonyms: ['essential', 'necessary', 'vital', 'indispensable'],
    etymology: 'From Latin "super" (over) + "fluere" (to flow) — overflowing above what is required.',
    mnemonic: 'Super-Fluous = Super overflow of stuff you don\'t need!',
    collocations: ['superfluous details', 'superfluous information', 'render superfluous']
  },
  {
    id: 'symbiosis',
    word: 'Symbiosis',
    phonetic: '/ˌsɪmbeɪˈoʊsɪs/',
    partOfSpeech: 'noun',
    category: 'Science & Nature',
    difficulty: 'Intermediate',
    definition: 'A mutually beneficial relationship between different people, groups, or biological organisms.',
    simpleMeaning: 'A win-win partnership where both sides help each other',
    examples: [
      'Clownfish and sea anemones live in a classic marine symbiosis.',
      'The university and local technology firms formed a productive symbiosis.',
      'Great design and robust engineering exist in constant symbiosis.'
    ],
    synonyms: ['mutualism', 'cooperation', 'interdependence', 'collaboration'],
    antonyms: ['parasitism', 'antagonism', 'conflict'],
    etymology: 'From Greek "symbiosis", meaning "living together" (syn = together + bios = life).',
    mnemonic: 'Sym (Together) + Bio (Life) = Living together in harmony!',
    collocations: ['symbiosis between', 'harmonious symbiosis', 'biological symbiosis']
  },
  {
    id: 'soliloquy',
    word: 'Soliloquy',
    phonetic: '/səˈlɪləkwi/',
    partOfSpeech: 'noun',
    category: 'Literary',
    difficulty: 'Advanced',
    definition: 'An act of speaking one\'s thoughts aloud when by oneself or regardless of any hearers, especially by a character in a play.',
    simpleMeaning: 'A speech given by a character talking aloud to themselves',
    examples: [
      'Hamlet’s "To be or not to be" is the most famous soliloquy in Western literature.',
      'The actor delivered a passionate soliloquy on the darkened stage.',
      'She indulged in a private soliloquy as she rehearsed her job interview.'
    ],
    synonyms: ['monologue', 'speech to oneself', 'internal monologue'],
    antonyms: ['dialogue', 'conversation'],
    etymology: 'From Latin "solus" (alone) + "loqui" (to speak).',
    mnemonic: 'Solo-Loquy: Solo speaking!',
    collocations: ['dramatic soliloquy', 'famous soliloquy', 'deliver a soliloquy']
  },
  {
    id: 'obfuscate',
    word: 'Obfuscate',
    phonetic: '/ˈɒbfəskeɪt/',
    partOfSpeech: 'verb',
    category: 'GRE & SAT Prep',
    difficulty: 'Master',
    definition: 'To render obscure, unclear, or unintelligible; to deliberately confuse.',
    simpleMeaning: 'To deliberately make something cloudy or hard to understand',
    examples: [
      'The suspect tried to obfuscate the truth by giving conflicting accounts.',
      'Complex legalese is often used in terms of service to obfuscate hidden fees.',
      'Don\'t obfuscate the main issue with minor procedural details.'
    ],
    synonyms: ['muddle', 'confuse', 'obscure', 'cloud', 'blur'],
    antonyms: ['clarify', 'elucidate', 'simplify', 'explain'],
    etymology: 'From Latin "obfuscare", meaning "to darken or make dark".',
    mnemonic: 'Ob-FUS-cate: Making things FUS-zy and dark!',
    collocations: ['obfuscate the truth', 'obfuscate the facts', 'deliberately obfuscate']
  },
  {
    id: 'main character energy',
    word: 'Main Character Energy',
    phonetic: '/meɪn ˈkærɪktər ˈɛnərdʒi/',
    partOfSpeech: 'idiom',
    category: 'Slang & Idioms',
    difficulty: 'Beginner',
    definition: 'An attitude or aura of confidence, charisma, and drama as if one is the star of their own movie.',
    simpleMeaning: 'Walking around with magnetic star confidence',
    examples: [
      'Walking down the street with headphones on giving full main character energy.',
      'She exuded main character energy the moment she stepped onto the red carpet.',
      'Unapologetically prioritizing self-care is true main character energy.'
    ],
    synonyms: ['star quality', 'charisma', 'swagger', 'confidence', 'presence'],
    antonyms: ['background noise', 'wallflower'],
    etymology: 'Pop cultural slang popularized on TikTok and Instagram in 2020.',
    mnemonic: 'Imagine cinematic background music playing as you walk in slow motion!',
    collocations: ['radiate main character energy', 'full main character energy']
  },
  {
    id: 'symphony',
    word: 'Symphony',
    phonetic: '/ˈsɪmfəni/',
    partOfSpeech: 'noun',
    category: 'Philosophy & Art',
    difficulty: 'Beginner',
    definition: 'An elaborate musical composition for full orchestra; or a harmonious combination of elements.',
    simpleMeaning: 'Harmonious blend of instruments or ideas',
    examples: [
      'Beethoven’s Ninth Symphony is widely regarded as a masterpiece.',
      'The autumn forest was a rich symphony of golden colors and crisp leaves.',
      'The chef created a symphony of subtle flavors on a single plate.'
    ],
    synonyms: ['orchestral piece', 'harmony', 'blend', 'arrangement'],
    antonyms: ['cacophony', 'discord'],
    etymology: 'From Greek "symphonia", meaning "agreement or harmony of sound".',
    mnemonic: 'Sym (Together) + Phony (Sound) = Beautiful sound together!',
    collocations: ['symphony orchestra', 'symphony of colors', 'composed a symphony']
  },
  {
    id: 'stoic',
    word: 'Stoic',
    phonetic: '/ˈstoʊɪk/',
    partOfSpeech: 'adjective',
    category: 'Philosophy & Art',
    difficulty: 'Intermediate',
    definition: 'Enduring pain or hardship without showing feelings or complaining.',
    simpleMeaning: 'Calm, patient, and unbothered by difficulty',
    examples: [
      'He remained stoic throughout the long ordeal, giving no sign of distress.',
      'A stoic mindset helps people focus on what they can control.',
      'Her stoic response to criticism impressed the board.'
    ],
    synonyms: ['uncomplaining', 'patient', 'resigned', 'impassive', 'calm'],
    antonyms: ['emotional', 'complaining', 'volatile', 'overreactive'],
    etymology: 'From the Greek school of philosophy founded by Zeno, who taught at the Stoa Poikile in Athens.',
    mnemonic: 'Stone-like Stoic: unshakable like a statue in a storm.',
    collocations: ['stoic attitude', 'stoic expression', 'remain stoic']
  },
  {
    id: 'perseverance',
    word: 'Perseverance',
    phonetic: '/ˌpɜːsɪˈvɪərəns/',
    partOfSpeech: 'noun',
    category: 'Everyday Gems',
    difficulty: 'Beginner',
    definition: 'Persistence in doing something despite difficulty or delay in achieving success.',
    simpleMeaning: 'Sticking with a goal and never giving up',
    examples: [
      'Through sheer perseverance, she mastered fluent Japanese in two years.',
      'NASA\'s Mars rover Perseverance was named after this vital human quality.',
      'Success is usually ten percent talent and ninety percent perseverance.'
    ],
    synonyms: ['persistence', 'tenacity', 'determination', 'grit', 'dedication'],
    antonyms: ['giving up', 'surrender', 'apathy', 'inconstancy'],
    etymology: 'From Latin "perseverare", meaning "to abide strictly or persist".',
    mnemonic: 'Perseverance = Per-severe-ance: pushing through severe challenges!',
    collocations: ['sheer perseverance', 'requires perseverance', 'demonstrate perseverance']
  },
  {
    id: 'scintillating',
    word: 'Scintillating',
    phonetic: '/ˈsɪntɪleɪtɪŋ/',
    partOfSpeech: 'adjective',
    category: 'Literary',
    difficulty: 'Advanced',
    definition: 'Brilliantly clever, witty, or sparkling; sparkling or shining brightly.',
    simpleMeaning: 'Sparkling, witty, and brilliantly animated',
    examples: [
      'The dinner conversation was scintillating, filled with humor and debate.',
      'She gave a scintillating performance on the piano that mesmerized the crowd.',
      'The clear night sky was filled with scintillating distant stars.'
    ],
    synonyms: ['sparkling', 'brilliant', 'dazzling', 'witty', 'stimulating'],
    antonyms: ['dull', 'boring', 'tedious', 'drab'],
    etymology: 'From Latin "scintillare", meaning "to spark or emit sparks".',
    mnemonic: 'Scintillating = Sparking + Illuminating!',
    collocations: ['scintillating conversation', 'scintillating performance', 'scintillating wit']
  },
  {
    id: 'anomalous',
    word: 'Anomalous',
    phonetic: '/əˈnɒmələs/',
    partOfSpeech: 'adjective',
    category: 'Science & Nature',
    difficulty: 'Intermediate',
    definition: 'Deviating from what is standard, normal, or expected.',
    simpleMeaning: 'Unusual or abnormal, standing out from the rule',
    examples: [
      'Scientists investigated an anomalous temperature spike near the arctic pole.',
      'His high test score was anomalous given his lack of study time.',
      'The audit flagged several anomalous financial transactions.'
    ],
    synonyms: ['abnormal', 'irregular', 'unusual', 'atypical', 'exceptional'],
    antonyms: ['normal', 'typical', 'standard', 'regular'],
    etymology: 'From Greek "anomalos", meaning "uneven or irregular" (an = not + homalos = even).',
    mnemonic: 'An-A-Normal-us = Not normal for us!',
    collocations: ['anomalous reading', 'anomalous result', 'anomalous behavior']
  },
  {
    id: 'paradox',
    word: 'Paradox',
    phonetic: '/ˈpærədɒks/',
    partOfSpeech: 'noun',
    category: 'Philosophy & Art',
    difficulty: 'Intermediate',
    definition: 'A seemingly absurd or self-contradictory statement that may nonetheless prove to be true.',
    simpleMeaning: 'A puzzle that seems contradictory but reveals a truth',
    examples: [
      'It is a paradox that the more you give, the richer you often feel.',
      'The time travel paradox asks what happens if you alter your own past.',
      'He loved the paradox of peaceful chaos in bustling big cities.'
    ],
    synonyms: ['contradiction', 'enigma', 'puzzle', 'inconsistency', 'riddle'],
    antonyms: ['certainty', 'truth', 'fact'],
    etymology: 'From Greek "para" (contrary to) + "doxa" (opinion).',
    mnemonic: 'Pair-of-ducks in a desert: looks weird and contradictory!',
    collocations: ['apparent paradox', 'central paradox', 'living paradox']
  },
  {
    id: 'ambivalent',
    word: 'Ambivalent',
    phonetic: '/æmˈbɪvələnt/',
    partOfSpeech: 'adjective',
    category: 'Personality & Emotions',
    difficulty: 'Intermediate',
    definition: 'Having mixed feelings or contradictory ideas about something or someone.',
    simpleMeaning: 'Torn between two opposing feelings or choices',
    examples: [
      'She felt ambivalent about accepting the promotion because it required moving abroad.',
      'Voters remained ambivalent about both candidate options.',
      'He has an ambivalent relationship with social media—he loves and hates it.'
    ],
    synonyms: ['undecided', 'conflicted', 'unsure', 'hesitant', 'torn'],
    antonyms: ['decisive', 'certain', 'resolute', 'clear-cut'],
    etymology: 'From Latin "ambi" (both) + "valentia" (strength) — pulled by two equal forces.',
    mnemonic: 'Ambi = Both (like ambidextrous): feeling both sides at once!',
    collocations: ['feel ambivalent', 'ambivalent attitude', 'deeply ambivalent']
  },
  {
    id: 'synergistic',
    word: 'Synergistic',
    phonetic: '/ˌsɪnəˈdʒɪstɪk/',
    partOfSpeech: 'adjective',
    category: 'Business & Tech',
    difficulty: 'Intermediate',
    definition: 'Relating to the interaction or cooperation of two or more organizations or agents to produce a combined effect greater than the sum of their separate parts.',
    simpleMeaning: 'Working together to multiply results',
    examples: [
      'The synergistic blend of music and visuals made the concert unforgettable.',
      'These two vitamins have a synergistic effect on immune system health.',
      'Our team achieved synergistic growth by sharing cross-department tools.'
    ],
    synonyms: ['cooperative', 'collaborative', 'combined', 'symbiotic'],
    antonyms: ['antagonistic', 'incompatible'],
    etymology: 'From Greek "sunergetikos", meaning "working together".',
    mnemonic: 'Synergy in action!',
    collocations: ['synergistic effect', 'synergistic relationship']
  },
  {
    id: 'capricious',
    word: 'Capricious',
    phonetic: '/kəˈprɪʃəs/',
    partOfSpeech: 'adjective',
    category: 'GRE & SAT Prep',
    difficulty: 'Advanced',
    definition: 'Given to sudden and unaccountable changes of mood or behavior.',
    simpleMeaning: 'Fickle, unpredictable, and impulse-driven',
    examples: [
      'The spring weather was notoriously capricious, switching from sunshine to hail.',
      'A capricious ruler makes laws on a whim, throwing society into uncertainty.',
      'Her capricious spending habits left her budget in disarray.'
    ],
    synonyms: ['fickle', 'inconstant', 'whimsical', 'unpredictable', 'impulsive'],
    antonyms: ['predictable', 'steady', 'consistent', 'reliable'],
    etymology: 'From Italian "capriccio", meaning a sudden whim or shiver like a leaping goat (capra).',
    mnemonic: 'Capricious = Capricorn goat leaping unpredictably from rock to rock!',
    collocations: ['capricious weather', 'capricious behavior', 'capricious mood']
  },
  {
    id: 'no cap',
    word: 'No Cap',
    phonetic: '/noʊ kæp/',
    partOfSpeech: 'idiom',
    category: 'Slang & Idioms',
    difficulty: 'Beginner',
    definition: 'Used to emphasize that one is telling the truth or not lying/exaggerating.',
    simpleMeaning: 'For real / No lie / Seriously',
    examples: [
      'That was the best pizza I’ve ever eaten in my life, no cap.',
      'I practiced for five hours straight yesterday, no cap.',
      'She is genuinely the smartest person in our class, no cap.'
    ],
    synonyms: ['for real', 'honestly', 'no lie', 'seriously', 'truthfully'],
    antonyms: ['capping', 'lying', 'exaggerating'],
    etymology: 'Originated in African American Vernacular English (AAVE) in the Southern US, popularized globally via hip-hop and internet culture.',
    mnemonic: 'No Cap = No fake lid on the truth!',
    collocations: ['no cap', 'that\'s no cap']
  },
  {
    id: 'ubiquity',
    word: 'Ubiquity',
    phonetic: '/juːˈbɪkwɪti/',
    partOfSpeech: 'noun',
    category: 'Business & Tech',
    difficulty: 'Advanced',
    definition: 'The state or capacity of being everywhere at once or found everywhere.',
    simpleMeaning: 'The state of being everywhere',
    examples: [
      'The ubiquity of Wi-Fi has transformed how digital nomads work globally.',
      'Despite the ubiquity of smartphones, physical books remain popular.',
      'The ubiquity of social media alters how communities interact.'
    ],
    synonyms: ['omnipresence', 'pervasiveness', 'universality'],
    antonyms: ['rarity', 'scarcity'],
    etymology: 'From Latin "ubique" (everywhere).',
    mnemonic: 'Ubiquity = Unique quality of being everywhere!',
    collocations: ['ubiquity of smartphones', 'growing ubiquity']
  },
  {
    id: 'visceral',
    word: 'Visceral',
    phonetic: '/ˈvɪsərəl/',
    partOfSpeech: 'adjective',
    category: 'Personality & Emotions',
    difficulty: 'Intermediate',
    definition: 'Relating to deep inward feelings rather than intellect; instinctive.',
    simpleMeaning: 'Gut-level, deeply felt emotion rather than logical thought',
    examples: [
      'She had a visceral reaction of pure horror when the horror movie monster appeared.',
      'His speeches appeal to raw, visceral emotions rather than dry statistical facts.',
      'A visceral instinct urged him to turn back immediately.'
    ],
    synonyms: ['gut', 'instinctive', 'deep-seated', 'emotional', 'intuitive'],
    antonyms: ['intellectual', 'logical', 'rational'],
    etymology: 'From Latin "viscera", meaning "internal organs / entrails".',
    mnemonic: 'Visceral = Felt deep in the gut organs!',
    collocations: ['visceral reaction', 'visceral feeling', 'visceral instinct']
  },
  {
    id: 'clandestine',
    word: 'Clandestine',
    phonetic: '/klænˈdɛstɪn/',
    partOfSpeech: 'adjective',
    category: 'GRE & SAT Prep',
    difficulty: 'Advanced',
    definition: 'Kept secret or done secretively, especially because illicit or improper.',
    simpleMeaning: 'Secret and undercover',
    examples: [
      'The spies held a clandestine meeting under cover of dark night.',
      'They launched a clandestine operation to rescue hostages.',
      'She discovered a clandestine file hidden in the server vault.'
    ],
    synonyms: ['secret', 'covert', 'stealthy', 'surreptitious', 'undercover'],
    antonyms: ['overt', 'open', 'public'],
    etymology: 'From Latin "clandestinus", from "clam" (secretly).',
    mnemonic: 'Clan-Destine: A secret clan operating in destiny shadow!',
    collocations: ['clandestine operation', 'clandestine meeting', 'clandestine agreement']
  },
  {
    id: 'altruistic',
    word: 'Altruistic',
    phonetic: '/ˌæltruːˈɪstɪk/',
    partOfSpeech: 'adjective',
    category: 'Personality & Emotions',
    difficulty: 'Intermediate',
    definition: 'Showing a disinterested and selfless concern for the well-being of others.',
    simpleMeaning: 'Selfless and caring for others without personal gain',
    examples: [
      'Donating blood is a purely altruistic act that saves lives.',
      'Her altruistic nature inspired everyone in her neighborhood to volunteer.',
      'True philanthropy is driven by altruistic motives rather than tax breaks.'
    ],
    synonyms: ['selfless', 'philanthropic', 'benevolent', 'charitable', 'generous'],
    antonyms: ['selfish', 'egocentric', 'self-serving'],
    etymology: 'From French "altruisme", from Italian "altrui" (others).',
    mnemonic: 'Altruistic = ALL-True-istic to others!',
    collocations: ['altruistic behavior', 'altruistic act', 'altruistic motivation']
  },
  {
    id: 'chrysalis',
    word: 'Chrysalis',
    phonetic: '/ˈkrɪsəlɪs/',
    partOfSpeech: 'noun',
    category: 'Science & Nature',
    difficulty: 'Intermediate',
    definition: 'A quiescent insect pupa, especially of a butterfly; a sheltered state or stage of growth.',
    simpleMeaning: 'A protective cocoon or stage of personal transformation',
    examples: [
      'The caterpillar spun a golden chrysalis on the underside of a leaf.',
      'Her year traveling abroad was a transformative chrysalis for her confidence.',
      'Out of the chrysalis emerged a breathtaking monarch butterfly.'
    ],
    synonyms: ['cocoon', 'pupa', 'stage of growth', 'incubator'],
    antonyms: [],
    etymology: 'From Greek "khrusallis", from "khrusos" (gold), referring to the golden sheen on some pupae.',
    mnemonic: 'Chrysalis = Crystal case for butterflies!',
    collocations: ['emerge from chrysalis', 'golden chrysalis']
  },
  {
    id: 'panacea',
    word: 'Panacea',
    phonetic: '/ˌpænəˈsiːə/',
    partOfSpeech: 'noun',
    category: 'GRE & SAT Prep',
    difficulty: 'Advanced',
    definition: 'A solution or remedy for all difficulties or diseases; a cure-all.',
    simpleMeaning: 'A cure-all or magic solution for everything',
    examples: [
      'Technology is a powerful tool, but it is not a universal panacea for educational issues.',
      'Money can fix many immediate problems, but it is rarely a panacea for happiness.',
      'Ancient healers searched for a panacea that could cure all ailments.'
    ],
    synonyms: ['cure-all', 'universal remedy', 'magic bullet', 'elixir'],
    antonyms: [],
    etymology: 'From Greek "panakeia" (pan = all + akos = remedy).',
    mnemonic: 'Pan (All) + Acea (Heal): Panacea heals all!',
    collocations: ['universal panacea', 'no single panacea', 'seek a panacea']
  },
  {
    id: 'savor',
    word: 'Savor',
    phonetic: '/ˈseɪvər/',
    partOfSpeech: 'verb',
    category: 'Everyday Gems',
    difficulty: 'Beginner',
    definition: 'Taste or enjoy completely; enjoy an experience slowly and thoroughly.',
    simpleMeaning: 'To fully enjoy and appreciate a moment or taste',
    examples: [
      'Take a moment to savor your victory before rushing to the next challenge.',
      'She closed her eyes to savor the delicious homemade chocolate cake.',
      'We sat on the porch to savor the peace of early morning.'
    ],
    synonyms: ['relish', 'enjoy', 'treasure', 'delight in', 'appreciate'],
    antonyms: ['rush', 'disregard', 'ignore'],
    etymology: 'From Old French "savour", from Latin "sapere" (to taste or be wise).',
    mnemonic: 'Savor = Flavor + Save the moment!',
    collocations: ['savor the moment', 'savor every bite', 'savor the victory']
  },
  {
    id: 'juxtaposition',
    word: 'Juxtaposition',
    phonetic: '/ˌdʒʌkstəpəˈzɪʃən/',
    partOfSpeech: 'noun',
    category: 'Philosophy & Art',
    difficulty: 'Intermediate',
    definition: 'The fact of two things being seen or placed close together with contrasting effect.',
    simpleMeaning: 'A contrast created by placing two opposite things side by side',
    examples: [
      'The juxtaposition of the ancient temple next to towering glass skyscrapers was striking.',
      'In the film, the soft acoustic guitar provided a chilling juxtaposition to the violent storm.',
      'Her artwork uses color juxtaposition to evoke intense emotion.'
    ],
    synonyms: ['contrast', 'comparison', 'collocation', 'proximity'],
    antonyms: ['distance', 'separation'],
    etymology: 'From Latin "juxta" (near) + "position".',
    mnemonic: 'Juxtaposition = Placing side-by-side to contrast!',
    collocations: ['striking juxtaposition', 'stark juxtaposition']
  },
  {
    id: 'enigmatic',
    word: 'Enigmatic',
    phonetic: '/ˌɛnɪɡˈmætɪk/',
    partOfSpeech: 'adjective',
    category: 'Literary',
    difficulty: 'Intermediate',
    definition: 'Difficult to interpret or understand; mysterious.',
    simpleMeaning: 'Mysterious, puzzling, and intriguing',
    examples: [
      'Mona Lisa’s enigmatic smile has fascinated art lovers for centuries.',
      'He left behind an enigmatic note that raised more questions than answers.',
      'The CEO remained an enigmatic figure who rarely gave public interviews.'
    ],
    synonyms: ['mysterious', 'puzzling', 'baffling', 'cryptic', 'inscrutable'],
    antonyms: ['straightforward', 'clear', 'transparent', 'obvious'],
    etymology: 'From Greek "ainigma", meaning "riddle".',
    mnemonic: 'Enigmatic = Like the Enigma code machine in WWII, hard to crack!',
    collocations: ['enigmatic smile', 'enigmatic figure', 'enigmatic answer']
  },
  {
    id: 'venerable',
    word: 'Venerable',
    phonetic: '/ˈvɛnərəbəl/',
    partOfSpeech: 'adjective',
    category: 'Literary',
    difficulty: 'Advanced',
    definition: 'Accorded a great deal of respect, especially because of age, wisdom, or character.',
    simpleMeaning: 'Deeply respected due to age, wisdom, or honorable position',
    examples: [
      'The venerable professor retired after fifty years of groundbreaking research.',
      'We visited a venerable cathedral built in the twelfth century.',
      'The organization honored its venerable founder with a lifetime achievement award.'
    ],
    synonyms: ['respected', 'revered', 'hallowed', 'esteemed', 'dignified'],
    antonyms: ['disreputable', 'dishonored', 'unrespected'],
    etymology: 'From Latin "venerabilis", from "venerari" (to worship or revere).',
    mnemonic: 'Venerable = Very Able & Old: highly respected!',
    collocations: ['venerable institution', 'venerable master', 'venerable tradition']
  },
  {
    id: 'slay',
    word: 'Slay',
    phonetic: '/sleɪ/',
    partOfSpeech: 'verb',
    category: 'Slang & Idioms',
    difficulty: 'Beginner',
    definition: 'In modern slang, to perform exceptionally well, look amazing, or succeed spectacularly.',
    simpleMeaning: 'To do something amazingly well or look fabulous',
    examples: [
      'She absolutely slayed her presentation today and got unanimous approval.',
      'You are slaying in that outfit!',
      'They worked hard all semester and slayed their final exams.'
    ],
    synonyms: ['excel', 'dominate', 'shine', 'nail it', 'triumph'],
    antonyms: ['fail', 'flop', 'fumble'],
    etymology: 'Historically meant to kill, re-purposed in ballroom and drag subculture as "killing the audience with beauty or talent".',
    mnemonic: 'Slay the runway with stunning confidence!',
    collocations: ['slay the stage', 'slay all day', 'slayed it']
  },
  {
    id: 'dogmatic',
    word: 'Dogmatic',
    phonetic: '/dɒɡˈmætɪk/',
    partOfSpeech: 'adjective',
    category: 'GRE & SAT Prep',
    difficulty: 'Advanced',
    definition: 'Inclined to lay down principles as incontrovertibly true, without considering other opinions.',
    simpleMeaning: 'Arrogantly stubborn about one’s beliefs',
    examples: [
      'The director was so dogmatic that he refused to listen to any feedback from the crew.',
      'Avoid dogmatic statements when participating in an open debate.',
      'Science flourishes on questioning, not on dogmatic assertions.'
    ],
    synonyms: ['opinionated', 'inflexible', 'assertive', 'authoritative', 'intolerant'],
    antonyms: ['open-minded', 'flexible', 'receptive'],
    etymology: 'From Greek "dogma", meaning "opinion or belief".',
    mnemonic: 'Dog-matic: Like a bulldog locking its jaws on an opinion!',
    collocations: ['dogmatic approach', 'dogmatic belief', 'dogmatic assertion']
  },
  {
    id: 'perfunctory',
    word: 'Perfunctory',
    phonetic: '/pəˈfʌŋktəri/',
    partOfSpeech: 'adjective',
    category: 'GRE & SAT Prep',
    difficulty: 'Master',
    definition: 'Carried out with a minimum of effort or reflection; done routinely.',
    simpleMeaning: 'Done carelessly or mechanically just to get it over with',
    examples: [
      'He gave a perfunctory nod as he rushed past his colleagues into the elevator.',
      'The security guard made a perfunctory inspection of our bags.',
      'She offered a perfunctory apology without looking up from her phone.'
    ],
    synonyms: ['cursory', 'hasty', 'careless', 'routine', 'mechanical'],
    antonyms: ['thorough', 'meticulous', 'careful', 'thoughtful'],
    etymology: 'From Latin "perfungi", meaning "to discharge or get through a duty".',
    mnemonic: 'Per-FUNCTION-ary: Just going through the functions without heart!',
    collocations: ['perfunctory nod', 'perfunctory greeting', 'perfunctory effort']
  },
  {
    id: 'effervescent',
    word: 'Effervescent',
    phonetic: '/ˌɛfərˈvɛsənt/',
    partOfSpeech: 'adjective',
    category: 'Personality & Emotions',
    difficulty: 'Intermediate',
    definition: 'Vivacious and enthusiastic; giving off bubbles like a fizzy drink.',
    simpleMeaning: 'Bubbly, joyful, and full of high spirits',
    examples: [
      'Her effervescent personality lit up the room as soon as she arrived.',
      'They poured a glass of cold, effervescent sparkling water.',
      'The team’s effervescent enthusiasm turned a dull project into a fun challenge.'
    ],
    synonyms: ['bubbly', 'vivacious', 'sparkling', 'lively', 'ebullient'],
    antonyms: ['dull', 'depressed', 'flat', 'somber'],
    etymology: 'From Latin "effervescere" (ex = out + fervescere = to begin to boil).',
    mnemonic: 'Effervescent = Ever-Fizzy-Scent!',
    collocations: ['effervescent personality', 'effervescent smile', 'effervescent liquid']
  },
  {
    id: 'tenacious',
    word: 'Tenacious',
    phonetic: '/təˈneɪʃəs/',
    partOfSpeech: 'adjective',
    category: 'Everyday Gems',
    difficulty: 'Intermediate',
    definition: 'Tending to keep a firm hold of something; clinging or adhering closely; persistent.',
    simpleMeaning: 'Determined and holding on tight despite obstacles',
    examples: [
      'She is a tenacious investigator who never gives up on a cold case.',
      'Despite facing financial struggles, his tenacious spirit kept his business afloat.',
      'The vine showed tenacious growth, climbing up the stone wall.'
    ],
    synonyms: ['persistent', 'determined', 'dogged', 'resolute', 'unyielding'],
    antonyms: ['surrendering', 'weak', 'irresolute', 'slack'],
    etymology: 'From Latin "tenax", from "tenere" (to hold).',
    mnemonic: 'Tenacious = Hold ON like TEN claws!',
    collocations: ['tenacious grip', 'tenacious effort', 'tenacious spirit']
  },
  {
    id: 'hyperbole',
    word: 'Hyperbole',
    phonetic: '/haɪˈpɜːrbəli/',
    partOfSpeech: 'noun',
    category: 'Literary',
    difficulty: 'Intermediate',
    definition: 'Exaggerated statements or claims not meant to be taken literally.',
    simpleMeaning: 'Extreme exaggeration for emphasis',
    examples: [
      'Saying "I\'ve told you a million times" is a classic hyperbole.',
      'His speech was filled with political hyperbole and empty promises.',
      'Without hyperbole, that was the most exciting match of the year.'
    ],
    synonyms: ['exaggeration', 'overstatement', 'embellishment', 'amplification'],
    antonyms: ['understatement', 'litotes'],
    etymology: 'From Greek "huperbole", meaning "excess or throwing beyond".',
    mnemonic: 'Hyper-Bowl: A bowl so huge it’s hype-exaggerated!',
    collocations: ['wild hyperbole', 'without hyperbole', 'classic hyperbole']
  },
  {
    id: 'cliche',
    word: 'Cliché',
    phonetic: '/kliːˈʃeɪ/',
    partOfSpeech: 'noun',
    category: 'Literary',
    difficulty: 'Beginner',
    definition: 'A phrase or opinion that is overused and betrays a lack of original thought.',
    simpleMeaning: 'An overused expression or tired idea',
    examples: [
      'Ending an action movie with a ticking bomb countdown has become a cliché.',
      'Try to avoid clichés like "think outside the box" in your resume.',
      'The romance novel managed to feel fresh despite a few familiar clichés.'
    ],
    synonyms: ['platitude', 'stereotype', 'truism', 'hackneyed phrase'],
    antonyms: ['originality', 'novelty'],
    etymology: 'French printing term referring to the sound of a stereotype printing plate being cast.',
    mnemonic: 'Cliché = Click-say: something said so often it clicks on repeat.',
    collocations: ['tired cliché', 'avoid clichés', 'hollywood cliché']
  },
  {
    id: 'touch grass',
    word: 'Touch Grass',
    phonetic: '/tʌtʃ ɡræs/',
    partOfSpeech: 'idiom',
    category: 'Slang & Idioms',
    difficulty: 'Beginner',
    definition: 'An imperative telling someone to step away from the internet/screens and reconnect with real life.',
    simpleMeaning: 'Log off the internet and get a reality check outside',
    examples: [
      'If you\'re arguing about fictional characters on Twitter at 3 AM, go touch grass!',
      'He spent twelve hours playing video games and decided it was time to touch grass.',
      'A gentle reminder to touch grass and take a walk in sunshine.'
    ],
    synonyms: ['get a reality check', 'disconnect', 'go outside', 'take a break'],
    antonyms: ['doomscroll', 'stay chronically online'],
    etymology: 'Internet culture idiom popularized on Reddit, Twitter, and gaming forums around 2020.',
    mnemonic: 'Literally stepping outside to feel grass under your feet!',
    collocations: ['go touch grass', 'time to touch grass']
  },
  {
    id: 'fortitude',
    word: 'Fortitude',
    phonetic: '/ˈfɔːrtɪtjuːd/',
    partOfSpeech: 'noun',
    category: 'Personality & Emotions',
    difficulty: 'Intermediate',
    definition: 'Courage in pain or adversity.',
    simpleMeaning: 'Inner mental strength and brave resilience',
    examples: [
      'She showed great moral fortitude by standing up against corruption.',
      'It takes fortitude to keep trying after experiencing repeated failure.',
      'The soldiers endured harsh winter weather with remarkable fortitude.'
    ],
    synonyms: ['courage', 'bravery', 'grit', 'endurance', 'valiance'],
    antonyms: ['cowardice', 'weakness', 'timidity'],
    etymology: 'From Latin "fortitudo", from "fortis" (strong).',
    mnemonic: 'Fortitude = Fort-like inner strength!',
    collocations: ['mental fortitude', 'moral fortitude', 'show fortitude']
  },
  {
    id: 'astute',
    word: 'Astute',
    phonetic: '/əˈstjuːt/',
    partOfSpeech: 'adjective',
    category: 'Business & Tech',
    difficulty: 'Intermediate',
    definition: 'Having or showing an ability to accurately assess situations or people and turn this to one\'s advantage.',
    simpleMeaning: 'Sharp-minded, shrewd, and quick to understand',
    examples: [
      'Her astute market observations allowed the company to invest early in AI.',
      'An astute negotiator knows when to push and when to listen.',
      'He made an astute observation about the flaw in our security protocol.'
    ],
    synonyms: ['shrewd', 'sharp', 'perceptive', 'insightful', 'canny'],
    antonyms: ['naive', 'foolish', 'obtuse', 'clueless'],
    etymology: 'From Latin "astutus", from "astus" (craft or cunning).',
    mnemonic: 'Astute = A-STUDENT mind: razor sharp insight!',
    collocations: ['astute observer', 'astute businessman', 'astute judgement']
  },
  {
    id: 'quandary',
    word: 'Quandary',
    phonetic: '/ˈkwɒndəri/',
    partOfSpeech: 'noun',
    category: 'Everyday Gems',
    difficulty: 'Intermediate',
    definition: 'A state of perplexity or uncertainty over what to do in a difficult situation.',
    simpleMeaning: 'A dilemma or difficult choice',
    examples: [
      'She was in a quandary over whether to accept the new job offer or stay near family.',
      'The sudden cancellation left the event organizers in a tough quandary.',
      'How to distribute limited resources fairly is an ethical quandary.'
    ],
    synonyms: ['dilemma', 'predicament', 'plight', 'pickle', 'puzzlement'],
    antonyms: ['certainty', 'solution', 'resolution'],
    etymology: 'Uncertain origin, possibly from Latin "quando" (when?).',
    mnemonic: 'Quandary = "WHEN-dare-I?" choosing what to do!',
    collocations: ['in a quandary', 'ethical quandary', 'difficult quandary']
  },
  {
    id: 'ostentatious',
    word: 'Ostentatious',
    phonetic: '/ˌɒstɛnˈteɪʃəs/',
    partOfSpeech: 'adjective',
    category: 'Personality & Emotions',
    difficulty: 'Advanced',
    definition: 'Characterized by vulgar or pretentious display; designed to impress or attract notice.',
    simpleMeaning: 'Showy, flashy, or flaunting wealth/status',
    examples: [
      'He wore an ostentatious diamond watch that flashed in every direction.',
      'The mansion’s gold-plated gates were criticized as overly ostentatious.',
      'She preferred quiet elegance over ostentatious displays of wealth.'
    ],
    synonyms: ['showy', 'flashy', 'pretentious', 'flamboyant', 'gaudy'],
    antonyms: ['modest', 'subtle', 'unobtrusive', 'understated'],
    etymology: 'From Latin "ostentare", meaning "to display or show off".',
    mnemonic: 'Ostentatious = OSTRICH displaying big flashy feathers!',
    collocations: ['ostentatious display', 'ostentatious lifestyle', 'ostentatious wealth']
  },
  {
    id: 'ephemeralize',
    word: 'Ephemeralize',
    phonetic: '/ɪˈfɛmərəlaɪz/',
    partOfSpeech: 'verb',
    category: 'Business & Tech',
    difficulty: 'Master',
    definition: 'To do more and more with less and less until eventually you can do everything with nothing (coined by Buckminster Fuller).',
    simpleMeaning: 'To innovate and optimize so efficiently that less resources achieve more',
    examples: [
      'Microchips ephemeralize computing power into tiny pocket devices.',
      'Cloud storage ephemeralized physical file cabinets.',
      'Engineers constantly seek ways to ephemeralize manufacturing logistics.'
    ],
    synonyms: ['streamline', 'optimize', 'miniaturize', 'dematerialize'],
    antonyms: ['complicate', 'bloat'],
    etymology: 'Coined by thinker Buckminster Fuller in his futurist economic theory.',
    mnemonic: 'Ephemeralize = Make heavy things light and efficient as air!',
    collocations: ['ephemeralize technology', 'ephemeralize production']
  },
  {
    id: 'prolific',
    word: 'Prolific',
    phonetic: '/prəˈlɪfɪk/',
    partOfSpeech: 'adjective',
    category: 'Everyday Gems',
    difficulty: 'Intermediate',
    definition: 'Producing much fruit or foliage or many works.',
    simpleMeaning: 'Highly productive and creative',
    examples: [
      'Stephen King is a prolific author who has published over 60 bestselling novels.',
      'The warm moist spring weather created a prolific garden harvest.',
      'She had a prolific songwriting period, creating thirty songs in one month.'
    ],
    synonyms: ['productive', 'creative', 'fertile', 'fruitful', 'abundant'],
    antonyms: ['unproductive', 'barren', 'sterile'],
    etymology: 'From Latin "proles" (offspring) + "facere" (to make).',
    mnemonic: 'Pro-LIFIC = Producing Life & Fiction in abundance!',
    collocations: ['prolific writer', 'prolific artist', 'prolific output']
  },
  {
    id: 'symphonic',
    word: 'Symphonic',
    phonetic: '/sɪmˈfɒnɪk/',
    partOfSpeech: 'adjective',
    category: 'Philosophy & Art',
    difficulty: 'Intermediate',
    definition: 'Relating to or having the character of a symphony; harmonious combination.',
    simpleMeaning: 'Harmoniously blended together like grand orchestral music',
    examples: [
      'The movie delivered a symphonic blend of emotional music and gorgeous scenery.',
      'The bird chorus gave a symphonic start to the quiet dawn.',
      'They worked with symphonic harmony to finish the community mural.'
    ],
    synonyms: ['harmonious', 'orchestral', 'blended', 'resonant'],
    antonyms: ['discordant'],
    etymology: 'From Greek "symphonikos" (sounding together).',
    mnemonic: 'Symphonic = Harmony on a big scale!',
    collocations: ['symphonic orchestra', 'symphonic sound', 'symphonic arrangement']
  },
  {
    id: 'ineffable',
    word: 'Ineffable',
    phonetic: '/ɪnˈɛfəbəl/',
    partOfSpeech: 'adjective',
    category: 'Literary',
    difficulty: 'Advanced',
    definition: 'Too great or extreme to be expressed or described in words.',
    simpleMeaning: 'Beyond description; unspeakable joy or awe',
    examples: [
      'Standing atop the mountain peak filled her with an ineffable sense of awe.',
      'The parents felt an ineffable love holding their newborn child.',
      'The beauty of the aurora borealis is truly ineffable.'
    ],
    synonyms: ['indescribable', 'inexpressible', 'unutterable', 'beyond words'],
    antonyms: ['definable', 'expressible', 'describable'],
    etymology: 'From Latin "in-" (not) + "effabilis" (expressible).',
    mnemonic: 'In-EF-Fable = Not fabled or expressible by stories!',
    collocations: ['ineffable joy', 'ineffable beauty', 'ineffable grief']
  },
  {
    id: 'grok',
    word: 'Grok',
    phonetic: '/ɡrɒk/',
    partOfSpeech: 'verb',
    category: 'Business & Tech',
    difficulty: 'Intermediate',
    definition: 'To understand intuitively or by empathy; to grasp fully and empathetically.',
    simpleMeaning: 'To understand something deeply and intuitively',
    examples: [
      'Once you grok the fundamentals of coding logic, learning new languages becomes easy.',
      'She groks user experience design better than anyone on our team.',
      'It took me hours, but I finally grok how this algorithm works.'
    ],
    synonyms: ['understand', 'comprehend', 'grasp', 'intuit', 'absorb'],
    antonyms: ['misunderstand', 'misinterpret'],
    etymology: 'Coined by sci-fi writer Robert A. Heinlein in his 1961 novel "Stranger in a Strange Land".',
    mnemonic: 'Grok = Deep rock-solid mental grasp!',
    collocations: ['grok the concept', 'fully grok']
  },
  {
    id: 'luminary',
    word: 'Luminary',
    phonetic: '/ˈluːmɪnəri/',
    partOfSpeech: 'noun',
    category: 'Everyday Gems',
    difficulty: 'Intermediate',
    definition: 'A person who inspires or influences others, especially one prominent in a particular field.',
    simpleMeaning: 'An inspiring leading light or expert',
    examples: [
      'Nobel laureates and scientific luminaries gathered at the international symposium.',
      'She is regarded as a luminary in the renewable energy revolution.',
      'The conference featured presentations from industry luminaries.'
    ],
    synonyms: ['leading light', 'inspiration', 'celebrity', 'expert', 'icon'],
    antonyms: ['nobody', 'nonentity'],
    etymology: 'From Latin "lumen", meaning "light".',
    mnemonic: 'LUMEN (light) = Luminary shines light on others!',
    collocations: ['literary luminary', 'industry luminary', 'leading luminary']
  },
  {
    id: 'sycophancy',
    word: 'Sycophancy',
    phonetic: '/ˈsɪkəfænsi/',
    partOfSpeech: 'noun',
    category: 'Personality & Emotions',
    difficulty: 'Master',
    definition: 'Obsequious behavior toward someone important in order to gain advantage; servile flattery.',
    simpleMeaning: 'Excessive suck-up flattery to win favors',
    examples: [
      'He won his promotion through honest achievement, not sycophancy.',
      'The toxic corporate culture encouraged sycophancy over innovative thinking.',
      'She saw right through his shameless sycophancy.'
    ],
    synonyms: ['flattery', 'bootlicking', 'servility', 'toadyism', 'obsequiousness'],
    antonyms: ['honesty', 'candor', 'frankness'],
    etymology: 'Noun form of sycophant.',
    mnemonic: 'Sycophancy = Sickening level of flattery!',
    collocations: ['shameless sycophancy', 'culture of sycophancy']
  },
  {
    id: 'veracity',
    word: 'Veracity',
    phonetic: '/vəˈræsɪti/',
    partOfSpeech: 'noun',
    category: 'GRE & SAT Prep',
    difficulty: 'Advanced',
    definition: 'Conformity to facts; accuracy and truthfulness.',
    simpleMeaning: 'Truthfulness and reliability',
    examples: [
      'The lawyer questioned the veracity of the witness\'s statement.',
      'Journalists must verify the veracity of sources before publishing breaking news.',
      'We have no reason to doubt the veracity of her story.'
    ],
    synonyms: ['truthfulness', 'accuracy', 'correctness', 'fidelity', 'authenticity'],
    antonyms: ['falsehood', 'deceit', 'untruthfulness', 'inaccuracy'],
    etymology: 'From Latin "verax", meaning "truthful" (verus = true).',
    mnemonic: 'VERA = Very True -> Veracity = Truthfulness!',
    collocations: ['test the veracity', 'veracity of claims', 'doubt the veracity']
  },
  {
    id: 'equanimous',
    word: 'Equanimous',
    phonetic: '/ɪˈkwænɪməs/',
    partOfSpeech: 'adjective',
    category: 'Philosophy & Art',
    difficulty: 'Advanced',
    definition: 'Calm and composed, especially under stress.',
    simpleMeaning: 'Unruffled, balanced, and composed in a storm',
    examples: [
      'Even during the chaotic system crash, the lead engineer remained equanimous.',
      'An equanimous leader keeps the team grounded during unexpected crises.',
      'She maintained an equanimous expression throughout the debate.'
    ],
    synonyms: ['calm', 'composed', 'serene', 'tranquil', 'collected'],
    antonyms: ['agitated', 'flustered', 'hysterical'],
    etymology: 'Adjective form derived from equanimity.',
    mnemonic: 'Equal mind state under fire!',
    collocations: ['equanimous response', 'equanimous demeanor']
  },
  {
    id: 'pithy',
    word: 'Pithy',
    phonetic: '/ˈpɪθi/',
    partOfSpeech: 'adjective',
    category: 'Literary',
    difficulty: 'Intermediate',
    definition: 'Concise and forcefully expressive (of language or style).',
    simpleMeaning: 'Short, sweet, and full of meaning',
    examples: [
      'His talk was packed with pithy advice that stuck with us for years.',
      'The headline was pithy, catching everyone\'s attention immediately.',
      'She excels at writing pithy posts on Twitter.'
    ],
    synonyms: ['concise', 'succinct', 'terse', 'compact', 'pointed'],
    antonyms: ['verbose', 'wordy', 'long-winded'],
    etymology: 'From "pith" (the essential core/marrow of a plant stem).',
    mnemonic: 'Pithy = Packed with key pith (core substance)!',
    collocations: ['pithy quote', 'pithy summary', 'pithy remark']
  },
  {
    id: 'gargantuan',
    word: 'Gargantuan',
    phonetic: '/ɡɑːrˈɡæntʃuən/',
    partOfSpeech: 'adjective',
    category: 'Everyday Gems',
    difficulty: 'Beginner',
    definition: 'Enormous or gigantic in size, volume, or degree.',
    simpleMeaning: 'Huge, gigantic, and colossal',
    examples: [
      'The construction team faced a gargantuan task of building the long bridge in one year.',
      'He ate a gargantuan burger stacked with six layers of cheese.',
      'The project accumulated a gargantuan dataset over five years.'
    ],
    synonyms: ['gigantic', 'colossal', 'huge', 'immense', 'mammoth'],
    antonyms: ['tiny', 'miniature', 'microscopic', 'small'],
    etymology: 'From Gargantua, a giant king with an enormous appetite in François Rabelais’ 16th-century satire.',
    mnemonic: 'Gargantuan = Giant creature screaming GAR-GAN!',
    collocations: ['gargantuan task', 'gargantuan size', 'gargantuan effort']
  },
  {
    id: 'fastidiousness',
    word: 'Fastidiousness',
    phonetic: '/fæˈstɪdɪəsnəs/',
    partOfSpeech: 'noun',
    category: 'Personality & Emotions',
    difficulty: 'Advanced',
    definition: 'The quality of being very attentive to detail and accuracy; extreme neatness or care.',
    simpleMeaning: 'Extreme attention to neatness and perfection',
    examples: [
      'His fastidiousness in cleaning the kitchen ensured it remained spotless.',
      'The surgeon’s fastidiousness saved the patient from complications.',
      'Her artistic fastidiousness meant she spent weeks perfecting a single line.'
    ],
    synonyms: ['meticulousness', 'scrupulousness', 'precision', 'carefulness'],
    antonyms: ['carelessness', 'slopiness'],
    etymology: 'Noun form of fastidious.',
    mnemonic: 'Fastidious quality!',
    collocations: ['extreme fastidiousness', 'known for fastidiousness']
  },
  {
    id: 'boondoggle',
    word: 'Boondoggle',
    phonetic: '/ˈbuːndɒɡəl/',
    partOfSpeech: 'noun',
    category: 'Business & Tech',
    difficulty: 'Advanced',
    definition: 'An unnecessary or wasteful project or activity that uses public or corporate funds while appearing to have value.',
    simpleMeaning: 'A wasteful, useless project that burns money',
    examples: [
      'The abandoned stadium project turned out to be a multimillion-dollar boondoggle.',
      'Critics denounced the software overhaul as an expensive corporate boondoggle.',
      'We must prevent this initiative from becoming another government boondoggle.'
    ],
    synonyms: ['wasteful project', 'white elephant', 'money pit'],
    antonyms: ['worthwhile investment', 'success'],
    etymology: 'Coined in 1927 by American Boy Scout pioneer Robert Link for handmade leather crafts, later applied to wasteful relief work in the Great Depression.',
    mnemonic: 'Boon-Doggle = A dog-leash on your money pulling it down the drain!',
    collocations: ['financial boondoggle', 'costly boondoggle', 'turn into a boondoggle']
  },
  {
    id: 'resilience',
    word: 'Resilience',
    phonetic: '/rɪˈzɪlɪəns/',
    partOfSpeech: 'noun',
    category: 'Everyday Gems',
    difficulty: 'Beginner',
    definition: 'The capacity to recover quickly from difficulties; toughness.',
    simpleMeaning: 'Bouncing back from adversity',
    examples: [
      'Her inner resilience allowed her to overcome serious physical injuries.',
      'Building climate resilience is a priority for coastal cities.',
      'The team demonstrated incredible resilience during the championship match.'
    ],
    synonyms: ['toughness', 'flexibility', 'adaptability', 'fortitude'],
    antonyms: ['fragility', 'vulnerability'],
    etymology: 'Noun form of resilient.',
    mnemonic: 'Bounce-back energy!',
    collocations: ['show resilience', 'build resilience', 'emotional resilience']
  },
  {
    id: 'zenith',
    word: 'Zenith',
    phonetic: '/ˈzɛnɪθ/',
    partOfSpeech: 'noun',
    category: 'GRE & SAT Prep',
    difficulty: 'Intermediate',
    definition: 'The time or point at which something is most powerful or successful; the highest point in the sky directly above an observer.',
    simpleMeaning: 'Peak or highest point of power/success',
    examples: [
      'At the zenith of her career, she received three Oscar nominations in a single decade.',
      'The sun reached its zenith, casting almost no shadow on the desert sand.',
      'His popularity was at its zenith in the mid-1990s.'
    ],
    synonyms: ['peak', 'pinnacle', 'apex', 'climax', 'summit'],
    antonyms: ['nadir', 'bottom', 'lowest point'],
    etymology: 'From Arabic "samt" (path) in the phrase "samt al-ras" (path over the head).',
    mnemonic: 'Zenith = TOP peak! Nadir = Bottom floor!',
    collocations: ['reach the zenith', 'zenith of power', 'zenith of career']
  },
  {
    id: 'nadir',
    word: 'Nadir',
    phonetic: '/ˈneɪdɪər/',
    partOfSpeech: 'noun',
    category: 'GRE & SAT Prep',
    difficulty: 'Advanced',
    definition: 'The lowest point in the fortunes of a person or organization; point opposite zenith.',
    simpleMeaning: 'The absolute lowest point or rock bottom',
    examples: [
      'The company reached its financial nadir during the economic recession.',
      'Losing his job was the nadir of his career, but he used it as an opportunity to restart.',
      'Relations between the two countries reached an all-time nadir.'
    ],
    synonyms: ['rock bottom', 'lowest point', 'base', 'trough'],
    antonyms: ['zenith', 'peak', 'apex'],
    etymology: 'From Arabic "nazir", meaning "opposite" (opposite zenith).',
    mnemonic: 'Nadir = Nah-Dear, things couldn\'t get lower!',
    collocations: ['all-time nadir', 'reach a nadir', 'nadir of relations']
  },
  {
    id: 'ebullient',
    word: 'Ebullient',
    phonetic: '/ɪˈbʊljənt/',
    partOfSpeech: 'adjective',
    category: 'Personality & Emotions',
    difficulty: 'Advanced',
    definition: 'Cheerful and full of energy; overflowing with enthusiasm.',
    simpleMeaning: 'Overflowing with joy and high energy',
    examples: [
      'The ebullient crowd cheered loudly as the winning team paraded through the city.',
      'Her ebullient mood was contagious, brightening everyone’s spirits.',
      'He gave an ebullient speech celebrating the groundbreaking startup.'
    ],
    synonyms: ['exuberant', 'buoyant', 'joyful', 'animated', 'elated'],
    antonyms: ['depressed', 'gloomy', 'somber', 'melancholic'],
    etymology: 'From Latin "ebullire", meaning "to boil up" (e = out + bullire = to boil).',
    mnemonic: 'Ebullient = Boiling over with excitement!',
    collocations: ['ebullient mood', 'ebullient personality', 'ebullient applause']
  },
  {
    id: 'surreptitious',
    word: 'Surreptitious',
    phonetic: '/ˌsʌrəpˈtɪʃəs/',
    partOfSpeech: 'adjective',
    category: 'GRE & SAT Prep',
    difficulty: 'Advanced',
    definition: 'Kept secret, especially because it would not be approved of.',
    simpleMeaning: 'Sneaky and stealthy to avoid getting caught',
    examples: [
      'She took a surreptitious glance at her phone during the meeting.',
      'They exchanged surreptitious notes under the classroom desk.',
      'The spy made a surreptitious entry into the secure facility.'
    ],
    synonyms: ['stealthy', 'furtive', 'covert', 'secret', 'sneaky'],
    antonyms: ['blatant', 'open', 'overt', 'candid'],
    etymology: 'From Latin "surrepticius", meaning "snatched or stolen secretly".',
    mnemonic: 'Surreptitious = Reptile creeping stealthily under cover!',
    collocations: ['surreptitious glance', 'surreptitious look', 'surreptitious action']
  },
  {
    id: 'quintessential',
    word: 'Quintessential',
    phonetic: '/ˌkwɪntɪˈsɛnʃəl/',
    partOfSpeech: 'adjective',
    category: 'Literary',
    difficulty: 'Intermediate',
    definition: 'Representing the most perfect or typical example of a quality or class.',
    simpleMeaning: 'The classic, perfect example of something',
    examples: [
      'Paris in autumn is the quintessential romantic getaway.',
      'He is the quintessential gentleman, always polite and considerate.',
      'Fish and chips is the quintessential British comfort meal.'
    ],
    synonyms: ['classic', 'archetypal', 'ideal', 'model', 'typical'],
    antonyms: ['atypical', 'unrepresentative'],
    etymology: 'From medieval philosophy "quintessence" (the fifth element, pure and refined above earth/air/fire/water).',
    mnemonic: 'Quintessential = 5th essence, purest perfection!',
    collocations: ['quintessential example', 'quintessential experience', 'quintessential style']
  },
  {
    id: 'rent free',
    word: 'Living Rent Free',
    phonetic: '/ˈlɪvɪŋ rɛnt friː/',
    partOfSpeech: 'idiom',
    category: 'Slang & Idioms',
    difficulty: 'Beginner',
    definition: 'To occupy someone\'s thoughts constantly or obsessively without their control.',
    simpleMeaning: 'Obsessively occupying your mind without effort',
    examples: [
      'That viral catchy song has been living rent free in my head all week!',
      'Don’t let negative comments live rent free in your mind.',
      'That embarrassing moment from middle school still lives rent free in my memory.'
    ],
    synonyms: ['occupying mind', 'stuck in mind', 'obsessing over'],
    antonyms: ['forgotten', 'ignored'],
    etymology: 'Modern internet idiom describing thoughts or rivalries that dominate space in one\'s head without paying "rent".',
    mnemonic: 'Living in your head without paying rent money!',
    collocations: ['living rent free in my head', 'live rent free']
  },
  {
    id: 'perseverate',
    word: 'Perseverate',
    phonetic: '/pərˈsɛvəˌreɪt/',
    partOfSpeech: 'verb',
    category: 'Personality & Emotions',
    difficulty: 'Master',
    definition: 'Repeat or prolong an action, thought, or utterance after the stimulus that prompted it has ceased; dwell on obsessed.',
    simpleMeaning: 'To fixate on or repeat a thought continuously',
    examples: [
      'Try not to perseverate on a minor mistake when the rest of the project was stellar.',
      'He tends to perseverate on worst-case scenarios when feeling stressed.',
      'The child perseverated on asking for ice cream despite being told no.'
    ],
    synonyms: ['dwell', 'fixate', 'obsess', 'reiterate', 'harp on'],
    antonyms: ['move on', 'forget', 'let go'],
    etymology: 'From Latin "perseverare" (to persist).',
    mnemonic: 'Per-SEVER-ate: Server playing the same song on loop!',
    collocations: ['perseverate on negative thoughts', 'tend to perseverate']
  },
  {
    id: 'serendipitous',
    word: 'Serendipitous',
    phonetic: '/ˌsɛrənˈdɪpɪtəs/',
    partOfSpeech: 'adjective',
    category: 'Everyday Gems',
    difficulty: 'Intermediate',
    definition: 'Occurring or discovered by chance in a happy or beneficial way.',
    simpleMeaning: 'Happening by a lucky, happy coincidence',
    examples: [
      'Their serendipitous encounter at the airport led to a lifelong business partnership.',
      'It was a serendipitous discovery that changed the course of medical science.',
      'She found her favorite childhood book during a serendipitous stroll through a flea market.'
    ],
    synonyms: ['fortuitous', 'lucky', 'chance', 'accidental', 'timely'],
    antonyms: ['unlucky', 'planned', 'deliberate'],
    etymology: 'Adjective form of serendipity.',
    mnemonic: 'Serene + Dip = Lucky discovery!',
    collocations: ['serendipitous moment', 'serendipitous meeting', 'serendipitous turn of events']
  },
  {
    id: 'cacophonous',
    word: 'Cacophonous',
    phonetic: '/kæˈkɒfənəs/',
    partOfSpeech: 'adjective',
    category: 'Philosophy & Art',
    difficulty: 'Advanced',
    definition: 'Involving or producing a harsh, discordant mixture of sounds.',
    simpleMeaning: 'Loud, harsh, and grating to hear',
    examples: [
      'The cacophonous alarm shattered the peaceful early morning stillness.',
      'Construction machinery created a cacophonous background during our meeting.',
      'The room erupted into a cacophonous debate.'
    ],
    synonyms: ['discordant', 'harsh', 'strident', 'grating', 'dissonant'],
    antonyms: ['harmonious', 'melodious', 'euphonious', 'dulcet'],
    etymology: 'Adjective form of cacophony.',
    mnemonic: 'Cackling harsh sounds!',
    collocations: ['cacophonous noise', 'cacophonous sounds']
  },
  {
    id: 'elucidate',
    word: 'Elucidate',
    phonetic: '/ɪˈluːsɪdeɪt/',
    partOfSpeech: 'verb',
    category: 'GRE & SAT Prep',
    difficulty: 'Advanced',
    definition: 'Make (something) clear; explain thoroughly.',
    simpleMeaning: 'To explain clearly and shed light on a topic',
    examples: [
      'Could you please elucidate the third step in this technical guide?',
      'The professor used diagrams to elucidate the complex chemical process.',
      'His article helped elucidate the nuances of foreign policy.'
    ],
    synonyms: ['explain', 'clarify', 'illuminate', 'expound', 'demystify'],
    antonyms: ['obfuscate', 'confuse', 'muddle', 'complicate'],
    etymology: 'From Latin "elucidare", from "lucidus" (lucid / clear light).',
    mnemonic: 'E-LUCID-ate = Make LUCID with light!',
    collocations: ['elucidate the point', 'elucidate the issue', 'further elucidate']
  },
  {
    id: 'resplendent',
    word: 'Resplendent',
    phonetic: '/rɪˈsplɛndənt/',
    partOfSpeech: 'adjective',
    category: 'Literary',
    difficulty: 'Advanced',
    definition: 'Attractive and impressive through being richly colorful or sumptuous.',
    simpleMeaning: 'Dazzlingly colorful, radiant, and magnificent',
    examples: [
      'The bride looked resplendent in her embroidered silk gown.',
      'The royal hall was resplendent with crystal chandeliers and crimson banners.',
      'The sunset painted the sky in resplendent shades of orange and violet.'
    ],
    synonyms: ['dazzling', 'radiant', 'splendid', 'glorious', 'magnificent'],
    antonyms: ['drab', 'dull', 'unimpressive'],
    etymology: 'From Latin "resplendere" (re = intensely + splendere = to shine).',
    mnemonic: 'Resplendent = Super-splendid shine!',
    collocations: ['resplendent beauty', 'resplendent in silk', 'resplendent colors']
  },
  {
    id: 'paradigm shift',
    word: 'Paradigm Shift',
    phonetic: '/ˈpærədaɪm ʃɪft/',
    partOfSpeech: 'noun',
    category: 'Business & Tech',
    difficulty: 'Intermediate',
    definition: 'A fundamental change in approach or underlying assumptions.',
    simpleMeaning: 'A complete shift in thinking or industry standards',
    examples: [
      'The invention of the internet triggered a massive global paradigm shift.',
      'Moving from fossil fuels to renewables is an essential paradigm shift.',
      'AI technology is bringing a paradigm shift to modern healthcare.'
    ],
    synonyms: ['game changer', 'transformation', 'fundamental change', 'sea change'],
    antonyms: ['status quo', 'stagnation'],
    etymology: 'Popularized by philosopher of science Thomas Kuhn in 1962.',
    mnemonic: 'Shifting the entire framework model!',
    collocations: ['major paradigm shift', 'represent a paradigm shift']
  },
  {
    id: 'iconoclast',
    word: 'Iconoclast',
    phonetic: '/aɪˈkɒnəklæst/',
    partOfSpeech: 'noun',
    category: 'Philosophy & Art',
    difficulty: 'Master',
    definition: 'A person who attacks cherished beliefs or traditional institutions; originally a destroyer of religious images.',
    simpleMeaning: 'A rebel who challenges established norms and traditions',
    examples: [
      'As an artistic iconoclast, she challenged every traditional rule of canvas painting.',
      'Steve Jobs was known as a tech iconoclast who redefined industries.',
      'The writer earned a reputation as an iconoclast for criticizing popular dogmas.'
    ],
    synonyms: ['rebel', 'nonconformist', 'heretic', 'dissident', 'maverick'],
    antonyms: ['conformist', 'traditionalist'],
    etymology: 'From Greek "eikon" (image) + "klastes" (breaker) — image breaker.',
    mnemonic: 'ICON-oclast = ICON breaker!',
    collocations: ['artistic iconoclast', 'known as an iconoclast']
  },
  {
    id: 'magnanimity',
    word: 'Magnanimity',
    phonetic: '/ˌmæɡnəˈnɪmɪti/',
    partOfSpeech: 'noun',
    category: 'Personality & Emotions',
    difficulty: 'Advanced',
    definition: 'The condition of being noble and generous, especially toward a rival.',
    simpleMeaning: 'Noble generosity and forgiveness',
    examples: [
      'He showed great magnanimity by praising his competitor’s achievement.',
      'Her magnanimity earned her the admiration of allies and opponents alike.',
      'Acts of magnanimity build lasting peace after conflict.'
    ],
    synonyms: ['generosity', 'nobility', 'charity', 'altruism', 'forgiveness'],
    antonyms: ['pettiness', 'meanness', 'spitefulness'],
    etymology: 'Noun form of magnanimous.',
    mnemonic: 'Great soul nobility!',
    collocations: ['show magnanimity', 'act of magnanimity']
  },
  {
    id: 'synergize',
    word: 'Synergize',
    phonetic: '/ˈsɪnərdʒaɪz/',
    partOfSpeech: 'verb',
    category: 'Business & Tech',
    difficulty: 'Intermediate',
    definition: 'Combine or coordinate (two or more agents) to produce a joint effect greater than the sum of their separate parts.',
    simpleMeaning: 'Work together to boost combined output',
    examples: [
      'The engineering and design teams synergized to launch the app ahead of schedule.',
      'We need to synergize our marketing channels for maximum reach.',
      'Different departments synergized to solve the supply chain crisis.'
    ],
    synonyms: ['collaborate', 'cooperate', 'pool resources', 'harmonize'],
    antonyms: ['conflict', 'oppose'],
    etymology: 'Verb form of synergy.',
    mnemonic: 'Synergy in motion!',
    collocations: ['synergize efforts', 'synergize operations']
  },
  {
    id: 'quixotism',
    word: 'Quixotism',
    phonetic: '/ˈkwɪksətɪzəm/',
    partOfSpeech: 'noun',
    category: 'Literary',
    difficulty: 'Master',
    definition: 'Impracticality in pursuit of ideals, especially those marked by rash or lofty romantic ideas.',
    simpleMeaning: 'Chasing idealistic or romantic dreams unrealistically',
    examples: [
      'Her quixotism led her to fund eccentric inventions that never materialized.',
      'While critics mocked his quixotism, his passion inspired many young activists.',
      'Balance lofty quixotism with practical execution.'
    ],
    synonyms: ['idealism', 'utopianism', 'romanticism', 'impracticality'],
    antonyms: ['pragmatism', 'realism'],
    etymology: 'Noun form from Don Quixote.',
    mnemonic: 'Idealistic tilting at windmills!',
    collocations: ['lofty quixotism', 'pure quixotism']
  },
  {
    id: 'pithy remark',
    word: 'Pithy Remark',
    phonetic: '/ˈpɪθi rɪˈmɑːrk/',
    partOfSpeech: 'noun',
    category: 'Everyday Gems',
    difficulty: 'Intermediate',
    definition: 'A short, clever comment that gets straight to the point.',
    simpleMeaning: 'A short, sharp, and clever comment',
    examples: [
      'She silenced the room with a single pithy remark during the debate.',
      'Oscar Wilde was legendary for his witty, pithy remarks.',
      'A pithy remark can diffuse tension far better than a long lecture.'
    ],
    synonyms: ['witticism', 'bon mot', 'clever comment', 'quip'],
    antonyms: ['rambling monologue'],
    etymology: 'Combination of pithy + remark.',
    mnemonic: 'Short comment with maximum punch!',
    collocations: ['make a pithy remark', 'deliver a pithy remark']
  },
  {
    id: 'scintilla',
    word: 'Scintilla',
    phonetic: '/sɪnˈtɪlə/',
    partOfSpeech: 'noun',
    category: 'GRE & SAT Prep',
    difficulty: 'Master',
    definition: 'A tiny trace or spark of a specified quality or feeling.',
    simpleMeaning: 'A tiny trace, spark, or shred of something',
    examples: [
      'There is not a single scintilla of truth in those baseless allegations.',
      'He showed a scintilla of remorse after realizing his mistake.',
      'A scintilla of hope remained despite the grim forecast.'
    ],
    synonyms: ['trace', 'shred', 'iota', 'spark', 'speck', 'particle'],
    antonyms: ['abundance', 'mass', 'mountain'],
    etymology: 'Latin word meaning "spark".',
    mnemonic: 'Scintilla = Tiny spark of light!',
    collocations: ['not a scintilla of truth', 'scintilla of evidence', 'scintilla of hope']
  },
  {
    id: 'understand the assignment',
    word: 'Understand the Assignment',
    phonetic: '/ˌʌndərˈstænd ðə əˈsaɪnmənt/',
    partOfSpeech: 'idiom',
    category: 'Slang & Idioms',
    difficulty: 'Beginner',
    definition: 'To do something flawlessly, meeting or exceeding expectations with perfect style or performance.',
    simpleMeaning: 'Executed something perfectly and understood the vibe completely',
    examples: [
      'Look at her costume—she completely understood the assignment!',
      'The chef understood the assignment when preparing this five-course meal.',
      'They brought so much energy to the concert; they understood the assignment.'
    ],
    synonyms: ['nailed it', 'executed flawlessly', 'delivered peak performance'],
    antonyms: ['missed the mark', 'flopped'],
    etymology: 'Modern slang popularized on TikTok and Twitter around 2021.',
    mnemonic: 'A+ student delivering 100% perfection!',
    collocations: ['understood the assignment', 'she understood the assignment']
  },
  {
    id: 'fastidiously',
    word: 'Fastidiously',
    phonetic: '/fæˈstɪdɪəsli/',
    partOfSpeech: 'adverb',
    category: 'Personality & Emotions',
    difficulty: 'Advanced',
    definition: 'In a way that pays extreme attention to detail and accuracy.',
    simpleMeaning: 'With extreme care and meticulous detail',
    examples: [
      'She fastidiously proofread every single line of the manuscript before sending it.',
      'The restorer fastidiously cleaned the 17th-century painting.',
      'He organized his spice rack fastidiously by alphabetical order.'
    ],
    synonyms: ['meticulously', 'scrupulously', 'painstakingly', 'carefully'],
    antonyms: ['sloppily', 'carelessly', 'hastily'],
    etymology: 'Adverb form of fastidious.',
    mnemonic: 'Fastidious in action!',
    collocations: ['fastidiously planned', 'fastidiously cleaned', 'fastidiously maintained']
  },
  {
    id: 'solace',
    word: 'Solace',
    phonetic: '/ˈsɒlɪs/',
    partOfSpeech: 'noun',
    category: 'Personality & Emotions',
    difficulty: 'Intermediate',
    definition: 'Comfort or consolation in a time of distress or sadness.',
    simpleMeaning: 'Comfort and peace during a sad or stressful time',
    examples: [
      'She found solace in playing classical piano late at night.',
      'Nature provided him solace after the loss of his beloved dog.',
      'They offered each other solace during the difficult winter.'
    ],
    synonyms: ['comfort', 'consolation', 'relief', 'peace', 'succor'],
    antonyms: ['distress', 'torment', 'anguish'],
    etymology: 'From Old French "solas", from Latin "solari" (to console).',
    mnemonic: 'Solace = SOUL-ACE: a warm ace for your soul when hurting!',
    collocations: ['find solace', 'seek solace', 'source of solace']
  },
  {
    id: 'halcyon',
    word: 'Halcyon',
    phonetic: '/ˈhælsiən/',
    partOfSpeech: 'adjective',
    category: 'Literary',
    difficulty: 'Master',
    definition: 'Denoting a period of time in the past that was idyllically happy and peaceful.',
    simpleMeaning: 'Peaceful, golden, and happy days of the past',
    examples: [
      'Grandparents love reminiscing about the halcyon days of their youth.',
      'The island enjoys halcyon weather throughout the summer months.',
      'We spent halcyon afternoons reading by the calm lakeside.'
    ],
    synonyms: ['idyllic', 'peaceful', 'golden', 'tranquil', 'happy'],
    antonyms: ['turbulent', 'stormy', 'chaotic'],
    etymology: 'From Greek myth of the "halcyon" bird (kingfisher) that calmed the winter waves to build its nest.',
    mnemonic: 'Halcyon days = Calming ocean waves!',
    collocations: ['halcyon days', 'halcyon times', 'halcyon summer']
  },
  {
    id: 'juxtaposed',
    word: 'Juxtaposed',
    phonetic: '/ˌdʒʌkstəˈpoʊzd/',
    partOfSpeech: 'adjective',
    category: 'Philosophy & Art',
    difficulty: 'Intermediate',
    definition: 'Placed close together with contrasting effect.',
    simpleMeaning: 'Placed side by side for contrast',
    examples: [
      'The juxtaposed images of wealth and poverty in the photo essay were heartbreaking.',
      'Juxtaposed light and shadow created dramatic depth in the painting.',
      'Her juxtaposed quiet voice and fierce message surprised the audience.'
    ],
    synonyms: ['contrasted', 'paired side-by-side', 'collocated'],
    antonyms: ['separated'],
    etymology: 'Past participle adjective of juxtapose.',
    mnemonic: 'Side-by-side contrast!',
    collocations: ['juxtaposed images', 'juxtaposed themes']
  },
  {
    id: 'reverence',
    word: 'Reverence',
    phonetic: '/ˈrɛvərəns/',
    partOfSpeech: 'noun',
    category: 'Philosophy & Art',
    difficulty: 'Intermediate',
    definition: 'Deep respect for someone or something.',
    simpleMeaning: 'Deep, solemn respect and admiration',
    examples: [
      'The ancient redwoods inspired a quiet reverence among the hikers.',
      'The martial arts master was treated with profound reverence by his pupils.',
      'She spoke about her mentors with immense reverence.'
    ],
    synonyms: ['respect', 'awe', 'veneration', 'admiration', 'esteem'],
    antonyms: ['disrespect', 'contempt', 'irreverence', 'scorn'],
    etymology: 'From Latin "reverentia", from "revereri" (re = intensely + vereri = fear/stand in awe of).',
    mnemonic: 'Reverence = Re-Revere: standing in awe!',
    collocations: ['profound reverence', 'treat with reverence', 'deep reverence']
  },
  {
    id: 'ephemerality',
    word: 'Ephemerality',
    phonetic: '/ɪˌfɛməˈrælɪti/',
    partOfSpeech: 'noun',
    category: 'Philosophy & Art',
    difficulty: 'Master',
    definition: 'The concept of things existing or enjoying only a short duration.',
    simpleMeaning: 'The brief, temporary nature of life or beauty',
    examples: [
      'The ephemerality of youth reminds us to savor every moment.',
      'Ice sculptures capture the poetic ephemerality of art.',
      'Philosophers often write about the ephemerality of human fortune.'
    ],
    synonyms: ['transience', 'impermanence', 'fleetingness'],
    antonyms: ['permanence', 'eternity'],
    etymology: 'Noun form of ephemeral.',
    mnemonic: 'State of being short-lived.',
    collocations: ['ephemerality of life', 'poetic ephemerality']
  },
  {
    id: 'obfuscation',
    word: 'Obfuscation',
    phonetic: '/ˌɒbfəˈskeɪʃən/',
    partOfSpeech: 'noun',
    category: 'GRE & SAT Prep',
    difficulty: 'Master',
    definition: 'The action of making something obscure, unclear, or unintelligible.',
    simpleMeaning: 'Deliberate confusion or clouding of facts',
    examples: [
      'The politician\'s response was filled with deliberate obfuscation.',
      'Code obfuscation is used by developers to protect intellectual property.',
      'Clear communication avoids unnecessary obfuscation.'
    ],
    synonyms: ['confusion', 'clouding', 'muddling', 'obscurity'],
    antonyms: ['clarification', 'lucidity'],
    etymology: 'Noun form of obfuscate.',
    mnemonic: 'Action of obscuring reality!',
    collocations: ['deliberate obfuscation', 'code obfuscation']
  },
  {
    id: 'deliberate',
    word: 'Deliberate',
    phonetic: '/dɪˈlɪbərət/',
    partOfSpeech: 'adjective',
    category: 'Everyday Gems',
    difficulty: 'Beginner',
    definition: 'Done consciously and intentionally; careful and unhurried.',
    simpleMeaning: 'Done intentionally and with careful thought',
    examples: [
      'It was a deliberate choice to step away from social media.',
      'He walked with slow, deliberate steps toward the podium.',
      'She made a deliberate effort to listen attentively.'
    ],
    synonyms: ['intentional', 'calculated', 'purposeful', 'measured'],
    antonyms: ['accidental', 'unintentional', 'hasty', 'impulsive'],
    etymology: 'From Latin "deliberare", meaning "to weigh well in mind".',
    mnemonic: 'De-LIBER-ate = Weighing choices like scales of liberty!',
    collocations: ['deliberate choice', 'deliberate effort', 'deliberate speed']
  },
  {
    id: 'gregariousness',
    word: 'Gregariousness',
    phonetic: '/ɡrɪˈɡɛərɪəsnəs/',
    partOfSpeech: 'noun',
    category: 'Personality & Emotions',
    difficulty: 'Advanced',
    definition: 'The quality of being fond of company; sociability.',
    simpleMeaning: 'Outspoken sociability and love for people',
    examples: [
      'His natural gregariousness made him the life of every party.',
      'Dogs are known for their gregariousness compared to solitary felines.',
      'Her gregariousness helped her make friends across international borders.'
    ],
    synonyms: ['sociability', 'extroversion', 'friendliness', 'conviviality'],
    antonyms: ['introversion', 'reclusiveness'],
    etymology: 'Noun form of gregarious.',
    mnemonic: 'Gregarious trait!',
    collocations: ['natural gregariousness', 'known for gregariousness']
  },
  {
    id: 'surreal',
    word: 'Surreal',
    phonetic: '/səˈriːəl/',
    partOfSpeech: 'adjective',
    category: 'Philosophy & Art',
    difficulty: 'Beginner',
    definition: 'Having the qualities of surrealism; bizarre or dreamlike.',
    simpleMeaning: 'Dreamlike, weird, and bizarre',
    examples: [
      'Walking through the empty city streets during lockdown felt completely surreal.',
      'Salvador Dalí painted surreal landscapes filled with melting clocks.',
      'Winning the national championship was a surreal experience.'
    ],
    synonyms: ['dreamlike', 'bizarre', 'unreal', 'weird', 'fantastical'],
    antonyms: ['real', 'ordinary', 'mundane'],
    etymology: 'From French "surréalisme" (sur = above/beyond + réalisme = realism).',
    mnemonic: 'Surreal = Beyond Real!',
    collocations: ['surreal experience', 'surreal dream', 'surreal moment']
  },
  {
    id: 'era',
    word: 'In My Era',
    phonetic: '/ɪn maɪ ˈɪərə/',
    partOfSpeech: 'idiom',
    category: 'Slang & Idioms',
    difficulty: 'Beginner',
    definition: 'A pop-culture phrase used to describe a current personal phase, mood, or chapter in life.',
    simpleMeaning: 'In my current phase or mindset of life',
    examples: [
      'I\'m currently in my peaceful, health-conscious era.',
      'She entered her main character era after finishing university.',
      'We\'re in our learning and growing era right now!'
    ],
    synonyms: ['phase', 'chapter', 'season of life', 'mindset'],
    antonyms: [],
    etymology: 'Popularized heavily by pop music and social media culture in 2022-2024.',
    mnemonic: 'Entering a fresh new era in your life story!',
    collocations: ['in my villain era', 'in my healing era', 'entered her era']
  },
  {
    id: 'perseverant',
    word: 'Perseverant',
    phonetic: '/ˌpɜːsɪˈvɪərənt/',
    partOfSpeech: 'adjective',
    category: 'Personality & Emotions',
    difficulty: 'Intermediate',
    definition: 'Continuing in a course of action despite difficulty or opposition.',
    simpleMeaning: 'Persistent and steadfast',
    examples: [
      'A perseverant athlete never quits when faced with injuries.',
      'Her perseverant spirit kept the community garden thriving.',
      'The researchers were perseverant in their search for a vaccine.'
    ],
    synonyms: ['persistent', 'tenacious', 'steadfast', 'unwavering'],
    antonyms: ['fickle', 'yielding'],
    etymology: 'Adjective form of perseverance.',
    mnemonic: 'Persevering person!',
    collocations: ['perseverant spirit', 'perseverant effort']
  },
  {
    id: 'ineffability',
    word: 'Ineffability',
    phonetic: '/ɪnˌɛfəˈbɪlɪti/',
    partOfSpeech: 'noun',
    category: 'Literary',
    difficulty: 'Master',
    definition: 'The quality of being too great or extreme to be expressed in words.',
    simpleMeaning: 'The quality of being beyond words',
    examples: [
      'Poets try to capture the ineffability of profound grief.',
      'The cosmic scale of the galaxy instills a sense of ineffability.',
      'Mystics speak of the ineffability of spiritual experiences.'
    ],
    synonyms: ['indescribability', 'transcendence', 'unutterability'],
    antonyms: ['clarity', 'explicitness'],
    etymology: 'Noun form of ineffable.',
    mnemonic: 'Beyond words!',
    collocations: ['ineffability of love', 'sense of ineffability']
  },
  {
    id: 'pragmatism',
    word: 'Pragmatism',
    phonetic: '/ˈpræɡmətɪzəm/',
    partOfSpeech: 'noun',
    category: 'Business & Tech',
    difficulty: 'Intermediate',
    definition: 'An approach that evaluates theories or beliefs solely in terms of the success of their practical application.',
    simpleMeaning: 'Practicality over abstract theory',
    examples: [
      'His political pragmatism allowed him to strike compromises across parties.',
      'Pragmatism is key when managing tight product deadlines.',
      'We appreciated her pragmatism during the crisis response.'
    ],
    synonyms: ['practicality', 'realism', 'expediency', 'common sense'],
    antonyms: ['idealism', 'dogmatism', 'impracticality'],
    etymology: 'Philosophical movement initiated in America by Charles Sanders Peirce and William James.',
    mnemonic: 'Focusing on what actually works!',
    collocations: ['political pragmatism', 'sense of pragmatism']
  },
  {
    id: 'taciturn',
    word: 'Taciturn',
    phonetic: '/ˈtæsɪtɜːrn/',
    partOfSpeech: 'adjective',
    category: 'GRE & SAT Prep',
    difficulty: 'Advanced',
    definition: 'Reserved or uncommunicative in speech; saying little.',
    simpleMeaning: 'Quiet, reserved, and habitually untalkative',
    examples: [
      'My grandfather was a taciturn man who spoke only when he had something important to say.',
      'The detective observed the taciturn suspect sitting silently in the interview room.',
      'Underneath his taciturn exterior was a warm and loyal heart.'
    ],
    synonyms: ['untalkative', 'reticent', 'reserved', 'quiet', 'silent'],
    antonyms: ['garrulous', 'talkative', 'loquacious', 'voluble'],
    etymology: 'From Latin "taciturnus", from "tacere" (to be silent).',
    mnemonic: 'Taciturn = TACIT/SILENT turn!',
    collocations: ['taciturn nature', 'taciturn man', 'remain taciturn']
  },
  {
    id: 'cacophonie',
    word: 'Euphony',
    phonetic: '/ˈjuːfəni/',
    partOfSpeech: 'noun',
    category: 'Philosophy & Art',
    difficulty: 'Advanced',
    definition: 'The quality of being pleasing to the ear, especially through a harmonious combination of sounds.',
    simpleMeaning: 'Sweet, pleasant sound or melody',
    examples: [
      'The euphony of songbirds at daybreak welcomed the spring morning.',
      'Poets craft their verses for euphony and rhythm.',
      'The acoustic hall enhanced the natural euphony of the harp.'
    ],
    synonyms: ['harmony', 'melodiousness', 'sweetness', 'consonance', 'dulcetness'],
    antonyms: ['cacophony', 'dissonance', 'harshness'],
    etymology: 'From Greek "eu" (good/well) + "phone" (sound).',
    mnemonic: 'EU-Phone = GOOD sound phone!',
    collocations: ['sweet euphony', 'euphony of language']
  },
  {
    id: 'pervasive',
    word: 'Pervasive',
    phonetic: '/pərˈveɪsɪv/',
    partOfSpeech: 'adjective',
    category: 'Business & Tech',
    difficulty: 'Intermediate',
    definition: 'Spreading widely throughout an area or a group of people.',
    simpleMeaning: 'Spreading everywhere throughout a space or system',
    examples: [
      'The pervasive smell of fresh baking bread filled the entire neighborhood.',
      'Digital technology has a pervasive influence on modern childhood.',
      'There is a pervasive sense of optimism in the startup incubator.'
    ],
    synonyms: ['widespread', 'prevalent', 'omnipresent', 'pervading', 'ubiquitous'],
    antonyms: ['rare', 'isolated', 'limited'],
    etymology: 'From Latin "pervadere" (per = through + vadere = to go).',
    mnemonic: 'Pervasive = Pervading every space!',
    collocations: ['pervasive presence', 'pervasive smell', 'pervasive influence']
  },
  {
    id: 'quixotically',
    word: 'Quixotically',
    phonetic: '/kwɪkˈsɒtɪkli/',
    partOfSpeech: 'adverb',
    category: 'Literary',
    difficulty: 'Master',
    definition: 'In an exceedingly idealistic, unrealistic, or romantic manner.',
    simpleMeaning: 'In an idealistically noble but unrealistic way',
    examples: [
      'He quixotically dumped his life savings into a time-travel research lab.',
      'She quixotically believed she could fix the company’s internal strife overnight.',
      'They fought quixotically against the inevitable changes.'
    ],
    synonyms: ['idealistically', 'romantically', 'impractically'],
    antonyms: ['pragmatically', 'realistically'],
    etymology: 'Adverb form from Quixotic.',
    mnemonic: 'Tilting at windmills!',
    collocations: ['quixotically pursuing', 'quixotically hoping']
  },
  {
    id: 'sinecure',
    word: 'Sinecure',
    phonetic: '/ˈsaɪnɪkjʊər/',
    partOfSpeech: 'noun',
    category: 'GRE & SAT Prep',
    difficulty: 'Master',
    definition: 'A position requiring little or no work but giving the holder financial benefit or status.',
    simpleMeaning: 'An easy, cozy job that pays money with almost no actual work',
    examples: [
      'Political allies were appointed to comfortable sinecures in government agencies.',
      'He thought he was taking a high-powered job, but it turned out to be a quiet sinecure.',
      'She refused the sinecure, wanting a role where she could make a real impact.'
    ],
    synonyms: ['cushy job', 'easy option', 'plum job', 'gravy train'],
    antonyms: ['drudgery', 'slave labor'],
    etymology: 'From Latin "sine cura", meaning "without care or responsibility".',
    mnemonic: 'Sinecure = SINE (without) CURA (care): zero care job!',
    collocations: ['political sinecure', 'comfortable sinecure']
  },
  {
    id: 'scintillate',
    word: 'Scintillate',
    phonetic: '/ˈsɪntɪleɪt/',
    partOfSpeech: 'verb',
    category: 'Literary',
    difficulty: 'Advanced',
    definition: 'Emit flashes of light; sparkle or shine brightly.',
    simpleMeaning: 'To sparkle or emit tiny flashes of light/wit',
    examples: [
      'The diamond ring scintillated under the jewelry shop spotlights.',
      'Her eyes scintillated with excitement when she heard the news.',
      'The witty banter between the actors scintillated on stage.'
    ],
    synonyms: ['sparkle', 'glimmer', 'twinkle', 'flash', 'dazzle'],
    antonyms: ['dull', 'fade'],
    etymology: 'From Latin "scintillare".',
    mnemonic: 'Sparkle and shine!',
    collocations: ['scintillate with wit', 'scintillate under light']
  },
  {
    id: 'resilience-pro',
    word: 'Fortuitous',
    phonetic: '/fɔːrˈtjuːɪtəs/',
    partOfSpeech: 'adjective',
    category: 'GRE & SAT Prep',
    difficulty: 'Advanced',
    definition: 'Happening by accident or chance rather than design; fortunate.',
    simpleMeaning: 'Happening by a lucky chance',
    examples: [
      'A fortuitous train delay allowed her to meet her future co-founder.',
      'The discovery of the artifact was entirely fortuitous.',
      'By a fortuitous stroke of luck, we found shelter before the storm hit.'
    ],
    synonyms: ['lucky', 'serendipitous', 'accidental', 'unplanned', 'timely'],
    antonyms: ['deliberate', 'intentional', 'unfortunate'],
    etymology: 'From Latin "fortuitus", from "fors" (chance / luck).',
    mnemonic: 'Fortuitous = Fortune + Gratuitous chance!',
    collocations: ['fortuitous discovery', 'fortuitous timing', 'fortuitous event']
  },
  {
    id: 'ate and left no crumbs',
    word: 'Ate and Left No Crumbs',
    phonetic: '/eɪt ænd lɛft noʊ krʌmz/',
    partOfSpeech: 'idiom',
    category: 'Slang & Idioms',
    difficulty: 'Beginner',
    definition: 'Did something so perfectly and completely that there was no room for improvement or competition.',
    simpleMeaning: 'Executed a performance with 100% perfection',
    examples: [
      'Her vocal performance on tonight’s live show ate and left no crumbs!',
      'The design team ate and left no crumbs on the new product rebranding.',
      'You ate and left no crumbs with that speech!'
    ],
    synonyms: ['slayed', 'nailed it', 'dominated', 'outdid expectations'],
    antonyms: ['flopped', 'fumbled'],
    etymology: 'Internet slang phrase originating in Black pop culture and social media.',
    mnemonic: 'Ate the whole meal and cleaned the plate completely!',
    collocations: ['she ate and left no crumbs', 'ate and left no crumbs']
  }
];

// Helper functions for filtering and generating vocabulary

export function getRandomWord(words: WordData[] = INITIAL_VOCABULARY): WordData {
  const randomIndex = Math.floor(Math.random() * words.length);
  return words[randomIndex];
}

export function filterWords(
  words: WordData[],
  category: string,
  difficulty: string,
  partOfSpeech?: string,
  searchTerm?: string
): WordData[] {
  return words.filter((w) => {
    if (category !== 'All Categories' && w.category !== category) return false;
    if (difficulty !== 'All Levels' && w.difficulty !== difficulty) return false;
    if (partOfSpeech && partOfSpeech !== 'All Parts' && w.partOfSpeech !== partOfSpeech) return false;
    if (searchTerm && searchTerm.trim() !== '') {
      const term = searchTerm.toLowerCase();
      const matchWord = w.word.toLowerCase().includes(term);
      const matchDef = w.definition.toLowerCase().includes(term);
      const matchMeaning = w.simpleMeaning.toLowerCase().includes(term);
      const matchSynonym = w.synonyms.some(s => s.toLowerCase().includes(term));
      if (!matchWord && !matchDef && !matchMeaning && !matchSynonym) return false;
    }
    return true;
  });
}

export function generateBatchWords(
  words: WordData[],
  count: number,
  category: string,
  difficulty: string
): WordData[] {
  const filtered = filterWords(words, category, difficulty);
  const pool = filtered.length > 0 ? filtered : words;
  
  // Shuffle pool and pick 'count' items
  const shuffled = [...pool].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}
