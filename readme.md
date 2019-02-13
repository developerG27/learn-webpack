# WEBPACK
Webpack ha bisogno di node.js per funzionare
E' in grado di immagazzinare i moduli, ci permette dividere ogni modulo in sezioni diversi in modo tale che gli sviluppatori abbiamo il pieno controllo.
E' in grado di una preparare un file javascript con al suo interno tutti il codice del nostro progetto, dipendenze include

Installazione
Si parte creando il file packaje.json, con il comando
npm init
Una volta generato il file si installa webpack con 
npm install webpack webpack-cli --save

Caratteristiche versione 4
Webpack 4 è più veloce rispetto alla versione precedente di una media dal 60 al 98%.
Supporto a WebAssembly: 


Per iniziare con webpack è necessario comprendere questi concetti principali:
Entry
Output
Loaders
Plugins
Mode 
Compatibilità dei browser


Rutes relative
Si può creare il nostro bundle anche in file diversi grazie al modulo di node.js path

Entry
Un entry o punto di ingresso indica a webpack da dove iniziare ad analizzare il codice, così da poter produrre il package.
Di default il valore è
./src/index.js
ma puoi facilmente cambiarlo nel file webpack.config.js
module.exports = {
  entry: './path/to/my/entry/file.js'
}


Output
E' il file finale dove webpack creearà il bundle, il suo valore di default è 
./dist/main.js
invece per qualsiasi altro file generato è 
./dist
puoi configurare questi file con
const path = require('path');
module.exports = {
  entry: './path/to/my/entry/file.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'my-first-webpack.bundle.js'
  }
};


Loaders
Webpack comprende solo file Javascript e Json, per questo sono stati creati i Loaders
Consentono a webpack di elaborare altri tipi di file e convertirli in moduli validi.
Il loader ha due proprietà: 
test: indica quale file devono essere trasformati
use: quale loader deve essere usato per eseguire la trasformazione

const path = require('path');
module.exports = {
  output: {
    filename: 'my-first-webpack.bundle.js'
  },
  module:{
    rules: [
      {test: /\.txt$/, use: 'raw-loader'}
    ]
  }
}
Tradotto in linguaggio umano sarebbe
Hei Webpack, quando trovi un file .txt all'interno di un istruzione require() o import, usa il raw-loader per trasformarlo prima di aggiungerlo al pacchetto.


Plugins
Estendono il funzionamento di webpack
Per utilizzare un plugin è necessario usare require() e aggiungerlo all'array dei plugin, la maggior parte dei plugin sono personalizzabili tramite opzioni.
E' possibile utilizzare un plugin più volte in una sola configurazione per cui è necessario creare un'istanza chiamandola con un nuovo operatore

babel-loader: Da supporto ai file Javascript 
core-babel: indica come si compilerà
babel-present-env: indica quale standard di ECMA si utilizzerà.



Quali sono i vantaggi di usare immagini a in base 64?
Se le immagini pesano poco si può risparmiare la richiesta http

[name]: Prende lo stesso nome del file originale
[hash]: Crea un hash
[ext]: Aggiunge la stessa estensione che hanno i file originali

I dll (Dynamic Link Library) servono per inserire le tue librerie in comune ad esempio jquery, così quando costruisci il tuo bundle con webpack non devi ricostruire le librerie


Caricare moduli in modo asincrono