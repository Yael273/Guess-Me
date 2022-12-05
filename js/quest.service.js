'use strict'

var gQuestsTree
var gCurrQuest
var gPrevQuest = null

const STORAGE_KEY = 'questTree'

function createQuestsTree() {

  // gQuestsTree = _loadQuestsFromStorage()

  gQuestsTree = createQuest('Male?')
  gQuestsTree.yes = createQuest('Gandhi')
  gQuestsTree.no = createQuest('Rita')
  gCurrQuest = gQuestsTree
  gPrevQuest = null
  
  if (_loadQuestsFromStorage()) {
    gQuestsTree = _loadQuestsFromStorage();
}

  // _saveQuestsToStorage()

}

function createQuest(txt) {
  return {
    txt: txt,
    yes: null,
    no: null,
  }
}

function isChildless(node) {
  return node.yes === null && node.no === null
}

function moveToNextQuest(res) {
  // TODO: update the gPrevQuest, gCurrQuest global vars
  gPrevQuest = gCurrQuest
  if (res === 'yes') gCurrQuest = gCurrQuest.yes
  else gCurrQuest = gCurrQuest.no

}

function addGuess(newQuestTxt, newGuessTxt, lastRes) {
  // TODO: Create and Connect the 2 Quests to the quetsions tree
  var newQuest = createQuest(newQuestTxt);
  newQuest.yes = createQuest(newGuessTxt);
  newQuest.no = createQuest(gCurrQuest.txt);
  gPrevQuest[gLastRes] = newQuest;
  gCurrQuest = gQuestsTree;

  _saveQuestsToStorage()
}

function getCurrQuest() {
  return gCurrQuest
}

function _saveQuestsToStorage() {
  saveToStorage(STORAGE_KEY, gQuestsTree)
}

function _loadQuestsFromStorage() {
  loadFromStorage(STORAGE_KEY)
}