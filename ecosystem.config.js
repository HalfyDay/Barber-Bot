module.exports = {
  apps: [
    {
      name: "brothershop",
      script: "server.js",
      instances: 1,
      exec_mode: "fork",
      kill_timeout: 10000,
      listen_timeout: 15000,
      wait_ready: false,
      max_restarts: 5,
      restart_delay: 2000,
      exp_backoff_restart_delay: 100,
      autorestart: true,
      watch: false,
      max_memory_restart: "512M",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
