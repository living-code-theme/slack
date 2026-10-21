// This port owns its application mappings. Inputs come only from the pinned local palette.


const hexContrastWithWhite = (hex) => {
  const [r, g, b] = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255).map((v) => (v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4));
  return 1.05 / (0.2126 * r + 0.7152 * g + 0.0722 * b + 0.05);
};

const mentionBadge = (f) => [f.r("error"), f.r("accent")].find((c) => hexContrastWithWhite(c) >= 3) ?? f.c("surface2");

const slackColors = (f) => [f.r("bgDeep"), f.c("surface0"), f.r("accent"), f.r("bg"), f.c("surface0"), f.r("fg"), f.r("success"), mentionBadge(f)];

const slackString = (f) => slackColors(f).join(",");

function slackFlavors(flavors) {
  const seen = new Map(), unique = [], duplicates = [];
  for (const f of flavors) {
    const key = slackString(f);
    if (seen.has(key)) duplicates.push({ flavor: f, sameAs: seen.get(key) });
    else { seen.set(key, f); unique.push(f); }
  }
  return { unique, duplicates };
}

const slack = {
files: () => [],
all: (fs) => slackFlavors(fs).unique.map((f) => ({ path: `${f.slug}.txt`, content: slackString(f) + "\n" }))
};

export function generate(flavors) {
  return [...flavors.flatMap(f => slack.files(f)), ...(slack.all?.(flavors) ?? [])].filter(f => !["LICENSE", "README.md", "package.json", "extension.toml"].includes(f.path.split("/").at(-1)));
}
