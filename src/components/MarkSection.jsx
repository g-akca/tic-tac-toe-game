import MarkToggler from "./MarkToggler";

function MarkSection({ mark, setMark }) {
  return (
    <section className="w-full bg-slate-800 p-6 pb-8 rounded-2xl inset-shadow-[0_-8px_#10212A] flex flex-col gap-4 tablet:gap-6 tablet:pt-5 tablet:pb-7">
      <form className="flex flex-col gap-6">
        <p className="font-bold uppercase">Pick Player 1's mark</p>
        
        <MarkToggler mark={mark} setMark={setMark} />
      </form>

      <p className="text-[14px] font-medium leading-[130%] tracking-[0.9px] uppercase">Remember : X goes first</p>
    </section>
  )
}

export default MarkSection;