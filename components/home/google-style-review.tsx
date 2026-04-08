import type { ReactNode } from "react";
import Image from "next/image";
import { Roboto } from "next/font/google";
import { MoreVertical } from "lucide-react";

import { cn } from "@/lib/utils";

const robotoAvatar = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

function avatarLetter(name: string): string {
  const t = name.trim();
  return t ? t[0]!.toUpperCase() : "?";
}

function LocalGuideStarIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        fill="#fff"
        d="M12 17.27L18.18 21 16.54 13.97 22 9.24 14.81 8.63 12 2 9.19 8.63 2 9.24 7.46 13.97 5.82 21z"
      />
    </svg>
  );
}

function WhatsAppMark({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        fill="currentColor"
        d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
      />
    </svg>
  );
}

const AVATAR_PX = 40;
const BADGE_PX = Math.round(AVATAR_PX / 3);
const BODY_INDENT = "ml-[calc(2.5rem+0.75rem)]";

export type GoogleStyleReviewProps = {
  children: ReactNode;
  authorName: string;
  authorSubtitle?: string;
  timeAgo?: string;
  rating?: number;
  localGuide?: boolean;
  /** `whatsapp`: misma tarjeta, texto “Reseña de WhatsApp”, sin fila de valoración y fondo verdoso suave. */
  source?: "google" | "whatsapp";
};

export function GoogleStyleReview({
  children,
  authorName,
  authorSubtitle,
  timeAgo = "Hace 4 semanas",
  rating = 5,
  localGuide = true,
  source = "google",
}: GoogleStyleReviewProps) {
  const letter = avatarLetter(authorName);
  const clampedRating = Math.min(5, Math.max(0, Math.round(rating)));
  const isWa = source === "whatsapp";
  const showBadge = !isWa && localGuide;

  return (
    <figure
      className={cn(
        "rounded-lg text-[#202124] shadow-sm",
        isWa
          ? "border border-[#bfe5cf] bg-[#f0faf3] [background-image:repeating-linear-gradient(-11deg,rgba(37,211,102,0.04),rgba(37,211,102,0.04)_1px,transparent_1px,transparent_6px)]"
          : "border border-[#dadce0] bg-white",
      )}
    >
      <div className="px-4 pb-3 pt-3.5 sm:px-5 sm:pt-4">
        <div className="flex gap-3">
          <div
            className="relative shrink-0 overflow-visible"
            style={{ width: AVATAR_PX, height: AVATAR_PX }}
            aria-hidden
          >
            <div
              className={`${robotoAvatar.className} absolute inset-0 flex items-center justify-center rounded-full bg-[#967466] text-[17px] font-normal leading-none text-white antialiased`}
            >
              {letter}
            </div>
            {showBadge ? (
              <div
                className="absolute z-10 flex items-center justify-center rounded-full border-[1.5px] border-white bg-[#ff9100]"
                style={{
                  width: BADGE_PX,
                  height: BADGE_PX,
                  right: -1,
                  bottom: -1,
                  boxShadow: "0 0 0 0.5px rgba(255,255,255,0.9)",
                }}
              >
                <LocalGuideStarIcon className="h-[10px] w-[10px]" />
              </div>
            ) : null}
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex items-start justify-between gap-2">
              <div className="min-w-0">
                <cite className="not-italic block text-base font-bold leading-tight text-[#202124]">
                  {authorName}
                </cite>
                {authorSubtitle ? (
                  <p className="mt-0.5 text-xs leading-snug text-[#70757a]">
                    {authorSubtitle}
                  </p>
                ) : null}
                {isWa ? (
                  <p className="mt-1 flex flex-wrap items-center gap-1 text-xs leading-snug text-[#70757a]">
                    <span>Reseña de</span>
                    <WhatsAppMark className="inline-block h-3.5 w-3.5 shrink-0 text-[#25D366]" />
                    <span className="font-medium text-[#128C7E]">WhatsApp</span>
                  </p>
                ) : (
                  <p className="mt-1 flex flex-wrap items-center gap-1 text-xs leading-snug text-[#70757a]">
                    <span>Reseña de</span>
                    <Image
                      src="/brands/google-logo.svg"
                      alt=""
                      width={14}
                      height={14}
                      className="inline-block h-3.5 w-3.5 shrink-0"
                    />
                    <span className="font-medium text-[#4285F4]">Google</span>
                  </p>
                )}
              </div>
              <button
                type="button"
                className="-mr-1 -mt-1 shrink-0 rounded-full p-1.5 text-[#70757a] transition-colors hover:bg-black/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                aria-label="Más opciones"
              >
                <MoreVertical className="h-5 w-5" strokeWidth={2} />
              </button>
            </div>
          </div>
        </div>

        {!isWa ? (
          <p
            className={`${BODY_INDENT} mt-2 text-left text-xs leading-snug text-[#202124]`}
          >
            <span className="font-semibold text-[#202124]">
              {clampedRating}/5
            </span>
            <span className="text-[#70757a]"> · </span>
            <span className="font-normal text-[#70757a]">{timeAgo}</span>
          </p>
        ) : null}

        <blockquote className={`${BODY_INDENT} mt-2 border-0 p-0 text-left`}>
          <p className="text-sm leading-[1.5] text-[#202124]">{children}</p>
        </blockquote>
      </div>
    </figure>
  );
}
