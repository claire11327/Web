# Readme for About-us Preprocessor version
## Installtion
* skip if you already install pug-cli & node-sass
* install [npm](https://docs.npmjs.com/cli/v7/commands/npm-install) first
- install pug-cli
    ``` 
        npm i pug-cli 
    ```

- install node-sass
    ``` 
        npm i node-sass 
    ```

## Compile
- compile pug
    ``` 
        npx pug app/index.pug -o dist/ 
    ```
- compile sass
    ```  
        npx sass ./app/app.sass ./dist/app.css 
    ```

## Result
- The results are store in dist/. Open "dist/index.html" to see the result.