import React, { Component } from 'react'

class TategakiCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mode: 'default'
    }

    this.emitter = this.props.emitter;
    this.emitter.addListener(
      'what_is_kaendoki', () => {
        this.setState({
          mode: 'what_is_kaendoki'
        })
      }
    )

    this.emitter.addListener(
      'feature_of_kaendoki', () => {
        this.setState({
          mode: 'feature_of_kaendoki'
        })
      }
    )

    this.emitter.addListener(
      'differences_of_kaendoki', () => {
        this.setState({
          mode: 'differences_of_kaendoki'
        })
      }
    )

    this.emitter.addListener(
      'joumon_culture', () => {
        this.setState({
          mode: 'joumon_culture'
        })
      }
    )

    this.emitter.addListener(
      'climate_of_joumon', () => {
        this.setState({
          mode: 'climate_of_joumon'
        })
      }
    )

    this.emitter.addListener(
      'village_of_joumon', () => {
        this.setState({
          mode: 'village_of_joumon'
        })
      }
    )

    this.emitter.addListener(
      'art_and_kaendoki', () => {
        this.setState({
          mode: 'art_and_kaendoki'
        })
      }
    )

    this.emitter.addListener(
      'XVL', () => {
        this.setState({
          mode: 'XVL'
        })
      }
    )



    this.emitter.addListener(
      'default', () => {
        this.setState({
          mode: 'default'
        })
      }
    )
  }

  render() {
    if (this.state.mode === 'what_is_kaendoki') {
      return (
        <div>
          <div className="Tategaki">
            <p className="Tategaki--font__title">１．火焔土器とは</p>
            <p className="Tategaki--font__normal">　「<ruby>火焔<rt>かえん</rt></ruby><ruby>土器<rt>どき</rt></ruby>」とは、1936年12月31日に<ruby>近藤<rt>こんどう</rt></ruby><ruby>篤三郎<rt>とくさぶろう</rt></ruby>氏によって現長岡市の<ruby>馬高<rt>うまたか</rt></ruby>遺跡で発見され、復元された土器のひとつに付けられた愛称。その形が燃え上がる焔に似ていたことから、この名称が生まれました。その後、火焔土器似た特徴を持つ土器が発見されるようになり、同様の土器を「火焔型土器」と呼ぶようになりました。
            </p>
          </div>
        </div>
      )
    }
    else if (this.state.mode === 'feature_of_kaendoki') {
      return (
        <div>
          <div className="Tategaki">
            <p className="Tategaki--font__title">２．火焔型土器の特徴</p>
            <p className="Tategaki--font__normal">　火焔型土器の最大の特徴は、<ruby>口縁<rt>こうえん</rt></ruby>部に付く<ruby>鶏冠状<rt>けいかんじょう</rt></ruby><ruby>把手<rt>はしゅ</rt></ruby>と<ruby>鋸歯状<rt>きょしじょう</rt></ruby>突起、そして原則として縄文を使用せず、隆線文と沈線文によって施された浮彫的な文様です。頸部と胴部上半部にはS字状隆線文および渦巻き状隆線文、胴部下半部には逆U字状隆線文が描かれています。
            </p>
          </div>
        </div>
      )
    }
    else if (this.state.mode === 'differences_of_kaendoki') {
      return (
        <div>
          <div className="Tategaki">
            <p className="Tategaki--font__title">３．火焔土器と火焔型土器の違い</p>
            <p className="Tategaki--font__normal">　「火焔土器」とは、1936年12月31日に近藤篤三郎氏によって現長岡市の馬高遺跡で発見され、復元された土器のひとつに付けられた愛称。その形が燃え上がる焔に似ていたことから、この名称が生まれました。その後、火焔土器と似た特徴を持つ土器が発見されるようになり、同様の土器を「火焔型土器」と呼ぶようになりました。
            </p>
          </div>
        </div>
      )
    }
    else if (this.state.mode === 'joumon_culture') {
      return (
        <div>
          <div className="Tategaki">
            <p className="Tategaki--font__title">４．縄文文化の時代</p>
            <p className="Tategaki--font__normal">　縄文時代の終わりは今からおよそ2,900年前とされています。縄文時代は約1万年も継続した息の長い狩猟採集活動を中心とした時代だったのです。考古学では、この長い縄文時代の変化を理解するために、便宜的に、古いほうから草創期・早期・前期・中期・後期・晩期の6時期に区分しています。火焔型土器は、中期の中頃に作られました。
            </p>
          </div>
        </div>
      )
    }
    else if (this.state.mode === 'climate_of_joumon') {
      return (
        <div>
          <div className="Tategaki">
            <p className="Tategaki--font__title">５．縄文時代の気候・環境</p>
            <p className="Tategaki--font__normal">　草創期の初頭は、氷河時代の終わりにあたり、まだまだ寒冷な気候でした。その後、草創期前半にはやや温暖化を始めますが、草創期後半には寒冷期と温暖期が交互に入れ替わる不安定な気候が続きます。火焔型土器が作られていた5,300年程前（中期の中頃）は、現在の気候に近く、新潟県信濃川沿岸には雪も降り、多雪地帯を形成していたようです。この温暖な気候は、後期に向けて寒冷化し、晩期になると現在の気候に近くなったと考えられています。
            </p>
          </div>
        </div>
      )
    }
    else if (this.state.mode === 'village_of_joumon') {
      return (
        <div>
          <div className="Tategaki">
            <p className="Tategaki--font__title">６．縄文時代の村・家</p>
            <p className="Tategaki--font__normal">　火焔型土器の時代に営まれた拠点的な村は、ある一定の領域を確保しながら河川に近接する段丘などの平坦面に営まれています。典型的な拠点集落である馬高遺跡（新潟県長岡市）などの調査事例から、広場を囲み住居が放射状に分布する形態をとることが判明しています。このような形態を示す村を「環状集落」と呼びます。環状集落の広場には、墓穴と推定される浅い楕円形の土坑が分布することが多いようです。
            </p>
          </div>
        </div>
      )
    }
    else if (this.state.mode === 'art_and_kaendoki') {
      return (
        <div>
          <div className="Tategaki">
            <p className="Tategaki--font__title">７．火焔型土器と芸術</p>
            <p className="Tategaki--font__normal">　「芸術は爆発だ」の発言で有名な芸術家の岡本太郎。彼は1951年に東京国立博物館で縄文土器を見て衝撃を受け、「なんだコレは！」と叫んだと言われています。翌年には美術雑誌「みずゑ」に「四次元との対話 - 縄文土器論」を発表。従来の考古学的な解釈ではなく、縄文人の宇宙観を土台とした社会学的、哲学的な解釈を行いました。そのことが後々建築やデザイン界を中心に反響を呼び、縄文ブームを起こしたのだとか。
            </p>
          </div>
        </div>
      )
    }
    else if (this.state.mode === 'XVL') {
      return (
        <div>
        </div>
      )
    }


    else {
      return (
        <div>
        </div>
      )
    }
  }
}

export default TategakiCard
