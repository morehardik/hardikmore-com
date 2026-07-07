---
title: "An Operator's Dilemma"
date: 2026-07-07
tag: essay
description: One Window or a thousand front doors? Why every builder is quietly betting supplier or storefront - and why discovery moved to chat but transactions didn't.
canonical: https://hardikmore.com/writing/an-operators-dilemma
draft: true
---

![Cover image -- placeholder](/images/writing/an-operators-dilemma/cover.png)

Over the last four years, I have worked on multiple products, used dozens of products myself, be that productivity tools or new startups, and also seen hundreds of trading tools getting built up close. With AI, the pace of this has only gone up, as the cost of building collapsed and everyone who ever wanted the tool they needed could suddenly ship it over a weekend. And after a point, I started seeing five new products solving the exact same problem, which was already a niche, so much that they all started blurring into each other. But two of them stayed with me. They did not build an interface at all. They built their entire product as an MCP server, with all the value they wanted to deliver packaged as a set of capabilities that any chat assistant could plug into. And in one stroke, this made much more sense to me. No change in my workflow or interface to start using it. No app, no layers of options and no onboarding video. Just intelligence you could talk to.

That sent me down a rabbit hole about UI itself. UI adds a learning curve, something I have learnt after reading HCI and building products, and trading interfaces are among the worst offenders. Candles, market depth, option chains, a hundred settings, and every user wants theirs arranged slightly differently anyway. So one instinct says remove the UI entirely and let people just ask for what they want. The opposite instinct says make it completely customisable and let every user build their own. I do not think either works. Time and again, people have experimented with both and failed miserably with user stickiness. Remove the UI and you lose everyone who does not know what to ask. And let's be honest, asking what you need for every task can never be considered a good interface. On the other hand, make it fully customisable and you have handed users a job they never applied for. My bet is we settle somewhere in the middle, a UI that is generated and personalised for each user, assembled fresh depending on who is looking at it and what they are trying to do. But this also means a massive amount of data and context about each user, how they interact, what they need, and how a custom UI can be built around that hyper-personalisation.

And once you accept that the interface itself is up for grabs, you land on the real question. Does the world converge to chat as one universal interface, or to a thousand interfaces, each hyper-personalised and built by hundreds of builders? If you build digital products for a living, no matter what your job title states, whichever part of the trinity you place yourself in, design, product or tech, this is the dilemma sitting under every high-level discussion you have had this year. Most of us have not named it yet. This essay is an attempt to name it.

## How we got here

Since November 2022, taking ChatGPT's launch as the reference because everything now gets measured against that moment, my own thinking has moved through three phases.

**Amusement** came first. A chat screen with the world's worst UI, no sassiness, no taste, but doing wonders with writing. You could throw anything at it and it would make your draft better than what you wrote. You could even code somewhat, if coding meant pasting your entire file into the window, crossing your fingers, and trying again when it broke.

Then came **adoption**, when people started talking about the application layer. If you cannot build your own model, you can always build a product on top of one. Cursor was that moment for me. Suddenly I did not have to copy-paste code into a chat window, it just worked right there, half the time, but still. Soon every product I was already using started adding AI features, and new products got built and destroyed between two OpenAI DevDays. In the AI world, more releases happen in a month than the SaaS era saw in a year. Adoption is still going on, and it moves in waves depending on the interface: the content creation wave, the media generation wave, the Claude Code wave, the cowork wave.

And now **application**, which is where the dilemma kicks in. OpenAI opened up its APIs for everyone to build on. So did Anthropic and every other model provider, and Meta gave its entire model away. Then Anthropic shipped MCP, ChatGPT built an app store, and marketplaces of connectors started showing up inside both. Anyone can now build on top of intelligence, which means the question is no longer whether you can build. The question is where.

![Figure 1 -- The three phases, from ChatGPT to the fork -- placeholder](/images/writing/an-operators-dilemma/three-phases.png)

*Figure 1: The three phases, from ChatGPT to the fork.*

## The two futures

Every builder today is placing a bet on one of two futures, and most are doing it without admitting it.

### One Window

The first future is what I call the One Window. Chat becomes the universal interface, and everything you do with the digital world happens through a single box. We are already watching this get assembled. MCPs and Skills pull proprietary data and specialised domains like finance into the same chat window. App stores and connector marketplaces are live inside ChatGPT and Claude. Generative UI renders whatever interface the moment needs, a table when you need a table, a chart when you need a chart, a form when something needs your confirmation. Push this to its logical end and you get models small enough to run on devices, with a home screen generated uniquely for each user. Think about how every phone already looks different, with different app layouts and groups. Now imagine every app itself being custom, every element on screen different for each person, with most intelligence running locally and specialised calls going out only when needed. The payment still runs on Stripe or Razorpay rails, the trade still executes on a broker's systems, the delivery still moves through a logistics network. Sometimes a human confirms the final call, and for low-value or routine decisions the agent transacts on its own. But nobody opens those apps anymore. In this future you become a supplier. Essential, invisible, like a payment gateway.

### Thousand Front Doors

The second future is a Thousand Front Doors. Every serious company builds its own intelligence layer, with context, memory and workflows tuned to its domain. This is where we are seeing a Cambrian explosion right now. Every incumbent and every challenger wants AI-powered search, AI context and AI features inside their product, because a product that holds the deep context of one vertical can know its user better than a general assistant that holds shallow context of everything. The bet these companies are making is that being AI native, hyper-personalised, and running close to autonomy at scale is a moat. For this future to fully arrive, though, intelligence cannot stay concentrated with a few model companies. Models will have to be hosted and built upon by each company in the way they want to serve, and in that world the product moat becomes the whole game. You defend your own front door. You stay a storefront.

**Supplier or storefront. That is the dilemma.**

There is an honest tension underneath the second future that deserves saying out loud. What AI consumer startups are banking on today is that they can deliver value on top of the model's intelligence through context and memory. But the model companies are getting into more of their users' lives every month, collecting context across every app and service they touch, and compounding in intelligence as they do. The startups' moat and the platforms' ambition are the same asset. Someone is wrong about who gets to keep it.

![Figure 2 -- One Window vs a Thousand Front Doors -- placeholder](/images/writing/an-operators-dilemma/one-window-vs-thousand-front-doors.png)

*Figure 2: One Window vs a Thousand Front Doors.*

## Discovery moved, transactions didn't

Here is why the dilemma is genuinely hard right now, instead of obvious. If both discovery and transactions had already moved to AI platforms, the answer would be simple: become a supplier today, before the shelf space runs out. If neither had moved, also simple: ignore the noise and keep building your platform. We are in neither state. We are in the split state.

Discovery has moved. People who used to search now ask. The question of which screener to use, which laptop to buy, which course to take, increasingly gets answered inside a chat window instead of a results page, which is why GEO is quietly replacing SEO as the growth conversation. AI is replacing what search used to do for people, and the front door of the internet has shifted.

But the transactions have not followed. The order still gets placed on the commerce app, the trade still executes on the broker, the money still moves where trust and regulation live. Majority of the volumes are exactly where they were. The cash register has not moved an inch, even as the footfall now arrives through a different door.

And there is a second wrinkle here, one I only understood by actually trying to connect these things. MCP has no Googlebot. When the web was young, Google crawled you automatically. Build a site and you got discovered, because the discovery layer came with a distribution mechanism built in. Nothing like that exists for MCPs today. Claude, ChatGPT and Gemini do not suggest your server as a tool the way search surfaced your website, and connecting one is still unintuitive for anyone who is not already a power user. Which means the supplier path currently ships with a hidden bill. You give up your interface, and you still have to solve your own distribution.

That is the part most analyses miss. Becoming infrastructure was supposed to mean outsourcing distribution to the platform. Today it means neither owning the user nor inheriting the reach.

### The graveyard in the middle

Meanwhile, a third group refuses to choose, and they are the ones dying fastest.

As code becomes cheap, thousands of tools ship every day, built over a weekend, on rented infrastructure, priced like software and marketed like a startup. Almost all of them have neither distribution of their own, no brand, no users, no moat, nor distribution inherited from the AI platforms, because as we just saw, nobody is crawling MCPs. Something that took a couple of hours to build carries a couple of hours of defensibility. Of the hundreds of trading tools I mentioned at the start, this describes most of them. The product works, but there is no answer to the only two questions that matter: how does anyone find this, and why does anyone stay?

The middle path is not a hedge between the two futures. It is exposure to both downsides with neither upside. This messy middle existed even during the internet boom, when every tiny event invite or utility got its own domain and called itself a product.

## The 80/20, and the proactive problem

So which future wins? The honest answer is that it depends on which market you are actually in, and most builders are wrong about which one that is.

Split the demand side in two. The number here is not from a survey and the real split will be some version of this shape.

**The 80%** uses the internet to consume content, scroll social media, and order things once in a while. Their work does not run on twenty apps. They will never connect an MCP, never set up a data pipeline, never build a workflow. For them the One Window is genuinely appealing, one place that answers everything, and this is where ChatGPT will expand and Gemini will fight to keep Google's share. Notice also that most writing about AI today is about enterprise, because that is where the money is, while the consumer side gets skipped. The consumer side is where the 80% lives.

But there is one thing I learnt watching AI features land inside mass-market products, and it changed how I think about this segment. The mass consumer is not prompt first. Reactive intelligence, the blank box waiting for a well-formed question, is a power-user product wearing a consumer costume. For the 80%, intelligence only works when it is proactive, when it surfaces the thing before it is asked for, embedded inside a flow the user was already in. Which means this segment gets won the way it has always been won, by distribution and by regulatory or operational moats, in banking, wealth, food delivery, with AI layers inside the product but the underlying service doing the actual winning. AI becomes a feature of the winner, not the reason they won.

**The 20%** is where the builders live. The power users running twenty apps a day, hopping platforms for a one percent better experience, connecting MCPs, structuring their work through agents, or at least having tried Claude Code once. Most people reading this are in this segment, some still awed, some building their own thing, some convinced human intelligence has been rendered moot, and that is exactly why we over-index on it when we predict the future. Here, context depth and workflow ownership decide everything, and both futures are live and fighting for the same user.

And the fight resolves at different speeds in different categories. In dev tools the window has arguably already won. Look at how fast Claude Code occupied the category Cursor created. In shopping, the volumes still run on the commerce apps but discovery has already left for chat. Where trust and regulation pin the transaction down, the platform holds, for now. The gradient is real, and it is moving.

## What I'd bet

A long post should end with a formula, not a summary. This is what my agent suggested, and I think it was right. So here is mine.

Where you build = who owns discovery in your category × whether the transaction can move without breaking trust.

If discovery in your category has moved to chat and the transaction can follow without a trust or regulatory break, you will end up a supplier whether you like it or not. Build the best pipe early, and treat the distribution of that pipe as a product problem in itself, because nobody is going to crawl you.

If the transaction cannot move, the storefront survives, and your job is to make it proactive and AI native before a challenger does it to you.

And if you are building neither the pipe nor the storefront, just a tool on rented infrastructure with rented distribution, you are not choosing a future. You are waiting for one of them to delete you.

Which brings me back to the startup from the beginning, the one that built everything as an MCP. I still think about them, because they made the braver bet. They saw the One Window coming and moved early, and they also inherited the hidden bill that comes with it, a pipe that nobody crawls. Whether it was the right bet depends on which future arrives first, and I honestly do not know. I will keep score and report back.
