/**
 * Visual Blocks Language
 *
 * Copyright 2014 Michel Lampo.
 * https://github.com/gasolin/BlocklyDuino
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
 * @fileoverview Generating Spin for control blocks.
 * @author michel@creatingfuture.eu  (Michel Lampo)
 */
'use strict';

//To support syntax defined in http://arduino.cc/en/Reference/HomePage

//define blocks
if (!Blockly.Language)
    Blockly.Language = {};




// define generators
Blockly.Spin = Blockly.Generator.get('Spin');

// Shift
Blockly.Language.bit_math_shift = {
    category: Blockly.LANG_CATEGORY_BIT_MATH,
    helpUrl: "",
    init: function() {
        this.setColour(200);
        this.setOutput(true, Number);
        this.appendValueInput('A')
                .setCheck(Number);
        this.appendValueInput('B')
                .setCheck(Number)
                .appendTitle(new Blockly.FieldDropdown(this.OPERATORS), 'OP');
        this.setInputsInline(true);
        this.setTooltip("");
    }
};

Blockly.Language.bit_math_shift.OPERATORS =
        [["Shift left", 'LEFT'],
            ["Shift right", 'RIGHT']];

Blockly.Spin.bit_math_shift = function() {
    // Basic arithmetic operators, and power.
    var mode = this.getTitleValue('OP');
    var tuple = Blockly.Spin.bit_math_shift.OPERATORS[mode];
    var operator = tuple[0];
    var order = tuple[1];
    var argument0 = Blockly.Spin.valueToCode(this, 'A', order) || '0';
    var argument1 = Blockly.Spin.valueToCode(this, 'B', order) || '0';
//    if (!operator) {
//        code = 'Math.pow(' + argument0 + ', ' + argument1 + ')';
//        return [code, Blockly.Spin.ORDER_UNARY_POSTFIX];
//    }
    var code = argument0 + operator + argument1;
    return [code, order];
};

Blockly.Spin.bit_math_shift.OPERATORS = {
    LEFT: [' << ', Blockly.Spin.ORDER_UNARY_PREFIX],
    RIGHT: [' >> ', Blockly.Spin.ORDER_UNARY_PREFIX]
};

// Rotate
Blockly.Language.bit_math_rotate = {
    category: Blockly.LANG_CATEGORY_BIT_MATH,
    helpUrl: "",
    init: function() {
        this.setColour(200);
        this.setOutput(true, Number);
        this.appendValueInput('A')
                .setCheck(Number);
        this.appendValueInput('B')
                .setCheck(Number)
                .appendTitle(new Blockly.FieldDropdown(this.OPERATORS), 'OP');
        this.setInputsInline(true);
        this.setTooltip("");
    }
};

Blockly.Language.bit_math_rotate.OPERATORS =
        [["Rotate left", 'LEFT'],
            ["Rotate right", 'RIGHT']];

Blockly.Spin.bit_math_rotate = function() {
    // Basic arithmetic operators, and power.
    var mode = this.getTitleValue('OP');
    var tuple = Blockly.Spin.bit_math_rotate.OPERATORS[mode];
    var operator = tuple[0];
    var order = tuple[1];
    var argument0 = Blockly.Spin.valueToCode(this, 'A', order) || '0';
    var argument1 = Blockly.Spin.valueToCode(this, 'B', order) || '0';
//    if (!operator) {
//        code = 'Math.pow(' + argument0 + ', ' + argument1 + ')';
//        return [code, Blockly.Spin.ORDER_UNARY_POSTFIX];
//    }
    var code = argument0 + operator + argument1;
    return [code, order];
};

Blockly.Spin.bit_math_rotate.OPERATORS = {
    LEFT: [' <- ', Blockly.Spin.ORDER_UNARY_PREFIX],
    RIGHT: [' -> ', Blockly.Spin.ORDER_UNARY_PREFIX]
};

// BIT-wise operations
Blockly.Language.bit_math_operations = {
    category: Blockly.LANG_CATEGORY_BIT_MATH,
    helpUrl: "",
    init: function() {
        this.setColour(200);
        this.setOutput(true, Number);
        this.appendValueInput('A')
                .setCheck(Number);
        this.appendValueInput('B')
                .setCheck(Number)
                .appendTitle(new Blockly.FieldDropdown(this.OPERATORS), 'OP');
        this.setInputsInline(true);
        this.setTooltip("");
    }
};

Blockly.Language.bit_math_operations.OPERATORS =
        [["Bit AND", 'AND'],
            ["Bit OR", 'OR'],
            ["Bit XOR", 'XOR']];

Blockly.Spin.bit_math_operations = function() {
    // Basic arithmetic operators, and power.
    var mode = this.getTitleValue('OP');
    var tuple = Blockly.Spin.bit_math_operations.OPERATORS[mode];
    var operator = tuple[0];
    var order = tuple[1];
    var argument0 = Blockly.Spin.valueToCode(this, 'A', order) || '0';
    var argument1 = Blockly.Spin.valueToCode(this, 'B', order) || '0';
//    if (!operator) {
//        code = 'Math.pow(' + argument0 + ', ' + argument1 + ')';
//        return [code, Blockly.Spin.ORDER_UNARY_POSTFIX];
//    }
    var code = argument0 + operator + argument1;
    return [code, order];
};

Blockly.Spin.bit_math_operations.OPERATORS = {
    AND: [' & ', Blockly.Spin.ORDER_UNARY_PREFIX],
    OR: [' | ', Blockly.Spin.ORDER_UNARY_PREFIX],
    XOR: [' ^ ', Blockly.Spin.ORDER_UNARY_PREFIX]
};

// NOT
Blockly.Language.bit_math_not = {
    // Rounding functions.
    category: Blockly.LANG_CATEGORY_BIT_MATH,
    helpUrl: "",
    init: function() {
        this.setColour(200);
        this.setOutput(true, Number);

        this.appendValueInput('VAR')
                .setCheck(Number)
                .appendTitle('Bit NOT');
        this.setTooltip("");
    }
};

Blockly.Spin.bit_math_not = function() {
    var variable = Blockly.Spin.valueToCode(this, 'VAR', Blockly.Spin.ORDER_UNARY_PREFIX) || '0';
//    if (!operator) {
//        code = 'Math.pow(' + argument0 + ', ' + argument1 + ')';
//        return [code, Blockly.Spin.ORDER_UNARY_POSTFIX];
//    }

    var code = '!' + variable;
    return [code, Blockly.Spin.ORDER_UNARY_PREFIX];
};