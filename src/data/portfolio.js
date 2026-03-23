// ─── Portfolio Data ───────────────────────────────────────────
// Edit this file to update all portfolio content

export const personal = {
  name: 'Sowjanya N U',
  role: 'Computer Science Student',
  email: 'sowjanyanu34@gmail.com',
  github: 'https://github.com/sowjanyanu-34',
  linkedin: 'https://www.linkedin.com/in/sowjanya-n-u-78b5662a1',
  resumeUrl: '/resume.pdf',
  // ─── PHOTO ───────────────────────────────────────────────────
  // Place your photo inside the /public folder as "photo.jpg"
  // Then this path will work automatically:
  photo: '/photo.jpg',
  about: "Hey, I'm Sowjanya N U. Building reliable full-stack applications and AI-powered solutions is my passion. I work at the intersection of React, Node.js, and Machine Learning — solving real-world problems with clean, efficient code. Currently exploring AI-driven automation in healthcare and agriculture. Always up for a challenge and excited to create impactful solutions.",
}

// ─── Projects ─────────────────────────────────────────────────
export const projects = [
  {
    id: 1,
    icon: '🧬',
    iconBg: 'rgba(108,99,255,0.12)',
    title: 'OncoDetect – Cancer Detection',
    desc: 'A machine learning-based system for detecting cancer by analyzing medical datasets and predicting tumor classification.',
    tech: ['Python', 'Numpy', 'Pandas', 'Scikit-learn', 'Random forest', 'Decision Tree'],
    github: 'https://github.com/sowjanyanu-34/Cancer_Detection.git',
    demo: '#',
  },
  {
    id: 2,
    icon: '🌐',
    iconBg: 'rgba(34,211,160,0.12)',
    title: 'Portfolio App',
    desc: 'This very portfolio! A modern, interactive personal portfolio built with React, Framer Motion animations, dark/light mode, functional contact form via Formspree, and a fully responsive design.',
    tech: ['React', 'JSX', 'Tailwind CSS', 'Ollama', 'Local AI'],
    github: 'https://github.com/sowjanyanu-34/MyPortfolio.git',
    demo: 'https://resonant-bubblegum-dc088c.netlify.app/',
  },
  {
    id: 3,
    icon: '👁️',
    iconBg: 'rgba(167,139,250,0.12)',
    title: 'Objectify - AI Object Detection ',
    desc: 'Real-time browser-based AI object detection using your device camera.Detects and classifies objects in images using a deep learning model. Displays results with bounding boxes and labels for clear visualization.',
    tech: ['Python', 'YOLO', 'PyTorch', 'OpenCV', 'NumPy'],
    github: 'https://github.com/sowjanyanu-34/ai-object-detection.git',
    demo: 'https://sowjanyanu-34.github.io/ai-object-detection/',
  },
  {
    id: 4,
    icon: '🌿',
    iconBg: 'rgba(245,158,11,0.12)',
    title: 'SmartCrop - AI crop detection',
    desc: 'A system that performs intelligent image cropping by detecting important regions in images.',
    tech: ['Python', 'TensorFlow', 'Jupyter Notebook', 'Pillow', 'OpenCV'],
    github: 'https://github.com/sowjanyanu-34/Smart_Crop.git',
    demo: 'https://smart-crop-anps.onrender.com/',
  },
  
  {
    id: 5,
    icon: '🤖',
    iconBg: 'rgba(245,158,11,0.12)',
    title: 'GestureX - Hand Gesture Recognition',
    desc: 'Real-time hand gesture recognition using your device camera.Detects and classifies gestures using computer vision and deep learning.Displays results for interactive and touchless control.',
    tech: ['Python', 'OpenCV', 'MediaPipe', 'TensorFlow', 'Jupyter Notebook'],
    github: 'https://github.com/sowjanyanu-34/Hand-Gesture-Recognition.git',
    demo: '#',
  },
  {
    id: 6,
    icon: '📔',
    iconBg: 'rgba(34,211,160,0.1)',
    title: 'Diary app',
    desc: 'Diary_app is a personal diary application where users can write, save, and search diary entries. It has login/signup, create/edit entries, and filter entries by date or tags.',
    tech: ['Flutter', 'Dart', 'Firebase authentication', 'Cloud', 'Material ui'],
    github: 'https://github.com/sowjanyanu-34/Diary_app.git',
    demo: '#',
  },
]

export const skillGroups = [
  {
    label: '⚡ Frontend',
    color: 'var(--accent)',
    skills: [
      { name: 'React.js' },
      { name: 'JavaScript (ES6+)' },
      { name: 'HTML & CSS' },
      { name: 'Tailwind CSS' },

    ],
  },
  {
    label: '🔧 Backend',
    color: 'var(--green)',
    skills: [
      { name: 'Node.js & Express' },
      { name: 'MongoDB' },
      { name: 'REST APIs' },
      { name: 'SQL & DBMS' },
    ],
  },
  {
  label: '💻 Programming',
  color: 'var(--blue)', // or any color you like
  skills: [
    { name: 'Python' },
    { name: 'JavaScript' },
    { name: 'Java' },        // add if you know
    { name: 'C / C++' }      // optional
  ],
},
  {
    label: '🤖 AI & Data',
    color: 'var(--amber)',
    skills: [
      { name: 'Python' },
      { name: 'TensorFlow / Keras' },
      { name: 'OpenCV' },
      { name: 'MediaPipe' },
    ],
  },
  {
    label: '🛠️ Tools',
    color: 'var(--coral)',
    skills: [
      { name: 'Git & GitHub' },
      { name: 'VS Code' },
      { name: 'Docker (Basics)' },
      { name: 'Linux / CLI' },
    ],
  },
]