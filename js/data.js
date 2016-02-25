'use strict';

export const contents = [
  {
    id: 'event',
    title: 'Event',
    description: 'イベント情報'
  }, {
    id: 'exhibit',
    title: 'Exhibit',
    description: '部門紹介'
  }, {
    id: 'access',
    title: 'Access',
    description: 'アクセス'
  }, {
    id: 'gallery',
    title: 'Gallery',
    description: 'フォトギャラリー'
  }, {
    id: 'movie',
    title: 'Movie',
    description: 'プロモーションムービー'
  }, {
    id: 'result',
    title: 'Result',
    description: '結果発表'
  }
];

export const exhibits = [
  {
    id: 'gamesoftware',
    name_ja: 'ゲームソフト',
    name_en: 'Game Software'
  }, {
    id: 'gameplanning',
    name_ja: 'ゲーム企画',
    name_en: 'Game Planning'
  }, {
    id: '3dillustration',
    name_ja: '3Dイラスト',
    name_en: '3D Illustration'
  }, {
    id: '2dillustration',
    name_ja: '2Dイラスト',
    name_en: '2D Illustration'
  }, {
    id: '3danimation',
    name_ja: '3Dアニメーション',
    name_en: '3D Animation'
  }, {
    id: 'drawinganimation',
    name_ja: '作画アニメーション',
    name_en: 'Drawing Animation'
  }, {
    id: 'webdesign',
    name_ja: 'Webデザイン',
    name_en: 'Web Design'
  }, {
    id: 'graphicdesign',
    name_ja: 'グラフィックデザイン',
    name_en: 'Graphic Design'
  }, {
    id: 'systemapplication',
    name_ja: 'システムアプリケーション',
    name_en: 'System Application'
  }
];

export const photos = [
  {
    thumbnail: '/img/gallery_01_thumbnail.png',
    original: '/img/gallery_01.png'
  }, {
    thumbnail: '/img/gallery_02_thumbnail.png',
    original: '/img/gallery_02.png'
  }, {
    thumbnail: '/img/gallery_03_thumbnail.png',
    original: '/img/gallery_03.png'
  }, {
    thumbnail: '/img/gallery_04_thumbnail.png',
    original: '/img/gallery_04.png'
  }, {
    thumbnail: '/img/gallery_05_thumbnail.png',
    original: '/img/gallery_05.png'
  }, {
    thumbnail: '/img/gallery_06_thumbnail.png',
    original: '/img/gallery_06.png'
  }, {
    thumbnail: '/img/gallery_07_thumbnail.png',
    original: '/img/gallery_07.png'
  }, {
    thumbnail: '/img/gallery_08_thumbnail.png',
    original: '/img/gallery_08.png'
  }
];

export const result = [
  {
    exhibit: 'gamesoftware',
    works: [
      {
        name: 'Project Stinger',
        team: '藤原重工',
        creator: '大東 優介',
        description: 'メカ好きや、アクション好きが集まって作られたロマン溢れるゲームです。ゲームとしての完成度や、細かい演出や動きなどたくさんのこだわりを、大技やコンボを決める爽快感を味わいながら注目してほしいです。',
        thumbnail: '/img/work_i01.png',
        prize: 1
      }, {
        name: 'Outlaw Sports Festival 2',
        team: 'Eternal Criminal Circulation',
        creator: '谷 祐治',
        description: '４人対戦の乱闘系パーティーアクションゲームです。前作から大幅にグレードアップして、より楽しめるものにしました。ぜひ、手に取って遊んでみてください。',
        thumbnail: '/img/work_i02.png',
        prize: 2
      }, {
        name: 'Time Bomb',
        team: 'Quad',
        creator: '山田 祥太郎',
        description: 'マス目で区切られたステージを、爆弾を避けながらゴールを目指すゲームです。爆弾の上に乗るこで、制限時間と爆発までのカウントの数字を入れ替えることが出来ます。',
        thumbnail: '/img/work_i03.png'
      }, {
        name: 'キラメキ☆スター',
        team: 'Alison Project',
        creator: '有村 沙綾',
        description: '学生最後のチーム制作だったので、プレイヤーだけでなく、制作者側も楽しんで作って遊べるゲームにしました。楽しんで遊んでもらえると嬉しいです！',
        thumbnail: '/img/work_i04.png'
      }, {
        name: 'すしいくさ',
        team: '寿GAMES',
        creator: '油井 友寛',
        description: '本作は、プレイヤーであるお寿司たちがステージに出現するシャリを取り合う基本4人プレイのチーム対戦型アクションゲームです。シャリを取ってお寿司となり、お客さんに食べてもらったり相手を倒すことで獲得できるポイントで勝敗が決まります！',
        thumbnail: '/img/work_i05.png'
      }, {
        name: 'ペーパーボーズ',
        team: '紙やぶり隊',
        creator: '壬生 葵',
        description: '紙を破る対戦アクションゲーム 紙を破って得点を稼ぎ、一番得点が多い人が勝利！ 破って破って、破りまくる！！ 時間で広がっていくステージの中で、折り紙アクションやイベントを利用しながら勝利を目指そう',
        thumbnail: '/img/work_i06.png'
      }, {
        name: 'Ruinval',
        team: 'ますたーよーだー',
        creator: '越智 祥太',
        description: '主人公の少女「ルニア」は秘められた宝を探すため、森の奥地の神殿へ向かう。そこに待ち受ける数々の罠を潜り抜け、宝を持ち帰ることはできるのか……？ 3種の武器を切り替え、仕掛けの攻略やモンスターを倒すアクションゲームです。',
        thumbnail: '/img/work_i07.png'
      }, {
        name: 'TOMB OF OCEAN',
        team: 'ちーむ おふね',
        creator: '嶋田 剛士',
        description: '軍艦を操作して敵を倒す、TPSゲームです。入選したことが今でも信じられません。メンバー各々の個性を出来る限り出しきった結果ということでしょうか。',
        thumbnail: '/img/work_i08.png'
      }
    ]
  }, {
    exhibit: 'gameplanning',
    works: [
      {
        name: '去斬華',
        creator: '山岡 純也',
        description: '『散る』と言うワードにはネガティブな意味が繋がりやすいように感じます。そこで、『花が散る美しさ』と言うポジティブな『散る』を表現した企画です。見やすさと雰囲気の両立にご注目頂けたらと思います。',
        thumbnail: '/img/work_h01.png',
        prize: 1
      }, {
        name: 'チルボット',
        creator: '大東 優介',
        description: '「散り様」を「武器」にしろ！ チルボットは、""一発逆転の爽快感""と""今までやられて来た事に対する開放感""を持ったゲームです！ しかし、普通にやられているだけでは一発逆転は起きませんが、工夫して上手く「散る」事で、必殺技が撃てます！',
        thumbnail: '/img/work_h02.png',
        prize: 2
      }, {
        name: 'Flowers',
        creator: '嶋田 剛士',
        description: '此処では「作品」と呼ばれている企画書ですが、本来は開発用の書類であるべき。いかにして書類の内容に説得力を持たせ、読み手を納得させられるか、考えぬきました。',
        thumbnail: '/img/work_h03.png'
      }, {
        name: '1WeekD',
        creator: '山岡 純也',
        description: 'まさかまさかの、実写企画です。ターゲットに合わせ一番馴染みやすいイメージが『実写』だと思い、このイメージを設定しています。同時に通過した『去斬華』とは違ったゲーム性や雰囲気にご注目頂ければと思います。',
        thumbnail: '/img/work_h04.png'
      }
    ]
  }, {
    exhibit: '3dillustration',
    works: [
      {
        name: 'Chrysocolla',
        creator: '李 郁瑄',
        description: 'クリソコラという鉱石を擬人化したオリジナルキャラクターです。肌黒、強気、民族風のイメージで砂漠地域に住んでいる採掘師にしました。見所は肌の日焼けと汗、汚れと傷です。',
        thumbnail: '/img/work_f01.png',
        prize: 1
      }, {
        name: '大暴れ！金魚すくい？',
        creator: '鄭 雨丹',
        description: '金魚たちがなぜか巨大化して、屋台から逃げ出した！祭りのガキ大将‐ちとりちゃんは金魚たちを捕まえるのか！？今回の作品はアクティブな構図を追求して作りました、キャラクターは勿論、背景のオブジェクトの変形とパースを意識してました。',
        thumbnail: '/img/work_f02.png',
        prize: 2
      }, {
        name: 'Mushroom House',
        creator: '東野 倖己',
        description: '',
        thumbnail: '/img/work_f03.png'
      }, {
        name: '旋廻せし焔の泡',
        creator: '山根 雪乃',
        description: '海底火山に生息するモンスター、ボルケディニ。目にも留まらぬ速さで、狭い海底火山の間も縫うように泳ぐ。怒りが頂点に達した時、体内で生成されたマグマによって、ヒレや体に光りを帯びる。',
        thumbnail: '/img/work_f04.png'
      }
    ]
  }, {
    exhibit: '2dillustration',
    works: [
      {
        name: '若年騎士アルベール',
        creator: '大谷 彬洸',
        description: 'ソーシャルカードゲームを意識して制作したイラスト作品です。キャラクターは勿論ですが背景にも見所を作り全体の情報量を増やすためステンドグラスの配色には力を入れました。',
        thumbnail: '/img/work_g01.png',
        prize: 1
      }, {
        name: 'ラフレシアの旅',
        creator: 'ウィニムイス',
        description: '花世界の美しい花たちに存在を認められていないラフレシアは、認めてもらうために、自分の成長を望み旅に出ると決めた。イラスト構図の全体は憧れの美しい花たちを見上げながら光の元へ向かっている主人公を表現しました。',
        thumbnail: '/img/work_g02.png',
        prize: 2
      }, {
        name: '天使の日',
        creator: '山田 恒輝',
        description: '浮遊感と躍動感をテーマに描きました。天使の日になると翼が生えて、空を飛べるようになる少女たち。飛び慣れていない様子や普段見ることのできない風景を見た感動の表情などを表現しました。',
        thumbnail: '/img/work_g03.png'
      }, {
        name: '煉獄の番人 イフリート',
        creator: '池田 健人',
        description: 'ソーシャルゲームのカードイラストをイメージしてこの作品を描きました。炎に照らされて光る温かみのある肌や金属の表現を特に意識して描いています。熱を帯びた特殊な髪の毛や反射する金属の質感を出すのに苦労しました。',
        thumbnail: '/img/work_g04.png'
      }
    ]
  }, {
    exhibit: '3danimation',
    works: [
      {
        name: 'Big Bone Battle',
        creator: '巨大な人骨と忍者たちが戦いを繰り広げるムービー作品です',
        description: '射手園 智希',
        thumbnail: '/img/work_e01.png',
        prize: 1
      }, {
        name: 'Emptiness',
        creator: '王 瀟',
        description: '「時間の逆戻り」をテーマにした音楽ビデオデモです。歌詞はないため、逆回りの時計や、下から昇っていく雪と女性の手の動きで「逆戻りの時間」を表現してみました。廃墟も「過去に戻りたい動機」を表してみました。実際「時間の逆戻り」は今は不可能なため、「Emptiness」というタイトルを付けました。',
        thumbnail: '/img/work_e02.png',
        prize: 2
      }, {
        name: 'ゲーム「PROJECT STINGER」導入ムービー「決戦」',
        team: '藤原重工',
        creator: '藤宇 渉真',
        description: 'ゲーム「PROJECT STINGER」の導入ムービーを想定して作った作品です。ラスボスとの最終決戦の中で主人公と敵の白熱した戦いをカメラワークやモーションを使って表現しました。',
        thumbnail: '/img/work_e03.png'
      }, {
        name: 'DRAGON 怒りの逆襲',
        creator: '塚原 誉人',
        description: 'ドラゴンが寝ている隙に卵を盗もうとする剣士と怒りのドラゴンの戦闘ムービーです。迫力あふれるドラゴンのモーションと緊迫感の伝わる演出やカメラワークに注目してください。',
        thumbnail: '/img/work_e04.png'
      }
    ]
  }, {
    exhibit: 'drawinganimation',
    works: [
      {
        name: 'otomodachi',
        team: 'KOMADAcorp.',
        creator: '駒田 ひなき',
        description: 'まだ幼い二人の少女はゆるやかで安穏な日々を送っていた。しかし時間というものは二人にとっては残酷なものであった――。少女たちの幼き感情とかわいさを描いたピュアハートフルストーリー。',
        thumbnail: '/img/work_d01.png',
        prize: 1
      }, {
        name: 'コンプリート・システム　＜劇場予告ＰＶ＞',
        team: 'KOMADAcorp.',
        creator: '辻 彩夏',
        description: '20ＸＸ年、近未来の世界。そこで政府と主人公を基軸とした組織の戦いが始まろうとしていた。技術の発展で人々の記憶が管理されるようになった現実社会と仮想空間の両面から繰り広げられるアクションヒューマンドラマ。',
        thumbnail: '/img/work_d02.png',
        prize: 2
      }, {
        name: 'Cut off <re:make>',
        team: 'KOMADAcorp.',
        creator: '駒田 ひなき',
        description: '彼女は過去から逃れられずにいた。彼女＜現実＞は彼女＜過去＞と出逢い、戦い、己の真なる思いへと導かれる。それは彼女自身の過ちが具現化したものであった。',
        thumbnail: '/img/work_d03.png'
      }, {
        name: 'Inherit Harmony',
        team: 'IH制作委員会',
        creator: '仙田 海渡',
        description: '今作で登場するメインキャラクターの一人、『春野　咲樹』が高校に入学して間もない頃に、母である美風が交通事故にあってしまった。事故の影響により、美風の足は歩けなくなってしまっていた。その事実を知った母は、絶望を隠し切れず、悲嘆に明け暮れていた・・・。リハビリも中々うまくいかない日が続き、日に日にふさぎ込んでいく母のことを心配した咲樹は、ある『決心』をする。',
        thumbnail: '/img/work_d04.png'
      }
    ]
  }, {
    exhibit: 'webdesign',
    works: [
      {
        name: 'Precious Letter',
        creator: '藤岡 美織',
        description: '結婚式の２次会用の『WEB招待状』作成サービスです。必要な情報を入力するだけで、簡単に２次会への招待サイトが作成可能！ あとはメールにURLを添えて送るだけ。お手軽でスマートに、忙しい幹事さんをサポートします',
        thumbnail: '/img/work_b01.png',
        url: 'http://click.ecc.ac.jp/~dw3a08/sotsusei/',
        prize: 1
      }, {
        name: 'DRIPET',
        creator: '斉藤 麻亜子',
        description: '小学生向けの職業体験施設が運営するWebサービス「ドリペット」。ゲームで遊びながら、様々な職業の存在を知り、夢を持ってもらったり、もっと広い視野で夢を見てもらうことが目的です。ぜひ遊んでみてください♪',
        thumbnail: '/img/work_b02.png',
        url: 'http://click.ecc.ac.jp/~dw3a05/DRIPET/',
        prize: 2
      }, {
        name: 'KARUKU',
        creator: '村島 由希絵',
        description: '海外旅行で必要な服を現地でレンタルできるサービスです。現地のスタイリストにコーディネートを丸投げする“おまかせスタイリング”と、自分の好きなスタイリングが選べる“your select”があります。',
        thumbnail: '/img/work_b03.png',
        url: 'http://click.ecc.ac.jp/~wd2a03/karuku/'
      }, {
        name: 'Hey!Job',
        creator: '城間 陽菜子',
        description: '高校生ミライ発見応援サービスです。やりたいこと・興味のないことがなく進路を見つけれない高校生を対象に、診断テストやインターンシップの紹介など、様々なコンテンツによってミライについて考えます。',
        thumbnail: '/img/work_b04.png',
        url: 'http://click.ecc.ac.jp/~dw1a05/heyjob/'
      }
    ]
  }, {
    exhibit: 'graphicdesign',
    works: [
      {
        name: 'De\'Hsuan',
        creator: '顔 廷軒',
        description: 'カリフォルニアから発想したブランドです。リラックス、リフレッシュというコンセプトを中心に、日々忙しい働いてる女性に、日常にも使えやすい、スタイリッシュになれるデニムを提案します。今回はブランド初路面店代官山店の5周年イベントを開催します。',
        thumbnail: '/img/work_a01.png',
        prize: 1
      }, {
        name: 'Sweet\'s',
        creator: '宮崎 菜津美',
        description: '可愛い妖精達「Sweet\'s（スウィーティーズ）」が繰り広げる日常系新規アニメ。あなたも「ウマかわ」な世界に行ってみませんか？',
        thumbnail: '/img/work_a02.png',
        prize: 2
      }, {
        name: 'TRY IT',
        creator: '芦田 恵利',
        description: 'オリジナルのファッションブランドを作りました。今回はブランドのコレクションブックやショップバック、その他いろいろな小物を作ったので是非、私のブースへ見に来てください！',
        thumbnail: '/img/work_a03.png'
      }, {
        name: '高浜秀実展「秘められた力」',
        creator: '高浜 花織',
        description: '"架空の美術作家の個展企画。個展テーマは「秘められた力」。描かれた動植物を見て生命力や力強さを感じてもらうことで、少しでも元気になったり勇気を持って欲しい。[制作協力：京都造形芸術大学日本画コース 高浜秀実]"',
        thumbnail: '/img/work_a04.png'
      }
    ]
  }, {
    exhibit: 'systemapplication',
    works: [
      {
        name: 'funnyCamera',
        team: 'FC3',
        creator: '浅田 清志',
        description: 'funnycameraの良さは実際に触れてみないと分かりません！触れてみると笑顔になること間違い無し！又現在App Storeにて公開中です。ITゼミで検索',
        thumbnail: '/img/work_c01.png',
        prize: 1
      }, {
        name: 'PhotoShare',
        team: 'PS2',
        creator: 'レー バンタン',
        description: '写真をシェアできるシステムです。アルバム写真を作成して、QRCodeやURLよりアルバムに参加できます。参加者はアルバムに写真を追加したり、コメントしたりすること ができます。このシステムの特徴は自分の写真を、他人にすぐにシェアできるところです。',
        thumbnail: '/img/work_c02.png',
        url: 'https://photoshare.space',
        prize: 2
      }, {
        name: 'らりーつくーる',
        team: 'らりーつくーる制作部',
        creator: '森田 賢人',
        description: '地域の活性化やイベントの盛り上げ役として「モバイルスタンプラリー」をお手軽に作成・編集できるWEBアプリです。頑張って作ったので体験してみてください。',
        thumbnail: '/img/work_c03.png'
      }, {
        name: 'memoryfresh',
        team: 'チームむらた',
        creator: '阪本 裕太',
        description: 'Android 6.0対応のメモリ解放アプリです。OSのセキュリティが高まり、従来の方法ではできなかったメモリ解放。世界初、Android6.0対応RowMemoryKiller形式の力作メモリ解放アプリです。',
        thumbnail: '/img/work_c04.png'
      }
    ]
  }
];
