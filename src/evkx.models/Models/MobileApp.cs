﻿namespace evdb.models.Models
{
    /// <summary>
    /// Defines the MobileApp capabilites of this EV
    /// </summary>
    public class MobileApp
    {
        /// <summary>
        /// Defines the mobile app name
        /// </summary>
        public string? AppName { get; set; }

        /// <summary>
        /// Defines if app is available on Android OS
        /// </summary>
        public bool? AndroidOs { get; set; }

        /// <summary>
        /// Defines if app is available on Apple OS
        /// </summary>
        public bool? AppleOs { get; set; }

        /// <summary>
        /// See the current SOC and range
        /// </summary>
        public bool? ChargeStatus { get; set; }

        /// <summary>
        /// Defines if app let you control the charge target
        /// </summary>
        public bool? ChangeChargeTarget { get; set; }

        /// <summary>
        /// Defines if app let you see the location of car
        /// </summary>
        public bool? Location { get; set; }

        /// <summary>
        /// Defines if app let you start preconditioning
        /// </summary>
        public bool? Preconditioning { get; set; }

        /// <summary>
        /// Defines if let you do remote parking 
        /// </summary>
        public bool? RemoteParking { get; set; }

        /// <summary>
        /// Defines if the app let you lock/unlock the car
        /// </summary>
        public bool? LockUnlock { get; set; }

        /// <summary>
        /// Defines if the app let you open/close windows
        /// </summary>
        public bool? OpenCloseWindows { get; set; }

        /// <summary>
        /// Defines if the app let you schedule charging
        /// </summary>
        public bool? ScheduleCharging { get; set; }

        /// <summary>
        /// Defines if the app let you trigger the horn/light signal
        /// </summary>
        public bool? TriggerSignal { get; set; }

        /// <summary>
        /// Defines if the app let you do route planning
        /// </summary>
        public bool? RoutePlanning { get; set; }

        /// <summary>
        /// Defines if the app let you see the travel history
        /// </summary>
        public bool? SeeDrivingHistory { get; set; }


        internal DataQualityScore CalculateDataQuality()
        {
            DataQualityScore dataQualityScore = new DataQualityScore() { DataArea = "MobileApp" };

            if(AndroidOs == false && AppleOs == false)
            {
                return dataQualityScore;
            }
            
            if (string.IsNullOrEmpty(AppName))
            {
                dataQualityScore.ReduceScore(10, "AppName");
            }

            if(ChangeChargeTarget == null)
            {
                dataQualityScore.ReduceScore(10, "ChangeChargeTarget");
            }

            if(Location == null)
            {
                dataQualityScore.ReduceScore(10, "Location");
            }

            if(Preconditioning == null)
            {
                dataQualityScore.ReduceScore(10, "Preconditioning");
            }

            if(RemoteParking == null)
            {
                dataQualityScore.ReduceScore(10, "RemoteParking");
            }

            if(LockUnlock == null)
            {
                dataQualityScore.ReduceScore(10, "LockUnlock");
            }

            if(OpenCloseWindows == null)
            {
                dataQualityScore.ReduceScore(10, "OpenCloseWindows");
            }

            if(ScheduleCharging == null)
            {
                dataQualityScore.ReduceScore(10, "ScheduleCharging");
            }

            if(TriggerSignal == null)
            {
                dataQualityScore.ReduceScore(10, "TriggerSignal");
            }

            if(RoutePlanning == null)
            {
                dataQualityScore.ReduceScore(10, "RoutePlanning");
            }

            if(SeeDrivingHistory == null)
            {
                dataQualityScore.ReduceScore(10, "SeeDrivingHistory");
            }

            if(ChargeStatus == null)
            {
                dataQualityScore.ReduceScore(10, "ChargeStatus");
            }

            return dataQualityScore;
        }

    }
}
