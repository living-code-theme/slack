// Native format regressions, exercised through this port's generator.
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {readFile} from 'node:fs/promises';
import test from 'node:test';
import {resolveAll,ANSI_ORDER} from '../scripts/palette.mjs';
import {generate} from '../src/generate.mjs';
import {slackFlavors} from './format-contract.mjs';
import {slackString} from './format-contract.mjs';
import {SLACK_SLOTS} from './format-contract.mjs';
import {hexContrastWithWhite} from './format-contract.mjs';
const slack={files:()=>[],all:generate,install:readFileSync(new URL('../README.md',import.meta.url),'utf8')};

const flavors = resolveAll();

const readme = readFileSync(new URL("../README.md", import.meta.url), "utf8");

test("Slack install text names the Appearance menu path", () => {
  assert.match(slack.install, /Preferences → Appearance → Custom theme/);
  assert.match(slack.install, /Import theme/);
  assert.match(slack.install, /Paste your legacy theme colors/);
  assert.doesNotMatch(slack.install, /Preferences → Themes/);
});

test("Slack strings are eight hex colors and no flavor is shipped twice", () => {
  const { unique, duplicates } = slackFlavors(flavors);
  assert.equal(unique.length + duplicates.length, flavors.length);
  const strings = unique.map(slackString);
  assert.equal(new Set(strings).size, strings.length);
  for (const s of strings) {
    const parts = s.split(",");
    assert.equal(parts.length, SLACK_SLOTS.length);
    for (const p of parts) assert.match(p, /^#[0-9a-f]{6}$/i);
  }
  for (const s of strings) assert.ok(hexContrastWithWhite(s.split(",")[7]) >= 3, `mention badge in ${s}`);
  const files = slack.all(flavors);
  assert.equal(files.length, unique.length);
  for (const f of unique) assert.ok(readme.includes(slackString(f)), f.id);
  assert.doesNotMatch(slack.install, /—/);
  assert.ok(readme.includes(slack.install));
});
