/** @jsxImportSource @emotion/react */ // aside css
import * as s from "./style";
import { PieChart, Pie, ResponsiveContainer } from 'recharts';


function AdminMainPageFeedback(props) {
    
      const data01 = [
        {
          "name": "Group A",
          "value": 2400
        },
        {
          "name": "Group B",
          "value": 4567
        },
        {
          "name": "Group C",
          "value": 1398
        },
      ];

      const data02 = [
        {
          "name": "Group A",
          "value": 3000
        },
        {
          "name": "Group B",
          "value": 4567
        },
        {
          "name": "Group C",
          "value": 1398
        },
      ];

      const data03 = [
        {
          "name": "Group A",
          "value": 3000
        },
        {
          "name": "Group B",
          "value": 4567
        },
        {
          "name": "Group C",
          "value": 3050
        },
      ];
    
      return (
        <div css={s.layout}>
            <ResponsiveContainer width="33%" height="100%" display="flex" >
                    <PieChart   width={500} height={250}>
                        <Pie data={data01} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={50} outerRadius={80} fill="#96cbe0" label />
                    </PieChart>
            </ResponsiveContainer>
            <ResponsiveContainer width="33%" height="100%" display="flex" >
                    <PieChart   width={500} height={250}>
                        <Pie data={data02} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={50} outerRadius={80} fill="#eba89c" label />
                    </PieChart>
            </ResponsiveContainer>
            <ResponsiveContainer width="33%" height="100%" display="flex" >
                    <PieChart   width={500} height={250}>
                        <Pie data={data03} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={50} outerRadius={80} fill="#87cca1" label />
                    </PieChart>
            </ResponsiveContainer>
        </div>
    );
}

export default AdminMainPageFeedback;