import { Card, Col, Row } from 'antd'
import { memo } from 'react'
import "../reusableComponent/reusable.css"
import "../components/user/user.css"

export const EdenCard = memo(({ id, iconName, title, desc, isSelected, onClick }) => {
    
    return (
        <div className={`card txt-left ${isSelected? 'card-active-border': 'card-unactive-border'}`}>
            <Card
                hoverable
                className='card-width'
                onClick={() => {onClick()}}
            >
                <p>{iconName}</p>
                <strong>{title}</strong>
                <p>{desc}</p>
            </Card>
        </div>
    )
})