var formatDate = require('./formatDate');

function formatUserWord(userWord) {
    return {
        id: userWord.id,
        personId: userWord.personId,
        userId: userWord.userId,
        userWord: userWord.userWord,
        createdAt: formatDate(userWord.createdAt),
        updatedAt: formatDate(userWord.updatedAt),
    }
}

module.exports = formatUserWord;
