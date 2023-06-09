'use strict';

import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	const encodeDisposable = vscode.commands.registerCommand('base64.encode', () => {
		const editor = vscode.window.activeTextEditor;
		if (editor) {
			const document = editor.document;
			const selection = editor.selection;
			const word = document.getText(selection);
			editor.edit(editBuilder => {
				editBuilder.replace(selection, getEncoded(word));
			});
		}
	});

	const decodeDisposable = vscode.commands.registerCommand('base64.decode', () => {
		const editor = vscode.window.activeTextEditor;
		if (editor) {
			const document = editor.document;
			const selection = editor.selection;
			const word = document.getText(selection);
			editor.edit(editBuilder => {
				editBuilder.replace(selection, getDecoded(word));
			});
		}
	});

	const hexEncodeDisposable = vscode.commands.registerCommand('base64.hexEncode', () => {
		const editor = vscode.window.activeTextEditor;
		if (editor) {
			const document = editor.document;
			const selection = editor.selection;
			let word = document.getText(selection);
			editor.edit(editBuilder => {
				editBuilder.replace(selection, getHexEncoded(word));
			});
		}
	});

	const hexDecodeDisposable = vscode.commands.registerCommand('base64.hexDecode', () => {
		const editor = vscode.window.activeTextEditor;
		if (editor) {
			const document = editor.document;
			const selection = editor.selection;
			const word = document.getText(selection);
			editor.edit(editBuilder => {
				editBuilder.replace(selection, getHexDecoded(word));
			});
		}
	});

	context.subscriptions.push(encodeDisposable);
	context.subscriptions.push(decodeDisposable);
	context.subscriptions.push(hexEncodeDisposable);
	context.subscriptions.push(hexDecodeDisposable);
}

export function deactivate() {}

export function getEncoded(word: string): string {
	return Buffer.from(word, 'utf8').toString('base64');
}

export function getDecoded(word: string): string {
	return Buffer.from(word, 'base64').toString('utf8');
}

export function getHexEncoded(word: string): string {
	word = word.padStart(word.length % 2 === 0 ? word.length : word.length + 1, '0');
	return Buffer.from(word, 'hex').toString('base64');
}

export function getHexDecoded(word: string): string {
	return Buffer.from(word, 'base64').toString('hex');
}