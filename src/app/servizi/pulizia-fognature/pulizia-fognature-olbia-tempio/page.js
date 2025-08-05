import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Olbia-Tempio",
  canonical: links.servizi["pulizia-fognature"]["olbia-tempio"],
});
export default withBaseProps({
  title: "Pulizia fognature Olbia-Tempio",
  locationNames: { label: "Olbia-Tempio", href: "olbia-tempio" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["olbia-tempio"],
      name: "Olbia-Tempio",
  }),
});
