# Week 2

- Performing configuration via Webpack.

- We will be writing tests.


package.json config

yarn -v: versiyon kontrolü

npm install -g yarn: 

yar init -y: package.json oluşuyor

Install işlemleri için

"devDependencies": {

    "@babel/cli": "^7.13.10",
    
    "@babel/core": "^7.13.10",
    
    "@babel/preset-env": "^7.13.10",
    
    "babel-jest": "^26.6.3",
    
    "jest": "^26.6.3",
    
    "terser-webpack-plugin": "^5.1.1",
    
    "webpack": "^5.24.4",
    
    "webpack-cli": "^4.5.0",
    
    "webpack-dev-server": "^3.11.2"
    
  },
  
  
  "engines": {
  
    "node": "^14.0.0"
    
  },
  
  "babel": {
  
    "presets": [
    
      "@babel/env"
      
    ]
    
  },
  
  "scripts": {
  
    "dev": "webpack serve --open --mode development",
    
    "build": "webpack --mode production",
    
    "test": "jest --coverage"
    
  },
  
  "jest": {
  
    "collectCoverageFrom": [
    
      "src/**/*.(js|jsx)"
      
    ],
    
    "testRegex": "tests/.*-test\\.(js|jsx)"
    
  }
  
}

