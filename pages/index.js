import fetch from 'isomorphic-unfetch';

const jobComponent = (props) => {
  const items = [
    {
      "required_skills": [
        "Temperature Recording: Disposable Chemical Thermometer Oral",
        "Catheter Bag – Emptying (Urinary)",
        "Care of a Patient During a Seizure",
        "Bed Bath",
        "Administration of an Enema"
      ],
      "county": "Mono",
      "zip": 93546,
      "location": "37.64,-118.96",
      "nurse_patient_ratio": "1:2",
      "job_id": 3860,
      "type": "General Acute Care",
      "work_schedule": "Night shift",
      "hospital_id": 757,
      "name": "Mammoth Hospital",
      "state": "CA",
      "created": "2020-10-24T20:04:15.502846",
      "required_credentials": [
        "DNP - Doctor of Nursing Practice",
        "CNM - Certified Nurse-Midwife"
      ],
      "department": [
        "Medicine",
        "Anesthesiology & Perioperative Medicine",
        "Head and Neck Surgery",
        "Neurosurgery",
        "Pathology & Laboratory Medicine"
      ],
      "address": "85 Sierra Park Road",
      "experience": "Internship",
      "city": "Mammoth Lakes, CA",
      "description": "Within the context of a client and family centred model of care, and in accordance with the Mission, Vision, Values and strategic directions of Providence Health Care, the person promotes a safe, respectful, and civil working environment for patients, residents, families, visitors and staff",
      "job_title": "LPN Charge Nurse",
      "hours": [
        10
      ],
      "salary_range": [
        22.22,
        33.32
      ],
      "job_type": "Part-time"
    },
    {
      "required_skills": [
        "Nutritional Assessment",
        "Safe disposal of waste, sharps, linen and equipment",
        "Ear Drops – Instillation",
        "Medication Administration: Intramuscular Injection (Child)",
        "Communication Skills in Mental Health Nursing"
      ],
      "county": "Mono",
      "zip": 93546,
      "location": "37.64,-118.96",
      "nurse_patient_ratio": "1:6",
      "job_id": 3864,
      "type": "General Acute Care",
      "work_schedule": "Night shift",
      "hospital_id": 757,
      "name": "Mammoth Hospital",
      "state": "CA",
      "created": "2020-11-01T20:04:15.504569",
      "required_credentials": [
        "CNA - Certified Nursing Assistant",
        "CNM - Certified Nurse-Midwife"
      ],
      "department": [
        "Surgery",
        "Pathology & Laboratory Medicine",
        "Family Medicine",
        "Neurology",
        "Head and Neck Surgery"
      ],
      "address": "85 Sierra Park Road",
      "experience": "Junior",
      "city": "Mammoth Lakes, CA",
      "description": "Within the context of a client and family centred model of care, and in accordance with the Mission, Vision, Values and strategic directions of Providence Health Care, the person promotes a safe, respectful, and civil working environment for patients, residents, families, visitors and staff",
      "job_title": "RN Intensive Care Unit",
      "hours": [
        8
      ],
      "salary_range": [
        39.09,
        55.43
      ],
      "job_type": "Traveler"
    },
    {
      "required_skills": [
        "Pulse Oximetry",
        "Vaginal Pessary",
        "Inhaler Technique",
        "Urine Collection 24-hour",
        "Dyspnoea (breathlessness) Nursing Management (Oncology)"
      ],
      "county": "Mono",
      "zip": 93546,
      "location": "37.64,-118.96",
      "nurse_patient_ratio": "1:2",
      "job_id": 3865,
      "type": "General Acute Care",
      "work_schedule": "Day shift",
      "hospital_id": 757,
      "name": "Mammoth Hospital",
      "state": "CA",
      "created": "2020-11-05T20:04:15.505001",
      "required_credentials": [
        "RN - Registered Nurse",
        "CNA - Certified Nursing Assistant"
      ],
      "department": [
        "Neurosurgery",
        "Pediatrics",
        "Radiology",
        "Surgery",
        "Emergency Medicine"
      ],
      "address": "85 Sierra Park Road",
      "experience": "Intermediate",
      "city": "Mammoth Lakes, CA",
      "description": "Within the context of a client and family centred model of care, and in accordance with the Mission, Vision, Values and strategic directions of Providence Health Care, the person promotes a safe, respectful, and civil working environment for patients, residents, families, visitors and staff",
      "job_title": "Oncology Nurse",
      "hours": [
        16
      ],
      "salary_range": [
        30.26,
        47.02
      ],
      "job_type": "Full-time"
    },
    {
      "required_skills": [
        "Pain Management: Non-pharmacological Measures – Guided Imagery (Child)",
        "Faeces – Obtaining a Specimen",
        "Adult Basic Life Support with Bag-Valve-Mask (BVM)",
        "Tracheal Suctioning",
        "Psychiatric Medications: Recognising Adverse Effects (Mental Health)"
      ],
      "county": "Mono",
      "zip": 93546,
      "location": "37.64,-118.96",
      "nurse_patient_ratio": "1:1",
      "job_id": 3861,
      "type": "General Acute Care",
      "work_schedule": "Day shift",
      "hospital_id": 757,
      "name": "Mammoth Hospital",
      "state": "CA",
      "created": "2020-10-18T20:04:15.503273",
      "required_credentials": [
        "RN - Registered Nurse",
        "CNA - Certified Nursing Assistant"
      ],
      "department": [
        "Pediatrics",
        "Dental Services",
        "Rehabilitation Services",
        "Family Medicine",
        "Radiation Oncology"
      ],
      "address": "85 Sierra Park Road",
      "experience": "Junior",
      "city": "Mammoth Lakes, CA",
      "description": "Within the context of a client and family centred model of care, and in accordance with the Mission, Vision, Values and strategic directions of Providence Health Care, the person promotes a safe, respectful, and civil working environment for patients, residents, families, visitors and staff",
      "job_title": "Nursing Director",
      "hours": [
        8
      ],
      "salary_range": [
        34.66,
        52.48
      ],
      "job_type": "Full-time"
    },
    {
      "required_skills": [
        "Use of Protective Splints (Child)",
        "IV Infusion – Preparation",
        "Care of Chest Drain",
        "Patient Education: Pulse Measurement",
        "Vaginal Pessary"
      ],
      "county": "Mono",
      "zip": 93546,
      "location": "37.64,-118.96",
      "nurse_patient_ratio": "1:5",
      "job_id": 3862,
      "type": "General Acute Care",
      "work_schedule": "Day shift",
      "hospital_id": 757,
      "name": "Mammoth Hospital",
      "state": "CA",
      "created": "2020-10-25T20:04:15.503725",
      "required_credentials": [
        "CNA - Certified Nursing Assistant",
        "DNP - Doctor of Nursing Practice"
      ],
      "department": [
        "Surgery",
        "Dental Services",
        "Neurosurgery",
        "Urology",
        "Ophthalmology"
      ],
      "address": "85 Sierra Park Road",
      "experience": "Internship",
      "city": "Mammoth Lakes, CA",
      "description": "Within the context of a client and family centred model of care, and in accordance with the Mission, Vision, Values and strategic directions of Providence Health Care, the person promotes a safe, respectful, and civil working environment for patients, residents, families, visitors and staff",
      "job_title": "Infusion Therapy Nurse",
      "hours": [
        10
      ],
      "salary_range": [
        35.16,
        53.54
      ],
      "job_type": "Full-time"
    },
    {
      "required_skills": [
        "Body Temperature Measurement: Oral (Child)",
        "Peak Expiratory Flow Rate Measurement",
        "Anti-embolism Stockings – Fitting",
        "Oral Assessment",
        "Nasogastric Tube Insertion"
      ],
      "county": "Mono",
      "zip": 93546,
      "location": "37.64,-118.96",
      "nurse_patient_ratio": "1:3",
      "job_id": 3867,
      "type": "General Acute Care",
      "work_schedule": "Night shift",
      "hospital_id": 757,
      "name": "Mammoth Hospital",
      "state": "CA",
      "created": "2020-11-05T20:04:15.506064",
      "required_credentials": [
        "CNM - Certified Nurse-Midwife",
        "RN - Registered Nurse"
      ],
      "department": [
        "Orthopaedic Surgery",
        "Pediatrics",
        "Ophthalmology",
        "Medicine",
        "Dental Services"
      ],
      "address": "85 Sierra Park Road",
      "experience": "Senior",
      "city": "Mammoth Lakes, CA",
      "description": "Within the context of a client and family centred model of care, and in accordance with the Mission, Vision, Values and strategic directions of Providence Health Care, the person promotes a safe, respectful, and civil working environment for patients, residents, families, visitors and staff",
      "job_title": "Chief Nursing Officer",
      "hours": [
        10
      ],
      "salary_range": [
        48.66,
        79.7
      ],
      "job_type": "Part-time"
    },
    {
      "required_skills": [
        "Nutritional Assessment",
        "Temperature Recording: Disposable Chemical Thermometer Axilla",
        "Home Care Safety: Medications and Medical Devices",
        "Eating Disorders (Mental Health)",
        "IV Cannulation"
      ],
      "county": "Mono",
      "zip": 93546,
      "location": "37.64,-118.96",
      "nurse_patient_ratio": "1:4",
      "job_id": 3866,
      "type": "General Acute Care",
      "work_schedule": "Day shift",
      "hospital_id": 757,
      "name": "Mammoth Hospital",
      "state": "CA",
      "created": "2020-11-01T20:04:15.505483",
      "required_credentials": [
        "NP - Nurse Practitioner",
        "CRNA - Certified Registered Nurse Anesthetists"
      ],
      "department": [
        "Family Medicine",
        "Pathology & Laboratory Medicine",
        "Psychiatry & Biobehavioral Sciences",
        "Pediatrics",
        "Medicine"
      ],
      "address": "85 Sierra Park Road",
      "experience": "Senior",
      "city": "Mammoth Lakes, CA",
      "description": "Within the context of a client and family centred model of care, and in accordance with the Mission, Vision, Values and strategic directions of Providence Health Care, the person promotes a safe, respectful, and civil working environment for patients, residents, families, visitors and staff",
      "job_title": "General Nurse",
      "hours": [
        10
      ],
      "salary_range": [
        35.95,
        53.87
      ],
      "job_type": "Part-time"
    },
    {
      "required_skills": [
        "Symptom Management at End of Life",
        "Anti-embolism Stockings – Fitting",
        "Use of Protective Splints (Child)",
        "Patient Education: Temperature Measurement",
        "Hand Washing"
      ],
      "county": "Mono",
      "zip": 93546,
      "location": "37.64,-118.96",
      "nurse_patient_ratio": "1:4",
      "job_id": 3868,
      "type": "General Acute Care",
      "work_schedule": "Day shift",
      "hospital_id": 757,
      "name": "Mammoth Hospital",
      "state": "CA",
      "created": "2020-10-23T20:04:15.506734",
      "required_credentials": [
        "CNA - Certified Nursing Assistant",
        "CRNA - Certified Registered Nurse Anesthetists"
      ],
      "department": [
        "Emergency Medicine",
        "Medicine",
        "Family Medicine",
        "Neurosurgery",
        "Psychiatry & Biobehavioral Sciences"
      ],
      "address": "85 Sierra Park Road",
      "experience": "Intermediate",
      "city": "Mammoth Lakes, CA",
      "description": "Within the context of a client and family centred model of care, and in accordance with the Mission, Vision, Values and strategic directions of Providence Health Care, the person promotes a safe, respectful, and civil working environment for patients, residents, families, visitors and staff",
      "job_title": "Nurse First Assistant",
      "hours": [
        12
      ],
      "salary_range": [
        32.61,
        49.67
      ],
      "job_type": "Traveler"
    }
  ]
  
  const jobTitle = props.data.map((data) => {
    return (
    <li key={data.total_jobs_in_hospital}>{data.total_jobs_in_hospital} for {data.name}</li>
    );
  });
  const jobItems = (items) => {
    const jobDetailItems = items.map(item => {
      return (
        <li>
          <div>
            {item.job_title}
          </div>
          <div>
            {item.job_type} | {item.salary_range[0]} - {item.salary_range[1]} an hour | {item.city}
          </div>
        </li>
      )
    })
    return jobDetailItems;
  }
  return (
    <div>
      <div class="flex p-1">
        <div class="mr-64">7,753 job postings</div>
        <div class="flex">
          <div class="text-gray-400 mr-16">Sort by</div>
          <ul class="flex">
            <li class="mr-16">Location</li>
            <li class="mr-16">Role</li>
            <li class="mr-16">Department</li>
            <li class="mr-16">Education</li>
            <li class="mr-16">Experience</li>
          </ul>
        </div>
      </div>
      <div>
        <ul>{jobTitle}</ul>
        <div>
        {jobItems}
        </div>
      </div>
    </div>
  );
};

jobComponent.getInitialProps= async () => {
  const res = await fetch('http://localhost:5000/jobs');
  const data = await res.json();
  return {
    data
  }
}

export default jobComponent;
