import { Parser } from 'htmlparser2';

const parser = new Parser({
  onopentag: (name, attributes) => {
    console.log(name, attributes)
    
    return 'a'
  }
}, {
  lowerCaseTags: false
});

parser.write('<Card title=""><img src="" /></Card>')
parser.end();
