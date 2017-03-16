```
 ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄ 
▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌
 ▀▀▀▀█░█▀▀▀▀  ▀▀▀▀█░█▀▀▀▀ ▐░█▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀▀▀ 
     ▐░▌          ▐░▌     ▐░▌       ▐░▌▐░▌          
     ▐░▌          ▐░▌     ▐░█▄▄▄▄▄▄▄█░▌▐░█▄▄▄▄▄▄▄▄▄ 
     ▐░▌          ▐░▌     ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌
     ▐░▌          ▐░▌     ▐░█▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀█░▌
     ▐░▌          ▐░▌     ▐░▌                    ▐░▌
     ▐░▌      ▄▄▄▄█░█▄▄▄▄ ▐░▌           ▄▄▄▄▄▄▄▄▄█░▌
     ▐░▌     ▐░░░░░░░░░░░▌▐░▌          ▐░░░░░░░░░░░▌
      ▀       ▀▀▀▀▀▀▀▀▀▀▀  ▀            ▀▀▀▀▀▀▀▀▀▀▀ 
```
# pown-tips [![Gitter](https://img.shields.io/gitter/room/nwjs/nw.js.svg)](https://gitter.im/pownjs/Lobby)

> Get tips how to pown things.

Pown Tips is an offline reference for everyday hacking - from command usage examples to how to setup the perfect evil twin attack. We have it all.

## How To Contribute

Pown Tips is still in development and requires your support. It is easy to get started. Just follow these steps:

1. Clone the project using your preferred method
2. Create a new tip in the `db` folder
3. Make sure you add your name in the contributors list under `package.json`
4. Commit and make a pull requests

It is that easy. Once your tip is accepted it will become part of the Pown.js distribution and available for everyone to see.

Alternatively, the following number of features are urgently required:

* [ ] Build article index for quick searching
* [ ] Complete the search features so it actually searches
* [ ] Provide means for other Pown.js modules to contribute tips

## Why Getting Tips

Even the best hackers forget how to do common things and need to look things up - usually online. Pown Tips provides a reference of common scenarios available at your fingertips.

## Quickstart

From the same directory as your project's package.json, install this module with the following command:

```sh
$ npm install pown-tips --save
```

Once that's done, you can invoke pown tips like this:

```sh
$ ./node_modules/.bin/pown tips
```

If installed globally or as part of Pown.js distribution invoke like this:

```sh
$ pown tips
```
