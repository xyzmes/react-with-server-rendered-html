## Guide: CDN ile yuklenen React, Backend ile Nasil Kullanilir

### - Oncelikle "npm run build" yapilir.

### - Babel index.js ve icine import edilen componentleri "./lib"  klasorune transpile eder.

### - "parcel build ./lib/index.js" komutuyla "./dist" klasorune browser'da kullanilabilir index.js build edilir.

### - index.js dosyasinda tum import edilen componentler bulunur. 

### - Bu js dosyasi django static kalsorunde veya PHP ile kullanilabilir, React ve ReactDOM CDN ile yuklenmeli.

### - Islem parcel veya webpack ile otomatik watch ve build edilebilir hale gelmesi gerekli.


```
npm install -g parcel-bundler
```
