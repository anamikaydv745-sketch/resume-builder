# 📝 Resume Builder

A sleek, responsive Resume Builder app built with **React**, **Redux Toolkit**, and **Tailwind CSS** — enabling users to create, preview, and download professional resumes in minutes.

[Live Demo](https://resume-builder-syed.vercel.app/)

---

## ✨ Features

- **Live Resume Editing** – Fill out resume sections with real-time updates
- **PDF Export** – Download resume instantly in A4 format using `html2pdf.js`
- **Section Reordering** – Drag-and-drop feel with up/down controls
- **State Persistence** – All your data is saved in localStorage automatically
- **Custom Bullet Input** – Add multi-line bullet points for descriptions
- **Responsive Design** – Mobile-friendly and keyboard-accessible
- **Clean UI** – Minimal, professional layout with Tailwind CSS

---

## ⚙️ Tech Stack

- **React 19**
- **Redux Toolkit**
- **Tailwind CSS 4**
- **html2pdf.js**
- **Vite**
- **Deployed on Vercel**

---

## 📁 Folder Structure

```
src/
├── components/
│   ├── preview/         # All components for PDF/A4 preview layout
│   ├── BasicDetailsForm.jsx
│   ├── SectionWrapper.jsx
│   ├── SectionEntriesContainer.jsx
│   └── ...              # Other form components
├── pages/
│   ├── Builder.jsx
│   └── Preview.jsx
├── redux/
│   └── resumeSlice.js
├── utils/
│   ├── formObjects.js
│   ├── htmlDownload.js
│   └── previewSectionMapping.js
├── App.jsx
└── main.jsx
```

---

## 🧠 Learnings

- Implemented real-time resume rendering and PDF export
- Created reusable form components with clean separation of concerns
- Worked with `contentEditable`, `html2pdf`, and advanced Tailwind utilities
- Understood print optimization and dynamic state management






