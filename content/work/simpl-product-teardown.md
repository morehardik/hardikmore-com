---
title: "Simpl: Product Teardown"
date: 2022-06
tag: consumer
description: "A product teardown of Simpl's activation gap: why 80% of onboarded users never make their first transaction, and a prioritised solution set to fix it."
---

*[Download the full teardown deck (PDF) ->](/assets/Simpl%20Product%20Teardown.pdf)*

---

This teardown was done in June 2022 as part of The Product Folks community. The exercise: pick a product, go deep on one problem, propose solutions you'd actually ship.

I picked Simpl. At the time it was one of the more interesting companies in Indian fintech: not a bank, not a wallet, not a traditional BNPL. It sat at the intersection of checkout infrastructure and consumer credit, building something genuinely new. And it had a very specific, very solvable activation problem.

## The bet

Simpl had done the hard work. 15,000+ merchant partners. 49 million transactions. 7 million users on the network. Payment gateway integrations with Razorpay, Juspay, Shopify, WooCommerce.

![Simpl overview: 15,000+ merchants, 49M transactions, 7M users](/images/work/simpl-product-teardown/simpl-overview.png)
*Simpl's network scale at the time of the teardown*

The supply side was built. The bet I wanted to examine: **why were 80% of onboarded users never making a first transaction?**

This is a different problem than acquisition. These users had already installed the app, completed KYC, and received a credit limit. Something was breaking in the gap between "onboarded" and "active." My hypothesis going in: this was a product clarity problem, not a distribution problem.

---

## Industry context: BNPL in India

Understanding the Simpl problem requires understanding what BNPL looked like in India in 2022.

![BNPL in India: 120M addressable users, 157+ digital lending startups, evolution of players from 2014-2021](/images/work/simpl-product-teardown/bnpl-landscape.png)
*Evolution of BNPL players in India, 2014-2021. Source: Crunchbase, RedSeer*

Three numbers set the context:

- **120 million** formally employed Indians without a credit card: credit-ready, but unserved
- **157+ registered** digital lending startups competing for that base by 2022
- Consumer loans projected to hit **$1.3 trillion by FY2024** (ICICI/CRISIL, 2019)

The competitive landscape had three distinct strategic approaches:

![BNPL strategies: MDR-focused, revolving credit, credit line focus](/images/work/simpl-product-teardown/bnpl-strategies.png)
*Three strategies BNPL players were using to win the Indian market*

- **MDR-focused**: Charge merchants a Merchant Discount Rate for enabling the sale. Revenue works when Earned MDR exceeds cost of credit. Clean model, merchant-aligned.
- **Revolving credit**: Credit card-style lending with interest rates around 40%. Revenue comes from credit extended. Familiar, but high default risk at scale.
- **Credit line focus**: Accumulate transactional and behavioral data first, monetize through personal credit products later. Patient capital required.

In practice, most players ran a blend. The unspoken shared goal in 2022: get users habituated before worrying about the revenue model.

---

## Simpl's positioning

![Simpl positioning: convenience + affordability + 1-tap checkout, merchant network, payment gateway integrations](/images/work/simpl-product-teardown/simpl-positioning.png)
*Simpl's merchant network included Zomato, BigBasket, Dunzo, JioMart, Rapido, Practo and dozens more*

Simpl's positioning was built on two axes: **convenience** (1-tap checkout, no payment friction) and **affordability** (buy now, pay on the 1st and 16th of every month).

The credit model:
- Starting limit: Rs 1,500-3,000 (based on CRIF score)
- Limit scales with repayment behavior (up to Rs 25,000)
- Primarily MDR-focused, with credit line data as the long-term play

The "Your Online Khata" framing was smart. Khata is a deeply familiar concept in India: a running credit tab with a local shopkeeper, settled periodically. Simpl was digitizing that for e-commerce, which made the product legible to users who had never held a credit card.

The network flywheel: more merchants drive more transaction surfaces, which drive more user adoption, which builds repayment data, which enables better credit models and higher limits, which drives more transactions.

The supply side of that flywheel was working. The demand side was stalling.

---

## The problem

![Problem statement: 20% first transaction rate within D-30, target 60%, activation funnel diagram](/images/work/simpl-product-teardown/activation-funnel.png)
*The activation gap: 20% current, 60% target. A 3x improvement on the metric that unlocks everything downstream.*

**Only 20% of successfully onboarded users made their first transaction within 30 days.**

This is a striking number. These aren't cold leads. These are users who:
1. Installed the app
2. Completed KYC
3. Received a credit limit
4. And then... did nothing

The goal for this teardown: understand why, and propose solutions to move that 20% to 60%.

Why does activation matter so much for Simpl specifically? Because the entire credit model depends on behavioral data from real transactions. No first transaction means no repayment data, no limit growth, no upsell to personal credit products. Every user who stalls at activation is worth zero to the business, regardless of how good their CRIF score is.

---

## Breaking down the problem

The structured breakdown of who was dropping off, when, where, and how helped sharpen the solution space.

![Problem breakdown: WHO (new user), WHAT (first transaction), WHEN (D-30), WHERE (any merchant or Billbox), HOW (awareness + incentives + merchant engagement)](/images/work/simpl-product-teardown/problem-breakdown.png)
*Framing the activation problem across five dimensions*

- **Who**: New user, post-onboarding
- **What**: Has to complete first transaction
- **When**: Within 30 days
- **Where**: Any merchant on the Simpl network, or via Billbox
- **How**: Make Simpl's offering legible, reduce the distance to first transaction

Key metrics to track success: number of app sessions by newly onboarded users, duration of app sessions.

---

## User personas

Three personas emerged from research, each failing at activation for a different reason.

![User personas: Ashish (25, tech-savvy), Disha (28, designer, referral), Nikhil (35, consultant, Facebook ad)](/images/work/simpl-product-teardown/user-personas.png)
*Three distinct user types, three distinct failure modes at activation*

**Ashish, 25.** Tech-savvy, works at a startup, already uses 4-5 BNPL apps. He knows what BNPL is. His problem: can't find which merchants in his regular apps accept Simpl at checkout. He's not confused about credit; he's failing on discoverability.

**Disha, 28.** Designer, joined because a friend referred her. Completed onboarding on her friend's ask, but has no mental model of what to do next. She's not resistant; she just hasn't been shown the path.

**Nikhil, 35.** Consultant, came via a Facebook ad. Doesn't understand how the credit model works. The absence of a PIN or password makes him distrust the app entirely. His failure is trust.

Three entry paths, same stall point. But the fix is different for each: Ashish needs merchant discoverability, Disha needs guided first steps, Nikhil needs clarity on how the product works and why it's safe.

---

## Key pain points

![Key pain points: post-onboarding ambiguity, unclear credit model, merchant discoverability, no relevant offers, Billbox unavailable](/images/work/simpl-product-teardown/pain-points.png)
*Five pain points driving activation drop-off*

Synthesised from the three personas:

1. **Post-onboarding ambiguity**: no clear next step after signup. The app doesn't tell you what to do.
2. **Credit model opacity**: users don't understand what Simpl is, how the limit works, or why there's no PIN.
3. **Merchant discoverability**: users don't know which of their apps accept Simpl at checkout, even when those merchants are on the network.
4. **No relevant offers**: generic deals (Zomato 60% off) shown to users who don't order from Zomato.
5. **Billbox unavailable**: the bill-payment feature was locked for users with zero transaction history, removing the most friction-free first-use surface.

That last one stood out. Billbox covers electricity, broadband, mobile recharge: things users pay every month regardless. It's existing behavior. Locking it behind transaction history was actively working against activation.

---

## What I did

### Redesigning the home screen

![Current onboarding home screen annotated: irrelevant action cards, generic deals, Billbox missing, poor bottom nav](/images/work/simpl-product-teardown/current-home-screen.png)
*The existing post-onboarding screen, annotated. Built for active users, not new ones.*

The existing screen was designed for someone who already transacts on Simpl. For a new user, it showed:
- An autopay setup card (irrelevant before any bill exists)
- Generic merchant deals not matched to installed apps
- No guidance on what to do first
- Billbox absent from the bottom navigation

![Redesigned home screen: education card, phone-matched merchants, personalised offers, Billbox in nav](/images/work/simpl-product-teardown/redesigned-home-screen.png)
*Redesigned home screen: "Not sure how to start? Find out..." card prominent, merchants matched to installed apps, Billbox accessible from day one.*

The redesign prioritises three things for a new user:
- A prominent "Not sure how to start?" card that walks through how Simpl works
- Merchant logos drawn from apps actually installed on the user's phone (via device data), linked directly to those apps
- Billbox visible in navigation from day one, with a clear prompt to pay an existing bill

### Enabling Billbox from day one

![Billbox: pay bills in 1-tap, all utilities, newly available for onboarded users](/images/work/simpl-product-teardown/billbox.png)
*Billbox covers prepaid, postpaid, electricity, DTH, broadband. Opening it to new users creates an immediate first-transaction surface.*

Removing the transaction-history gate on Billbox was arguably the highest-leverage short-term fix. It costs nothing to build (the product already exists), and it gives every new user an immediate, low-stakes reason to transact: pay a bill they were going to pay anyway.

### Personalising offers and merchant discoverability

Use SMS patterns, installed app data, and demographic signals to show only relevant deals. Surface Simpl's network by matching to apps the user has installed, not by showing a generic 15,000-merchant list.

### Communication cadence

A structured 30-day push across all channels. The insight: the critical window is the first 7 days. Most drop-off happens here, before habits can form.

![Communication cadence: 30-day period, critical first 7 days, sustained 8-21, last push 22-30, tools: yellow.ai + MoEngage](/images/work/simpl-product-teardown/communication-cadence.png)
*30-day communication cadence with urgency front-loaded in the first week*

### Merchant onboarding and checkout visibility

The deeper merchant problem: even when a user goes to Zomato and Simpl is available, they can't find it. It's buried in a generic payment options list with no visual hierarchy.

![Merchant categories: groceries, food, travel, healthcare, lifestyle — with Simpl network vs other top merchants per category](/images/work/simpl-product-teardown/merchant-categories.png)
*Target merchant categories mapped by BNPL transaction volume: groceries, food, travel, healthcare, lifestyle*

The fix requires working with Razorpay and Juspay: give Simpl a visually distinct, highlighted row at checkout, not just a text entry in a list. And within the Simpl app, categorise the merchant directory the same way offers are organised, so users can browse by what they actually buy.

---

## Prioritisation

<!-- ![Feature list and prioritisation table: redesigning home screen (short), display partner merchants (short), Billbox for new users (short), customising offer (medium), referral program (medium), increasing communication (medium), onboarding merchants (long)](/images/work/simpl-product-teardown/prioritisation.png)
*Feature list mapped to pain points, build complexity, and implementation timeline* -->

| Feature | Pain point addressed | |
|---|---|---|
| Redesign home screen | Post-onboarding ambiguity | <span class="tag tag-short">short</span> |
| Phone-matched merchant display | Merchant discoverability | <span class="tag tag-short">short</span> |
| Billbox for new users | No first-transaction surface | <span class="tag tag-short">short</span> |
| Personalised offers | Irrelevant deals | <span class="tag tag-medium">medium</span> |
| Referral program | Activation incentive | <span class="tag tag-medium">medium</span> |
| Communication cadence | Insufficient nudges | <span class="tag tag-medium">medium</span> |
| Merchant onboarding + checkout visibility | Can't find Simpl at checkout | <span class="tag tag-long">long</span> |

Short-term wins are all low build cost, high activation leverage. They don't require new infrastructure: one is a screen redesign, one is unlocking a product that already exists, one derives from device data Simpl could already access. You could ship all three in a sprint.

---

## The number

Move D-30 first transaction rate from **20% to 60%**: a 3x lift on the single metric that unlocks everything downstream. First transaction triggers repayment data, which enables limit growth, which drives retention and credit product upsell.

## What I learned

The most common activation failure in embedded-credit products is not a product-market fit problem. It is a clarity problem. Simpl had built the network. It had not built the experience that explains the network to someone who just signed up. The product assumed familiarity it had not earned.

---

**[Download the full teardown deck (PDF) ->](/assets/Simpl%20Product%20Teardown.pdf)**
