﻿using System.Runtime.Serialization;
using System.Text.Json.Serialization;

namespace evdb.models.Enums
{
    [JsonConverter(typeof(JsonStringEnumConverter))]
    public enum SAELevelsOfDrivingAutomation: int
    {
        [EnumMember(Value = "NoDrivingAutomation")]
        NoDrivingAutomation = 0,

        [EnumMember(Value = "DriverAssistance")]
        DriverAssistance = 1,

        [EnumMember(Value = "PartialDrivingAutomation")]
        PartialDrivingAutomation = 2,

        [EnumMember(Value = "ConditionalDrivingAutomation")]
        ConditionalDrivingAutomation = 3,

        [EnumMember(Value = "HighDrivingAutomation")]
        HighDrivingAutomation = 4,

        [EnumMember(Value = "FullDrivingAutomation")]
        FullDrivingAutomation = 5,
    }
}
