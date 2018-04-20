# JSでマークダウンエディタ

https://qiita.com/koara-local/items/ee65916c46a89b055948
https://github.com/jbt/markdown-editor/
https://markdown-it.github.io/

## キーバインディング

Mousetrapが良さそう。

https://qiita.com/n0bisuke/items/8b2b0c700c8f5f5a4043
https://craig.is/killing/mice
https://github.com/madrobby/keymaster
http://bitwalker.org/keys.js/

Mousetrap.bind
Mousetrap.unbind
Mousetrap.trigger
Mousetrap.stopCallback
Mousetrap.reset
Mousetrap.handleKey
var mousetrap = new Mousetrap(form);
Mousetrap.addKeycode

Mousetrap.bindGlobal
Mousetrap.bind
Mousetrap.record
Mousetrap.pause();
Mousetrap.unpause();


key('ctrl+r', function(event, handler){...});
isPress(keyCode)
key.setScope('scopeName'); deleteScope('scopeName');
function filter(e)
var k = key.noConflict(); 復元


record|入力キーに応じたキー表現を取得


キー表現と実行関数をCommandという単位で扱いたい。
あるコマンドのキーバインディングを変更するときに有用。
また、Undo, Redoなどコマンドを取り消すときなどに。

cmd0 = new Command('Command_0', 'ctrl+c', function(e){});
cmd0.name // 'Command_0'
cmd0.binds // 'ctrl+c'
cmd0.action // function(e){...}

Keybinder.Add(cmd0)
Keybinder.Commands; // [cmd0]
Keybinder.Remove(cmd0) // or 'Command_0'

scene0 = Scene();
scene0.AddCommand(cmd0);
scene0.RemoveCommand(cmd0); // or 'Command_0'

Keybinder.AddScene(scene0);
Keybinder.RemoveScene(scene0);
Keybinder.RemoveScenes();
Keybinder.UseScene(scene0); // 指定したもののみON。それ以外はOFF
Keybinder.SwitchScene(scene0); // ON/OFF切替
Keybinder.EnableScene(scene0); // ON
Keybinder.DisableScene(scene0); // OFF


Keybinder.Command.name
Keybinder.Command.key
Keybinder.Command.function
Keybinder.Commands.Add()
Keybinder.Commands.Remove()
Keybinder.Commands['CommandName']
Keybinder.Scenes.Add()
Keybinder.Scenes.Remove()
Keybinder.Scenes['SceneName']
Keybinder.Scenes.Use()
Keybinder.Scenes.Switch()
Keybinder.Scenes.Activate()
Keybinder.Scenes.Disactivate()


コマンド文字列解析と発火条件、発火頻度回数

Windows, Vim, Emacs, 格闘ゲームなど文脈ごとにキー入力が異なる。
これを定義できるようにしたい。

map0 = Keymapper.Keymap()
Keymapper.maps.Add('Mapname')
Keymapper.maps.Remove()
Keymapper.maps.Remove(map0)
Keymapper.maps.Remove([map0, map1])
Keymapper.maps.Remove('Mapname')
Keymapper.maps.Remove(['name0', 'name1]')
Keymapper.maps.'Mapname']


Key.Map
Key.Maps
Key.Maps.Add()
Key.Maps.Remove()
Key.Maps.Remove()
Key.Command
Key.Commands
Key.Scene
Key.Scenes
Key.Bind
Key.Binds
Key.Binds


Key.Event.Fire.IsFire // キーイベントが発火しているか否か
Key.Event.Fire.Condition // キーイベントの発火条件
Key.Event.Fire.Frequency // 頻度。ミリ秒指定。0,-1などで最高速度
Key.Event.Fire.Wait // 発火するまでの待機時間
Key.Event.Fire.LimitTimes // 発火する上限回数

発火前
    Condition
発火後
    Frequency
    Wait
    LimitTimes

// keyup
// keydown
// keypress
Key.Event.Fire.Condition = function(e) {
    if(event.shiftKey){
        if(e.keyCode === 13) {
            method(e);
            return false;
        }
    }
}

eventlog = [{key: '', state:'', time:''}]; // 押下したキー、押下状態、時刻を、keydown,keyup発火時に記録する
$(window).keyup(function(e){
    Logging(e);
    IsFile();
}
$(window).keydown(function(e){
    Logging(e);
    IsFile();
}
/*
$(window).keypress(function(e){
    KeyPressMethods(e);
}
*/

#### 要素

要素|説明
----|----
キー|対象キー
状態|キーの状態 [押下中|離している]
回数|キーパターンの繰り返し回数
時間|キー状態を維持すべき時間
発火持続|イベント発火（キー状態を保っている間ずっと|真になったとき一度だけ）

* コマンド発火条件
    * キー種
        * 状態
            * 押下中|解放
        * 回数
        * 時間
* 発火持続
    * 真になったとき一度だけ
    * キー状態を保っている間ずっと
        * 待機
            * 開始まで指定時間待つ
        * 頻度
            * できるだけ多く
            * 一定間隔
        * 回数
            * 無制限
            * 指定した上限回数まで
            * 指定した下限回数以上





### 他

キー入力回数解析
http://hakomo.github.io/kaisekey/
