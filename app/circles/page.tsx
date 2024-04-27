import { CircleAcordion } from "@/components/circles/CircleAccordion";
import { Header } from "@/components/Header";

export default function Page() {
  return (
    <div className="flex flex-col items-center font-zen_kaku_gothic_new">
      <Header path="/circles">Circles</Header>
      <CircleAcordion />
    </div>
  );
}
