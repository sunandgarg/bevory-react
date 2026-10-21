import "dotenv/config";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const id = "guide-dry-days-india-2026-city-wise";
const slug = "dry-days-in-india-2026-city-wise-wine-shop-closed";
const now = new Date().toISOString();

const title = "Dry Days in India 2026: City-Wise Wine Shop Closure Guide";
const metaTitle = "Dry Days in India 2026: City-Wise Guide | BevOry";
const metaDescription = "Check dry days in Delhi, Mumbai, Gurgaon, Noida, Bengaluru, Hyderabad, Kolkata, Goa and more with city-wise liquor-shop guidance.";

const content = String.raw`
<p><strong>Dry days in India are dates when licensed liquor sale is stopped by state or district excise orders.</strong> For shoppers, the practical rule is simple: wine shops, thekas, MRP outlets, BEVCO/TASMAC-style retail stores and many bar-service licences may be closed on notified dry days.</p>

<p>Alcohol law is state-controlled in India. Republic Day, Independence Day and Gandhi Jayanti are the three dates most widely treated as dry days, but each state can add local, religious, election and law-and-order closures. Use this guide as a city-wise planning reference, then check BevOry and the current local excise order before relying on a trip to a store.</p>

<h2>Quick Guidelines Before A Dry Day</h2>
<ul>
  <li><strong>Do not trust only Google Maps hours.</strong> A shop can show normal timings online and still be legally closed by excise order.</li>
  <li><strong>Check the state rule for your city.</strong> Gurgaon follows Haryana, Noida follows Uttar Pradesh, and Navi Mumbai or Thane follows Maharashtra.</li>
  <li><strong>Election dry days are local.</strong> They can apply for 48 hours before polling and again on counting day in the affected polling area.</li>
  <li><strong>Hotels and clubs can have separate licence conditions.</strong> Public bar service may be stopped even where room-service exceptions exist.</li>
  <li><strong>Avoid back-door buying.</strong> Dry-day grey-market sales increase counterfeit and enforcement risk.</li>
</ul>

<h2>Most Common Dry Days Across India</h2>
<ul>
  <li><strong>26 January - Republic Day:</strong> widely observed, with some states allowing restricted reopening after a fixed hour.</li>
  <li><strong>15 August - Independence Day:</strong> widely observed, again with state-specific timing differences.</li>
  <li><strong>2 October - Gandhi Jayanti:</strong> the strictest common dry day; many states keep retail sale closed for the full day.</li>
  <li><strong>Election periods:</strong> Election Commission directions can close sale and service around polling and counting.</li>
  <li><strong>State-specific days:</strong> Maharashtra Day, Mahaveer Jayanti, Ambedkar Jayanti, first day of the month in Kerala, and other local days can apply depending on state law.</li>
</ul>

<h2>City-Wise Dry-Day Status</h2>

<h3>Delhi</h3>
<p><strong>Delhi wine shops close on notified dry days.</strong> Delhi's excise guidance lists Republic Day, Independence Day and Gandhi Jayanti among dry days and states that retail vends remain closed when dry-day sale and supply restrictions apply. Religious or important days can also be notified in a given excise year.</p>

<h3>Gurugram And Faridabad</h3>
<p><strong>Gurugram and Faridabad follow Haryana excise rules.</strong> Haryana policy treats Gandhi Jayanti as a full-day dry day and observes Republic Day and Independence Day up to the notified hour. Election-related directions can add closures for affected areas.</p>

<h3>Noida, Greater Noida, Ghaziabad, Lucknow, Kanpur And Agra</h3>
<p><strong>These cities follow Uttar Pradesh retail excise rules.</strong> UP retail rules list Republic Day, Ambedkar Jayanti, Independence Day and Gandhi Jayanti among shop-closure days, with up to three more closure days that can be notified by the Licensing Authority or Collector. Local law-and-order and election orders can add more closures.</p>

<h3>Mumbai, Thane, Navi Mumbai, Pune, Nashik And Nagpur</h3>
<p><strong>Maharashtra dry days affect Mumbai, Thane, Pune, Nashik and Nagpur together unless a district order says otherwise.</strong> Maharashtra excise material identifies national and state dates such as Republic Day, Maharashtra Day, Independence Day and Gandhi Jayanti as closure-sensitive days for licensed premises. Local collectors can also notify additional days around fairs, elections or public-order situations.</p>

<h3>Bengaluru, Mysore, Mangalore And Hubli-Dharwad</h3>
<p><strong>Karnataka cities should be treated as closed on Gandhi Jayanti and any election-notified dry period.</strong> Karnataka district excise guidance lists Mahatma Gandhi's birthday as a dry day, and licence rules allow election-related closure notices. For Republic Day, Independence Day and Karnataka Rajyotsava, always check the district excise order because enforcement can vary by licence and year.</p>

<h3>Hyderabad And Warangal</h3>
<p><strong>Hyderabad and Warangal follow Telangana excise and district notifications.</strong> Telangana public materials recognise dry-day enforcement and penalties for sale during dry days, while city-level orders commonly appear around national holidays, Muharram, elections and local law-and-order periods. Check the current Telangana excise or district police/excise notice before travelling to a store.</p>

<h3>Kolkata And Asansol</h3>
<p><strong>Kolkata and Asansol follow West Bengal excise directions.</strong> West Bengal excise powers include prescribing opening days and hours and ordering closure of licensed premises on special occasions. Election dry days are especially important in the state because polling-area restrictions can start before voting and continue through counting directions.</p>

<h3>Jaipur, Jodhpur, Kota And Udaipur</h3>
<p><strong>Rajasthan has one of the clearer public dry-day lists.</strong> Rajasthan excise guidance defines a dry day as a day when sale of liquor is prohibited across the state. The public list includes Republic Day, Independence Day, Gandhi Jayanti and religious or state-specific days such as Mahaveer Jayanti, with other official pages listing additional days including Krishna Janmashtmi and Maha Shivratri/Gokul Bhai Bhatt day.</p>

<h3>Indore, Bhopal, Gwalior And Jabalpur</h3>
<p><strong>Madhya Pradesh policy lists three main dry days for the 2025-26 licence period: Independence Day, Gandhi Jayanti and Republic Day.</strong> The policy also gives collectors power to order extra closures for administrative or public-interest reasons and to close affected areas during elections.</p>

<h3>Goa</h3>
<p><strong>Goa observes Gandhi Jayanti as a dry day.</strong> Goa excise notices and the Government of Goa information department have stated that premises selling liquor through packed bottles and premises for consumption remain closed on October 2. Travelers should check current notices for election or special local closures.</p>

<h3>Ahmedabad And Gujarat</h3>
<p><strong>Ahmedabad is not a normal dry-day market because Gujarat is a prohibition state.</strong> Ordinary liquor sale and consumption are restricted under the Gujarat Prohibition Act framework, with access only through specific permits or authorised exemptions. For Ahmedabad, the main question is permit eligibility, not whether a normal wine shop is open.</p>

<h3>Kochi And Kerala</h3>
<p><strong>Kerala has more frequent closure days than many states.</strong> BEVCO materials and Kerala-linked customer guidance identify the first day of each English month and Gandhi-related days as closure-sensitive for FL-1 shop operations, while election orders can add dry-day periods. Star-hotel service rules have changed in recent years, so check the current licence category before assuming a bar is open.</p>

<h2>Dry-Day Map For BevOry Cities</h2>
<ul>
  <li><strong>Delhi:</strong> Delhi excise notifications.</li>
  <li><strong>Gurgaon, Faridabad:</strong> Haryana excise policy.</li>
  <li><strong>Noida, Ghaziabad, Lucknow, Kanpur, Agra:</strong> Uttar Pradesh retail excise rules.</li>
  <li><strong>Mumbai, Thane, Pune, Nashik, Nagpur:</strong> Maharashtra state excise and district collector orders.</li>
  <li><strong>Bangalore, Mysore, Mangalore, Hubli-Dharwad:</strong> Karnataka excise and district orders.</li>
  <li><strong>Hyderabad, Warangal:</strong> Telangana excise and district orders.</li>
  <li><strong>Kolkata, Asansol:</strong> West Bengal excise and election orders.</li>
  <li><strong>Jaipur, Jodhpur, Kota, Udaipur:</strong> Rajasthan excise dry-day list.</li>
  <li><strong>Indore, Bhopal, Gwalior, Jabalpur:</strong> Madhya Pradesh excise policy and collector orders.</li>
  <li><strong>Goa:</strong> Goa excise notices.</li>
</ul>

<h2>Can You Drink At Home On A Dry Day?</h2>
<p>A dry day usually restricts sale, supply and service, not every private act inside a residence. That said, possession limits, transport rules and permit requirements differ sharply by state. Gujarat is prohibition-led, Kerala has specific possession and retail rules, and Delhi publishes separate guidance on home possession within permissible limits.</p>

<h2>Do Bars, Clubs And Restaurants Close?</h2>
<p>Often, yes. The exact answer depends on licence category and the wording of the dry-day order. Goa has included both packaged-bottle sale and consumption premises in Gandhi Jayanti notices. Delhi treats national holidays more strictly than ordinary notified dry days. Election dry-day directions can also cover hotels, restaurants, clubs and other establishments selling or serving liquor.</p>

<h2>Final Answer</h2>
<p><strong>If your city has a dry day, assume retail alcohol sale is closed unless the current excise order clearly says otherwise.</strong> The safest planning rule for BevOry users is to check the state, city and date before travelling, then use BevOry for normal-day city-level prices and availability.</p>

<h2>Sources Checked</h2>
<ul>
  <li><a href="https://excise.delhi.gov.in/excise/frequently-asked-questions-1" target="_blank" rel="noopener noreferrer">Delhi Excise Department FAQ</a></li>
  <li><a href="https://haryanatax.gov.in/LoadPartial/Excise%20Policy" target="_blank" rel="noopener noreferrer">Haryana Excise Policy page</a></li>
  <li><a href="https://stateexcise.maharashtra.gov.in/Pdf/Maharashtra_Excise_Manual_Vol-I.pdf" target="_blank" rel="noopener noreferrer">Maharashtra Excise Manual</a></li>
  <li><a href="https://docsrepo.exciseup.in/documents/dept/excise/rules/country-liquor-retail/cl-retail-rules-2019-10th-amendment" target="_blank" rel="noopener noreferrer">Uttar Pradesh retail closure rules reference</a></li>
  <li><a href="https://tumkur.nic.in/en/excise/" target="_blank" rel="noopener noreferrer">Karnataka district excise guidance</a></li>
  <li><a href="https://excise.rajasthan.gov.in/RSED/Website/Faq-in-Detail.aspx" target="_blank" rel="noopener noreferrer">Rajasthan Excise FAQ</a></li>
  <li><a href="https://docsrepo.exciseup.in/documents/dept/excise/policy/excise-policy-madhya-pradesh/excise-policy-madhya-pradesh" target="_blank" rel="noopener noreferrer">Madhya Pradesh excise policy reference</a></li>
  <li><a href="https://www.excise.telangana.gov.in/Service_Chart" target="_blank" rel="noopener noreferrer">Telangana Excise service chart</a></li>
  <li><a href="https://excise.wb.gov.in/CommonUser/Portal_New_info_under_act.aspx" target="_blank" rel="noopener noreferrer">West Bengal Excise public information under Act</a></li>
  <li><a href="https://excise.goa.gov.in/circular.aspx" target="_blank" rel="noopener noreferrer">Goa Excise circulars</a></li>
  <li><a href="https://web.ksbc.co.in/customerzone/" target="_blank" rel="noopener noreferrer">Kerala BEVCO customer guidance</a></li>
  <li><a href="https://cpahmedabad.gujarat.gov.in/Upload/prohibition1949.pdf" target="_blank" rel="noopener noreferrer">Gujarat Prohibition Act reference</a></li>
  <li><a href="https://www.pib.gov.in/PressReleasePage.aspx?PRID=2253728" target="_blank" rel="noopener noreferrer">Election Commission dry-day guidance via PIB</a></li>
</ul>

<h2>Responsible Drinking Note</h2>
<p>This guide is informational. Alcohol laws, minimum legal drinking age, possession limits, dry-day orders and licence conditions differ across Indian states and can change through local notifications. Buy only from licensed sellers, follow local law and never drink and drive.</p>
`.trim();

const data = {
  id,
  title,
  slug,
  excerpt: "A city-wise 2026 dry-day guide for Delhi, Mumbai, Gurgaon, Noida, Bengaluru, Hyderabad, Kolkata, Goa and other BevOry cities.",
  content,
  cover_image_url: null,
  cover_emoji: "calendar",
  author: "BevOry Editorial",
  category: "Guides",
  tags: ["dry day", "wine shops", "liquor laws", "India", "city guide", "excise"],
  is_published: true,
  is_featured: true,
  meta_title: metaTitle,
  meta_description: metaDescription,
  linked_product_id: null,
  linked_brand: null,
  notify_users: false,
  published_at: "2026-10-02T14:00:00.000+05:30",
  created_at: now,
  updated_at: now,
};

await prisma.contentRecord.upsert({
  where: { key: `blog_posts:${id}` },
  update: { data: { ...data, updated_at: now } },
  create: { key: `blog_posts:${id}`, tableName: "blog_posts", recordId: id, data },
});

const saved = await prisma.contentRecord.findUnique({
  where: { key: `blog_posts:${id}` },
});

console.log(JSON.stringify({
  saved: Boolean(saved),
  id,
  slug: saved?.data?.slug,
  title: saved?.data?.title,
  is_published: saved?.data?.is_published,
}, null, 2));

await prisma.$disconnect();
