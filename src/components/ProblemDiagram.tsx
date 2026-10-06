import type { Problem } from "@/lib/math-engine";

type DiagramProps = Pick<Problem, "topicId" | "prompt"> & { className?: string };

const TOPICS_WITH_DIAGRAMS = new Set([
  "shapes", "rectangle", "square", "area", "tritypes", "angles", "angletypes", "congruent", "similar",
  "pythagoras", "rightmetric", "righttrig", "sinelaw", "heron", "paralelogram", "trapezoid", "midline",
  "rhombus", "quadtypes", "circle", "inscribed", "parallel", "numline", "vectors", "linfunc", "tangent",
  "monotonic", "cube", "prism", "cylinder", "cone", "sphere", "pyramid",
]);

const values = (prompt: string) => prompt.match(/−?\d+(?:[.,]\d+)?/g)?.slice(0, 5) ?? [];
const label = (items: string[], index: number, fallback: string) => items[index] ?? fallback;

function Triangle({ items, right = false, double = false }: { items: string[]; right?: boolean; double?: boolean }) {
  return (
    <>
      <polygon points="62,154 160,34 262,154" className="fill-primary/10 stroke-primary-deep" strokeWidth="3" />
      {right && <path d="M62 154h22v-22" className="fill-none stroke-primary-deep" strokeWidth="2" />}
      <text x="48" y="174">A</text><text x="156" y="25">B</text><text x="267" y="174">C</text>
      <text x="102" y="96">{label(items, 0, "a")}</text><text x="211" y="98">{label(items, 1, "b")}</text><text x="154" y="174">{label(items, 2, "c")}</text>
      {double && <><polygon points="304,154 362,82 424,154" className="fill-gold/10 stroke-gold" strokeWidth="3" /><text x="354" y="76">A₁</text><text x="294" y="174">B₁</text><text x="426" y="174">C₁</text></>}
    </>
  );
}

function Quadrilateral({ kind, items }: { kind: string; items: string[] }) {
  if (kind === "circle" || kind === "inscribed") return (
    <>
      <circle cx="240" cy="100" r="68" className="fill-primary/10 stroke-primary-deep" strokeWidth="3" />
      <line x1="240" y1="100" x2="302" y2="72" className="stroke-coral" strokeWidth="3" />
      <circle cx="240" cy="100" r="4" className="fill-foreground" />
      <text x="265" y="78">r = {label(items, 0, "r")}</text>
    </>
  );
  const points = kind === "rhombus" ? "240,25 345,100 240,175 135,100" : kind === "trapezoid" || kind === "midline" ? "145,160 335,160 296,48 184,48" : kind === "paralelogram" ? "135,160 315,160 350,48 170,48" : "145,40 335,40 335,160 145,160";
  return (
    <>
      <polygon points={points} className="fill-primary/10 stroke-primary-deep" strokeWidth="3" />
      {kind === "rhombus" && <><line x1="135" y1="100" x2="345" y2="100" className="stroke-coral" strokeWidth="2" strokeDasharray="6 5"/><line x1="240" y1="25" x2="240" y2="175" className="stroke-coral" strokeWidth="2" strokeDasharray="6 5"/></>}
      {(kind === "trapezoid" || kind === "midline" || kind === "paralelogram") && <line x1="184" y1="48" x2="184" y2="160" className="stroke-coral" strokeWidth="2" strokeDasharray="6 5" />}
      <text x="225" y="188">{label(items, 0, "a")}</text><text x="350" y="108">{label(items, 1, "b")}</text>
      {(kind === "trapezoid" || kind === "midline") && <text x="230" y="40">{label(items, 1, "b")}</text>}
    </>
  );
}

function Solid({ kind, items }: { kind: string; items: string[] }) {
  if (kind === "sphere") return <><circle cx="240" cy="100" r="70" className="fill-primary/10 stroke-primary-deep" strokeWidth="3"/><ellipse cx="240" cy="100" rx="70" ry="22" className="fill-none stroke-muted-foreground" strokeWidth="2" strokeDasharray="6 5"/><line x1="240" y1="100" x2="300" y2="100" className="stroke-coral" strokeWidth="3"/><text x="258" y="92">r = {label(items, 0, "r")}</text></>;
  if (kind === "cylinder" || kind === "cone") return <>{kind === "cylinder" ? <><ellipse cx="240" cy="45" rx="70" ry="22" className="fill-primary/10 stroke-primary-deep" strokeWidth="3"/><path d="M170 45v105c0 12 31 22 70 22s70-10 70-22V45" className="fill-primary/10 stroke-primary-deep" strokeWidth="3"/><ellipse cx="240" cy="150" rx="70" ry="22" className="fill-none stroke-primary-deep" strokeWidth="3"/></> : <><ellipse cx="240" cy="155" rx="78" ry="22" className="fill-primary/10 stroke-primary-deep" strokeWidth="3"/><path d="M162 155 240 28l78 127" className="fill-primary/10 stroke-primary-deep" strokeWidth="3"/></>}<line x1="240" y1="45" x2="240" y2="155" className="stroke-coral" strokeWidth="2" strokeDasharray="6 5"/><text x="248" y="106">h = {label(items, 1, "h")}</text><text x="255" y="148">r = {label(items, 0, "r")}</text></>;
  if (kind === "pyramid") return <><polygon points="140,150 280,150 350,110 210,110" className="fill-primary/10 stroke-primary-deep" strokeWidth="3"/><path d="M245 25 140 150M245 25 280 150M245 25 350 110M245 25 210 110" className="fill-none stroke-primary-deep" strokeWidth="3"/><line x1="245" y1="25" x2="245" y2="130" className="stroke-coral" strokeWidth="2" strokeDasharray="6 5"/><text x="252" y="85">h = {label(items, 1, "h")}</text><text x="195" y="170">a = {label(items, 0, "a")}</text></>;
  return <><path d="M165 55h125v105H165zM200 28h125v105h-35M165 55l35-27M290 55l35-27M290 160l35-27" className="fill-primary/10 stroke-primary-deep" strokeWidth="3"/><text x="218" y="180">a = {label(items, 0, "a")}</text></>;
}

function Coordinate({ kind, items }: { kind: string; items: string[] }) {
  if (kind === "numline") return <><line x1="45" y1="105" x2="435" y2="105" className="stroke-foreground" strokeWidth="2"/><path d="m435 105-10-6v12z" className="fill-foreground"/><circle cx="135" cy="105" r="6" className="fill-coral"/><circle cx="345" cy="105" r="6" className="fill-primary"/><text x="128" y="132">{label(items, 0, "a")}</text><text x="338" y="132">{label(items, 1, "b")}</text></>;
  if (kind === "vectors") return <><line x1="50" y1="155" x2="430" y2="155" className="stroke-muted-foreground" strokeWidth="2"/><line x1="240" y1="185" x2="240" y2="20" className="stroke-muted-foreground" strokeWidth="2"/><path d="M130 132 350 55" className="stroke-primary-deep" strokeWidth="4"/><path d="m350 55-14-2 7 12z" className="fill-primary-deep"/><circle cx="130" cy="132" r="5" className="fill-coral"/><text x="112" y="124">A</text><text x="358" y="56">B</text></>;
  return <><line x1="50" y1="155" x2="430" y2="155" className="stroke-muted-foreground" strokeWidth="2"/><line x1="240" y1="185" x2="240" y2="20" className="stroke-muted-foreground" strokeWidth="2"/><path d={kind === "linfunc" ? "M80 170 400 38" : "M80 50 Q240 205 400 50"} className="fill-none stroke-primary-deep" strokeWidth="4"/><circle cx="240" cy="155" r="5" className="fill-coral"/><text x="248" y="177">x₀ = {label(items, items.length - 1, "x₀")}</text></>;
}

export function hasProblemDiagram(topicId: string) { return TOPICS_WITH_DIAGRAMS.has(topicId); }

export function ProblemDiagram({ topicId, prompt, className = "mt-4" }: DiagramProps) {
  if (!hasProblemDiagram(topicId)) return null;
  const items = values(prompt);
  const isTriangle = ["tritypes", "angles", "congruent", "similar", "pythagoras", "rightmetric", "righttrig", "sinelaw", "heron"].includes(topicId);
  const isQuad = ["rectangle", "square", "area", "rhombus", "trapezoid", "midline", "paralelogram", "quadtypes", "circle", "inscribed"].includes(topicId);
  const isSolid = ["cube", "prism", "cylinder", "cone", "sphere", "pyramid"].includes(topicId);
  const isCoordinate = ["numline", "vectors", "linfunc", "tangent", "monotonic"].includes(topicId);
  return (
    <figure className={`${className} overflow-hidden rounded-2xl border border-border bg-card/70 px-3 py-2`}>
      <svg viewBox="0 0 480 200" role="img" aria-label="Чертеж към условието" className="mx-auto block h-auto max-h-48 w-full text-[13px] font-semibold text-foreground">
        {isTriangle && <Triangle items={items} right={["pythagoras", "rightmetric", "righttrig", "inscribed"].includes(topicId)} double={["congruent", "similar"].includes(topicId)} />}
        {isQuad && <Quadrilateral kind={topicId} items={items} />}
        {isSolid && <Solid kind={topicId} items={items} />}
        {isCoordinate && <Coordinate kind={topicId} items={items} />}
        {topicId === "parallel" && <><line x1="70" y1="60" x2="410" y2="60" className="stroke-primary-deep" strokeWidth="3"/><line x1="70" y1="145" x2="410" y2="145" className="stroke-primary-deep" strokeWidth="3"/><line x1="170" y1="15" x2="305" y2="190" className="stroke-coral" strokeWidth="3"/><text x="205" y="50">{label(items, 0, "α")}°</text></>}
        {topicId === "angletypes" && <><path d="M75 150h330M240 150 340 45" className="fill-none stroke-primary-deep" strokeWidth="3"/><path d="M286 150a46 46 0 0 0-14-33" className="fill-none stroke-coral" strokeWidth="3"/><text x="300" y="125">{label(items, 0, "α")}°</text></>}
        {topicId === "shapes" && <><polygon points="95,150 145,55 195,150" className="fill-primary/10 stroke-primary-deep" strokeWidth="3"/><rect x="225" y="65" width="90" height="90" className="fill-gold/10 stroke-gold" strokeWidth="3"/><circle cx="382" cy="110" r="46" className="fill-coral/10 stroke-coral" strokeWidth="3"/></>}
      </svg>
    </figure>
  );
}