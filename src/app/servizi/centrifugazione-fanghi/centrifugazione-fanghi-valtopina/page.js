import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Valtopina",
  canonical: links.servizi["centrifugazione-fanghi"]["valtopina"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Valtopina",
  locationNames: { label: "Valtopina", href: "valtopina" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
