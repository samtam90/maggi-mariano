import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Casole d'Elsa",
  canonical: links.servizi["disidratazione-fanghi"]["casole-d-elsa"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Casole d'Elsa",
  locationNames: { label: "Casole d'Elsa", href: "casole-d-elsa" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["siena"],
      name: "Siena",
  }),
});
