# Ponte react feladat leírása
Cél: 
Egy olyan applikáció létrehozása, amely a cégen belüli különböző projektekkel kapcsolatos információk kezelésére és áttekintésére alkamas.

Információk:
-	A fejlesztéshez nem lesz szükség backendre, a feladat megoldása során a Typescript és React használata kötelező.
-	 A feladat megoldása során a meghatározott követelményeket be kell tartani, viszont ahol nem látsz megkötést ott a megoldás teljes mértékben a te fantáziádra, kreativitásodra van bízva.

Feladat:
1.	 A céges projekteket megjelenítő oldal kialakítása:
-	Kártyás megjelenítés, amin látszik a projekt neve, leirása, és a kezdőbetűiből generált kép (Erre a célra használd valamelyik online image placeholder szolgáltatást).
-	 A listázás async módon történjen, ami a backend hívást szimulálja (Ténylegesen nincs backend hívás, a lényeg, az aszinkronitás).
-	 Legyen egy "Új projekt” gomb a felületen, amelyre kattintva a "Projekt hozzáadása felület"-re jutunk.
2.	 Projekt hozzáadása felület kialakítása:
-	 A felületnek wizard alapú megjelenítése legyen.
-	 A wizard három oldalból álljon:
-	Első oldal: Itt legyen lehetőségünk megadni a projekt nevét és leirását. A név egy kötelező mező, ami max 255 karaktert tartalmazhat. A leírás nem kötelező, viszont amennyiben van benne tartalom, úgy minium 50 karakter és maximum 500 karakter hosszú lehet.
-	Második oldal: Itt legyen lehetőségünk megadni az adott projekten dolgozó kollégák neveit és a projektben betöltött pozícióikat.
-	Harmadik oldal: Itt legyen lehetőségünk felsorolni a projekthez kapcsolódó linkeket. Link alatt érthetünk egy drive-os dokumentációt vagy akár a különböző rendszerek elérését.
-	 Legyen valamilyen fajta progress megjelenítés, hogy éppen hol tartunk a létrehozásban

-	Új projekt hozzáadása után a listázó felület automatikusan frissüljön.

Extra feladat:
-	 Egy céges projekt részletes információinak a megjelenítése.
-	 A listázó oldalon tudjunk szűrni a céges projektekre keresési kifejezés alapján.

Követelmények:
-	 React és Typescript használata
-	 Az “Projekt hozzáadása felületen” az űrlap és wizard elkészítése során ne használj 3rd party lib-et (Kivétel a progressbar). 
-	A wizardot és az űrlapot leszámítva minden egyéb esetben illetve a Designra is bármilyen lib-et használhatsz (Nem követelmény a reszponzivitás és a csilli-villi animációk)
-	 A feladat megosztása egy publikus git alapú repository-ban történjen. pl.: GitHub, GitLab
-	Legyen egy Fordítási és Futtatási dokumentáció a README.md fájlban a projekt gyökér mappájában

Jó munkát kívánunk! :)

# Telepítés és futtatás

A telepítéshez a project-manager mappából kell a következő parancsokat lefuttatni:

1. A dependenciák telepítése:
`npm i`
2. Az applikáció "fordítása":
`npm run build`
3. Az applikáció futtatása:
`npm run preview`

Ezután a localhost 4173-as portján lesz elérhető. http://localhost:4173/