import { memo, useEffect, useState } from 'react'
import { UserHeader } from "../../reusableComponent/UserHeader"
import { Input, Button } from 'antd'
import { UserContainer } from '../../reusableComponent/UserContainer'
import { useDispatch, useSelector } from 'react-redux'
import { setGeneric } from '../../redux/action/setGeneric'
import { useNavigate } from 'react-router-dom'
import "../../reusableComponent/reusable.css"

export const WorkSpaceComponent = memo(() => {
    const dispatch = useDispatch()
    const genericState = useSelector((state) => state.generic)
    const [ url, setUrl ] = useState('')
    const [ name, setName ] = useState('')
    const { stepIndex=1 } = genericState

    const navigate = useNavigate()

    useEffect(()=>{
        dispatch(setGeneric({'stepIndex': stepIndex}))
    }, [])

    const onChangeName = (name='') => {
        setName(name)
    }

    const onChangeURL = (url='') => {
        setUrl(url)
    }

    const createWorkspace = () => {
        dispatch(setGeneric({
            'URL': url,
            'workSpaceName': name,
            'stepIndex': stepIndex+1
        }))
        navigate('/plan')
    }

    return (
        <>
            <UserHeader />
            <UserContainer
                title="Let's set up a home for all your work"
                subTitle="You can always create another workspace later."
                Modal={
                    <>
                        <div id="user-full-name" className="user-modal-margin-bottom">
                            <h5 className="grey modal-txt-margin txt-left"><strong>Workspace Name</strong></h5>
                            <Input placeholder="Eden" className="input-border-radius" onChange={(e) => onChangeName(e.target.value)} />
                        </div>
                        <div id="user-display-name" className="user-modal-margin-bottom">
                            <h5 className="grey modal-txt-margin txt-left"><strong>{`Workspace URL(optional)`}</strong></h5>
                            <Input addonBefore="www.eden.com/" placeholder="Example" className="input-border-radius" onChange={(e) => onChangeURL(e.target.value)}/>
                        </div>
                        <div id="user-footer">
                            <Button
                                className="create-workspace"
                                onClick={createWorkspace}
                                disabled={url && name ? false : true}>
                                Create Workspace
                            </Button>
                        </div>
                    </>
                }
            />
        </>
    )
})