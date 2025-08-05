import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Valtopina",
  canonical: links.servizi["disidratazione-fanghi"]["valtopina"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Valtopina",
  locationNames: { label: "Valtopina", href: "valtopina" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
