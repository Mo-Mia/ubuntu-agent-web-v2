# Image Requirements Report

## General Site Images

### Logo (`components/header.tsx`)
- **Current:** `/placeholder.svg?height=48&width=192`
- **Purpose:** Site logo in the main header.
- **Suggestion:** Replace with the final SVG logo file. Ensure it's optimised.
- **Filename:** `public/ubuntu-agent-logo.svg`

### OG Image (`app/layout.tsx`)
- **Current:** `/images/og-image.jpg` (Assumed name, needs creation)
- **Purpose:** Open Graph image for social sharing previews.
- **Suggestion:** Create a branded image (1200x630px) that represents the site's purpose.
- **AI Prompt:** "Create a professional Open Graph image (1200x630px) for 'The Ubuntu Agent', a real estate business focused on community impact in Johannesburg. Include the logo, the tagline 'Real estate with real impact', and a subtle background image of a modern Johannesburg neighborhood. Use the brand colours navy (#0C0F24) and gold (#D4AF37)."
- **Filename:** `public/images/og-image.jpg`

### Twitter Image (`app/layout.tsx`)
- **Current:** `/images/twitter-image.jpg` (Assumed name, needs creation)
- **Purpose:** Image for Twitter cards.
- **Suggestion:** Can often be the same as the OG image, but ensure it meets Twitter's aspect ratio recommendations if different.
- **AI Prompt:** (Use the same as OG Image prompt, or adjust dimensions if needed) "Create a professional Twitter card image (aim for 2:1 ratio, e.g., 1200x600px) for 'The Ubuntu Agent', a real estate business focused on community impact in Johannesburg. Include the logo, the tagline 'Real estate with real impact', and a subtle background image of a modern Johannesburg neighborhood. Use the brand colours navy (#0C0F24) and gold (#D4AF37)."
- **Filename:** `public/images/twitter-image.jpg`

### PWA Icons (`public/manifest.json`)
- **Current:** `/icons/icon-192x192.png`, `/icons/icon-512x512.png` (Need creation)
- **Purpose:** Icons for Progressive Web App installation and display.
- **Suggestion:** Create PNG versions of the logo (just the icon part, perhaps the 'U' or a simplified symbol) in 192x192 and 512x512 sizes.
- **AI Prompt (for symbol):** "Create a simple, modern icon using the letter 'U' incorporating African design elements, suitable for an app icon. Use the brand colours navy (#0C0F24) and gold (#D4AF37). Provide transparent background PNGs." (Then resize)
- **Filenames:** `public/icons/icon-192x192.png`, `public/icons/icon-512x512.png`

## Page Specific Backgrounds (`tailwind.config.ts`)

- **Purpose:** Large background images for hero sections on various pages, overlaid with a dark gradient.
- **Suggestion:** Use high-quality, relevant stock photos. Optimise them well.

1.  **`/images/hero-bg.jpg` (Homepage)**
    - **Search Term:** "Johannesburg skyline warm sunset" OR "Modern diverse Johannesburg neighborhood aerial view"
2.  **`/images/about-bg.jpg` (About Page)**
    - **Search Term:** "Johannesburg community gathering diverse people smiling" OR "Portrait friendly real estate agent South Africa" (Consider using a real picture of Gary here eventually)
3.  **`/images/giving-bg.jpg` (Ubuntu Giving Page)**
    - **Search Term:** "Hands holding seedling South Africa" OR "Children smiling diverse classroom Johannesburg"
4.  **`/images/services-bg.jpg` (Services Page)**
    - **Search Term:** "Modern house exterior Johannesburg suburbs" OR "Happy family receiving keys new home South Africa"
5.  **`/images/listings-bg.jpg` (Listings Page)**
    - **Search Term:** "Variety of Johannesburg homes aerial view" OR "For Sale sign front suburban house South Africa"
6.  **`/images/resources-bg.jpg` (Resources Page)**
    - **Search Term:** "Person reading documents home buying South Africa" OR "Financial planning calculator desk"
7.  **`/images/contact-bg.jpg` (Contact Page)**
    - **Search Term:** "Friendly handshake diverse people South Africa" OR "Close up phone email icons modern design"

## Component Images

### Testimonial Photos (`app/page.tsx`, `app/about/page.tsx`)
- **Current:** `/placeholder.svg?height=48&width=48` (Multiple instances)
- **Purpose:** Small profile pictures for client testimonials.
- **Suggestion:** Replace with generic, diverse, professional-looking headshots.
- **Stock Search Term:** "professional headshot diverse person" OR "happy homeowner portrait"
- **AI Prompt (if stock is poor):** "Create a realistic profile picture (48x48px) of a [e.g., 'smiling middle-aged South African woman', 'young professional man Johannesburg']. Neutral background." (Generate several variations)
- **Filenames:** `public/images/testimonials/client-1.jpg`, `public/images/testimonials/client-2.jpg`, etc.

### Blog Post Thumbnails (`app/page.tsx`, `app/resources/page.tsx`, `components/blog-card.tsx`)
- **Current:** `/placeholder.svg?height=240&width=360` (Multiple instances)
- **Purpose:** Featured images for blog posts or resource links.
- **Suggestion:** Use relevant stock photos or custom graphics for each post/resource.
- **Stock Search Term (Example - Market Update):** "Johannesburg real estate market graph"
- **Stock Search Term (Example - Buying Guide):** "Couple looking at house plans South Africa"
- **AI Prompt (Example - Ubuntu Philosophy):** "Illustrate the concept of Ubuntu - interconnectedness and community - using abstract African patterns and warm colours (gold #D4AF37, terracotta #E27D60). Suitable for a blog thumbnail (360x240px)."
- **Filenames:** `public/images/blog/post-slug-thumbnail.jpg`, `public/images/resources/resource-slug-thumbnail.jpg`

### Charity Logos/Images (`components/charity-card.tsx`, `components/charity/CharityCard.tsx`)
- **Current:** `/placeholder.svg`, `/images/charity/placeholder.jpg`
- **Purpose:** Images representing the supported charities.
- **Suggestion:** Ideally, use the official logos of the actual charities supported. If placeholders are needed temporarily:
- **Stock Search Term:** "charity logo placeholder" OR "children education Africa" OR "community support hands"
- **AI Prompt (Generic):** "Professional headshot of a male real estate agent in Johannesburg neighborhood. Use the brand colours navy (#0C0F24) and gold (#D4AF37)."
- **Filenames:** `public/images/charity/charity-name-logo.png` (preferred), `public/images/charity/generic-charity-1.jpg` (placeholder)

### Service/Feature Icons (`components/ubuntu-visualizer.tsx`)
- **Current:** `/placeholder.svg?height=64&width=64` (Multiple instances)
- **Purpose:** Icons representing concepts like 'Community', 'Integrity', etc. in the Ubuntu Visualizer.
- **Suggestion:** Use consistent, custom-designed icons or a high-quality icon set (like Lucide icons, which seem to be in use elsewhere). If generating:
- **AI Prompt (Example - Integrity):** "Create a simple, clean line icon representing 'Integrity'. Perhaps scales, a shield, or an abstract symbol of trust. Use gold colour (#D4AF37) on a transparent background."
- **Filenames:** `public/images/icons/concept-community.svg`, `public/images/icons/concept-integrity.svg`, etc.

### Page Hero Images (`app/*/page.tsx`, `components/ui/HeroImage.tsx`)
- **Current:** `/placeholder.svg?height=1080&width=1920`, `/images/backgrounds/johannesburg-skyline.jpg`
- **Purpose:** Main hero image for various pages (About, Services, Ubuntu Giving, etc.). Distinct from the *background* images in `tailwind.config.ts`.
- **Suggestion:** Use high-quality, relevant images specific to the page content.
- **About Page (`app/about/page.tsx`):**
    - **AI Prompt:** "Professional portrait photo of Gary Berkowitz, smiling warmly, in a modern Johannesburg office setting or outdoors with a blurred city background." (Use a real photo if possible)
- **Services Page (`app/services/page.tsx`):**
    - **Stock Search Term:** "Diverse group collaborating real estate office South Africa" OR "Architectural details modern Johannesburg home"
- **Ubuntu Giving Page (`app/ubuntu-giving/page.tsx`):**
    - **Stock Search Term:** "Smiling children receiving school supplies Johannesburg" OR "Community garden project South Africa volunteers"
- **Listings Page (`app/listings/page.tsx`):**
    - **Stock Search Term:** "Beautiful modern home exterior sunny day Johannesburg"
- **Resources Page (`app/resources/page.tsx`):**
    - **Stock Search Term:** "Person using laptop researching home loans South Africa"
- **Filenames:** `public/images/hero/about-hero.jpg`, `public/images/hero/services-hero.jpg`, etc.

### Miscellaneous Placeholders
- **Johannesburg Map (`components/area-map.tsx`):**
    - **Current:** `/placeholder.svg?height=400&width=600`
    - **Suggestion:** Embed an interactive map (like Google Maps) or use a high-quality static map image of Johannesburg highlighting key areas.
    - **Stock Search Term:** "Stylised map Johannesburg neighborhoods"
- **Various Content Images (`app/services/page.tsx`, `app/listings/page.tsx`, `app/about/page.tsx`, etc.):**
    - **Current:** `/placeholder.svg?height=400&width=600` (Multiple instances within page content)
    - **Purpose:** Illustrative images accompanying text sections.
    - **Suggestion:** Use relevant stock photos or custom graphics.
    - **Example (Services - Buyer Section):**
        - **Stock Search Term:** "Couple happily inspecting a house interior South Africa"
    - **Example (Listings - Property Type):**
        - **Stock Search Term:** "Modern apartment building exterior Johannesburg"
    - **Example (About - eXp Realty Logo):**
        - **Current:** `/placeholder.svg?height=40&width=128`
        - **Suggestion:** Use the official eXp Realty logo.
        - **Filename:** `public/images/partners/exp-realty-logo.png`
- **Ubuntu Symbol (`components/ubuntu-visualizer.tsx`):**
    - **Current:** `/placeholder.svg?height=128&width=128`
    - **Suggestion:** A central, visually appealing graphic representing Ubuntu.
    - **AI Prompt:** "Create a beautiful, slightly abstract visual representation of the Ubuntu philosophy - interconnectedness, community, humanity. Use warm, inviting colours (gold #D4AF37, terracotta #E27D60, sage #5CDB95) with African design influences. Circular or flowing shape."
    - **Filename:** `public/images/ubuntu-symbol-visualizer.svg`

``` 