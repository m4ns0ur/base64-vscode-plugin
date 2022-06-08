import * as assert from 'assert';

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
import * as vscode from 'vscode';
import * as base64 from '../../extension';

suite('Extension Test Suite', () => {
	vscode.window.showInformationMessage('Start all tests.');

	test('Sample test', () => {
		assert.strictEqual('VGhpcyBpcyBhIHRlc3Qgc3RyaW5nIQ==', base64.getEncoded('This is a test string!'));
		assert.strictEqual('This is a test string!', base64.getDecoded('VGhpcyBpcyBhIHRlc3Qgc3RyaW5nIQ=='));

		assert.strictEqual('ewoJImZvbyI6ICJiYXIiLAoKfQ==', base64.getEncoded('{\n\t\"foo\": \"bar\",\n\n}'));
		assert.strictEqual('{\n\t\"foo\": \"bar\",\n\n}', base64.getDecoded('ewoJImZvbyI6ICJiYXIiLAoKfQ=='));

		assert.strictEqual('C83vq83v', base64.getHexEncoded('bcdefABCDEF'));
		assert.strictEqual('0bcdefabcdef', base64.getHexDecoded('C83vq83v'));
	});
});
