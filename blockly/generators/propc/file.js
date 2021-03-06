/**
 * Visual Blocks Language
 *
 * Copyright 2014 Michel Lampo.
 *
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Generating Prop-C for file blocks.
 * @author michel@creatingfuture.eu  (Michel Lampo)
 */
'use strict';

//define blocks
if (!Blockly.Language)
    Blockly.Language = {};


Blockly.Language.file_open = {
    category: 'File',
    helpUrl: '',
    init: function() {
        this.setColour(180);
        this.appendDummyInput("")
            .appendTitle("Open file")
            .appendTitle(new Blockly.FieldTextInput('file.txt'), 'FILE')
            .appendTitle("mode")
            .appendTitle(new Blockly.FieldDropdown([["read", "r"], ["write", "w"]]), "MODE");
        this.setOutput(true, 'Pointer');
    }
};

Blockly.Language.file_close = {
    category: 'File',
    helpUrl: '',
    init: function() {
        this.setColour(180);
        this.appendDummyInput("")
            .appendTitle("Close file");
        this.appendValueInput('FILE');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(true);
    }
};


// define generators
Blockly.propc = Blockly.Generator.get('propc');

Blockly.propc.file_open = function() {
    var file = this.getTitleValue('FILE');
    var declared_file = file.replace( ".txt", "" );
    var mode = this.getTitleValue('MODE');

    Blockly.propc.setups_[ "file" + declared_file ] = 'FILE* fp_' + declared_file + ' = fopen("' + file + '", "' + mode + '");\n';

    return '';
};


Blockly.propc.file_close = function() {
    var file = Blockly.propc.valueToCode(this, 'FILE', Blockly.propc.ORDER_UNARY_PREFIX);
    
    if ( Blockly.propc.setups_[ "file" + file ] === undefined )
    {
        return '// Missing file declaration';
    } else
    {
        return 'fclose(' + file + ');\n';
    }
};