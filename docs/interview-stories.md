# Interview Stories

An installable web app that lets people at a live concert see the artist, the venue, the setlist, and each song's lyrics in two languages.

## Data structure

- **Theme:** How I created the app's re-usable data structure.
- **Focus:** Reuse. A song is written once and can appear in many events.
- **Story:** I built a small web app that shows the program for a live music event. I organized the content around three things: songs, artists, and events. Each song has its own file, which holds the title and the lyrics in two languages. An event file names the venue, the artist, and the sets for the night. Each set is just a list of songs. That means a song can appear in several events without being copied. When a new concert came up, I added one event file that reused the existing songs. I also kept a blank template for each type, so adding a song means copying the template and filling it in. Looking back, I'd store the content as plain data files instead of code, so someone who doesn't program could update it.

## Hard-coded data

- **Theme:** The decision to hard-code the content into the app itself instead of loading it from a server.
- **Focus:** The trade-off. There's no backend and it works offline, but every content change needs a new release.
- **Story:** My web app helps people at a live concert follow the setlist and read the song lyrics. The app has no server behind it. All the songs, lyrics, and event details are built right into the app's code. I chose this on purpose. Concert venues often have poor phone signal. Because the content ships with the app, it works even with no connection. It also means there's no server or database to run and pay for. The cost is that every change needs a new build and release. Switching the app to the next concert is a one-line change that names the new event. Then I publish the app again. That works well for one performer with a few shows a year. Looking back, if the app had to serve many events, I'd load the content from a simple hosted file and keep a saved copy on the phone for offline use.

## An SPA

- **Theme:** Why I built the app as a single-page application (SPA).
- **Focus:** Instant, uninterrupted navigation for someone using a phone during a live show.
- **Story:** My web app helps people at a live concert follow the setlist and read the song lyrics. I built the app as a single-page application to support certain aspects of expected usage. Users are standing in a crowd with a phone, moving from one song to the next. Every tap needs to feel instant. With a single page, the app loads once. After that, going to the next song just swaps the lyrics on screen. The artist, the venue, and the setlist open as panels on top of the song, so the user never loses their place. It also made offline use simpler, because there's only one page to save on the phone. The one catch was that a reload sent the user back to the first song. I fixed that by saving their position in the browser. Looking back, I'd make the same choice for any app that people use in quick, short bursts like this.

## A PWA

- **Theme:** Why I built the app as a progressive web app (PWA).
- **Focus:** Getting the app onto a user's phone quickly, with no app store.
- **Story:** My web app helps people at a live concert follow the setlist and read the song lyrics. I built the app as a progressive web app to make it easy for users to get it onto their phones. A native app would mean a trip to the app store. Few people will do that for a single evening. A progressive web app is just a web link. The app shows a QR code, so users can easily share it with friends. A friend scans the code, and the app opens right away in the browser. From there, they can add it to their home screen like any other app. The same code works on both iPhone and Android. After the first visit, the phone keeps a copy, so the app still works when the signal drops. Updates also reach users automatically the next time they open it. Looking back, I'd choose a progressive web app first for any short-lived, event-style app.

## How React is used

- **Theme:** Why I built the app with React, and how I organized it into components.
- **Focus:** Keeping shared state in one place, so each part of the screen stays simple.
- **Story:** My web app helps people at a live concert follow the setlist and read the song lyrics. I built it with React because the screen breaks naturally into parts. There's the song page, the setlist panel, the artist panel, and the venue panel. Each one is its own React component. The most important piece of state is the user's position, meaning which set and which song they're on. I kept that position in the top-level component. It passes the position down to the parts that display it. It also passes down a function that lets a part change the position. For example, when a user taps a song in the setlist panel, the panel calls that function. The position updates, and React redraws the song page with the new lyrics. The setlist panel doesn't need to know anything about the song page. State that only one part needs stays in that part. The choice of English or German lyrics, for example, lives only in the song page. Looking back, as the app grew, I'd move the shared position into its own small module, so the top-level component stays simple.

## App purpose

- **Theme:** Why I built the app, and what it gives a concert audience.
- **Focus:** One place for the information an audience member needs before, during, and after a live show.
- **Story:** I built a web app that any musician can share with their audience at a live show. Concert-goers open it on their phones. Before the music starts, they can learn about the venue and the artist. During the show, they can see the setlist and know which songs are coming next. They can also read the lyrics of the song being played. Live lyrics often go by too fast or get lost in the sound of the room. With the app, listeners can see exactly what the artist is singing about. For bilingual audiences, the lyrics can switch to a second language with one tap. After the show, the app is still on their phone. They can use it to recall the details when telling friends about the concert. It also has the artist's website and contact information, so fans can follow up. Features that allow each musician to easily set up their own shows, are planned for future releases.
