﻿using System.Collections.Generic;
using System.IO;

namespace evdb.Models
{
    public class CloudMedia
    {
        public string? FileName { get; set; }

        public string? RepoPath { get; set; }

        public required string CloudPath { get; set; }

        public required string ExternalUrl { get; set; }

        public bool? HasXSmallThumb { get; set; }

        public bool? HasSmallThumb { get; set; }

        public bool? HasMediumThumb { get; set; }

        public List<string> Tags { get; set; }

        public Dictionary<string, string>? Description { get; set; }

        public int Width { get; set; }

        public int Height { get; set; }


        public string GetThumbExternalUrl()
        {
            string? extension = Path.GetExtension(RepoPath);
            if (extension != null)
            {
                if(HasSmallThumb != null && HasSmallThumb.Value)
                {
                    return ExternalUrl.Replace(extension, "_st"+ extension);
                }
                else if(HasMediumThumb != null && HasMediumThumb.Value)
                {
                    return ExternalUrl.Replace(extension, "_mt" + extension);
                }

                return ExternalUrl;
            }

            return ExternalUrl;
        }

        public string? GetXSThumbExternalUrl()
        {
            string extension = Path.GetExtension(RepoPath);
            if (ExternalUrl != null)
            {
                if (HasXSmallThumb != null && HasXSmallThumb.Value)
                {
                    return ExternalUrl.Replace(extension, "_xst" + extension);
                }
                else if (HasMediumThumb != null && HasMediumThumb.Value)
                {
                    return ExternalUrl.Replace(extension, "_mt" + extension);
                }

                return ExternalUrl;
            }

            return null;
        }

        public string? GetDescription(string language)
        {
            if (Description != null && Description.ContainsKey(language))
            {
                return Description[language];
            }

            return null;
        }

        public int GetMediumHeight()
        {
           int height = (int)((double)(1200 / (double) Width) * (double)Height);
           return height;
        }

        public int GetSmallHeight()
        {
            int height = (int)((double)(800 / (double)Width) * (double)Height);
            return height;
        }

        public int GetXSmallHeight()
        {
             return (int)((double)(400 / (double)Width) * (double)Height);
        }

        public int GetXXSmallHeight()
        {
       
            return (int)((double)((double) 200 / (double) Width) * (double)Height);
        }
    }
}
