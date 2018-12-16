import Dropdown from './Dropdown'
import books from '../resource/book.config'

const getHymnBooks = () => {
  let options = []

  for (let [key, config] of Object.entries(books)) {
    options.push({
      'id': config.id,
      'title': config.ch,
      'val': config.name,
    })
  }
  return options
}

const getHymnTitles = () => {
  return []
}

const Header = () => (
  <div className="header">
    <Dropdown id="book" options={getHymnBooks()} name="book" label="歌本" default="请选择歌本">
    </Dropdown>
    <Dropdown id="title" options={getHymnTitles()} name="title" label="歌名" default="请选择诗歌">
    </Dropdown>
    <style jsx>{`
      .header {
        border-bottom: 0.0625rem solid black;
        padding-bottom: 1rem;
        font-size: 1.25rem;
      }
      .lang {
        display: inline-block;
      }
      .pull-right {
        float: right;
      }
    `}</style>
  </div>
)

export default Header
