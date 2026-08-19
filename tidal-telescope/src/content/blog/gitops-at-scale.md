---
title: "GitOps at Scale: Lessons from Production"
description: "What actually works when you move from a handful of clusters to fleet-wide continuous delivery."
pubDate: 2026-01-18
tags: ["gitops", "kubernetes", "platform-engineering"]
---

GitOps promises a single source of truth for infrastructure and applications. In practice, scaling it across teams and environments surfaces friction that tutorials rarely cover.

## One repo is rarely enough

Monorepos work until they do not. A pragmatic split:

- **Platform config** — cluster add-ons, policies, shared operators
- **Application manifests** — owned by product teams, promoted through environments
- **Environment overlays** — Kustomize or Helm values per region/stage

The goal is ownership clarity, not repository purity.

## Promotion beats direct deploys

Treat `dev → staging → prod` as a pipeline, not a suggestion. Pull requests between branches (or repos) create the audit trail compliance teams expect and give you a natural rollback point.

## Secrets stay out of Git

Sealed Secrets, External Secrets Operator, or cloud-native secret stores — pick one pattern and enforce it. Rotations and access reviews are easier when secrets never touch a commit history.

## Watch drift, not just sync status

Argo CD showing _Synced_ does not mean your cluster matches intent forever. Schedule drift detection, alert on out-of-band changes, and treat manual `kubectl` edits as technical debt with an expiry date.

---

_Add more posts by creating new `.md` files in `src/content/blog/`._
