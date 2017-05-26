#!/usr/bin/env node

import { DataSet } from "./data-set";

const parser = require("nomnom");

parser.command('data-set')
    .options({
        chars: {
            position: 1,
            help: "Test file to run"
        },
        output: {
            position: 2,
            default: "photoshop-data-set.txt",
            help: "Output file name"
        }
    })
    .callback(options => {

        const dataset = new DataSet(options)
        dataset.generate()

    })
    .help('generate photoshop data-set file');

parser.parse()
