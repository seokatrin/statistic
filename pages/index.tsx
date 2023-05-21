import { Inter } from "next/font/google";
import { PrismaClient } from "@prisma/client";
import { Main } from "@/components/Main";
import { Strategies } from "@/components/Strategies";
import { Articles } from "@/components/Articles";
import {Footer} from  "@/components/Footer";

export default function Home() {
  return (
    <>
      <Main />
      <div className="bg-[#FAFAFF]">
        <Strategies />
        <Articles />
      </div>
      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  const prisma = new PrismaClient();
  const articles = await prisma.article.findMany();

  return {
    props: { articles },
  };
}
