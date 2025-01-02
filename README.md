```
npm run build
sudo npm install -g pm2
pm2 start npm --name "site-predialnet" -- start
pm2 startup systemd
pm2 save
```
