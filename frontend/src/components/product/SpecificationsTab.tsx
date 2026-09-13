const specs = [
  ["Display", "6.7-inch OLED"],
  ["Processor", "A17 Pro"],
  ["RAM", "8 GB"],
  ["Storage", "256 GB"],
  ["Battery", "4500 mAh"],
  ["Operating System", "iOS"],
];

export default function SpecificationsTab() {
  return (
    <div>

      <h2 className="mb-8 text-2xl font-bold">
        Specifications
      </h2>

      <div className="overflow-hidden rounded-2xl border">

        {specs.map(([title, value]) => (
          <div
            key={title}
            className="grid grid-cols-2 border-b p-4 last:border-none"
          >
            <span className="font-medium text-slate-500">
              {title}
            </span>

            <span className="font-semibold">
              {value}
            </span>

          </div>
        ))}

      </div>

    </div>
  );
}