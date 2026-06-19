import { privacyData } from "../data/privacy.js";

function renderTOC() {
  return privacyData.toc
    .map(
      (item) => `
      <li>
        <a
          href="#${item.id}"
          class="block py-2 text-slate-600 hover:text-[#2A9D8F] transition"
        >
          ${item.title}
        </a>
      </li>
    `
    )
    .join("");
}

function renderUsageSteps() {
  return privacyData.usage.items
    .map(
      (item, index) => `
      <div class="flex gap-4">
        <div
          class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#2A9D8F] text-white font-bold"
        >
          ${index + 1}
        </div>

        <p class="text-slate-600 leading-8">
          ${item}
        </p>
      </div>
    `
    )
    .join("");
}

function renderCollectedCards() {
  return privacyData.collectedData.items
    .map(
      (item) => `
      <div
        class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
      >
        <h4 class="font-bold text-lg text-slate-900 mb-2">
          ${item.title}
        </h4>

        <p class="text-slate-500">
          ${item.description}
        </p>
      </div>
    `
    )
    .join("");
}

function renderRightsCards() {
  return privacyData.rights.items
    .map(
      (item) => `
      <div class="rounded-2xl bg-white/10 p-6">
        <h4 class="text-xl font-bold mb-3">
          ${item.title}
        </h4>

        <p class="text-white/90 leading-8">
          ${item.description}
        </p>
      </div>
    `
    )
    .join("");
}

function initPrivacy() {
  const container = document.getElementById("privacy-page");

  if (!container) return;

  container.innerHTML = `
  
  <!-- HERO -->
  <section
    class="bg-gradient-to-l from-[#2A9D8F] to-[#102C52] py-20 text-white"
  >
    <div class="max-w-7xl mx-auto px-4 text-center">

      <h1 class="text-4xl lg:text-5xl font-black mb-6">
        ${privacyData.hero.title}
      </h1>

      <p class="max-w-3xl mx-auto text-lg text-white/90 leading-8">
        ${privacyData.hero.subtitle}
      </p>

    </div>
  </section>

  <!-- CONTENT -->
  <section class="max-w-7xl mx-auto px-4 py-16">

    <div class="grid grid-cols-1 lg:grid-cols-4 gap-12">

      <!-- SIDEBAR -->
      <aside class="lg:col-span-1">

        <div
          class="sticky top-24 rounded-2xl border border-slate-200 bg-white p-6"
        >

          <h3 class="font-bold text-lg mb-6">
            فهرس المحتوى
          </h3>

          <ul class="space-y-2">
            ${renderTOC()}
          </ul>

        </div>

      </aside>

      <!-- MAIN -->
      <div class="lg:col-span-3 space-y-16">

        <!-- COMMITMENT -->
        <section id="commitment">

          <h2 class="text-3xl font-bold text-[#2A9D8F] mb-6">
            ${privacyData.commitment.title}
          </h2>

          <p class="text-slate-600 leading-9">
            ${privacyData.commitment.content}
          </p>

        </section>

        <!-- COLLECTION -->
        <section id="collection">

          <h2 class="text-3xl font-bold text-[#2A9D8F] mb-6">
            ${privacyData.collectedData.title}
          </h2>

          <p class="text-slate-600 leading-9 mb-8">
            ${privacyData.collectedData.description}
          </p>

          <div class="grid md:grid-cols-2 gap-6">
            ${renderCollectedCards()}
          </div>

        </section>

        <!-- USAGE -->
        <section id="usage">

          <h2 class="text-3xl font-bold text-[#2A9D8F] mb-8">
            ${privacyData.usage.title}
          </h2>

          <div class="space-y-6">
            ${renderUsageSteps()}
          </div>

        </section>

        <!-- SECURITY BANNER -->
        <section>

          <div
            class="overflow-hidden rounded-3xl bg-gradient-to-l from-[#2A9D8F] to-[#102C52] p-10 text-center text-white"
          >
            <p class="text-xl lg:text-2xl font-bold leading-relaxed">
              ${privacyData.security.title}
            </p>
          </div>

        </section>

        <!-- COOKIES -->
        <section id="cookies">

          <h2 class="text-3xl font-bold text-[#2A9D8F] mb-6">
            ${privacyData.cookies.title}
          </h2>

          <p class="text-slate-600 leading-9">
            ${privacyData.cookies.content}
          </p>

        </section>

        <!-- RIGHTS -->
        <section id="rights">

          <div
            class="rounded-3xl bg-gradient-to-l from-[#2A9D8F] to-[#102C52] p-10 text-white"
          >

            <h2 class="text-3xl font-bold mb-8">
              ${privacyData.rights.title}
            </h2>

            <div class="grid md:grid-cols-2 gap-6">
              ${renderRightsCards()}
            </div>

          </div>

        </section>

      </div>

    </div>

  </section>

  <!-- CTA -->
  <section class="bg-slate-50 py-20">

    <div class="max-w-4xl mx-auto px-4 text-center">

      <h2 class="text-3xl font-black mb-4">
        ${privacyData.cta.title}
      </h2>

      <p class="text-slate-600 mb-8 leading-8">
        ${privacyData.cta.description}
      </p>

      <div
        class="flex flex-col sm:flex-row justify-center gap-4"
      >

        <a
          href="${privacyData.cta.supportUrl}"
          class="px-8 py-4 rounded-full bg-[#2A9D8F] text-white font-semibold"
        >
          ${privacyData.cta.supportText}
        </a>

        <a
          href="${privacyData.cta.pdfUrl}"
          class="px-8 py-4 rounded-full border border-[#2A9D8F] text-[#2A9D8F] font-semibold"
        >
          ${privacyData.cta.pdfText}
        </a>

      </div>

    </div>

  </section>
  `;
}

initPrivacy();