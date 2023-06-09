import * as assert from 'assert';

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
import * as vscode from 'vscode';
import * as base64 from '../../extension';

suite('Extension Test Suite', () => {
	vscode.window.showInformationMessage('Start all tests.');

	test('Sample test', () => {
		// String
		assert.strictEqual('VGhpcyBpcyBhIHRlc3Qgc3RyaW5nIQ==', base64.getEncoded('This is a test string!'));
		assert.strictEqual('This is a test string!', base64.getDecoded('VGhpcyBpcyBhIHRlc3Qgc3RyaW5nIQ=='));

		// Multiline
		assert.strictEqual('ewoJImZvbyI6ICJiYXIiLAoKfQ==', base64.getEncoded('{\n\t\"foo\": \"bar\",\n\n}'));
		assert.strictEqual('{\n\t\"foo\": \"bar\",\n\n}', base64.getDecoded('ewoJImZvbyI6ICJiYXIiLAoKfQ=='));

		// Hex
		assert.strictEqual('C83vq83v', base64.getHexEncoded('bcdefABCDEF'));
		assert.strictEqual('0bcdefabcdef', base64.getHexDecoded('C83vq83v'));

		// Unicode
		assert.strictEqual('0KLQtdGB0YI=', base64.getEncoded('Тест'));
		assert.strictEqual('Тест', base64.getDecoded('0KLQtdGB0YI='));
		assert.strictEqual('VGhpcyBpcyBhINCi0LXRgdGCIHN0cmluZyE=', base64.getEncoded('This is a Тест string!'));
		assert.strictEqual('This is a Тест string!', base64.getDecoded('VGhpcyBpcyBhINCi0LXRgdGCIHN0cmluZyE='));
		assert.strictEqual('wq9fKOODhClfL8Kv', base64.getEncoded('¯\_(ツ)_/¯'));
		assert.strictEqual('¯\_(ツ)_/¯', base64.getDecoded('wq9fKOODhClfL8Kv'));
	});
});
