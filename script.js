const photos = [
  { id: "01", title: { tr: "Şehir üstünde gün batımı", en: "Sunset over the city" }, place: { tr: "Trabzon, Karşıyaka", en: "Trabzon, Karşıyaka" }, src: "images/01-bogaz-gun-batimi.JPEG", category: "city", ratio: 1.777, span: 7, offset: "right", orientation: "ccw" },
  { id: "02", title: { tr: "Geceye doğru", en: "Into the night" }, place: { tr: "Uçuştan", en: "From the flight" }, src: "images/02-ucaktan-gece.JPEG", category: "journey", ratio: 1.777, span: 5, offset: "middle", camera: { tr: "Apple iPhone 14 Pro ile çekildi", en: "Shot on Apple iPhone 14 Pro" } },
  { id: "03", title: { tr: "Kız Kulesi, gece", en: "Maiden Tower at night" }, place: { tr: "Harem Sahil Yolu, Üsküdar, İstanbul", en: "Harem Coastal Road, Üsküdar, Istanbul" }, src: "images/03-kiz-kulesi-gece.JPEG", category: "city", ratio: .563, span: 4, camera: { tr: "Apple iPhone 14 Pro ile çekildi", en: "Shot on Apple iPhone 14 Pro" } },
  { id: "04", title: { tr: "Galata’da gece", en: "Night in Galata" }, place: { tr: "Küçük Hendek Caddesi, Şahkulu, Beyoğlu, İstanbul", en: "Küçük Hendek Street, Şahkulu, Beyoğlu, Istanbul" }, src: "images/04-galata-kulesi-gece.JPEG", category: "city", ratio: .563, span: 4, camera: { tr: "Apple iPhone 14 Pro ile çekildi", en: "Shot on Apple iPhone 14 Pro" } },
  { id: "05", title: { tr: "Boğaz kıyısında", en: "By the Bosphorus" }, place: { tr: "Ortaköy, İstanbul", en: "Ortakoy, Istanbul" }, src: "images/05-cami-ve-bogaz-gece.JPEG", category: "city", ratio: .562, span: 4, camera: { tr: "Apple iPhone 14 Pro ile çekildi", en: "Shot on Apple iPhone 14 Pro" } },
  { id: "06", title: { tr: "Kız Kulesi, gündüz", en: "Maiden Tower by day" }, place: { tr: "Salacak, Üsküdar, İstanbul", en: "Salacak, Üsküdar, Istanbul" }, src: "images/06-kiz-kulesi-gunduz.JPEG", category: "city", ratio: 1.777, span: 6, camera: { tr: "Apple iPhone 14 Pro ile çekildi", en: "Shot on Apple iPhone 14 Pro" } },
  { id: "07", title: { tr: "Köprü ışıkları", en: "Bridge lights" }, place: { tr: "Mecidiye, Beşiktaş, İstanbul", en: "Mecidiye, Beşiktaş, Istanbul" }, src: "images/07-bogaz-koprusu-gece.JPEG", category: "city", ratio: 1.777, span: 6, camera: { tr: "Apple iPhone 14 Pro ile çekildi", en: "Shot on Apple iPhone 14 Pro" } },
  { id: "08", title: { tr: "Bulutların arasında gün batımı", en: "Sunset among the clouds" }, place: { tr: "Maçka, Trabzon", en: "Maçka, Trabzon" }, src: "images/IMG_5974.JPEG", category: "nature", ratio: .75, span: 5, offset: "right" },
  { id: "09", title: { tr: "Ormanın içinden akan su", en: "Water through the forest" }, place: { tr: "Fırtına Deresi", en: "Fırtına Deresi" }, src: "images/IMG_2396_jpg.JPEG", category: "nature", ratio: .563, span: 7 },
  { id: "10", title: { tr: "Nehir kıyısında mola", en: "A pause by the river" }, place: { tr: "Yukarı Şimşirli, Çamlıhemşin, Rize", en: "Yukarı Şimşirli, Çamlıhemşin, Rize" }, src: "images/FullSizeRender.JPEG", category: "nature", ratio: .563, span: 4, offset: "middle" },
  { id: "11", title: { tr: "Ege kıyısı", en: "Aegean coast" }, place: { tr: "Datça, Muğla", en: "Datça, Muğla" }, src: "images/IMG_8906.JPEG", category: "nature", ratio: 1.777, span: 8 },
  { id: "12", title: { tr: "Dağ sırtları", en: "Mountain ridges" }, place: { tr: "Yüceyurt, Araklı, Trabzon", en: "Yüceyurt, Araklı, Trabzon" }, src: "images/dji_fly_20260702_162142_410_1783001082585_photo_optimized.JPEG", category: "nature", ratio: 1.777, span: 5, offset: "right" },
  { id: "13", title: { tr: "Şehirde gün batımı", en: "Sunset over the city" }, place: { tr: "Tel Abyad, Suriye", en: "Tell Abyad, Syria" }, src: "images/IMG_5923.JPEG", category: "city", ratio: 1.333, span: 7 },
  { id: "14", type: "video", title: { tr: "Zigana Dağı", en: "Mount Zigana" }, place: { tr: "Zigana Dağı", en: "Mount Zigana" }, src: "images/IMG_4171.MP4", category: "journey", ratio: 1.5, span: 6 },
  { id: "15", title: { tr: "Yola doğru", en: "Along the road" }, place: { tr: "Van, Türkiye", en: "Van, Türkiye" }, src: "images/IMG_0274.JPEG", category: "journey", ratio: 1.333, span: 7, offset: "right", camera: { tr: "Apple iPhone 11 ile çekildi", en: "Shot on Apple iPhone 11" } },
  { id: "16", title: { tr: "Gecenin renkleri", en: "Colors of the night" }, place: { tr: "Ortahisar, Trabzon", en: "Ortahisar, Trabzon" }, src: "images/IMG_1591.JPEG", category: "city", ratio: 1.333, span: 5, offset: "middle", camera: { tr: "Apple iPhone 11 ile çekildi", en: "Shot on Apple iPhone 11" } },
  { id: "17", title: { tr: "Tribünlerden bir an", en: "A moment from the stands" }, place: { tr: "Papara Park, Akyazı, Trabzon", en: "Papara Park, Akyazı, Trabzon" }, src: "images/IMG_1671.JPEG", category: "city", ratio: 1.333, span: 8, offset: "right", camera: { tr: "Apple iPhone 11 ile çekildi", en: "Shot on Apple iPhone 11" } },
  { id: "18", title: { tr: "Bulutların üstünde", en: "Above the clouds" }, place: { tr: "Uçuş sırasında", en: "In flight" }, src: "images/IMG_1845.JPEG", category: "journey", ratio: .75, span: 5, offset: "middle", camera: { tr: "Apple iPhone 11 ile çekildi", en: "Shot on Apple iPhone 11" } },
  { id: "19", title: { tr: "İskelede bir an", en: "A moment by the pier" }, place: { tr: "Kadıköy, İstanbul", en: "Kadıköy, Istanbul" }, src: "images/IMG_1864.JPEG", category: "city", ratio: 1.333, span: 7, offset: "right", camera: { tr: "Apple iPhone 11 ile çekildi", en: "Shot on Apple iPhone 11" } },
  { id: "20", title: { tr: "Işık ve gölge", en: "Light and shadow" }, place: { tr: "Konum belirtilmedi", en: "Location unrecorded" }, src: "images/IMG_4832.JPEG", category: "city", ratio: 1.777, span: 4 },
  { id: "21", title: { tr: "Göğü yaran ışık", en: "A flash across the sky" }, place: { tr: "Konum belirtilmedi", en: "Location unrecorded" }, src: "images/IMG_5194.JPEG", category: "nature", ratio: 2.164, span: 8, offset: "middle" },
  { id: "22", title: { tr: "Yola çıkmadan önce", en: "Before takeoff" }, place: { tr: "Yüksekova Havalimanı, Hakkâri", en: "Yüksekova Airport, Hakkâri" }, src: "images/IMG_5727.JPEG", category: "journey", ratio: .75, span: 5, offset: "right", camera: { tr: "Apple iPhone 11 ile çekildi", en: "Shot on Apple iPhone 11" } },
  { id: "23", title: { tr: "Dağların arasındaki şehir", en: "A town between the mountains" }, place: { tr: "Torul, Gümüşhane", en: "Torul, Gümüşhane" }, src: "images/IMG_5952.JPEG", category: "nature", ratio: 1.333, span: 8, camera: { tr: "Apple iPhone 11 ile çekildi", en: "Shot on Apple iPhone 11" } },
  { id: "24", title: { tr: "Bulutların eşiğinde", en: "At the edge of the clouds" }, place: { tr: "Torul, Gümüşhane", en: "Torul, Gümüşhane" }, src: "images/IMG_5970.JPEG", category: "nature", ratio: .75, span: 5, offset: "middle", camera: { tr: "Apple iPhone 11 ile çekildi", en: "Shot on Apple iPhone 11" } },
  { id: "25", title: { tr: "Ay ışığında dağlar", en: "Mountains in moonlight" }, place: { tr: "Hakkâri, Türkiye", en: "Hakkâri, Türkiye" }, src: "images/IMG_0485.JPEG", category: "nature", ratio: 1.333, span: 7, offset: "right", camera: { tr: "Apple iPhone 11 ile çekildi", en: "Shot on Apple iPhone 11" } },
  { id: "26", title: { tr: "Gece ışığında yapraklar", en: "Leaves in the night light" }, place: { tr: "Ortahisar, Trabzon", en: "Ortahisar, Trabzon" }, src: "images/IMG_1582.JPEG", category: "nature", ratio: .75, span: 4, camera: { tr: "Apple iPhone 11 ile çekildi", en: "Shot on Apple iPhone 11" } },
  { id: "27", title: { tr: "Sahanın ışığında", en: "Under the stadium lights" }, place: { tr: "Papara Park, Akyazı, Trabzon", en: "Papara Park, Akyazı, Trabzon" }, src: "images/0F6347EC-3415-438F-A9B4-FC3F9AAF02A3.JPEG", category: "city", ratio: 1.417, span: 8, offset: "middle", camera: { tr: "Apple iPhone 11 ile çekildi", en: "Shot on Apple iPhone 11" } },
  { id: "28", title: { tr: "Akşam göğünde", en: "In the evening sky" }, place: { tr: "Hakkâri, Türkiye", en: "Hakkâri, Türkiye" }, src: "images/IMG_3664.JPEG", category: "nature", ratio: 1.417, span: 6, offset: "right", camera: { tr: "Apple iPhone 11 ile çekildi", en: "Shot on Apple iPhone 11" } }
];

const stories = [
  { id: "water", photoId: "07", items: ["03", "05", "06", "07", "11", "19"], title: { tr: "Suyun çevresinde", en: "By the water" }, description: { tr: "Gece köprü ışıkları suya düşer; gündüz kıyı çizgileri, vapurlar ve ufuk belirir. İstanbul’dan Ege’ye uzanan bu karelerde su, her manzarayı başka bir yöne açar.", en: "Bridge lights fall across the water at night; by day, ferries, shorelines and the horizon emerge. From Istanbul to the Aegean, water opens each scene in a different direction." } },
  { id: "green", photoId: "12", items: ["08", "09", "10", "12", "23", "24", "25", "26"], title: { tr: "Yeşilin içinde", en: "Within the green" }, description: { tr: "Bulutlu dağ sırtlarından ormanın içindeki akarsuya ve dağların arasındaki yerleşimlere uzanan karelerde doğa, yolun ritmini belirliyor. Kısa bir mola manzaraya daha uzun bakmak için fırsat veriyor.", en: "From cloud-covered ridges and forest streams to settlements between the mountains, nature sets the rhythm of the journey. A short pause gives the landscape room to breathe." } },
  { id: "light", photoId: "13", items: ["01", "08", "13", "18", "21", "25", "28"], title: { tr: "Işığın son hâli", en: "The last light" }, description: { tr: "Gün batımından ay ışığına, bulutların üstündeki sıcak tonlardan fırtınayı yaran kısa parıltıya… Işık, her karede manzaraya başka bir ritim veriyor.", en: "From sunset to moonlight, from warm tones above the clouds to a brief flash through a storm, light gives each scene its own rhythm." } }
];

const copy = {
  tr: {
    skipLink: "İçeriğe geç", siteHeader: "Site üst bilgisi", mainNav: "Ana menü", galleryFilters: "Galeri filtreleri", scrollLabel: "Galeriye kaydır", navGallery: "Galeri", navStories: "Hikâye", navContact: "İletişim",
    heroEyebrow: "FOTOĞRAF PORTFÖYÜ", heroLineOne: "Dünyaya başka", heroLineTwo: "bir açıdan bak.", heroSubtitle: "Işığın, zamanın ve hikâyelerin izinde.", heroCta: "Fotoğrafları keşfet", heroLocation: "TEL ABYAD, SURİYE", scroll: "KAYDIR", openHeroPhoto: "Gün batımı fotoğrafını aç",
    introKicker: "HER KARE BİR YERDEN BAŞLAR", introTitle: "Bazen bir şehir,<br>bazen yalnızca ışık.", introCopy: "Şehrin kıyısından dağların sessizliğine uzanan bu seçki; görülen yerleri, değişen ışığı ve yolda karşılaşılan küçük anları bir araya getiriyor.",
    galleryKicker: "GÖRSEL GÜNLÜK &nbsp; / &nbsp; 01—28", galleryTitle: "Seçilmiş kareler", galleryNote: "Dünyaya, farklı mesafelerden ve farklı zamanlarda bakış.", filterAll: "Tümü", filterCity: "Şehir", filterNature: "Doğa", filterJourney: "Yolculuk", countFrames: "KARE", imageLabel: "fotoğrafı aç", videoLabel: "videoyu aç", videoFallback: "Tarayıcınız bu videoyu oynatamıyor.",
    storiesKicker: "BİR ARADA GÖRÜLENLER", storiesTitle: "Fotoğraf hikâyeleri", storiesNote: "Her seçki, manzaranın içinden kısa bir anlatı çıkarıyor.", storyOpen: "Hikâyeyi görüntüle", storyCount: "KARE", storyWater: "Suyun çevresinde", storyGreen: "Yeşilin içinde", storyLight: "Işığın son hâli",
    aboutKicker: "HER AÇIDAN KARE HAKKINDA", aboutTitle: "Bakış değişince,<br><em>hikâye de değişir.</em>", aboutCopyOne: "Her Açıdan Kare, şehirlerden kıyılara ve yol üstü manzaralara uzanan kişisel bir görsel günlük. Her fotoğraf, karşılaşılan bir anı olduğu gibi saklıyor.", aboutCopyTwo: "Işığın yönü, günün saati ve durup bakmayı seçtiğimiz yer… Bazen bir kareyi anlatmaya bunlar yeter.",
    contactKicker: "BİR SONRAKİ KAREYE", contactTitle: "Bir hikâye<br>başlatalım.", contactCopy: "Projeler, iş birlikleri veya fotoğraflar üzerine konuşmak için Instagram’dan bana ulaşabilirsiniz.", footerLine: "Işığın izinde, her açıdan.", backToTop: "Başa dön",
    viewerLabel: "Fotoğraf görüntüleyici", closeViewer: "Görüntüleyiciyi kapat", previousPhoto: "Önceki fotoğraf", nextPhoto: "Sonraki fotoğraf", of: "/"
  },
  en: {
    skipLink: "Skip to content", siteHeader: "Site header", mainNav: "Main navigation", galleryFilters: "Gallery filters", scrollLabel: "Scroll to gallery", navGallery: "Gallery", navStories: "Stories", navContact: "Contact",
    heroEyebrow: "PHOTOGRAPHY PORTFOLIO", heroLineOne: "See the world", heroLineTwo: "from another angle.", heroSubtitle: "Following light, time and stories.", heroCta: "Explore the photographs", heroLocation: "TELL ABYAD, SYRIA", scroll: "SCROLL", openHeroPhoto: "Open sunset photograph",
    introKicker: "EVERY FRAME BEGINS SOMEWHERE", introTitle: "Sometimes a city,<br>sometimes only light.", introCopy: "From the edge of the city to the quiet of the mountains, this selection brings together places seen, changing light and small moments found along the way.",
    galleryKicker: "VISUAL JOURNAL &nbsp; / &nbsp; 01—28", galleryTitle: "Selected frames", galleryNote: "A view of the world from different distances and different moments.", filterAll: "All", filterCity: "City", filterNature: "Nature", filterJourney: "Journey", countFrames: "FRAMES", imageLabel: "open photograph", videoLabel: "open video", videoFallback: "Your browser cannot play this video.",
    storiesKicker: "SEEN TOGETHER", storiesTitle: "Photographic stories", storiesNote: "Each selection turns its landscapes into a short visual story.", storyOpen: "View story", storyCount: "FRAMES", storyWater: "By the water", storyGreen: "Within the green", storyLight: "The last light",
    aboutKicker: "ABOUT HER AÇIDAN KARE", aboutTitle: "Change the view,<br><em>change the story.</em>", aboutCopyOne: "Her Açıdan Kare is a personal visual journal stretching from cities to coastlines and landscapes along the way. Each photograph keeps a moment just as it was encountered.", aboutCopyTwo: "The direction of light, the hour of the day, the place where we choose to pause… Sometimes that is enough to tell the story of a frame.",
    contactKicker: "TOWARD THE NEXT FRAME", contactTitle: "Let's begin<br>a story.", contactCopy: "For projects, collaborations, or a conversation about a photograph, feel free to reach me on Instagram.", footerLine: "Following the light, from every angle.", backToTop: "Back to top",
    viewerLabel: "Photo viewer", closeViewer: "Close viewer", previousPhoto: "Previous photo", nextPhoto: "Next photo", of: "of"
  }
};

let language = "tr";
let activeFilter = "all";
let activeItems = photos;
let activeIndex = 0;
let lastFocus = null;

function syncViewportContentWidth() {
  document.documentElement.style.setProperty("--viewport-content-width", `${document.documentElement.clientWidth}px`);
}

syncViewportContentWidth();
window.addEventListener("resize", syncViewportContentWidth, { passive: true });

const gallery = document.querySelector("#gallery-grid");
const storiesGrid = document.querySelector("#stories-grid");
const galleryCount = document.querySelector("#gallery-count");
const lightbox = document.querySelector("#lightbox");
const lightboxImage = document.querySelector("#lightbox-image");
const lightboxVideo = document.querySelector("#lightbox-video");
const lightboxCaption = document.querySelector("#lightbox-caption");
const lightboxCount = document.querySelector("#lightbox-count");

function updateCopy() {
  document.documentElement.lang = language;
  document.querySelectorAll("[data-copy]").forEach((element) => {
    const value = copy[language][element.dataset.copy];
    if (value !== undefined) element.innerHTML = value;
  });
  document.querySelectorAll("[data-copy-aria]").forEach((element) => {
    const value = copy[language][element.dataset.copyAria];
    if (value !== undefined) element.setAttribute("aria-label", value);
  });
  document.querySelectorAll("[data-lang-option]").forEach((element) => {
    element.classList.toggle("is-current", element.dataset.langOption === language);
  });
  document.querySelector("#language").setAttribute("aria-label", language === "tr" ? "Switch to English" : "Türkçeye geç");
  document.querySelector("#lightbox").setAttribute("aria-label", copy[language].viewerLabel);
  document.querySelector("#hero-image").alt = language === "tr" ? "Tel Abyad üzerinde kızıl gün batımı" : "A deep red sunset over Tell Abyad";
  renderGallery();
  renderStories();
  if (lightbox.classList.contains("is-open")) showLightboxItem();
}

function photoMarkup(photo, index) {
  const isVideo = photo.type === "video";
  const title = photo.title[language];
  const place = photo.place[language];
  const media = isVideo
    ? `<video src="${photo.src}" muted playsinline preload="none" aria-label="${title}" tabindex="-1"></video><span class="play-mark" aria-hidden="true">▶</span>`
    : `<img src="${photo.src}" alt="${title} — ${place}" loading="${index < 2 ? "eager" : "lazy"}" decoding="async" ${index === 0 ? 'fetchpriority="high"' : ""} style="--ratio:${photo.ratio}">`;
  return `<article class="gallery-item" data-id="${photo.id}" data-span="${photo.span}" data-offset="${photo.offset || ""}">
    <button class="gallery-visual${photo.orientation === "ccw" ? " is-rotated" : ""}" type="button" data-photo-id="${photo.id}" aria-label="${title} — ${copy[language][isVideo ? "videoLabel" : "imageLabel"]}" style="--ratio:${photo.ratio}">
      ${media}
    </button>
    <div class="photo-meta"><div class="photo-caption"><h3 class="photo-title">${title}</h3><p class="photo-place">${place}</p></div><span class="photo-index">${photo.id} / ${String(photos.length).padStart(2, "0")}</span></div>
  </article>`;
}

function renderGallery() {
  const filtered = getGalleryPhotos();
  gallery.innerHTML = filtered.map(photoMarkup).join("");
  galleryCount.textContent = `${String(filtered.length).padStart(2, "0")} ${copy[language].countFrames}`;
  document.querySelectorAll(".filter-button").forEach((button) => {
    const isActive = button.dataset.filter === activeFilter;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function getGalleryPhotos() {
  return photos.filter((photo) => activeFilter === "all" || photo.category === activeFilter);
}

function renderStories() {
  storiesGrid.innerHTML = stories.map((story, index) => {
    const photo = photos.find((item) => item.id === story.photoId);
    return `<button class="story" type="button" data-story-id="${story.id}" aria-label="${copy[language]["story" + story.id[0].toUpperCase() + story.id.slice(1)]}">
      <img class="story-image" src="${photo.src}" alt="" loading="lazy" decoding="async">
      <span class="story-shade" aria-hidden="true"></span>
      <span class="story-copy"><span class="story-index">0${index + 1} &nbsp; / &nbsp; ${String(story.items.length).padStart(2, "0")} ${copy[language].storyCount}</span>
      <span class="story-title">${copy[language]["story" + story.id[0].toUpperCase() + story.id.slice(1)]}</span>
      <span class="story-caption">${story.description[language]}</span>
      <span class="story-cta">${copy[language].storyOpen}<span aria-hidden="true">↗</span></span></span>
    </button>`;
  }).join("");
}

function setFilter(filter) {
  activeFilter = filter;
  renderGallery();
}

function openLightbox(items, photoId, focusTarget) {
  activeItems = items;
  activeIndex = Math.max(0, activeItems.findIndex((photo) => photo.id === photoId));
  lastFocus = focusTarget || document.activeElement;
  lightbox.classList.add("is-open");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.classList.add("is-locked");
  showLightboxItem();
  document.querySelector(".lightbox-close").focus({ preventScroll: true });
}

function showLightboxItem() {
  const photo = activeItems[activeIndex];
  if (!photo) return;
  lightboxImage.classList.toggle("is-rotated", photo.orientation === "ccw");
  lightboxVideo.pause();
  lightboxVideo.hidden = photo.type !== "video";
  lightboxImage.hidden = photo.type === "video";
  if (photo.type === "video") {
    lightboxVideo.src = photo.src;
    lightboxVideo.load();
    lightboxVideo.play().catch(() => {});
  } else {
    lightboxVideo.removeAttribute("src");
    lightboxVideo.load();
    lightboxImage.src = photo.src;
    lightboxImage.alt = `${photo.title[language]} — ${photo.place[language]}`;
  }
  lightboxCaption.replaceChildren();
  const title = document.createElement("span");
  title.className = "lightbox-title";
  title.textContent = photo.title[language];
  const place = document.createElement("span");
  place.className = "lightbox-place";
  place.textContent = photo.place[language];
  lightboxCaption.append(title, place);
  if (photo.camera) {
    const device = document.createElement("span");
    device.className = "lightbox-device";
    device.textContent = photo.camera[language];
    lightboxCaption.append(device);
  }
  lightboxCount.textContent = `${String(activeIndex + 1).padStart(2, "0")} ${copy[language].of} ${String(activeItems.length).padStart(2, "0")}`;
  document.querySelector(".lightbox-prev").hidden = activeItems.length < 2;
  document.querySelector(".lightbox-next").hidden = activeItems.length < 2;
}

function closeLightbox() {
  lightboxVideo.pause();
  lightbox.classList.remove("is-open");
  lightbox.setAttribute("aria-hidden", "true");
  document.body.classList.remove("is-locked");
  if (lastFocus?.isConnected) lastFocus.focus({ preventScroll: true });
}

function moveLightbox(direction) {
  if (activeItems.length < 2) return;
  activeIndex = (activeIndex + direction + activeItems.length) % activeItems.length;
  showLightboxItem();
}

function trapLightboxTab(event) {
  if (event.key !== "Tab") return;
  const focusable = [...lightbox.querySelectorAll("button:not([hidden]), video[controls]:not([hidden])")]
    .filter((element) => !element.disabled && element.getClientRects().length > 0);
  if (!focusable.length) {
    event.preventDefault();
    document.querySelector(".lightbox-close").focus({ preventScroll: true });
    return;
  }

  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  if (event.shiftKey && (document.activeElement === first || !lightbox.contains(document.activeElement))) {
    event.preventDefault();
    last.focus({ preventScroll: true });
  } else if (!event.shiftKey && (document.activeElement === last || !lightbox.contains(document.activeElement))) {
    event.preventDefault();
    first.focus({ preventScroll: true });
  }
}

document.querySelector("#language").addEventListener("click", () => {
  language = language === "tr" ? "en" : "tr";
  updateCopy();
});

document.querySelector(".filter-list").addEventListener("click", (event) => {
  const button = event.target.closest("[data-filter]");
  if (button) setFilter(button.dataset.filter);
});

document.querySelector("#gallery-grid").addEventListener("click", (event) => {
  const button = event.target.closest("[data-photo-id]");
  if (!button) return;
  const photo = photos.find((item) => item.id === button.dataset.photoId);
  if (photo) openLightbox(getGalleryPhotos(), photo.id, button);
});

document.querySelector(".hero-image-trigger").addEventListener("click", (event) => {
  openLightbox(photos, event.currentTarget.dataset.photoId, event.currentTarget);
});

storiesGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-story-id]");
  if (!button) return;
  const story = stories.find((item) => item.id === button.dataset.storyId);
  if (!story) return;
  const collection = story.items.map((id) => photos.find((photo) => photo.id === id)).filter(Boolean);
  openLightbox(collection, collection[0]?.id, button);
});

document.querySelector(".lightbox-close").addEventListener("click", closeLightbox);
document.querySelector(".lightbox-prev").addEventListener("click", () => moveLightbox(-1));
document.querySelector(".lightbox-next").addEventListener("click", () => moveLightbox(1));
lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) closeLightbox();
});
document.addEventListener("keydown", (event) => {
  if (!lightbox.classList.contains("is-open")) return;
  if (event.key === "Tab") {
    trapLightboxTab(event);
    return;
  }
  if (event.key === "Escape") closeLightbox();
  if (event.target === lightboxVideo) return;
  if (event.key === "ArrowRight") {
    event.preventDefault();
    moveLightbox(1);
  }
  if (event.key === "ArrowLeft") {
    event.preventDefault();
    moveLightbox(-1);
  }
});

let swipeStartX = 0;
lightbox.addEventListener("touchstart", (event) => {
  swipeStartX = event.changedTouches[0]?.clientX || 0;
}, { passive: true });
lightbox.addEventListener("touchend", (event) => {
  const endX = event.changedTouches[0]?.clientX || 0;
  const distance = endX - swipeStartX;
  if (Math.abs(distance) > 55) moveLightbox(distance > 0 ? -1 : 1);
}, { passive: true });

updateCopy();
