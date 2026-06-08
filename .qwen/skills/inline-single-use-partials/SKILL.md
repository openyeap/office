---
name: inline-single-use-partials
description: When a Hugo layout + its partials serve only one content page, inline the HTML directly into the content file and delete the layout and partials to reduce indirection.
source: auto-skill
extracted_at: '2026-06-08T07:55:29.681Z'
---

# Inline Single-Use Partials in Hugo

## When to apply

A Hugo layout template (e.g., `layouts/product/single.html`) and its partials are only consumed by **one content file** (e.g., `content/koffer.md` via `layout: "product"`). The partials have no other callers.

## What to do

1. **Grep** for all `{{ partial "xxx.html" . }}` references across `layouts/` to confirm each partial has exactly one caller (the layout being consolidated).

2. **Read** the layout file (e.g., `product/single.html`) to get the invocation order of partials.

3. **Inline** the HTML from each partial directly into the content `.md` file body, concatenating in the order they were called.

4. **Remove** the `layout:` field from the content frontmatter (so it falls back to `_default/single.html` which renders `{{ .Content }}`).

5. **Delete** the layout file and all its now-unused partials.

6. **Verify** that the remaining partials in `layouts/partials/` still have callers (grep again to be safe).

## Why

A layout that serves a single page is unnecessary indirection — the content *is* the page. Inlining keeps everything in one place, making edits simpler: no need to hunt across multiple files for a one-page change.
