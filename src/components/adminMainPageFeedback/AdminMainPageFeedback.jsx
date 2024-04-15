/** @jsxImportSource @emotion/react */ // aside css
import { useQuery } from "react-query";
import * as s from "./style";
import { PieChart, Pie, ResponsiveContainer } from 'recharts';
import { getFeedbackRequest } from "../../apis/api/feedback";
import { useState } from "react";


function AdminMainPageFeedback() {
      const [ feedbackCount, setFeedbackCount ] = useState(0)

      const getcountQuery = useQuery(["getcountQuery"], () => getFeedbackRequest, {
        retry: 0,
        refetchOnWindowFocus: false,
        onSuccess: (response) => {
          setFeedbackCount(())
        }
      )}

    
      const data01 = [
        {
          "name": "맛없음",
          "value": 2400
        },
        {
          "name": "보통",
          "value": 4567
        },
        {
          "name": "맛있음",
          "value": 1398
        },
      ];

      const data02 = [
        {
          "name": "적음",
          "value": 3000
        },
        {
          "name": "적당함",
          "value": 4567
        },
        {
          "name": "많음",
          "value": 1398
        },
      ];

      const data03 = [
        {
          "name": "불친절함",
          "value": 3000
        },
        {
          "name": "보통",
          "value": 4567
        },
        {
          "name": "친절함",
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