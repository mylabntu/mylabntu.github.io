var APP_DATA = {
  "scenes": [
    {
      "id": "0-408-chemistry",
      "name": "408 Chemistry",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -2.6192596922048956,
        "pitch": 0.07272697256797045,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": -2.728716262099221,
          "pitch": 0.20292786256825757,
          "rotation": 0,
          "target": "3-412-office"
        },
        {
          "yaw": 0.8745433702233321,
          "pitch": 0.353913790644901,
          "rotation": 0,
          "target": "1-408-cvd"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.083387574752571,
          "pitch": 0.2997057127385716,
          "title": "Fume Hood",
          "text": "For chemistry experiments"
        },
        {
          "yaw": -0.40903783584594144,
          "pitch": 0.34542041855644,
          "title": "LB machine",
          "text": "Langmuir-Blodgett trough"
        },
        {
          "yaw": 1.1804045605968874,
          "pitch": 0.1994936149679738,
          "title": "Evaporator",
          "text": "electron-beam evaporator"
        },
        {
          "yaw": 2.843986191894329,
          "pitch": 0.40065582820106016,
          "title": "Microscope",
          "text": "Optical microscope"
        }
      ]
    },
    {
      "id": "1-408-cvd",
      "name": "408 CVD",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.11885612802926993,
          "pitch": 0.29998367740595633,
          "rotation": 0,
          "target": "0-408-chemistry"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.458858215732623,
          "pitch": 0.22115955552185973,
          "title": "CVD reactors",
          "text": "Chemical Vapor deposition"
        },
        {
          "yaw": -2.778980533504491,
          "pitch": 0.43750266985474795,
          "title": "MBE&nbsp;",
          "text": "Molecular Beam Epitaxy"
        }
      ]
    },
    {
      "id": "2-412-iv",
      "name": "412 IV",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.5609084437558494,
          "pitch": 0.25068158242442884,
          "rotation": 0,
          "target": "3-412-office"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.1770926652632774,
          "pitch": 0.2628135054990821,
          "title": "Probe station",
          "text": "Low-temperature probe station"
        },
        {
          "yaw": -0.021097618762492942,
          "pitch": 0.3473275876709323,
          "title": "Power supplies",
          "text": "Vector Network Analyzer, Potentiostat"
        },
        {
          "yaw": -1.5882332275399378,
          "pitch": 0.6408600756599476,
          "title": "Light source",
          "text": "Monochromatic light source"
        }
      ]
    },
    {
      "id": "3-412-office",
      "name": "412 Office",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.3723434743470513,
          "pitch": 0.20082031019102153,
          "rotation": 0,
          "target": "2-412-iv"
        },
        {
          "yaw": -2.9952773882615915,
          "pitch": 0.11290725285858727,
          "rotation": 0,
          "target": "0-408-chemistry"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "MYlab walkthrough",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
