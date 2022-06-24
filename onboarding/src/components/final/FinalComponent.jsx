import { memo, useEffect } from 'react'
import { UserContainer } from '../../reusableComponent/UserContainer'
import { UserHeader } from '../../reusableComponent/UserHeader'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { Button, notification } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { setGeneric } from '../../redux/action/setGeneric'
import { faSmile } from '@fortawesome/free-solid-svg-icons'
import './final.css'


export const FinalComponent = memo(() => {
    const dispatch = useDispatch()
    const genericState = useSelector((state) => state?.generic)
    const { stepIndex = 3, fullName='', displayName='', URL='', workSpaceName='' } = genericState

    useEffect(() => {
        dispatch(setGeneric({
            'stepIndex': stepIndex
        }))
    }, [])

    const openNotificationWithIcon = () => {
        notification.config({
            duration: 3,
        })
        notification.open({
            message: `${displayName} Onboarding Completed`,
            description:
            `Welcome ${fullName}.\n ${workSpaceName} is your workspace.`,
            icon: 
                <div style={{float: 'left'}}><FontAwesomeIcon icon={faSmile} color="#764AF1" /></div>,
          });
        
    };

    return (
        <>
            <UserHeader />
            <div className="circle-check">
                <FontAwesomeIcon icon={faCircleCheck} color="#764AF1" />
            </div>
            <UserContainer
                title="Congratulations, Eren!"
                subTitle="You have completed onboarding, you can start using Eden!"
                Modal={
                    <div id="user-footer">
                        <Button
                            className="create-workspace"
                            onClick={openNotificationWithIcon}
                        >
                            Launch Eden
                        </Button>
                    </div>
                }
            />
        </>
    )
})