import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { Input, Button } from 'antd'
import { UserContainer } from "../../reusableComponent/UserContainer"
import { UserHeader } from "../../reusableComponent/UserHeader"
import { setGeneric } from "../../redux/action/setGeneric"
import "../user/user.css"
import "../../reusableComponent/reusable.css"

export const UserComponent = () => {
    const dispatch = useDispatch()
    const [fullNameState, setFullNameState] = useState('')
    const [displayNameState, setDisplayNameState] = useState('')
    const genericState = useSelector((state) => state.generic)
    const { stepIndex=0 } = genericState

    let navigate = useNavigate();

    useEffect(()=>{
        dispatch(setGeneric({'stepIndex': stepIndex}))
    }, [])

    const createUser = () => {
        dispatch(setGeneric({
            'fullName': fullNameState,
            'displayName': displayNameState,
            'stepIndex': stepIndex+1
        }))
        navigate('/workspace')
    }

    const onChangeFullName = (name) => {
        setFullNameState(name)
    }

    const onChangeDisplayName = (name) => {
        setDisplayNameState(name)
    }
    
    return (
        <>
            <UserHeader />
            <UserContainer
                title="Welcome! First things first..."
                subTitle="You can always change them later."
                Modal={
                    <>
                        <div id="user-full-name" className="user-modal-margin-bottom">
                            <h5 className="grey modal-txt-margin txt-left"><strong>Full Name</strong></h5>
                            <Input placeholder="Steve Jobs" className="input-border-radius" onChange={(e) => onChangeFullName(e.target.value)}/>
                        </div>
                        <div id="user-display-name" className="user-modal-margin-bottom">
                            <h5 className="grey modal-txt-margin txt-left"><strong>Display Name</strong></h5>
                            <Input placeholder="Steve" className="input-border-radius" onChange={(e) => onChangeDisplayName(e.target.value)}/>
                        </div>
                        <div id="user-footer">
                            <Button 
                                className="create-workspace" 
                                onClick={createUser} 
                                disabled={displayNameState && fullNameState ? false : true}>
                                    Create Workspace
                            </Button>
                        </div>
                    </>
                }
            />
        </>
    )
}