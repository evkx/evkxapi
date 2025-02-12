Welcome to EVXK API

See below for example data


Example data




```json
{
  "Id": "8308a949-911b-4bb8-be98-e6bed5899448",
  "Path": "audi/q6_e-tron/sq6_e-tron.json",
  "Brand": {
    "Id": null,
    "Name": "Audi",
    "SubBrand": null
  },
  "ModelInfo": {
    "Name": "Q6 e-tron",
    "Variant": "SQ6 e-tron",
    "IsPublished": true,
    "EmbargoDate": null,
    "Ignore": null,
    "CarSegment": "C_SUV",
    "PriceSegment": "Premium",
    "Platform": "PPE",
    "EvOnlyPlatform": true,
    "EvOnlyConstruction": true,
    "BodyType": "SUV",
    "ModelStatus": "InProduction",
    "SpecStatus": "Complete",
    "WorldPremiere": "2024-03-18",
    "DeliveryStart": "2024-08-01",
    "Availability": [
      {
        "Region": "Americas",
        "SubRegion": "NorthernAmerica",
        "CountryList": null,
        "SaleStart": null,
        "DeliveryStart": null,
        "AvailableStatus": "Available"
      },
      {
        "Region": "Europe",
        "SubRegion": null,
        "CountryList": null,
        "SaleStart": null,
        "DeliveryStart": null,
        "AvailableStatus": "Available"
      },
      {
        "Region": "Oceania",
        "SubRegion": null,
        "CountryList": null,
        "SaleStart": null,
        "DeliveryStart": null,
        "AvailableStatus": "Announced"
      }
    ],
    "Pricing": [
      {
        "StartPrice": 949900,
        "Currency": "NOK",
        "Country": "Norway"
      },
      {
        "StartPrice": 72900,
        "Currency": "USD",
        "Country": "UnitedStates"
      }
    ],
    "Alternatives": [
      {
        "Id": "51bbd154-4968-4412-baf4-f86a68ff1bbb",
        "Brand": "Mercedes",
        "Model": "EQE SUV",
        "Variant": "EQE 53 4MATIC\u002B SUV"
      },
      {
        "Id": "dc137bcb-3b99-47d9-a538-a7429ea8096c",
        "Brand": "BMW",
        "Model": "iX",
        "Variant": "iX M60"
      },
      {
        "Id": "cf6d039f-f4f6-4688-bbf3-8ffcff7dda71",
        "Brand": "Porsche",
        "Model": "Macan",
        "Variant": "Macan 4S"
      }
    ],
    "ReplacedBy": null,
    "Replaces": null
  },
  "Dimensions": {
    "Length": 4771,
    "Height": 1685,
    "WidthExcludingMirrors": 1939,
    "WidhtIncludingMirrors": 2193,
    "Wheelbase": 2899,
    "TrackWidthFront": null,
    "TrackWidthRear": null,
    "DragCoefficient": 0.3,
    "FrontalArea": 2.73,
    "ApproachAngle": 16.3,
    "DepartureAngle": 23.7,
    "TurningCircle": 12.1
  },
  "TransportCapabilities": {
    "CurbWeight": 2350,
    "MaxVehicleWeightKg": 2965,
    "Frunk": true,
    "FrunkSizeLiter": 64,
    "RoofCargo": true,
    "MaxRoofLoadKg": 75,
    "Towbar": {
      "FeatureStatus": "Optional"
    },
    "TrailerSizeBrakedKg": 2400,
    "TrailerSizeUnBrakedKg": 750,
    "MaxTowbarDownloadKg": 100,
    "CargoCapacityLiter": 514,
    "CargoCapacitySeatDownLiter": 1517,
    "CargoCapacityThirdRowSeatDownLiter": null,
    "BedVolumeLiter": null,
    "BedLength": null,
    "BedWidth": null,
    "BedMaxWeight": null
  },
  "Drivetrain": {
    "Battery": [
      {
        "Id": "b6639b61-5a7c-4ded-ad19-6258e6637c95",
        "Optional": false,
        "Name": "100kWh",
        "GrossCapacitykWh": 100,
        "NetCapacitykWh": 94.9,
        "WeightKg": 575,
        "BatteryType": "CTM",
        "Modules": "12",
        "CellPerModule": "15",
        "PackConfiguration": "180s1p",
        "CellInfo": {
          "CellProducer": "CATL",
          "CellType": "Prismatic",
          "CellChemistry": "NMC",
          "Capacity": 152,
          "NominalVoltage": null
        },
        "NominalVoltage": 662,
        "BatteryCapacityAh": 152,
        "ChargeCurves": [
          {
            "ChargeSpeed": [
              {
                "SOC": 0,
                "SpeedKw": 100
              },
              {
                "SOC": 1,
                "SpeedKw": 231
              },
              {
                "SOC": 2,
                "SpeedKw": 231
              },
              {
                "SOC": 3,
                "SpeedKw": 234
              },
              {
                "SOC": 4,
                "SpeedKw": 236
              },
              {
                "SOC": 5,
                "SpeedKw": 240
              },
              {
                "SOC": 6,
                "SpeedKw": 249
              },
              {
                "SOC": 7,
                "SpeedKw": 260
              },
              {
                "SOC": 8,
                "SpeedKw": 273
              },
              {
                "SOC": 9,
                "SpeedKw": 278
              },
              {
                "SOC": 10,
                "SpeedKw": 279
              },
              {
                "SOC": 11,
                "SpeedKw": 280
              },
              {
                "SOC": 12,
                "SpeedKw": 280
              },
              {
                "SOC": 13,
                "SpeedKw": 281
              },
              {
                "SOC": 14,
                "SpeedKw": 281
              },
              {
                "SOC": 15,
                "SpeedKw": 282
              },
              {
                "SOC": 16,
                "SpeedKw": 283
              },
              {
                "SOC": 17,
                "SpeedKw": 282
              },
              {
                "SOC": 18,
                "SpeedKw": 283
              },
              {
                "SOC": 19,
                "SpeedKw": 283
              },
              {
                "SOC": 20,
                "SpeedKw": 284
              },
              {
                "SOC": 21,
                "SpeedKw": 285
              },
              {
                "SOC": 22,
                "SpeedKw": 285
              },
              {
                "SOC": 23,
                "SpeedKw": 286
              },
              {
                "SOC": 24,
                "SpeedKw": 286
              },
              {
                "SOC": 25,
                "SpeedKw": 287
              },
              {
                "SOC": 26,
                "SpeedKw": 287
              },
              {
                "SOC": 27,
                "SpeedKw": 287
              },
              {
                "SOC": 28,
                "SpeedKw": 287
              },
              {
                "SOC": 29,
                "SpeedKw": 288
              },
              {
                "SOC": 30,
                "SpeedKw": 288
              },
              {
                "SOC": 31,
                "SpeedKw": 286
              },
              {
                "SOC": 32,
                "SpeedKw": 282
              },
              {
                "SOC": 33,
                "SpeedKw": 286
              },
              {
                "SOC": 34,
                "SpeedKw": 284
              },
              {
                "SOC": 35,
                "SpeedKw": 280
              },
              {
                "SOC": 36,
                "SpeedKw": 251
              },
              {
                "SOC": 37,
                "SpeedKw": 231
              },
              {
                "SOC": 38,
                "SpeedKw": 219
              },
              {
                "SOC": 39,
                "SpeedKw": 212
              },
              {
                "SOC": 40,
                "SpeedKw": 228
              },
              {
                "SOC": 41,
                "SpeedKw": 229
              },
              {
                "SOC": 42,
                "SpeedKw": 220
              },
              {
                "SOC": 43,
                "SpeedKw": 218
              },
              {
                "SOC": 44,
                "SpeedKw": 215
              },
              {
                "SOC": 45,
                "SpeedKw": 208
              },
              {
                "SOC": 46,
                "SpeedKw": 209
              },
              {
                "SOC": 47,
                "SpeedKw": 210
              },
              {
                "SOC": 48,
                "SpeedKw": 211
              },
              {
                "SOC": 49,
                "SpeedKw": 205
              },
              {
                "SOC": 50,
                "SpeedKw": 206
              },
              {
                "SOC": 51,
                "SpeedKw": 200
              },
              {
                "SOC": 52,
                "SpeedKw": 199
              },
              {
                "SOC": 53,
                "SpeedKw": 200
              },
              {
                "SOC": 54,
                "SpeedKw": 201
              },
              {
                "SOC": 55,
                "SpeedKw": 194
              },
              {
                "SOC": 56,
                "SpeedKw": 195
              },
              {
                "SOC": 57,
                "SpeedKw": 192
              },
              {
                "SOC": 58,
                "SpeedKw": 190
              },
              {
                "SOC": 59,
                "SpeedKw": 181
              },
              {
                "SOC": 60,
                "SpeedKw": 182
              },
              {
                "SOC": 61,
                "SpeedKw": 181
              },
              {
                "SOC": 62,
                "SpeedKw": 182
              },
              {
                "SOC": 63,
                "SpeedKw": 179
              },
              {
                "SOC": 64,
                "SpeedKw": 182
              },
              {
                "SOC": 65,
                "SpeedKw": 178
              },
              {
                "SOC": 66,
                "SpeedKw": 174
              },
              {
                "SOC": 67,
                "SpeedKw": 170
              },
              {
                "SOC": 68,
                "SpeedKw": 165
              },
              {
                "SOC": 69,
                "SpeedKw": 160
              },
              {
                "SOC": 70,
                "SpeedKw": 154
              },
              {
                "SOC": 71,
                "SpeedKw": 148
              },
              {
                "SOC": 72,
                "SpeedKw": 146
              },
              {
                "SOC": 73,
                "SpeedKw": 142
              },
              {
                "SOC": 74,
                "SpeedKw": 139
              },
              {
                "SOC": 75,
                "SpeedKw": 134
              },
              {
                "SOC": 76,
                "SpeedKw": 131
              },
              {
                "SOC": 77,
                "SpeedKw": 128
              },
              {
                "SOC": 78,
                "SpeedKw": 126
              },
              {
                "SOC": 79,
                "SpeedKw": 123
              },
              {
                "SOC": 80,
                "SpeedKw": 119
              },
              {
                "SOC": 81,
                "SpeedKw": 117
              },
              {
                "SOC": 82,
                "SpeedKw": 99
              },
              {
                "SOC": 83,
                "SpeedKw": 90
              },
              {
                "SOC": 84,
                "SpeedKw": 77
              },
              {
                "SOC": 85,
                "SpeedKw": 65
              },
              {
                "SOC": 86,
                "SpeedKw": 51
              },
              {
                "SOC": 87,
                "SpeedKw": 49
              },
              {
                "SOC": 88,
                "SpeedKw": 47
              },
              {
                "SOC": 89,
                "SpeedKw": 45
              },
              {
                "SOC": 90,
                "SpeedKw": 41
              },
              {
                "SOC": 91,
                "SpeedKw": 36
              },
              {
                "SOC": 92,
                "SpeedKw": 33
              },
              {
                "SOC": 93,
                "SpeedKw": 31
              },
              {
                "SOC": 94,
                "SpeedKw": 28
              },
              {
                "SOC": 95,
                "SpeedKw": 26
              },
              {
                "SOC": 96,
                "SpeedKw": 23
              },
              {
                "SOC": 97,
                "SpeedKw": 21
              },
              {
                "SOC": 98,
                "SpeedKw": 17
              },
              {
                "SOC": 99,
                "SpeedKw": 14
              },
              {
                "SOC": 100,
                "SpeedKw": 10
              }
            ],
            "CurveStatus": "PublicTest",
            "ChargingCurveType": "Optimal"
          },
          {
            "ChargeSpeed": [
              {
                "SOC": 0,
                "SpeedKw": 86
              },
              {
                "SOC": 1,
                "SpeedKw": 119
              },
              {
                "SOC": 2,
                "SpeedKw": null
              },
              {
                "SOC": 3,
                "SpeedKw": null
              },
              {
                "SOC": 4,
                "SpeedKw": null
              },
              {
                "SOC": 5,
                "SpeedKw": null
              },
              {
                "SOC": 6,
                "SpeedKw": null
              },
              {
                "SOC": 7,
                "SpeedKw": null
              },
              {
                "SOC": 8,
                "SpeedKw": null
              },
              {
                "SOC": 9,
                "SpeedKw": null
              },
              {
                "SOC": 10,
                "SpeedKw": 119
              },
              {
                "SOC": 11,
                "SpeedKw": 120
              },
              {
                "SOC": 12,
                "SpeedKw": 120
              },
              {
                "SOC": 13,
                "SpeedKw": 121
              },
              {
                "SOC": 14,
                "SpeedKw": 121
              },
              {
                "SOC": 15,
                "SpeedKw": 121
              },
              {
                "SOC": 16,
                "SpeedKw": 122
              },
              {
                "SOC": 17,
                "SpeedKw": 122
              },
              {
                "SOC": 18,
                "SpeedKw": 122
              },
              {
                "SOC": 19,
                "SpeedKw": 123
              },
              {
                "SOC": 20,
                "SpeedKw": 123
              },
              {
                "SOC": 21,
                "SpeedKw": 123
              },
              {
                "SOC": 22,
                "SpeedKw": 123
              },
              {
                "SOC": 23,
                "SpeedKw": 123
              },
              {
                "SOC": 24,
                "SpeedKw": 124
              },
              {
                "SOC": 25,
                "SpeedKw": 124
              },
              {
                "SOC": 26,
                "SpeedKw": 124
              },
              {
                "SOC": 27,
                "SpeedKw": 124
              },
              {
                "SOC": 28,
                "SpeedKw": 124
              },
              {
                "SOC": 29,
                "SpeedKw": 124
              },
              {
                "SOC": 30,
                "SpeedKw": 125
              },
              {
                "SOC": 31,
                "SpeedKw": 125
              },
              {
                "SOC": 32,
                "SpeedKw": 125
              },
              {
                "SOC": 33,
                "SpeedKw": 125
              },
              {
                "SOC": 34,
                "SpeedKw": 125
              },
              {
                "SOC": 35,
                "SpeedKw": 125
              },
              {
                "SOC": 36,
                "SpeedKw": 126
              },
              {
                "SOC": 37,
                "SpeedKw": 126
              },
              {
                "SOC": 38,
                "SpeedKw": 126
              },
              {
                "SOC": 39,
                "SpeedKw": 126
              },
              {
                "SOC": 40,
                "SpeedKw": 126
              },
              {
                "SOC": 41,
                "SpeedKw": 126
              },
              {
                "SOC": 42,
                "SpeedKw": 127
              },
              {
                "SOC": 43,
                "SpeedKw": 127
              },
              {
                "SOC": 44,
                "SpeedKw": 127
              },
              {
                "SOC": 45,
                "SpeedKw": 127
              },
              {
                "SOC": 46,
                "SpeedKw": 127
              },
              {
                "SOC": 47,
                "SpeedKw": 128
              },
              {
                "SOC": 48,
                "SpeedKw": 128
              },
              {
                "SOC": 49,
                "SpeedKw": 128
              },
              {
                "SOC": 50,
                "SpeedKw": 128
              },
              {
                "SOC": 51,
                "SpeedKw": 129
              },
              {
                "SOC": 52,
                "SpeedKw": 129
              },
              {
                "SOC": 53,
                "SpeedKw": 130
              },
              {
                "SOC": 54,
                "SpeedKw": 130
              },
              {
                "SOC": 55,
                "SpeedKw": 130
              },
              {
                "SOC": 56,
                "SpeedKw": 130
              },
              {
                "SOC": 57,
                "SpeedKw": 131
              },
              {
                "SOC": 58,
                "SpeedKw": 131
              },
              {
                "SOC": 59,
                "SpeedKw": 131
              },
              {
                "SOC": 60,
                "SpeedKw": 132
              },
              {
                "SOC": 61,
                "SpeedKw": 132
              },
              {
                "SOC": 62,
                "SpeedKw": 132
              },
              {
                "SOC": 63,
                "SpeedKw": 132
              },
              {
                "SOC": 64,
                "SpeedKw": 133
              },
              {
                "SOC": 65,
                "SpeedKw": 133
              },
              {
                "SOC": 66,
                "SpeedKw": 134
              },
              {
                "SOC": 67,
                "SpeedKw": 134
              },
              {
                "SOC": 68,
                "SpeedKw": 134
              },
              {
                "SOC": 69,
                "SpeedKw": 132
              },
              {
                "SOC": 70,
                "SpeedKw": 128
              },
              {
                "SOC": 71,
                "SpeedKw": 124
              },
              {
                "SOC": 72,
                "SpeedKw": 123
              },
              {
                "SOC": 73,
                "SpeedKw": 122
              },
              {
                "SOC": 74,
                "SpeedKw": 120
              },
              {
                "SOC": 75,
                "SpeedKw": 118
              },
              {
                "SOC": 76,
                "SpeedKw": 115
              },
              {
                "SOC": 77,
                "SpeedKw": 114
              },
              {
                "SOC": 78,
                "SpeedKw": 112
              },
              {
                "SOC": 79,
                "SpeedKw": 110
              },
              {
                "SOC": 80,
                "SpeedKw": 109
              },
              {
                "SOC": 81,
                "SpeedKw": 102
              },
              {
                "SOC": 82,
                "SpeedKw": 94
              },
              {
                "SOC": 83,
                "SpeedKw": 80
              },
              {
                "SOC": 84,
                "SpeedKw": 70
              },
              {
                "SOC": 85,
                "SpeedKw": 59
              },
              {
                "SOC": 86,
                "SpeedKw": 46
              },
              {
                "SOC": 87,
                "SpeedKw": 44
              },
              {
                "SOC": 88,
                "SpeedKw": 41
              },
              {
                "SOC": 89,
                "SpeedKw": 38
              },
              {
                "SOC": 90,
                "SpeedKw": 36
              },
              {
                "SOC": 91,
                "SpeedKw": 34
              },
              {
                "SOC": 92,
                "SpeedKw": 31
              },
              {
                "SOC": 93,
                "SpeedKw": 29
              },
              {
                "SOC": 94,
                "SpeedKw": 27
              },
              {
                "SOC": 95,
                "SpeedKw": 25
              },
              {
                "SOC": 96,
                "SpeedKw": 22
              },
              {
                "SOC": 97,
                "SpeedKw": 19
              },
              {
                "SOC": 98,
                "SpeedKw": 16
              },
              {
                "SOC": 99,
                "SpeedKw": 11
              },
              {
                "SOC": 100,
                "SpeedKw": 8
              }
            ],
            "CurveStatus": "PublicTest",
            "ChargingCurveType": "LowVoltage"
          }
        ],
        "MaxDCChargeSpeed": 270,
        "ChargingConfiguration": "SplitBattery",
        "MaxDCChargeSpeedLowVoltage": 135
      }
    ],
    "Motors": [
      {
        "Location": "FrontAxle",
        "Type": "ASM",
        "PeakPower": null,
        "Torque": 275,
        "Model": null
      },
      {
        "Location": "RearAxle",
        "Type": "PMSM",
        "PeakPower": null,
        "Torque": 580,
        "Model": null
      }
    ],
    "Brakes": [
      {
        "Standard": true,
        "Name": "Brembo",
        "FrontBrakeType": "FixedCaliperDisc",
        "FrontBrakeDiscType": "CastIron",
        "FrontBrakeDiscDiameter": 375,
        "FrontBrakePistons": 4,
        "RearBrakeType": "FloatingCaliperDisc",
        "RearBrakeDiscType": "CastIron",
        "RearBrakeDiscDiameter": 350,
        "RearBrakePistons": 1
      }
    ],
    "DriveSetup": "OneMotorFrontAndRearAxle",
    "DynamicSteering": {
      "FeatureStatus": "Standard"
    },
    "RearWheelSteering": {
      "FeatureStatus": "NotAvailable"
    },
    "CrabWalk": null,
    "TorqueVectoring": {
      "FeatureStatus": "NotAvailable"
    },
    "Suspension": [
      {
        "Name": "Sport",
        "MaxGroundClearanceMM": 164,
        "MinGroundClearanceMM": 164,
        "AdaptiveSuspension": {
          "FeatureStatus": "Standard"
        },
        "AdjustableDampingFront": {
          "FeatureStatus": "Standard"
        },
        "AdjustableDampingRear": {
          "FeatureStatus": "Standard"
        },
        "AdjustableHeightFront": {
          "FeatureStatus": "NotAvailable"
        },
        "AdjustableHeightRear": {
          "FeatureStatus": "NotAvailable"
        },
        "EeasyEntry": {
          "FeatureStatus": "NotAvailable"
        },
        "EeasyLoading": {
          "FeatureStatus": "NotAvailable"
        },
        "ActiveBodyControl": {
          "FeatureStatus": "NotAvailable"
        },
        "ActiveCorneringDynamics": {
          "FeatureStatus": "NotAvailable"
        },
        "SpringTypeFront": "Coil",
        "SpringTypeRear": "Coil",
        "DamperTypeFront": "ElectronicallyControlled",
        "DamperTypeRear": "ElectronicallyControlled",
        "SuspensionTypeFront": "Multilink",
        "SuspensionTypeRear": "Multilink",
        "Standard": true
      },
      {
        "Name": "Adaptive Air Suspension Sport",
        "MaxGroundClearanceMM": 224,
        "MinGroundClearanceMM": 185,
        "AdaptiveSuspension": {
          "FeatureStatus": "Standard"
        },
        "AdjustableDampingFront": {
          "FeatureStatus": "Standard"
        },
        "AdjustableDampingRear": {
          "FeatureStatus": "Standard"
        },
        "AdjustableHeightFront": {
          "FeatureStatus": "Standard"
        },
        "AdjustableHeightRear": {
          "FeatureStatus": "Standard"
        },
        "EeasyEntry": {
          "FeatureStatus": "NotAvailable"
        },
        "EeasyLoading": {
          "FeatureStatus": "Standard"
        },
        "ActiveBodyControl": {
          "FeatureStatus": "NotAvailable"
        },
        "ActiveCorneringDynamics": {
          "FeatureStatus": "NotAvailable"
        },
        "SpringTypeFront": "Air",
        "SpringTypeRear": "Air",
        "DamperTypeFront": "ElectronicallyControlled",
        "DamperTypeRear": "ElectronicallyControlled",
        "SuspensionTypeFront": "Multilink",
        "SuspensionTypeRear": "Multilink",
        "Standard": false
      }
    ],
    "Performance": [
      {
        "PowerKw": 360,
        "PowerKwBoost": 385,
        "TorqueNm": 855,
        "TorqueNmBoost": 855,
        "BoostLengthSeconds": null,
        "TopSpeed": 230,
        "ZeroToHundredKph": null,
        "ZeroToHundredKphBoost": 4.4
      }
    ],
    "Charging": {
      "Chargeports": [
        {
          "IsStandard": true,
          "ChargePortLocation": "LeftRearSide",
          "ChargePortVariant": [
            {
              "Region": "Europe",
              "SubRegion": null,
              "Country": null,
              "ChargePortType": "CCS2"
            },
            {
              "Region": "Americas",
              "SubRegion": "NorthernAmerica",
              "Country": null,
              "ChargePortType": "CCS1"
            },
            {
              "Region": "Asia",
              "SubRegion": "EasternAsia",
              "Country": [
                "China"
              ],
              "ChargePortType": "GBT"
            },
            {
              "Region": "Asia",
              "SubRegion": "EasternAsia",
              "Country": [
                "Japan"
              ],
              "ChargePortType": "CHAdeMO"
            },
            {
              "Region": "Oceania",
              "SubRegion": null,
              "Country": null,
              "ChargePortType": "CCS2"
            }
          ],
          "V2L": false,
          "V2H": null
        },
        {
          "IsStandard": true,
          "ChargePortLocation": "RightRearSide",
          "ChargePortVariant": [
            {
              "Region": "Europe",
              "SubRegion": null,
              "Country": null,
              "ChargePortType": "Type2"
            },
            {
              "Region": "Americas",
              "SubRegion": "NorthernAmerica",
              "Country": null,
              "ChargePortType": "J1772"
            },
            {
              "Region": "Asia",
              "SubRegion": "EasternAsia",
              "Country": [
                "China"
              ],
              "ChargePortType": "GBT"
            },
            {
              "Region": "Asia",
              "SubRegion": "EasternAsia",
              "Country": [
                "Japan"
              ],
              "ChargePortType": "CHAdeMO"
            },
            {
              "Region": "Oceania",
              "SubRegion": null,
              "Country": null,
              "ChargePortType": "CCS2"
            }
          ],
          "V2L": false,
          "V2H": null
        }
      ],
      "OnBoardChargers": [
        {
          "MaxChargeSpeedKw": 11,
          "Standard": true
        },
        {
          "MaxChargeSpeedKw": 22,
          "Standard": false
        }
      ],
      "BatterySwap": null,
      "ManualTriggerHeating": {
        "FeatureStatus": "NotAvailable"
      },
      "HeatingWhenNavigateToCharger": {
        "FeatureStatus": "Standard"
      },
      "V2L": {
        "FeatureStatus": "NotAvailable"
      },
      "V2LPower": null,
      "V2G": {
        "FeatureStatus": "NotAvailable"
      },
      "V2H": {
        "FeatureStatus": "Unknown"
      },
      "V2HType": null,
      "V2XPorts": null
    },
    "RangeAndConsumption": [
      {
        "BasicTrimWltpRange": 598,
        "BasicTrimWltpConsumption": 17.5,
        "BasicTrimRealWltpConsumption": 15.87,
        "TopTrimWltpRange": 565,
        "TopTrimWltpConsumption": 18.4,
        "TopTrimRealWltpConsumption": 16.80,
        "BasicTrim120KmhRange": 413,
        "BasicTrim120KmhConsumption": 23,
        "BasicTrim90KmhRange": 527,
        "BasicTrim90KmhConsumption": 18,
        "BasicTrim70MphRange": 474,
        "BasicTrim70MphConsumption": 20,
        "BasicTrimEpaRange": 275,
        "BasicTrimEpaRealConsumption": 21.4,
        "TopTrimEpaRange": 275,
        "TopTrimEpaRealConsumption": 21.4,
        "BasicTrimCLTCRange": null,
        "BasicTrimCLTCRealConsumption": null
      }
    ],
    "Regen": {
      "MaxRegenKw": 220,
      "LiftUpRegen": true,
      "Coasting": true,
      "AdaptiveRegen": true,
      "RegenPaddles": true,
      "OnePedalStoppingMode": "HoldRollCreep",
      "LiftOfRegenLevels": [
        "Hard",
        "Medium"
      ],
      "BlendedBrakes": true,
      "BlendingBrakeOnLiftUpRegen": true
    },
    "Transmission": {
      "Gears": 1
    },
    "SelectableDriveModes": {
      "FeatureStatus": "Standard"
    },
    "DriveModes": [
      {
        "Name": {
          "en": "Dynamic"
        },
        "SteeringResponse": "Dynamic",
        "ThrottleResponse": "Dynamic",
        "SuspensionMode": "Dynamic",
        "SuspensionHeight": "Lowest",
        "RegenMode": "NotSet"
      },
      {
        "Name": {
          "en": "Efficiency"
        },
        "SteeringResponse": "Balanced",
        "ThrottleResponse": "Efficient",
        "SuspensionMode": "Balanced",
        "SuspensionHeight": "Lowest",
        "RegenMode": "NotSet"
      },
      {
        "Name": {
          "en": "Comfort"
        },
        "SteeringResponse": "Balanced",
        "ThrottleResponse": "Balanced",
        "SuspensionMode": "Comfort",
        "SuspensionHeight": "Normal",
        "RegenMode": "NotSet"
      },
      {
        "Name": {
          "en": "Allroad"
        },
        "SteeringResponse": "Balanced",
        "ThrottleResponse": "Balanced",
        "SuspensionMode": "Comfort",
        "SuspensionHeight": "High1",
        "RegenMode": "NotSet"
      },
      {
        "Name": {
          "en": "Offroad"
        },
        "SteeringResponse": "Balanced",
        "ThrottleResponse": "Balanced",
        "SuspensionMode": "Balanced",
        "SuspensionHeight": "Highest",
        "RegenMode": "NotSet"
      },
      {
        "Name": {
          "en": "Balanced"
        },
        "SteeringResponse": "Balanced",
        "ThrottleResponse": "Balanced",
        "SuspensionMode": "Adaptive",
        "SuspensionHeight": "Adaptive",
        "RegenMode": "NotSet"
      },
      {
        "Name": {
          "en": "Custom"
        },
        "SteeringResponse": "Custom",
        "ThrottleResponse": "Custom",
        "SuspensionMode": "Custom",
        "SuspensionHeight": "Custom",
        "RegenMode": "NotSet"
      }
    ]
  },
  "Exterior": {
    "PaintColors": [
      {
        "Color": "Gray",
        "Name": {
          "en": "Magnet Grey"
        },
        "PaintType": "Solid",
        "StandardPalette": true,
        "ColorId": "G5"
      },
      {
        "Color": "Gray",
        "Name": {
          "en": "Daytona Grey"
        },
        "PaintType": "Metallic",
        "StandardPalette": true,
        "ColorId": "6Y"
      },
      {
        "Color": "White",
        "Name": {
          "en": "Glacier White"
        },
        "PaintType": "Metallic",
        "StandardPalette": true,
        "ColorId": "2Y"
      },
      {
        "Color": "Red",
        "Name": {
          "en": "Soneira Red"
        },
        "PaintType": "Metallic",
        "StandardPalette": true,
        "ColorId": "G1"
      },
      {
        "Color": "Blue",
        "Name": {
          "en": "Plasma Blue"
        },
        "PaintType": "Metallic",
        "StandardPalette": true,
        "ColorId": "3D"
      },
      {
        "Color": "Blue",
        "Name": {
          "en": "Acari Blue"
        },
        "PaintType": "Metallic",
        "StandardPalette": true
      },
      {
        "Color": "Gray",
        "Name": {
          "en": "Manhatten Grey"
        },
        "PaintType": "Metallic",
        "StandardPalette": true,
        "ColorId": "2Y"
      },
      {
        "Color": "Black",
        "Name": {
          "en": "Mythos black"
        },
        "PaintType": "Metallic",
        "StandardPalette": true,
        "ColorId": "OE"
      },
      {
        "Color": "Red",
        "Name": {
          "en": "Misano red, pearl effect"
        },
        "PaintType": "Pearlescent",
        "ColorId": "Z3M",
        "SpecialColor": "Audi exclusive"
      },
      {
        "Color": "Purple",
        "Name": {
          "en": "Merlin purple, pearl effect"
        },
        "PaintType": "Pearlescent",
        "ColorId": "Z3W",
        "SpecialColor": "Audi exclusive"
      },
      {
        "Color": "Purple",
        "Name": {
          "en": "Velvet purple, pearl effect"
        },
        "PaintType": "Pearlescent",
        "ColorId": "ALD 092 Q87",
        "SpecialColor": "Audi exclusive"
      },
      {
        "Color": "Blue",
        "Name": {
          "en": "Sepang blue, pearl effect"
        },
        "PaintType": "Pearlescent",
        "ColorId": "Y5Q",
        "SpecialColor": "Audi exclusive"
      },
      {
        "Color": "Blue",
        "Name": {
          "en": "Nogoro blue, pearl effect"
        },
        "PaintType": "Pearlescent",
        "ColorId": "Z5M",
        "SpecialColor": "Audi exclusive"
      },
      {
        "Color": "Blue",
        "Name": {
          "en": "Palace blue, pearl effect"
        },
        "PaintType": "Pearlescent",
        "ColorId": "ALD 092 Q83",
        "SpecialColor": "Audi exclusive"
      },
      {
        "Color": "Blue",
        "Name": {
          "en": "Night blue, pearl effect"
        },
        "PaintType": "Pearlescent",
        "ColorId": "Z5D",
        "SpecialColor": "Audi exclusive"
      },
      {
        "Color": "Green",
        "Name": {
          "en": "Oak green, pearl effect"
        },
        "PaintType": "Pearlescent",
        "ColorId": "Q82",
        "SpecialColor": "Audi exclusive"
      },
      {
        "Color": "Green",
        "Name": {
          "en": "Goodwood green, pearl effect"
        },
        "PaintType": "Pearlescent",
        "ColorId": "Z6X",
        "SpecialColor": "Audi exclusive"
      },
      {
        "Color": "Green",
        "Name": {
          "en": "Deep green, pearl effect"
        },
        "PaintType": "Pearlescent",
        "ColorId": "Z6E",
        "SpecialColor": "Audi exclusive"
      },
      {
        "Color": "Beige",
        "Name": {
          "en": "Sand beige, pearl effect"
        },
        "PaintType": "Pearlescent",
        "ColorId": "Y1R",
        "SpecialColor": "Audi exclusive"
      },
      {
        "Color": "Gray",
        "Name": {
          "en": "Arrow grey, pearl effect"
        },
        "PaintType": "Pearlescent",
        "ColorId": "Z7W",
        "SpecialColor": "Audi exclusive"
      },
      {
        "Color": "Gray",
        "Name": {
          "en": "Nimbus grey, pearl effect"
        },
        "PaintType": "Pearlescent",
        "ColorId": "Z7X",
        "SpecialColor": "Audi exclusive"
      },
      {
        "Color": "Blue",
        "Name": {
          "en": "Ara blue, crystal effect"
        },
        "PaintType": "CrystalEffect",
        "ColorId": "X5J",
        "SpecialColor": "Audi exclusive"
      },
      {
        "Color": "Black",
        "Name": {
          "en": "Panther black, crystal effect"
        },
        "PaintType": "CrystalEffect",
        "ColorId": "Z9Z",
        "SpecialColor": "Audi exclusive"
      },
      {
        "Color": "White",
        "Name": {
          "en": "Amalfi white"
        },
        "PaintType": "CrystalEffect",
        "ColorId": "Y9K",
        "SpecialColor": "Audi exclusive"
      },
      {
        "Color": "Yellow",
        "Name": {
          "en": "Vegas yellow"
        },
        "PaintType": "CrystalEffect",
        "ColorId": "Z1A",
        "SpecialColor": "Audi exclusive"
      },
      {
        "Color": "Green",
        "Name": {
          "en": "Green"
        },
        "PaintType": "CrystalEffect",
        "ColorId": "2D8",
        "SpecialColor": "Audi exclusive"
      },
      {
        "Color": "Blue",
        "Name": {
          "en": "Cumulus blue"
        },
        "PaintType": "CrystalEffect",
        "ColorId": "X5A",
        "SpecialColor": "Audi exclusive"
      },
      {
        "Color": "Yellow",
        "Name": {
          "en": "Citrus yellow"
        },
        "PaintType": "CrystalEffect",
        "ColorId": "Y1G",
        "SpecialColor": "Audi exclusive"
      },
      {
        "Color": "Yellow",
        "Name": {
          "en": "Solar orange"
        },
        "PaintType": "CrystalEffect",
        "ColorId": "Y2G",
        "SpecialColor": "Audi exclusive"
      },
      {
        "Color": "Orange",
        "Name": {
          "en": "Solar orange"
        },
        "PaintType": "CrystalEffect",
        "ColorId": "Y2G",
        "SpecialColor": "Audi exclusive"
      },
      {
        "Color": "Gray",
        "Name": {
          "en": "Quantum grey"
        },
        "PaintType": "CrystalEffect",
        "ColorId": "X7B",
        "SpecialColor": "Audi exclusive"
      },
      {
        "Color": "Gray",
        "Name": {
          "en": "Nardo grey"
        },
        "PaintType": "CrystalEffect",
        "ColorId": "Y7C",
        "SpecialColor": "Audi exclusive"
      },
      {
        "Color": "Green",
        "Name": {
          "en": "Camoflage green"
        },
        "PaintType": "Metallic",
        "ColorId": "X6T",
        "SpecialColor": "Audi exclusive"
      },
      {
        "Color": "Brown",
        "Name": {
          "en": "Soho brown"
        },
        "PaintType": "Metallic",
        "ColorId": "Y8R",
        "SpecialColor": "Audi exclusive"
      },
      {
        "Color": "Brown",
        "Name": {
          "en": "Java brown"
        },
        "PaintType": "Metallic",
        "ColorId": "Y8Z",
        "SpecialColor": "Audi exclusive"
      },
      {
        "Color": "Brown",
        "Name": {
          "en": "Teak brown"
        },
        "PaintType": "Metallic",
        "ColorId": "Z8W",
        "SpecialColor": "Audi exclusive"
      },
      {
        "Color": "Brown",
        "Name": {
          "en": "Ipanema brown"
        },
        "PaintType": "Metallic",
        "ColorId": "Y8Y",
        "SpecialColor": "Audi exclusive"
      },
      {
        "Color": "Beige",
        "Name": {
          "en": "Diamond beige"
        },
        "PaintType": "Metallic",
        "ColorId": "Z1U",
        "SpecialColor": "Audi exclusive"
      },
      {
        "Color": "Beige",
        "Name": {
          "en": "Siam beige"
        },
        "PaintType": "Metallic",
        "StandardPalette": true,
        "ColorId": "Z1W",
        "SpecialColor": "Audi exclusive"
      },
      {
        "Color": "Gray",
        "Name": {
          "en": "Tornado grey"
        },
        "PaintType": "Metallic",
        "ColorId": "X7P",
        "SpecialColor": "Audi exclusive"
      },
      {
        "Color": "Black",
        "Name": {
          "en": "Havana black"
        },
        "PaintType": "Metallic",
        "ColorId": "Y8X",
        "SpecialColor": "Audi exclusive"
      },
      {
        "Color": "Black",
        "Name": {
          "en": "Mamba black"
        },
        "PaintType": "Metallic",
        "ColorId": "Y9X",
        "SpecialColor": "Audi exclusive"
      },
      {
        "Color": "Gray",
        "Name": {
          "en": "Vesuvius grey"
        },
        "PaintType": "Metallic",
        "ColorId": "X7J",
        "SpecialColor": "Audi exclusive"
      },
      {
        "Color": "Silver",
        "Name": {
          "en": "Ice silver"
        },
        "PaintType": "Metallic",
        "ColorId": "X7W",
        "SpecialColor": "Audi exclusive"
      },
      {
        "Color": "Gray",
        "Name": {
          "en": "Suzuka grey"
        },
        "PaintType": "Metallic",
        "ColorId": "Y7F",
        "SpecialColor": "Audi exclusive"
      },
      {
        "Color": "Gray",
        "Name": {
          "en": "Terra grey"
        },
        "PaintType": "Metallic",
        "ColorId": "X7H",
        "SpecialColor": "Audi exclusive"
      },
      {
        "Color": "Silver",
        "Name": {
          "en": "Cuv\u00E9e silver"
        },
        "PaintType": "Metallic",
        "ColorId": "X1Y",
        "SpecialColor": "Audi exclusive"
      },
      {
        "Color": "Orange",
        "Name": {
          "en": "Samoa orange"
        },
        "PaintType": "Metallic",
        "ColorId": "XZU",
        "SpecialColor": "Audi exclusive"
      },
      {
        "Color": "Orange",
        "Name": {
          "en": "Coral orange"
        },
        "PaintType": "Metallic",
        "ColorId": "Y2Z",
        "SpecialColor": "Audi exclusive"
      },
      {
        "Color": "Red",
        "Name": {
          "en": "Catalunya red"
        },
        "PaintType": "Metallic",
        "ColorId": "Y3T",
        "SpecialColor": "Audi exclusive"
      },
      {
        "Color": "Red",
        "Name": {
          "en": "Tango red"
        },
        "PaintType": "Metallic",
        "ColorId": "Y3U",
        "SpecialColor": "Audi exclusive"
      },
      {
        "Color": "Red",
        "Name": {
          "en": "Shiraz red"
        },
        "PaintType": "Metallic",
        "ColorId": "Y4S",
        "SpecialColor": "Audi exclusive"
      },
      {
        "Color": "Red",
        "Name": {
          "en": "Seville red"
        },
        "PaintType": "Metallic",
        "ColorId": "Z3C",
        "SpecialColor": "Audi exclusive"
      },
      {
        "Color": "Blue",
        "Name": {
          "en": "Ascari blue"
        },
        "PaintType": "Metallic",
        "ColorId": "X5F",
        "SpecialColor": "Audi exclusive"
      },
      {
        "Color": "Blue",
        "Name": {
          "en": "Utopia blue"
        },
        "PaintType": "Metallic",
        "ColorId": "X5F",
        "SpecialColor": "Audi exclusive"
      },
      {
        "Color": "Green",
        "Name": {
          "en": "Java green"
        },
        "PaintType": "Metallic",
        "ColorId": "Y6W",
        "SpecialColor": "Audi exclusive"
      }
    ],
    "WheelOptions": [
      {
        "TireDimensionFront": "235/60",
        "TireDimensionRear": "255/55",
        "WheelSize": 19,
        "Name": {
          "en": "5-double spoke flag"
        }
      },
      {
        "TireDimensionFront": "235/60",
        "TireDimensionRear": "255/55",
        "WheelSize": 19,
        "Name": {
          "en": "5-double-spoke dynamic design"
        }
      },
      {
        "TireDimensionFront": "255/50",
        "TireDimensionRear": "285/45",
        "WheelSize": 20,
        "Name": {
          "en": "10-spoke trapezoidal design"
        }
      },
      {
        "TireDimensionFront": "255/50",
        "TireDimensionRear": "285/45",
        "WheelSize": 20,
        "Name": {
          "en": "5-double-spoke offset design"
        }
      },
      {
        "TireDimensionFront": "255/50",
        "TireDimensionRear": "285/45",
        "WheelSize": 20,
        "Name": {
          "en": "5-spoke structural design"
        }
      },
      {
        "TireDimensionFront": "255/50",
        "TireDimensionRear": "285/45",
        "WheelSize": 20,
        "Name": {
          "en": "5-double spoke Falx"
        }
      },
      {
        "TireDimensionFront": "255/45",
        "TireDimensionRear": "285/40",
        "WheelSize": 21,
        "Name": {
          "en": "5-arm aero design"
        }
      },
      {
        "TireDimensionFront": "255/45",
        "TireDimensionRear": "285/40",
        "WheelSize": 21,
        "Name": {
          "en": "5 Y-spoke dynamic design"
        }
      },
      {
        "TireDimensionFront": "255/45",
        "TireDimensionRear": "285/40",
        "WheelSize": 21,
        "Name": {
          "en": "5-V spoke structure design"
        }
      }
    ],
    "Styling": [
      {
        "OptionName": null,
        "Description": "exterior.styling.sportdesignpackage"
      },
      {
        "OptionName": null,
        "Description": "exterior.styling.sportdesignpackagecarbon"
      },
      {
        "OptionName": null,
        "Description": "exterior.styling.sportdesignpackagehighglossblack"
      }
    ],
    "RoofOptions": [
      {
        "Material": "Steel",
        "PanoramicRoofType": null,
        "PanoramicRoofShadeType": null,
        "Standard": true,
        "Rails": {
          "FeatureStatus": "Optional"
        }
      },
      {
        "Material": "steel",
        "PanoramicRoofType": "PartialOpenFront",
        "PanoramicRoofShadeType": "ElectricCurtain",
        "Standard": false,
        "Rails": {
          "FeatureStatus": "Optional"
        }
      }
    ],
    "Doors": [
      {
        "Location": "FrontLeft",
        "SoftClose": {
          "FeatureStatus": "NotAvailable"
        },
        "KickSensor": {
          "FeatureStatus": "NotAvailable"
        },
        "PoweredOpenClose": {
          "FeatureStatus": "NotAvailable"
        },
        "Type": "Standard",
        "DoorHandleType": "Pull"
      },
      {
        "Location": "FrontRight",
        "SoftClose": {
          "FeatureStatus": "NotAvailable"
        },
        "KickSensor": {
          "FeatureStatus": "NotAvailable"
        },
        "PoweredOpenClose": {
          "FeatureStatus": "NotAvailable"
        },
        "Type": "Standard",
        "DoorHandleType": "Pull"
      },
      {
        "Location": "RearLeft",
        "SoftClose": {
          "FeatureStatus": "NotAvailable"
        },
        "KickSensor": {
          "FeatureStatus": "NotAvailable"
        },
        "PoweredOpenClose": {
          "FeatureStatus": "NotAvailable"
        },
        "Type": "Standard",
        "DoorHandleType": "Pull"
      },
      {
        "Location": "RearRight",
        "SoftClose": {
          "FeatureStatus": "NotAvailable"
        },
        "KickSensor": {
          "FeatureStatus": "NotAvailable"
        },
        "PoweredOpenClose": {
          "FeatureStatus": "NotAvailable"
        },
        "Type": "Standard",
        "DoorHandleType": "Pull"
      },
      {
        "Location": "Tail",
        "SoftClose": {
          "FeatureStatus": "NotAvailable"
        },
        "KickSensor": {
          "FeatureStatus": "Optional"
        },
        "PoweredOpenClose": {
          "FeatureStatus": "Standard"
        },
        "Type": "Liftgate",
        "DoorHandleType": "Pull"
      }
    ],
    "Windows": {
      "TintedFromBPillar": {
        "FeatureStatus": "Optional"
      },
      "DoubleGlazedWindshield": null,
      "DoubleGlazedFirstRow": null,
      "DoubleGlazedSecondRow": null,
      "HeatedWindshield": null,
      "HeatedRearWindow": null
    }
  },
  "DriverAssistance": {
    "SensorsAndCameras": {
      "Setup": "CameraRadarUltrasonic",
      "Cameras": [
        {
          "Optional": false,
          "Location": "TopCenterWindshield",
          "CameraType": "FrontView",
          "Washer": false
        },
        {
          "Optional": true,
          "Location": "Front",
          "CameraType": "SurroundView",
          "Washer": false
        },
        {
          "Optional": true,
          "Location": "OnLeftWingMirror",
          "CameraType": "SurroundView",
          "Washer": false
        },
        {
          "Optional": true,
          "Location": "OnRightWingMirror",
          "CameraType": "SurroundView",
          "Washer": false
        },
        {
          "Optional": true,
          "Location": "RearCenter",
          "CameraType": "ReversingView",
          "Washer": false
        }
      ],
      "Radars": [
        {
          "Optional": false,
          "Location": "Front",
          "RadarType": "LongRange"
        },
        {
          "Optional": true,
          "Location": "LeftFrontCorner",
          "RadarType": "MidRange"
        },
        {
          "Optional": true,
          "Location": "RightFrontCorner",
          "RadarType": "MidRange"
        },
        {
          "Optional": true,
          "Location": "LeftRearCorner",
          "RadarType": "MidRange"
        },
        {
          "Optional": true,
          "Location": "RightRearCorner",
          "RadarType": "MidRange"
        }
      ],
      "Lidars": [],
      "UltrasonicSensors": [
        {
          "Optional": false,
          "Location": "OnBumberFront"
        },
        {
          "Optional": false,
          "Location": "OnBumberFront"
        },
        {
          "Optional": false,
          "Location": "OnBumberFrontLeftCorner"
        },
        {
          "Optional": false,
          "Location": "OnBumberFrontRightCorner"
        },
        {
          "Optional": false,
          "Location": "OnBumberFrontLeftSide"
        },
        {
          "Optional": false,
          "Location": "OnBumberFrontRightSide"
        },
        {
          "Optional": false,
          "Location": "OnBumberRearLeftSide"
        },
        {
          "Optional": false,
          "Location": "OnBumberRearRightSide"
        },
        {
          "Optional": false,
          "Location": "OnBumberRearLeftCorner"
        },
        {
          "Optional": false,
          "Location": "OnBumberRearRightCorner"
        },
        {
          "Optional": false,
          "Location": "OnBumberRear"
        },
        {
          "Optional": false,
          "Location": "OnBumberRear"
        }
      ],
      "RainSensor": {
        "FeatureStatus": "Standard"
      }
    },
    "ElectronicStabilityControl": {
      "FeatureStatus": "Standard"
    },
    "AntiLockBrakingSystem": {
      "FeatureStatus": "Standard"
    },
    "TractionControl": {
      "FeatureStatus": "Standard"
    },
    "AutomaticEmergencyBraking": {
      "FeatureStatus": "Standard"
    },
    "ForwardCollisionWarning": {
      "FeatureStatus": "Standard"
    },
    "LaneKeeping": {
      "FeatureStatus": "Standard"
    },
    "LaneDepartureWarning": {
      "FeatureStatus": "Standard"
    },
    "DrowsinessAlert": {
      "FeatureStatus": "Standard"
    },
    "NightVision": {
      "FeatureStatus": "NotAvailable"
    },
    "ReversingCamera": {
      "FeatureStatus": "Optional"
    },
    "Camera360": {
      "FeatureStatus": "Optional",
      "OptionId": "PCZ"
    },
    "CrossTrafficAssist": {
      "FeatureStatus": "Standard"
    },
    "RearCrossTrafficAlert": {
      "FeatureStatus": "Optional",
      "OptionId": "PCM",
      "FeatureName": "Cross traffic assist rear"
    },
    "RearParkingSensors": {
      "FeatureStatus": "Standard",
      "FeatureName": "Park Assist"
    },
    "FrontParkingSensors": {
      "FeatureStatus": "Standard",
      "FeatureName": "Park Assist"
    },
    "SideParkingSensors": {
      "FeatureStatus": "Standard",
      "FeatureName": "Park Assist"
    },
    "SideAssist": {
      "FeatureStatus": "Standard"
    },
    "ExitWarning": {
      "FeatureStatus": "Optional"
    },
    "HillDescentAssist": {
      "FeatureStatus": "Standard"
    },
    "HillStartAssist": {
      "FeatureStatus": "Standard"
    },
    "LeftTurnCrashAvoidance": {
      "FeatureStatus": "Optional"
    },
    "TemperatureWarning": {
      "FeatureStatus": "Standard"
    },
    "AutomaticEmergencySteering": {
      "FeatureStatus": "Standard"
    },
    "TrafficSignRecognition": {
      "FeatureStatus": "Optional"
    },
    "EfficiencyAssist": {
      "FeatureStatus": "Standard"
    },
    "DrivingAutomation": [
      {
        "LevelOfDrivingAutomation": "DriverAssistance",
        "Standard": true,
        "DrivingAutomatFeatureName": "standard",
        "CruiseControl": {
          "FeatureStatus": "Standard",
          "FeatureName": "Cruise Control"
        },
        "AdaptiveCruiseControl": {
          "FeatureStatus": "Standard",
          "FeatureName": "Adaptive Cruise Control"
        },
        "LaneCenteringAssist": {
          "FeatureStatus": "NotAvailable"
        },
        "Summon": {
          "FeatureStatus": "NotAvailable"
        },
        "AutomaticLaneChange": {
          "FeatureStatus": "NotAvailable"
        },
        "FollowNavigation": {
          "FeatureStatus": "NotAvailable"
        },
        "TrafficLightControl": {
          "FeatureStatus": "NotAvailable"
        },
        "StopSignControl": {
          "FeatureStatus": "NotAvailable"
        },
        "AutomaticParking": {
          "FeatureStatus": "Optional",
          "FeatureName": "Park assist"
        },
        "RemoteParking": {
          "FeatureStatus": "NotAvailable"
        }
      },
      {
        "LevelOfDrivingAutomation": "PartialDrivingAutomation",
        "Standard": false,
        "DrivingAutomatFeatureName": "Adaptive Cruise Assist",
        "CruiseControl": {
          "FeatureStatus": "Standard"
        },
        "AdaptiveCruiseControl": {
          "FeatureStatus": "Standard"
        },
        "LaneCenteringAssist": {
          "FeatureStatus": "Standard",
          "FeatureName": "Adaptive Cruise Assist"
        },
        "Summon": {
          "FeatureStatus": "NotAvailable"
        },
        "AutomaticLaneChange": {
          "FeatureStatus": "NotAvailable"
        },
        "FollowNavigation": {
          "FeatureStatus": "NotAvailable"
        },
        "TrafficLightControl": {
          "FeatureStatus": "NotAvailable"
        },
        "StopSignControl": {
          "FeatureStatus": "NotAvailable"
        },
        "AutomaticParking": {
          "FeatureStatus": "Optional",
          "OptionId": "7X5",
          "FeatureName": "Audi park assist"
        },
        "RemoteParking": {
          "FeatureStatus": "NotAvailable"
        }
      }
    ]
  },
  "UIAndControls": {
    "HMIType": "ScreenFocusWithStalksAndButtons",
    "ScreenLayout": [
      {
        "Screens": [
          {
            "ScreenSize": 11.9,
            "Location": "BehindSteeringWheelLeftSideOfSharedCurvedFramePartialIntegratedTopOfDash",
            "Content": [
              "Car info"
            ],
            "Rotation": "Horizontal",
            "Touch": false,
            "Optional": false,
            "ScreenCategory": "DriverInformation"
          },
          {
            "ScreenSize": 14.9,
            "Location": "RightSideOfSharedCurvedFramePartialIntegratedTopOfDash",
            "Content": [
              "Car info",
              "Navigation System",
              "Car settings"
            ],
            "Rotation": "Horizontal",
            "Touch": true,
            "Optional": false,
            "ScreenCategory": "Infotainment"
          },
          {
            "ScreenSize": 10.9,
            "Location": "PassengerSideInDash",
            "Content": [
              "Car info",
              "Navigation System",
              "Car settings"
            ],
            "Rotation": "Horizontal",
            "Touch": true,
            "Optional": true,
            "ScreenCategory": "PassengerInfotainment"
          }
        ],
        "Standard": true,
        "LayoutName": null
      }
    ],
    "HeadUpDisplay": {
      "FeatureStatus": "Optional"
    },
    "SteeringWheels": [
      {
        "SteeringWheelDesign": "Circular",
        "ControlType": "NotSet",
        "Name": null,
        "Standard": true,
        "Heated": {
          "FeatureStatus": "Optional"
        },
        "Controls": [
          "Infotainment"
        ]
      }
    ],
    "ExteriorMirror": [
      {
        "Standard": true,
        "Type": "Traditional"
      }
    ],
    "InteriorMirror": [
      {
        "Standard": true,
        "Type": "Traditional",
        "AutomaticDimming": null
      }
    ],
    "VoiceControl": {
      "FeatureStatus": "Standard"
    },
    "GestureControl": {
      "FeatureStatus": "NotAvailable"
    }
  },
  "Interior": {
    "InteriorCategory": "DriverFocused",
    "InteriorQuality": "Premium",
    "ConsoleDesign": "Traditional",
    "InteriorDesigns": [
      {
        "Standard": true,
        "Name": {
          "en": "S-Interior"
        },
        "SeatMaterials": [
          {
            "Name": "S-line with Leather/Leatherette",
            "AnimalFree": null,
            "Colors": [
              "Black"
            ],
            "MaterialType": "Leather",
            "SeatOption": [
              "Sport",
              "Sport Plus"
            ]
          },
          {
            "Name": "S-line with Dinamica/leather",
            "AnimalFree": null,
            "Colors": [
              "Black"
            ],
            "MaterialType": "DinamicaLeather",
            "SeatOption": [
              "Sport Plus"
            ]
          },
          {
            "Name": "S-line with Dinamica/leather red stitching",
            "AnimalFree": null,
            "Colors": [
              "Black",
              "Red"
            ],
            "MaterialType": "DinamicaLeather",
            "SeatOption": [
              "Sport Plus"
            ]
          },
          {
            "Name": "Read leather",
            "AnimalFree": null,
            "Colors": [
              "Red"
            ],
            "MaterialType": "NappaLeather",
            "SeatOption": [
              "Sport Plus"
            ]
          },
          {
            "Name": "Black leather",
            "AnimalFree": null,
            "Colors": [
              "Black"
            ],
            "MaterialType": "NappaLeather",
            "SeatOption": [
              "Sport Plus"
            ]
          }
        ],
        "HeadlinerDesigns": [
          {
            "Name": null,
            "Color": "Black",
            "Material": "Fabric"
          }
        ],
        "Colors": [
          "Black"
        ]
      }
    ],
    "SeatLayout": [
      {
        "NumberOfSeats": 5,
        "Name": null
      }
    ],
    "FirstRowSeats": [
      {
        "Standard": true,
        "Name": "Sport",
        "SeatCategory": "PassengerAndDriver",
        "SeatSplit": null,
        "Skihatch": {
          "FeatureStatus": "NotRelevant"
        },
        "Seat": [
          {
            "Position": "Driver",
            "ForeAndAftAdjustment": "StandardManualOptionalElectric",
            "ReclineAdjustment": "StandardManualOptionalElectric",
            "HeightAdjustment": "StandardManualOptionalElectric",
            "CushionAngleAdjustment": "StandardManualOptionalElectric",
            "HeightAdjustableHeadrest": "NotAvailable",
            "LengthAdjustableHeadrest": "NotAvailable",
            "AdjustableThighSupport": "Standard",
            "AdjustableSideSupportBack": "NotAvailable",
            "AdjustableSideSupportBottom": "NotAvailable",
            "LumbarAdjustment": "StandardElectric",
            "Heating": "Optional",
            "Ventilation": "Optional",
            "Massage": "NotAvailable",
            "Memory": "Optional",
            "EasyAccess": "Optional",
            "Footrest": "NotAvailable",
            "LegSupport": "NotAvailable",
            "Foldable": "NotAvailable",
            "Isofix": "NotAvailable"
          },
          {
            "Position": "FrontPassenger",
            "ForeAndAftAdjustment": "StandardManualOptionalElectric",
            "ReclineAdjustment": "StandardManualOptionalElectric",
            "HeightAdjustment": "StandardManualOptionalElectric",
            "CushionAngleAdjustment": "StandardManualOptionalElectric",
            "HeightAdjustableHeadrest": "NotAvailable",
            "LengthAdjustableHeadrest": "NotAvailable",
            "AdjustableThighSupport": "Standard",
            "AdjustableSideSupportBack": "NotAvailable",
            "AdjustableSideSupportBottom": "NotAvailable",
            "LumbarAdjustment": "StandardElectric",
            "Heating": "Optional",
            "Ventilation": "Optional",
            "Massage": "NotAvailable",
            "Memory": "NotAvailable",
            "EasyAccess": "NotAvailable",
            "Footrest": "NotAvailable",
            "LegSupport": "NotAvailable",
            "Foldable": "NotAvailable",
            "Isofix": "Standard"
          }
        ]
      },
      {
        "Standard": false,
        "Name": "Sport Plus",
        "SeatCategory": "PassengerAndDriver",
        "SeatSplit": null,
        "Skihatch": {
          "FeatureStatus": "NotAvailable"
        },
        "Seat": [
          {
            "Position": "Driver",
            "ForeAndAftAdjustment": "StandardElectric",
            "ReclineAdjustment": "StandardElectric",
            "HeightAdjustment": "StandardElectric",
            "CushionAngleAdjustment": "StandardElectric",
            "HeightAdjustableHeadrest": "NotAvailable",
            "LengthAdjustableHeadrest": "NotAvailable",
            "AdjustableThighSupport": "Standard",
            "AdjustableSideSupportBack": "NotAvailable",
            "AdjustableSideSupportBottom": "NotAvailable",
            "LumbarAdjustment": "StandardElectric",
            "Heating": "Optional",
            "Ventilation": "NotAvailable",
            "Massage": "Standard",
            "Memory": "Standard",
            "EasyAccess": "Standard",
            "Footrest": "NotAvailable",
            "LegSupport": "NotAvailable",
            "Foldable": "NotAvailable",
            "Isofix": "NotAvailable"
          },
          {
            "Position": "FrontPassenger",
            "ForeAndAftAdjustment": "StandardElectric",
            "ReclineAdjustment": "StandardElectric",
            "HeightAdjustment": "StandardElectric",
            "CushionAngleAdjustment": "StandardElectric",
            "HeightAdjustableHeadrest": "NotAvailable",
            "LengthAdjustableHeadrest": "NotAvailable",
            "AdjustableThighSupport": "Standard",
            "AdjustableSideSupportBack": "NotAvailable",
            "AdjustableSideSupportBottom": "NotAvailable",
            "LumbarAdjustment": "StandardElectric",
            "Heating": "Optional",
            "Ventilation": "NotAvailable",
            "Massage": "Standard",
            "Memory": "Standard",
            "EasyAccess": "NotAvailable",
            "Footrest": "NotAvailable",
            "LegSupport": "NotAvailable",
            "Foldable": "NotAvailable",
            "Isofix": "Standard"
          }
        ]
      }
    ],
    "SecondRowSeats": [
      {
        "Standard": true,
        "Name": "standard",
        "SeatCategory": "ThreeSeatBench",
        "SeatSplit": "40:20:40",
        "Skihatch": {
          "FeatureStatus": "NotAvailable"
        },
        "Seat": [
          {
            "Position": "BehindDriver",
            "ForeAndAftAdjustment": "NotAvailable",
            "ReclineAdjustment": "NotAvailable",
            "HeightAdjustment": "NotAvailable",
            "CushionAngleAdjustment": "NotAvailable",
            "HeightAdjustableHeadrest": "NotAvailable",
            "LengthAdjustableHeadrest": "NotAvailable",
            "AdjustableThighSupport": "NotAvailable",
            "AdjustableSideSupportBack": "NotAvailable",
            "AdjustableSideSupportBottom": "NotAvailable",
            "LumbarAdjustment": "NotAvailable",
            "Heating": "Optional",
            "Ventilation": "NotAvailable",
            "Massage": "NotAvailable",
            "Memory": "NotAvailable",
            "EasyAccess": "NotAvailable",
            "Footrest": "NotAvailable",
            "LegSupport": "NotAvailable",
            "Foldable": "NotAvailable",
            "Isofix": "Standard"
          },
          {
            "Position": "Middle",
            "ForeAndAftAdjustment": "NotAvailable",
            "ReclineAdjustment": "NotAvailable",
            "HeightAdjustment": "NotAvailable",
            "CushionAngleAdjustment": "NotAvailable",
            "HeightAdjustableHeadrest": "NotAvailable",
            "LengthAdjustableHeadrest": "NotAvailable",
            "AdjustableThighSupport": "NotAvailable",
            "AdjustableSideSupportBack": "NotAvailable",
            "AdjustableSideSupportBottom": "NotAvailable",
            "LumbarAdjustment": "NotAvailable",
            "Heating": "NotAvailable",
            "Ventilation": "NotAvailable",
            "Massage": "NotAvailable",
            "Memory": "NotAvailable",
            "EasyAccess": "NotAvailable",
            "Footrest": "NotAvailable",
            "LegSupport": "NotAvailable",
            "Foldable": "NotAvailable",
            "Isofix": "NotAvailable"
          },
          {
            "Position": "BehindPassenger",
            "ForeAndAftAdjustment": "NotAvailable",
            "ReclineAdjustment": "NotAvailable",
            "HeightAdjustment": "NotAvailable",
            "CushionAngleAdjustment": "NotAvailable",
            "HeightAdjustableHeadrest": "NotAvailable",
            "LengthAdjustableHeadrest": "NotAvailable",
            "AdjustableThighSupport": "NotAvailable",
            "AdjustableSideSupportBack": "NotAvailable",
            "AdjustableSideSupportBottom": "NotAvailable",
            "LumbarAdjustment": "NotAvailable",
            "Heating": "Optional",
            "Ventilation": "NotAvailable",
            "Massage": "NotAvailable",
            "Memory": "NotAvailable",
            "EasyAccess": "NotAvailable",
            "Footrest": "NotAvailable",
            "LegSupport": "NotAvailable",
            "Foldable": "NotAvailable",
            "Isofix": "Standard"
          }
        ]
      }
    ],
    "ThirdRowSeats": null,
    "FourthRowSeats": null,
    "Hvac": {
      "ClimateControlSystems": [
        {
          "Standard": true,
          "Name": {
            "en": " 3-zone"
          },
          "Zones": [
            "LeftFirstRow",
            "RightFirstRow",
            "SecondRow"
          ]
        }
      ],
      "Heatpump": {
        "FeatureStatus": "Standard"
      },
      "Preclimatisation": {
        "FeatureStatus": "Standard"
      },
      "PetMode": {
        "FeatureStatus": "NotAvailable"
      },
      "CampMode": {
        "FeatureStatus": "NotAvailable"
      }
    },
    "InteriorLights": {
      "LightSources": [
        {
          "Type": "Ambient",
          "Placement": [
            "AcrossDashboard",
            "Footwell",
            "DoorPanels"
          ],
          "ColorType": "MultiColor"
        }
      ]
    },
    "InteriorStorage": {
      "Category": "Various",
      "StorageUnits": [
        {
          "Type": "CupHolder",
          "Location": "FirstRowCenterConsol",
          "Size": "Medium",
          "Optional": false
        },
        {
          "Type": "CupHolder",
          "Location": "FirstRowCenterConsol",
          "Size": "Medium",
          "Optional": false
        },
        {
          "Type": "CupHolder",
          "Location": "SecondRowArmrest",
          "Size": "Medium",
          "Optional": false
        },
        {
          "Type": "CupHolder",
          "Location": "SecondRowArmrest",
          "Size": "Medium",
          "Optional": false
        },
        {
          "Type": "GloveCompartment",
          "Location": "DashPassengerSide",
          "Size": "Medium",
          "Optional": false
        },
        {
          "Type": "ConsoleStorage",
          "Location": "FirstRowCenterConsol",
          "Size": "Medium",
          "Optional": false
        },
        {
          "Type": "UnderFloorStorage",
          "Location": "Trunk",
          "Size": "Medium",
          "Optional": false
        }
      ]
    }
  },
  "Infotainment": {
    "InfotainmentOs": "AAOS",
    "SoundSystems": [
      {
        "Brand": "Audi",
        "Name": "Audi Sound System",
        "NumberOfSpeakers": 5,
        "TotalEffect": 200,
        "Standard": true
      },
      {
        "Brand": "Bang \u0026 Olufsen",
        "Name": "Bang \u0026 Olufsen Sound System",
        "NumberOfSpeakers": 20,
        "TotalEffect": 830,
        "Standard": false
      }
    ],
    "AndroidAutoSupport": {
      "FeatureStatus": "Standard"
    },
    "AppleCarPlaySupport": {
      "FeatureStatus": "Standard"
    },
    "InCarNavigation": {
      "FeatureStatus": "Standard"
    },
    "NavigationSystem": {
      "MapProvider": "HERE",
      "SateliteMap": true,
      "RealTimeTraffic": true,
      "OnlineMapUpdates": true,
      "VoiceGuiding": true,
      "VoiceControl": true,
      "RoutePlanning": true,
      "MinSOCDestintation": true,
      "MinSOCHPC": true
    },
    "AppStore": {
      "FeatureStatus": "Standard"
    },
    "Apps": [
      "Spotify",
      "TIDAL",
      "YouTube"
    ],
    "PortAndConnections": [
      {
        "Type": "USBC",
        "Location": "FirstRowArmRest",
        "Optional": false
      },
      {
        "Type": "USBC",
        "Location": "FirstRowArmRest",
        "Optional": false
      },
      {
        "Type": "USBC",
        "Location": "SecondRowCenterConsol",
        "Optional": true
      },
      {
        "Type": "USBC",
        "Location": "SecondRowCenterConsol",
        "Optional": true
      }
    ],
    "InductiveChargers": [
      {
        "Location": "FirstRowCenterConsol",
        "MaxPower": null,
        "Optional": null
      }
    ]
  },
  "Comfort": {
    "GarageOpener": {
      "FeatureStatus": "Optional"
    },
    "AirFragrance": {
      "FeatureStatus": "NotAvailable"
    },
    "WirelessPhoneCharging": {
      "FeatureStatus": "Standard"
    },
    "ElectricAdjustableSteeringWeel": {
      "FeatureStatus": "Optional"
    },
    "EeasyEntrySeat": {
      "FeatureStatus": "Optional"
    },
    "EeasyEntrySteeringwheel": {
      "FeatureStatus": "Optional"
    }
  },
  "Lights": {
    "Headlights": [
      {
        "Standard": true,
        "Name": {
          "en": "LED"
        },
        "LightTechnology": "LED",
        "AutoDimming": {
          "FeatureStatus": "Unknown"
        },
        "CorneringLight": {
          "FeatureStatus": "Unknown"
        },
        "SwivelingLight": {
          "FeatureStatus": "NotAvailable"
        },
        "HeadlightWasher": {
          "FeatureStatus": "NotAvailable"
        },
        "DRLLightSignatures": {
          "FeatureStatus": "NotAvailable"
        },
        "FeatureDescription": null
      },
      {
        "Standard": false,
        "Name": {
          "en": "Matrix"
        },
        "LightTechnology": "LEDMatrix",
        "AutoDimming": {
          "FeatureStatus": "Standard"
        },
        "CorneringLight": {
          "FeatureStatus": "Standard"
        },
        "SwivelingLight": {
          "FeatureStatus": "NotAvailable"
        },
        "HeadlightWasher": {
          "FeatureStatus": "Standard"
        },
        "DRLLightSignatures": {
          "FeatureStatus": "Standard"
        },
        "FeatureDescription": null
      }
    ],
    "Taillights": [
      {
        "Standard": true,
        "Name": {
          "en": "ledbar"
        },
        "FeatureDescription": null,
        "LightTechnology": "LED",
        "LightSignatures": {
          "FeatureStatus": "NotAvailable"
        }
      },
      {
        "Standard": false,
        "Name": {
          "en": "ledbar"
        },
        "FeatureDescription": null,
        "LightTechnology": "OLED",
        "LightSignatures": {
          "FeatureStatus": "Standard"
        }
      }
    ]
  },
  "Security": {
    "KeylessGo": {
      "FeatureStatus": "Standard"
    },
    "KeylessEntry": {
      "FeatureStatus": "Optional"
    },
    "PhoneAsKey": {
      "FeatureStatus": "Optional"
    },
    "AlarmSystem": {
      "FeatureStatus": "Optional"
    },
    "DashCam": {
      "FeatureStatus": "NotAvailable"
    },
    "ParkingSurveillance": {
      "FeatureStatus": "NotAvailable"
    }
  },
  "Safety": {
    "Airbags": [
      {
        "Type": "Front",
        "Placement": "SteeringWheel"
      },
      {
        "Type": "Front",
        "Placement": "InDashFrontOfPassenger"
      },
      {
        "Type": "Curtain",
        "Placement": "LeftWindows"
      },
      {
        "Type": "Curtain",
        "Placement": "RightWindows"
      },
      {
        "Type": "Side",
        "Placement": "SideDriver"
      },
      {
        "Type": "Side",
        "Placement": "SidePassenger"
      },
      {
        "Type": "Side",
        "Placement": "LeftSideSecondRow"
      },
      {
        "Type": "Side",
        "Placement": "RightSideSecondRow"
      },
      {
        "Type": "FrontCenter",
        "Placement": "BetweenFrontSeats"
      }
    ],
    "FirstRowSeatBeltPretensioner": {
      "FeatureStatus": "Standard"
    },
    "SecondRowSeatBeltPretensioner": {
      "FeatureStatus": "NotAvailable"
    },
    "EuroNcapTest": {
      "StarRating": 5,
      "AdultOccupant": 91,
      "ChildOccupant": 92,
      "VulnerableRoadUsers": 81,
      "SafetyAssist": 80,
      "Version": "2024",
      "ReportUrl": "https://www.euroncap.com/en/results/audi/q6\u002Be-tron/52560",
      "YoutubeVideo": "H0mlUigYdfk"
    }
  },
  "MobileApp": {
    "AppName": "MyAudi",
    "AndroidOs": true,
    "AppleOs": true,
    "ChargeStatus": true,
    "ChangeChargeTarget": true,
    "Location": true,
    "Preconditioning": true,
    "RemoteParking": false,
    "LockUnlock": true,
    "OpenCloseWindows": false,
    "ScheduleCharging": true,
    "TriggerSignal": false,
    "RoutePlanning": true,
    "SeeDrivingHistory": true
  },
  "Reviews": [
    {
      "MediaId": "beJgUTN6OgA",
      "Reviewer": "Out of Spec Reviews",
      "Title": "My First Look At The Audi Q6 e-tron! Tech Specs, Quick Tour, \u0026 First Drivee",
      "Published": "2024-01-25T00:00:00",
      "Language": "en",
      "Url": null,
      "ReviewPlatform": "YouTube"
    },
    {
      "MediaId": "BucVRnrE2qM",
      "Reviewer": "Autogef\u00FChl",
      "Title": "Audi Q6 e-tron final REVEAL of the Porsche Macan EV brother",
      "Published": "2024-03-18T00:00:00",
      "Language": "en",
      "Url": null,
      "ReviewPlatform": "YouTube"
    },
    {
      "MediaId": "MW3-wFIAWZA",
      "Reviewer": "Electrifying",
      "Title": "New Audi Q6 e-tron FIRST LOOK : time to jump the Q?",
      "Published": "2024-03-18T00:00:00",
      "Language": "en",
      "Url": null,
      "ReviewPlatform": "YouTube"
    },
    {
      "MediaId": "R-LUZMSDKKU",
      "Reviewer": "Autogef\u00FChl",
      "Title": "Audi Q6 e-tron driving REVIEW with SQ6 - better pick than Porsche Macan EV?",
      "Published": "2024-07-02T00:00:00",
      "Language": "en",
      "Url": null,
      "ReviewPlatform": "YouTube"
    },
    {
      "MediaId": "W0IwfFr1uJA",
      "Reviewer": "Norsk elbilforening",
      "Title": "Pr\u00F8vekj\u00F8ring av Audi Q6 og SQ6 e-tron: Leverer p\u00E5 alt nordmenn \u00F8nsker",
      "Published": "2024-07-02T00:00:00",
      "Language": "nb",
      "Url": null,
      "ReviewPlatform": "YouTube"
    },
    {
      "MediaId": "-isNDCM_ZNc",
      "Reviewer": "Electrifying",
      "Title": "FIRST DRIVE: Audi Q6 e-tron: the best electric Audi yet? ",
      "Published": "2024-07-02T00:00:00",
      "Language": "en",
      "Url": null,
      "ReviewPlatform": "YouTube"
    },
    {
      "MediaId": "dVjg1D6XiRg",
      "Reviewer": "AutoTrader",
      "Title": "NEW Audi Q6 / SQ6 E-Tron Review: Is Audi\u0027s Macan Rival Worth \u00A393,000?",
      "Published": "2024-07-02T00:00:00",
      "Language": "en",
      "Url": null,
      "ReviewPlatform": "YouTube"
    },
    {
      "MediaId": "iVTaZCKL7os",
      "Reviewer": "It\u0027s Only Electric",
      "Title": "Audi SQ6 E-Tron - Impressive or Just Average? | Range, Charging, 0-100",
      "Published": "2025-01-22T15:01:04Z",
      "Language": "en",
      "Url": "https://www.youtube.com/watch?v=iVTaZCKL7os",
      "ReviewPlatform": "YouTube"
    }
  ],
  "Calculations": [
    {
      "AverageChargingSpeed": 94.59901725913724245463333961,
      "AverageChargingSpeed10100": 88.95024442559329707443304713,
      "AverageChargingSpeed1080": 191.67768744402066706884691468,
      "AverageChargingSpeed1090": 149.67448719317687609857072691,
      "TravelSpeed120kmh": 103.11832625933332843728298392,
      "TravelSpeed90kmh": null,
      "TravelSpeedWltp": 44.549992928973675740072198373,
      "DriveTime1000kmChallenge": 549.297951961667,
      "AverageSpeed1000kmChallenge": 109.23033626054212282931533886,
      "EnergyChargedFrom10Percent10minutes": 33.711445645162612912016350932,
      "EnergyChargedFrom10Percent15Minutes": 47.700218668037710378763047366,
      "EnergyChargedFrom10Percent20minutes": 61.257864898788413947579829806,
      "EnergyChargedFrom10Percent25minutes": 69.261435523508544869734866289,
      "EnergyChargedFrom10Percent30minutes": 73.316264408301958324215466228,
      "AverageCRating": 1.8713861386138613861386138614,
      "MaxCRating": 2.88
    }
  ],
  "ModelPictures": [
    {
      "Id": null,
      "RepoPath": "models\\audi\\q6_e-tron\\sq6_e-tron\\charging_1.jpg",
      "CloudPath": "models/audi/q6_e-tron/sq6_e-tron/charging_1.jpg",
      "ExternalUrl": "https://media.evkx.net/multimedia/models/audi/q6_e-tron/sq6_e-tron/charging_1.jpg",
      "Width": 3000,
      "Height": 2249,
      "HasXSmallThumb": true,
      "HasSmallThumb": true,
      "HasMediumThumb": true,
      "Hash": "mQ4kyvCytMlEOQjybYP7cQ==",
      "Size": 2562024
    },
    {
      "Id": null,
      "RepoPath": "models\\audi\\q6_e-tron\\sq6_e-tron\\exterior_1.jpg",
      "CloudPath": "models/audi/q6_e-tron/sq6_e-tron/exterior_1.jpg",
      "ExternalUrl": "https://media.evkx.net/multimedia/models/audi/q6_e-tron/sq6_e-tron/exterior_1.jpg",
      "Width": 3000,
      "Height": 2249,
      "HasXSmallThumb": true,
      "HasSmallThumb": true,
      "HasMediumThumb": true,
      "Hash": "OpcIm\u002BssaFE2N6T7FTqeEw==",
      "Size": 3032134
    },
    {
      "Id": null,
      "RepoPath": "models\\audi\\q6_e-tron\\sq6_e-tron\\frontseats_1.jpg",
      "CloudPath": "models/audi/q6_e-tron/sq6_e-tron/frontseats_1.jpg",
      "ExternalUrl": "https://media.evkx.net/multimedia/models/audi/q6_e-tron/sq6_e-tron/frontseats_1.jpg",
      "Width": 3000,
      "Height": 2249,
      "HasXSmallThumb": true,
      "HasSmallThumb": true,
      "HasMediumThumb": true,
      "Hash": "AkDVjWnm8ef6ofLvqvogpQ==",
      "Size": 1963601
    },
    {
      "Id": null,
      "RepoPath": "models\\audi\\q6_e-tron\\sq6_e-tron\\frontseats_2.jpg",
      "CloudPath": "models/audi/q6_e-tron/sq6_e-tron/frontseats_2.jpg",
      "ExternalUrl": "https://media.evkx.net/multimedia/models/audi/q6_e-tron/sq6_e-tron/frontseats_2.jpg",
      "Width": 3000,
      "Height": 2249,
      "HasXSmallThumb": true,
      "HasSmallThumb": true,
      "HasMediumThumb": true,
      "Hash": "wAmVs6lVn3Uwl1n/PH8bYA==",
      "Size": 2275833
    },
    {
      "Id": null,
      "RepoPath": "models\\audi\\q6_e-tron\\sq6_e-tron\\headlights_1.jpg",
      "CloudPath": "models/audi/q6_e-tron/sq6_e-tron/headlights_1.jpg",
      "ExternalUrl": "https://media.evkx.net/multimedia/models/audi/q6_e-tron/sq6_e-tron/headlights_1.jpg",
      "Width": 3000,
      "Height": 2249,
      "HasXSmallThumb": true,
      "HasSmallThumb": true,
      "HasMediumThumb": true,
      "Hash": "Asldx0BRQ56C0Qv1UPG2sQ==",
      "Size": 1465909
    },
    {
      "Id": null,
      "RepoPath": "models\\audi\\q6_e-tron\\sq6_e-tron\\interior_1.jpg",
      "CloudPath": "models/audi/q6_e-tron/sq6_e-tron/interior_1.jpg",
      "ExternalUrl": "https://media.evkx.net/multimedia/models/audi/q6_e-tron/sq6_e-tron/interior_1.jpg",
      "Width": 3000,
      "Height": 2249,
      "HasXSmallThumb": true,
      "HasSmallThumb": true,
      "HasMediumThumb": true,
      "Hash": "lWKUUU8Z4eYZudtztPD1Fw==",
      "Size": 1916716
    },
    {
      "Id": null,
      "RepoPath": "models\\audi\\q6_e-tron\\sq6_e-tron\\interior_2.jpg",
      "CloudPath": "models/audi/q6_e-tron/sq6_e-tron/interior_2.jpg",
      "ExternalUrl": "https://media.evkx.net/multimedia/models/audi/q6_e-tron/sq6_e-tron/interior_2.jpg",
      "Width": 3000,
      "Height": 2249,
      "HasXSmallThumb": true,
      "HasSmallThumb": true,
      "HasMediumThumb": true,
      "Hash": "7nbm1UYHt9twS65DgQ2yWQ==",
      "Size": 1762035
    },
    {
      "Id": null,
      "RepoPath": "models\\audi\\q6_e-tron\\sq6_e-tron\\main_1.jpg",
      "CloudPath": "models/audi/q6_e-tron/sq6_e-tron/main_1.jpg",
      "ExternalUrl": "https://media.evkx.net/multimedia/models/audi/q6_e-tron/sq6_e-tron/main_1.jpg",
      "Width": 3000,
      "Height": 1999,
      "HasXSmallThumb": true,
      "HasSmallThumb": true,
      "HasMediumThumb": true,
      "Hash": "BSSJk7RU\u002BjEt4tjD/XHaHA==",
      "Size": 1455484
    },
    {
      "Id": null,
      "RepoPath": "models\\audi\\q6_e-tron\\sq6_e-tron\\screens_1.jpg",
      "CloudPath": "models/audi/q6_e-tron/sq6_e-tron/screens_1.jpg",
      "ExternalUrl": "https://media.evkx.net/multimedia/models/audi/q6_e-tron/sq6_e-tron/screens_1.jpg",
      "Width": 3000,
      "Height": 2249,
      "HasXSmallThumb": true,
      "HasSmallThumb": true,
      "HasMediumThumb": true,
      "Hash": "5U3/KPetNAU\u002BiHNotylZMg==",
      "Size": 1738228
    },
    {
      "Id": null,
      "RepoPath": "models\\audi\\q6_e-tron\\sq6_e-tron\\secondrowseats_1.jpg",
      "CloudPath": "models/audi/q6_e-tron/sq6_e-tron/secondrowseats_1.jpg",
      "ExternalUrl": "https://media.evkx.net/multimedia/models/audi/q6_e-tron/sq6_e-tron/secondrowseats_1.jpg",
      "Width": 3000,
      "Height": 2249,
      "HasXSmallThumb": true,
      "HasSmallThumb": true,
      "HasMediumThumb": true,
      "Hash": "4Q4yzt3Hn\u002BeXxGowHW7rPg==",
      "Size": 1758246
    },
    {
      "Id": null,
      "RepoPath": "models\\audi\\q6_e-tron\\sq6_e-tron\\secondrowseats_2.jpg",
      "CloudPath": "models/audi/q6_e-tron/sq6_e-tron/secondrowseats_2.jpg",
      "ExternalUrl": "https://media.evkx.net/multimedia/models/audi/q6_e-tron/sq6_e-tron/secondrowseats_2.jpg",
      "Width": 3000,
      "Height": 2249,
      "HasXSmallThumb": true,
      "HasSmallThumb": true,
      "HasMediumThumb": true,
      "Hash": "LWv50ly4O2CwsdrqiBYEAw==",
      "Size": 1755717
    },
    {
      "Id": null,
      "RepoPath": "models\\audi\\q6_e-tron\\sq6_e-tron\\trunk_1.jpg",
      "CloudPath": "models/audi/q6_e-tron/sq6_e-tron/trunk_1.jpg",
      "ExternalUrl": "https://media.evkx.net/multimedia/models/audi/q6_e-tron/sq6_e-tron/trunk_1.jpg",
      "Width": 3000,
      "Height": 2249,
      "HasXSmallThumb": true,
      "HasSmallThumb": true,
      "HasMediumThumb": true,
      "Hash": "SJcXn5FY1OjiPC9nldAIcA==",
      "Size": 1988816
    },
    {
      "Id": null,
      "RepoPath": "models\\audi\\q6_e-tron\\sq6_e-tron\\wheels_1.jpg",
      "CloudPath": "models/audi/q6_e-tron/sq6_e-tron/wheels_1.jpg",
      "ExternalUrl": "https://media.evkx.net/multimedia/models/audi/q6_e-tron/sq6_e-tron/wheels_1.jpg",
      "Width": 3000,
      "Height": 2249,
      "HasXSmallThumb": true,
      "HasSmallThumb": true,
      "HasMediumThumb": true,
      "Hash": "HvN4zHVXpw\u002BtH2r6AFNgMg==",
      "Size": 2049428
    }
  ]
}
```

