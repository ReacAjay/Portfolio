import React from "react";
import { Progress, Row, Col } from "antd";
// import {
//   AntDesignOutlined,
//   HighlightOutlined,
//   PictureOutlined,
//   PlayCircleOutlined
// } from "@ant-design/icons";

// import "./skills.css";

const skills = [
  {
    name: "HTML",
    percent: 100,
    icon: <span class="fa-brands fa-html5 text-6xl"></span>
  },
  {
    name: "CSS",
    percent: 100,
    icon: <span class="fa-brands fa-css3 text-6xl	"></span>
  },
  {
    name: "JavaScript",
    percent: 90,
    icon: <span class="fa-brands fa-js text-6xl	"></span>
  },
  {
    name: "React.js",
    percent: 80,
    icon: <span class="fa-brands fa-react text-6xl	"></span>
  },
  {
    name: "Vue.js",
    percent: 82,
    icon: <span class="fa-brands fa-vuejs text-6xl	"></span>
  },
  {
    name: "Node.js",
    percent: 70,
    icon: <span class="fa-brands fa-node-js text-6xl	"></span>
  },
  {
    name: "Express.js",
    percent: 70,
    icon: <span class="fa-brands fa-code text-6xl	"></span>
  },
  {
    name: "Mongo DB",
    percent: 75,
    icon: <span class="fa-brands fa-envira text-6xl	"></span>
  },
  {
    name: "MySQL",
    percent: 65,
    icon: <span class="fa-brands fa-database text-6xl	"></span>
  },
];

export const Skills = () => {
  return (
    <div className="skills-container mx-20">
      <div className="heading">
        <h1 className='text-center' style={{fontSize:40,fontWeight:600}}>Skills</h1>
        <p className='text-center mt-2' style={{fontSize:20,fontWeight:600,color:'#707070',lineHeight: 2,wordSpacing:8,}}>Specialized knowledge related to particular technologies or tools</p>
      </div>
      <Row gutter={[40, 40]} justify="center" className="py-20">
        {skills.map((skill, index) => (
          <Col key={index} xs={12} sm={12} md={8} lg={4}>
            <div className="skill-card">
              <Progress
                type="circle"
                percent={skill.percent}
                strokeColor="#FD6F00"
                trailColor="#333"
                strokeWidth={6}
                format={() => skill.icon}
                width={120}
              />
              <h3>{skill.percent}%</h3>
              <p style={{fontSize:20,fontWeight:600}}>{skill.name}</p>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

