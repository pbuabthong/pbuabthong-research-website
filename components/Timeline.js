import timelineData from '@/data/timelineData'

const CompanyLink = ({ name, url }) =>
  url ? (
    <a target="_blank" rel="noopener noreferrer" href={url}>
      {name}
    </a>
  ) : (
    name
  )

const TimelineItem = ({ time, role, company, companyURL, companies, companyBio, works }) => {
  const orgs = companies || (company ? [{ name: company, url: companyURL }] : [])
  return (
    <li className="relative ml-2.5 !my-0 pl-5 pb-6 border-l border-[#ca6702]">
      <div className="font-semibold leading-[18px] mb-4">{time}</div>
      <div>
        {role}{' '}
        {orgs.length ? (
          <>
            at{' '}
            {orgs.map((org, ind) => (
              <span key={org.name}>
                {ind > 0 ? ', ' : null}
                <CompanyLink {...org} />
              </span>
            ))}
          </>
        ) : null}
        {companyBio ? ` - ${companyBio}` : null}
        {works ? (
          <div className="block my-2">
            <div className="mb-2"></div>
            <div className="pl-2">
              {works.map((work, ind) => (
                <div key={ind}>- {work}</div>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </li>
  )
}

const Timeline = () => {
  return (
    <div className="timeline">
      <ul>
        {timelineData.map((item) => (
          <TimelineItem key={`${item.time}-${item.role}`} {...item} />
        ))}
      </ul>
    </div>
  )
}

export default Timeline
