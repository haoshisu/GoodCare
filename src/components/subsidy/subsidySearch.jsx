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
      case "基隆市":
        districts = ["仁愛區", "中正區", "安樂區", "信義區"];
        break;

      case "新竹市":
        districts = ["東區", "北區", "香山區"];
        break;

      case "新竹縣":
        districts = [
          "竹北市",
          "竹東鎮",
          "湖口鄉",
          "新豐鄉",
          "芎林鄉",
          "橫山鄉",
          "北埔鄉",
          "寶山鄉",
          "峨眉鄉",
          "尖石鄉",
          "北埔鄉",
        ];
        break;

      case "苗栗縣":
        districts = [
          "苗栗市",
          "頭份市",
          "竹南鎮",
          "獅潭鄉",
          "後龍鎮",
          "通霄鎮",
          "苑裡鎮",
          "卓蘭鎮",
          "大湖鄉",
          "南庄鄉",
          "頭屋鄉",
          "公館鄉",
          "銅鑼鄉",
          "三義鄉",
          "西湖鄉",
          "造橋鄉",
          "南投縣",
          "南投市",
          "草屯鎮",
          "竹山鎮",
          "集集鎮",
          "名間鄉",
          "鹿谷鄉",
          "中寮鄉",
          "魚池鄉",
          "國姓鄉",
          "水里鄉",
          "信義鄉",
          "仁愛鄉",
        ];
        break;

      case "台中市":
        districts = [
          "中區",
          "東區",
          "南區",
          "西區",
          "北區",
          "北屯區",
          "西屯區",
          "南屯區",
          "太平區",
          "大里區",
          "霧峰區",
          "烏日區",
          "豐原區",
          "后里區",
          "石岡區",
          "東勢區",
          "和平區",
          "新社區",
          "潭子區",
          "大雅區",
          "神岡區",
          "大肚區",
          "沙鹿區",
          "龍井區",
          "梧棲區",
          "清水區",
          "大甲區",
          "外埔區",
          "大安區",
        ];
        break;
      case "彰化縣":
        districts = [
          "彰化市",
          "員林市",
          "和美鎮",
          "鹿港鎮",
          "溪湖鎮",
          "二林鎮",
          "田中鎮",
          "北斗鎮",
          "芬園鄉",
          "花壇鄉",
          "秀水鄉",
          "埔心鄉",
          "埔鹽鄉",
          "大村鄉",
          "永靖鄉",
          "社頭鄉",
          "二水鄉",
          "田尾鄉",
          "埤頭鄉",
          "芳苑鄉",
          "大城鄉",
          "竹塘鄉",
          "溪州鄉",
        ];
        break;

      // 南投縣
      case "南投縣":
        districts = [
          "南投市",
          "草屯鎮",
          "竹山鎮",
          "埔里鎮",
          "集集鎮",
          "名間鄉",
          "鹿谷鄉",
          "中寮鄉",
          "魚池鄉",
          "國姓鄉",
          "水里鄉",
          "信義鄉",
          "仁愛鄉",
        ];
        break;

      // 雲林縣
      case "雲林縣":
        districts = [
          "斗六市",
          "斗南鎮",
          "虎尾鎮",
          "西螺鎮",
          "土庫鎮",
          "北港鎮",
          "古坑鄉",
          "大埤鄉",
          "莿桐鄉",
          "林內鄉",
          "二崙鄉",
          "崙背鄉",
          "麥寮鄉",
          "東勢鄉",
          "褒忠鄉",
          "台西鄉",
          "元長鄉",
          "四湖鄉",
          "口湖鄉",
          "水林鄉",
        ];
        break;

      // 嘉義市
      case "嘉義市":
        districts = ["東區", "西區"];
        break;

      // 嘉義縣
      case "嘉義縣":
        districts = [
          "太保市",
          "朴子市",
          "布袋鎮",
          "大林鎮",
          "民雄鄉",
          "溪口鄉",
          "新港鄉",
          "六腳鄉",
          "東石鄉",
          "義竹鄉",
          "鹿草鄉",
          "水上鄉",
          "中埔鄉",
          "竹崎鄉",
          "梅山鄉",
          "番路鄉",
          "大埔鄉",
          "阿里山鄉",
        ];
        break;

      // 台南市
      case "台南市":
        districts = [
          "中西區",
          "東區",
          "南區",
          "北區",
          "安平區",
          "安南區",
          "永康區",
          "歸仁區",
          "新化區",
          "左鎮區",
          "玉井區",
          "楠西區",
          "南化區",
          "仁德區",
          "關廟區",
          "龍崎區",
          "官田區",
          "麻豆區",
          "佳里區",
          "西港區",
          "七股區",
          "將軍區",
          "學甲區",
          "北門區",
          "新營區",
          "後壁區",
          "白河區",
          "東山區",
          "六甲區",
          "下營區",
          "柳營區",
          "鹽水區",
          "善化區",
          "大內區",
          "山上區",
          "新市區",
          "安定區",
        ];
        break;
      case "高雄市":
        districts = [
          "新興區",
          "前金區",
          "苓雅區",
          "鹽埕區",
          "鼓山區",
          "旗津區",
          "前鎮區",
          "三民區",
          "楠梓區",
          "小港區",
          "左營區",
          "仁武區",
          "大社區",
          "岡山區",
          "路竹區",
          "阿蓮區",
          "田寮區",
          "燕巢區",
          "橋頭區",
          "梓官區",
          "彌陀區",
          "永安區",
          "湖內區",
          "鳳山區",
          "大寮區",
          "林園區",
          "鳥松區",
          "大樹區",
          "旗山區",
          "美濃區",
          "六龜區",
          "內門區",
          "杉林區",
          "甲仙區",
          "桃源區",
          "那瑪夏區",
          "茂林區",
          "茄萣區",
        ];
        break;

      // 屏東縣
      case "屏東縣":
        districts = [
          "屏東市",
          "潮州鎮",
          "東港鎮",
          "恆春鎮",
          "萬丹鄉",
          "長治鄉",
          "麟洛鄉",
          "九如鄉",
          "里港鄉",
          "鹽埔鄉",
          "高樹鄉",
          "萬巒鄉",
          "內埔鄉",
          "竹田鄉",
          "新埤鄉",
          "枋寮鄉",
          "新園鄉",
          "崁頂鄉",
          "林邊鄉",
          "南州鄉",
          "佳冬鄉",
          "琉球鄉",
          "車城鄉",
          "滿州鄉",
          "枋山鄉",
          "三地門鄉",
          "霧臺鄉",
          "瑪家鄉",
          "泰武鄉",
          "來義鄉",
          "春日鄉",
          "獅子鄉",
          "牡丹鄉",
        ];
        break;

      // 基隆市
      case "基隆市":
        districts = [
          "仁愛區",
          "信義區",
          "中正區",
          "中山區",
          "安樂區",
          "暖暖區",
          "七堵區",
        ];
        break;

      // 宜蘭縣
      case "宜蘭縣":
        districts = [
          "宜蘭市",
          "羅東鎮",
          "蘇澳鎮",
          "頭城鎮",
          "礁溪鄉",
          "壯圍鄉",
          "員山鄉",
          "冬山鄉",
          "五結鄉",
          "三星鄉",
          "大同鄉",
          "南澳鄉",
        ];
        break;
      case "花蓮縣":
        districts = [
          "花蓮市",
          "鳳林鎮",
          "玉里鎮",
          "新城鄉",
          "吉安鄉",
          "壽豐鄉",
          "光復鄉",
          "豐濱鄉",
          "瑞穗鄉",
          "富里鄉",
          "秀林鄉",
          "萬榮鄉",
          "卓溪鄉",
        ];
        break;

      // 台東縣
      case "台東縣":
        districts = [
          "台東市",
          "成功鎮",
          "關山鎮",
          "長濱鄉",
          "海端鄉",
          "池上鄉",
          "東河鄉",
          "鹿野鄉",
          "延平鄉",
          "卑南鄉",
          "金峰鄉",
          "大武鄉",
          "達仁鄉",
          "綠島鄉",
          "蘭嶼鄉",
          "太麻里鄉",
        ];
        break;

      // 澎湖縣
      case "澎湖縣":
        districts = [
          "馬公市",
          "湖西鄉",
          "白沙鄉",
          "西嶼鄉",
          "望安鄉",
          "七美鄉",
        ];
        break;

      // 金門縣
      case "金門縣":
        districts = [
          "金城鎮",
          "金湖鎮",
          "金沙鎮",
          "金寧鄉",
          "烈嶼鄉",
          "烏坵鄉",
        ];
        break;

      // 連江縣
      case "連江縣":
        districts = ["南竿鄉", "北竿鄉", "莒光鄉", "東引鄉"];
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
      <div className="container col-12">
        <div className="row">
          <div className="col-md-12 text-left">
            <h1 style={{ fontWeight: "bold" }}>長照服務補助資訊專區-查詢</h1>
          </div>
        </div>
        <div className="row justify-content-center mt-4 mb-4">
          <div className="col-10">
            <div
              className="content"
              style={{ maxWidth: "100%", overflowX: "auto" }}
            >
              <h2>請填寫被照顧者之相關資訊:</h2>
              <div className="row">
                <div className="col-sm-12 col-md-7 mb-5 mt-4 d-flex justify-content-center">
                  <img
                    src={require("../../asset/images/subsidy/elder.jpg")}
                    alt="elder"
                    className="img-fluid"
                  />
                </div>

                <div className="col-sm-6 col-md-5 mb-4 mt-4 formFont">
                  <form className="mb-1 " onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group mb-4">
                      <label htmlFor="identity">
                        <h4 style={{ fontWeight: "bold" }}>身份:</h4>
                      </label>

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
                    <div className="form-group mb-4">
                      <label htmlFor="income">
                        <h4 style={{ fontWeight: "bold" }}>收入狀況:</h4>
                      </label>
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
                      <label htmlFor="disability">
                        <h4 style={{ fontWeight: "bold" }}>
                          是否持有身心障礙證明:
                        </h4>
                      </label>
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
                    {/* <div className="form-group">
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
                        <option value="新竹市">新竹市</option>
                        <option value="新竹縣">新竹縣</option>
                        <option value="苗栗縣">苗栗縣</option>
                        <option value="台中市">台中市</option>
                        <option value="彰化縣">彰化縣</option>
                        <option value="南投縣">南投縣</option>
                        <option value="雲林縣">雲林縣</option>
                        <option value="嘉義市">嘉義市</option>
                        <option value="嘉義縣">嘉義縣</option>
                        <option value="台南市">台南市</option>
                        <option value="高雄市">高雄市</option>
                        <option value="屏東縣">屏東縣</option>
                        <option value="基隆市">基隆市</option>
                        <option value="宜蘭縣">宜蘭縣</option>
                        <option value="花蓮縣">花蓮縣</option>
                        <option value="台東縣">台東縣</option>
                        <option value="澎湖縣">澎湖縣</option>
                        <option value="金門縣">金門縣</option>
                        <option value="連江縣">連江縣</option>
                      </select>
                    </div> */}
                    {/* <div className="form-group">
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

                    </div> */}
                    <div className="form-group mt-5">&nbsp;</div>
                    <div className="text-center mt-4 ">
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
