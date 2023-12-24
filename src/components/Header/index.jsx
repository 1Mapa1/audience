import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import { Img, Text} from "components";
import { useUser } from "hooks/UserContext";

const Header = (shadow) => {
    const {user, setUserData } = useUser();
    const [showActions, setShowActions] = useState(false);
    function handleLogout() {
        setUserData(null)
        localStorage.clear()
    }
    return (
        <>
            <header className={"absolute flex inset-x-[0] items-center justify-center mx-auto top-[0]"}>
                <div className={"bg-white-A700 flex flex-row sm:gap-10 items-center p-5 rounded-bl-[20px] rounded-br-[20px] header-block" + (shadow ? " shadow-md": "")}>
                    <Link to="/">
                        <Img
                            className="mb-[9px] ml-1.5 sm:ml-[0] object-cover img-logo"
                            src="images/img_image1.png"
                            alt="imageOne"
                        />
                    </Link>
                    <div className="flex gap-[10px]">
                        
                        
                        { user.data ? (<div onMouseEnter={() => setShowActions(true)}
                                    onMouseLeave={() => setShowActions(false)} className="user-header">
                            
                                <Text
                                    className="text-light_blue-800 text-logo"
                                    size="txtInterSemiBold20"
                                    
                                >
                                    {user.data.full_user_name}
                                </Text>
                                {showActions && (
                                    <div className="dropdown-menu">
                                        <ul>
                                            <li><Link to="/">Панель администратора</Link></li>
                                            <li><Link to="/Reservation">Забронировать</Link></li>
                                            <li><Link to="/MyReservation">Мои брони</Link></li>
                                            <li><Link to="/EditAudiences">Аудитории</Link></li>
                                            <li><Link to="/EditReservation">Брони</Link></li>
                                            <li><Link to="/RequestReservation">Заявки на бронь</Link></li>
                                            <li><Link to="/" onClick={handleLogout}>Выйти</Link></li>
                                        </ul>
                                    </div>
                                )}
                            </div>): (
                            <Link to="/login" >
                                <Text
                                    className="text-light_blue-800 text-logo"
                                    size="txtInterSemiBold20"
                                >
                                    Войти
                                </Text>
                                
                            </Link>
                            
                        )
                        
                        }
                        {console.log(user)}
                       
                    </div>
                </div>
          </header>
        </>
    )
}

export { Header };