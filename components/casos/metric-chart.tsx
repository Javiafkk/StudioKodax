import { cn } from "@/lib/utils";

type BarRow = { label: string; before: number; after: number };

type MetricChartProps = {
  title: string;
  rows: BarRow[];
  /** Menos padding y barras más bajas (p. ej. tarjeta compacta en inicio). */
  compact?: boolean;
};

export function MetricChart({ title, rows, compact = false }: MetricChartProps) {
  const barH = compact ? "h-2" : "h-3";
  return (
    <figure
      className={cn(
        "rounded-lg border border-border bg-muted/20",
        compact ? "p-4" : "p-6",
      )}
      aria-label={title}
    >
      <figcaption
        className={cn(
          "font-semibold text-foreground",
          compact ? "text-xs" : "text-sm",
        )}
      >
        {title}
      </figcaption>
      {!compact ? (
        <p className="mt-1 text-xs text-muted-foreground">
          Barras normalizadas (antes vs después). Datos ilustrativos para
          sustituir por tus informes reales.
        </p>
      ) : (
        <p className="mt-0.5 text-[11px] leading-snug text-muted-foreground">
          Indicativo antes / después (sustituye por datos reales).
        </p>
      )}
      <div className={cn(compact ? "mt-3 space-y-3" : "mt-6 space-y-5")}>
        {rows.map((row) => (
          <div key={row.label}>
            <p className="text-[11px] font-medium text-foreground sm:text-xs">
              {row.label}
            </p>
            <div
              className={cn(
                "flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4",
                compact ? "mt-1" : "mt-2",
              )}
            >
              <div className="flex flex-1 items-center gap-2">
                <span className="w-12 shrink-0 text-[11px] text-muted-foreground sm:w-14 sm:text-xs">
                  Antes
                </span>
                <div
                  className={cn(
                    barH,
                    "flex-1 rounded-full bg-muted",
                  )}
                  role="presentation"
                >
                  <div
                    className={cn(
                      barH,
                      "rounded-full bg-muted-foreground/40",
                    )}
                    style={{ width: `${row.before}%` }}
                  />
                </div>
              </div>
              <div className="flex flex-1 items-center gap-2">
                <span className="w-12 shrink-0 text-[11px] text-muted-foreground sm:w-14 sm:text-xs">
                  Después
                </span>
                <div
                  className={cn(barH, "flex-1 rounded-full bg-muted")}
                  role="presentation"
                >
                  <div
                    className={cn(barH, "rounded-full bg-primary")}
                    style={{ width: `${row.after}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </figure>
  );
}
