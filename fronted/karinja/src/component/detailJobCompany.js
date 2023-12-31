import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDeleteJobCompany, useJobCompany } from "../hook/jobCompany";


function DetailJobCompany() {
  const { data, loading } = useJobCompany();

  const [change, setChange] = useState(false);
const {data : deleteApply} = useDeleteJobCompany(change)

 

  return (
    <div class="bg-white rounded-lg shadow-md p-8">
    <div class="flex justify-between items-start border-b-2 pb-4 mb-4">
      <h2 class="text-xl font-bold">{data?.title}</h2>
      <h3 class="text-lg font-semibold">{data?.category?.title}</h3>
    </div>
    <div class="flex items-center space-x-4 mb-6">
      {data.company?.avatar
        ? <img src={data?.company?.avatar} alt={data?.company?.name_en} class="w-12 h-12 rounded-full object-cover"/>
        : <div class="w-12 h-12 rounded-full bg-gray-200"></div>
      }
      <div>
        <h4 class="text-xl font-semibold">{data?.company?.name_en}</h4>
        <p class="text-gray-600">{data?.company?.address}</p>
      </div>
    </div>
    <div class="flex items-center justify-between border-b-2 pb-4 mb-4">
      <p class="text-lg font-semibold">{data?.salary} $</p>
      <p class="text-sm text-gray-600">Monthly</p>
    </div>
    <div class="space-y-4 mb-6">
      <h4 class="text-xl font-semibold">Job Description</h4>
      <p class="text-gray-600">{data?.description}</p>
    </div>
    <div class="space-y-4 mb-6">
      <h4 class="text-xl font-semibold">Required Skills</h4>
      <ul class="list-disc list-inside text-gray-600">
      {data?.skills
            ?.replace("[", "")
            ?.replace("]", " ")
            ?.replace("[", " ")
            ?.replaceAll("'", "")
            ?.split(",")
            .map((i) => i?.replaceAll(" ", ","))}
      </ul>
    </div>
    <div class="space-y-4 mb-6">
      <h4 class="text-xl font-semibold">Required Documents</h4>
      <p class="text-gray-600">{data?.educations}</p>
    </div>
    <div class="space-y-4 mb-6">
      <h4 class="text-xl font-semibold">About the Company</h4>
      <p class="text-gray-600">{data?.about}</p>
    </div>
    <div class="flex justify-between mb-4">
      <p class="text-gray-600">Sex: {data?.sex === 1 ? 'Male' : 'Female'}</p>
      <p class="text-gray-600">Military Status: 
        {data?.military_status === 0 ? 'Concluded' :
        data?.military_status === 1 ? 'Done' :
        data?.military_status === 2 ? 'Exempt' :
        'No Matter'}
      </p>
    </div>
    <div class="flex items-center space-x-4">
      <button onClick={()=>setChange(true)} class="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg">delete Now</button>
     
    </div>
  </div>
  );

}
export default DetailJobCompany;
