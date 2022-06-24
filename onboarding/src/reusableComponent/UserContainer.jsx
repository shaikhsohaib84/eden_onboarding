import { memo } from "react"
import "../reusableComponent/reusable.css"
import "../components/user/user.css"

export const UserContainer = memo(({title, subTitle, Modal}) => {
   
    return(
        <>
            <div className="user-container-txt step-margin">
                <h2 className="title no-margin">
                   {title}
                </h2>
                <h5 className="grey">
                    {subTitle}
                </h5>
            </div>
            <div className="modal">
                {Modal}
            </div>
        </>
    )
}) 