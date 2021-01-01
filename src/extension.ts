import * as vscode from 'vscode';
import { HelloWorldPanel } from './panel';
import { SidebarProvider } from './SidebarProvider';

export function activate(context: vscode.ExtensionContext) {

	const sidebarProvider = new SidebarProvider(context.extensionUri);
	context.subscriptions.push(
		vscode.window.registerWebviewViewProvider(
			"vscode-todo-sidebar", sidebarProvider
		)
	);

	context.subscriptions.push(
		vscode.commands.registerCommand('vscode-todo.helloWorld', () => {
			HelloWorldPanel.createOrShow(context.extensionUri);
		})
	);

	context.subscriptions.push(
		vscode.commands.registerCommand('vscode-todo.refresh', async () => {
			// HelloWorldPanel.kill();
			// HelloWorldPanel.createOrShow(context.extensionUri);

			await vscode.commands.executeCommand("workbench.action.closeSidebar");
			await vscode.commands.executeCommand("workbench.view.extension.vscode-todo-sidebar-view");

			setTimeout(() => {
				vscode.commands.executeCommand("workbench.action.webview.openDeveloperTools");
			}, 500);
		})
	);

	context.subscriptions.push(
		vscode.commands.registerCommand('vscode-todo.askQuestion', async () => {
			const answer = await vscode.window.showInformationMessage("How was your day?", "good", "bad");

			if (answer === 'bad'){
				vscode.window.showInformationMessage("Sorry to hear that");
			}
			else {
				console.log({answer});
			}
		})
	);
}

export function deactivate() {}
