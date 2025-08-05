import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Sigillo",
  canonical: links.servizi["disidratazione-fanghi"]["sigillo"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Sigillo",
  locationNames: { label: "Sigillo", href: "sigillo" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
