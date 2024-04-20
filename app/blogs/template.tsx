import { Header } from "@/components/Header";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header path="/blogs">Blogs</Header>
      <main className="mx-auto mb-28 w-11/12 font-zen_kaku_gothic_new md:w-4/5">
        {children}
      </main>
    </>
  );
}
