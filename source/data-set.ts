const fs = require('fs');

type Chars = { [key: string]: number };

export class DataSet {

    private chars: Chars;
    private output: string;
    private header = 'id,word';

    constructor({ chars, output }) {

        /**
         * if char is a path, try to read from it
         */
        if (fs.existsSync(chars)) {
            chars = fs.readFileSync(chars).toString('utf8')
        }

        this.chars = this.unique(chars);
        this.output = output;

    }

    private unique(chars: string): Chars {

        const list = {}

        chars.split('').forEach((char, index) => {
            list[char] = index
        })

        return list

    }

    public generate() {

        const stream = fs.createWriteStream(this.output);

        stream.write(`${this.header}\n`);

        for (let char in this.chars) {
            stream.write(`${this.chars[char]}, ${char}\n`);
        }

        stream.end();

    }

}
