import { createFileRoute } from "@tanstack/react-router";

import heroImg from "@/assets/hero-manti.jpg";
import doughHandsImg from "@/assets/dough-hands.jpg";
import hingelAsset from "@/assets/dish-hingel-real.jpg.asset.json";
import kayseriAsset from "@/assets/dish-kayseri-real.jpg.asset.json";
import ucgenAsset from "@/assets/dish-ucgen-real.jpg.asset.json";
import bohcaAsset from "@/assets/dish-bohca-real.jpg.asset.json";

import citirAsset from "@/assets/dish-citir-real.jpg.asset.json";
import pelmeniAsset from "@/assets/dish-pelmeni-real.jpg.asset.json";
import tamBugdayAsset from "@/assets/dish-tambugday-real.jpg.asset.json";
import organikAsset from "@/assets/dish-organik-real.jpg.asset.json";
import ozbekAsset from "@/assets/dish-ozbek-real.jpg.asset.json";
import glutensizAsset from "@/assets/dish-glutensiz-real.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Has Mantı | El Yapımı Geleneksel Mantı — Sakarya" },
      {
        name: "description",
        content:
          "Her gün taze dana etiyle, katkısız el açması hamurla hazırlanan el yapımı mantı. Hingel, Özbek, tam buğday, organik ve glutensiz mantı çeşitleri. Sakarya içi teslimat.",
      },
      { property: "og:title", content: "Has Mantı | El Yapımı Geleneksel Mantı" },
      {
        property: "og:description",
        content:
          "Günlük taze dana eti, katkısız hamur, elde açılan gerçek mantı. Fiyat listesi ve sipariş bilgileri.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

type MenuItem = {
  name: string;
  desc: string;
  price: string;
  img: string;
  tall?: boolean;
};

const menu: MenuItem[] = [
  {
    name: "Hingel Mantı",
    desc: "Özel patatesli harcıyla, elde açılan hamuruyla nefis lezzet",
    price: "700",
    img: hingelAsset.url,
  },
  {
    name: "Kayseri Mantı",
    desc: "El açması minik mantı, klasik Kayseri usulü",
    price: "800",
    img: kayseriAsset.url,
  },
  {
    name: "Üçgen Mantı",
    desc: "Üçgen kesim, bol kıymalı geleneksel tat",
    price: "800",
    img: ucgenAsset.url,
  },
  {
    name: "Bohça Mantı",
    desc: "Bohça kıvrımıyla elde kapatılan, klasik tat",
    price: "800",
    img: bohcaAsset.url,
  },

  {
    name: "Çıtır Mantı",
    desc: "Sevenlere özel dışı çıtır içi özel lezzet",
    price: "800",
    img: citirAsset.url,
  },
  {
    name: "Pelmeni Mantı",
    desc: "İri kıvrımlı pelmeni usulü",
    price: "900",
    img: pelmeniAsset.url,
  },
  {
    name: "Tam Buğday Unlu Mantı",
    desc: "Sağlıklı beslenenler için aranan tat",
    price: "900",
    img: tamBugdayAsset.url,
  },
  {
    name: "Organik Unlu Mantı",
    desc: "Özenle seçilmiş organik unla hazırlanan özel seri",
    price: "1.000",
    img: organikAsset.url,
  },
  {
    name: "Özbek Mantı",
    desc: "Geleneksel kesim ve iç harcıyla tek lokmada büyük lezzet",
    price: "1.100",
    img: ozbekAsset.url,
  },
  {
    name: "Glutensiz Mantı",
    desc: "Glutensiz beslenenler için özel hazırlanan lezzet",
    price: "1.300",
    img: glutensizAsset.url,
  },
];

const promises = [
  {
    title: "Her Gün Taze Et",
    text: "%100 dana eti, her sabah kasaptan taze alınır ve aynı gün kıyılıp harca dönüşür. Dondurulmuş et kullanmıyoruz.",
  },
  {
    title: "Katkısız Hamur",
    text: "Hamurumuzda katkı maddesi, koruyucu, renklendirici yok. Sadece katkısız un, serbest gezen tavuk yumurtası ve kaya tuzu.",
  },
  {
    title: "Tamamı El Yapımı",
    text: "Her hamur oklavayla elde açılır, her mantı tek tek elde kesilip kapatılır. Makine değil, el emeği.",
  },
  {
    title: "Hijyenik Mutfak",
    text: "Tüm üretim hijyen kurallarına uygun, kontrollü mutfağımızda yapılır. Glutensiz seri ayrı tezgahta hazırlanır.",
  },
];

function Index() {
  return (
    <div className="bg-background text-foreground">
      {/* Hero */}
      <header className="relative isolate flex min-h-[92vh] items-end overflow-hidden">
        <img
          src={heroImg}
          alt="Bakır kapta yoğurtlu ve tereyağlı geleneksel Türk mantısı"
          width={1600}
          height={1200}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative mx-auto w-full max-w-5xl px-6 pb-20 text-center">
          <p className="font-script text-2xl text-gold sm:text-3xl">
            El Yapımı Geleneksel Lezzetler
          </p>
          <h1 className="mt-3 text-5xl font-semibold tracking-[0.12em] text-primary-foreground sm:text-7xl">
            HAS MANTI
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
            Her sabah taze alınan dana eti, katkısız el açması hamur ve tek tek elde
            kapatılan mantılar. Anne mutfağının tadı, güvenle sofranızda.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#fiyat-listesi"
              className="rounded-full bg-accent px-7 py-3 text-sm font-semibold uppercase tracking-widest text-accent-foreground transition-transform hover:-translate-y-0.5"
            >
              Fiyat Listesi
            </a>
            <a
              href="#siparis"
              className="rounded-full border border-primary-foreground/40 px-7 py-3 text-sm font-semibold uppercase tracking-widest text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            >
              Sipariş Ver
            </a>
          </div>
        </div>
      </header>

      {/* Şeritteki vaatler */}
      <section className="bg-primary py-5">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-10 gap-y-2 px-6 text-center text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/90">
          <span>Günlük Taze Dana Eti</span>
          <span className="text-gold">•</span>
          <span>Katkısız Hamur</span>
          <span className="text-gold">•</span>
          <span>Elde Açma</span>
          <span className="text-gold">•</span>
          <span>Kaya Tuzu</span>
        </div>
      </section>

      {/* Hikaye */}
      <section className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">
              Mutfağımızdan
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">
              Kısayolu olmayan bir iş: mantı
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Has Mantı'da her gün aynı sırayla başlıyoruz: eti sabah taze alıyoruz,
                hamuru o gün yoğuruyoruz, mantıyı o gün elde kesip kapatıyoruz. Bekleyen
                harç, dünden kalan hamur, makine kesimi yok.
              </p>
              <p>
                Hamurumuzda yalnızca katkısız un, serbest gezen tavuk yumurtası ve kaya
                tuzu var. Ne koruyucu, ne kabartıcı, ne de adını bilmediğiniz bir katkı.
                Aynı özeni tam buğday, organik ve glutensiz serilerimizde de sürdürüyoruz.
              </p>
              <p className="font-script text-2xl text-primary">
                "Güvenle sofralarınızda…"
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              src={doughHandsImg}
              alt="Unlanmış masada oklava, açılmış hamur ve tek tek kesilen katkısız mantı kareleri"
              width={1200}
              height={1600}
              loading="lazy"
              className="card-warm w-full rounded-md object-cover"
            />
            <div className="pointer-events-none absolute -bottom-5 -left-5 hidden rounded-md bg-card px-6 py-4 text-center card-warm sm:block">
              <p className="text-3xl font-semibold text-primary">%100</p>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Dana Eti
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vaatler */}
      <section className="bg-secondary/60 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-3xl font-semibold sm:text-4xl">
            Neden Has Mantı?
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {promises.map((p, i) => (
              <article
                key={p.title}
                className="rounded-md border border-border bg-card p-7 text-left"
              >
                <span className="font-display text-sm text-gold">
                  0{i + 1}
                </span>
                <h3 className="mt-3 text-xl font-semibold">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {p.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Fiyat listesi */}
      <section id="fiyat-listesi" className="mx-auto max-w-4xl px-6 py-20 sm:py-28">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">
            Doğal ve Kaliteli İçeriklerimiz
          </p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Fiyat Listesi <span className="text-muted-foreground">(1 kg)</span>
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            %100 Dana Eti · Katkısız Un · Serbest Gezen Tavuk Yumurtası · Kaya Tuzu
          </p>
        </div>

        <ul className="mt-12 divide-y divide-border">
          {menu.map((item) => (
            <li key={item.name} className="flex items-center gap-5 py-5">
              <img
                src={item.img}
                alt={item.name}
                width={item.tall ? 1080 : 800}
                height={item.tall ? 1440 : 800}
                loading="lazy"
                className={
                  item.tall
                    ? "h-24 w-20 flex-none rounded-lg object-cover sm:h-28 sm:w-24"
                    : "h-20 w-20 flex-none rounded-full object-cover sm:h-24 sm:w-24"
                }
              />
              <div className="min-w-0 flex-1">
                <h3 className="text-lg font-semibold sm:text-xl">{item.name}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {item.desc}
                </p>
              </div>
              <p className="flex-none font-display text-lg font-semibold text-primary sm:text-xl">
                {item.price} TL
              </p>
            </li>
          ))}
        </ul>
      </section>

      {/* Sipariş */}
      <section id="siparis" className="bg-ink py-20 text-primary-foreground sm:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-center text-3xl font-semibold sm:text-4xl">
            Sipariş ve Teslimat Bilgileri
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              {
                t: "Sakarya İçi",
                d: "Fiyatlarımız Sakarya içi için geçerlidir, aynı gün elden teslim edilir.",
              },
              {
                t: "Şehir Dışı",
                d: "Minimum sipariş miktarı 3 kg'dır. Soğuk zincire uygun paketlenir.",
              },
              {
                t: "Gönderim Ücreti",
                d: "Şehir dışı gönderimlerde her siparişe +300 TL ve kargo ücreti eklenir.",
              },
            ].map((x) => (
              <div
                key={x.t}
                className="rounded-md border border-primary-foreground/15 p-6"
              >
                <h3 className="text-lg font-semibold text-gold">{x.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-primary-foreground/75">
                  {x.d}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://wa.me/905423591418"
              className="rounded-full bg-accent px-7 py-3 text-sm font-semibold uppercase tracking-widest text-accent-foreground transition-transform hover:-translate-y-0.5"
            >
              WhatsApp ile Sipariş
            </a>
            <a
              href="https://instagram.com/has.manti"
              className="rounded-full border border-primary-foreground/40 px-7 py-3 text-sm font-semibold uppercase tracking-widest transition-colors hover:bg-primary-foreground/10"
            >
              @has.manti
            </a>
          </div>
          <p className="mt-6 text-center text-xs text-primary-foreground/50">
            İletişim numarasını ve teslimat saatlerini bize ileterek güncelleyebiliriz.
          </p>
        </div>
      </section>

      <footer className="bg-primary py-10 text-center text-primary-foreground">
        <p className="font-script text-3xl text-gold">Afiyet olsun…</p>
        <p className="mt-3 text-xs uppercase tracking-[0.3em] text-primary-foreground/70">
          Has Mantı · Sakarya
        </p>
      </footer>
    </div>
  );
}
