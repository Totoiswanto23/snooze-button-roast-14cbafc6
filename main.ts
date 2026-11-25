// snooze-button-roast-14cbafc6: Snooze Button Roast.
// This program writes exactly one line to /output/entry.txt, where the
// gate reads it. The line roasts an alarm clock that rings at 6 AM on
// a Saturday morning.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The roast: the alarm clock rings at 6 AM on a Saturday as if it had
// somewhere important to be — a meeting, a deadline, a whole busy day.
// The punchline flips it: the only appointment on the schedule is the
// bed itself, and the clock was never invited. Fresh angle (the clock
// acting like a busy professional), concrete image (the bed as the
// day's only appointment), payoff in the last few words. Tight at
// 154 characters: every word earns its place, sayable in one breath.
const LINE = "My alarm clock rang at 6 AM on a Saturday like it had a meeting to get to — mate, the only thing on my schedule today is this bed, and you're not invited.";

if (LINE.length < 1 || LINE.length > 200 || LINE.includes('\n')) {
  console.error('entry must be a single line of 1-200 characters');
  process.exit(1);
}

// No trailing newline: the file is exactly the one line.
mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), LINE);
console.log(`wrote "${LINE}" (${LINE.length} chars) to ${join(OUTPUT_DIR, 'entry.txt')}`);
