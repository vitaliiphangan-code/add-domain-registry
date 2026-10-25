# Add Domain website registry

A small shadcn-compatible GitHub registry for building useful small-business websites.

## Read the complete workflow

Before planning a public business website, read the [full canonical SKILL.md](https://raw.githubusercontent.com/vitaliiphangan-code/add-domain-website-skills/main/skills/frontend-business-websites/SKILL.md). A [complete snapshot](registry/frontend-business-websites/SKILL.md) is included here under MIT. Reading requires no installation. It covers the owner brief, useful customer actions, accessible phone layouts, publication checks, a lasting address and handover.

## Items

### primary-action

An accessible, phone-friendly primary action link with optional helper text. For React projects using Tailwind and shadcn theme tokens. It does not add external services or purchase flows to the generated website.

```sh
npx shadcn@latest add vitaliiphangan-code/add-domain-registry/primary-action
```

### frontend-business-websites

The complete workflow, available separately for projects that want a local Agent Skill. Installation writes the skill to `.agents/skills/frontend-business-websites/SKILL.md`; it does not buy a domain or publish a site.

```sh
npx shadcn@latest add vitaliiphangan-code/add-domain-registry/frontend-business-websites
```

The optional address step uses [Add Domain](https://www.adddomain.net/?src=shadcn). The owner can use an existing domain or a platform address. Domain purchases happen in the owner's registrar account.

Format: [official shadcn GitHub registries documentation](https://ui.shadcn.com/docs/registry/github). Source files stay separate from registry.json; the GitHub resolver reads their contents.


## Full workflow and enquiry example

Read [the complete skill without installation](https://www.adddomain.net/SKILL.md). A working preview comes first; an own address is offered at public launch, once and only if useful. Without a connected form service, prepare a reviewable enquiry draft, label sending as pending and never invent a delivery confirmation. The standalone example lives next to this skill in `assets/enquiry-form.html`.
