<!-- living-code-readme:1 -->
# 💬 Living Code for Slack

**Calm slate. Living color.** Living Code for Slack. Repository-owned theme files, installation instructions and four color flavors.

[Installation](#installation) · [Flavors](#flavors) · [Configuration](#configuration) · [All ports](https://github.com/living-code-theme)

## Installation

Open your profile picture menu → *Preferences → Appearance → Custom theme*, click *Import theme* next to *Theme Colors*, choose *Paste your legacy theme colors*, paste one of these strings and click *Apply*:

- **Night**: `#020405,#12171a,#00a692,#05080b,#12171a,#e2e9ee,#8acb83,#e96560`
- **Frost**: `#050a0f,#171e24,#43a997,#0a1016,#171e24,#e2e9ee,#a2cb9d,#333c43`
- **Paper**: `#e0e5e9,#e3e9ed,#187d6e,#f4f7f9,#e3e9ed,#12171a,#3b7a35,#a74541`
- **Signal**: `#020405,#12171a,#00a692,#05080b,#12171a,#e2e9ee,#c8cfd4,#00a692`

The eight colors are: column background, menu background hover, active item, active item text, hover item, text color, active presence, mention badge. Slack colors only its own interface, not code. These strings follow Slack's [help article](https://slack.com/help/articles/205166337-Change-your-Slack-theme) and have not been tested in a Slack client.

## Flavors

Expand a flavor for its activation instructions.

<details data-lc-flavor="night">
<summary><strong>Night</strong> · Dark · full palette</summary>

Paste this in *Preferences → Appearance → Custom theme → Import theme → Paste your legacy theme colors*:

```text
#020405,#12171a,#00a692,#05080b,#12171a,#e2e9ee,#8acb83,#e96560
```

</details>

<details data-lc-flavor="frost">
<summary><strong>Frost</strong> · Dark · softer chroma</summary>

Paste this in *Preferences → Appearance → Custom theme → Import theme → Paste your legacy theme colors*:

```text
#050a0f,#171e24,#43a997,#0a1016,#171e24,#e2e9ee,#a2cb9d,#333c43
```

</details>

<details data-lc-flavor="paper">
<summary><strong>Paper</strong> · Light · near-white slate</summary>

Paste this in *Preferences → Appearance → Custom theme → Import theme → Paste your legacy theme colors*:

```text
#e0e5e9,#e3e9ed,#187d6e,#f4f7f9,#e3e9ed,#12171a,#3b7a35,#a74541
```

</details>

<details data-lc-flavor="signal">
<summary><strong>Signal</strong> · Dark · teal accent</summary>

Paste this in *Preferences → Appearance → Custom theme → Import theme → Paste your legacy theme colors*:

```text
#020405,#12171a,#00a692,#05080b,#12171a,#e2e9ee,#c8cfd4,#00a692
```

</details>

## Configuration

See [Slack's documentation](https://slack.com) for application settings and reload behavior. The activation instructions above identify each supported flavor; keep your other application configuration.

## Compatibility

Uses Slack's legacy eight-color custom-theme import. It colors Slack's interface, not code. The strings have not been tested in a Slack client.

## Contributing

Found a problem? [Open an issue](https://github.com/living-code-theme/slack/issues/new/choose) with the app version, the flavor and a screenshot. Want Living Code somewhere else? [Request a port](https://github.com/living-code-theme/core/issues/new?template=port-request.yml).

Pull requests are welcome. Keep this README, `port.json` and `images/` in sync, and use real screenshots of the app, never mockups.

🦎 **One chameleon, many habitats.** Part of [Living Code](https://github.com/living-code-theme).

## License

[MIT](LICENSE) © Elliot Luque
