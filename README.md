# The Speach
**A simple voice recognizer. **

## Installation

```bash
<script src="speach.min.js"></script>
```

## Usage
Easy to use.

**JS selector**
```javascript
    new Speach({
      language: 'en-US',
      html: {
        buttons: {
          start: '#speach_start',
          stop: '#speach_stop',
          clear: '#speach_clear'
        },
        result: '#speach_result',
      }
    }).run();
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
Please make sure to update tests as appropriate.