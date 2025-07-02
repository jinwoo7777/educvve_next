// Supabase 인증 에러 메시지 한국어 변환
export const getAuthErrorMessage = (error) => {
  if (!error) return '알 수 없는 오류가 발생했습니다.';

  const errorMap = {
    'Email not confirmed': '이메일 인증이 완료되지 않았습니다. 이메일을 확인해주세요.',
    'Invalid login credentials': '이메일 또는 비밀번호가 올바르지 않습니다.',
    'Email link is invalid or has expired': '이메일 링크가 만료되었거나 유효하지 않습니다.',
    'User already registered': '이미 가입된 이메일 주소입니다.',
    'Unable to validate email address: invalid format': '유효하지 않은 이메일 형식입니다.',
    'Password should be at least 6 characters': '비밀번호는 최소 6자 이상이어야 합니다.',
    'Invalid email or password': '이메일 또는 비밀번호가 올바르지 않습니다.',
    'Unable to validate email address: Domain not found': '존재하지 않는 이메일 도메인입니다.',
    'User not found': '가입되지 않은 이메일 주소입니다.',
    'New password should be different from the old password': '이전 비밀번호와 다른 비밀번호를 사용해주세요.',
    'Password recovery requires an email': '이메일 주소를 입력해주세요.',
  };

  // 에러 메시지가 매핑에 있으면 변환, 없으면 원본 메시지 반환
  return errorMap[error] || error;
};

// 에러 객체에서 에러 메시지 추출
export const extractAuthError = (error) => {
  if (!error) return '알 수 없는 오류가 발생했습니다.';
  
  // Supabase 에러 객체인 경우
  if (error.message) {
    return getAuthErrorMessage(error.message);
  }
  
  // 문자열 에러인 경우
  if (typeof error === 'string') {
    return getAuthErrorMessage(error);
  }
  
  // 그 외의 경우
  return '인증 처리 중 오류가 발생했습니다. 다시 시도해주세요.';
};
