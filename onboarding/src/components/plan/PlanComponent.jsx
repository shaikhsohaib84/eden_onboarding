import { memo, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setGeneric } from '../../redux/action/setGeneric'
import { UserContainer } from '../../reusableComponent/UserContainer'
import { UserHeader } from '../../reusableComponent/UserHeader'
import { EdenCard } from '../../reusableComponent/EdenCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faUsers } from '@fortawesome/free-solid-svg-icons'
import './plan.css'
import { Button } from 'antd'

export const PlanComponent = memo(() => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const genericState = useSelector((state) => state?.generic)
    const [isCardOne, setIsCardOne] = useState(true)
    const [isCardTwo, setIsCardTwo] = useState(false)
    const { stepIndex = 2 } = genericState

    useEffect(() => {
        dispatch(setGeneric({
            'stepIndex': stepIndex
        }))
    }, [])

    const onChangeCard = (selectedCardIdx=1) => {
        if(selectedCardIdx === 1 ){
            setIsCardOne(true)
            setIsCardTwo(false)
        }else{
            setIsCardOne(false)
            setIsCardTwo(true)
        }
        
        dispatch(setGeneric({
            'selectedCard': selectedCardIdx
        }))
    }

    const createPlan = () => {
        dispatch(setGeneric({
            'stepIndex': stepIndex+1
        }))
        navigate('/final')
    }

    return (
        <>
            <UserHeader />
            <UserContainer
                title="How are you planning to use Eden?"
                subTitle="We'll streamline your setup experince accordingly."
                Modal={
                    <>
                        <div className='d-flex'>
                            <EdenCard
                                id={1}
                                iconName={<FontAwesomeIcon icon={faUser} color={isCardOne ? "#764AF1" : "#73777B" } />}
                                title="For myself"
                                desc="Write better.Think more clearly.Stay organized."
                                isSelected={isCardOne}
                                onClick={() => {onChangeCard(1)}}
                            />
                            <EdenCard
                                id={2}
                                iconName={<FontAwesomeIcon icon={faUsers} color={isCardTwo ? "#764AF1": "#73777B" } />}
                                title="With my team"
                                desc={`Wikis, docs, tasks & projects, all in one place.`}
                                isSelected={isCardTwo}
                                onClick={() => {onChangeCard(2)}}
                            />
                        </div>
                        <div id="user-footer">
                            <Button
                                className="create-workspace"
                                onClick={createPlan}
                            >
                                Create Workspace
                            </Button>
                        </div>
                    </>
                }
            />
        </>
    )
})