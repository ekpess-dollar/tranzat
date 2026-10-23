import Image from "next/image";

// Figma group 559:7524 measures 619.5 × 377 and hangs 61px below the red card.
const BOX_W = 619.5;
const BOX_H = 377;

// [file, x, y, w, h] in px inside the box. The left coin starts 46.39px down, the right coin 183.31px in.
const layers: [string, number, number, number, number][] = [
  ["v1", 0.04, 46.39 + 141.67, 425.824, 188.894],
  ["v2", 0.04, 46.39 + 122.88, 425.824, 188.894],
  ["v3", 0.04, 46.39 + 149.37, 425.824, 135.925],
  ["v4", 0, 46.39, 425.833, 245.841],
  ["v5", 23.28, 46.39 + 13.41, 379.311, 218.995],
  ["v6", 38.18, 46.39 + 22.01, 349.507, 201.789],
  ["v7", 54.15, 46.39 + 31.23, 317.574, 183.35],
  ["v8", 66.62, 46.39 + 38.43, 292.621, 168.946],
  ["v9", 124.51, 46.39 + 71.86, 171.254, 98.875],
  ["v10", 38.69, 46.39, 387.142, 171.692],
  ["v11", 38.69 + 100.93, 46.39, 285.129, 115.101],
  ["v12", 183.31, 72.48, 422.282, 288.506],
  ["v13", 183.31 + 7.63, 55.32, 422.282, 288.506],
  ["v14", 183.31 + 18.38, 79.52, 400.77, 240.101],
  ["v15", 183.31 + 34.4, 0, 401.805, 283.572],
  ["v16", 183.31 + 34.4 + 21.97, 15.51, 357.905, 252.577],
  ["v17", 183.31 + 34.4 + 36.03, 25.44, 329.783, 232.73],
  ["v18", 183.31 + 34.4 + 51.09, 36.07, 299.651, 211.467],
  ["v19", 183.31 + 34.4 + 62.87, 44.38, 276.106, 194.851],
  ["v20", 183.31 + 34.4 + 109.79, 103.25, 178.459, 86.484],
  ["v21", 183.31 + 102.2, 0, 334.011, 239.675],
  ["v22", 183.31 + 102.2 + 112.53, 6.55, 221.477, 209.917],
];

const pct = (v: number, total: number) => `${(v / total) * 100}%`;

export default function Coins() {
  return (
    <div
      aria-hidden
      className="relative z-10 mx-auto -mb-[61px] mt-16 aspect-[619.5/377] w-full max-w-[619.5px] lg:absolute lg:bottom-[-61px] lg:left-1/2 lg:m-0 lg:-translate-x-1/2"
    >
      {layers.map(([file, x, y, w, h]) => (
        <Image
          key={file}
          src={`/assets/coins/${file}.svg`}
          alt=""
          width={Math.round(w)}
          height={Math.round(h)}
          className="absolute max-w-none"
          style={{
            left: pct(x, BOX_W),
            top: pct(y, BOX_H),
            width: pct(w, BOX_W),
            height: pct(h, BOX_H),
          }}
        />
      ))}
    </div>
  );
}
