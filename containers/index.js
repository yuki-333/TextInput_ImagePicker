import Home from "../components/Home"

import { connect } from "react-redux";

import { addWord } from '../actions'


const mapStateToProps = state => {
   return {
       title: state.title,
       word: state.words.list,
   };
};

const mapDispatchToProps = dispatch => {
   return {
       onAddWord: word => {
           dispatch(addWord(word))
       }
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
