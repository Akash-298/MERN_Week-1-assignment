/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  let stri = s.split("").sort().join("");
         let x =       t.split("").sort().join("");
    // for(let i=s.length-1;i>=0;i--){
    //     stri+= s[i];
    // }
    // // console.log(stri);

    // console.log(stri)
    // console.log(x)
     if(stri==x)
        return true

    return false    
}

module.exports = isAnagram;
