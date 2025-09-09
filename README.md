# 🤖 VerifAI - AI Content Verification Tool

### Transform your content verification process with intelligent fact-checking

![VerifAI Dashboard](./public/opengraph-image.jpg)

<br>

## 🎯 What is VerifAI?

VerifAI is a modern, AI-powered content verification tool that extracts claims, validates them against reliable web sources, and provides instant corrections—ensuring accuracy and trustworthiness in everything you publish. Think of it as an intelligent fact-checker that helps you publish with complete confidence.

<br>

## ✨ Key Features

- 🧠 **Smart Claim Extraction** - AI-powered identification of verifiable statements from any text
- ⚡ **One-Click Corrections** - Instant fixes for inaccurate information with suggested alternatives
- 🌐 **Real-time Verification** - Validates claims against current web sources using advanced search
- 🔗 **Source Attribution** - Complete transparency with source links and confidence scores
- 📱 **Responsive Design** - Beautiful experience across all devices and screen sizes
- 🎨 **Modern UI** - Built with shadcn/ui components, animations, and gradient effects
- 📄 **Multi-format Support** - Upload PDF, DOCX files or paste text directly

<br>

## 🛠️ How It Works

1. **Upload & Paste**: Add your content by pasting text directly or uploading PDF/DOCX files
2. **AI Analysis**: Our AI extracts factual claims and searches for verification sources  
3. **Get Results**: Receive detailed fact-checks with suggestions and source references
4. **Apply Fixes**: One-click corrections to improve your content accuracy instantly

<br>

## 💼 Perfect for Every Industry

- **Marketing Teams** - Blog posts, landing pages, social media content, and campaigns
- **Sales Professionals** - Outreach emails, proposals, case studies, and presentations
- **Product Teams** - Documentation, release notes, feature descriptions, and guides
- **Compliance Officers** - Policy summaries, regulatory content, and risk assessments
- **Educators** - Study materials, lesson plans, research summaries, and curricula
- **Healthcare Providers** - Patient communications, educational handouts, and medical content

<br>

## 💻 Tech Stack

- **Frontend**: [Next.js 14](https://nextjs.org) with App Router, [TypeScript](https://typescriptlang.org)
- **Styling**: [Tailwind CSS](https://tailwindcss.com) with [shadcn/ui](https://ui.shadcn.com) components
- **Animations**: [Framer Motion](https://framer.com/motion) for smooth interactions
- **AI/LLM**: [Anthropic's Claude](https://anthropic.com/claude) for claim extraction and verification
- **Search Engine**: [Exa.ai](https://exa.ai) for real-time web source verification
- **Icons**: [Radix UI Icons](https://icons.radix-ui.com) and [Lucide React](https://lucide.dev)

<br>

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- API keys for Exa.ai and Anthropic

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/Gbollysearch7/verifai-content-verification.git
cd verifai-content-verification
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Set up environment variables**
Create a `.env.local` file in the root directory:
```env
EXA_API_KEY=your_exa_api_key
ANTHROPIC_API_KEY=your_anthropic_api_key
```

4. **Run the development server**
```bash
npm run dev
# or
yarn dev
```

5. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

<br>

## 🔑 API Keys

- **Exa API Key**: Get yours from [Exa Dashboard](https://dashboard.exa.ai/api-keys)
- **Anthropic API Key**: Get yours from [Anthropic Console](https://console.anthropic.com)

<br>

## 🎨 Design System

VerifAI features a modern design system with:

- **Color Palette**: Blue to purple gradients with professional grays
- **Typography**: ui-sans-serif system font stack for optimal readability
- **Components**: Reusable shadcn/ui components with consistent styling
- **Animations**: Subtle Framer Motion animations for enhanced user experience
- **Responsive**: Mobile-first design that works on all devices

<br>

## 🏗️ Project Structure

```
verifai-content-verification/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Landing page
│   ├── app/page.tsx       # VerifAI tool
│   └── api/               # API routes
├── components/            # React components
│   ├── ui/               # Reusable UI components  
│   └── FactChecker.tsx   # Main verification component
├── lib/                  # Utility functions
└── public/              # Static assets
```

<br>

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

<br>

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

<br>

## 🙏 Acknowledgments

- **[Exa.ai](https://exa.ai)** - Advanced search engine for AI applications
- **[Anthropic](https://anthropic.com)** - Claude AI for intelligent text processing
- **[shadcn](https://ui.shadcn.com)** - Beautiful and accessible component library
- **[Vercel](https://vercel.com)** - Deployment and hosting platform

<br>

---

**Built with ❤️ by [Gbolahan](https://github.com/Gbollysearch7)**

⭐ **Star this repository if you find it helpful!**
