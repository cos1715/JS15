# Lecture

## Javascript.info

> [DOM](https://uk.javascript.info/modifying-document)

# JS Homework

Feel free to modify test data or add new data
It will help for better testing

## Clock (optional)

Create a function that return current time  
Create a function that renders time in a DOM  
Add styles for rendered clock

## Github users (optional)

Fetch you account details from github  
Show avatar, name, nickname, repos count, number of followers.  
Load user organisations and show their images in card  
\* Extra task add loading indicator  
Fetch github users https://api.github.com/users  
Show their info same as for your user

You may browse for design examples
[Design examples](https://codepen.io/tag/user-card?cursor=ZD0xJm89MCZwPTE=)

### Tips

> Add [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension  
> Add type module script tag

```js script
<script type="module" src="./file.js"></script>
```

> Add import in your file  
> [Documentation](https://github.com/octokit/octokit.js) about library

```js script
import { Octokit } from "https://esm.sh/octokit";
```

> Create an [access token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)  
> And use it in app

```js script
new Octokit({
  auth: "YOUR_KEY",
});
```
