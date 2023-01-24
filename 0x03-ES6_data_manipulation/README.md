# 0x11. ES6 data manipulation

## Description:bulb:

Array... Array everywhere

- How to use map, filter and reduce on arrays
- Typed arrays
- The Set, Map, and Weak link data structures

## Technologies & Tools:computer:

[![Jest](https://img.shields.io/badge/≡-Jest-C21325?logo=Jest&style=flat-square&labelColor=282828&logoColor=C21325)](https://jestjs.io/)
[![Git](https://img.shields.io/badge/≡-Git-F05032?logo=git&style=flat-square&labelColor=282828)](https://git-scm.com/)
[![Ubuntu](https://img.shields.io/badge/≡-Ubuntu-E95420?&style=flat-square&logo=Ubuntu&labelColor=282828)](https://ubuntu.com/)
[![Babel](https://img.shields.io/badge/≡-Babel-F9DC3E?logo=Babel&style=flat-square&labelColor=282828)](https://babeljs.io/)
[![JavaScript](https://img.shields.io/badge/≡-JavaScript-F7DF1E?logo=javascript&style=flat-square&labelColor=282828)](https://developer.mozilla.org/en-US/docs/Web/javascript)
[![GNU_Bash](https://img.shields.io/badge/≡-GNU_Bash-4EAA25?logo=GNU-Bash&style=flat-square&labelColor=282828)](https://www.gnu.org/software/bash/)
[![Nodejs](https://img.shields.io/badge/≡-Nodejs-339933?logo=Node.js&style=flat-square&labelColor=282828)](https://nodejs.org/en/)
[![Vim](https://img.shields.io/badge/≡-Vim-019733?logo=Vim&style=flat-square&logoColor=019733&labelColor=282828)](https://www.vim.org/)
[![Vagrant](https://img.shields.io/badge/≡-Vagrant-1563FF?logo=vagrant&style=flat-square&logoColor=1563FF&labelColor=282828)](https://www.vagrantup.com/)
[![VS_Code](https://img.shields.io/badge/≡-VS_Code-007ACC?logo=visual-studio-code&style=flat-square&logoColor=007ACC&labelColor=282828)](https://code.visualstudio.com/)
[![ESLint](https://img.shields.io/badge/≡-ESLint-4B32C3?logo=ESLint&style=flat-square&labelColor=282828&logoColor=4B32C3)](https://eslint.org/)
[![GitHub](https://img.shields.io/badge/≡-GitHub-181717?logo=GitHub&style=flat-square&labelColor=282828)](https://github.com/)

---

## Resources:books:

Read or watch:

- [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [Typed Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays)
- [Set Data Structure](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)
- [Map Data Structure](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)
- [WeakMap](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap)

---

## Requirements:hammer:

- Ubuntu 18.04 LTS using NodeJS 12.22.x
- Jest Testing Framework
- ESLint

### Install NodeJS 12.22.x

```console
foo@pop-os:~$ curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
foo@pop-os:~$ sudo bash nodesource_setup.sh
foo@pop-os:~$ sudo apt install nodejs -y
```

### Check version

```console
foo@pop-os:~$ nodejs -v
v12.22.1
foo@pop-os:~$ npm -v
6.14.12
```

### Install Jest, Babel, and ESLint

```console
foo@pop-os:~$ npm install --save-dev jest
foo@pop-os:~$ npm install --save-dev babel-jest @babel/core @babel/preset-env
foo@pop-os:~$ npm install --save-dev eslint
foo@pop-os:~$ npm install
```

---

## Files:card_file_box:

### [0. Basic list of objects](./0-get_list_students.js)

### [1. More mapping](./1-get_list_student_ids.js)

### [2. Filter](./2-get_students_by_loc.js)

### [3. Reduce](./3-get_ids_sum.js)

### [4. Combine](./4-update_grade_by_city.js)

### [5. Typed Arrays](./5-typed_arrays.js)

### [6. Set data structure](./6-set.js)

### [7. More set data structure](./7-has_array_values.js)

### [8. Clean set](./8-clean_set.js)

### [9. Map data structure](./9-groceries_list.js)

### [10. More map data structure](./10-update_uniq_items.js)

### [11. Weak link data structure](./100-weak.js)

---

## Author

- **Joseph Mahiuha** (@Mahiuha) - [<img src="https://img.shields.io/badge/Portfolio-20d6fe.svg?&style=plastic"/>](https://mahiuha.github.io/josephmahiuha/)
  [<img src="https://img.shields.io/badge/Twitter-1DA1F2.svg?&style=plastic&logo=twitter&logoColor=white"/>](https://twitter.com/Joseph_Mahiuha)
  [<img src="https://img.shields.io/badge/Linkedin-0A66C2.svg?&style=plastic&logo=linkedin&logoColor=white"/>](https://www.linkedin.com/in/joseph-mahiuha-498a52162/)
  [<img src="https://img.shields.io/badge/GitHub-181717.svg?&style=plastic&logo=github&logoColor=white"/>](https://github.com/Mahiuha)
