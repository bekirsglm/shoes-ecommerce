import type { FC, ReactNode } from "react";
import { useProfile } from "../../service/auth";
import Loader from "../loader";
import { Navigate } from "react-router-dom";

interface Props {
    children: ReactNode;
    allowedRoles: ("user" | "admin")[];
}

const Protected:FC<Props> = ({children, allowedRoles}) => {
    //oturumu açık olan ullanıcın prifl bilgilerini almak
    const {user, isLoading} = useProfile();

    // kullanıcı verisi yüklenene kadar loader göster
    if(isLoading) return <Loader />;

// oturumu açık değilse login sayfasına yönlendir
// replace x sayfasından y sayfasına geçerken replace kullandıysa x geçmişten siler
if(!user) return <Navigate to="/login" replace />;

//eğer rolü yetersizse anasyfaya yönlendir
if(allowedRoles && !allowedRoles?.includes(user.role)){
    return <Navigate to="/" replace />;
}

  // yetkisi olan kullanıcı sayfa içeriğini görebilir
  return children;
};

export default Protected;