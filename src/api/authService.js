import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth, googleProvider } from "./firebase";

// 회원가입 함수
export const signUp = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    const user = userCredential.user;

    // 이메일 인증 메일 발송
    await sendEmailVerification(user);
  } catch (error) {
    console.log("회원가입에 실패하였습니다!", error.message);
  }
};

// 로그인 함수
export const signIn = async (auth, email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    // 이메일 인증 여부 확인
    if (!user.emailVerified) {
      console.log("로그인 전에 이메일 인증을 완료해주세요!");
    }
  } catch (error) {
    console.log("로그인에 실패하였습니다!", error.message);
  }
};

// 구글 로그인 함수
export const googleSignIn = async () => {
  try {
    const userCredential = await signInWithPopup(auth, googleProvider);
    const user = userCredential.user;
  } catch (error) {
    console.log("구글로그인에 실패하였습니다!", error.message);
  }
};

// 로그아웃 함수
export const logOut = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.log("로그아웃에 실패하였습니다!", error.message);
  }
};
