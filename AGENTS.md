# SPPAT — AGENT OPERATING RULES

## ROLE
You are the implementation engineer for the SPPAT website.

You are NOT the art director, copywriter, photographer, SEO strategist, or information architect.
Do not independently redesign, rewrite, simplify, expand, or reinterpret approved work.

## AUTHORITATIVE SOURCE ORDER
Use this hierarchy for every task:

1. `docs/SPPAT_FINAL_WEBSITE_CONTENT_9PAGES_FINAL.md`
   - copy
   - facts
   - SEO
   - URLs
   - page content
   - editorial restrictions

2. `docs/SPPAT_FINAL_DESIGN_SPECIFICATION.md`
   - visual system
   - grid
   - composition
   - typography
   - spacing
   - responsive behavior
   - interactions

3. `docs/SPPAT_MEDIA_REVIEW_MAPPING_V2.md`
   - exact photography assignments
   - media status
   - crop/focal requirements
   - project media provenance

4. `SPPAT_PROJECT_STATE.md`
   - current accepted state
   - current phase
   - open defects
   - explicitly authorized changes

5. Existing code

Existing code never overrides an authoritative specification.
An agent report is never an authoritative source.

## BEFORE EVERY TASK
Before modifying anything:

1. Read this `AGENTS.md`.
2. Read `SPPAT_PROJECT_STATE.md`.
3. Read every authoritative document relevant to the task.
4. Record the current git commit hash.
5. Inspect `git status --short`.
6. State which source files the task authorizes you to change.
7. Do not change anything outside that scope.

## CHANGE CONTROL
Do not modify application code unless the current task explicitly authorizes implementation.

Prefer surgical edits.
Do not touch unrelated pages/components.

Never perform a whole-file rewrite of an existing page or shared component unless the task explicitly says:
`WHOLE-FILE REWRITE AUTHORIZED`.

If a requested fix appears to require redesign or large restructuring, STOP and report the conflict.

## TEMPORARY SCRIPT POLICY
Never leave temporary scripts in the repository.

Temporary scripts must be created in `/tmp/` and deleted after execution.

Do not create or retain repository-root files such as:
- `fix_*.py`
- `clean_*.py`
- `add_*.py`
- `update_*.py`
- `check_*.py`
- `remove_*.py`
- `test_*.py`
- `list_*.py`

unless the project owner explicitly approves that script as maintained tooling.

## MEDIA POLICY
Never choose substitute photography.

Use the exact media assignment from the approved media mapping.

If an assigned file is missing:
STOP and report the missing file.
Do not substitute something similar.

Home provenance rules are strict.
Do not use project/reference/knowledge imagery on Home unless the authoritative mapping explicitly says so.

## CONTENT POLICY
Never rewrite approved Dutch content to make layout easier.
Never delete approved content to solve a layout problem.
Fix the layout instead.

Never invent:
- prices
- durations
- reviews
- project facts
- project locations
- certifications
- warranties
- team facts
- business data

## RESPONSIVE POLICY
Responsive implementation is not desktop stacking.

Every public page must be verified at:
- 1440px
- 1024px
- 834px
- 390px

Avoid accidental whitespace caused by:
- viewport heights
- min-heights
- empty grid tracks
- desktop absolute positioning surviving mobile
- fixed section heights

Do not use fixed `vh` heights merely to imitate a screenshot when content sizing/aspect-ratio can solve the layout.

## VISUAL QA
Build, lint and typecheck do NOT prove visual correctness.

A claim such as:
- "QA passed"
- "responsive works"
- "looks correct"

is invalid without actual rendered evidence.

Final visual QA requires:
- all 9 public routes
- 4 required widths
- 36 full-page screenshots

## PROJECT HYGIENE
Keep repository root clean.

Allowed root project items are normally:
- `src/`
- `public/`
- `docs/`
- `audit/` while the current audit phase is active
- `node_modules/`
- `AGENTS.md`
- `SPPAT_PROJECT_STATE.md`
- `README.md`
- package/config files required by Next.js/tooling

Do not leave obsolete specifications, handoff archives, temporary scripts, or generated scratch files in root.

## STOP CONDITIONS
STOP instead of guessing when:
- authoritative specifications conflict
- media mapping is ambiguous
- a required asset is absent
- required content cannot be found
- the requested change contradicts an approved spec
- a task would require redesign
- task scope is unclear

## AFTER EVERY IMPLEMENTATION PASS
Provide:
1. git diff summary
2. exact files changed
3. build result
4. lint/typecheck result
5. required screenshots/evidence
6. unresolved issues

Do not call your own implementation "accepted".
Acceptance belongs to the project owner/controller after rendered review.

## SECURITY & ACCESS BOUNDARY

The SPPAT project is the only authorized work scope.

### Allowed filesystem scope
Normal implementation work may access only:
- the current SPPAT project root;
- files and folders inside that project root.

Only when an explicit task names them, the agent may also access these sibling project artifacts:
- `../SPPAT_FINAL_QA/`
- `../SPPAT_FINAL_QA.zip`
- `../SPPAT_AUDIT_V2/`
- `../SPPAT_AUDIT_V2_FULL.zip`
- `../SPPAT_PRE_CLEANUP_BACKUP/`

Do not browse, search, read, write, list, or index unrelated user locations, including:
- Desktop
- Documents
- Downloads
- Pictures
- Music
- Movies
- iCloud Drive
- browser profiles/history/cookies
- personal application data
- unrelated repositories
- home-directory-wide searches

Do not run broad commands such as `find /Users/...`, `find ~`, or recursive searches outside the authorized project paths.

### Personal browser/session boundary
Do not access or interact with:
- YouTube account/history/music
- Gmail
- Google account pages
- social media
- personal browser tabs/history
- any authenticated personal service

unless the project owner explicitly requests that exact external service in the current task.

The SPPAT website implementation does not require personal YouTube/music/browser-session access.

### Network boundary
Use network access only when explicitly necessary for:
- package installation already required by the project;
- documented technical verification requested by the owner.

Do not browse the web for replacement photography, content, inspiration, or project facts unless explicitly authorized.

### Permission behavior
Having technical permission does not imply project authorization.
If the OS or IDE exposes unrelated user data, ignore it.

If a task appears to require access outside these boundaries:
STOP and report the exact path/service needed and why.
Do not request blanket access.


<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
