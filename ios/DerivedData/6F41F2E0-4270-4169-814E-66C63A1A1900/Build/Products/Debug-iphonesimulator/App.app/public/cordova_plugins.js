
  cordova.define('cordova/plugin_list', function(require, exports, module) {
    module.exports = [
      {
          "id": "cordova-plugin-device.device",
          "file": "plugins/cordova-plugin-device/www/device.js",
          "pluginId": "cordova-plugin-device",
        "clobbers": [
          "device"
        ]
        },
      {
          "id": "cordova-pdf-generator.pdf",
          "file": "plugins/cordova-pdf-generator/www/pdf.js",
          "pluginId": "cordova-pdf-generator",
        "clobbers": [
          "cordova.plugins.pdf",
          "pugin.pdf",
          "pdf"
        ]
        }
    ];
    module.exports.metadata =
    // TOP OF METADATA
    {
      "cordova-pdf-generator": "2.1.1",
      "cordova-plugin-device": "2.0.2"
    };
    // BOTTOM OF METADATA
    });
    