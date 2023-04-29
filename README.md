💻 Preview it live on [Code Sandbox](https://codesandbox.io/p/github/MichaelLF107/react-bird-social/main?layout=%257B%2522activeFilepath%2522%253A%2522%252F.env%2522%252C%2522openFiles%2522%253A%255B%2522%252FREADME.md%2522%252C%2522%252F.env%2522%255D%252C%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522gitSidebarPanel%2522%253A%2522COMMIT%2522%252C%2522fullScreenDevtools%2522%253Afalse%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522vertical%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522DEVTOOLS_PANELS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522panelType%2522%253A%2522TABS%2522%252C%2522id%2522%253A%2522clh2fyxd601iv3b6m39knf185%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522clh2fyxd601iv3b6m39knf185%2522%253A%257B%2522id%2522%253A%2522clh2fyxd601iv3b6m39knf185%2522%252C%2522activeTabId%2522%253A%2522clh2fz8c201z13b6m7o7jepzs%2522%252C%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clh2fyxd601iu3b6mhqfs4gy9%2522%252C%2522type%2522%253A%2522TASK_LOG%2522%252C%2522taskId%2522%253A%2522dev%2522%257D%252C%257B%2522type%2522%253A%2522TASK_PORT%2522%252C%2522taskId%2522%253A%2522dev%2522%252C%2522port%2522%253A44451%252C%2522id%2522%253A%2522clh2fz0nr01rg3b6m3kg8lgf2%2522%252C%2522path%2522%253A%2522%252F%2522%257D%252C%257B%2522type%2522%253A%2522TASK_PORT%2522%252C%2522taskId%2522%253A%2522dev%2522%252C%2522port%2522%253A34999%252C%2522id%2522%253A%2522clh2fz0rc01tz3b6mxwq2q3zc%2522%252C%2522path%2522%253A%2522%252F%2522%257D%252C%257B%2522type%2522%253A%2522TASK_PORT%2522%252C%2522taskId%2522%253A%2522dev%2522%252C%2522port%2522%253A3000%252C%2522id%2522%253A%2522clh2fz0up01wi3b6mp52k13vh%2522%252C%2522path%2522%253A%2522%252F%2522%257D%252C%257B%2522type%2522%253A%2522TASK_PORT%2522%252C%2522taskId%2522%253A%2522dev%2522%252C%2522port%2522%253A39645%252C%2522id%2522%253A%2522clh2fz8c201z13b6m7o7jepzs%2522%252C%2522path%2522%253A%2522%252F%2522%257D%255D%257D%257D%252C%2522showSidebar%2522%253Atrue%252C%2522showDevtools%2522%253Atrue%252C%2522sidebarPanelSize%2522%253A15%252C%2522editorPanelSize%2522%253A27.32138208490578%252C%2522devtoolsPanelSize%2522%253A55.90379817022456%257D)

## React Bird Social

This project is a simple social media, where users create a user saved locally, and can post short messages for everybody to see!. This project was built using Next.js, Prisma and Typescript.

## Requirements

- Latest version of Node.js
- NPM or Yarn package manager
- Prisma CLI

## Installation

1. Clone this repository
```bash
git clone https://github.com/MichaelLF107/react-bird-social.git
```

2. Install project dependencies
```bash
npm install
#or
yarn
````

3. Create the .env file and place the url of your database on DATABASE_URL

4. Run database migrations
```bash
npx prisma migrate dev
```

## Usage

1. Start the development server
```bash
npm run dev
#or
yarn run dev
```

2. Open `http://localhost:3000` on your browser
