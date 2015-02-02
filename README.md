# DevFreeCasts

A huge collection of free screencasts for devs.

## How to add screencasts?

**Before start it, all videos you add must be freeware and for web developers** 

First of all you need to [fork this repository](https://github.com/caio-ribeiro-pereira/devfreecasts/fork). 

With this project in your hands, edit the `/public/[platform-folder]/_data.json` and add your videos respecting these parameters: 

``` javascript
"index": {
  "name": "platform_name", // lowercase and underscore
  "subtitle": "Platform name",
  "about": "Platform description",
  "site": "url of the official platform site", 
  "image": "platform-logo.jpg",
  "category": "frameworks", // frameworks, languages or devtools
  "partners": [
    {
      "site" : "Screencast site name", // Youtube, Vimeo channels are welcome too
      "site_url": "url of the screencast site",
      "image": "screencast site logo.jpg",
      "lang": "screencast language. Ex.: EN, PT-BR, ES..",
      "publish": true, // Publish to devfreecast site
      "videos": [
        {
          "title": "Screencast title",
          "description": "Screencast description",
          "duration": "3:14", // Screencast Duration
          "level": "B", // B - Basic video, I - Intermediate video, A - Advanced video, 
          "url": "screencast's url",
          "featured": true // Is a featured video? 
        }
      ]
    }
  ]
},
```

Obs.: **All image must be an jpeg/jpg with 350x195 size**. If you don't add an `partners.image` attribute the **default category image will replace it**.

Look this example (`public/nodejs/_data.json`):

``` javascript
{
  "index": {
    "name": "nodejs",
    "subtitle": "Node.js",
    "about": "Node.js is a platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices.",
    "site": "http://nodejs.org",
    "image": "nodejs.png",
    "category": "languages",
    "partners": [
      {
        "site" : "TagTree",
        "site_url": "http://tagtree.tv",
        "image": "tagtree.jpg",
        "lang": "en",
        "publish": true,
        "videos": [
          {
            "title": "Node Streams",
            "description": "You've heard a lot about node streams, in this episode you get introduced to streams and see how to code up your own read, write, and transform stream.",
            "duration": "8:28",
            "url": "http://tagtree.tv/intro-to-node-streams",
            "featured": false
          }
        ]
      }
    ]
  }
}
```

If you wanna add a new platform (programming language or framework), first you need to add it into `global.platforms` attribute in the file `harp.json`:

``` javascript
{
  "globals": {
    "title": "DevFreeCasts",
    "description": "A huge collection of free screencasts for devs",
    "name": "Caio Ribeiro Pereira",
    "email": "caio.ribeiro.pereira@gmail.com",
    "platforms": ["nodejs", "meteor", "go", "ruby"] // Just add here a new platform
  }
}
```

## Development mode

To run this project in **development mode**, you need have [Node.js](http://nodejs.org) and [Grunt](http://gruntjs.com) installed. 

To install Node.js, just [follow this wiki rules](http://nodejs.org/download) 

To install Grunt, just run the command below: 

``` bash
npm install grunt-cli -g
```

To get and run this project: 

``` bash
git clone git@github.com:caio-ribeiro-pereira/devfreecasts.git
cd devfreecasts
grunt serve
```

And access in your browser the url: [http://localhost:3000](http://localhost:3000).

## Author

Caio Ribeiro Pereira - [@crp_underground](http://twitter.com/crp_underground)

## License

MIT - http://caio-ribeiro-pereira.mit-license.org
