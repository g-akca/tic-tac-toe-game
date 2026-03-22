import { useState } from "react";

import logoImg from "/images/logo.svg";
import MarkSection from "./MarkSection";
import ModeSelection from "./ModeSelection";

function NewGameMenu() {
  const [mark, setMark] = useState("X");

  return (
    <section className="w-full max-w-115 flex flex-col items-center gap-8 text-center tablet:gap-10">
      <img src={logoImg} alt="Tic tac toe logo" />

      <MarkSection mark={mark} setMark={setMark} />

      <ModeSelection mark={mark} />
    </section>
  )
}

export default NewGameMenu;