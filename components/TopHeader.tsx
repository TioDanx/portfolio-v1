export default function TopHeader() {
  return (
    <header className="lg:hidden bg-[#131313] flex items-center justify-between w-full px-6 py-4 sticky top-0 z-50 border-b border-[#3a4a49]/30">
      <div className="flex items-center gap-2">
        <span
          className="material-symbols-outlined text-[#00ffff]"
          style={{ fontVariationSettings: "'FILL' 0" }}
        >
          terminal
        </span>
        <span className="font-bold text-[#00ffff] tracking-[0.1em] text-sm uppercase">
          DANIEL_DEV_SYS_v1.0
        </span>
      </div>
      <div className="w-2 h-2 rounded-full bg-[#28ff1d] animate-pulse shadow-[0_0_8px_#28ff1d]" />
    </header>
  );
}
