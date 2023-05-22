-- CreateTable
CREATE TABLE "Article" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "studies" TEXT[],
    "article" TEXT NOT NULL,
    "discussion" TEXT NOT NULL,

    CONSTRAINT "Article_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Strategy" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "returns" TEXT NOT NULL,
    "sharpie" TEXT NOT NULL,
    "maxDD" TEXT NOT NULL,

    CONSTRAINT "Strategy_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SeriesRow" (
    "id" SERIAL NOT NULL,
    "x" BIGINT NOT NULL,
    "y" INTEGER NOT NULL,
    "strategy_id" INTEGER NOT NULL,

    CONSTRAINT "SeriesRow_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "SeriesRow" ADD CONSTRAINT "SeriesRow_strategy_id_fkey" FOREIGN KEY ("strategy_id") REFERENCES "Strategy"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
