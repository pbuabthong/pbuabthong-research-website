import Link from '@/components/Link'

export default function Contact() {
  return (
    <div className="divide-y">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Contact
        </h1>
      </div>
      <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
        <div className="xl:col-span-2 pt-8 pb-8">
          If you are interested in collaboration, please feel free to email me directly to setup a meeting.
          <h3 className="pt-6 pb-2 text-2xl font-bold leading-8 tracking-tight">
            Undergraduate students
          </h3>
          Feel free to email me to discuss possible projects
          <h3 className="pt-6 pb-2 text-2xl font-bold leading-8 tracking-tight">
            Graduate students
          </h3>
          Due to limitation from the Department of Science and Technology at NRRU,
          prospective students interested in renewable energy system will instead be enrolled
          in a 3-year Ph.D. program or a 2-year Master program at{' '}
          <a
            className="underline"
            href="https://www.adicet.cmru.ac.th"
            target="_blank"
            rel="noreferrer"
          >Asian Development College for Community Economy and Technology (adiCET)
          </a>.
          Alternatively, students are also encouraged to apply to{' '}
          <a
            className="underline"
            href="http://www.sut.ac.th"
            target="_blank"
            rel="noreferrer"
          >Suranaree University of Technology (SUT)
          </a> for their graduate programs, and I will co-advise with one of their faculty. 
          Please email me to discuss the arrangement.

        </div>
        <div className="pt-8 pb-8">
          <h3 className="pt-2 pb-2 text-2xl font-bold leading-8 tracking-tight">
            Pakpoom Buabthong
          </h3>
          <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
          </svg> <p className="px-2 text-[15px]">pakpoom.b@nrru.ac.th</p>
          </div>
          <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
          </svg>
          <p className="px-2 text-[15px]">(+66) 044-009-009 x 1120</p>
          </div>
          <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-building" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694 1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z"/>
            <path d="M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm0-2h1v1h-1V3z"/>
          </svg>
          <p className="px-2 text-[15px]">Office of Academic Services, 5th Floor, Building 9</p>
          </div>
          <p className="pt-5 text-xl font-bold">
          Mailing address:
          </p>
          <p>
          Department of Science and Technology,
          Nakhon Ratchasima Rajabhat University
          <br />
          340 Sura Narai Rd., Tambon Nai Mueng,
          Mueng, Nakhon Ratchasima,
          <br />
          Thailand 30000
          </p>

          <br />
          [TH] 340 ถ.สุรนารายณ์ ต.ในเมือง อ.เมือง จ.นครราชสีมา 30000
        </div>
      </div>
    </div>
  )
}
