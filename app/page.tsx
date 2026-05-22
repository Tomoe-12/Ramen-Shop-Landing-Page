const menu = [
  {
    name: "Theory Tonkotsu",
    price: "$18",
    description:
      "Silky 18-hour pork broth, chashu, black garlic oil, ajitama, scallions.",
  },
  {
    name: "Spicy Miso Collapse",
    price: "$17",
    description:
      "Miso broth with chili crunch, sesame, roasted corn, ground pork, butter.",
  },
  {
    name: "Tokyo Shoyu Classic",
    price: "$16",
    description:
      "Clear soy broth, chicken chashu, bamboo shoots, nori, crispy shallots.",
  },
  {
    name: "Citrus Shio Garden",
    price: "$16",
    description:
      "Light sea-salt broth with yuzu, spinach, tofu puffs, and snap peas.",
  },
  {
    name: "Midnight Mazemen",
    price: "$15",
    description:
      "Brothless noodles, tare, slow-cooked pork, confit mushrooms, soft egg.",
  },
  {
    name: "Karaage Basket",
    price: "$11",
    description: "Double-fried soy-ginger chicken with kewpie lime slaw.",
  },
  {
    name: "Gyoza Theory",
    price: "$9",
    description: "Pork and napa dumplings with charred chili soy dipping sauce.",
  },
  {
    name: "Matcha Milk Jam Toast",
    price: "$8",
    description: "Thick-cut milk bread with matcha cream and black sesame brittle.",
  },
];

const hours = [
  ["Monday - Thursday", "11:30 AM - 9:30 PM"],
  ["Friday", "11:30 AM - 11:00 PM"],
  ["Saturday", "12:00 PM - 11:00 PM"],
  ["Sunday", "12:00 PM - 8:30 PM"],
];

export default function Home() {
  return (
    <main className="bg-cream text-ink">
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(217,157,63,0.32),_transparent_38%),linear-gradient(135deg,_#231815_0%,_#3b1f19_50%,_#8f3924_100%)]" />
        <div className="absolute -left-20 top-28 h-48 w-48 rounded-full border border-white/20" />
        <div className="absolute right-[-5rem] top-16 h-72 w-72 rounded-full bg-broth/10 blur-3xl" />
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

          <div className="grid flex-1 items-center gap-12 py-12 lg:grid-cols-[1.15fr_0.85fr] lg:py-20">
            <div className="max-w-2xl">
              <p className="mb-4 inline-flex rounded-full border border-broth/30 bg-white/10 px-4 py-2 text-sm uppercase tracking-[0.25em] text-broth">
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
                  <div key={label} className="rounded-3xl border border-white/12 bg-white/10 p-4 backdrop-blur">
                    <p className="font-display text-3xl">{value}</p>
                    <p className="mt-1 text-sm uppercase tracking-[0.18em] text-cream/70">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-6 rounded-[2rem] border border-white/15" />
              <div className="relative rounded-[2.5rem] bg-[linear-gradient(180deg,_rgba(249,241,227,0.18),_rgba(249,241,227,0.05))] p-5 shadow-card backdrop-blur">
                <div className="rounded-[2rem] bg-[#f4ead7] p-6 text-ink">
                  <div className="flex items-center justify-between">
                    <p className="font-display text-4xl">Tonight&apos;s Pour</p>
                    <span className="rounded-full bg-ember px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-cream">
                      House Pick
                    </span>
                  </div>
                  <div className="mt-6 rounded-[1.75rem] bg-[radial-gradient(circle_at_50%_35%,_#f6d486_0%,_#c56233_34%,_#6f2619_72%)] p-6">
                    <div className="mx-auto flex aspect-square max-w-[18rem] items-center justify-center rounded-full border-[18px] border-[#2f201d] bg-[radial-gradient(circle_at_50%_30%,_#ffe59c_0%,_#d48136_42%,_#6c2c1c_100%)] shadow-[inset_0_15px_35px_rgba(255,255,255,0.15)]">
                      <div className="h-40 w-40 rounded-full border border-white/20 bg-[radial-gradient(circle,_rgba(255,255,255,0.18),_transparent_62%)]" />
                    </div>
                  </div>
                  <div className="mt-6 rounded-[1.5rem] bg-white p-5 shadow-card">
                    <p className="text-sm uppercase tracking-[0.2em] text-ember">
                      Theory Tonkotsu
                    </p>
                    <p className="mt-3 text-sm leading-7 text-[#544440]">
                      Pork broth with black garlic oil, hand-cut noodles, and
                      chashu torched to order. Rich, glossy, and built to be
                      gone in under ten minutes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-ember">
              Our Vibe
            </p>
            <h2 className="mt-4 font-display text-5xl leading-tight text-ink">
              A neighborhood ramen bar with serious broth discipline.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {[
              "Handmade noodles prepped every morning for chew and bounce.",
              "Counter-first service designed for solo lunches and date-night slurping alike.",
              "Local sake, Japanese vinyl playlists, and a warm amber glow after dark.",
              "Vegetarian-friendly options that still feel like a full dinner, not an afterthought.",
            ].map((item) => (
              <div key={item} className="rounded-[1.75rem] border border-[#e7d3ba] bg-white p-6 shadow-card">
                <p className="text-base leading-7 text-[#564844]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="menu"
        className="bg-[linear-gradient(180deg,_#f9f1e3_0%,_#f3e2c8_100%)] py-20"
      >
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
                className="rounded-[2rem] border border-[#e8d3b6] bg-white p-6 shadow-card"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-3xl text-ink">{item.name}</h3>
                    <p className="mt-3 max-w-lg text-sm leading-7 text-[#5e504c]">
                      {item.description}
                    </p>
                  </div>
                  <p className="rounded-full bg-ink px-4 py-2 text-sm font-bold text-cream">
                    {item.price}
                  </p>
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
                  <div key={day} className="flex items-center justify-between gap-4 py-4 text-sm sm:text-base">
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
        <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-[linear-gradient(135deg,_#233b33_0%,_#365347_100%)] px-8 py-10 text-cream shadow-card">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
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
            </div>
            <a
              href="tel:+12065550164"
              className="rounded-full bg-broth px-7 py-4 text-center text-sm font-bold uppercase tracking-[0.2em] text-ink transition hover:bg-[#ffe7b9]"
            >
              Order Now
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
