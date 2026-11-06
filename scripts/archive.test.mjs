import { test } from 'node:test';
import assert from 'node:assert/strict';
import { validDate, validateProject } from './data-schema.mjs';
import { matchesProject } from './filter.mjs';
test('date precision and calendar validity', () => {
 for (const date of ['2026','2026-05','2024-02-29']) assert.ok(validDate(date));
 for (const date of ['2026-13','2026-02-29','2026-04-31','2026-00','2026-01-00','soon']) assert.equal(validDate(date),false);
});
const base = { start:'2023',end:'2025-05',lastVerified:'2026-11-06',status:'Cancelled',sources:[{supports:'start'},{supports:'ending'}] };
test('reject contradictory lifecycle records and missing evidence', () => {
 assert.deepEqual(validateProject(base),[]);
 assert.ok(validateProject({...base,end:'2027'}).length);
 assert.ok(validateProject({...base,start:'2026'}).length);
 assert.ok(validateProject({...base,sources:[{supports:'context'}]}).length);
 assert.ok(validateProject({...base,status:'Announced wind-down',end:'2027'}).length);
 assert.deepEqual(validateProject({...base,status:'Announced wind-down',end:'2027',announcementDate:'2026-11-06'}),[]);
});
test('search composes with category and status filters', () => {
 const p = {search:'cybertruck stainless steel pickup',category:'Vehicles',status:'Announced wind-down'};
 assert.ok(matchesProject(p,'  CYBERTRUCK  ','Vehicles','Announced wind-down'));
 assert.ok(matchesProject(p,'steel','',''));
 assert.equal(matchesProject(p,'','Energy',''),false);
 assert.equal(matchesProject(p,'','','Discontinued'),false);
 assert.equal(matchesProject(p,'roadster','',''),false);
});
