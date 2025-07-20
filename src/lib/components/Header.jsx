export function Header() {
  return (
    <div
      className='sticky top-0 left-0 right-0 py-4'
      style={{ paddingTop: 'env(safe-area-inset-top)' }}>
      <div class='h-12 flex flex-row justify-center items-center bg-accent w-full'>
        <h1 class='text-lg tracking-wider text-accent-foreground font-semibold '>My Carsharing</h1>
      </div>
    </div>
  );
}
