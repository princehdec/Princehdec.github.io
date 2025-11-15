# Prince Sharma Portfolio (dev workspace)

Basic instructions for running and testing locally.

Prerequisites
- Node.js (>=18)

Install
```powershell
cd 'c:\Users\SHIV\Downloads\website'
node "C:\Program Files\nodejs\node_modules\npm\bin\npm-cli.js" install
```

Run dev server
```powershell
node "C:\Program Files\nodejs\node_modules\npm\bin\npm-cli.js" run dev
# or if your PowerShell allows: npm run dev
```

Run tests
```powershell
node "./node_modules/jest/bin/jest.js" --colors
# or: npm test
```

Environment
Copy `.env.example` to `.env.local` and set `GEMINI_API_KEY` for the real Gemini integration.
