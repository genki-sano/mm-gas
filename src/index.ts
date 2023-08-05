import { makeOnTimeDrivenController } from './infrastructures/di'

declare const global: {
  [x: string]: unknown
}

const printError = (err: unknown): void => {
  if (err instanceof Error) {
    console.error(
      `[名前] ${err.name}` +
        `\n[メッセージ] ${err.message}` +
        `\n[StackTrace]` +
        `\n${err.stack}`,
    )
    return
  }

  Logger.log(err)
}

// 時間ベースのトリガーで実行される関数
global.onTimeDriven = (): GoogleAppsScript.Content.TextOutput => {
  try {
    makeOnTimeDrivenController().handler()
  } catch (err) {
    printError(err)
  }

  return ContentService.createTextOutput(
    JSON.stringify({ content: 'post ok' }),
  ).setMimeType(ContentService.MimeType.JSON)
}
