"use client";

import { useEffect, useRef, useState } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { ChevronLeft, ChevronRight, Maximize2, Minus, Plus, RotateCcw, X } from "lucide-react";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type LightboxImage = {
  src: string;
  alt: string;
  caption?: string;
};

type ImageLightboxProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  images: ReadonlyArray<LightboxImage>;
  index: number;
  triggerClassName?: string;
};

export function ImageLightbox({ images, index, triggerClassName, className, ...imageProps }: ImageLightboxProps) {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(index);
  const [scale, setScale] = useState(1);
  const swipeStart = useRef<{ x: number; y: number } | null>(null);
  const active = images[activeIndex] ?? images[index];
  const hasGallery = images.length > 1;

  useEffect(() => {
    if (!open || !hasGallery) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (scale > 1.01) return;
      if (event.key === "ArrowLeft") setActiveIndex((current) => (current - 1 + images.length) % images.length);
      if (event.key === "ArrowRight") setActiveIndex((current) => (current + 1) % images.length);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [hasGallery, images.length, open, scale]);

  if (!active) return null;

  const move = (direction: -1 | 1) => {
    if (scale > 1.01) return;
    setActiveIndex((current) => (current + direction + images.length) % images.length);
  };

  return (
    <DialogPrimitive.Root
      open={open}
      onOpenChange={(nextOpen) => {
        setOpen(nextOpen);
        if (nextOpen) setActiveIndex(index);
        else setScale(1);
      }}
    >
      <DialogPrimitive.Trigger asChild>
        <Button
          type="button"
          variant="ghost"
          className={cn(
            "group/image relative block h-auto w-full overflow-hidden rounded-none p-0 text-left focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2",
            triggerClassName,
          )}
          aria-label={`Open full-screen image: ${imageProps.alt ?? active.alt}`}
        >
          <img {...imageProps} className={className} />
          <span className="pointer-events-none absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full border border-navy-foreground/30 bg-navy/85 text-navy-foreground opacity-90 shadow-card transition-opacity sm:opacity-0 sm:group-hover/image:opacity-100 sm:group-focus-visible/image:opacity-100">
            <Maximize2 className="h-4 w-4" aria-hidden="true" />
          </span>
        </Button>
      </DialogPrimitive.Trigger>

      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-[80] bg-navy/95 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <DialogPrimitive.Content
          className="fixed inset-0 z-[81] grid h-[100dvh] w-screen max-w-full grid-rows-[auto_minmax(0,1fr)_auto] overflow-hidden bg-transparent text-navy-foreground outline-none"
          onOpenAutoFocus={(event) => event.preventDefault()}
        >
          <DialogPrimitive.Title className="sr-only">Image viewer: {active.alt}</DialogPrimitive.Title>
          <DialogPrimitive.Description className="sr-only">
            Zoom and pan this image. Use the arrow controls to browse related images.
          </DialogPrimitive.Description>

          <header className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 pb-2 pt-[max(1rem,env(safe-area-inset-top))] sm:px-6">
            <div className="min-w-0">
              <p className="truncate text-sm font-bold">{active.alt}</p>
              {hasGallery && <p className="mt-0.5 text-xs text-navy-foreground/70">{activeIndex + 1} of {images.length}</p>}
            </div>
            <DialogPrimitive.Close asChild>
              <Button
                type="button"
                size="icon"
                variant="ghost"
                className="h-12 w-12 rounded-full border border-gold/60 bg-navy text-navy-foreground hover:bg-gold hover:text-gold-foreground"
                aria-label="Close image viewer"
                title="Close"
              >
                <X className="h-6 w-6" />
              </Button>
            </DialogPrimitive.Close>
          </header>

          <div
            className="relative min-h-0 w-full touch-none overflow-hidden"
            onTouchStart={(event) => {
              if (event.touches.length !== 1 || scale > 1.01) {
                swipeStart.current = null;
                return;
              }
              swipeStart.current = { x: event.touches[0]?.clientX ?? 0, y: event.touches[0]?.clientY ?? 0 };
            }}
            onTouchEnd={(event) => {
              const start = swipeStart.current;
              swipeStart.current = null;
              const touch = event.changedTouches[0];
              if (!start || !touch || scale > 1.01) return;
              const dx = touch.clientX - start.x;
              const dy = touch.clientY - start.y;
              if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.25) move(dx < 0 ? 1 : -1);
            }}
          >
            <TransformWrapper
              key={active.src}
              initialScale={1}
              minScale={1}
              maxScale={5}
              centerOnInit
              wheel={{ step: 0.12 }}
              doubleClick={{ mode: "toggle", step: 1.5 }}
              panning={{ disabled: scale <= 1.01 }}
              onTransform={(_, state) => setScale(state.scale)}
            >
              {({ zoomIn, zoomOut, resetTransform }) => (
                <>
                  <TransformComponent
                    wrapperClass="!h-full !w-full"
                    contentClass="!flex !h-full !w-full !items-center !justify-center"
                  >
                    <img
                      src={active.src}
                      alt={active.alt}
                      draggable={false}
                      className="max-h-[calc(100dvh-10rem)] max-w-[calc(100vw-1rem)] select-none object-contain"
                    />
                  </TransformComponent>

                  {hasGallery && scale <= 1.01 && (
                    <>
                      <Button
                        type="button"
                        size="icon"
                        variant="ghost"
                        onClick={() => move(-1)}
                        className="absolute left-2 top-1/2 h-11 w-11 -translate-y-1/2 rounded-full border border-navy-foreground/25 bg-navy/85 text-navy-foreground hover:bg-gold hover:text-gold-foreground sm:left-5"
                        aria-label="Previous image"
                        title="Previous image"
                      >
                        <ChevronLeft className="h-6 w-6" />
                      </Button>
                      <Button
                        type="button"
                        size="icon"
                        variant="ghost"
                        onClick={() => move(1)}
                        className="absolute right-2 top-1/2 h-11 w-11 -translate-y-1/2 rounded-full border border-navy-foreground/25 bg-navy/85 text-navy-foreground hover:bg-gold hover:text-gold-foreground sm:right-5"
                        aria-label="Next image"
                        title="Next image"
                      >
                        <ChevronRight className="h-6 w-6" />
                      </Button>
                    </>
                  )}

                  <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-1 rounded-full border border-navy-foreground/20 bg-navy/90 p-1.5 shadow-elev">
                    <Button type="button" size="icon" variant="ghost" onClick={() => zoomOut()} className="rounded-full text-navy-foreground hover:bg-gold hover:text-gold-foreground" aria-label="Zoom out" title="Zoom out"><Minus /></Button>
                    <span className="w-12 text-center text-xs font-bold" aria-live="polite">{Math.round(scale * 100)}%</span>
                    <Button type="button" size="icon" variant="ghost" onClick={() => zoomIn()} className="rounded-full text-navy-foreground hover:bg-gold hover:text-gold-foreground" aria-label="Zoom in" title="Zoom in"><Plus /></Button>
                    <Button type="button" size="icon" variant="ghost" onClick={() => resetTransform()} className="rounded-full text-navy-foreground hover:bg-gold hover:text-gold-foreground" aria-label="Reset image position" title="Reset"><RotateCcw /></Button>
                  </div>
                </>
              )}
            </TransformWrapper>
          </div>

          <footer className="min-h-8 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-2 text-center text-xs text-navy-foreground/75">
            {active.caption ?? "Pinch, scroll or use the controls to inspect this image."}
          </footer>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}