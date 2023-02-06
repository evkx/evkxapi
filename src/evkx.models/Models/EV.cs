﻿using evdb.models.Models;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text.RegularExpressions;

namespace evdb.Models
{
    public class EV
    {
        public EV()
        {
            ModelInfo = new ModelInfo();
            Brand = new Brand();
            Dimensions =  new Dimensions();
        }


        private static readonly Regex removeInvalidChars = new Regex($"[{Regex.Escape(new string(Path.GetInvalidFileNameChars()))}]",
   RegexOptions.Singleline | RegexOptions.Compiled | RegexOptions.CultureInvariant);


        public int Id { get; set; }

        public Brand? Brand { get; set; }

        public ModelInfo? ModelInfo { get; set; }

        public Dimensions? Dimensions { get; set; }

        public TransportCapabilities? TransportCapabilities { get; set; }

        public Drivetrain? Drivetrain { get; set; }

        public Exterior? Exterior { get; set; }

        public DriverAssistance? DriverAssistance { get; set; }

        public UIAndControls? UIAndControls { get; set; }

        public Interior? Interior { get; set; }

        public Infotainment? Infotainment { get; set; }

        public Comfort? Comfort { get; set; }

        public Lights? Lights { get; set; }

        public List<EvReview>? Reviews { get; set; }

        public string GetFullName()
        {
            if(!string.IsNullOrEmpty(ModelInfo?.Variant))
            {
                if(Brand?.SubBrand != null)
                {
                    return Brand?.SubBrand + " " + ModelInfo?.Variant;
                }

                return Brand?.Name + " " + ModelInfo?.Variant;
            }

            return Brand?.Name + " " + ModelInfo?.Name;
        }


        public string? GetVariantName()
        {
            if (!string.IsNullOrEmpty(ModelInfo?.Variant))
            {

                return ModelInfo.Variant;
            }

            return ModelInfo?.Name;
        }
        

        public decimal? GetBasicTrimWltpConsumptionReal(int? rangeIndex = null)
        {
            if(Drivetrain?.Battery == null || Drivetrain.Battery.Count == 0)
            {
                return null;
            }

            Battery? battery = Drivetrain?.Battery?.FirstOrDefault();

            if(rangeIndex != null && rangeIndex.Value != 0)
            {
                if(Drivetrain.Battery.Count > (rangeIndex +1))
                {
                    battery = Drivetrain.Battery[rangeIndex.Value];
                }
            }

            RangeAndConsumption? range = Drivetrain?.RangeAndConsumption?.FirstOrDefault();

            if(battery?.NetCapacitykWh == null || range?.BasicTrimWltpRange == null)
            {
                return null;
            }

            return (battery.NetCapacitykWh / (decimal) range.BasicTrimWltpRange)*100;
            
        }

        public decimal? GetTopTrimWltpConsumptionReal(int? rangeIndex = null)
        {
            if (Drivetrain?.Battery == null || Drivetrain.Battery.Count == 0)
            {
                return null;
            }


            Battery? battery = Drivetrain?.Battery?.First();
            RangeAndConsumption? range = Drivetrain?.RangeAndConsumption?.FirstOrDefault();

            if (rangeIndex != null && rangeIndex.Value != 0)
            {
                if (Drivetrain.Battery.Count > (rangeIndex + 1))
                {
                    battery = Drivetrain.Battery[rangeIndex.Value];
                }
            }

            if (battery?.NetCapacitykWh == null || range?.TopTrimWltpRange == null)
            {
                return null;
            }

            return (battery.NetCapacitykWh / (decimal)range.TopTrimWltpRange)*100;
        }


        public int? MinimumWltpRangeBasicTrim()
        {
            int? rangeValue = 0;

            if(Drivetrain?.RangeAndConsumption != null)
            {
                foreach(RangeAndConsumption range in Drivetrain.RangeAndConsumption)
                {
                    if(rangeValue == 0 && range.BasicTrimWltpRange.HasValue || range.BasicTrimWltpRange.HasValue && range.BasicTrimWltpRange.Value < rangeValue)
                    {
                        rangeValue = range.BasicTrimWltpRange.Value;
                    }
                }
            }

            return rangeValue;
        }


        public decimal? NetBatterySizeStandardBattery()
        {
            decimal? netsize = 0;
            if (Drivetrain?.Battery != null)
            {
               netsize = Drivetrain.Battery[0].NetCapacitykWh; 
            }
            return netsize;
        }

        public decimal? WltpConsumptionBasicTrim()
        {
            decimal? wltpConsumption = 0;
            if (Drivetrain?.RangeAndConsumption != null)
            {
                wltpConsumption = Drivetrain.RangeAndConsumption[0].BasicTrimRealWltpConsumption;
            }

            return wltpConsumption;
        }

        public int? Power()
        {
            int power = 0;

            if(Drivetrain?.Performance != null)
            {
                foreach(var performance in Drivetrain.Performance)
                {
                    if(performance.PowerKw.HasValue && performance.PowerKw.Value > power)
                    {
                        power = performance.PowerKw.Value;
                    }
                }
            }

            return power;
        }

        public int? TopSpeed()
        {
            int topSpeed = 0;

            if (Drivetrain?.Performance != null)
            {
                foreach (var performance in Drivetrain.Performance)
                {
                    if (performance.TopSpeed.HasValue && performance.TopSpeed.Value > topSpeed)
                    {
                        topSpeed = performance.TopSpeed.Value;
                    }
                }
            }

            return topSpeed;
        }

        public double? MaxDCCharging()
        {
            double maxDCCharging = 0;

            if (Drivetrain?.Battery != null)
            {
                foreach(Battery bat in Drivetrain.Battery)
                {
                    if (bat.MaxDCChargeSpeed.HasValue)
                    {
                        maxDCCharging = bat.MaxDCChargeSpeed.Value;
                    }
                }
            }

            return maxDCCharging;
        }


        public string? GetVariantId()
        {
            string variantId = Brand.Name + " " + GetVariantName();

            return removeInvalidChars.Replace(variantId, "_").Replace(" ", "_").Replace("+", "plus");
        }

        public string GetEvPath()
        {
            return ("/models/" + SanitizedFileName(Brand?.Name.ToLower()) + "/" + SanitizedFileName(ModelInfo?.Name.ToLower()) +"/" + SanitizedFileName(ModelInfo?.Variant)+ "/").ToLower();
        }

        public string SanitizedFileName(string? fileName, string replacement = "_")
        {
            if (fileName == null)
            {
                return null;
            }

            return removeInvalidChars.Replace(fileName, replacement).Replace(" ", "_").Replace("+", "plus");
        }

    }
}
