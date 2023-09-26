module.exports = {
  apps: [
    {
      script: "npm start",
    },
  ],

  deploy: {
    production: {
      key: "isayback.pem",
      user: "ubuntu",
      host: "13.212.34.159",
      ref: "origin/main",
      repo: "https://github.com/aliwhosane/agency-landing-page",
      path: "/home/ubuntu",
      "pre-deploy-local": "",
      "post-deploy": "pm2 reload ecosystem.config.js --env production",
      "pre-setup": "",
      ssh_options: "ForwardAgent=yes",
    },
  },
};
