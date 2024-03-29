﻿using System.Runtime.Serialization;

namespace evdb.models.Enums
{
    public enum ConsoleDesign: int
    {
        [EnumMember(Value = "NotSet")]
        NotSet = 0,

        [EnumMember(Value = "Traditional")]
        Traditional = 1,

        [EnumMember(Value = "Floating")]
        Floating = 2,

        [EnumMember(Value = "SplitLevel")]
        SplitLevel = 3,

        [EnumMember(Value = "StorageArmrestOnly")]
        StorageArmrestOnly = 4,
    }
}
