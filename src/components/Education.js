import React from 'react'
import {Row,Col} from 'antd'

export const Education = () => {
  return (
    <main className='container3 mt-8 mb-20'>
        {/* heading */}
        <div className="heading mx-14">
            <h1 className='text-center' style={{fontSize:40,fontWeight:600}}>Education</h1>
            <p className='text-center mt-2' style={{fontSize:20,fontWeight:600,color:'#707070',lineHeight: 2,wordSpacing:8,}}>Education is the process of learning and acquiring knowledge, skills, and values through instruction or experience.</p>
        </div>
        {/* education content */}
        <Row className='education-content mx-14 my-14' style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
            {/* collage */}
            <Col span={11} className='ug px-5 py-8 rounded-lg'>
                <h1 className="ug-heading text-center mb-8" style={{fontSize:22,fontWeight:500}}>B.Sc. IT (Bachelor of Science in Information Technology)</h1>
                <p style={{fontSize:18,fontWeight:600,color:'#707070',lineHeight: 2,wordSpacing:8,}}>The B.Sc. in Information Technology is a comprehensive undergraduate program designed to provide students with in-depth knowledge and practical skills in the field of computer science and information technology. The course prepares students for careers in various domains such as software development, network administration, data analysis, and IT consulting.</p>
            </Col>
            {/* higher secondary */}
            <Col span={11} className='higher-secondary px-5 py-8  rounded-lg'>
                <h1 className='higher-secondary-Heading text-center mb-8' style={{fontSize:22,fontWeight:500}}>Higher Secondary Education (11th & 12th Grade)</h1>
                <p style={{fontSize:18,fontWeight:600,color:'#707070',lineHeight: 2,wordSpacing:8,}}>The Higher Secondary Education (often referred to as 11th and 12th grade in many educational systems) is a crucial stage in a student's academic journey, where they specialize in subjects that align with their future aspirations. The content at this level not only deepens their understanding of various disciplines but also prepares them for tertiary education or career paths.</p>
            </Col>
        </Row>
       
    </main>
  )
}
