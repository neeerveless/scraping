# スクレイピングの際にJavascriptも動いて欲しい場合に

## 事前準備

```
$ sudo yum -y groupinstall "Japanese Support"
$ sudo yum -y install xorg-x11-server-Xvfb
$ sudo yum -y install firefox
$ sudo yum -y install java-1.8.0-openjdk
```

## clone後の準備

```
$ npm install
$ ./node_modules/selenium-standalone/bin/selenium-standalone install
```

## 起動

```
$ ./xvfbd start
$ ./seleniumd start
$ npm start
```
