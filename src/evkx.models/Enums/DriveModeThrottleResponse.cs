﻿using System.Runtime.Serialization;
using System.Text.Json.Serialization;

namespace evdb.models.Enums
{
    [JsonConverter(typeof(JsonStringEnumConverter))]
    public enum DriveModeThrottleResponse : int
    {
        [EnumMember(Value = "NotSet")]
        NotSet = 0,

        [EnumMember(Value = "Dynamic")]
        Dynamic = 1,

        [EnumMember(Value = "Efficient")]
        Efficient = 2,

        [EnumMember(Value = "Balanced")]
        Balanced = 3,

        [EnumMember(Value = "Custom")]
        Custom = 4,
    }
}
