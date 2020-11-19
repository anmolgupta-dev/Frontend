const jobComponent = (props) => {
  const jobs = [
    {
      total_jobs_in_hospital: 8,
      name: "Mammoth Hospital",
      job_title: "LPN Charge Nurse",
    },
    {
      total_jobs_in_hospital: 7,
      name: "Fountain Valley Rgnl Hosp And Med Ctr - Euclid",
      job_title: "Certified Nurse Anesthetist",
    },
    {
      total_jobs_in_hospital: 6,
      name: "Stanislaus Surgical Hospital",
      job_title: "Plastic Surgery Nurse Practitioner",
    },
    {
      total_jobs_in_hospital: 8,
      name: "Eastside Medical Center",
      job_title: "Ambulatory Pacu Nurse",
    },
    {
      total_jobs_in_hospital: 7,
      name: "Candler County Hospital",
      job_title: "Psychiatric Nurse Practitioner",
    },
    {
      total_jobs_in_hospital: 7,
      name: "Jerold Phelps Community Hospital",
      job_title: "Scrub Nurse",
    },
    {
      total_jobs_in_hospital: 8,
      name: "Porterville Developmental Center",
      job_title: "Emergency Room Registered Nurse",
    },
    {
      total_jobs_in_hospital: 9,
      name: "Miller County Hospital",
      job_title: "Legal Nurse Consultant",
    },
    {
      total_jobs_in_hospital: 5,
      name: "Piedmont Rockdale Hospital",
      job_title: "BSN Nurse",
    },
    {
      total_jobs_in_hospital: 2,
      name: "Jefferson Hospital",
      job_title: "Cardiovascular Nurse",
    },
    {
      total_jobs_in_hospital: 4,
      name: "Union General Hospital",
      job_title: "Home Care Nurse",
    },
    {
      total_jobs_in_hospital: 5,
      name: "Tulane - Lakeside Hospital",
      job_title: "LPN Primary Care",
    },
    {
      total_jobs_in_hospital: 4,
      name: "Warm Springs Medical Center",
      job_title: "Head OR Nurse",
    },
    {
      total_jobs_in_hospital: 6,
      name: "St. James Behavioral Health Hospital",
      job_title: "Public Health Nurse",
    },
    {
      total_jobs_in_hospital: 6,
      name: "Tulane Medical Center",
      job_title: "LPN RN Telemetry",
    },
    {
      total_jobs_in_hospital: 5,
      name: "Franklin Foundation Hospital",
      job_title: "Bone Marrow Transplant Nurse",
    },
    {
      total_jobs_in_hospital: 4,
      name: "Physicians Medical Center",
      job_title: "Anesthesiology Crna",
    },
    {
      total_jobs_in_hospital: 5,
      name: "Indiana University Health Transplant",
      job_title: "Obstetrics Nurse",
    },
    {
      total_jobs_in_hospital: 6,
      name: "Abrom Kaplan Memorial Hospital",
      job_title: "Burn Unit RN",
    },
    {
      total_jobs_in_hospital: 8,
      name: "St. James Parish Hospital",
      job_title: "Assistant Nurse Manager",
    },
  ];

  const jobitem = [
    {
      required_skills: [
        "Temperature Recording: Disposable Chemical Thermometer Oral",
        "Catheter Bag – Emptying (Urinary)",
        "Care of a Patient During a Seizure",
        "Bed Bath",
        "Administration of an Enema",
      ],
      county: "Mono",
      zip: 93546,
      location: "37.64,-118.96",
      nurse_patient_ratio: "1:2",
      job_id: 3860,
      type: "General Acute Care",
      work_schedule: "Night shift",
      hospital_id: 757,
      name: "Mammoth Hospital",
      state: "CA",
      created: "2020-10-24T20:04:15.502846",
      required_credentials: [
        "DNP - Doctor of Nursing Practice",
        "CNM - Certified Nurse-Midwife",
      ],
      department: [
        "Medicine",
        "Anesthesiology & Perioperative Medicine",
        "Head and Neck Surgery",
        "Neurosurgery",
        "Pathology & Laboratory Medicine",
      ],
      address: "85 Sierra Park Road",
      experience: "Internship",
      city: "Mammoth Lakes, CA",
      description:
        "Within the context of a client and family centred model of care, and in accordance with the Mission, Vision, Values and strategic directions of Providence Health Care, the person promotes a safe, respectful, and civil working environment for patients, residents, families, visitors and staff",
      job_title: "LPN Charge Nurse",
      hours: [10],
      salary_range: [22.22, 33.32],
      job_type: "Part-time",
    },
    {
      required_skills: [
        "Nutritional Assessment",
        "Safe disposal of waste, sharps, linen and equipment",
        "Ear Drops – Instillation",
        "Medication Administration: Intramuscular Injection (Child)",
        "Communication Skills in Mental Health Nursing",
      ],
      county: "Mono",
      zip: 93546,
      location: "37.64,-118.96",
      nurse_patient_ratio: "1:6",
      job_id: 3864,
      type: "General Acute Care",
      work_schedule: "Night shift",
      hospital_id: 757,
      name: "Mammoth Hospital",
      state: "CA",
      created: "2020-11-01T20:04:15.504569",
      required_credentials: [
        "CNA - Certified Nursing Assistant",
        "CNM - Certified Nurse-Midwife",
      ],
      department: [
        "Surgery",
        "Pathology & Laboratory Medicine",
        "Family Medicine",
        "Neurology",
        "Head and Neck Surgery",
      ],
      address: "85 Sierra Park Road",
      experience: "Junior",
      city: "Mammoth Lakes, CA",
      description:
        "Within the context of a client and family centred model of care, and in accordance with the Mission, Vision, Values and strategic directions of Providence Health Care, the person promotes a safe, respectful, and civil working environment for patients, residents, families, visitors and staff",
      job_title: "RN Intensive Care Unit",
      hours: [8],
      salary_range: [39.09, 55.43],
      job_type: "Traveler",
    },
    {
      required_skills: [
        "Pulse Oximetry",
        "Vaginal Pessary",
        "Inhaler Technique",
        "Urine Collection 24-hour",
        "Dyspnoea (breathlessness) Nursing Management (Oncology)",
      ],
      county: "Mono",
      zip: 93546,
      location: "37.64,-118.96",
      nurse_patient_ratio: "1:2",
      job_id: 3865,
      type: "General Acute Care",
      work_schedule: "Day shift",
      hospital_id: 757,
      name: "Mammoth Hospital",
      state: "CA",
      created: "2020-11-05T20:04:15.505001",
      required_credentials: [
        "RN - Registered Nurse",
        "CNA - Certified Nursing Assistant",
      ],
      department: [
        "Neurosurgery",
        "Pediatrics",
        "Radiology",
        "Surgery",
        "Emergency Medicine",
      ],
      address: "85 Sierra Park Road",
      experience: "Intermediate",
      city: "Mammoth Lakes, CA",
      description:
        "Within the context of a client and family centred model of care, and in accordance with the Mission, Vision, Values and strategic directions of Providence Health Care, the person promotes a safe, respectful, and civil working environment for patients, residents, families, visitors and staff",
      job_title: "Oncology Nurse",
      hours: [16],
      salary_range: [30.26, 47.02],
      job_type: "Full-time",
    },
    {
      required_skills: [
        "Pain Management: Non-pharmacological Measures – Guided Imagery (Child)",
        "Faeces – Obtaining a Specimen",
        "Adult Basic Life Support with Bag-Valve-Mask (BVM)",
        "Tracheal Suctioning",
        "Psychiatric Medications: Recognising Adverse Effects (Mental Health)",
      ],
      county: "Mono",
      zip: 93546,
      location: "37.64,-118.96",
      nurse_patient_ratio: "1:1",
      job_id: 3861,
      type: "General Acute Care",
      work_schedule: "Day shift",
      hospital_id: 757,
      name: "Mammoth Hospital",
      state: "CA",
      created: "2020-10-18T20:04:15.503273",
      required_credentials: [
        "RN - Registered Nurse",
        "CNA - Certified Nursing Assistant",
      ],
      department: [
        "Pediatrics",
        "Dental Services",
        "Rehabilitation Services",
        "Family Medicine",
        "Radiation Oncology",
      ],
      address: "85 Sierra Park Road",
      experience: "Junior",
      city: "Mammoth Lakes, CA",
      description:
        "Within the context of a client and family centred model of care, and in accordance with the Mission, Vision, Values and strategic directions of Providence Health Care, the person promotes a safe, respectful, and civil working environment for patients, residents, families, visitors and staff",
      job_title: "Nursing Director",
      hours: [8],
      salary_range: [34.66, 52.48],
      job_type: "Full-time",
    },
    {
      required_skills: [
        "Use of Protective Splints (Child)",
        "IV Infusion – Preparation",
        "Care of Chest Drain",
        "Patient Education: Pulse Measurement",
        "Vaginal Pessary",
      ],
      county: "Mono",
      zip: 93546,
      location: "37.64,-118.96",
      nurse_patient_ratio: "1:5",
      job_id: 3862,
      type: "General Acute Care",
      work_schedule: "Day shift",
      hospital_id: 757,
      name: "Mammoth Hospital",
      state: "CA",
      created: "2020-10-25T20:04:15.503725",
      required_credentials: [
        "CNA - Certified Nursing Assistant",
        "DNP - Doctor of Nursing Practice",
      ],
      department: [
        "Surgery",
        "Dental Services",
        "Neurosurgery",
        "Urology",
        "Ophthalmology",
      ],
      address: "85 Sierra Park Road",
      experience: "Internship",
      city: "Mammoth Lakes, CA",
      description:
        "Within the context of a client and family centred model of care, and in accordance with the Mission, Vision, Values and strategic directions of Providence Health Care, the person promotes a safe, respectful, and civil working environment for patients, residents, families, visitors and staff",
      job_title: "Infusion Therapy Nurse",
      hours: [10],
      salary_range: [35.16, 53.54],
      job_type: "Full-time",
    },
    {
      required_skills: [
        "Body Temperature Measurement: Oral (Child)",
        "Peak Expiratory Flow Rate Measurement",
        "Anti-embolism Stockings – Fitting",
        "Oral Assessment",
        "Nasogastric Tube Insertion",
      ],
      county: "Mono",
      zip: 93546,
      location: "37.64,-118.96",
      nurse_patient_ratio: "1:3",
      job_id: 3867,
      type: "General Acute Care",
      work_schedule: "Night shift",
      hospital_id: 757,
      name: "Mammoth Hospital",
      state: "CA",
      created: "2020-11-05T20:04:15.506064",
      required_credentials: [
        "CNM - Certified Nurse-Midwife",
        "RN - Registered Nurse",
      ],
      department: [
        "Orthopaedic Surgery",
        "Pediatrics",
        "Ophthalmology",
        "Medicine",
        "Dental Services",
      ],
      address: "85 Sierra Park Road",
      experience: "Senior",
      city: "Mammoth Lakes, CA",
      description:
        "Within the context of a client and family centred model of care, and in accordance with the Mission, Vision, Values and strategic directions of Providence Health Care, the person promotes a safe, respectful, and civil working environment for patients, residents, families, visitors and staff",
      job_title: "Chief Nursing Officer",
      hours: [10],
      salary_range: [48.66, 79.7],
      job_type: "Part-time",
    },
    {
      required_skills: [
        "Nutritional Assessment",
        "Temperature Recording: Disposable Chemical Thermometer Axilla",
        "Home Care Safety: Medications and Medical Devices",
        "Eating Disorders (Mental Health)",
        "IV Cannulation",
      ],
      county: "Mono",
      zip: 93546,
      location: "37.64,-118.96",
      nurse_patient_ratio: "1:4",
      job_id: 3866,
      type: "General Acute Care",
      work_schedule: "Day shift",
      hospital_id: 757,
      name: "Mammoth Hospital",
      state: "CA",
      created: "2020-11-01T20:04:15.505483",
      required_credentials: [
        "NP - Nurse Practitioner",
        "CRNA - Certified Registered Nurse Anesthetists",
      ],
      department: [
        "Family Medicine",
        "Pathology & Laboratory Medicine",
        "Psychiatry & Biobehavioral Sciences",
        "Pediatrics",
        "Medicine",
      ],
      address: "85 Sierra Park Road",
      experience: "Senior",
      city: "Mammoth Lakes, CA",
      description:
        "Within the context of a client and family centred model of care, and in accordance with the Mission, Vision, Values and strategic directions of Providence Health Care, the person promotes a safe, respectful, and civil working environment for patients, residents, families, visitors and staff",
      job_title: "General Nurse",
      hours: [10],
      salary_range: [35.95, 53.87],
      job_type: "Part-time",
    },
    {
      required_skills: [
        "Symptom Management at End of Life",
        "Anti-embolism Stockings – Fitting",
        "Use of Protective Splints (Child)",
        "Patient Education: Temperature Measurement",
        "Hand Washing",
      ],
      county: "Mono",
      zip: 93546,
      location: "37.64,-118.96",
      nurse_patient_ratio: "1:4",
      job_id: 3868,
      type: "General Acute Care",
      work_schedule: "Day shift",
      hospital_id: 757,
      name: "Mammoth Hospital",
      state: "CA",
      created: "2020-10-23T20:04:15.506734",
      required_credentials: [
        "CNA - Certified Nursing Assistant",
        "CRNA - Certified Registered Nurse Anesthetists",
      ],
      department: [
        "Emergency Medicine",
        "Medicine",
        "Family Medicine",
        "Neurosurgery",
        "Psychiatry & Biobehavioral Sciences",
      ],
      address: "85 Sierra Park Road",
      experience: "Intermediate",
      city: "Mammoth Lakes, CA",
      description:
        "Within the context of a client and family centred model of care, and in accordance with the Mission, Vision, Values and strategic directions of Providence Health Care, the person promotes a safe, respectful, and civil working environment for patients, residents, families, visitors and staff",
      job_title: "Nurse First Assistant",
      hours: [12],
      salary_range: [32.61, 49.67],
      job_type: "Traveler",
    },
  ];

  const jobDescription = (jobItems) => {
    const description = jobItems.description;
    return (
      <div>
        <div class="w-full flex pb-2">
          <div class="w-1/3 font-bold">Description:</div>
          <div class="w-1/3">urinology</div>
        </div>
        <div class="w-full flex pb-2">
          <div class="w-1/3 font-bold">Hours/shifts</div>
          <div class="w-1/3">
            {jobItems.hours} / {jobItems.work_schedule}
          </div>
        </div>
        <div class="w-full flex pb-2">
          <div class="w-1/3 font-bold">Summary:</div>
          <div class="w-1/3">{jobItems.description}</div>
          <div class="float-right w-1/3 pl-48">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Job details
            </button>
            <div class="pl-6">
              <button class="mt-5 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                Button
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const jobItems = (items) => {
    const jobDetailItems = items.map((item) => {
      return (
        <li class="mt-5 my-4 pb-1 border-b">
          <div>
            <div class="font-bold">{item.job_title}</div>
            <div class="float-right">3 weaks ago</div>
          </div>
          <div class="pt-1 bottom-b pb-8">
            {item.job_type} | {item.salary_range[0]} - {item.salary_range[1]} an
            hour | {item.city}
          </div>
          {jobDescription(item)}
        </li>
      );
    });
    return jobDetailItems;
  };

  const jobTitle = jobs.map((data) => {
    return (
      <div>
        <li class="mt-16 my-4 pb-1 border-b" key={data.total_jobs_in_hospital}>
          {data.total_jobs_in_hospital} for {data.name}
        </li>
        <div>{jobItems(jobitem)}</div>
      </div>
    );
  });

  return (
    <div>
      <div class="flex p-1 pt-5">
        <div class="mr-64">7,753 job postings</div>
        <div class="flex">
          <div class="text-gray-400 ml-5 mr-5">Sort by</div>
          <ul class="flex">
            <li class="mr-5">Location</li>
            <li class="mr-5">Role</li>
            <li class="mr-5">Department</li>
            <li class="mr-5">Education</li>
            <li class="mr-5">Experience</li>
          </ul>
        </div>
      </div>
      <div>
        <ul>{jobTitle}</ul>
        {/* <ul>{jobItems(items)}</ul> */}
      </div>
    </div>
  );
};

export default jobComponent;
