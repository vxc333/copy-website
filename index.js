import scrape from "website-scraper";
import PuppeteerPlugin from "website-scraper-puppeteer";

await scrape({
  urls: ["COLOQUE O SITE AQUI"],
  directory: "COLOQUE O DIRETORIO AQUI QUE NAO EXISTA",
  plugins: [
    new PuppeteerPlugin({
      launchOptions: { headless: false },
      scrollToBottom: { timeout: 10000, viewportN: 10 },
      blockNavigation: true,
    }),
  ],
});
