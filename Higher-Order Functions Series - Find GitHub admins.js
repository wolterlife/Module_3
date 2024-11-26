// https://www.codewars.com/kata/582dace555a1f4d859000058/

function findAdmin(list, language) {
    return list.filter(developer => 
      developer.language === language && developer.githubAdmin === 'yes'
    );
  }
  