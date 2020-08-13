# @ks89/ngx-codemirror

**Fork of the official [ng2-codemirror](https://github.com/chymz/ng2-codemirror) library with angular-universal / Server side rendering support.**

<br>

**Tested only with Angular 10.x.x and angular-cli 10.x.x**


## Installation

`npm i --save @ks89/ngx-codemirror@latest codemirror`

## Configuration

1. Install `npm i --save-dev @types/node`
2. Modify your tsconfig.app.json adding this:

    ```
    "compilerOptions": {
        "types": [
              "node"
        ]
    }
    ```

3. Add this in your main tsconfig.json (if already not available):

    ```
    "compilerOptions": {
        "typeRoots": [
            "node_modules/@types"
        ]
    }
    ```

4. Import language in main.ts

    ```
    import 'codemirror/mode/htmlmixed/htmlmixed';
    import 'codemirror/mode/javascript/javascript';
    ```

5. Add `"node_modules/codemirror/lib/codemirror.js"` in all scripts arrays of yout angular.json file
    
    ```
    ...
    "architect": {
        "build": {
            "builder": "@angular-devkit/build-angular:browser",
            "options": {
                ...
                "scripts": [
                  "node_modules/codemirror/lib/codemirror.js"
                ],
                ...
            }
        }
    },
    ...
    "test": {
        ...
        "scripts": [
          "node_modules/codemirror/lib/codemirror.js"
        ],
        ...
    }
    
    ```

<br><br>

## Contributions

To build this project run `npm run build:lib && npm start` in the root folder.


## License

The MIT License (MIT)

Copyright (c) 2018-2020 Stefano Cappa (Ks89)
Copyright (c) 2016 Simon Babay

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
