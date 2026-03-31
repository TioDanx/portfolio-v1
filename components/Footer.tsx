export default function Footer() {
  return (
    <>
      <footer className="py-12 px-6 lg:px-16 border-t border-[#3a4a49]/10 text-center">
        <p className="text-[10px] text-[#b9cac9]/30 tracking-[0.5em] uppercase">
          © 2026 DANIEL_ARCHIVE // ALL_RIGHTS_RESERVED // SYSTEM_END_OF_FILE
        </p>
      </footer>

      {/* Background vignette data — desktop only */}
      <div className="fixed top-6 right-6 text-[10px] text-[#00dddd]/20 pointer-events-none hidden xl:block z-0">
        LAT: 34.0522° N
        <br />
        LONG: 118.2437° W
      </div>
      <div className="fixed bottom-6 left-[300px] text-[10px] text-[#00dddd]/20 pointer-events-none hidden xl:block z-0">
        UPTIME: 99.992%
        <br />
        KERNEL: REACT_2026_CORE
      </div>
    </>
  );
}
