import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Olbia-Tempio",
  canonical: links.servizi["disidratazione-fanghi"]["olbia-tempio"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Olbia-Tempio",
  locationNames: { label: "Olbia-Tempio", href: "olbia-tempio" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["olbia-tempio"],
      name: "Olbia-Tempio",
  }),
});
