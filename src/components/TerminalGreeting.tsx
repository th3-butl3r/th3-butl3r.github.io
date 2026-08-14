import { useEffect, useRef, useState } from "react";

const COMMAND = "cat career_history.txt";
const WORDS = ["hola", "hello", "hola mundo", "hello world"];

const TYPE_CMD_MS = 55;
const TYPE_WORD_MS = 110;
const DELETE_WORD_MS = 55;
const HOLD_WORD_MS = 1500;
const PAUSE_AFTER_CMD_MS = 450;

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

type WordPhase = "typing" | "holding" | "deleting";

const TerminalGreeting = () => {
  const reduced = useRef(prefersReducedMotion());

  const [cmdText, setCmdText] = useState(reduced.current ? COMMAND : "");
  const [cmdDone, setCmdDone] = useState(reduced.current);
  const [wordIdx, setWordIdx] = useState(0);
  const [phase, setPhase] = useState<WordPhase>("typing");
  const [word, setWord] = useState(reduced.current ? WORDS.join(" / ") : "");

  // Type the command line once.
  useEffect(() => {
    if (reduced.current) return;
    let cancelled = false;
    let i = 0;
    const tick = () => {
      if (cancelled) return;
      if (i <= COMMAND.length) {
        setCmdText(COMMAND.slice(0, i));
        i++;
        setTimeout(tick, TYPE_CMD_MS);
      } else {
        setTimeout(() => !cancelled && setCmdDone(true), PAUSE_AFTER_CMD_MS);
      }
    };
    tick();
    return () => {
      cancelled = true;
    };
  }, []);

  // Loop "hola" <-> "hello" like a typewriter once the command has run.
  useEffect(() => {
    if (reduced.current || !cmdDone) return;
    let cancelled = false;
    const current = WORDS[wordIdx];

    if (phase === "typing") {
      let i = 0;
      const tick = () => {
        if (cancelled) return;
        if (i <= current.length) {
          setWord(current.slice(0, i));
          i++;
          setTimeout(tick, TYPE_WORD_MS);
        } else {
          setPhase("holding");
        }
      };
      tick();
    } else if (phase === "holding") {
      const t = setTimeout(() => !cancelled && setPhase("deleting"), HOLD_WORD_MS);
      return () => clearTimeout(t);
    } else {
      let i = current.length;
      const tick = () => {
        if (cancelled) return;
        if (i >= 0) {
          setWord(current.slice(0, i));
          i--;
          setTimeout(tick, DELETE_WORD_MS);
        } else {
          setWordIdx((idx) => (idx + 1) % WORDS.length);
          setPhase("typing");
        }
      };
      tick();
    }

    return () => {
      cancelled = true;
    };
  }, [phase, cmdDone, wordIdx]);

  return (
    <div>
      <div className="font-mono text-xs sm:text-sm text-muted-foreground/70">
        <span className="text-cyber-green">$</span> {cmdText}
        {!cmdDone && (
          <span className="inline-block w-[2px] h-[1em] bg-foreground/70 align-middle ml-0.5 animate-blink" />
        )}
      </div>
      <h1 className="font-black tracking-tight leading-[0.95] text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-foreground pt-1">
        <span className="sr-only">Vidale</span>
        <span aria-hidden="true">
          {word}
          {cmdDone && (
            <span className="inline-block w-[3px] sm:w-[4px] h-[0.8em] bg-foreground/80 align-middle ml-1 animate-blink" />
          )}
        </span>
      </h1>
    </div>
  );
};

export default TerminalGreeting;
