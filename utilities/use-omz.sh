#!/bin/bash
ln -s /cloudflare-worker-proxy/node_modules/wrangler/bin/wrangler.js /usr/local/bin/wrangler

echo "zsh does not exist."
apt update
# Install zsh and less, because zsh is used by oh-my-zsh and less is used by git
apt install zsh less curl git -y
chsh -s $(which zsh)
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)" "" --unattended
/usr/bin/zsh
