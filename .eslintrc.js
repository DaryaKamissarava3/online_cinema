module.exports = {
  "env": {
    "es6": true,
    "browser": true,
    "node": true
  },
  "extends": ["airbnb"],
  "plugins": ["babel", "import", "react"],
  "rules": {
    "linebreak-style": 0,
    "import/prefer-default-export": "off"
  },
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  "overrides": [
    {
      "files": ["*.jsx"],
      "rules": {
        "react/prop-types": "off",
      }
    }
  ]
}
