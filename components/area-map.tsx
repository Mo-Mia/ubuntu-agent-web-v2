const areas = [
  {
    name: "Fourways",
    description:
      "A vibrant commercial and residential hub with diverse property options ranging from apartments to luxury estates.",
  },
  {
    name: "Dainfern",
    description:
      "Prestigious golf estate offering secure living with luxury homes and excellent amenities.",
  },
  {
    name: "North Riding",
    description:
      "Growing area with a mix of townhouse complexes, security estates, and freestanding homes.",
  },
  {
    name: "Midrand",
    description:
      "Rapidly developing area with business parks, residential estates, and diverse housing options.",
  },
  {
    name: "Craigavon",
    description:
      "Established residential area with well-maintained townhouse complexes and security estates, popular with families and professionals.",
  },
  {
    name: "Broadacres",
    description:
      "Sought-after area featuring spacious properties and country estates, offering a blend of rural tranquillity and urban convenience.",
  },
]

const AreaMap = () => {
  return (
    <div>
      <h3 className="heading-sm mb-6 text-center">Areas we serve in North Johannesburg</h3>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {areas.map((area) => (
          <div key={area.name} className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="heading-sm mb-2">{area.name}</h4>
            <p className="text-body-sm text-muted-foreground">{area.description}</p>
          </div>
        ))}
      </div>

      <p className="text-body text-center mt-8 text-muted-foreground">
        We also serve Olivedale, Bloubosrand, Boskruin, Sharonlea, and surrounding North Johannesburg areas.
      </p>
    </div>
  )
}

export default AreaMap
