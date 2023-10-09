module.exports = {
  apps: [
    {
      script: "npm start",
    },
  ],

  deploy: {
    production: {
      key: "tapeatale.pem",
      host: "65.0.11.232",
      user: "ubuntu",
      ref: "origin/pm2",
      repo: "https://github.com/aliwhosane/agency-landing-page",
      path: "/home/ubuntu",
      "pre-deploy-local": "",
      "post-deploy":
        "source ~/.nvm/nvm.sh && npm install && npm run build --node-args='--max-old-space-size=4096' && pm2 reload ecosystem.config.js --env production",
      "pre-setup": "",
      ssh_options: "ForwardAgent=yes",
    },
  },
};
