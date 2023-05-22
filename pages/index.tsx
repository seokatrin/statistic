import { Inter } from "next/font/google";
import { PrismaClient } from "@prisma/client";
import { Main } from "@/components/Main";
import { Strategies } from "@/components/Strategies";
import { Articles } from "@/components/Articles";
import {Footer} from  "@/components/Footer";
import { Article } from "@/types";

interface HomeProps {
  articles: Article[]
}

export default function Home({articles, strategies}: HomeProps) {
  console.log('props', strategies)
  return (
    <>
      <Main />
      <div className="bg-[#FAFAFF]">
        <Strategies />
        <Articles articles={articles} />
      </div>
      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  const prisma = new PrismaClient();
  const articles = await prisma.article.findMany();
  const strategies = await prisma.strategy.findMany();

  return {
    props: { articles, strategies },
  };
}
