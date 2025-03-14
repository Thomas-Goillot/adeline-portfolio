<motion.section
id="competences"
initial={{ opacity: 0, y: 50 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.6 }}
className="max-w-7xl mx-auto py-16 px-4"
>
<h2 className="text-3xl font-bold mb-6 text-dark-blue">
  <FontAwesomeIcon icon={faNetworkWired} className="mr-2" />
  {content.competences.title}
</h2>

<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
  {content.competences.sections.map((section, index) => {
    if (section.title === "Logiciels" || section.title === "Compétences techniques") {
      return (
        <div key={index} className="bg-white shadow-md rounded p-6">
          <h3 className="text-xl font-semibold mb-2">{renderSectionIcon(section.icon)} {section.title}</h3>
          <HorizontalScrollCarousel items={section.items} />
        </div>
      );
    } else {
      return (
        <div key={index} className="bg-white shadow-md rounded p-6">

          <h3 className="text-xl font-semibold mb-2">{renderSectionIcon(section.icon)} {section.title}</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            {section.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      );
    }
  })}
</div>
</motion.section>