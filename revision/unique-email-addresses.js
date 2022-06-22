/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function (emails) {
  let uniqueEmails = new Set()
  emails.forEach((email) => {
    uniqueEmails.add(cleanEmail(email))
  })
  return uniqueEmails.size
}

var cleanEmail = (email) => {
  let emailArray = email.split('@')
  let domainName = emailArray[1]
  let userName = emailArray[0]
  let userNameArray = userName.split('+')
  let prefix = userNameArray[0].replaceAll('.', '')
  return prefix + '@' + domainName
}

// tc - O(n*m)
// sc - O(n*m)
