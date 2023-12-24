# Custom NPX Command to introduce myself




### Welcome to my NPX introduction command! To check it out run:<br>
```bash
npx itsmeparthiba
```
### Here is how it looks:
<br>

![npx](https://github.com/Parthiba-Mukhopadhyay/custom_npx_intro/assets/89331202/860decc3-8d5c-4816-8218-a4385926a8b6)

Let's walk through the steps how to build it from scratch:

## Step 1: Choose a Unique Name

I've chosen the name `itsmeparthiba` for this package. Feel free to replace it with your preferred name throughout the instructions. Lets consider `my-npx-intro` for now.

## Step 2: Create a Project Directory

```bash
mkdir my-npx-intro
cd my-npx-intro
```

## Step 3: Initialize Your Package

```bash
npm init -y
```

## Create an Executable Script

Inside the project directory, create a JavaScript file named `index.js`. This script is the main executable file.<br>
I used several packages to style my text that includes:

- **[Figlet](https://www.npmjs.com/package/figlet):** Used for ASCII art fonts.
- **[Gradient-String](https://www.npmjs.com/package/gradient-string):** Adds gradient colors to text.
- **[Text-Wrap](https://www.npmjs.com/package/text-wrap):** Wraps the text to fit within the terminal width.
- **[Chalk](https://www.npmjs.com/package/chalk):** Styles the text with colors.
- 

## Update `package.json`

Make sure to define the `bin` property in your `package.json`:

```json
"bin": {
  "my-npx-intro": "./index.js"
},
```

## Test Your Command

Link the package using `npm link` and test it with:

```bash
npx my-npx-intro
```

If it looks good, unlink the package with `npm unlink -g my-npx-intro`.

## Publish Your Package

- Create an [npm account](https://www.npmjs.com/).
- Log in to your account using `npm login`.
- Publish the package with `npm publish`.

Now, you have your own NPX introduction command! Share it with your friends and make your terminal introductions more stylish and personalized.
