type MenuItem = {
  name: string;
  price: string;
  description: string;
  tag: string;
  icon: "bowl" | "chili" | "leaf" | "spark";
};

const menu: MenuItem[] = [
  {
    name: "Theory Tonkotsu",
    price: "$18",
    description:
      "Silky 18-hour pork broth, chashu, black garlic oil, ajitama, scallions.",
    tag: "Best Seller",
    icon: "bowl",
  },
  {
    name: "Spicy Miso Collapse",
    price: "$17",
    description:
      "Miso broth with chili crunch, sesame, roasted corn, ground pork, butter.",
    tag: "Hot",
    icon: "chili",
  },
  {
    name: "Tokyo Shoyu Classic",
    price: "$16",
    description:
      "Clear soy broth, chicken chashu, bamboo shoots, nori, crispy shallots.",
    tag: "Classic",
    icon: "spark",
  },
  {
    name: "Citrus Shio Garden",
    price: "$16",
    description:
      "Light sea-salt broth with yuzu, spinach, tofu puffs, and snap peas.",
    tag: "Veg Friendly",
    icon: "leaf",
  },
  {
    name: "Midnight Mazemen",
    price: "$15",
    description:
      "Brothless noodles, tare, slow-cooked pork, confit mushrooms, soft egg.",
    tag: "Late Night",
    icon: "spark",
  },
  {
    name: "Karaage Basket",
    price: "$11",
    description: "Double-fried soy-ginger chicken with kewpie lime slaw.",
    tag: "Crunchy",
    icon: "spark",
  },
  {
    name: "Gyoza Theory",
    price: "$9",
    description: "Pork and napa dumplings with charred chili soy dipping sauce.",
    tag: "Share Plate",
    icon: "bowl",
  },
  {
    name: "Matcha Milk Jam Toast",
    price: "$8",
    description: "Thick-cut milk bread with matcha cream and black sesame brittle.",
    tag: "Sweet Finish",
    icon: "leaf",
  },
];

const hours = [
  ["Monday - Thursday", "11:30 AM - 9:30 PM"],
  ["Friday", "11:30 AM - 11:00 PM"],
  ["Saturday", "12:00 PM - 11:00 PM"],
  ["Sunday", "12:00 PM - 8:30 PM"],
];

const features = [
  {
    title: "House broth",
    copy: "Simmered low and slow for deep body, gloss, and comfort.",
    icon: "bowl" as const,
  },
  {
    title: "Open kitchen",
    copy: "Flames, steam, and soundtrack energy right behind the counter.",
    icon: "spark" as const,
  },
  {
    title: "Night crowd",
    copy: "Perfect for post-market dinners, dates, and late solo bowls.",
    icon: "chili" as const,
  },
  {
    title: "Fresh produce",
    copy: "Yuzu, scallions, greens, and seasonal toppings cut in-house.",
    icon: "leaf" as const,
  },
];

const gallery = [
  {
    src: "https://images.unsplash.com/photo-1557872943-16a5ac26437e?auto=format&fit=crop&w=900&q=80",
    title: "Counter bowls",
  },
  {
    src: "https://images.unsplash.com/photo-1526318896980-cf78c088247c?auto=format&fit=crop&w=900&q=80",
    title: "Late-night room",
  },
  {
    src: "https://images.unsplash.com/photo-1618841557871-b4664fbf0cb3?auto=format&fit=crop&w=900&q=80",
    title: "House toppings",
  },
];

function BowlIcon() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className="h-5 w-5 fill-none stroke-current">
      <path d="M8 22c0 10 7.2 18 16 18s16-8 16-18H8Z" strokeWidth="2.4" />
      <path d="M14 17c2-3 6-5 10-5s8 2 10 5" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M19 9c1.8 1.8 1.8 4.2 0 6" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M25 8c1.8 2 1.8 4.5 0 6.5" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M31 9c1.8 1.8 1.8 4.2 0 6" strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  );
}

function ChiliIcon() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className="h-5 w-5 fill-none stroke-current">
      <path
        d="M32 14c3.3-.7 6 1 7 4.2M18 20c2-4.7 7-8 13-8 2 10-2 21.3-13.3 23.8C9.8 37.5 6.4 29 9.6 23.4c1.7-3 4.5-4.8 8.4-3.4Z"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M27 11c-.2-3.4-2.1-5.8-5.7-7" strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  );
}

function LeafIcon() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className="h-5 w-5 fill-none stroke-current">
      <path
        d="M39 10c-14 0-25 7.4-28 20.5-.7 3.1-.6 6 .2 8.5 2.5.8 5.3.9 8.2.2C32.5 36.1 40 25 39 10Z"
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
      <path d="M15 32c4-5.5 9.3-10 16-13.4" strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  );
}

function SparkIcon() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className="h-5 w-5 fill-none stroke-current">
      <path
        d="m24 6 3.6 10.4L38 20l-10.4 3.6L24 34l-3.6-10.4L10 20l10.4-3.6L24 6ZM36.5 31l1.5 4.5 4.5 1.5-4.5 1.5-1.5 4.5-1.5-4.5-4.5-1.5 4.5-1.5 1.5-4.5ZM11.5 10l1.2 3.3 3.3 1.2-3.3 1.2-1.2 3.3-1.2-3.3L7 14.5l3.3-1.2L11.5 10Z"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconBadge({ icon }: { icon: MenuItem["icon"] }) {
  const iconMap = {
    bowl: <BowlIcon />,
    chili: <ChiliIcon />,
    leaf: <LeafIcon />,
    spark: <SparkIcon />,
  };

  return (
    <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#f5dfb6] text-ember">
      {iconMap[icon]}
    </span>
  );
}

export default function Home() {
  return (
    <main className="bg-cream text-ink">
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(120deg,_rgba(35,24,21,0.96)_0%,_rgba(66,32,24,0.87)_35%,_rgba(152,69,36,0.76)_100%)]" />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1557872943-16a5ac26437e?auto=format&fit=crop&w=1600&q=80)",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(245,223,182,0.2),_transparent_34%),radial-gradient(circle_at_bottom_right,_rgba(217,157,63,0.22),_transparent_28%)]" />
        <div className="absolute -left-20 top-28 h-48 w-48 rounded-full border border-white/20" />
        <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col px-6 pb-16 pt-6 text-cream md:px-10 lg:px-12">
          <header className="flex items-center justify-between border-b border-white/15 pb-4">
            <div>
              <p className="font-display text-3xl tracking-[0.2em]">NOODLE THEORY</p>
              <p className="text-sm uppercase tracking-[0.32em] text-cream/70">
                Seattle Ramen Bar
              </p>
            </div>
            <a
              href="#visit"
              className="rounded-full border border-white/25 px-4 py-2 text-sm font-medium transition hover:bg-white/10"
            >
              Visit Tonight
            </a>
          </header>

          <div className="grid flex-1 items-center gap-12 py-12 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
            <div className="max-w-2xl">
              <p className="mb-4 inline-flex rounded-full border border-broth/30 bg-white/10 px-4 py-2 text-sm uppercase tracking-[0.25em] text-broth backdrop-blur">
                Featured On Seattle Spoon Weekly
              </p>
              <h1 className="font-display text-6xl leading-[0.9] sm:text-7xl lg:text-8xl">
                Deep broth.
                <br />
                Bright nights.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-cream/80">
                Tucked beside Pike Place, Noodle Theory is a 22-seat ramen bar
                built for slow-simmered tonkotsu, midnight noodles, and the kind
                of cozy counter service that turns a quick dinner into a ritual.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#menu"
                  className="rounded-full bg-broth px-6 py-3 text-center text-sm font-bold uppercase tracking-[0.2em] text-ink transition hover:bg-[#ffe7b9]"
                >
                  Explore Menu
                </a>
                <a
                  href="tel:+12065550164"
                  className="rounded-full border border-white/25 px-6 py-3 text-center text-sm font-bold uppercase tracking-[0.2em] transition hover:bg-white/10"
                >
                  Call for Pickup
                </a>
              </div>
              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {[
                  ["18 hr", "broth simmer"],
                  ["22 seats", "counter + window bar"],
                  ["4.9 stars", "locals love us"],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="rounded-3xl border border-white/12 bg-white/10 p-4 backdrop-blur"
                  >
                    <p className="font-display text-3xl">{value}</p>
                    <p className="mt-1 text-sm uppercase tracking-[0.18em] text-cream/70">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4">
              <div className="grid gap-4 sm:grid-cols-[1.05fr_0.95fr]">
                <div className="overflow-hidden rounded-[2rem] border border-white/15 bg-white/10 shadow-card backdrop-blur">
                  <img
                    src="https://images.unsplash.com/photo-1618841557871-b4664fbf0cb3?auto=format&fit=crop&w=900&q=80"
                    alt="Signature ramen bowl with egg and chashu"
                    className="h-[22rem] w-full object-cover"
                  />
                </div>
                <div className="grid gap-4">
                  <div className="rounded-[2rem] border border-white/15 bg-[#f6ead5] p-5 text-ink shadow-card">
                    <div className="flex items-center justify-between">
                      <p className="font-display text-3xl">Tonight&apos;s Pour</p>
                      <span className="rounded-full bg-ember px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-cream">
                        House Pick
                      </span>
                    </div>
                    <p className="mt-4 text-sm leading-7 text-[#544440]">
                      Pork broth with black garlic oil, springy noodles, and
                      chashu torched to order for a smoky finish.
                    </p>
                    <div className="mt-5 flex items-center gap-3">
                      <IconBadge icon="bowl" />
                      <div>
                        <p className="text-sm uppercase tracking-[0.18em] text-ember">
                          Theory Tonkotsu
                        </p>
                        <p className="text-sm text-[#6b5a55]">$18 signature bowl</p>
                      </div>
                    </div>
                  </div>
                  <div className="overflow-hidden rounded-[2rem] border border-white/15 bg-white/10 shadow-card backdrop-blur">
                    <img
                      src="https://images.unsplash.com/photo-1526318896980-cf78c088247c?auto=format&fit=crop&w=900&q=80"
                      alt="Warm ramen bar dining room"
                      className="h-[11rem] w-full object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  ["House-made noodles", "Cut fresh every morning"],
                  ["Small room energy", "Counter seats with vinyl soundtrack"],
                  ["Festival weekend", "Pickup slots fill after 6 PM"],
                ].map(([title, copy]) => (
                  <div
                    key={title}
                    className="rounded-[1.6rem] border border-white/12 bg-black/15 p-4 backdrop-blur"
                  >
                    <p className="text-sm font-bold uppercase tracking-[0.18em] text-broth">
                      {title}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-cream/75">{copy}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-ember">
              Our Vibe
            </p>
            <h2 className="mt-4 font-display text-5xl leading-tight text-ink">
              Steam in the window. Vinyl in the room. Broth that earns repeat visits.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {features.map((item) => (
              <div
                key={item.title}
                className="rounded-[1.75rem] border border-[#e7d3ba] bg-white p-6 shadow-card"
              >
                <div className="flex items-center gap-4">
                  <IconBadge icon={item.icon} />
                  <div>
                    <p className="font-display text-3xl text-ink">{item.title}</p>
                    <p className="mt-2 text-base leading-7 text-[#564844]">{item.copy}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(180deg,_#f9f1e3_0%,_#f3e2c8_100%)] py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-ember">
                Photo Journal
              </p>
              <h2 className="mt-3 font-display text-5xl text-ink">
                More appetite, less empty space
              </h2>
            </div>
            <p className="max-w-xl text-base leading-7 text-[#5e504c]">
              The room should feel warm before anyone takes the first bite, so
              the page now leans on real food and space imagery instead of just blocks.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-[1.1fr_0.9fr_0.9fr]">
            {gallery.map((item, index) => (
              <article
                key={item.title}
                className={`group relative overflow-hidden rounded-[2rem] ${
                  index === 0 ? "md:row-span-2" : ""
                }`}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className={`w-full object-cover transition duration-500 group-hover:scale-105 ${
                    index === 0 ? "h-[31rem]" : "h-[15rem]"
                  }`}
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,_transparent_35%,_rgba(35,24,21,0.8)_100%)]" />
                <div className="absolute bottom-0 left-0 right-0 p-5 text-cream">
                  <p className="text-xs uppercase tracking-[0.22em] text-broth">
                    Noodle Theory
                  </p>
                  <p className="mt-2 font-display text-3xl">{item.title}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="menu" className="py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-ember">
                Menu Highlights
              </p>
              <h2 className="mt-3 font-display text-5xl text-ink">Slurp-worthy favorites</h2>
            </div>
            <p className="max-w-xl text-base leading-7 text-[#5e504c]">
              Built around long-simmered broth, springy noodles, and small plates
              worth ordering for the table.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {menu.map((item) => (
              <article
                key={item.name}
                className="rounded-[2rem] border border-[#e8d3b6] bg-white p-6 shadow-card transition hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <IconBadge icon={item.icon} />
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <h3 className="font-display text-3xl text-ink">{item.name}</h3>
                      <p className="rounded-full bg-ink px-4 py-2 text-sm font-bold text-cream">
                        {item.price}
                      </p>
                    </div>
                    <div className="mt-3 flex flex-wrap items-center gap-3">
                      <span className="rounded-full bg-[#f9f1e3] px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-ember">
                        {item.tag}
                      </span>
                    </div>
                    <p className="mt-4 max-w-lg text-sm leading-7 text-[#5e504c]">
                      {item.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="visit" className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] bg-ink p-8 text-cream shadow-card">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-gold">
              Visit Noodle Theory
            </p>
            <h2 className="mt-4 font-display text-5xl leading-tight">
              Find us just off the market, steps from the waterfront.
            </h2>
            <div className="mt-8 space-y-6">
              <div className="flex items-start gap-4">
                <IconBadge icon="spark" />
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-cream/60">
                    Address
                  </p>
                  <p className="mt-2 text-lg leading-8">
                    214 Pine Street
                    <br />
                    Seattle, WA 98101
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <IconBadge icon="bowl" />
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-cream/60">
                    Contact
                  </p>
                  <p className="mt-2 text-lg leading-8">
                    <a href="tel:+12065550164" className="hover:text-broth">
                      (206) 555-0164
                    </a>
                    <br />
                    <a href="mailto:hello@noodletheory.com" className="hover:text-broth">
                      hello@noodletheory.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="overflow-hidden rounded-[2rem] border border-[#e7d3ba] bg-white shadow-card">
              <iframe
                title="Noodle Theory map"
                src="https://www.google.com/maps?q=214%20Pine%20Street%20Seattle%20WA%2098101&z=15&output=embed"
                className="h-[320px] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="rounded-[2rem] border border-[#e7d3ba] bg-white p-6 shadow-card">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.25em] text-ember">
                    Hours
                  </p>
                  <h3 className="mt-2 font-display text-4xl text-ink">Open late, often</h3>
                </div>
                <a
                  href="https://maps.google.com/?q=214+Pine+Street+Seattle+WA+98101"
                  className="rounded-full bg-ember px-5 py-3 text-sm font-bold uppercase tracking-[0.18em] text-cream transition hover:bg-[#a83f25]"
                >
                  Get Directions
                </a>
              </div>
              <div className="mt-6 divide-y divide-[#ead9c1]">
                {hours.map(([day, time]) => (
                  <div
                    key={day}
                    className="flex items-center justify-between gap-4 py-4 text-sm sm:text-base"
                  >
                    <span className="font-medium text-[#4c403d]">{day}</span>
                    <span className="text-[#6e5f5a]">{time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-8 md:px-10 lg:px-12">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-[linear-gradient(135deg,_#233b33_0%,_#365347_100%)] text-cream shadow-card lg:grid lg:grid-cols-[1.15fr_0.85fr]">
          <div className="px-8 py-10">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-gold">
              Weekend Festival Rush
            </p>
            <h2 className="mt-3 font-display text-5xl leading-tight">
              Order early, then come hungry.
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-cream/80">
              Pickup slots fill fast after 6 PM on Fridays and Saturdays. Call
              ahead for broth reservations, group orders, and same-day catering trays.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="tel:+12065550164"
                className="rounded-full bg-broth px-7 py-4 text-center text-sm font-bold uppercase tracking-[0.2em] text-ink transition hover:bg-[#ffe7b9]"
              >
                Order Now
              </a>
              <a
                href="#menu"
                className="rounded-full border border-white/20 px-7 py-4 text-center text-sm font-bold uppercase tracking-[0.2em] transition hover:bg-white/10"
              >
                See Bowls
              </a>
            </div>
          </div>
          <div className="min-h-[18rem]">
            <img
              src="https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1200&q=80"
              alt="Ramen bowl and side dishes on a table"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
