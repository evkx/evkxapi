﻿using System.Runtime.Serialization;
using System.Text.Json.Serialization;

namespace evdb.models.Enums
{
    [JsonConverter(typeof(JsonStringEnumConverter))]
    public enum SpringType: int
    {
        [EnumMember(Value = "NotSet")]
        NotSet = 0,

        [EnumMember(Value = "Coil")]
        Coil = 1,

        [EnumMember(Value = "Air")]
        Air = 2,

        [EnumMember(Value = "Torsion")]
        Torsion = 3,

        [EnumMember(Value = "Leaf")]
        Leaf = 4,

        [EnumMember(Value = "Rubber")]
        Rubber = 5,






    }
}
