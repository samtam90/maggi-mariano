import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Noleggio bagni chimici Olbia-Tempio",
  canonical: links.servizi["noleggio-bagni-chimici"]["olbia-tempio"],
});
export default withBaseProps({
  title: "Noleggio bagni chimici Olbia-Tempio",
  locationNames: { label: "Olbia-Tempio", href: "olbia-tempio" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["noleggio-bagni-chimici"],
      comuni: comuni["olbia-tempio"],
      name: "Olbia-Tempio",
  }),
});
