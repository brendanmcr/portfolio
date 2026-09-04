import test from "node:test";
import assert from "node:assert/strict";
import { identity, projects, stack, about } from "../lib/content.mjs";

const STATUSES = new Set(["shipped", "in-progress", "planned"]);

test("identity has the required contact fields", () => {
  assert.ok(identity.name.length > 0);
  assert.match(identity.email, /^[^@\s]+@[^@\s]+\.[^@\s]+$/);
  assert.match(identity.github, /^https:\/\/github\.com\//);
});

test("every project has a slug, name, summary, and tags", () => {
  for (const p of projects) {
    assert.ok(p.slug.length > 0, `${p.name}: missing slug`);
    assert.ok(p.name.length > 0);
    assert.ok(p.summary.length >= 40, `${p.slug}: summary too thin`);
    assert.ok(Array.isArray(p.tags) && p.tags.length > 0);
  }
});

test("project slugs are unique", () => {
  const slugs = projects.map((p) => p.slug);
  assert.equal(new Set(slugs).size, slugs.length);
});

test("statuses are from the allowed set", () => {
  for (const p of projects) {
    assert.ok(STATUSES.has(p.status), `${p.slug}: bad status ${p.status}`);
  }
});

test("every project links to its real repo under the account", () => {
  for (const p of projects) {
    assert.match(
      p.link,
      /^https:\/\/github\.com\/brendanmcr\//,
      `${p.slug}: missing or foreign repo link`
    );
  }
});

test("unshipped projects state an ETA", () => {
  for (const p of projects) {
    if (p.status !== "shipped") {
      assert.ok(p.eta && p.eta.length > 0, `${p.slug}: missing eta`);
    }
  }
});

test("stack groups are non-empty and unique", () => {
  const groups = stack.map((s) => s.group);
  assert.equal(new Set(groups).size, groups.length);
  for (const s of stack) {
    assert.ok(s.items.length > 0, `${s.group}: empty`);
  }
});

test("about copy exists and is prose, not placeholder", () => {
  assert.ok(about.length >= 1);
  for (const para of about) {
    assert.ok(para.length > 30);
    assert.ok(!para.includes("["), "placeholder bracket left in copy");
  }
});
