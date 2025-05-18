import { useNavigate } from "react-router-dom";
import Header from "../functions/Header";

function HyundaiIoniq() {
  const navigate = useNavigate();

  return (
    <div>
      <div>{Header()}</div>

      <div className="flex flex-col md:flex-row items-start justify-between mt-10 mb-0 bg-white px-12 py-6 ">
        {/* 왼쪽 텍스트 영역 */}
        <div className="flex-1 space-y-10">
          <span className="text-lg bg-blue-600 text-white px-4 py-1 rounded">NEW</span>
          <h1 className="text-6xl font-bold">아이오닉 9</h1>

          <a href="#" className="text-lg text-blue-700 underline">
            자세히 보기 &gt;
          </a>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-lg text-gray-700 mt-8">
            <div>
              <div className="font-bold text-xl">6,715 만원~</div>
              <div className="text-sm">(세제 혜택 후 가격)</div>
            </div>
            <div>
              <div className="text-gray-500 text-xl">(7,073 만원~)</div>
              <div className="text-sm">(세제 혜택 전 가격)</div>
            </div>
            <div>
              <div className="font-bold text-xl">~4.3 km/kWh</div>
              <div className="text-sm">연비</div>
            </div>
            <div>
              <div className="font-bold text-xl">6/7 명</div>
              <div className="text-sm">승차 인원</div>
            </div>
            <div>
              <div className="font-bold text-xl">-</div>
              <div className="text-sm">배기량</div>
            </div>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-8">
            <button className="bg-blue-900 text-white px-10 py-5 rounded text-xl">구매 상담 신청</button>
            <button className="bg-blue-900 text-white px-10 py-5 rounded text-xl">내 차 만들기</button>
            <button className="bg-blue-900 text-white px-10 py-5 rounded text-xl">시승 신청</button>
          </div>
        </div>

        {/* 오른쪽 차량 이미지 */}
        <div className="flex-1 mt-12 md:mt-0 mb-0 flex justify-center">
          <img
            src="../Image/Estimate/Hyundai/Ioniq/ioniq.png"
            alt="아이오닉 9"
            className="max-w-[700px] w-full h-auto"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-start justify-between mt-20 mb-0 bg-white px-12 py-6 ">
        {/* 왼쪽 내부 색상 선택 영역 */}
        <div className="flex-1 space-y-6">
          <h3 className="text-3xl font-semibold text-gray-600">차량 내부 색상</h3>
          <p className="text-lg text-gray-700">
            다양한 감성의 인테리어 색상을 선택해보세요.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-gray-800">
            <div className="border p-4 rounded shadow hover:shadow-lg cursor-pointer">
              <div className="text-xl font-bold">블랙 모노톤</div>
              <div className="text-sm text-gray-500">고급스러운 기본 스타일</div>
            </div>
            <div className="border p-4 rounded shadow hover:shadow-lg cursor-pointer">
              <div className="text-xl font-bold">다크 그레이 투톤</div>
              <div className="text-sm text-gray-500">스포티한 감성</div>
            </div>
            <div className="border p-4 rounded shadow hover:shadow-lg cursor-pointer">
              <div className="text-xl font-bold">화이트/블루</div>
              <div className="text-sm text-gray-500">모던하고 세련된 느낌</div>
            </div>
          </div>
        </div>

        {/* 오른쪽 내부 이미지 */}
        <div className="flex-1 mt-12 md:mt-0 mb-0 flex justify-center">
          <img
            src='../Image/Estimate/Hyundai/Sonata/sonataInterior.png'
            alt="아이오닉 9 실내"
            className="max-w-[700px] w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default HyundaiIoniq;
