import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Lisciano Niccone",
  canonical: links.servizi["centrifugazione-fanghi"]["lisciano-niccone"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Lisciano Niccone",
  locationNames: { label: "Lisciano Niccone", href: "lisciano-niccone" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
