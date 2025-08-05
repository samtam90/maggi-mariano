import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Perugia",
  canonical: links.servizi["disidratazione-fanghi"]["perugia"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Perugia",
  locationNames: { label: "Perugia", href: "perugia" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
