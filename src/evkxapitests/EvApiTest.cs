using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;
using Altinn.App.IntegrationTests;

using App.IntegrationTests.Utils;
using evdb.Controllers;
using evdb.Models;
using evkx.models.Models.Search;
using Newtonsoft.Json;
using Xunit;

namespace evdbtests
{
    public class EvApiTest: IClassFixture<CustomWebApplicationFactory<EvController>>
    {
        private readonly CustomWebApplicationFactory<EvController> _factory;

        public EvApiTest(CustomWebApplicationFactory<EvController> factory)
        {
            _factory = factory;
        }

  
        [Fact]
        public async Task Search_AllWheelDrive()
        {
            HttpClient client = SetupUtil.GetTestClient(_factory);

            EvSearch search = new EvSearch();
            search.AllWheelDrive = true;
            string requestUri = "/api/Ev/";
            HttpRequestMessage httpRequestMessage = new HttpRequestMessage(HttpMethod.Post, requestUri)
            {
                Content = new StringContent(JsonConvert.SerializeObject(search), Encoding.UTF8, "application/json")
            };

            HttpResponseMessage response = await client.SendAsync(httpRequestMessage);

            string responseContent = await response.Content.ReadAsStringAsync();
            EvSearchResult? ev = System.Text.Json.JsonSerializer.Deserialize<EvSearchResult>(responseContent, new System.Text.Json.JsonSerializerOptions() { PropertyNamingPolicy = JsonNamingPolicy.CamelCase }) as EvSearchResult;

            Assert.Equal(143, ev.Evs.Count());

        }

        [Fact]
        public async Task Search_Hatcback()
        {
            HttpClient client = SetupUtil.GetTestClient(_factory);

            EvSearch search = new EvSearch();
            search.EvType = new System.Collections.Generic.List<evdb.models.Enums.EvBodyType>();
            search.EvType.Add(evdb.models.Enums.EvBodyType.Hatchback);
            string requestUri = "/api/Ev/";
            HttpRequestMessage httpRequestMessage = new HttpRequestMessage(HttpMethod.Post, requestUri)
            {
                Content = new StringContent(JsonConvert.SerializeObject(search), Encoding.UTF8, "application/json")
            };

            HttpResponseMessage response = await client.SendAsync(httpRequestMessage);

            string responseContent = await response.Content.ReadAsStringAsync();
            EvSearchResult? ev = System.Text.Json.JsonSerializer.Deserialize<EvSearchResult>(responseContent, new System.Text.Json.JsonSerializerOptions() { PropertyNamingPolicy = JsonNamingPolicy.CamelCase }) as EvSearchResult;

            Assert.Equal(5, ev.Evs.Count());

        }


        [Fact]
        public async Task Search_MinimumWLTPRange_OnlyOneHit()
        {
            HttpClient client = SetupUtil.GetTestClient(_factory);

            EvSearch search = new EvSearch();
            search.MinimumWltpRange = "782";
            string requestUri = "/api/Ev/";
            HttpRequestMessage httpRequestMessage = new HttpRequestMessage(HttpMethod.Post, requestUri)
            {
                Content = new StringContent(JsonConvert.SerializeObject(search), Encoding.UTF8, "application/json")
            };

            HttpResponseMessage response = await client.SendAsync(httpRequestMessage);

            string responseContent = await response.Content.ReadAsStringAsync();
            EvSearchResult? ev = System.Text.Json.JsonSerializer.Deserialize<EvSearchResult>(responseContent, new System.Text.Json.JsonSerializerOptions() { PropertyNamingPolicy = JsonNamingPolicy.CamelCase }) as EvSearchResult;

            Assert.Equal(4, ev.Evs.Count());

        }

        [Fact]
        public async Task Search_ChargePortRearLeft()
        {
            HttpClient client = SetupUtil.GetTestClient(_factory);

            EvSearch search = new EvSearch();
            search.ChargePortRearLeft = true;
            string requestUri = "/api/Ev/";
            HttpRequestMessage httpRequestMessage = new HttpRequestMessage(HttpMethod.Post, requestUri)
            {
                Content = new StringContent(JsonConvert.SerializeObject(search), Encoding.UTF8, "application/json")
            };

            HttpResponseMessage response = await client.SendAsync(httpRequestMessage);

            string responseContent = await response.Content.ReadAsStringAsync();
            EvSearchResult? ev = System.Text.Json.JsonSerializer.Deserialize<EvSearchResult>(responseContent, new System.Text.Json.JsonSerializerOptions() { PropertyNamingPolicy = JsonNamingPolicy.CamelCase }) as EvSearchResult;

            Assert.Equal(46, ev.Evs.Count());

        }

        [Fact]
        public async Task Search_WltpRange30MinCharging()
        {
            HttpClient client = SetupUtil.GetTestClient(_factory);

            EvSearch search = new EvSearch();
            search.SortOrder = evdb.models.Enums.SortOrder.DrivingDistanceWltpCharged10Percent30Min;
            string requestUri = "/api/Ev/";
            HttpRequestMessage httpRequestMessage = new HttpRequestMessage(HttpMethod.Post, requestUri)
            {
                Content = new StringContent(JsonConvert.SerializeObject(search), Encoding.UTF8, "application/json")
            };

            HttpResponseMessage response = await client.SendAsync(httpRequestMessage);

            string responseContent = await response.Content.ReadAsStringAsync();
            EvSearchResult? ev = System.Text.Json.JsonSerializer.Deserialize<EvSearchResult>(responseContent, new System.Text.Json.JsonSerializerOptions() { PropertyNamingPolicy = JsonNamingPolicy.CamelCase }) as EvSearchResult;

            Assert.Equal(198, ev.Evs.Count());

        }

        [Fact]
        public async Task Search_WltpRang()
        {
            HttpClient client = SetupUtil.GetTestClient(_factory);

            EvSearch search = new EvSearch();
            search.SortOrder = evdb.models.Enums.SortOrder.WltpBasicConsumption;
            string requestUri = "/api/Ev/";
            HttpRequestMessage httpRequestMessage = new HttpRequestMessage(HttpMethod.Post, requestUri)
            {
                Content = new StringContent(JsonConvert.SerializeObject(search), Encoding.UTF8, "application/json")
            };

            HttpResponseMessage response = await client.SendAsync(httpRequestMessage);

            string responseContent = await response.Content.ReadAsStringAsync();
            EvSearchResult? ev = System.Text.Json.JsonSerializer.Deserialize<EvSearchResult>(responseContent, new System.Text.Json.JsonSerializerOptions() { PropertyNamingPolicy = JsonNamingPolicy.CamelCase }) as EvSearchResult;

            Assert.Equal(198, ev.Evs.Count());

        }

        [Fact]
        public async Task Search_CRatingRang()
        {
            HttpClient client = SetupUtil.GetTestClient(_factory);

            EvSearch search = new EvSearch();
            search.SortOrder = evdb.models.Enums.SortOrder.AverageCRating;
            string requestUri = "/api/Ev/";
            HttpRequestMessage httpRequestMessage = new HttpRequestMessage(HttpMethod.Post, requestUri)
            {
                Content = new StringContent(JsonConvert.SerializeObject(search), Encoding.UTF8, "application/json")
            };

            HttpResponseMessage response = await client.SendAsync(httpRequestMessage);

            string responseContent = await response.Content.ReadAsStringAsync();
            EvSearchResult? ev = System.Text.Json.JsonSerializer.Deserialize<EvSearchResult>(responseContent, new System.Text.Json.JsonSerializerOptions() { PropertyNamingPolicy = JsonNamingPolicy.CamelCase }) as EvSearchResult;

            Assert.Equal(198, ev.Evs.Count());

        }


        [Fact]
        public async Task Search_120kmDrivingSpeed()
        {
            HttpClient client = SetupUtil.GetTestClient(_factory);

            EvSearch search = new EvSearch();
            search.SortOrder = evdb.models.Enums.SortOrder.DrivingDistance120kmhCharged10Percent15Min;
            string requestUri = "/api/Ev/";
            HttpRequestMessage httpRequestMessage = new HttpRequestMessage(HttpMethod.Post, requestUri)
            {
                Content = new StringContent(JsonConvert.SerializeObject(search), Encoding.UTF8, "application/json")
            };

            HttpResponseMessage response = await client.SendAsync(httpRequestMessage);

            string responseContent = await response.Content.ReadAsStringAsync();
            EvSearchResult? ev = System.Text.Json.JsonSerializer.Deserialize<EvSearchResult>(responseContent, new System.Text.Json.JsonSerializerOptions() { PropertyNamingPolicy = JsonNamingPolicy.CamelCase }) as EvSearchResult;

            Assert.True(385 < ev.Evs.Count());

        }
    }
}
