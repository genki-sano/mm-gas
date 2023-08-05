export class Config {
  readonly lineChannelAccessToken: string
  readonly spreadsheetId: string

  constructor() {
    this.lineChannelAccessToken = this.getProperty('LINE_CHANNEL_ACCESS_TOKEN')
    this.spreadsheetId = this.getProperty('SPREADSHEET_ID')
  }

  private getProperty(key: string): string {
    const prop = PropertiesService.getScriptProperties().getProperty(key)
    if (!prop) {
      throw new Error(`Not found property [key: ${key}]`)
    }
    return prop
  }
}
