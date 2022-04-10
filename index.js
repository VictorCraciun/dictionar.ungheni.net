	const wordInput = document.querySelector('#wordInput');
	const buttonAddWord = document.querySelector('#buttonAddWord');
	const buttonSearchWord = document.querySelector('#buttonSearchWord');
	const wordDescription = document.querySelector('#wordDescription');
	const dictionaryWords = [];
	const dictionaryWordDescriptions = [];
	buttonAddWord .addEventListener('click', addWordToDictionary);
	buttonSearchWord.addEventListener('click', findWordInDictionary);

	function addWordToDictionary() {
		let inputText = String(wordInput.value).toLowerCase();
		let description = String(wordDescription.value).toLowerCase();
		if (dictionaryWords.indexOf(inputText) == -1 && inputText !== "") {
			if (description !== "") {
				dictionaryWords.push(inputText);
				dictionaryWordDescriptions [inputText] = description;
				wordDescription.value = null;
				wordDescription.placeholder = "Cuvânt adăugat în dicționar";
			} else {
				wordDescription.value = null;
				wordDescription.placeholder = "Definiția cuvântului este goală! Adaugă o definiție aici:";
			}
		} else {
			wordDescription.value = null;
			wordDescription.placeholder = "Cuvântul există deja";
		}
	}

	function findWordInDictionary() {
		let inputText = String(wordInput.value).toLowerCase();
		if (dictionaryWords.indexOf(inputText) !== -1) {
			wordDescription.value = dictionaryWordDescriptions [inputText];
		} else {
			wordDescription.value = null;
			wordDescription.placeholder = "Cuvântul nu a fost găsit, introduce-ți definiția aici după care apasă butonul adaugă!";
		}
	}