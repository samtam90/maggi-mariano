import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Preci",
  canonical: links.servizi["disidratazione-fanghi"]["preci"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Preci",
  locationNames: { label: "Preci", href: "preci" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
