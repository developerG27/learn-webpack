# WEBPACK
E' in grado di immagazzinare i moduli, ci permette dividere ogni modulo in sezioni diversi in modo tale che gli sviluppatori abbiamo il pieno controllo.
E' in grado di una preparare un file javascript con al suo interno tutti il codice del nostro progetto, dipendenze incluse.

Prerequisiti
Webpack ha bisogno di node.js per funzionare

Installazione
Si parte creando il file packaje.json, con il comando
npm init
Una volta generato il file si installa webpack con 
npm install webpack webpack-cli --save

Caratteristiche versione 4
Webpack 4 è più veloce rispetto alla versione precedente di una media dal 60 al 98%.
Supporto a WebAssembly

Creazione del bundle - il nostro file principale
Per prima cosa si modifica la struttura del nostro prsogetto, separando il codice sorgente "src" dal nostro codice di distribuzione "dist"


Moduli
Gli import e gli export sono degli standard di ES2015, sebbene non sono supportati ancora da molti browser, webpack li supporta appieno e in più traspila il codice in modo tale che anche i browser lo comprenda.


Configurazione
Webpack non richiede più di nessuna configurazione, però, per progetti complessi si può configurare il file 
webpack.config.js

Build
Se il file di configurazione di webpack è presente (webpack.config.js) basterà solo il comando 
npx webpack

Npm Scripts
E' possibile creare una scorciatoia per quando vogliamo fare la build, all'interno di packaje.json, nella sezione scripts:


Gestione degli asset
All'interno del nostro bundle possiamo inserire gli asset, questo comprende immagini, video e anche css.
Per importare il css abbiamo bisogno di installare due moduli
npm install -D style-loader css-loader
Una volta installati dobbiamo inserirli all'interno del nostro file webpack.config.js tramiite espressioni regolari.
Webpack utilizza queste espressioni per determinare in base all'estensione quale loader caricare.
In questo caso abbiamo stabilito che per i file .css avremo bisogno di style-loader e css-loader.
Ora quando ci sarà un file './style.css' verrà caricato nell'head del nostro file.
Quindi inseriamo una regola all'interno del nostro file src/style.css e poi lo importiamo nel nostro src/index.js, una volta terminato facciamo la build con il comando che avevamo configurato precedentemente
npm run build

Caricamente delle immagini
Per gestire le immagini si usa il modulo
npm install --save-dev file-loader
una volta installato il pacchetto aggiungiamo l'espressione regolare al nostro file webpack.config.js,, in questo caso gli diciamo di accettare i file che abbiano l'estensione png|svg|jpg|gif e di il file-loader per caricarlo.
Ora puoi importare qualsiasi file con quella estensione

Ottimizzare le immagini caricate
Esistono dei moduli in grado di ottimizzare le immagini, questo è quello usato in questa guida
npm install image-webpack-loader -D


Caricamento dei font
Grazie al modulo di file-loader possiamo anche aggiungere dei font esterni, basta aggiungere una nuova espressione regolare e facendo usare sempre lo stesso modulo in webpack.config.js

Caricamento dei dati: Json, CSV, TSV e XML
E' attualmente supportato il caricamento dei file JSON, è necessario installare questo modulo
npm install --save-dev csv-loader xml-loader
Una volta installato il modulo si inserisci l'espressione regolare nel nostro file di configurazione e caricando i due moduli appena installati.
Una volta creato ad esempio il file xml si importa sempre in index.js, successivamente si esegue la build e se andiamo su ispeziona elemento potremo vedere il nostro file.
Questo può essere molto utile quando utilizziamo uno strumento come d3


Gestione degli output
Man mano che il tuo progetto cresce sarà difficile gestire tutti i tuoi assets, 
creiamo due file in src e li inseriamo nel file di configurazione di docker e all'output gli diamo
[name].bundle.js: Prende lo stesso nome dell'entry e lo restituisce nell'output


Impostazione di HtmlWebpackPlugin
il comando per installarlo
npm install -D html-webpack-plugin
questo plugin genera un file html, anche se già lo abbiamo nel .dist, ciò significa che lo sostituirà

Pulire la cartella ./dist
con il comando
npm install -D clean-webpack-plugin
Elimina i file che non esistono più all'interno di ./dist o in qualsiasi altra cartella venga configurata


DEVELOPMENT
https://webpack.js.org/guides/development











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


[hash]: Crea un hash
[ext]: Aggiunge la stessa estensione che hanno i file originali

I dll (Dynamic Link Library) servono per inserire le tue librerie in comune ad esempio jquery, così quando costruisci il tuo bundle con webpack non devi ricostruire le librerie


Caricare moduli in modo asincrono