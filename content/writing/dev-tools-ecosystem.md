---
title: "Developer Tool Ecosystem"
date: 2023-11-25
tag: essay
description: A thesis on the developer tool landscape -- who builds it, who pays for it, what it's worth, and the four emerging themes that will drive the next wave of growth.
canonical: https://hardikmore.com/writing/dev-tools-ecosystem
---

This post is a written companion to a slide deck I put together in November 2023 -- a thesis on the SaaS and developer tool ecosystem. The full 6-pager is available to download below.
[Download the full deck (PDF) ->](/assets/Developer%20Tools%20ecosystem.pdf)

---

## The developer landscape

Developers are becoming the most important buying unit in enterprise software. Not IT. Not the CTO alone. The individual developer.

![Global developer count 2018-2030, projected to reach 45 million](/images/writing/dev-tools-ecosystem/developer-growth-chart.png)

*Developer count growing at 5-6% annually. Source: State of Developer Nation*

![Developer distribution by company size](/images/writing/dev-tools-ecosystem/company-size-chart.png)

*More than 58% of developers work at companies under 500 employees -- small teams with no bandwidth to build internal tooling. Source: Stack Overflow Survey*

What makes developer tools structurally different from other SaaS: the buyer and the user are the same person. No procurement committee, no lengthy evaluation cycle. A developer tries a tool, it works, it spreads. Or it doesn't, and they move on in an afternoon.

The developer landscape breaks into four categories:

![The four-layer developer landscape taxonomy](/images/writing/dev-tools-ecosystem/landscape-taxonomy.png)

*Developer Platforms (API-accessed, like Twilio), Toolkits (IDEs, SDKs, like VS Code), Infra Stack Tools (deploy, monitor, like GitHub and DataDog), and Workflow Tools (collaboration, like Asana).*

As companies stay smaller for longer and internal engineering bandwidth stays constrained, the market for tools in each of these four categories only expands.

---

## How many tools, and why aren't they free?

Developers use at least 4 tools on average. Version control is near-universal at 80-85%. IDEs, desktop editors, CI/CD, and issue trackers round out the core stack.

![Tool category adoption rates across developers, 2018-2021](/images/writing/dev-tools-ecosystem/tools-usage-chart.png)

*Adoption by tool category, tracked 2018-2021. Source: State of Developer Nation*

The interesting question isn't what they use -- it's why they're paying for it. Cloud changed the model. Non-cloud is self-hosted, free or minimal cost. Cloud-native means subscription. And the Software Delivery Lifecycle has decisively moved to cloud.

![Non-cloud vs cloud revenue growth across Atlassian, MongoDB, Elastic, Confluent, GitLab](/images/writing/dev-tools-ecosystem/cloud-vs-noncloud-revenue.png)

*Cloud revenue consistently outpacing non-cloud across every major dev tool company. Atlassian +26%, MongoDB +44%, Elastic +50%, Confluent +64%, GitLab +69% YoY.*

The reason they're not free: inability to build internal tools. Developers at 50-person companies aren't going to roll their own CI/CD, observability stack, or API gateway. They subscribe. And once subscribed, they stay.

---

## How much do they earn and retain?

The developer-led landscape is a $64 billion market. At 22% CAGR, projected to reach $109 billion by 2025.

![Developer-Led Landscape breakdown -- $64B total across Dev Tools, Dev Infra, Dev Platforms](/images/writing/dev-tools-ecosystem/developer-led-landscape.png)

*Dev Platforms at $42.8B (+22% YoY) is the largest and fastest-growing segment. Dev Infrastructure at $12.0B (+12%), Dev Tools at $3.7B (+4%). Source: Developer-Led Landscape*

The retention numbers are what make this attractive. NDR across public dev tool companies averages 125%+. Every company in the chart above 119%, several above 130%, GitLab at 152%.

![NDR % across public dev tool companies](/images/writing/dev-tools-ecosystem/ndr-chart.png)

*Land with one team, expand across the org as usage grows. No re-selling required. Source: Annual Reports, FY22*

![Developer tool market size -- $40B in 2020 to $109B by 2025 at 22% CAGR](/images/writing/dev-tools-ecosystem/market-size-chart.png)

---

## The ecosystem and emerging themes

The DevOps Periodic Table maps 22 distinct segments across AI/Analytics, Containers, CI, Deployment, Security, Testing, and more.

![The Periodic Table of DevOps Tools V4.2](/images/writing/dev-tools-ecosystem/devops-periodic-table.png)

*Open source dominates most segments as the baseline. Enterprise tools lead on features, which is how they justify paid plans. Segment crowding is real -- most categories have 50+ companies. Source: DevOps Periodic Table*

From those 22 segments, four themes stand out as high-growth vectors:

![Four emerging themes -- FinOps, Low-Code Tools, Edge Computing, API Management](/images/writing/dev-tools-ecosystem/emerging-themes.png)

### FinOps - Cloud spend monitoring

Cloud infrastructure spend is now a P&L line item, not just an engineering concern. FinOps emerged as a discipline to forecast, monitor, and optimise that spend -- typically reported to CTOs but increasingly with CFO attention.

![Multi-cloud adoption -- 89% of enterprises on multi-cloud or hybrid cloud](/images/writing/dev-tools-ecosystem/multicloud-donut.png)

*89% multi-cloud adoption means no single CSP's native tools are sufficient. That gap is where CloudQuery, Lumigo, Finout, and Splunk sit. The problem gets worse as cloud adoption deepens, not better.*

### API Management

More companies are going API-first. Many are monetising via API-as-a-product. API design, development, testing, security, and documentation stops being an afterthought and becomes a core product function.

![API Platform Landscape -- full map of tools across lifecycle, collaboration, governance, gateways](/images/writing/dev-tools-ecosystem/api-platform-landscape.png)

*Source: State of API Report*

Three emerging patterns in this segment:
- Universal API management across the full enterprise stack
- In-built security testing as part of the API lifecycle
- API discovery and auto-documentation -- as API sprawl grows, knowing what you have becomes a problem

### Low Code Tools

Low-code is the developer tool category that's actually not for developers -- it's for everyone else. As organisations try to enable non-technical employees to build and maintain applications, low-code platforms sit between SaaS and custom engineering.

![Low-Code Development Platform Market by Region -- projected $45.5B by 2025](/images/writing/dev-tools-ecosystem/lowcode-market-chart.png)

*23% annual growth rate. From $1.5B in 2018 to a projected $45.5B by 2025. North America leads, APAC accelerating. Source: Gartner LCD Report*

Freemium or per-user/per-application pricing makes adoption frictionless -- teams can start without procurement. Players: Quickbase, OutSystems, Retool, Bubble.

### Edge Computing

Edge computing brings computation and data storage closer to where data originates, rather than routing back to a central cloud region. Most valuable for event-driven applications where latency is the bottleneck.

The tailwinds: 5G rollout, increasing end-user device compute capability, ML-at-edge reducing privacy concerns, automation enabling edge deployments to scale. Players: Macrometa, Stackpath, SiMa.ai. This segment is the earliest of the four -- infrastructure-level bets where the category is still forming.

---

## What this means

The developer tool market is not a niche. $64 billion, growing at 22%+ CAGR, with retention metrics that most SaaS categories can't touch.

The structural reason: developers are the new procurement unit. They choose tools bottom-up, spread them inside organisations. Once a tool is embedded in the development workflow -- in the CI/CD pipeline, the monitoring stack, the API gateway -- it's genuinely hard to rip out.

The four themes above each sit at an intersection of that structural shift with a specific forcing function: cloud cost pressure, API-first architecture, non-technical users, 5G and compute. Each is large enough to support multiple winners.

This deck was an early attempt at mapping it. The landscape has moved since -- AI-native tooling has reshaped several of these categories -- but the underlying logic holds.

[**Download the full deck (PDF) ->**](/assets/Developer%20Tools%20ecosystem.pdf)
