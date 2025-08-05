import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Gubbio",
  canonical: links.servizi["disidratazione-fanghi"]["gubbio"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Gubbio",
  locationNames: { label: "Gubbio", href: "gubbio" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
