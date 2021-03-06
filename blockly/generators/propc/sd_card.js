/*
 
 This file contains support for the sd_card functions built into C
 
 Author: Vale Tolpegin ( valetolpegin@gmail.com )
 
 *Copyright 2014 Vale Tolpegin.
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
'use strict';

if ( !Blockly.Language )
    Blockly.Language = {};

//Creating GUI for sd card blocks
Blockly.Language.sd_card_mount = {
    category: 'SD_CARD',
    helpUrl: '',
    init: function() {
        this.setColour( 230 );
        this.appendDummyInput( "" )
            .appendTitle( "Mount SD_CARD" );
        this.appendDummyInput( "" )
            .appendTitle( "DO pin" )
            .appendTitle( new Blockly.FieldDropdown( profile.default.digital ), 'DO_PIN' );
        this.appendDummyInput( "" )
            .appendTitle( "CLK pin" )
            .appendTitle( new Blockly.FieldDropdown( profile.default.digital ), 'CLK_PIN' );
        this.appendDummyInput( "" )
            .appendTitle( "DI pin" )
            .appendTitle( new Blockly.FieldDropdown( profile.default.digital ), 'DI_PIN' );
        this.appendDummyInput( "" )
            .appendTitle( "CS pin" )
            .appendTitle( new Blockly.FieldDropdown( profile.default.digital ), 'CS_PIN' );
        this.setNextStatement( true, null );
        this.setPreviousStatement( true, null );
    }
};

Blockly.Language.sd_card_int_to = {
    category: 'SD_CARD',
    helpUrl: '',
    init: function() {
        this.setColour( 230 );
        this.appendDummyInput( "" )
            .appendTitle( "SD_CARD int to" );
        this.appendDummyInput("")
            .appendTitle( "Variable" )
            .appendTitle(new Blockly.FieldPointer(Blockly.LANG_VARIABLES_SET_ITEM), 'VAR');
        this.appendDummyInput( "" )
            .appendTitle( "Filename:" )
            .appendTitle(new Blockly.FieldImage(Blockly.pathToBlockly +
                                            'media/quote0.png', 12, 12))
            .appendTitle(new Blockly.FieldTextInput(''), 'TEXT')
            .appendTitle(new Blockly.FieldImage(Blockly.pathToBlockly +
                                            'media/quote1.png', 12, 12));
        this.appendValueInput( 'VALUE' )
            .appendTitle( "Value: " );
        this.appendValueInput( 'ENDING_POINT_VALUE' )
            .appendTitle( "Ending point read:" );
        this.setNextStatement( true, null );
        this.setPreviousStatement( true, null );
    },
    getPointer: function() {
        return [this.getTitleValue('VAR')];
    },
    renameVar: function(oldName, newName) {
        if (Blockly.Names.equals(oldName, this.getTitleValue('VAR'))) {
            this.setTitleValue(newName, 'VAR');
        }
    }
};

Blockly.Language.sd_card_int_from = {
    category: 'SD_CARD',
    helpUrl: '',
    init: function() {
        this.setColour( 230 );
        this.appendDummyInput( "" )
            .appendTitle( "SD_CARD int from" );
        this.appendDummyInput("")
            .appendTitle( "Variable" )
            .appendTitle(new Blockly.FieldPointer(Blockly.LANG_VARIABLES_SET_ITEM), 'VAR');
        this.appendDummyInput( "" )
            .appendTitle( "Filename:" )
            .appendTitle(new Blockly.FieldImage(Blockly.pathToBlockly +
                                            'media/quote0.png', 12, 12))
            .appendTitle(new Blockly.FieldTextInput(''), 'TEXT')
            .appendTitle(new Blockly.FieldImage(Blockly.pathToBlockly +
                                            'media/quote1.png', 12, 12));
        this.appendValueInput( 'STARTING_POINT_VALUE' )
            .appendTitle( "Starting point read:" );
        this.appendValueInput( 'ENDING_POINT_VALUE' )
            .appendTitle( "Ending point read:" );
        this.setNextStatement( true, null );
        this.setPreviousStatement( true, null );
    },
    getPointer: function() {
        return [this.getTitleValue('VAR')];
    },
    renameVar: function(oldName, newName) {
        if (Blockly.Names.equals(oldName, this.getTitleValue('VAR'))) {
            this.setTitleValue(newName, 'VAR');
        }
    }
};

Blockly.Language.sd_card_float_to = {
    category: 'SD_CARD',
    helpUrl: '',
    init: function() {
        this.setColour( 230 );
        this.appendDummyInput( "" )
            .appendTitle( "SD_CARD float to" );
        this.appendDummyInput("")
            .appendTitle( "Variable" )
            .appendTitle(new Blockly.FieldPointer(Blockly.LANG_VARIABLES_SET_ITEM), 'VAR');
        this.appendDummyInput( "" )
            .appendTitle( "Filename: " )
            .appendTitle(new Blockly.FieldImage(Blockly.pathToBlockly +
                                            'media/quote0.png', 12, 12))
            .appendTitle(new Blockly.FieldTextInput(''), 'TEXT')
            .appendTitle(new Blockly.FieldImage(Blockly.pathToBlockly +
                                            'media/quote1.png', 12, 12));
        this.appendValueInput( 'VALUE' )
            .appendTitle( "Value: " );
        this.appendValueInput( 'ENDING_POINT_VALUE' )
            .appendTitle( "Ending point read:" );
        this.setNextStatement( true, null );
        this.setPreviousStatement( true, null );
    },
    getPointer: function() {
        return [this.getTitleValue('VAR')];
    },
    renameVar: function(oldName, newName) {
        if (Blockly.Names.equals(oldName, this.getTitleValue('VAR'))) {
            this.setTitleValue(newName, 'VAR');
        }
    }
};

Blockly.Language.sd_card_float_from = {
    category: 'SD_CARD',
    helpUrl: '',
    init: function() {
        this.setColour( 230 );
        this.appendDummyInput( "" )
            .appendTitle( "SD_CARD float from" );
        this.appendDummyInput("")
            .appendTitle( "Variable" )
            .appendTitle(new Blockly.FieldPointer(Blockly.LANG_VARIABLES_SET_ITEM), 'VAR');
        this.appendDummyInput( "" )
            .appendTitle( "Filename:" )
            .appendTitle(new Blockly.FieldImage(Blockly.pathToBlockly +
                                            'media/quote0.png', 12, 12))
            .appendTitle(new Blockly.FieldTextInput(''), 'TEXT')
            .appendTitle(new Blockly.FieldImage(Blockly.pathToBlockly +
                                            'media/quote1.png', 12, 12));
        this.appendValueInput( 'STARTING_POINT_VALUE' )
            .appendTitle( "Starting point read:" );
        this.appendValueInput( 'ENDING_POINT_VALUE' )
            .appendTitle( "Ending point read:" );
        this.setNextStatement( true, null );
        this.setPreviousStatement( true, null );
    },
    getPointer: function() {
        return [this.getTitleValue('VAR')];
    },
    renameVar: function(oldName, newName) {
        if (Blockly.Names.equals(oldName, this.getTitleValue('VAR'))) {
            this.setTitleValue(newName, 'VAR');
        }
    }
};

Blockly.Language.sd_card_text_to = {
    category: 'SD_CARD',
    helpUrl: '',
    init: function() {
        this.setColour( 230 );
        this.appendDummyInput( "" )
            .appendTitle( "SD_CARD text to" );
        this.appendDummyInput("")
            .appendTitle( "Variable" )
            .appendTitle(new Blockly.FieldPointer(Blockly.LANG_VARIABLES_SET_ITEM), 'VAR');
        this.appendDummyInput( "" )
            .appendTitle( "Filename:" )
            .appendTitle(new Blockly.FieldImage(Blockly.pathToBlockly +
                                            'media/quote0.png', 12, 12))
            .appendTitle(new Blockly.FieldTextInput(''), 'TEXT_FILENAME')
            .appendTitle(new Blockly.FieldImage(Blockly.pathToBlockly +
                                            'media/quote1.png', 12, 12));
        this.appendDummyInput( "" )
            .appendTitle( "Text:" )
            .appendTitle(new Blockly.FieldImage(Blockly.pathToBlockly +
                                            'media/quote0.png', 12, 12))
            .appendTitle(new Blockly.FieldTextInput(''), 'TEXT_INPUT')
            .appendTitle(new Blockly.FieldImage(Blockly.pathToBlockly +
                                            'media/quote1.png', 12, 12));
        this.appendValueInput( 'VALUE' )
            .appendTitle( "Value: " );
        this.appendValueInput( 'ENDING_POINT_VALUE' )
            .appendTitle( "Ending point read:" );
        this.setNextStatement( true, null );
        this.setPreviousStatement( true, null );
    },
    getPointer: function() {
        return [this.getTitleValue('VAR')];
    },
    renameVar: function(oldName, newName) {
        if (Blockly.Names.equals(oldName, this.getTitleValue('VAR'))) {
            this.setTitleValue(newName, 'VAR');
        }
    }
};

Blockly.Language.sd_card_text_from = {
    category: 'SD_CARD',
    helpUrl: '',
    init: function() {
        this.setColour( 230 );
        this.appendDummyInput( "" )
            .appendTitle( "SD_CARD text from" );
        this.appendDummyInput("")
            .appendTitle( "Variable" )
            .appendTitle(new Blockly.FieldPointer(Blockly.LANG_VARIABLES_SET_ITEM), 'VAR');
        this.appendDummyInput( "" )
            .appendTitle( "Filename:" )
            .appendTitle(new Blockly.FieldImage(Blockly.pathToBlockly +
                                            'media/quote0.png', 12, 12))
            .appendTitle(new Blockly.FieldTextInput(''), 'TEXT')
            .appendTitle(new Blockly.FieldImage(Blockly.pathToBlockly +
                                            'media/quote1.png', 12, 12));
        this.appendValueInput( 'STARTING_POINT_VALUE' )
            .appendTitle( "Starting read point:" );
        this.appendValueInput( 'ENDING_POINT_VALUE' )
            .appendTitle( "Ending point read:" );
        this.setNextStatement( true, null );
        this.setPreviousStatement( true, null );
    },
    getPointer: function() {
        return [this.getTitleValue('VAR')];
    },
    renameVar: function(oldName, newName) {
        if (Blockly.Names.equals(oldName, this.getTitleValue('VAR'))) {
            this.setTitleValue(newName, 'VAR');
        }
    }
};

//Getting the propc generator
Blockly.propc = Blockly.Generator.get( 'propc' );

//Generating the code for the compiler
Blockly.propc.sd_card_mount = function() {
    var do_pin  = this.getTitleValue( 'DO_PIN' );
    var clk_pin = this.getTitleValue( 'CLK_PIN' );
    var di_pin  = this.getTitleValue( 'DI_PIN' );
    var cs_pin  = this.getTitleValue( 'CS_PIN' );
    
    if ( Blockly.propc.setups_[ "sd_card" ] === undefined )
    {
        Blockly.propc.setups_[ "sd_card" ] = 'sd_mount( ' + do_pin + ', ' + clk_pin + ', ' + di_pin + ', ' + cs_pin + ' );';
    }
    
    return '';
};

Blockly.propc.sd_card_int_to = function() {
    var varName = Blockly.propc.pointerDB_.getName(this.getTitleValue('VAR'), Blockly.Pointers.NAME_TYPE);
    var filename = this.getTitleValue( 'TEXT' );
    var value = Blockly.propc.valueToCode( this, 'VALUE', Blockly.propc.ORDER_ATOMIC ) || '1';
    var ending_value = Blockly.propc.valueToCode( this, 'ENDING_POINT_VALUE', Blockly.propc.ORDER_ATOMIC ) || '1';
    
    if ( Blockly.propc.setups_[ "file" + filename ] === undefined )
    {
        Blockly.propc.setups_[ "file" + filename ] = 'FILE* fp_' + filename + ' = fopen("' + filename + '.txt", "w");\n';
    }
    
    var code = 'fwrite( &' + varName + ', sizeof( ' + varName + ' ), ' + ending_value + ', fp_' + filename + ' );\n';
    return code;
};

Blockly.propc.sd_card_int_from = function() {
    var varName = Blockly.propc.pointerDB_.getName(this.getTitleValue('VAR'), Blockly.Pointers.NAME_TYPE);
    var filename = this.getTitleValue( 'TEXT' );
    var starting_value = Blockly.propc.valueToCode( this, 'STARTING_POINT_VALUE', Blockly.propc.ORDER_ATOMIC ) || '0';
    var ending_value = Blockly.propc.valueToCode( this, 'ENDING_POINT_VALUE', Blockly.propc.ORDER_ATOMIC ) || '1';
    
    if ( Blockly.propc.setups_[ "file" + filename ] === undefined )
    {
        rBlockly.propc.setups_[ "file" + filename ] = 'FILE* fp_' + filename + ' = fopen("' + filename + '.txt", "w");\n';
    }
    
    var code = 'fread( &' + varName + ', ' + starting_value + ', ' + ending_value + ', fp_' + filename + ' );\n';
    return code;
};

Blockly.propc.sd_card_float_to = function() {
    var varName = Blockly.propc.pointerDB_.getName(this.getTitleValue('VAR'), Blockly.Pointers.NAME_TYPE);
    var filename = this.getTitleValue( 'TEXT' );
    var value = Blockly.propc.valueToCode( this, 'VALUE', Blockly.propc.ORDER_ATOMIC ) || '1';
    var ending_value = Blockly.propc.valueToCode( this, 'ENDING_POINT_VALUE', Blockly.propc.ORDER_ATOMIC ) || '1';
    
    if ( Blockly.propc.setups_[ "file" + filename ] === undefined )
    {
        Blockly.propc.setups_[ "file" + filename ] = 'FILE* fp_' + filename + ' = fopen("' + filename + '.txt", "w");\n';
    }

    var code = 'fwrite( &' + varName + ', sizeof( ' + varName + ' ), ' + ending_value + ', fp_' + filename + ' );\n';
    return code;
};

Blockly.propc.sd_card_float_from = function() {
    var varName = Blockly.propc.pointerDB_.getName(this.getTitleValue('VAR'), Blockly.Pointers.NAME_TYPE);
    var filename = this.getTitleValue( 'TEXT' );
    var starting_value = Blockly.propc.valueToCode( this, 'STARTING_POINT_VALUE', Blockly.propc.ORDER_ATOMIC ) || '0';
    var ending_value = Blockly.propc.valueToCode( this, 'ENDING_POINT_VALUE', Blockly.propc.ORDER_ATOMIC ) || '1';
    
    if ( Blockly.propc.setups_[ "file" + filename ] === undefined )
    {
        Blockly.propc.setups_[ "file" + filename ] = 'FILE* fp_' + filename + ' = fopen("' + filename + '.txt", "w");\n';
    }
    
    var code = 'fread( &' + varName + ', ' + starting_value + ', ' + ending_value + ', fp_' + filename + ' );\n';
    return code;
};

Blockly.propc.sd_card_text_to = function() {
    var varName = Blockly.propc.pointerDB_.getName(this.getTitleValue('VAR'), Blockly.Pointers.NAME_TYPE);
    var filename = this.getTitleValue( 'TEXT' );
    var value = this.getTitleValue( 'TEXT_INPUT' );
    var ending_value = Blockly.propc.valueToCode( this, 'ENDING_POINT_VALUE', Blockly.propc.ORDER_ATOMIC ) || '1';
    
    if ( Blockly.propc.setups_[ "file" + filename ] === undefined )
    {
        Blockly.propc.setups_[ "file" + filename ] = 'FILE* fp_' + filename + ' = fopen("' + filename + '.txt", "w");\n';
    }
    
    var code = 'fwrite( &' + varName + ', sizeof( ' + varName + ' ), ' + ending_value + ', fp_' + filename + ' );\n';
    return code;
};

Blockly.propc.sd_card_text_from = function() {
    var varName = Blockly.propc.pointerDB_.getName(this.getTitleValue('VAR'), Blockly.Pointers.NAME_TYPE);
    var filename = this.getTitleValue( 'TEXT' );
    var starting_value = Blockly.propc.valueToCode( this, 'STARTING_POINT_VALUE', Blockly.propc.ORDER_ATOMIC ) || '0';
    var ending_value = Blockly.propc.valueToCode( this, 'ENDING_POINT_VALUE', Blockly.propc.ORDER_ATOMIC ) || '1';
    
    if ( Blockly.propc.setups_[ "file" + filename ] === undefined )
    {
        Blockly.propc.setups_[ "file" + filename ] = 'FILE* fp_' + filename + ' = fopen("' + filename + '.txt", "w");\n';
    }

    
    var code = 'fread( &' + varName + ', ' + starting_value + ', ' + ending_value + ', fp_' + filename + ' );\n';
    return code;
};