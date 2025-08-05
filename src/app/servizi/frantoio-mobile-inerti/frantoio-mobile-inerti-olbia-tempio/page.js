import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Olbia-Tempio",
  canonical: links.servizi["frantoio-mobile-inerti"]["olbia-tempio"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Olbia-Tempio",
  locationNames: { label: "Olbia-Tempio", href: "olbia-tempio" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["olbia-tempio"],
      name: "Olbia-Tempio",
  }),
});
