# New to Vagrant? Read: https://github.com/nelsonic/learn-vagrant
# detailed instructions for installing
$script = <<SCRIPT

sudo -i

# update ubuntu (security etc.)
apt-get update

apt-get -y install g++ git git-core nodejs

# nodejs
apt-get -y install g++ git git-core nodejs npm
# use https://github.com/visionmedia/n to get latest node+npm
npm install n -g
n stable
node -v
npm install nodemon -g


SCRIPT


Vagrant.configure("2") do |config|

  # config.vm.box = "base"
  config.vm.box = "ubuntu-nodejs-server"
  config.vm.box_url = "https://cloud-images.ubuntu.com/vagrant/trusty/current/trusty-server-cloudimg-amd64-vagrant-disk1.box"

  config.vm.network :forwarded_port, guest: 5000, host: 5000
  config.vm.network :forwarded_port, guest: 8000, host: 8000
  # Create a private network, which allows host-only access to the machine
  # using a specific IP.
  config.vm.network :private_network, ip: "192.168.33.11"
  config.vm.provision :shell, :inline => $script
end
