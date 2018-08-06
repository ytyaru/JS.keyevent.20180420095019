# このソフトウェアについて

JSキーイベントを試してみる。[demo](https://ytyaru.github.io/JS.keyevent.20180420095019/)

## 長押し問題

長押し時、keydownでも連続入力できない場合がある。

本環境で再現した。連続入力されない理由はOSのキーボード入力設定である。リピート遅延や間隔の時間がそのまま反映されている。

長押しで連続入力を処理するときは工夫せねばならない。キーイベント時に発火するのでなく、常時監視してキーイベント時にフラグを立てて判定する。そのままではコードをイベント駆動で設計・実装できない。

### 解決方法

SetIntervalなどで時間を制御したループ文をつくる必要がある。

# 開発環境

* [Raspberry Pi](https://ja.wikipedia.org/wiki/Raspberry_Pi) 3 Model B
    * [Raspbian](https://www.raspberrypi.org/downloads/raspbian/) GNU/Linux 8.0 (jessie)
        * Chromium 56.0.2924.84 Built on Ubuntu 14.04, running on Raspbian 8.0

# ライセンス

このソフトウェアはCC0ライセンスである。

[![CC0](http://i.creativecommons.org/p/zero/1.0/88x31.png "CC0")](http://creativecommons.org/publicdomain/zero/1.0/deed.ja)

使用ソフトウェアは以下。

Library|License|Copyright
-------|-------|---------
[require](http://requirejs.org/)|[MIT](https://opensource.org/licenses/MIT)|[Copyright jQuery Foundation and other contributors](https://github.com/requirejs/requirejs/blob/master/LICENSE)
