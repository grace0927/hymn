import { connect } from 'react-redux';

const LyricPad = (props) => (
  <div className="lyric-pad">
    {props.lyric}
    <style jsx>{`
      .lyric-pad {
        padding-top: 0.625rem;
      }
    `}</style>
  </div>
)

const defaultDisplay = "Under Construction";

const getLyric = (book, hymn) => {
  if (hymn == "as the deer") {
    return "abc";
  }

  return defaultDisplay;
}

const mapStateToProps = state => {
  const book = state.book || "blue";
  const hymn = state.hymn || 0;
  const lyric = getLyric(book, hymn);
  state = Object.assign(state, {
    lyric: lyric || defaultDisplay,
  });

  return state;
}

export default connect(
  mapStateToProps
)(LyricPad)
