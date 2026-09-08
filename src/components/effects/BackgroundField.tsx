/** Fixed page background: a flat warm-white/pale blue-gray wash (deep navy in
 *  dark mode) with one static, very subtle radial highlight near the top —
 *  replaces the earlier drifting-blob/bubble field for a calmer, more
 *  premium feel. Mount once at the top of the public layout. */
export function BackgroundField() {
  return (
    <div aria-hidden="true" className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div
        className="absolute inset-0 dark:hidden"
        style={{ background: 'linear-gradient(180deg,#FBFAF7 0%,#F6F8FC 45%,#F2F5FA 100%)' }}
      />
      <div
        className="absolute inset-0 hidden dark:block"
        style={{ background: 'linear-gradient(180deg,#0A1226 0%,#080E1E 50%,#070C1A 100%)' }}
      />
      <div
        className="absolute -top-[10%] left-1/2 -translate-x-1/2 w-[70vw] h-[70vw] rounded-full"
        style={{
          filter: 'blur(80px)',
          background: 'radial-gradient(circle, rgba(15,174,133,.08), transparent 70%)',
        }}
      />
    </div>
  );
}
