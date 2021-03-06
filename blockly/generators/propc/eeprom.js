/*

  This file contains support for writing text/numbers to EEPROM
  
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


//Create GUIs for EEEPROM blocks
Blockly.Language.eeprom_int_to = {
  category: 'EEPROM',
  helpUrl: '',
  init: function() {
    this.setColour( 120 );
    this.appendDummyInput( "" )
      .appendTitle( "EEPROM int to" );
    this.appendValueInput( 'VALUE' )
      .appendTitle( "value" );
    this.appendDummyInput( "" )
      .appendTitle( "address" )
      .appendTitle( new Blockly.FieldDropdown( profile.default.eeprom ), "ADDRESS" );
    this.setPreviousStatement( true, null );
    this.setNextStatement( true, null );
  }
};

Blockly.Language.eeprom_int_from = {
  category: 'EEPROM',
  helpUrl: '',
  init: function() {
    this.setColour( 120 );
    this.appendDummyInput( "" )
      .appendTitle( "EEPROM int from" )
      .appendTitle( "address" )
      .appendTitle( new Blockly.FieldDropdown( profile.default.eeprom ), "ADDRESS" );
    this.setPreviousStatement( false, null );
    this.setNextStatement( false, null );
    this.setOutput( true, Number );
  }
};

Blockly.Language.eeprom_float_to = {
  category: 'EEPROM',
  helpUrl: '',
  init: function() {
    this.setColour( 120 );
    this.appendDummyInput( "" )
      .appendTitle( "EEPROM float to" );
    this.appendValueInput( 'VALUE' )
      .appendTitle( "value" );
    this.appendDummyInput( "" )
      .appendTitle( "address" )
      .appendTitle( new Blockly.FieldDropdown( profile.default.eeprom ), "ADDRESS" );
    this.setPreviousStatement( true, null );
    this.setNextStatement( true, null );
  }
};

Blockly.Language.eeprom_float_from = {
  category: 'EEPROM',
  helpUrl: '',
  init: function() {
    this.setColour( 120 );
    this.appendDummyInput( "" )
      .appendTitle( "EEPROM float from" )
      .appendTitle( "address" )
      .appendTitle( new Blockly.FieldDropdown( profile.default.eeprom ), "ADDRESS" );
    this.setPreviousStatement( false, null );
    this.setNextStatement( false, null );
    this.setOutput( true, Number );
  }
};

Blockly.Language.eeprom_text_to = {
  category: 'EEPROM',
  helpUrl: '',
  init: function() {
    this.setColour( 120 );
    this.appendDummyInput( "" )
      .appendTitle( "EEPROM text to" )
      .appendTitle( "text" )
      .appendTitle(new Blockly.FieldImage(Blockly.pathToBlockly +
                                          'media/quote0.png', 12, 12))
      .appendTitle(new Blockly.FieldTextInput(''), 'TEXT')
      .appendTitle(new Blockly.FieldImage(Blockly.pathToBlockly +
                                          'media/quote1.png', 12, 12));
    this.appendValueInput( 'VALUE' )
      .appendTitle( "Number of bytes" );
    this.appendDummyInput( "" )
      .appendTitle( "address" )
      .appendTitle( new Blockly.FieldDropdown( profile.default.eeprom ), "ADDRESS" );
    this.setPreviousStatement( true, null );
    this.setNextStatement( true, null );
  }
};

Blockly.Language.eeprom_text_from = {
  category: 'EEPROM',
  helpUrl: '',
  init: function() {
    this.setColour( 120 );
    this.appendDummyInput( "" )
      .appendTitle( "EEPROM text from" )
    this.appendValueInput( 'VALUE' )
      .appendTitle( "Number of bytes" );
    this.appendDummyInput( "" )
      .appendTitle( "address" )
      .appendTitle( new Blockly.FieldDropdown( profile.default.eeprom ), "ADDRESS" );
    this.appendDummyInput("")
      .appendTitle( "Variable" )
      .appendTitle(new Blockly.FieldPointer(Blockly.LANG_VARIABLES_SET_ITEM), 'VAR');
    this.setPreviousStatement( false, null );
    this.setNextStatement( false, null );
    this.setOutput( true, Number );
  },
  getPointers: function() {
    return [this.getTitleValue('VAR')];
  },
  renameVar: function(oldName, newName) {
    if (Blockly.Names.equals(oldName, this.getTitleValue('VAR'))) {
      this.setTitleValue(newName, 'VAR');
    }
  }
};

//Create propc generator
Blockly.propc = Blockly.Generator.get( 'propc' );

//Generate code for compiler
Blockly.propc.eeprom_int_to = function() {
  var value = Blockly.propc.valueToCode( this, 'VALUE', Blockly.propc.ORDER_NONE ) || '0';
  var address = this.getTitleValue( 'ADDRESS' );

  var code = 'ee_putInt( ' + value + ', ' + address + ' );\n';
  return code;
};

Blockly.propc.eeprom_int_from = function() {
  var address = this.getTitleValue( 'ADDRESS' );
    
  var code = 'ee_getInt( ' + address + ' )';
  return code;
};

Blockly.propc.eeprom_float_to = function() {
  var value = Blockly.propc.valueToCode( this, 'VALUE', Blockly.ORDER_NONE ) || '0';
  var address = this.getTitleValue( 'ADDRESS' );
    
  var code = 'ee_putFloat32( ' + value + ', ' + address + ' );';
  return code;
};

Blockly.propc.eeprom_float_from = function() {
  var address = this.getTitleValue( 'ADDRESS' );
    
  var code = 'ee_getFloat32( ' + address + ' )';
  return code;
};

Blockly.propc.eeprom_text_to = function() {
  var text = this.getTitleValue( 'TEXT' );
  var value = Blockly.propc.valueToCode( this, 'VALUE', Blockly.ORDER_NONE ) || '0';
  var address = this.getTitleValue( 'ADDRESS' );
    
  var code = 'ee_putStr( ' + text + ', ' + value + ', ' + address + ' );\n';
  return code;
};

Blockly.propc.eeprom_text_from = function() {
  var varName = Blockly.propc.pointerDB_.getName(this.getTitleValue('VAR'), Blockly.Pointers.NAME_TYPE);
  var value = Blockly.propc.valueToCode( this, 'VALUE', Blockly.ORDER_NONE ) || '0';
  var address = this.getTitleValue( 'ADDRESS' );
    
  var code = 'ee_getStr( ' + varName + ', ' + value + ', ' + address + ' )';
  return code;
};
