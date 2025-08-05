import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Olbia-Tempio",
  canonical: links.servizi["centrifugazione-fanghi"]["olbia-tempio"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Olbia-Tempio",
  locationNames: { label: "Olbia-Tempio", href: "olbia-tempio" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["olbia-tempio"],
      name: "Olbia-Tempio",
  }),
});
