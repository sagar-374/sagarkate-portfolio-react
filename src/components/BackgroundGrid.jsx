export default function BackgroundGrid() {
  return (
    <div className="fixed inset-0 -z-10 opacity-20">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem]" />
    </div>
  )
}