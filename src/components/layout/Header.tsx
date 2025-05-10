export default function Header() {
  return (
    <header className="sticky top-0 z-10 p-4 px-8 bg-white/70 backdrop-blur-md border-b border-zinc-200/50">
      <div className="flex justify-between items-center">
        <div className="flex items-end justify-center gap-2 h-fit">
          <h1 className="text-3xl font-bold">dere</h1>
          <span className="text-xs text-zinc-500 p-1">DevRecord</span>
        </div>
      </div>
    </header>
  );
}
