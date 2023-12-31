import React, { Component } from 'react'
import NewsItem from './NewsItem';

export class News extends Component {
  articles=[
    {
     "source": { "id": "associated-press","name": "Associated Press" },
     "author": "ANDY WONG, HUIZHONG WU",
     "title": "Beijing records heaviest rainfall in at least 140 years, causing severe flooding and 21 deaths - The Associated Press",
     "description": "China’s capital has recorded its heaviest rainfall in at least 140 years over the past few days. The Beijing Meteorological Bureau says the city recorded 29.3 inches of rain between Saturday and Wednesday morning. Chinese authorities on Tuesday said the torre…",
     "url": "https://apnews.com/article/china-beijing-rainfall-floods-1a8f968799bd539d11f3421010b8f2a9",
     "urlToImage": "https://dims.apnews.com/dims4/default/e4a18d2/2147483647/strip/true/crop/5000x2813+0+260/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fe3%2Fab%2Fce131c10c2dc4b4c426f8f63e672%2Ff59df53fb20e4602835a0caece16b598",
     "publishedAt": "2023-08-02T12:17:00Z",
     "content": "ZHUZHOU, Hebei (AP) Chinas capital has recorded its heaviest rainfall in at least 140 years over the past few days after being deluged with heavy rains from the remnants of Typhoon Doksuri.\r\nThe city… [+2646 chars]"
     },
    {
     "source": {
     "id": null,
     "name": "CNBC"
     },
     "author": "Amelia Lucas",
     "title": "Taco Bell owner Yum Brands misses revenue estimates despite soaring KFC sales - CNBC",
     "description": "Yum Brands restaurant KFC's same-store sales climbed 13%, fueled by demand in China, its largest market.",
     "url": "https://www.cnbc.com/2023/08/02/yum-brands-yum-q2-2023.html",
     "urlToImage": "https://image.cnbcfm.com/api/v1/image/106834618-1612362484437-gettyimages-1198751148-YUM-BRANDS-EARNS.jpg?v=1690975000&w=1920&h=1080",
     "publishedAt": "2023-08-02T11:16:40Z",
     "content": "Yum Brands on Wednesday reported mixed quarterly results as Taco Bell's and Pizza Hut's same-store sales disappointed.\r\nShares of the company fell less than 1% in premarket trading.\r\nHere's what the … [+1436 chars]"
     },
    {
     "source": {
     "id": "espn",
     "name": "ESPN"
     },
     "author": "ESPN",
     "title": "2023 MLB trade deadline: What to make of Mets, Yankees, more - ESPN",
     "description": "Are the 2023 Angels for real? What about the 2026 Mets? We separate truth from fiction.",
     "url": "https://www.espn.com/mlb/story/_/id/38109482/2023-mlb-trade-deadline-real-not-verlander-ohtani-mets-angels-yankees",
     "urlToImage": "https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F0801%2Fr1205022_2_1296x729_16%2D9.jpg",
     "publishedAt": "2023-08-02T11:00:00Z",
     "content": "The Los Angeles Angels didn't deal Shohei Ohtani and instead surrounded him with new additions. The New York Mets traded both Justin Verlander and Max Scherzer, and threw in the towel for 2023. Those… [+12698 chars]"
     },
    {
     "source": {
     "id": "nbc-news",
     "name": "NBC News"
     },
     "author": "The Associated Press",
     "title": "Alex Murdaugh accomplice sentenced to 7 years in prison for role in fraud scheme - NBC News",
     "description": "The man who once headed a highly respected bank in the South Carolina Lowcountry will spend seven years in federal prison for helping convicted murderer Alex Murdaugh steal nearly $2 million from clients’ legal settlements.",
     "url": "https://www.nbcnews.com/news/us-news/alex-murdaugh-accomplice-sentenced-7-years-prison-role-fraud-scheme-rcna97685",
     "urlToImage": "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2023-08/230802-russell-laffitte-mb-1102-1ea08b.jpg",
     "publishedAt": "2023-08-02T10:49:05Z",
     "content": "The man who once headed a highly respected bank in the South Carolina Lowcountry will spend seven years in federal prison for helping convicted murderer Alex Murdaugh steal nearly $2 million from cli… [+4061 chars]"
     },
    {
     "source": {
     "id": "usa-today",
     "name": "USA Today"
     },
     "author": "Emily DeLetter",
     "title": "Mega Millions next drawing: At $1.25B, jackpot fourth-largest ever - USA TODAY",
     "description": "The jackpot currently sits at $1.25 billion ahead of Friday's drawing, the fourth-largest prize in the lottery's history.",
     "url": "https://www.usatoday.com/story/money/2023/08/02/mega-millions-next-drawing/70511492007/",
     "urlToImage": "https://www.usatoday.com/gcdn/presto/2023/07/15/PBRE/7567e03c-77e5-4550-9eea-a7ed20734edd-54553FE8-815D-4E68-BB82-56998F93D53C.jpeg?crop=4031,2267,x0,y579&width=3200&height=1800&format=pjpg&auto=webp",
     "publishedAt": "2023-08-02T10:48:06Z",
     "content": "With no Mega Millions jackpot winners since April, the lottery's grand prize continues to grow, now climbing over $1.2 billion after Tuesday's drawing and inching closer to more all-time records.\r\nAh… [+2744 chars]"
     },
    {
     "source": {
     "id": "al-jazeera-english",
     "name": "Al Jazeera English"
     },
     "author": "Al Jazeera",
     "title": "Pope arrives in Portugal amid clergy sexual abuse scandal - Al Jazeera English",
     "description": "Francis will attend a global gathering of young Catholics – a $175m event held amid Portugal’s cost-of-living crisis.",
     "url": "https://www.aljazeera.com/news/2023/8/2/pope-arrives-in-portugal-amid-clergy-sexual-abuse-scandal",
     "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2023/08/AP23214339418052-1690970679.jpg?resize=1920%2C1440",
     "publishedAt": "2023-08-02T10:47:40Z",
     "content": "Pope Francis has landed in Lisbon for a global gathering of young Catholics taking place in the shadow of Portugals huge clergy sexual abuse scandal and criticism of soaring costs for the event.\r\nHun… [+3032 chars]"
     },
    {
     "source": {
     "id": null,
     "name": "CNBC"
     },
     "author": "Spencer Kimball",
     "title": "CVS beats on earnings and revenue as the company slashes costs - CNBC",
     "description": "CVS is cutting costs as it pushes deeper into health-care services after its acquisitions of Signify Health and Oak Street Health.",
     "url": "https://www.cnbc.com/2023/08/02/cvs-health-cvs-q2-2023-earnings.html",
     "urlToImage": "https://image.cnbcfm.com/api/v1/image/106065567-1565182123822gettyimages-1159973079.jpeg?v=1690972756&w=1920&h=1080",
     "publishedAt": "2023-08-02T10:39:16Z",
     "content": "CVS Health on Wednesday reported second-quarter earnings and revenue that beat expectations, as the company slashes costs and lays off thousands of employees.\r\nCVS has implemented a cost-cutting prog… [+2335 chars]"
     },
    {
     "source": {
     "id": "al-jazeera-english",
     "name": "Al Jazeera English"
     },
     "author": "Al Jazeera",
     "title": "Why are leprosy cases surging in US state of Florida? - Al Jazeera English",
     "description": "Leprosy has been uncommon in the United States but studies suggest it is now spreading within its population.",
     "url": "https://www.aljazeera.com/news/2023/8/2/why-are-leprosy-cases-surging-in-us-state-of",
     "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2023/08/GettyImages-1179781742-1690968691.jpg?resize=1920%2C1440",
     "publishedAt": "2023-08-02T10:31:41Z",
     "content": "Leprosy cases are surging in Florida, suggesting the chronic infectious disease may have become endemic in the southeastern United States.\r\nThe number of cases more than doubled in the southeastern s… [+2778 chars]"
     },
    {
     "source": {
     "id": "nbc-news",
     "name": "NBC News"
     },
     "author": "Julia Ainsley, Dan De Luce",
     "title": "Are the Biden administration's 'processing centers' for migrants in Latin America doing any good? - NBC News",
     "description": "The Biden admin opened “processing centers” in Latin America that let migrants apply for U.S. entry from afar. But NGOS know of no migrants who've used the centers and won U.S. entry.",
     "url": "https://www.nbcnews.com/news/investigations/are-us-migrant-processing-centers-latin-america-working-rcna97584",
     "urlToImage": "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2023-08/230801-colombia-haiti-migrants-2021-ac-703p-23f6ed.jpg",
     "publishedAt": "2023-08-02T10:30:00Z",
     "content": "In April, the Biden administration announced it would be opening processing centers in Central and South America to allow migrants to apply to come to the U.S. without making the dangerous journey to… [+4290 chars]"
     },
    {
     "source": {
     "id": "cnn",
     "name": "CNN"
     },
     "author": "Joseph Ataman, Larry Madowo, Caitlin Hu, Shirin Faqiri, Sana Noor Haq",
     "title": "Europeans evacuated from Niger as neighboring West African juntas warn against intervention - CNN",
     "description": "Hundreds of European nationals are being evacuated from Niger in the wake of a military coup that has plunged the West African nation into a political crisis and rattled the region.",
     "url": "https://www.cnn.com/2023/08/01/africa/niger-coup-europe-evacuations-intl/index.html",
     "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230801100018-06-niger-coup-073023-protest.jpg?c=16x9&q=w_800,c_fill",
     "publishedAt": "2023-08-02T10:09:00Z",
     "content": "Hundreds of European nationals are being evacuated from Niger in the wake of a military coup that has plunged the West African nation into a political crisis and rattled the region.\r\nTwo Airbus A330 … [+7392 chars]"
     },
    {
     "source": {
     "id": "cnn",
     "name": "CNN"
     },
     "author": "Matt Foster",
     "title": "Sweden to play US in last 16 after beating Argentina as South Africa makes history - CNN",
     "description": "A meeting between Sweden and the US in the first knockout stage of the Women’s World Cup was confirmed on Wednesday as the Scandinavian side beat Argentina 2-0.",
     "url": "https://www.cnn.com/2023/08/02/football/sweden-south-africa-italy-womens-world-cup-2023-spt-intl/index.html",
     "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230802161301-01-wwcup-argentina-sweden-soccer.jpg?c=16x9&q=w_800,c_fill",
     "publishedAt": "2023-08-02T10:01:00Z",
     "content": "A meeting between Sweden and the US in the first knockout stage of the Womens World Cup was confirmed on Wednesday as the Scandinavian side beat Argentina 2-0.\r\nIn the other Group G game, Italy and S… [+5040 chars]"
     },
    {
     "source": {
     "id": null,
     "name": "Gizmodo.com"
     },
     "author": "Kyle Barr",
     "title": "A Hands-on With the Samsung Galaxy Z Flip 5 - Gizmodo",
     "description": "After initial testing, the Galaxy Z Flip 5 feels like it needs more apps available on its larger, 3.4-inch exterior screen.",
     "url": "https://gizmodo.com/samsung-galaxy-z-flip-5-hands-on-1850697358",
     "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/5159460258dd4abc907a976328bc3e8a.jpg",
     "publishedAt": "2023-08-02T10:00:00Z",
     "content": "Of Samsungs latest foldable mobile offerings unveiled at its latest Unpacked event, the most dramatic changes weve seen come via the Galaxy Z Flip 5. Not only do we finally have a fully flat silhouet… [+2247 chars]"
     },
    {
     "source": {
     "id": "engadget",
     "name": "Engadget"
     },
     "author": null,
     "title": "Canon's new security-focused 'SPAD' camera can capture color video in complete darkness - Engadget",
     "description": "Canon has just unveiled the MS-500, an unusual model that's one of the most sensitive non-infrared cameras ever developed..",
     "url": "https://www.engadget.com/canons-new-security-focused-spad-camera-can-capture-color-video-in-complete-darkness-095516159.html",
     "urlToImage": "https://s.yimg.com/uu/api/res/1.2/ScCkhZ2uad8QsWyilGtbdg--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-08/1e0b49e0-3113-11ee-bf6e-aacb14b0a178.cf.jpg",
     "publishedAt": "2023-08-02T09:59:10Z",
     "content": "Canon has just unveiled the MS-500, an unusual model that's one of the most sensitive non-infrared cameras ever developed. It uses the highest-resolution 1-inch SPAD (Single-photon avalanche diode) s… [+1474 chars]"
     },
    {
     "source": {
     "id": "fox-sports",
     "name": "Fox Sports"
     },
     "author": null,
     "title": "Jamaica vs. Brazil highlights: Jamaica advances with draw; Marta's World Cup career ends - FOX Sports",
     "description": "The 2023 FIFA Women's World Cup continues Wednesday with Jamaica taking on Brazil in Australia. Here are the top moments!",
     "url": "https://www.foxsports.com/stories/soccer/womens-world-cup-2023-top-plays-jamaica-brazil",
     "urlToImage": "https://a57.foxsports.com/statics.foxsports.com/www.foxsports.com/content/uploads/2023/08/1408/814/07.31.23_Womens-World-Cup-Top-Moments_Jamaica-vs-Brazil_16x9_1.jpg?ve=1&tl=1",
     "publishedAt": "2023-08-02T09:37:03Z",
     "content": "The 2023 FIFA Women's World Cup continued Wednesday (on FS1 and the FOX Sports app), with Jamaica (1-2-0) taking down Brazil (1-1-1) at Melbourne Rectangular Stadium in Australia to advance to the kn… [+2660 chars]"
     },
    {
     "source": {
     "id": "independent",
     "name": "Independent"
     },
     "author": "Namita Singh",
     "title": "Trump hit with 2020 election charges as he likens it to 'Nazi persecution' – live - The Independent",
     "description": "Former president is indicted for a third time, his second federal indictment, and his first for his alleged conduct while in office",
     "url": "https://www.independent.co.uk/news/world/americas/us-politics/donald-j-trump-indictment-coconspirators-49-page-b2386039.html",
     "urlToImage": "https://static.independent.co.uk/2023/07/30/00/f787a96be49c45e282536775647f5932.jpg?quality=75&width=1200&auto=webp",
     "publishedAt": "2023-08-02T09:20:20Z",
     "content": "Co-conspirator 1: Former New York City Mayor and Trump lawyer Rudy Giuliani\r\nThe individual known as co-conspirator number one appears to be former New York City Mayor and Mr Trumps former attorney R… [+1440 chars]"
     },
    {
     "source": {
     "id": null,
     "name": "NPR"
     },
     "author": "",
     "title": "Tests for genetic cancer risk are cheap, but many patients don't get them : Shots - Health News - NPR",
     "description": "Millions of people in the U.S. have a genetic variant that raises their risk of cancer. Genetic testing can help people find cancer earlier and seek treatment. But many patients aren't offered it.",
     "url": "https://www.npr.org/sections/health-shots/2023/08/02/1191419631/cancer-risk-test-genetic-genes-inexpensive-why-dont-more-people-get-tested",
     "urlToImage": "https://media.npr.org/assets/img/2023/08/01/nottingham-family_wide-6cab0fd1a29a792c4d6a168857792cc814204723-s1400-c100.jpeg",
     "publishedAt": "2023-08-02T09:10:51Z",
     "content": "Jeremy Nottingham (bottom right) sits for a family photo with his parents, Junius and Sharon, and sister Briana.\r\nJunius Nottingham Jr. \r\nA few years ago, Junius Nottingham Jr. was on a family vacati… [+10196 chars]"
     },
    {
     "source": {
     "id": null,
     "name": "NPR"
     },
     "author": "Emily Olson",
     "title": "NASA says it detected a signal from Voyager 2 spacecraft - NPR",
     "description": "The Jet Propulsion Lab lost contact with Voyager 2, which is traveling 12.3 billion miles away from Earth, after engineers mistakenly pointed its antenna 2 degrees away from its home planet.",
     "url": "https://www.npr.org/2023/08/02/1191341035/nasa-voyager-2-spacecraft-contact",
     "urlToImage": "https://media.npr.org/assets/img/2023/08/01/gettyimages-164430702_wide-14fc83c1c58c3480e6bc371c972dba68af52258a-s1400-c100.jpg",
     "publishedAt": "2023-08-02T09:01:51Z",
     "content": "A NASA image of one of the twin Voyager space probes. The Jet Propulsion Laboratory lost contact with Voyager 2 on July 21 after mistakenly pointing its antenna 2 degrees away from Earth.\r\nNASA/Getty… [+2807 chars]"
     },
    {
     "source": {
     "id": null,
     "name": "SciTechDaily"
     },
     "author": null,
     "title": "Drinking Kombucha Linked to Reduced Blood Sugar Levels in People With Type 2 Diabetes - SciTechDaily",
     "description": "Small pilot study suggests larger trials are warranted to confirm the potential benefit of fermented tea. People with type 2 diabetes who drank kombucha, the fermented tea drink, for four weeks had lower fasting blood glucose levels compared to when they cons…",
     "url": "https://scitechdaily.com/drinking-kombucha-linked-to-reduced-blood-sugar-levels-in-people-with-type-2-diabetes/",
     "urlToImage": "https://scitechdaily.com/images/Homemade-Kombucha-Tea.jpg",
     "publishedAt": "2023-08-02T08:33:04Z",
     "content": "ByGeorgetown University Medical CenterAugust 2, 2023\r\nResearchers found that type 2 diabetes patients who consumed kombucha over four weeks had lower fasting blood glucose levels than those who drank… [+6810 chars]"
     },
    {
     "source": {
     "id": "politico",
     "name": "Politico"
     },
     "author": null,
     "title": "Trump's new judge is a tough Jan. 6 sentencer — and has a history with him - POLITICO",
     "description": "Meet Tanya Chutkan, the Obama appointee who was randomly chosen to preside over Trump's newest case.",
     "url": "https://www.politico.com/news/2023/08/02/trump-judge-tanya-chutkan-00109342",
     "urlToImage": "https://static.politico.com/24/1d/b2743cda4460a510ab102ce6815b/https-delivery-gettyimages.com/downloads/1534455292",
     "publishedAt": "2023-08-02T08:30:00Z",
     "content": "Much of that evidence resurfaced Tuesday in special counsel Jack Smiths four-count indictment of Trump, which referenced call logs and White House records that were already familiar to Americans who … [+4299 chars]"
     },
    {
     "source": {
     "id": null,
     "name": "Notesfrompoland.com"
     },
     "author": "Notes From Poland",
     "title": "Belarusian helicopters violated Polish airspace, says Warsaw - Notes From Poland",
     "description": null,
     "url": "https://notesfrompoland.com/2023/08/02/belarusian-helicopters-violated-polish-airspace-says-warsaw/",
     "urlToImage": null,
     "publishedAt": "2023-08-02T08:19:16Z",
     "content": null
     }
     ]
  constructor(){
    // constrcutor pehle chalega
    super(); 
    console.log("hooo") 
    this.state  ={
      articles: this.articles,
      loading: false
    }
  }
   async componentDidMount(){
    // 
    console.log("cdn");
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=0a1f63a6db8243fcb18b398238a24cd0";
    let data =  await fetch(url);
    let parasedData= await data.json()
    console.log(parasedData);
    this.setState({articles: parasedData.articles})
  }
  render() {
    // render 2nd 
    return (
      <div className="container my-3">
        <h2>Gullak News</h2>
       
        <div className="row">
        {this.state.articles.map((element)=>{
         return <div className="col-md-4"  key={element.url}>
          <NewsItem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88): ""} imageUrl={element.urlToImage} newsUrl={element.url} />
          </div>
        })}
        
       
        </div>
        </div>
    
    )
  }
}

export default News;
