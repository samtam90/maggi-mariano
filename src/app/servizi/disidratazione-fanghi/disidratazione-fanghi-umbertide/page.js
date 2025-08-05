import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Umbertide",
  canonical: links.servizi["disidratazione-fanghi"]["umbertide"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Umbertide",
  locationNames: { label: "Umbertide", href: "umbertide" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
