```
DISKPART >select disk X #USBのディスク番号を選択
DISKPART >clean #選択したディスクのパーティションをクリア
DISKPART >create partition primary　#1つのみ、パーティションを作成
DISKPART >list vol #ボリュームの一覧表示
DISKPART >select vol Y #USBのボリューム番号を選択
DISKPART >format quick #フォーマット
```

