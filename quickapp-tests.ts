import alarm from "@system.alarm";
import app from "@system.app";
import audio from "@system.audio";
import barcode from "@system.barcode";
import battery from "@system.battery";
import bluetooth from "@system.bluetooth";
import brightness from "@system.brightness";
import calendar from "@system.calendar";
import cipher from "@system.cipher";
import clipboard from "@system.clipboard";
import configuration from "@system.configuration";
import contact from "@system.contact";
import device from "@system.device";
import downloadtask from "@system.downloadtask";
import fetch from "@system.fetch";
import file from "@system.file";
import geolocation from "@system.geolocation";
import image from "@system.image";
import keyguard from "@system.keyguard";
import media from "@system.media";
import network from "@system.network";
import nfc from "@system.nfc";
import notification from "@system.notification";
import pkg from "@system.package";
import prompt from "@system.prompt";
import record from "@system.record";
import request from "@system.request";
import requesttask from "@system.requesttask";
import resident from "@system.resident";
import router from "@system.router";
import screenshot from "@system.screenshot";
import sensor from "@system.sensor";
import share from "@system.share";
import shortcut from "@system.shortcut";
import sms from "@system.sms";
import storage from "@system.storage";
import telecom from "@system.telecom";
import uploadtask from "@system.uploadtask";
import vibrator from "@system.vibrator";
import volume from "@system.volume";
import websocketfactory from "@system.websocketfactory";
import webview from "@system.webview";
import wifi from "@system.wifi";
import zip from "@system.zip";

import account from "@service.account";
import ad from "@service.ad";
import alipay from "@service.alipay";
import exchange from "@service.exchange";
import health from "@service.health";
import pay from "@service.pay";
import push from "@service.push";
import qqaccount from "@service.qqaccount";
import share2 from "@service.share";
import stats from "@service.stats";
import texttoaudio from "@service.texttoaudio";
import wbaccount from "@service.wbaccount";
import wxaccount from "@service.wxaccount";
import wxpay from "@service.wxpay";

import Video from "@hap.io.Video";

(async () => {
    app.getInfo();
    
    app.createQuickAppQRCode({
        path: "pages/index/index",
        success: function(data) {
            data.uri;
        },
        fail: function(data, code) {
            data === "";
            code === 0;
        },
    });

    const { data: result} = await app.createQuickAppQRCode();
    typeof result.uri === 'string'
});

(async () => {
    router.push({
        uri: "pages/index/index",
    });

    router.replace({
        uri: "pages/index/index",
    });

    router.switchTab({
        uri: "pages/index/index",
    });

    router.back();

    router.back({
        path: "pages/index/index",
    });

    router.clear();

    router.getLength();

    router.getPages()[0].path;
});

(async () => {
    resident.start({
        desc: "notification",
    });

    resident.stop();
});

(async () => {
    configuration.getLocale();

    configuration.setLocale({
        language: "zh",
        countryOrRegion: "CN",
    });

    configuration.getThemeMode();

    configuration.setGrayMode({
        enable: true,
        duration: {
            regular: ["10/22"],
            temporary: ["2025/10/22"],
        },
        excludedPage: ["pages/index/index"],
    });
});

(async () => {
    share.share({
        type: "text/plain",
        data: "Hello World",
    });
});

(async () => {
    prompt.showToast({
        message: "Hello World",
    });
    
    prompt.showDialog({
        title: "Hello World",
        message: "Hello World",
        success(data) {
            typeof data.index === 'number';
        },
    });
    const { data: r} = await prompt.showDialog({
        title: "Hello World",
        message: "Hello World",
    });
    typeof r.index === 'number';
    
    prompt.showContextMenu({
        itemList: ["Item 1", "Item 2"],
        success(data) {
            typeof data.index === 'number';
        },
    });
    const { data: r1} = await prompt.showContextMenu({
        itemList: ["Item 1", "Item 2"],
    });
    typeof r1.index === 'number';
});

(async () => {
    webview.loadUrl({
        url: "https://www.example.com",
    });
    
    webview.setCookie({
        domain: "www.example.com",
        name: "cookieName",
        success() { },
    });
    await webview.setCookie({
        domain: "www.example.com",
        name: "cookieName",
    });
});

notification.show({
    contentTitle: "Hello World",
    contentText: "Hello World",
    clickAction: {
        uri: "pages/index/index",
    },
});

(async () => {
    request.upload({
        url: "https://www.example.com",
        files: [{
            filename: "file.txt",
            uri: "file:///path/to/file.txt",
        }],
        success(data) {
            typeof data.code === 'number';
        },
    });
    const { data: r} = await request.upload({
        url: "https://www.example.com",
        files: [{
            filename: "file.txt",
            uri: "file:///path/to/file.txt",
        }],
    });
    typeof r.code === 'number';

    request.download({
        url: "https://www.example.com",
        success(data) {
            typeof data.token === 'string';
        },
    });
    const { data: r1} = await request.download({
        url: "https://www.example.com",
    });
    typeof r1.token ==='string';

    request.onDownloadComplete({
        token: "test",
        success(data) {
            typeof data.uri ==='string';
        },
    });
    const { data: r2} = await request.onDownloadComplete({
        token: "test",
    });
    typeof r2.uri ==='string';
});

(async () => {
    const dtask = downloadtask.downloadFile({
        url: "https://www.example.com",
        success(data) {
            typeof data.filePath === 'string';
            typeof data.headers === 'object';
            typeof data.statusCode === 'number';
        }
    });

    dtask.abort();

    dtask.onProgressUpdate((data) => {
        data.progress === 0;
        data.totalBytesExpectedToWrite === 0;
        data.totalBytesWritten === 0;
    });

    dtask.offProgressUpdate();

    dtask.onHeadersReceived((headers) => {
        headers["Content-Type"];
    });

    dtask.offHeadersReceived();
});

(async () => {
    const utask = uploadtask.uploadFile({
        url: "https://www.example.com",
        filePath: "file:///path/to/file.txt",
        name: "file",
    });

    utask.abort();

    utask.onProgressUpdate((data) => {
        data.progress === 0;
        data.totalBytesExpectedToSend === 0;
        data.totalBytesSent === 0;
    });

    utask.offProgressUpdate();

    utask.onHeadersReceived((headers) => {
        headers["Content-Type"];
    });

    utask.offHeadersReceived();
});

(async () => {
    fetch.fetch({
        url: "https://www.example.com",
        success(data) {
            typeof data.code === 'number';
        },
    });
    const { data: r} = await fetch.fetch({
        url: "https://www.example.com",
    });
    typeof r.code === 'number';
});

(async () => {
    const rtask = requesttask.request({
        url: "https://www.example.com",
    });

    rtask.abort();

    rtask.onHeadersReceived((headers) => {
        headers["Content-Type"];
    });

    rtask.offHeadersReceived();
});

(async () => {
    const ws = websocketfactory.create({
        url: "wss://www.example.com",
    });

    ws.send({
        data: "Hello World",
        success() { },
    });
    await ws.send({
        data: "Hello World",
    });

    ws.close({
        code: 1000,
        success() { },
    });
    await ws.close({
        code: 1000,
    });

    ws.onopen = function() {};

    ws.onmessage = function(data) {
        data.data;
    };

    ws.onclose = function(data) {
        data.code === "";
        data.reason === "";
        data.wasClean === false;
    };

    ws.onerror = function(data) {
        data.data;
    };
});

(async () => {
    storage.get({
        key: "key",
        success(data) {
            typeof data ==='string';
        },
    });
    const { data: r} = await storage.get({
        key: "key",
    });
    typeof r ==='string';

    storage.set({
        key: "key",
        value: "value",
        success() { },
    });
    await storage.set({
        key: "key",
        value: "value",
    });

    storage.clear({
        success() { },
    });
    await storage.clear();
    
    storage.delete({
        key: "key",
        success() { },
    });
    await storage.delete({
        key: "key",
    });

    storage.key({
        index: 0,
        success(data) {
            typeof data ==='string';
        },
    });
    const { data: r1} = await storage.key({
        index: 0,
    });
    typeof r1 ==='string';

    typeof storage.length === 'number';
});

(async () => {
    file.move({
        srcUri: "file:///path/to/file.txt",
        dstUri: "file:///path/to/file.txt",
        success(data) {
            typeof data === 'string';
        },
    });
    const { data: r} = await file.move({
        srcUri: "file:///path/to/file.txt",
        dstUri: "file:///path/to/file.txt",
    });
    typeof r === 'string';

    file.copy({
        srcUri: "file:///path/to/file.txt",
        dstUri: "file:///path/to/file.txt",
        success(data) {
            typeof data === 'string';
        }
    });
    const { data: r1} = await file.copy({
        srcUri: "file:///path/to/file.txt",
        dstUri: "file:///path/to/file.txt",
    });
    typeof r1 === 'string';

    file.list({
        uri: "file:///path/to/file.txt",
        success(data) {
            data.fileList instanceof Array;
        },
    });
    const { data: r2} = await file.list({
        uri: "file:///path/to/file.txt",
    });
    r2.fileList instanceof Array;

    file.get({
        uri: "file:///path/to/file.txt",
        success(data) {
            typeof data.uri === 'string';
        }
    });
    const { data: r3} = await file.get({
        uri: "file:///path/to/file.txt",
    });
    typeof r3.uri === 'string';

    file.delete({
        uri: "file:///path/to/file.txt",
        success() { },
    });
    await file.delete({
        uri: "file:///path/to/file.txt",
    });

    file.writeText({
        uri: "file:///path/to/file.txt",
        text: "Hello World",
        success() { },
    });
    await file.writeText({
        uri: "file:///path/to/file.txt",
        text: "Hello World",
    });

    file.writeArrayBuffer({
        uri: "file:///path/to/file.txt",
        buffer: new Uint8Array(8),
        success() { },
    });
    await file.writeArrayBuffer({
        uri: "file:///path/to/file.txt",
        buffer: new Uint8Array(8),
    });

    file.readText({
        uri: "file:///path/to/file.txt",
        success(data) {
            typeof data.text === 'string';
        },
    });
    const { data: r4} = await file.readText({
        uri: "file:///path/to/file.txt",
    });
    typeof r4.text === 'string';

    file.readArrayBuffer({
        uri: "file:///path/to/file.txt",
        success(data) {
            data.buffer instanceof Uint8Array;
        },
    });
    const { data: r5} = await file.readArrayBuffer({
        uri: "file:///path/to/file.txt",
    });
    r5.buffer instanceof Uint8Array;

    file.access({
        uri: "file:///path/to/file.txt",
        success() { },
    });
    const { data: r6} = await file.access({
        uri: "file:///path/to/file.txt",
    });

    file.mkdir({
        uri: "file:///path/to/file.txt",
        success() { },
    });
    await file.mkdir({
        uri: "file:///path/to/file.txt",
    });

    file.rmdir({
        uri: "file:///path/to/file.txt",
        success() { },
    });
    await file.rmdir({
        uri: "file:///path/to/file.txt",
    });
});

(async () => {
    exchange.get({
        key: "key",
        success(data) {
            typeof data.value === "string";
        },
    });
    const { data: r} = await exchange.get({
        key: "key",
    });
    typeof r.value === "string";

    exchange.set({
        key: "key",
        value: "value",
        success() { },
    });
    await exchange.set({
        key: "key",
        value: "value",
    });

    exchange.remove({
        key: "key",
        success() { },
    });
    await exchange.remove({
        key: "key",
    });

    exchange.clear({
        success() { },
    });
    await exchange.clear();

    exchange.grantPermission({
        package: "com.example.app",
        sign: "sign",
        success() { },
    });
    await exchange.grantPermission({
        package: "com.example.app",
        sign: "sign",
    });

    exchange.revokePermission({
        package: "com.example.app",
        success() { },
    });
    await exchange.revokePermission({
        package: "com.example.app",
    });
});

(async () => {
    vibrator.vibrate();
});

(async () => {
    const { data: result} = await barcode.scan();
    typeof result.result === 'string';
});

(async () => {
    sensor.subscribeAccelerometer({
        callback(data) {
            data.x === 0;
            data.y === 0;
            data.z === 0;
        },
    });

    sensor.unsubscribeAccelerometer();

    sensor.subscribeCompass({
        callback(data) {
            data.accuracy === 0;
            data.direction === 0;
        },
    });

    sensor.unsubscribeCompass();

    sensor.subscribeProximity({
        callback(data) {
            data.distance === 0;
        },
    });

    sensor.unsubscribeProximity();

    sensor.subscribeLight({
        callback(data) {
            data.intensity === 0;
        },
    });

    sensor.unsubscribeLight();

    sensor.subscribeStepCounter({
        callback(data) {
            data.steps === 0;
        },
    });

    sensor.unsubscribeStepCounter();
});

(async () => {
    clipboard.set({
        text: "Hello World",
        success() { },
    });
    await clipboard.set({
        text: "Hello World",
    });

    clipboard.get({
        success(data) {
            typeof data.text === 'string';
        },
    });
    const { data: r} = await clipboard.get();
    typeof r.text === 'string';
});

(async () => {
    geolocation.getLocation({
        success(data) {
            typeof data.accuracy === 'number';
            typeof data.latitude === 'number';
            typeof data.longitude === 'number';
            typeof data.time === 'number';
        },
    });
    const { data: r} = await geolocation.getLocation();
    typeof r.accuracy === 'number';
    typeof r.latitude === 'number';
    typeof r.longitude === 'number';
    typeof r.time === 'number';

    geolocation.openLocation({
        latitude: 0,
        longitude: 0,
        success() { },
    });
    await geolocation.openLocation({
        latitude: 0,
        longitude: 0,
    });

    geolocation.chooseLocation({
        success(data) {
            typeof data.address === 'string';
            typeof data.coordType === 'string';
            typeof data.latitude === 'number';
            typeof data.longitude === 'number';
            typeof data.name === 'string';
        },
    });
    const { data: r1} = await geolocation.chooseLocation();
    typeof r1.address === 'string';
    typeof r1.coordType === 'string';
    typeof r1.latitude === 'number';
    typeof r1.longitude === 'number';
    typeof r1.name === 'string';

    geolocation.getLocationType({
        success(data) {
            data.types instanceof Array;
        },
    });
    const { data: r2} = await geolocation.getLocationType();
    r2.types instanceof Array;

    geolocation.subscribe({
        callback(data) {
            typeof data.accuracy === 'number';
            typeof data.latitude === 'number';
            typeof data.longitude === 'number';
            typeof data.time === 'number';
        },
    });

    geolocation.unsubscribe();

    geolocation.getSupportedCoordTypes() instanceof Array;

    geolocation.geocodeQuery({
        city: "Beijing",
        address: "Tiananmen Square",
        success(data) {
            typeof data.latitude === 'number';
            typeof data.longitude === 'number';
        },
    });
    const { data: r3} = await geolocation.geocodeQuery({
        city: "Beijing",
        address: "Tiananmen Square",
    });
    typeof r3.latitude === 'number';
    typeof r3.longitude === 'number';

    geolocation.reverseGeocodeQuery({
        latitude: 0,
        longitude: 0,
        success(data) {
            typeof data.address === 'string';
            typeof data.city === 'string';
            typeof data.countryName === 'string';
            typeof data.district === 'string';
            data.poiInfoList instanceof Array;
            typeof data.street === 'string';
        },
    });
    const { data: r4} = await geolocation.reverseGeocodeQuery({
        latitude: 0,
        longitude: 0,
    });
    typeof r4.address === 'string';
    typeof r4.city === 'string';
    typeof r4.countryName === 'string';
    typeof r4.district === 'string';
    r4.poiInfoList instanceof Array;
    typeof r4.street === 'string';
});

(async () => {
    shortcut.hasInstalled({
        success(data) {
            typeof data === 'boolean';
        },
    });
    const { data: r} = await shortcut.hasInstalled();
    typeof r === 'boolean';

    shortcut.install({
        success() { },
    });
    await shortcut.install();

    shortcut.systemPromptEnabled === true;
});

(async () => {
    calendar.insert({
        title: "Meeting",
        startDate: 10000,
        endDate: 20000,
        success(data) {
            typeof data.id === 'number';
        },
    });
    const { data: result} = await calendar.insert({
        title: "Meeting",
        startDate: 10000,
        endDate: 20000,
    });
    typeof result.id === 'number';
});

(async () => {
    network.getType({
        success(data) {
            typeof data.type === 'string';
            typeof data.metered === 'string';
        },
    });
    const { data: r} = await network.getType();
    typeof r.type ==='string';
    typeof r.metered ==='string';

    network.subscribe({
        callback(data) {
            data.type === "";
            data.metered === true;
        },
    });
    
    network.unsubscribe();
    
    network.getSimOperators({
        success(data) {
            data.operators instanceof Array;
            typeof data.size === 'number';
        },
    });
    const { data: r1} = await network.getSimOperators();
    r1.operators instanceof Array;
    typeof r1.size === 'number';
});

(async () => {
    device.getInfo({
        success(data) {
            typeof data.brand === 'string';
        },
    });
    const { data: r} = await device.getInfo();
    typeof r.brand === 'string';

    device.getId({
        type: ["device"],
        success(data) {
            typeof data.mac === 'string';
        },
    });
    const { data: r1} = await device.getId({
        type: ["device"],
    });
    typeof r1.mac === 'string';

    device.getDeviceId({
        success(data) {
            typeof data.deviceId === 'number';
        },
    });
    const { data: r2} = await device.getDeviceId();
    typeof r2.deviceId === 'number';

    device.getUserId({
        success(data) {
            typeof data.userId === 'string';
        },
    });
    const { data: r3} = await device.getUserId();
    typeof r3.userId === 'string';

    device.getAdvertisingId({
        success(data) {
            typeof data.advertisingId === 'string';
        },
    });
    const { data: r4} = await device.getAdvertisingId();
    typeof r4.advertisingId === 'string';

    device.getSerial({
        success(data) {
            typeof data.serial === 'string';
        },
    });
    const { data: r5} = await device.getSerial();
    typeof r5.serial ==='string';

    device.getTotalStorage({
        success(data) {
            typeof data.totalStorage === 'number';
        },
    });
    const { data: r6} = await device.getTotalStorage();
    typeof r6.totalStorage === 'number';

    device.getAvailableStorage({
        success(data) {
            typeof data.availableStorage === 'number';
        },
    });
    const { data: r7} = await device.getAvailableStorage();
    typeof r7.availableStorage === 'number';

    device.getCpuInfo({
        success(data) {
            typeof data.cpuInfo === 'string';
        },
    });
    const { data: r8} = await device.getCpuInfo();
    typeof r8.cpuInfo === 'string';

    device.getOAID({
        success(data) {
            typeof data.oaid === 'string';
        },
    });
    const { data: r9} = await device.getOAID();
    typeof r9.oaid === 'string';

    device.platform.versionCode === 0;

    device.platform.versionName === "";

    device.allowTrackOAID === true;

    device.host.package === "";

    device.host.versionCode === 0;

    device.host.versionName === "";
});

(async () => {
    telecom.getTelecomInfo({
        success(data) {
            typeof data.is5GDevice === 'boolean';
        },
    });
    const { data: r} = await telecom.getTelecomInfo();
    typeof r.is5GDevice === 'boolean';
});

(async () => {
    brightness.getValue({
        success(data) {
            typeof data.value === 'string';
        },
    });
    const { data: r} = await brightness.getValue();
    typeof r.value === 'string';

    brightness.setValue({
        value: 0,
        success() { },
    });
    await brightness.setValue({
        value: 0,
    });

    brightness.getMode({
        success(data) {
            typeof data.mode === 'number';
        },
    });
    const { data: r1} = await brightness.getMode();
    typeof r1.mode === 'number';

    brightness.setMode({
        mode: 0,
        success() { },
    });
    await brightness.setMode({
        mode: 0,
    });

    brightness.setKeepScreenOn({
        keepScreenOn: true,
        success() { },
    });
    await brightness.setKeepScreenOn({
        keepScreenOn: true,
    });
});

volume.getMediaValue();

volume.setMediaValue({
    value: 0,
});

(async () => {
    battery.getStatus({
        success(data) {
            typeof data.charging === 'boolean';
        },
    });
    const { data: result} = await battery.getStatus();
    typeof result.charging === 'boolean';
});

(async () => {
    pkg.hasInstalled({
        package: "com.example.app",
        success(data) {
            typeof data.result === 'boolean';
        },
    });
    const { data: r} = await pkg.hasInstalled({
        package: "com.example.app",
    });
    typeof r.result === 'boolean';

    pkg.install({
        package: "com.example.app",
        success(data) {
            typeof data.result === 'boolean';
        },
    });
    const { data: r1} = await pkg.install({
        package: "com.example.app",
    });
    typeof r1.result === 'boolean';
    
    pkg.getInfo({
        package: "com.example.app",
        success(data) {
            typeof data.versionCode === 'number';
            typeof data.versionName === 'string';
        },
    });
    const { data: r2} = await pkg.getInfo({
        package: "com.example.app",
    });
    typeof r2.versionCode === 'number';
    typeof r2.versionName ==='string';
    
    pkg.getSignatureDigests({
        package: "com.example.app",
        success(data) {
            data.signatureDigests instanceof Array;
        },
    });
    const { data: r3} = await pkg.getSignatureDigests({
        package: "com.example.app",
    });
    r3.signatureDigests instanceof Array;
});

(async () => {
    record.start({
        success(data) {
            typeof data.uri ==='string';
        },
    });
    const { data: r} = await record.start();
    typeof r.uri ==='string';

    record.onframerecorded = function(data) {
        data.frameBuffer === new ArrayBuffer(10);
        data.isLastFrame === true;
    };

    record.stop();
});

(async () => {
    contact.pick({
        success(data) {
            typeof data.displayName === 'string';
        },
    });
    const { data: r} = await contact.pick();
    typeof r.displayName === 'string';
 
    contact.list({
        success(data) {
            data.contactList instanceof Array;
        },
    });
    const { data: r1} = await contact.list();
    r1.contactList instanceof Array;
});

(async () => {
    sms.send({
        address: "123456789",
        content: "Hello World",
        success() { },
    });
    await sms.send({
        address: "123456789",
        content: "Hello World",
    });

    sms.readSafely({
        success(data) {
            typeof data.message ==='string';
        },
    });
    const { data: r} = await sms.readSafely();
    typeof r.message ==='string';
});

(async () => {
    wifi.connect({
        SSID: "MyNetwork",
        BSSID: "MyNetwork",
        success() { },
    });
    await wifi.connect({
        SSID: "MyNetwork",
        BSSID: "MyNetwork",
    });

    wifi.scan({
        success() { },
    });
    await wifi.scan();

    wifi.getConnectedWifi({
        success(data) {
            typeof data.BSSID === 'string';
        },
    });
    const { data: r} = await wifi.getConnectedWifi();
    typeof r.BSSID ==='string';

    wifi.onscanned = (data) => {
        data.wifiList instanceof Array;
    };

    wifi.onstatechanged = (data) => {
        typeof data.state === 'string';
    };
});

(async () => {
    bluetooth.openAdapter({
        success() { },
    });
    await bluetooth.openAdapter();

    bluetooth.closeAdapter({
        success() { },
    });
    await bluetooth.closeAdapter();

    bluetooth.getAdapterState({
        success(data) {
            typeof data.available === 'boolean';
        },
    });
    const { data: adapterState} = await bluetooth.getAdapterState();
    typeof adapterState.available === 'boolean';
    
    bluetooth.onadapterstatechange = (data) => {
        data.available === true;
        data.discovering === true;
    };

    bluetooth.startDevicesDiscovery({
        success() { },
    });
    await bluetooth.startDevicesDiscovery();

    bluetooth.stopDevicesDiscovery({
        success() { },
    });
    await bluetooth.stopDevicesDiscovery();

    bluetooth.getDevices({
        success(data) {
            data.devices instanceof Array;
        },
    });
    const { data: r1} = await bluetooth.getDevices();
    r1.devices instanceof Array;

    bluetooth.ondevicefound = (data) => {
        data.devices[0];
    };

    bluetooth.getConnectedDevices({
        services: ["service1", "service2"],
        success(data) {
            data.devices instanceof Array;
        },
    });
    const { data: r2} = await bluetooth.getConnectedDevices({
        services: ["service1", "service2"],
    });
    r2.devices instanceof Array;

    bluetooth.createBLEConnection({
        deviceId: "device1",
        success() { },
    });
    await bluetooth.createBLEConnection({
        deviceId: "device1",
    });

    bluetooth.closeBLEConnection({
        deviceId: "device1",
        success() { }
    });
    await bluetooth.closeBLEConnection({
        deviceId: "device1",
    });

    bluetooth.getBLEDeviceServices({
        deviceId: "device1",
        success() {}
    });
    await bluetooth.getBLEDeviceServices({
        deviceId: "device1",
    });
    
    bluetooth.getBLEDeviceCharacteristics({
        deviceId: "device1",
        serviceId: "service1",
        success(data) {
            data.characteristics instanceof Array;
        },
    });
    const { data: r3} = await bluetooth.getBLEDeviceCharacteristics({
        deviceId: "device1",
        serviceId: "service1",
    });
    r3.characteristics instanceof Array;

    bluetooth.readBLECharacteristicValue({
        deviceId: "device1",
        serviceId: "service1",
        characteristicId: "characteristic1",
        success() { }
    });
    await bluetooth.readBLECharacteristicValue({
        deviceId: "device1",
        serviceId: "service1",
        characteristicId: "characteristic1",
    });

    bluetooth.writeBLECharacteristicValue({
        deviceId: "device1",
        serviceId: "service1",
        characteristicId: "characteristic1",
        value: new ArrayBuffer(10),
        success() { }
    });
    await bluetooth.writeBLECharacteristicValue({
        deviceId: "device1",
        serviceId: "service1",
        characteristicId: "characteristic1",
        value: new ArrayBuffer(10),
    });

    bluetooth.notifyBLECharacteristicValueChange({
        deviceId: "device1",
        serviceId: "service1",
        characteristicId: "characteristic1",
        state: true,
        success() { }
    });
    await bluetooth.notifyBLECharacteristicValueChange({
        deviceId: "device1",
        serviceId: "service1",
        characteristicId: "characteristic1",
        state: true,
    });

    bluetooth.onblecharacteristicvaluechange = (data) => {
        data.deviceId === "device1";
        data.serviceId === "service1";
        data.characteristicId === "characteristic1";
        data.value === new ArrayBuffer(10);
    };

    bluetooth.onbleconnectionstatechange = (data) => {
        data.deviceId === "device1";
        data.connected === true;
    };
});

(async () => {
    alarm.setAlarm({
        hour: 0,
        minute: 0,
        success: () => {},
    });
    await alarm.setAlarm({
        hour: 0,
        minute: 0,
    });

    typeof alarm.getProvider() === 'string';
    
    alarm.isAvailable({
        success(data) {
            data.isAvailable === true;
        }
    })
    const { data: result} = await alarm.isAvailable();
    result.isAvailable === true;
});

(async () => {
    zip.decompress({
        srcUri: "file:///path/to/zip/file.zip",
        dstUri: "file:///path/to/destination/folder",
        success() { },
    });
    await zip.decompress({
        srcUri: "file:///path/to/zip/file.zip",
        dstUri: "file:///path/to/destination/folder",
    });
});

(async () => {
    keyguard.getKeyguardLockedStatus({
        success(data) {
            typeof data.isKeyguardLocked === 'boolean';
        },
    });
    const { data: r} = await keyguard.getKeyguardLockedStatus();
    typeof r.isKeyguardLocked === 'boolean';
});

(async () => {
    screenshot.onUserCaptureScreen({
        callback: () => {},
    });

    screenshot.offUserCaptureScreen();
});

(async () => {
    const NFCAdp = nfc.getNFCAdapter();

    NFCAdp.startDiscovery({
        success() { },
    });
    await NFCAdp.startDiscovery();

    NFCAdp.stopDiscovery({
        success() { },
    });
    await NFCAdp.stopDiscovery();

    NFCAdp.onDiscovered({
        callback(data) {
            data.id === new ArrayBuffer(10);
            data.techs[0] === "NFC_A";
            data.messages[0].id === new ArrayBuffer(10);
            data.messages[0].type === new ArrayBuffer(10);
            data.messages[0].payload === new ArrayBuffer(10);
        },
    });
    
    NFCAdp.offDiscovered();
    
    const ndef = NFCAdp.getNdef();
    
    ndef.close({
        success() { },
    });
    await ndef.close();

    ndef.connect({
        success() { },
    });
    await ndef.connect();

    ndef.isConnected({
        success(data) {
            typeof data.isConnected === 'boolean';
        },
    });
    const { data: r} = await ndef.isConnected();
    typeof r.isConnected === 'boolean';

    ndef.setTimeout({
        timeout: 1000,
        success() { },
    });
    await ndef.setTimeout({
        timeout: 1000,
    });

    ndef.writeNdefMessage({
        success() { },
    });
    await ndef.writeNdefMessage();

    const nfcA = NFCAdp.getNfcA();

    nfcA.close({
        success() { },
    });
    await nfcA.close();

    nfcA.connect({
        success() { },
    });
    await nfcA.connect();

    nfcA.getMaxTransceiveLength({
        success(data) {
            typeof data.length === 'number';
        },
    });
    const { data: r1} = await nfcA.getMaxTransceiveLength();
    typeof r1.length === 'number';

    nfcA.isConnected({
        success(data) {
            typeof data.isConnected === 'boolean';
        },
    });
    const { data: r2} = await nfcA.isConnected();
    typeof r2.isConnected === 'boolean';

    nfcA.setTimeout({
        timeout: 1000,
        success() { },
    });
    await nfcA.setTimeout({
        timeout: 1000,
    });

    nfcA.transceive({
        success(data) {
            data.data instanceof ArrayBuffer;
        },
    });
    const { data: r3} = await nfcA.transceive();
    r3.data instanceof ArrayBuffer;

    nfcA.getAtqa({
        success(data) {
            data.atqa instanceof ArrayBuffer;
        },
    });
    const { data: r4} = await nfcA.getAtqa();
    r4.atqa instanceof ArrayBuffer;

    nfcA.getSak({
        success(data) {
            data.sak instanceof ArrayBuffer;
        },
    });
    const { data: r5} = await nfcA.getSak();
    r5.sak instanceof ArrayBuffer;

    const nfcB = NFCAdp.getNfcB();

    nfcB.close({
        success() { },
    });
    await nfcB.close();

    nfcB.connect({
        success() { },
    });
    await nfcB.connect();

    nfcB.getMaxTransceiveLength({
        success(data) {
            typeof data.length === 'number';
        },
    });
    const { data: r6} = await nfcB.getMaxTransceiveLength();
    typeof r6.length === 'number';

    nfcB.isConnected({
        success(data) {
            typeof data.isConnected === 'boolean';
        },
    });
    const { data: r7} = await nfcB.isConnected();
    typeof r7.isConnected === 'boolean';

    nfcB.transceive({
        success(data) {
            data.data instanceof ArrayBuffer;
        },
    });
    const { data: r8} = await nfcB.transceive();
    r8.data instanceof ArrayBuffer;

    const nfcF = NFCAdp.getNfcF();
    
    nfcF.close({
        success() { },
    });
    await nfcF.close();

    nfcF.connect({
        success() { },
    });
    await nfcF.connect();

    nfcF.getMaxTransceiveLength({
        success(data) {
            typeof data.length === 'number';
        },
    });
    const { data: r9} = await nfcF.getMaxTransceiveLength();
    typeof r9.length === 'number';

    nfcF.isConnected({
        success(data) {
            typeof data.isConnected === 'boolean';
        },
    });
    const { data: r10} = await nfcF.isConnected();
    typeof r10.isConnected === 'boolean';

    nfcF.setTimeout({
        timeout: 1000,
        success() { },
    });
    await nfcF.setTimeout({
        timeout: 1000,
    });

    nfcF.transceive({
        success(data) {
            data.data instanceof ArrayBuffer;
        },
    });
    const { data: r11} = await nfcF.transceive();
    r11.data instanceof ArrayBuffer;
    
    const nfcV = NFCAdp.getNfcV();
    
    nfcV.close({
        success() { },
    });
    await nfcV.close();

    nfcV.connect({
        success() { },
    });
    await nfcV.connect();

    nfcV.getMaxTransceiveLength({
        success(data) {
            typeof data.length === 'number';
        },
    });
    const { data: r12} = await nfcV.getMaxTransceiveLength();
    typeof r12.length === 'number';

    nfcV.isConnected({
        success(data) {
            typeof data.isConnected === 'boolean';
        },
    });
    const { data: r13} = await nfcV.isConnected();
    typeof r13.isConnected === 'boolean';

    nfcV.transceive({
        success(data) {
            data.data instanceof ArrayBuffer;
        },
    });
    const { data: r14} = await nfcV.transceive();
    r14.data instanceof ArrayBuffer;
    
    const isoDep = NFCAdp.getIsoDep();
    
    isoDep.close({
        success() { },
    });
    await isoDep.close();

    isoDep.connect({
        success() { },
    });
    await isoDep.connect();

    isoDep.getHistoricalBytes({
        success(data) {
            data.histBytes instanceof ArrayBuffer;
        },
    });
    const { data: r15} = await isoDep.getHistoricalBytes();
    r15.histBytes instanceof ArrayBuffer;

    isoDep.getMaxTransceiveLength({
        success(data) {
            typeof data.length === 'number';
        },
    });
    const { data: t16} = await isoDep.getMaxTransceiveLength();
    typeof t16.length === 'number';

    isoDep.isConnected({
        success(data) {
            typeof data.isConnected === 'boolean';
        },
    });
    await isoDep.isConnected();

    isoDep.setTimeout({
        timeout: 1000,
        success() { },
    });
    await isoDep.setTimeout({
        timeout: 1000,
    });

    isoDep.transceive({
        success(data) {
            data.data instanceof ArrayBuffer;
        },
    });
    const { data: r17} = await isoDep.transceive();
    r17.data instanceof ArrayBuffer;

    const mifareClassic = NFCAdp.getMifareClassic();

    mifareClassic.close({
        success() { },
    });
    await mifareClassic.close();

    mifareClassic.connect({
        success() { },
    });
    await mifareClassic.connect();

    mifareClassic.getMaxTransceiveLength({
        success(data) {
            typeof data.length === 'number';
        },
    });
    const { data: r18} = await mifareClassic.getMaxTransceiveLength();
    typeof r18.length === 'number';

    mifareClassic.isConnected({
        success(data) {
            typeof data.isConnected === 'boolean';
        },
    });
    const { data: r19} = await mifareClassic.isConnected();
    typeof r19.isConnected === 'boolean';

    mifareClassic.setTimeout({
        timeout: 1000,
        success() { },
    });
    await mifareClassic.setTimeout({
        timeout: 1000,
    });

    mifareClassic.transceive({
        success(data) {
            data.data instanceof ArrayBuffer;
        },
    });
    const { data: r20} = await mifareClassic.transceive();
    r20.data instanceof ArrayBuffer;

    const mifareUltralight = NFCAdp.getMifareUltralight();

    mifareUltralight.close({
        success() { },
    });
    await mifareUltralight.close();

    mifareUltralight.connect({
        success() { },
    });
    await mifareUltralight.connect();

    mifareUltralight.getMaxTransceiveLength({
        success(data) {
            typeof data.length === 'number';
        },
    });
    const { data: r21} = await mifareUltralight.getMaxTransceiveLength();
    typeof r21.length === 'number';

    mifareUltralight.isConnected({
        success(data) {
            typeof data.isConnected === 'boolean';
        },
    });
    const { data: r22} = await mifareUltralight.isConnected();
    typeof r22.isConnected === 'boolean';

    mifareUltralight.setTimeout({
        timeout: 1000,
        success() { },
    });
    await mifareUltralight.setTimeout({
        timeout: 1000,
    });

    mifareUltralight.transceive({
        success(data) {
            data.data instanceof ArrayBuffer;
        },
    });
    const { data: r23} = await mifareUltralight.transceive();
    r23.data instanceof ArrayBuffer;
});

(async () => {
    cipher.rsa({
        action: "encrypt",
        text: "text",
        key: "key",
        success(data) {
            typeof data.text === 'string';
        },
    });
    const { data: r} = await cipher.rsa({
        action: "encrypt",
        text: "text",
        key: "key",
    });
    typeof r.text === 'string';

    cipher.aes({
        action: "decrypt",
        text: "text",
        key: "key",
        success(data) {
            typeof data.text ==='string';
        },
    });
    const { data: r1} = await cipher.aes({
        action: "decrypt",
        text: "text",
        key: "key",
    });
    typeof r1.text === 'string';
});

(async () => {
    media.takePhoto({
        success(data) {
            typeof data.name === 'string';
        },
    });
    const { data: r} = await media.takePhoto();
    typeof r.name ==='string';

    media.takeVideo({
        success(data) {
            typeof data.name ==='string';
        },
    });
    const { data: r1} = await media.takeVideo();
    typeof r1.name ==='string';

    media.pickImage({
        success(data) {
            typeof data.name ==='string';
        },
    });
    const { data: r2} = await media.pickImage();
    typeof r2.name ==='string';

    media.pickImages({
        success(data) {
            data.uris instanceof Array;
        },
    });
    const { data: r3} = await media.pickImages();
    r3.uris instanceof Array;

    media.pickVideo({
        success(data) {
            typeof data.name ==='string';
        },
    });
    const { data: r4} = await media.pickVideo();
    typeof r4.name ==='string';

    media.pickVideos({
        success(data) {
            data.uris instanceof Array;
        },
    });
    const { data: r5} = await media.pickVideos();
    r5.uris instanceof Array;

    media.pickFile({
        success(data) {
            typeof data.name ==='string';
        },
    });
    const { data: r6} = await media.pickFile();
    typeof r6.name ==='string';

    media.saveToPhotosAlbum({
        uri: "file:///path/to/file",
        success() { },
    });
    await media.saveToPhotosAlbum({
        uri: "file:///path/to/file",
    });

    media.previewImage({
        uris: ["file:///path/to/file1", "file:///path/to/file2"],
        success() { },
    });
    await media.previewImage({
        uris: ["file:///path/to/file1", "file:///path/to/file2"],
    });

    media.getRingtone({
        type: "ringtone",
        success(data) {
            typeof data.title ==='string';
        },
    });
    const { data: r7} = await media.getRingtone({
        type: "ringtone",
    });
    typeof r7.title ==='string';

    media.setRingtone({
        uri: "file:///path/to/file",
        type: "ringtone",
        success() { },
    });
    await media.setRingtone({
        uri: "file:///path/to/file",
        type: "ringtone",
    });
});

(async () => {
    image.getImageInfo({
        uri: "file:///path/to/file",
        success(data) {
            typeof data.width ==='number';
        },
    });
    const { data: r} = await image.getImageInfo({
        uri: "file:///path/to/file",
    });
    typeof r.width ==='number';

    image.compressImage({
        uri: "file:///path/to/file",
        success(data) {
            typeof data.uri ==='string';
        },
    });
    const { data: r1} = await image.compressImage({
        uri: "file:///path/to/file",
    });
    typeof r1.uri ==='string';

    image.applyOperations({
        uri: "file:///path/to/file",
        operations: [{
            action: "crop",
            x: 0,
            y: 0,
            width: 100,
            height: 100,
        }],
        success(data) {
            typeof data.uri ==='string';
        },
    });
    const { data: r2} = await image.applyOperations({
        uri: "file:///path/to/file",
        operations: [{
            action: "crop",
            x: 0,
            y: 0,
            width: 100,
            height: 100,
        }],
    });
    typeof r2.uri ==='string';

    image.editImage({
        uri: "file:///path/to/file",
        success(data) {
            typeof data.uri ==='string';
        },
    });
    const { data: r3} = await image.editImage({
        uri: "file:///path/to/file",
    });
    typeof r3.uri ==='string';

    image.getExifAttributes({
        uri: "file:///path/to/file",
        success(data) {
            typeof data.attributes ==='object';
        },
    });
    const { data: r4} = await image.getExifAttributes({
        uri: "file:///path/to/file",
    });
    typeof r4.attributes ==='object';

    image.setExifAttributes({
        uri: "file:///path/to/file",
        attributes: {
            "ApertureValue": 1,
            "BitsPerSample": "123123",
        },
        success(data) {
            typeof data.uri ==='string';
        },
    });
    const { data: r5} = await image.setExifAttributes({
        uri: "file:///path/to/file",
        attributes: {
            "ApertureValue": 1,
            "BitsPerSample": "123123",
        },
    });
    typeof r5.uri ==='string';
});

(async () => {
    const video = new Video({
        uri: "file:///path/to/file",
    });

    video.onprogressupdate = (data) => {
        data.progress === 0.5;
    };

    video.compressVideo({
        success(data) {
            typeof data.uri ==='string';
        },
    });
    const { data: r} = await video.compressVideo();
    typeof r.uri ==='string';
    
    video.abort({
        success() { },
    });
    await video.abort();

    Video.getVideoInfo({
        uri: "file:///path/to/file",
        success(data) {
            typeof data.bitrate ==='number';
        },
    });
    const { data: r1} = await Video.getVideoInfo({
        uri: "file:///path/to/file",
    });
    typeof r1.bitrate ==='number';

    Video.getVideoThumbnail({
        uri: "file:///path/to/file",
        success(data) {
            typeof data.uri ==='string';
        },
    });
    const { data: r2} = await Video.getVideoThumbnail({
        uri: "file:///path/to/file",
    });
    typeof r2.uri ==='string';
});

(async () => {
    audio.play();
    
    audio.pause();
    
    audio.stop();
    
    audio.getPlayState({
        success(data) {
            typeof data.src === 'string';
        },
    });
    const { data: playState} = await audio.getPlayState();
    typeof playState.src === 'string';
    
    audio.src = "file:///path/to/file";
    
    audio.currentTime = 100;
    
    audio.duration = 100;
    
    audio.autoplay = true;
    
    audio.loop = true;
    
    audio.muted = true;
    
    audio.notificationVisible = true;
    
    audio.title = "title";
    
    audio.cover = "file:///path/to/file";
    
    audio.streamType = "music";
    
    audio.onplay = () => {};
    
    audio.onpause = () => {};
    
    audio.onstop = () => {};
    
    audio.onloadeddata = () => {};
    
    audio.onended = () => {};
    
    audio.ondurationchange = () => {};
    
    audio.onerror = () => {};
    
    audio.ontimeupdate = () => {};
    
    audio.onprevious = () => {};
    
    audio.onnext = () => {};
});

(async () => {
    texttoaudio.speak({
        lang: "en_US",
        content: "Hello world",
        success(data) {
            typeof data.utteranceId ==='string';
        },
    });
    const { data: r} = await texttoaudio.speak({
        lang: "en_US",
        content: "Hello world",
    });
    typeof r.utteranceId ==='string';

    texttoaudio.textToAudioFile({
        lang: "en_US",
        content: "Hello world",
        success(data) {
            typeof data.filePath ==='string';
        },
    });
    const { data: r1} = await texttoaudio.textToAudioFile({
        lang: "en_US",
        content: "Hello world",
    });
    typeof r1.filePath ==='string';

    texttoaudio.isLanguageAvailable({
        lang: "en_US",
        success(data) {
            typeof data.isAvailable ==='boolean';
        },
    });
    const { data: r2} = await texttoaudio.isLanguageAvailable({
        lang: "en_US",
    });
    typeof r2.isAvailable ==='boolean';

    texttoaudio.onttsstatechange = (data) => {
        data.state === "onDone";
        data.utteranceId === "123";
    };

    texttoaudio.stop() === 0;
});

(async () => {
    push.getProvider();

    push.subscribe({
        success(data) {
            typeof data.regId ==='string';
        },
    });
    const { data: r} = await push.subscribe();
    typeof r.regId ==='string';

    push.unsubscribe({
        success() { },
    });
    await push.unsubscribe();

    push.on({
        callback(data) {
            data.data === "data";
            data.messageId === "messageId";
        },
    });

    push.off();
});

(async () => {
    pay.getProvider();

    pay.pay({
        orderInfo: "123123",
        success(data) {
            typeof data.code === 'number';
        }
    });
    const { data: r} = await pay.pay({
        orderInfo: "123123",
    });
    typeof r.code === 'number';
});

(async () => {
    stats.getProvider();
    
    stats.recordCountEvent({
        key: "key",
    });
    
    stats.recordCalculateEvent({
        key: "key",
        value: 1,
    });
});

(async () => {
    account.getProvider();

    account.isLogin({
        success(data) {
            typeof data.isLogin === 'boolean';
        },
    });
    const { data: r} = await account.isLogin();
    typeof r.isLogin === 'boolean';

    account.authorize({
        type: "code",
        success(data) {
            typeof data.accessToken  === 'string';
        },
    });
    const { data: r1} = await account.authorize({
        type: "code",
    });
    typeof r1.accessToken  ==='string';

    account.getProfile({
        token: "asdasd",
        success(data) {
            typeof data.avatar === 'string';
        },
    });
    const { data: r2} = await account.getProfile({
        token: "asdasd",
    });
    typeof r2.avatar ==='string';

    account.getPhoneNumber({
        success(data) {
            typeof data.phoneNumber ==='string';
        },
    });
    const { data: r3} = await account.getPhoneNumber();
    typeof r3.phoneNumber ==='string';

    account.getEncryptedID({
        success(data) {
            typeof data.encryptedid ==='string';
        },
    });
    const { data: r4} = await account.getEncryptedID();
    typeof r4.encryptedid ==='string';
});

(async () => {
    health.hasStepsOfDay({
        success(data) {
            typeof data.support === 'boolean';
        },
    });
    const { data: r} = await health.hasStepsOfDay();
    typeof r.support === 'boolean';

    health.getTodaySteps({
        success(data) {
            typeof data.steps === 'number';
        },
    });
    const { data: r1} = await health.getTodaySteps();
    typeof r1.steps === 'number';

    health.getLastWeekSteps({
        success(data) {
            data.stepsList instanceof Array;
        },
    });
    const { data: r2} = await health.getLastWeekSteps();
    r2.stepsList instanceof Array;
});

(async () => {
    ad.getProvider();

    const bannerAd = ad.createBannerAd({
        adUnitId: "adUnitId",
    });
    bannerAd.style.width = 100;
    bannerAd.show();
    bannerAd.hide();
    bannerAd.onError((err) => {
        err.errCode === 1000;
        err.errMsg === "error";
    });
    bannerAd.offError(() => {});
    bannerAd.onLoad(() => {});
    bannerAd.offLoad(() => {});
    bannerAd.onResize(() => {});
    bannerAd.offResize(() => {});
    bannerAd.destroy();

    const interstitialAd = ad.createInterstitialAd({
        adUnitId: "adUnitId",
    });
    interstitialAd.show();
    interstitialAd.onLoad(() => {});
    interstitialAd.offLoad(() => {});
    interstitialAd.onClose(() => {});
    interstitialAd.offClose(() => {});
    interstitialAd.onError((err) => {
        err.errCode === 1000;
        err.errMsg === "error";
    });
    interstitialAd.offError(() => {});
    interstitialAd.destroy();

    const nativeAd = ad.createNativeAd({
        adUnitId: "adUnitId",
    });
    nativeAd.load();
    nativeAd.reportAdShow({
        adId: "adId",
    });
    nativeAd.reportAdClick({
        adId: "adId",
    });
    nativeAd.onLoad(() => {});
    nativeAd.offLoad(() => {});
    nativeAd.onError((err) => {
        err.errCode === 1000;
        err.errMsg === "error";
    });
    nativeAd.offError(() => {});
    nativeAd.destroy();

    ad.preloadAd({
        adUnitId: "adUnitId",
        type: "native",
        adCount: 2,
        success(data) {
            data.adList instanceof Array;
        },
    });
    const { data: r} = await ad.preloadAd({
        adUnitId: "adUnitId",
        type: "native",
        adCount: 2,
    });
    r.adList instanceof Array;

    const rewardedVideoAd = ad.createRewardedVideoAd({
        adUnitId: "adUnitId",
    });
    rewardedVideoAd.load();
    rewardedVideoAd.show();
    rewardedVideoAd.onLoad(() => {});
    rewardedVideoAd.offLoad(() => {});
    rewardedVideoAd.onClose(() => {});
    rewardedVideoAd.offClose(() => {});
    rewardedVideoAd.onError((err) => {
        err.errCode === 1000;
        err.errMsg === "error";
    });
    rewardedVideoAd.offError(() => {});
});

(async () => {
    wxpay.getType();
    
    wxpay.pay({
        prepayid: "prepayid",
        extra: {
            app_id: "app_id",
            partner_id: "partner_id",
            package_value: "package_value",
            nonce_str: "nonce_str",
            time_stamp: "timestamp",
            order_sign: "sign",
        },
        success(data) {
            typeof data.final_url === 'string';
        },
    });
    const { data: r} = await wxpay.pay({
        prepayid: "prepayid",
        extra: {
            app_id: "app_id",
            partner_id: "partner_id",
            package_value: "package_value",
            nonce_str: "nonce_str",
            time_stamp: "timestamp",
            order_sign: "sign",
        },
    });
    typeof r.final_url ==='string';
});

(async () => {
    alipay.pay({
        orderInfo: "orderInfo",
    });
});

(async () => {
    share2.getProvider();

    share2.share({
        shareType: 1,
        title: "title",
        success() { },
    });
    await share2.share({
        shareType: 1,
        title: "title",
    });

    share2.getAvailablePlatforms({
        success(data) {
            data.platforms instanceof Array;
        }
    });
    const { data: r} = await share2.getAvailablePlatforms();
    r.platforms instanceof Array;
});

(async () => {
    qqaccount.getType();

    qqaccount.authorize({
        state: "state",
        redirectUri: "redirectUri",
        success(data) {
            typeof data.url ==='string';
        },
    });
    const { data: r} = await qqaccount.authorize({
        state: "state",
        redirectUri: "redirectUri",
    });
    typeof r.url ==='string';
});

(async () => {
    wxaccount.getType();

    wxaccount.authorize({
        scope: "scope",
        success(data) {
            typeof data.code ==='string';
        },
    });
    const { data: r} = await wxaccount.authorize({
        scope: "scope",
    });
    typeof r.code ==='string';
});

(async () => {
    wbaccount.getType();

    wbaccount.authorize({
        redirectUri: "redirectUri",
        success(data) {
            typeof data.accessToken ==='string';
        },
    });
    const { data: r} = await wbaccount.authorize({
        redirectUri: "redirectUri",
    });
    typeof r.accessToken ==='string';
});
