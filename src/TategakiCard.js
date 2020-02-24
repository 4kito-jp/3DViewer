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
      'default', () => {
        this.setState({
          mode: 'default'
        })
      }
    )
  }

  render() {
    if (this.state.mode == 'what_is_kaendoki') {
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
    else if (this.state.mode == 'feature_of_kaendoki') {
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
    else {
      return (
        <div>
        </div>
      )
    }
  }
}

export default TategakiCard
