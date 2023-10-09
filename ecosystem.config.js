module.exports = {
  apps: [
    {
      script: "npm start",
    },
  ],

  deploy: {
    production: {
      key: "tapeatale.pem",
      host: "13.233.74.10",
      user: "ubuntu",
      ref: "origin/main",
      repo: "https://github.com/aliwhosane/agency-landing-page",
      path: "/home/ubuntu",
      "pre-deploy-local": "",
      "post-deploy":
        "source ~/.nvm/nvm.sh && npm install && npm run build --node-args='--max-old-space-size=88192' && pm2 reload ecosystem.config.js --env production",
      "pre-setup": "",
      ssh_options: "ForwardAgent=yes",
    },
  },
};
