//import React from "react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "../../asset/css/subsidy.css";

const SubsidySearch = ({ goToSecond, setFormData }) => {
  const { register, handleSubmit } = useForm();

  const [selectedIdentity, setSelectedIdentity] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const populateDistricts = () => {
    // 根據所選城市定義區域
    let districts = [];
    switch (selectedCity) {
      case "台北市":
        districts = [
          "大安區",
          "萬華區",
          "信義區",
          "中正區",
          "松山區",
          "大同區",
          "中山區",
          "北投區",
          "士林區",
          "內湖區",
          "南港區",
        ];
        break;
      case "新北市":
        districts = [
          "板橋區",
          "三重區",
          "中和區",
          "新莊區",
          "永和區",
          "土城區",
          "樹林區",
          "三峽區",
          "鶯歌區",
          "新店區",
          "坪林區",
          "烏來區",
          "汐止區",
          "深坑區",
          "石碇區",
          "平溪區",
          "雙溪區",
          "貢寮區",
          "金山區",
          "萬里區",
          "蘆洲區",
          "五股區",
          "泰山區",
          "林口區",
          "八里區",
          "淡水區",
          "三芝區",
          "石門區",
        ];
        break;
      case "桃園市":
        districts = [
          "中壢區",
          "平鎮區",
          "龍潭區",
          "楊梅區",
          "新屋區",
          "觀音區",
          "桃園區",
          "龜山區",
          "八德區",
          "大溪區",
          "復興區",
          "大園區",
          "蘆竹區",
        ];
        break;

      default:
        break;
    }
    return districts;
  };

  const handleDistrictChange = (event) => {
    setSelectedDistrict(event.target.value);
  };

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value); // 更新所選縣市
    setSelectedDistrict(""); // 清空區域選擇
  };
  const onSubmit = (data) => {
    // alert(JSON.stringify(data));
    setFormData(data);
    goToSecond();
  };

  return (
    <React.Fragment>
      <div className="container col-10">
        <div className="row">
          <div className="col-md-12 text-left">
            <h1 style={{ fontWeight: "bold" }}>長照服務補助資訊專區-查詢</h1>
          </div>
        </div>
        <div className="row justify-content-center mt-4 mb-4">
          <div className="col-12">
            <div
              className="content"
              style={{ maxWidth: "100%", overflowX: "auto" }}
            >
              <h3>請填寫被照顧者之相關資訊:</h3>
              <div className="row">
                <div className="col-md-5 mb-5 mt-4 d-flex justify-content-center">
                  <img
                    src={require("../../asset/images/subsidy/elder.jpg")}
                    alt="elder"
                    className="img-fluid"
                  />
                </div>
                <div className="col-md-6 mb-4">
                  <form className="mb-1" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                      <label htmlFor="identity">身份:</label>
                      <select
                        className="form-control"
                        id="identitySelect"
                        {...register("identity")}
                        // value={selectedIdentity}
                      >
                        <option value="請選擇身份">請選擇身份</option>
                        <option value="50歲以上失智者">50歲以上失智者</option>
                        <option value="55歲以上原住民">55歲以上原住民</option>
                        <option value="65歲以上老人">65歲以上老人</option>
                        <option value="身心障礙者">身心障礙者</option>
                        <option value="其他">其他</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="income">收入狀況:</label>
                      <select
                        className="form-control"
                        id="income"
                        {...register("income")}
                      >
                        <option>請選擇收入狀況</option>
                        <option>低收入戶</option>
                        <option>中低收入戶</option>
                        <option>一般戶</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="disability">是否持有身心障礙證明:</label>
                      <select
                        className="form-control"
                        id="disability"
                        {...register("disability")}
                      >
                        <option>請選擇是否持有身心障礙證明</option>
                        <option>是</option>
                        <option>否</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="city">縣市:</label>
                      <select
                        className="form-control"
                        id="city"
                        value={selectedCity}
                        {...register("city", {
                          onChange: handleCityChange,
                        })}
                      >
                        <option value="">請選擇縣市</option>
                        <option value="台北市">台北市</option>
                        <option value="新北市">新北市</option>
                        <option value="桃園市">桃園市</option>
                        <option value="台中市">台中市</option>
                        <option value="台南市">台南市</option>
                        <option value="高雄市">高雄市</option>
                        <option value="基隆市">基隆市</option>
                        <option value="新竹市">新竹市</option>
                        <option value="嘉義市">嘉義市</option>
                        <option value="新竹縣">新竹縣</option>
                        <option value="苗栗縣">苗栗縣</option>
                        <option value="彰化縣">彰化縣</option>
                        <option value="南投縣">南投縣</option>
                        <option value="雲林縣">雲林縣</option>
                        <option value="嘉義縣">嘉義縣</option>
                        <option value="屏東縣">屏東縣</option>
                        <option value="宜蘭縣">宜蘭縣</option>
                        <option value="花蓮縣">花蓮縣</option>
                        <option value="台東縣">台東縣</option>
                        <option value="澎湖縣">澎湖縣</option>
                        <option value="金門縣">金門縣</option>
                        <option value="連江縣">連江縣</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="district">區域:</label>
                      <select
                        className="form-control"
                        id="district"
                        value={selectedDistrict}
                        {...register("district", {
                          // 更新所選區域
                          onChange: (e) => setSelectedDistrict(e.target.value),
                        })}
                      >
                        <option value="">請選擇區域</option>

                        {populateDistricts().map((district) => (
                          <option key={district} value={district}>
                            {district}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="text-center mt-5">
                      <input
                        type="submit"
                        className="btn btn-lg custom-button px-5"
                        // onClick={goToSecond}
                        value={"下一頁"}
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default SubsidySearch;
