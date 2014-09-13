/**
 * Documentation: http://docs.azk.io/Azkfile.js
 */

// Adds the systems that shape your system
systems({
  devfreecasts: {
    // Dependent systems
    depends: [],
    // More images:  http://images.azk.io
    image: "dockerfile/nodejs-bower-grunt",
    // Steps to execute before running instances
    provision: [
      "npm install"
    ],
    workdir: "/azk/#{manifest.dir}",
    command: "grunt serve",
    // Mounts folders to assigned paths
    mount_folders: {
      '.': "/azk/#{manifest.dir}",
    },
    scalable: {"default": 2},
    http: {
      // devfreecasts.azk.dev
      hostname: "#{system.name}.#{azk.default_domain}"
    }
  },
});



