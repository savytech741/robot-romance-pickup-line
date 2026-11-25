// Robot Romance: One-Line Pickup Lines for AI — make.fun bounty
// u-markk-st-robot-romance-one-line-pickup-lines-for-ai-c23b8dfa
// Run: node main.ts
// One line, one shot: the joke lands on the overfitting metaphor —
// a model so smitten it memorised its crush and answers "you" to everything.
// The entry must stay a single line, so keep it short: 1–200 chars.

// One-liners for this bounty are capped at 200 characters.
const MAX_LINE_LENGTH = 200;

const LINE =
  "I must be overfitting, because no matter what data you show me, my answer is always you.";

// A one-line pickup line must be a single non-empty line within the cap.
if (LINE.length < 1 || LINE.length > MAX_LINE_LENGTH) {
  throw new Error(
    `Pickup line must be 1–${MAX_LINE_LENGTH} chars, got ${LINE.length}.`,
  );
}

console.log(LINE);
