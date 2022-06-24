import React, { memo } from "react"
import { Steps } from 'antd';
import { useSelector } from "react-redux";
import "../reusableComponent/reusable.css"
const { Step } = Steps;

export const StepComponent = memo(() => {
    const genericState = useSelector((state) => state?.generic)
    const { stepIndex=0 } = genericState
    return (
        <>
            <Steps current={stepIndex}  className="step-margin">
                <Step />
                <Step />
                <Step />
                <Step />
            </Steps>
        </>
    )
})