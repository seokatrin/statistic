const {strategies, articles, strategy_rows} = require("./data");
const {PrismaClient} = require("@prisma/client");

const prisma = new PrismaClient();

const load = async () => {
    try {
        // await prisma.strategy.createMany({
        //     data: strategies
        // });
        // console.log('strategies are created');

        // await prisma.seriesRow.createMany({
        //     data: strategy_rows
        // });
        // console.log('strategies are created');

        await prisma.article.createMany({
            data: articles
        });
        console.log('articles are created');
    } catch (e) {
        console.error('error', e)
    } finally {
        await prisma.$disconnect();
    }

}

load()