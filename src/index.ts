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

global.doGet = (
  e: GoogleAppsScript.Events.DoGet,
): GoogleAppsScript.HTML.HtmlOutput => {
  try {
    const params = JSON.stringify(e)
    return HtmlService.createHtmlOutput(params)
  } catch (err) {
    printError(err)
  }

  return HtmlService.createHtmlOutput()
}

global.doPost = (
  e: GoogleAppsScript.Events.DoPost,
): GoogleAppsScript.HTML.HtmlOutput => {
  try {
    const params = JSON.stringify(e)
    return HtmlService.createHtmlOutput(params)
  } catch (err) {
    printError(err)
  }

  return HtmlService.createHtmlOutput()
}
