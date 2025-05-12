
import Header from '../buy/functions/Header';
import DropDown from '../buy/functions/DropDown';
import ReceivedSupport from '../Admin/ReceivedSupport';

function AdminMainPage() {
  // (임시) 모의 데이터
  const adminName = '홍길동';
  const adminRole = '슈퍼 관리자';
  const unansweredCount = 5;

  return (
    <div className="min-h-screen bg-gray-100">
      {/* 1. 상단 헤더 */}
      <Header />

      <main className="container mx-auto px-4 py-6">
        {/* 2. 페이지 타이틀 */}
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">Admin Dashboard</h1>

        {/* 3. 현황 카드: 미답변 요청 수 & 관리자 프로필 */}
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {/* 미답변 지원 요청 건수 */}
          <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
            <span className="text-3xl font-bold text-indigo-600">{unansweredCount}</span>
            <span className="text-gray-600">미답변 지원 요청</span>
          </div>
          {/* 관리자 프로필 */}
          <div className="bg-white rounded-lg shadow p-4 flex items-center justify-between">
            <div>
              <p className="text-lg font-medium text-gray-800">{adminName}</p>
              <p className="text-sm text-gray-500">{adminRole}</p>
            </div>
            {/* 프로필 이미지가 있으면 아래처럼 */}
            <img
              src="/path/to/avatar.jpg"
              alt="Admin Avatar"
              className="h-12 w-12 rounded-full object-cover"
            />
          </div>
        </section>

        {/* 4. 필터 바 */}
        <section>
          <DropDown />
        </section>

        {/* 5. 서포트 요청 테이블 */}
        <section className="mt-6 overflow-x-auto">
          <ReceivedSupport />
        </section>
      </main>
    </div>
  );
}

export default AdminMainPage;