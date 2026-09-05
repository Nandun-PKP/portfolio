# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.

////////////////////////////////////////////
ෆෝල්ඩර (Folders)
* node_modules: ඔබගේ ව්‍යාපෘතියට අවශ්‍ය කරන සියලුම බාහිර පැකේජ සහ ලයිබ්‍රරි (React, Tailwind වැනි) අන්තර්ජාලයෙන් බාගත වී ගබඩා වන්නේ මෙහිය. මෙය සාමාන්‍යයෙන් ප්‍රමාණයෙන් විශාල වන අතර, අප විසින් අතින් වෙනස් කිරීම් නොකළ යුතු ෆෝල්ඩරයකි.

* public: කේතය මගින් වෙනස් කිරීමට අවශ්‍ය නොවන ස්ථාවර ගොනු (Static assets) මෙහි තබා ගනී. උදාහරණයක් ලෙස වෙබ් අඩවියේ Favicon එක (browser tab එකේ පෙන්වන කුඩා අයිකනය) තබා ගන්නේ මෙම ෆෝල්ඩරයෙහිය.

////////////////////////////////////////////
ප්‍රධාන සැකසුම් ගොනු (Configuration Files)
* package.json: ව්‍යාපෘතියේ "හදවත" බඳු වන්නේ මෙයයි. ව්‍යාපෘතියේ නම, භාවිතා කරන පැකේජ ලැයිස්තුව (Dependencies) සහ ව්‍යාපෘතිය Run කිරීමට අවශ්‍ය විධාන (Scripts - උදා: npm run dev) අඩංගු වන්නේ මෙහිය.

* package-lock.json: package.json හි සඳහන් කර ඇති පැකේජ වල නිශ්චිත සංස්කරණ (exact versions) ලියාපදිංචි කර තබා ගන්නේ මෙහිය. වෙනත් පරිගණකයක මෙම ව්‍යාපෘතිය Run කරන විටදී දෝෂ ඇති නොවන බව මෙයින් තහවුරු කරයි.

* vite.config.js: ව්‍යාපෘතිය Run කිරීමට සහ අවසාන වෙබ් අඩවිය නිර්මාණය කිරීමට භාවිතා කරන 'Vite' නම් මෙවලමට අවශ්‍ය සැකසුම් උපදෙස් මෙහි අඩංගු වේ.

* .oxlintrc.json: ඔබ ලියන කේතවල ඇති විය හැකි දෝෂ සහ වැරදි රටා ස්වයංක්‍රීයව හඳුනාගැනීමට භාවිතා කරන 'Oxlint' නම් කේත පරීක්ෂක (Linter) මෙවලමේ සැකසුම් මෙහි අඩංගු වේ.

////////////////////////////////////////////
අනෙකුත් වැදගත් ගොනු (Other Important Files)
index.html: ඔබගේ වෙබ් අඩවියේ ප්‍රධාන දොරටුව මෙයයි. src ෆෝල්ඩරය තුළ React මගින් සැකසෙන සම්පූර්ණ අතුරු මුහුණතම බ්‍රව්සරයට සම්බන්ධ කර පෙන්වන්නේ මෙම තනි HTML ගොනුව හරහාය.

* .gitignore: අනාගතයේදී ඔබ මෙම ව්‍යාපෘතිය GitHub වැනි Version Control පද්ධතියකට Upload කරන්නේ නම්, එහිදී මඟහැරිය යුතු ෆයිල් සහ ෆෝල්ඩර (උදා: විශාල node_modules ෆෝල්ඩරය) මොනවාදැයි Git වලට දැනුම් දෙන්නේ මෙම ගොනුව මගිනි.

* README.md: ව්‍යාපෘතිය ගැන විස්තර, එය Run කරන ආකාරය වැනි උපදෙස් වෙනත් අයට කියවීමට හැකි වන ලෙස ලියා තැබීමට භාවිතා කරන ලියවිල්ලකි.