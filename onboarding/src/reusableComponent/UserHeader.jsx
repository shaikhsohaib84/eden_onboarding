import { Layout } from "antd"
import { StepComponent } from "./StepComponent"
import "../components/user/user.css"

export const UserHeader = () => {
    return(
        <Layout style={{ backgroundColor: 'white'}}>
            <div className="header">
                <img src="static\img\logo.jpeg"></img>
                <h1 className="eden txt-family">Eden</h1>
            </div>
            <StepComponent />
        </Layout>
    )
}