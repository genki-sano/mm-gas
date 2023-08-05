type DefaultHttpHeaders = {
  Authorization: string
}

type WebAPICallErrorResult = {
  message: string
}

export class HttpClient {
  public readonly defaultHeaders: DefaultHttpHeaders

  public constructor(defaultHeaders: DefaultHttpHeaders) {
    this.defaultHeaders = defaultHeaders
  }

  public post(url: string, body: unknown): void {
    const ret = UrlFetchApp.fetch(url, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        ...this.defaultHeaders,
      },
      payload: JSON.stringify(body),
    })

    this._responseParser(ret)
  }

  private _responseParser(
    ret: GoogleAppsScript.URL_Fetch.HTTPResponse,
  ): GoogleAppsScript.URL_Fetch.HTTPResponse {
    if (ret.getResponseCode() !== 200) {
      const result: WebAPICallErrorResult = JSON.parse(ret.getContentText())
      throw new Error(
        `${result.message}\n@see https://developers.line.biz/en/reference/messaging-api/#error-responses`,
      )
    }

    return ret
  }
}
