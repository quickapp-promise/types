// system
/// <reference path="system/alarm.d.ts" />
/// <reference path="system/app.d.ts" />
/// <reference path="system/audio.d.ts" />
/// <reference path="system/barcode.d.ts" />
/// <reference path="system/battery.d.ts" />
/// <reference path="system/bluetooth.d.ts" />
/// <reference path="system/brightness.d.ts" />
/// <reference path="system/calendar.d.ts" />
/// <reference path="system/cipher.d.ts" />
/// <reference path="system/clipboard.d.ts" />
/// <reference path="system/configuration.d.ts" />
/// <reference path="system/contact.d.ts" />
/// <reference path="system/device.d.ts" />
/// <reference path="system/downloadtask.d.ts" />
/// <reference path="system/fetch.d.ts" />
/// <reference path="system/file.d.ts" />
/// <reference path="system/geolocation.d.ts" />
/// <reference path="system/image.d.ts" />
/// <reference path="system/keyguard.d.ts" />
/// <reference path="system/media.d.ts" />
/// <reference path="system/network.d.ts" />
/// <reference path="system/nfc.d.ts" />
/// <reference path="system/notification.d.ts" />
/// <reference path="system/package.d.ts" />
/// <reference path="system/prompt.d.ts" />
/// <reference path="system/record.d.ts" />
/// <reference path="system/request.d.ts" />
/// <reference path="system/requesttask.d.ts" />
/// <reference path="system/resident.d.ts" />
/// <reference path="system/router.d.ts" />
/// <reference path="system/screenshot.d.ts" />
/// <reference path="system/sensor.d.ts" />
/// <reference path="system/share.d.ts" />
/// <reference path="system/shortcut.d.ts" />
/// <reference path="system/sms.d.ts" />
/// <reference path="system/storage.d.ts" />
/// <reference path="system/telecom.d.ts" />
/// <reference path="system/uploadtask.d.ts" />
/// <reference path="system/vibrator.d.ts" />
/// <reference path="system/volume.d.ts" />
/// <reference path="system/websocketfactory.d.ts" />
/// <reference path="system/webview.d.ts" />
/// <reference path="system/wifi.d.ts" />
/// <reference path="system/zip.d.ts" />

// service
/// <reference path="service/account.d.ts" />
/// <reference path="service/ad.d.ts" />
/// <reference path="service/alipay.d.ts" />
/// <reference path="service/exchange.d.ts" />
/// <reference path="service/health.d.ts" />
/// <reference path="service/pay.d.ts" />
/// <reference path="service/push.d.ts" />
/// <reference path="service/qqaccount.d.ts" />
/// <reference path="service/share.d.ts" />
/// <reference path="service/stats.d.ts" />
/// <reference path="service/texttoaudio.d.ts" />
/// <reference path="service/wbaccount.d.ts" />
/// <reference path="service/wxaccount.d.ts" />
/// <reference path="service/wxpay.d.ts" />

// hap
/// <reference path="hap/io.Video.d.ts" />

type RecordCombine<T extends { [K in string]: any }> = keyof T extends infer K
    ? K extends keyof T
      ? T | RecordCombine<Omit<T, K>>
      : never
    : never;

type ReturnPromise<T> = Promise<{ data: T }>;
